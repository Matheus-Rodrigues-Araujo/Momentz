import User from '@/app/models/user';
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        const user = await User.find()
        return NextResponse.json({user}, {status: 200})

    } catch (error) {
        return NextResponse.json({message: "Users not found", error}, {status: 500})
    }
}

export async function POST(req: NextRequest){
    try {
        const {username, birthdate, email, password} = await req.json()
    
        await User.create({
            username: username,
            birthdate: birthdate,
            email: email,
            password: password
        });
    
        return NextResponse.json({ message: "User Created" }, { status: 201 });
      } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Error", err }, { status: 500 });
      }
}