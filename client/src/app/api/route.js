import User from "../(models)/user"
import Post from "../(models)/post"
import Comment from "../(models)/comment"
import Image from "../(models)/image"
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const body = await req.json()
        const userData = body.formData
        await User.create(userData)
        return NextResponse.json({message: "User created"},{status: 201})
    } catch (error) {
        return NextResponse.json({ message: "Error",error },{ status: 500 })
    }
}