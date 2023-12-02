'use client'
import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod';
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email({message: 'Please, enter a valid email address!'}),
  password: z.string().min(6, {message: 'The password must have at least 6 characters long!'}).max(20, {message: 'The password must have a maximum of 20 characters!'})
})

export default function Home() {
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
        <Link href={'/'}>
          <Image src={Logo} alt="Your Company" className="w-auto h-50"  />
        </Link>
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={
          handleSubmit((d)=> {
            console.log(d)
            router.push('/next')
          })
        }>
          <div>
            <label className="block text-sm font-medium leading-6 text-white">Email</label>
            <div className="mt-2">
              <input
                {...register('email')}
                className="
                form-input block w-full rounded-md border-0 p-3 text-white
                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5
                "
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
                id="password"
                {...register('password')}
                className="
                form-input block w-full rounded-md border-0 p-3 text-white
                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5
                "
              />
              {errors.password?.message && <p className="text-red-600 font-bold" >{errors.password?.message.toString()}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="
              sign-btn flex w-full bg-customLightbrown justify-center
              rounded-md p-3 text-sm font-semibold uppercase leading-6
              text-white shadow-sm focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:p-5 "
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="text-sm mt-10 text-center text-gray-400 md:text-md">
          Don't have an account?
          <Link href='/register' className="font-semibold leading-6 text-sm text-indigo-600 text-yellow-100 hover:text-yellow-200 underline md:text-md">Create here</Link>
        </p>
        <p className="text-sm mt-10 text-center text-gray-400 md:text-md">
          Forgot password?
          <Link href='/account/password' className="font-semibold leading-6 text-sm text-indigo-600 text-yellow-100 hover:text-yellow-200 underline md:text-md">Click here</Link>
        </p>
      </div>
    </div>
  );
}
