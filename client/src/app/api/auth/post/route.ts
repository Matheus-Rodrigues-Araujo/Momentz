import Post from "@/app/models/post";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
    try {
        const body = await request.json()
        const { authorId, content } = body;
    
        await Post.create({
            authorId: authorId,
            content: content,
        });

        return NextResponse.json({ message: 'Post Created' }, { status: 201 });
    } catch (err: any) {
        console.error('Error creating user:', err);
        return NextResponse.json({ status: 500 });
    }
}
