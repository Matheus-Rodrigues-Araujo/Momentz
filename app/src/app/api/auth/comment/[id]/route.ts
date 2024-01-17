import { NextRequest, NextResponse } from "next/server";
import Comment from "@/app/models/comment";
import { IComment } from "@/app/models/comment";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const postId = context.params.id;
    const comment = await Comment.find({ postId: postId });
    return NextResponse.json({total: comment.length, comment}, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error receiving comment", error },
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const postId = context.params.id;
    const { userId, content } = await req.json();

    await Comment.create({
      authorId: userId,
      postId: postId,
      content: content,
    });
    return NextResponse.json({ message: "Comment created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating comment", error },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const commentId = context.params.id;
    const { userId, newContent } = await req.json();
    const comment = await Comment.findOne({ _id: commentId });
    if (userId !== String(comment.authorId)) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await Comment.findByIdAndUpdate(commentId, {
      $set: { content: newContent },
    });
    const newComment = await Comment.findById(commentId);

    return NextResponse.json({ message: "Comment updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error to update" }, { status: 500 });
  }
}
