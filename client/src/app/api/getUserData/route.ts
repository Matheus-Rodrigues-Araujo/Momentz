import User from '@/app/models/user';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(){
   const getUserData = User.find()

}