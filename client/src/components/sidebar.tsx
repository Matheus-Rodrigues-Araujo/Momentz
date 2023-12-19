'use client'
import Link from "next/link"
import Image from "next/image"
import logo from '../assets/logo.png'
import logoClip from '../assets/logo-clip.png'
import { setUser } from "@/reducers/userSlice"
import { setTheme } from "@/reducers/themeSlice"

import { 
  HomeIcon, 
  PlusIcon, 
  MagnifyingGlassIcon, 
  BellIcon,
  EnvelopeIcon,
  UserIcon,
  Bars3Icon,
  Cog8ToothIcon,
  SunIcon,
  MoonIcon,
  ArrowLeftOnRectangleIcon,
  UserCircleIcon
} from '@heroicons/react/24/solid'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { UserData, UserResponse } from "@/app/next/nextLayout"
import axios from "axios"
import { useAppDispatch, useAppSelector } from "@/store"

export default function Sidebar(){
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)
  const theme = useAppSelector((state) => state.theme)
  const router = useRouter()

  const isClient = typeof window !== 'undefined';
  const [windowWidth, setWindowWidth] = useState(isClient ? window.innerWidth || 0 : 0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const profileImage = user?.profileImage || '/default-profile-image.jpg'
  const [darkTheme, setDarkTheme] = useState(true)

  const logout = async () => {
    // const response = await axios.get('api/auth/logout')
    dispatch(setUser({
      username: '',
      email: '',
      birthdate: '',
      profileImage: ''
    }))
    if(!user){
      router.push('/')
    }
  }

  const handleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    dispatch(setTheme(newTheme))
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (isClient) {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isClient]);

  return(
        <div className="bg-customDark z-10 w-full text-white px-3 fixed bottom-0 border-t-[1px] md:top-0 md:w-auto md:border-t-0 md:border-r md:left-0">  
          <div className="flex flex-row justify-around items-center mt-0 ml-0 md:block md:mt-5 md:justify-center md:ml-1">
            <Link href="/" className="mb-0 md:mb-[80px]">
              <div className="flex items-center text-center">
                {windowWidth >= 1280 ? <Image src={logo} width={180} height={100}   alt="Logo"/>
                : <Image src={logoClip} className=" w-auto h-20 pb-1" alt="Logo"/>}
              </div>
            </Link>
            <Link href="/" className="hidden md:block nav-item-container" >
              <div className="sm:mt-0 md:mt-10 flex gap-4 items-center p-2 text-center">
                <div className="icon-container bg-white p-2 bg-white rounded-full " >
                  <HomeIcon className="h-6 w-6 text-customDark  text-black" />
                </div>
                <p className="hidden xl:block">Home</p>
              </div>
            </Link>
            <Link href="/" className="nav-item-container hidden md:block">
              <div className="flex gap-4 items-center p-2 text-center">
                <div className="icon-container bg-white p-2 bg-white rounded-full" >
                  <MagnifyingGlassIcon className="h-6 w-6 text-customDark  text-black" />
                </div>
                <p className="hidden xl:block">Search</p>
              </div>
            </Link>
            <Link href="/" className="hidden md:block nav-item-container">
              <div className="flex gap-4 items-center p-2 text-center">
                <div className="icon-container bg-white p-2 bg-white rounded-full" >
                  <BellIcon className="h-6 w-6 text-customDark  text-black" />
                </div>
                <p className="hidden xl:block">Notifications</p>
              </div>
            </Link>
            <Link href="/" className="nav-item-container">
              <div className="flex gap-4 items-center p-2 text-center">
                <div className="icon-container bg-white p-2 bg-white rounded-full" >
                  <EnvelopeIcon className="h-6 w-6 text-customDark  text-black" />
                </div>
                <p className="hidden xl:block">Messages</p>
              </div>
            </Link>
            <Link href="/next/post" className="nav-item-container">
              <div className="flex gap-4 items-center p-2 text-center">
                <div className="icon-container bg-white p-2 bg-white rounded-full" >
                  <PlusIcon className=" h-6 w-6 text-customDark  text-black" />
                </div>
                <p className="hidden xl:block">Create</p>
              </div>
            </Link>
            
            <Link href="#" className="hidden md:block nav-item-container">
              <div className="flex gap-4 items-center p-2 text-center">
                <div className="icon-container bg-white p-[1px] rounded-full" >
                  <Image src={profileImage} width={50} height={50} alt="User profile"  className="object-cover h-9 w-9 rounded-full" />
                </div>
                <p className="hidden xl:block">Profile</p>
              </div>
            </Link>

            <div className="md:absolute bottom-10" >
              <div className="cursor-pointer relative nav-item-container" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <div className="flex gap-4 items-center p-2 text-center">
                  <div className="rounded-full menu">
                    <Bars3Icon className="hidden h-10 w-10 text-customDark  text-white md:block" />
                    <div className="md:hidden icon-container bg-white p-[1px] rounded-full" >
                      <Image src={profileImage} width={50} height={50} alt="User profile"  className="object-cover h-9 w-9 rounded-full" />
                    </div>
                  </div>
                  <p className="hidden xl:block">More</p>
                </div>
                {isDropdownOpen && (
                  <div className="w-[125px] fixed grid bg-customGray rounded-md shadow-md right-2 md:left-6 md:right-0 bottom-[85px]">
                    <Link href="#" className="flex items-center gap-2 text-white text-sm p-3 hover:bg-customLighterPink hover:text-white" >
                      <UserCircleIcon className=" h-6 w-6 text-customDark  text-white"/>
                      <p>My Profile</p>
                    </Link>
                    <Link href="/settings" className="flex items-center gap-2 text-white text-sm p-3 hover:bg-customLighterPink hover:text-white" >
                      <Cog8ToothIcon className=" h-6 w-6 text-customDark  text-white"/>
                      <p>Settings</p>
                    </Link>
                    <button onClick={handleTheme} className="flex items-center gap-2 text-white text-sm p-3 hover:bg-customLighterPink hover:text-white" >
                      {theme === 'dark' ? <MoonIcon className=" h-6 w-6 text-customDark text-white"/>: <SunIcon className=" h-7 w-7 text-customDark  text-white"/>}
                      <p>Theme</p>
                    </button>
                    <button onClick={logout}  className="flex items-center gap-2 text-white text-sm p-3 hover:bg-red-600 hover:text-white">
                      <ArrowLeftOnRectangleIcon className=" h-6 w-6 text-customDark  text-white"/>
                      <p>Logout</p>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
      </div>
    )
}