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
  UserIcon
} from '@heroicons/react/24/solid'
import { useEffect, useState } from "react"

export default function Sidebar(){
  const [windowWidth, setWindowWidth] = useState(()=> {
    return typeof window !== 'undefined' ? window.innerWidth : 0
  })  
  
  useEffect(()=> {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    return (()=> window.removeEventListener('resize', () => setWindowWidth(window.innerWidth)))
  }, [windowWidth])

  return(
        <div className="bg-customDark text-white px-3 fixed grid justify-center md:bg-customDark h-screen top-0 left-0 border-r">  
          <div className="mt-5 ml-2">
            <Link href="/" className="" style={{marginBottom: '80px'}} >
              <div className="flex items-center text-center">
                {windowWidth >= 1280 ? <Image src={logo} width={180} height={100}   alt="Logo"/>
                : <Image src={logoClip} width={60} height={50} alt="Logo"/>}
              </div>
            </Link>
            <Link href="/" className="nav-item-container" >
              <div className="flex gap-4 items-center p-2 text-center mt-10">
                <div className="icon-container bg-white p-2 bg-white rounded-full " >
                  <HomeIcon className="h-6 w-6 text-customDark  text-black" />
                </div>
                <p className="hidden xl:block">Home</p>
              </div>
            </Link>
            <Link href="/" className="nav-item-container">
              <div className="flex gap-4 items-center p-2 text-center">
                <div className="icon-container bg-white p-2 bg-white rounded-full" >
                  <MagnifyingGlassIcon className="h-6 w-6 text-customDark  text-black" />
                </div>
                <p className="hidden xl:block">Search</p>
              </div>
            </Link>
            <Link href="/" className="nav-item-container">
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
            <Link href="/" className="nav-item-container">
              <div className="flex gap-4 items-center p-2 text-center">
                <div className="icon-container bg-white p-2 bg-white rounded-full" >
                  <PlusIcon className=" h-6 w-6 text-customDark  text-black" />
                </div>
                <p className="hidden xl:block">Create</p>
              </div>
            </Link>
            <Link href="/" className="nav-item-container">
              <div className="flex gap-4 items-center p-2 text-center">
                <div className="icon-container bg-white p-2 bg-white rounded-full" >
                  <UserIcon className="h-6 w-6 text-customDark  text-black" />
                </div>
                <p className="hidden xl:block">Profile</p>
              </div>
            </Link>
          </div>
      </div>
    )
}