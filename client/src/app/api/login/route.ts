import User from '@/app/models/user';
import { NextRequest, NextResponse } from 'next/server';
import { IUser } from '@/app/models/user';

interface ILogin {
    email: string;
    password: string;
}

export async function POST(req: NextRequest, res: NextResponse){
    try {
        const body:ILogin = await req.json()
        const findUser = await User.find({ email: body.email });
        const userData = findUser[0]
        if(!userData){
            return NextResponse.json({message: 'User not created'}, {status: 500})
        }
        else if(userData.email !== body.email || userData.password !== body.password){
            return NextResponse.json({message: 'Wrong credentials'}, {status: 500})
        }

        return NextResponse.json({user: userData}, {status: 200})
    } 
    catch (err: any) {
        console.error('Error creating user:', err);
        return NextResponse.json({ status: 500 });
    }
}