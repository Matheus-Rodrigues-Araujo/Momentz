import Post from "@/app/models/post";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE_NAME } from "@/constants";
import { verify, JwtPayload } from "jsonwebtoken";

interface DecodedToken extends JwtPayload {
  userId: string;
}

export async function GET() {
  try {
    const posts = await Post.aggregate([
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
          "content": 1,
          "likes": 1,
          "user.username": 1,
          "user.profileImage": 1,
        },
      },
      
    ]).then(
      result => result.reverse()
    )

    if (!posts) {
      return NextResponse.json({ posts: [] }, { status: 403 });
    }

    return new Response(JSON.stringify({ posts: posts }), { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME) || null;

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { value } = token;
  const SECRET = process.env.JWT_SECRET || "";

  try {
    const body = await request.json();
    const { content } = body;
    const decodedToken = verify(value, SECRET) as DecodedToken;

    if (!decodedToken || !decodedToken.userId) {
      return NextResponse.json({ message: "Invalid Token" }, { status: 403 });
    }

    const { userId } = decodedToken;

    await Post.create({
      authorId: userId,
      content: content,
    });

    return NextResponse.json({ message: "Post Created" }, { status: 201 });
  } catch (err: any) {
    console.error("Error creating user:", err);
    return NextResponse.json({ status: 500 });
  }
}
