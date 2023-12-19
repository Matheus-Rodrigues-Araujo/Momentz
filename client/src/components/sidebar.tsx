'use client'
import Link from "next/link"
import Image from "next/image"
import logo from '../assets/logo.png'
import logoClip from '../assets/logo-clip.png'
import { 
  HomeIcon, 
  PlusIcon, 
  MagnifyingGlassIcon, 
  BellIcon,
  EnvelopeIcon,
  UserIcon,
  Bars3Icon
} from '@heroicons/react/24/solid'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { UserData, UserResponse } from "@/app/next/nextLayout"
import axios from "axios"

export default function Sidebar({userData}: {userData: UserData | null}){
  const router = useRouter()
  const isClient = typeof window !== 'undefined';
  const [windowWidth, setWindowWidth] = useState(isClient ? window.innerWidth || 0 : 0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Novo estado
  const profileImage = userData?.profileImage || '/default-profile-image.jpg'

  const logout = async () => {
    const response = await axios.get('api/auth/logout')
    if(response.status === 200){
      router.push('/')
    }
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
            <Link href="/" className="nav-item-container">
              <div className="flex gap-4 items-center p-2 text-center">
                <div className="icon-container bg-white p-[1px] rounded-full" >
                <Image src={profileImage} width={50} height={50} alt="User profile"  className="object-cover h-9 w-9 rounded-full" />
                </div>
                <p className="hidden xl:block">Profile</p>
              </div>
              
            </Link>

            <div className="md:absolute bottom-10" >
              <div className="cursor-pointer relative " onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <div className="flex gap-4 items-center p-2 text-center">
                  <div className="icon-container rounded-full hover:bg-customLighterPink ">
                    <Bars3Icon className=" h-10 w-10 text-customDark  text-white" />
                  </div>
                  <p className="hidden xl:block">More</p>
                </div>
                {isDropdownOpen && (
                  <div className="fixed grid bg-white rounded shadow-md md:left-6 bottom-[85px]">
                    <Link href="/settings" className="text-black text-sm p-3 hover:bg-customLighterPink hover:text-white" >Settings</Link>
                    <button className="text-black text-sm p-3 hover:bg-customLighterPink hover:text-white" >Theme</button>
                    <button onClick={logout}  className="text-black text-sm p-3 hover:bg-customLighterPink hover:text-white">Logout</button>
                  </div>
                )}
              </div>
            </div>
          </div>
      </div>
    )
}