import User from "@/app/models/user";
import Post from "@/app/models/post";
// import
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const postId = context.params.id;
  
  const data = await Post.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "authorId",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $project: {
        "content":1,
        "user.username": 1,
        "user.profileImage": 1,
      },
    },
  ]);

  return NextResponse.json({ data }, { status: 200 });
}
