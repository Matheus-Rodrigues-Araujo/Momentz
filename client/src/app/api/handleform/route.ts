import User from '@/app/models/user';
import { NextRequest, NextResponse } from 'next/server';
import { hash } from 'bcrypt'; 
import { sign } from 'jsonwebtoken';

interface CustomError {
    message: string;
    error?:string;
  }

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json()
    const formData = body.formData
    const {username, birthdate, email, password} = formData
    const hashedPassword = await hash(password, 10)
    
    if (!password) {
      const customError: CustomError = { message: 'Password is required' };
      return NextResponse.json(customError, { status: 400 });
    }

    await User.create({
      username: username,
      birthdate: birthdate,
      email: email,
      password: hashedPassword,
    });
      
    return NextResponse.json({ message: 'User Created' }, { status: 201 });
  } catch (err: any) {
    console.error('Error creating user:', err);
    return NextResponse.json({ status: 500 });
  }
}