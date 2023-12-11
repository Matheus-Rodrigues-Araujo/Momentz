import User from '@/app/models/user';
import { NextRequest, NextResponse } from 'next/server';

interface CustomError {
    message: string;
    error?:string;
  }
export async function GET() {
    try {
      const user = await User.find();
      return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
      console.error('Error fetching users:', error);
      const customError: CustomError = { message: 'Users not found' };
      return NextResponse.json(customError, { status: 500 });
    }
  }
  
  export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
      // const { username, birthdate, email, password, confirmPassword } = await req.json();
      const body = await req.json()
      const {username, birthdate, email, password} = body.formData
      console.log(body)
      await User.create({
        username: username,
        birthdate: birthdate,
        email: email,
        password: password,
      });
      
      // const body = await req.json()
  
      return NextResponse.json({ message: 'User Created' }, { status: 201 });
    } catch (err: any) {
      console.error('Error creating user:', err);
      return NextResponse.json({ status: 500 });
    }
  }
