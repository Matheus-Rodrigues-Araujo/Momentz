import Post from "@/app/models/post";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const isIdInArray = async (
  userId: string,
  postId: string
): Promise<boolean> => {
  const post = await Post.findById({ _id: postId });
  if (!post) {
    throw new Error("Post not found");
  }
  return post.likes.includes(userId);
};

export async function PUT(req: NextRequest, context: { params: { id: any } }) {
  try {
    const postId = context.params.id;
    const { currentUserId } = await req.json();
    const isLiked = await isIdInArray(currentUserId, postId);

    if (isLiked) {
      await Post.findByIdAndUpdate(postId, { $pull: { likes: currentUserId } });
      const post = await Post.findById(postId);
      const totalLikes = post.likes.length;
      return NextResponse.json({ totalLikes, liked: false }, { status: 200 });
    } else {
      await Post.findByIdAndUpdate(postId, { $push: { likes: currentUserId } });
      const post = await Post.findById(postId);
      const totalLikes = post.likes.length;
      return NextResponse.json({ totalLikes, liked: true }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error ocurred" }, { status: 404 });
  }
}
