import { NextRequest, NextResponse } from "next/server";
import Post from "@/app/models/post";

export async function GET(req:NextRequest, context: { params: { id: string; }; } ){
    const id = context.params.id;
    const response = await Post.findOne({_id: id})
    return NextResponse.json({ data:response })
}