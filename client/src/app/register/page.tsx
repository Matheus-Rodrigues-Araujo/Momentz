'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/logo.png';
import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = {
      username, birthdate, email, password, confirmPassword
    }
    await fetch('/api/handleform',{
      method: "POST",
      body: JSON.stringify({formData}),
      //@ts-ignore
      "Content-Type": "application/json",
    })
    .then(()=> router.push('/'))

  }

  return (
    <div className="sm:flex my-10 mx-auto flex-col justify-center px-2 py-8 rounded-md md:w-[500px] md:bg-customGray px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image src={Logo} alt="Your Company" className="w-auto h-50" />
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm ">
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-medium leading-6 text-white">Username</label>
            <div className="mt-2">
              <input
                id="userName"
                name="username"
                autoComplete='username'
                value={username}
                required
                onChange={e => setUsername(e.target.value)}
                className="form-input block w-full rounded-md border-0 p-3 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-white">Birth</label>
            <div className="mt-2">
              <input
                type="date"
                name="birthdate"
                value={birthdate}
                required
                onChange={e => setBirthdate(e.target.value)}
                className="form-input block w-full rounded-md border-0 p-3 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-white">Email</label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                value={email}
                required
                onChange={e => setEmail(e.target.value)}
                className="form-input block w-full rounded-md border-0 p-3 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-white">Password</label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                autoComplete='new-password'
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
                className="form-input block w-full rounded-md border-0 p-3 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-white">Confirm Password</label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="confirm-password"
                autoComplete='new-password'
                value={confirmPassword}
                required
                onChange={e => setConfirmPassword(e.target.value)}
                className="form-input block w-full rounded-md border-0 p-3 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="sign-btn flex w-full bg-customLightbrown justify-center rounded-md p-3 text-sm font-semibold uppercase leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:p-5"
            >
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
  );
}
