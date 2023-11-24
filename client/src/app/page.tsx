import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="sm:flex w-[260px] my-10 mx-auto flex-col justify-center px-2 py-8 rounded-md border border-customYellow md:w-[500px] px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link href={'/'}>
          <Image src={Logo} alt="Your Company" className="w-auto h-50"  />
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
                className="
                form-input block w-full rounded-md border-0 p-3 text-white
                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5"
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
                className="
                form-input block w-full rounded-md border-0 p-3 text-white
                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5"
              />
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
          <Link href='/register' className="font-semibold leading-6 text-sm text-indigo-600 text-customYellow hover:text-yellow-100 underline md:text-md">Create here</Link>

        </p>
        <p className="text-sm mt-10 text-center text-gray-400 md:text-md">
          Forgot password?
          <Link href='/account/password' className="font-semibold leading-6 text-sm text-indigo-600 text-customYellow hover:text-yellow-100 underline md:text-md">Click here</Link>
        </p>
      </div>
    </div>
  );
}
