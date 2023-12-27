import { NextRequest, NextResponse } from "next/server";
import Comment from "@/app/models/comment";
import { IComment } from "@/app/models/comment";

export async function POST(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try{
  const postId = context.params.id;
  const { userId, content } = await req.json();
 
  const comments:IComment = await Comment.create({
    authorId: userId,
    postId: postId,
    content: content,
  });
  return NextResponse.json({ message: "Comment created"}, {status: 200});
  }
  catch(error){
    return NextResponse.json({ message: "Error creating comment", error}, {status: 500});
  }
}
