import Image from "next/image"
import Logo from "../../assets/logo.png";

export default function Register()  {
  return (

    <div className="flex min-h-[500px] max-w-[500px] my-10 mx-auto flex-col justify-center px-6 py-12 rounded-md border border-customYellow lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <Image src={Logo} alt="Your Company" />
    </div>

    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm ">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label className="block text-sm font-medium leading-6 text-white">Username</label>
          <div className="mt-2">
            <input id="userName" name="userName" type="text" autoComplete="userName" required 
            className="form-input block w-full rounded-md border-0 p-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
            focus:ring-yellow-100
            sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-white">Birthday</label>
          <div className="mt-2">
            <input id="birthday"
             name="birthday" 
             type="date"
             autoComplete="birthday"
             required 
             className="form-input block w-full rounded-md border-0 p-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
             focus:ring-yellow-100
             sm:text-sm sm:leading-6"/>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium leading-6 text-white">Email</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" required 
            className="form-input block w-full rounded-md border-0 p-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
            focus:ring-yellow-100
            sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium leading-6 text-white">Password</label>
          </div>
          <div className="mt-2">
            <input id="password" name="password" type="password" autoComplete="current-password" required 
            className="form-input block w-full rounded-md border-0 p-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium leading-6 text-white">Confirm Password</label>
          </div>
          <div className="mt-2">
            <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="confirmPassword" required 
            className="form-input block w-full rounded-md border-0 p-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6"/>
          </div>
        </div>


        <div>
          <button type="submit" 
          className="sign-btn flex w-full bg-customLightbrown justify-center rounded-md  p-5 
          text-sm font-semibold uppercase leading-6 text-white shadow-sm  focus-visible:outline 
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
        </div>
      </form>
    </div>
</div>
  )
}
