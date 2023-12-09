'use client'
import Image from "next/image"
import Link from "next/link";
import Logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from 'zod'
import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { User } from "../models/user";

const birthDateSchema = z.coerce.date();
type BirthDateSchema = z.infer<typeof birthDateSchema>;

const schema = z.object({
  username: z.string().min(5, {message: 'Username must have at minimum 5 characters!'}).max(30, {message: 'Username must have at maximum 30 characters'}),
  birthdate: birthDateSchema,
  email: z.string().email({message: 'Please, enter a valid email address!'}),
  password: z.string().min(6, {message: 'The password must have at least 6 characters long!'}).max(20, {message: 'The password must have a maximum of 20 characters!'}),
  confirmPassword: z.string().min(6, {message: 'The password must have at least 6 characters long!'}).max(20, {message: 'The password must have a maximum of 20 characters!'})
}).refine((data) => {
  return data.password === data.confirmPassword;
}, {
  message: "Passwords don't match",
  path: ['Confirm']
});

export default function Register()  {

  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema)
  })

  return (

    <div className="sm:flex my-10 mx-auto flex-col justify-center px-2 py-8 rounded-md  md:w-[500px] md:bg-customGray px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <Image src={Logo} alt="Your Company" className="w-auto h-50" />
    </div>

    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm ">
      <form className="space-y-6" action="#" method="POST" onSubmit={
          handleSubmit(async(data)=> {
          //  const {username, birthdate, email, password} = data
           try {
             const response = await fetch("http://localhost:3000/api/handleform",{
              method: "GET",
              headers: {
                "content-type": "application/json"
              }
            })
            
            if(response.ok){
              console.log("Success")
              router.push('/next')
            }
            else{
              console.log("Something went wrong")
            }
            
           } catch (error) {
            console.log("error")
           }

        })
      }>
        <div>
          <label className="block text-sm font-medium leading-6 text-white">Username</label>
          <div className="mt-2">
            <input id="userName"
            {...register('username')}
            name="username"
            className="
            form-input block w-full rounded-md border-0 p-3 text-white
            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
            focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5"/>
            {errors.username?.message && <p className="text-red-600 font-bold" >{errors.username?.message.toString()}</p>}

          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-white">Birth</label>
          <div className="mt-2">
            <input
            type="date"
            {...register('birthdate')}
            name="birthdate"
             className="
                form-input block w-full rounded-md border-0 p-3 text-white
                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5"
            />
            {errors.birthdate?.message && <p className="text-red-600 font-bold" >{errors.birthdate?.message.toString()}</p>}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium leading-6 text-white">Email</label>
          <div className="mt-2">
            <input 
              id="email"
              {...register('email')}
              name="email"
              className="
              form-input block w-full rounded-md border-0 p-3 text-white
              shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
              focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5"
            />
            {errors.email?.message && <p className="text-red-600 font-bold" >{errors.email?.message.toString()}</p>}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium leading-6 text-white">Password</label>
          </div>
          <div className="mt-2">
            <input 
            type="password"
             {...register('password')}
             name="password"
              className="
              form-input block w-full rounded-md border-0 p-3 text-white
              shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
              focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5"
            />
            {errors.password?.message && <p className="text-red-600 font-bold" >{errors.password?.message.toString()}</p>}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium leading-6 text-white">Confirm Password</label>
          </div>
          <div className="mt-2">
            <input
            type="password"
            {...register('confirmPassword')}
            name="confirm-password"
            className="
            form-input block w-full rounded-md border-0 p-3 text-white
            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
            focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5"/>
            {errors.confirmPassword?.message && <p className="text-red-600 font-bold" >{errors.confirmPassword?.message.toString()}</p>}
          </div>
        </div>

        <div>
          <button type="submit" 
          className="
          sign-btn flex w-full bg-customLightbrown justify-center
          rounded-md p-3 text-sm font-semibold uppercase leading-6
          text-white shadow-sm focus-visible:outline focus-visible:outline-2
          focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:p-5">
            Sign up
          </button>
        </div>
      </form>
      <p className="text-sm mt-10 text-center text-gray-400 md:text-md">
          Already have an existing account?
        <Link href='/' className="font-semibold leading-6 text-sm text-indigo-600 text-yellow-100 hover:text-yellow-200 underline md:text-md">
          Sign In
        </Link>
      </p>
    </div>
</div>
  )
}
