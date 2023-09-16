import Image from "next/image"
import Logo from "../assets/logo.png";
// import Link from "next/link";

export default function Home()  {
  return (

    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <Image src={Logo} alt="Your Company" />
    </div>

    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm ">
      <form className="space-y-6" action="#" method="POST">
        
        
        <div>
          <label className="block text-sm font-medium leading-6 text-white-900">Email</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" required 
            className="form-input block w-full rounded-md border-0 p-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
            focus:ring-indigo-600
            sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium leading-6 text-white-900">Password</label>
          </div>
          <div className="mt-2">
            <input id="password" name="password" type="password" autoComplete="current-password" required 
            className="form-input block w-full rounded-md border-0 p-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>


        <div>
          <button type="submit" 
          className="signin-btn flex w-full  justify-center rounded-md  p-5 text-sm font-semibold uppercase leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>

      <p className="mt-10 text-center text-md text-white-500">
        Don't have an account?
        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline" style={{color: '#EFD370'}} >Create here</a>
      </p>
      <p className="mt-10 text-center text-md text-white-500">
        Forgot password?
        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline" style={{color: '#EFD370'}} >Click here</a>
      </p>
    </div>
</div>
  )
}
