'use client'
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios'
import {  useAppSelector, useAppDispatch } from "@/store/store";
import { setUser } from "@/reducers/userSlice";

interface Errors {
  email: string;
  password: string;
  general: string;
  invalid: string;
}

export default function LoginForm() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Errors>({
    email: '',
    password: '',
    general: '',
    invalid: ''
  });

  const verifyAuthentication = async () => {
    try {
      const { data } = await axios.get('api/auth/user');
      if (!data?.user) {
        router.push('/');
      }
      dispatch(setUser(data?.user))
      setIsLoading(true);
      router.push('/next');
    } catch (error) {
      console.error(error);
    }
  };

  const handleAuthenticationError = (error: any) => {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;

      if (status === 401 || status === 403 || status === 500) {
        setErrors({ ...errors, general: 'Authentication failed. Please check your credentials.' });
        setErrors({ ...errors, invalid: 'Invalid credentials!' });
      } else if (status === 400) {
        // Handle other HTTP status codes (e.g., 400) and display appropriate messages
        setErrors({ ...errors, general: 'Bad Request. Please check your input.' });
      } else{
        console.error('Login error', error);
      }
    }
  };

  useEffect(()=> {
    verifyAuthentication()
  }, [])


  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    } else {
      newErrors.email = '';
    }

    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
  
      if (!validateForm()) {
        return;
      }
  
      const payload = { email, password };
     
      await axios.post("api/auth/login", payload)
      
      router.push('/next');
    
    } catch (error) {
      handleAuthenticationError(error)
    }
  };

  return (
    <div className="sm:flex my-10 mx-auto flex-col justify-center px-2 py-8 rounded-md  md:w-[500px] md:bg-customGray px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link href={'/'}>
          <Image src={Logo} alt="Your Company" className="w-auto h-50"  />
        </Link>
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}
        >
              {errors.invalid && <p className="bg-customYellow py-2 text-center font-bold  text-sm mt-1" >{errors.invalid}</p>}

          <div>
            <label className="block text-sm font-medium leading-6 text-white">Email</label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="
                form-input block w-full rounded-md border-0 p-3 text-white
                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5
                "
              />
              {errors.email && <p className="text-red-500 text-sm mt-1" >{errors.email}</p>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-white">Password</label>
            </div>
            <div className="mt-2">
              <input
               onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                className="
                form-input block w-full rounded-md border-0 p-3 text-white
                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5
                "
              />
              {errors.password && <p className="text-red-500 text-sm mt-1" >{errors.password}</p>}
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