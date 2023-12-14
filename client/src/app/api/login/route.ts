import User from '@/app/models/user';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        const body = await req.json()
        const {email, password} = body.formData
        console.log(body)
        await User.create({
            email: email,
            password: password,
        });
        
        return NextResponse.json({ message: 'User Created' }, { status: 201 });
    } 
    catch (err: any) {
        console.error('Error creating user:', err);
        return NextResponse.json({ status: 500 });
    }
}
