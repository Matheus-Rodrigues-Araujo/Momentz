import User from "@/app/models/user";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import { serialize } from "cookie";
import { MAX_AGE } from "@/constants";
import { COOKIE_NAME } from "@/constants";

interface IBodyRequest {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    const SECRET = process.env.JWT_SECRET || "";
    const body: IBodyRequest = await request.json();
    const user = await User.findOne({ email: body.email });

    const comparePassword = await compare(body.password, user.password);

    if (!user || user.email !== body.email || !comparePassword) {
      return NextResponse.json(
        {
          message: "Wrong credentials",
        },
        {
          status: 401,
        }
      );
    }

    const token = jwt.sign({ userId: user._id }, SECRET, {
      expiresIn: MAX_AGE,
    });

    const Cookie_JWT = COOKIE_NAME;
    const serialized = serialize(Cookie_JWT, token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: MAX_AGE,
      path: "/",
    });

    const response = {
      message: "authenticated",
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Set-Cookie": serialized },
    });
  } catch (err: unknown) {
    console.error("Error processing login:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
