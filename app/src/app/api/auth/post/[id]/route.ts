import { NextRequest, NextResponse } from "next/server";
import Post from "@/app/models/post";

export async function GET(req:NextRequest, context: { params: { id: any; }; } ){
    const id = context.params.id;
    const data = await Post.findOne({_id: id})

    return NextResponse.json({ data })
}