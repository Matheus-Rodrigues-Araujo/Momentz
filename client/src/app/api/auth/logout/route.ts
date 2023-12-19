
import { COOKIE_NAME } from "@/constants"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(){
    cookies().delete(COOKIE_NAME)
    try{
        return NextResponse.json({message: 'Logout completed' }, {status: 200})
    }catch(error){
        console.error(error)
    }
}