import { COOKIE_NAME } from "@/constants";
import { verify, JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import User from "@/app/models/user";

interface DecodedToken extends JwtPayload {
  userId: string;
}

export async function GET(req:Request) {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME) || null;
  
  if(!token){
    return NextResponse.json({message: 'Unauthorized'}, {status: 401})
  }

  const { value } = token
  const SECRET = process.env.JWT_SECRET || "";

  try{
    const decodedToken = verify(value, SECRET) as DecodedToken;
    
    if (!decodedToken || !decodedToken.userId) {
      return NextResponse.json({ message: 'Invalid Token' }, { status: 403 });
    }

    const { userId } =  decodedToken;

    const userDocument = await User.findOne({ _id : userId });
    const { username, email, birthdate, profileImage } =  userDocument;
    const user = {username, email, birthdate, profileImage};

    return new Response(JSON.stringify({user: user}), {status: 200} );
  } catch(e){
    return NextResponse.json({message: 'Something went wrong'}, {status: 400});
  }
}