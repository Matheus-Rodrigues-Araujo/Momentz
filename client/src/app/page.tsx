/* eslint react/no-unescaped-entities */
import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[500px] max-w-[500px] my-10 mx-auto flex-col justify-center px-6 py-12 rounded-md border border-customYellow lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link href={'/'}>
          <Image src={Logo} alt="Your Company" />
        </Link>
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label className="block text-sm font-medium leading-6 text-white">Email</label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="form-input block w-full rounded-md border-0 p-5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6"
                style={{ color: 'white' }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-white">Password</label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="form-input block w-full rounded-md border-0 p-5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6"
                style={{ color: 'white' }}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="sign-btn flex w-full bg-customLightbrown justify-center rounded-md p-5 text-sm font-semibold uppercase leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-md text-gray-400">
          Don't have an account?
          <Link href='/register' className="font-semibold leading-6 text-indigo-600 text-customYellow hover:text-yellow-100 underline">Create here</Link>

        </p>
        <p className="mt-10 text-center text-md text-gray-400">
          Forgot password?
          <Link href='/account/password' className="font-semibold leading-6 text-indigo-600 text-customYellow hover:text-yellow-100 underline">Click here</Link>
        </p>
      </div>
    </div>
  );
}
