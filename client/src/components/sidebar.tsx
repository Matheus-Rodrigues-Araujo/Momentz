import Link from "next/link"
import { 
  BeakerIcon,
  HomeIcon, 
  PlusIcon, 
  MagnifyingGlassIcon, 
  BellIcon,
  EnvelopeIcon,
  UserIcon
  } from '@heroicons/react/24/solid'
import Image from "next/image"
import logo from '../assets/logo.png'

export default function Sidebar(){
    return(
        <div className="h-screen w-60 bg-customDark text-white fixed top-0 left-0 flex flex-col justify-between md:border-r">  
          <div className="mt-5 ml-2">
            <Link href="/">
              <div className="flex items-center text-center">
                <Image src={logo} width={180} height={100} alt="Logo"/>
              </div>
            </Link>
            <Link href="/" className="nav-item-container" >
              <div className="flex gap-4 items-center p-4 text-center">
                <div className="icon-container bg-white p-2 bg-white rounded-full " >
                  <HomeIcon className="h-6 w-6 text-customDark  text-black" />
                </div>
                <p>Home</p>
              </div>
            </Link>
            <Link href="/" className="nav-item-container">
              <div className="flex gap-4 items-center p-4 text-center">
                <div className="icon-container bg-white p-2 bg-white rounded-full" >
                  <MagnifyingGlassIcon className="h-6 w-6 text-customDark  text-black" />
                </div>
                <p>Search</p>
              </div>
            </Link>
            <Link href="/" className="nav-item-container">
              <div className="flex gap-4 items-center p-4 text-center">
                <div className="icon-container bg-white p-2 bg-white rounded-full" >
                  <BellIcon className="h-6 w-6 text-customDark  text-black" />
                </div>
                <p>Notifications</p>
              </div>
            </Link>
            <Link href="/" className="nav-item-container">
              <div className="flex gap-4 items-center p-4 text-center">
                <div className="icon-container bg-white p-2 bg-white rounded-full" >
                  <EnvelopeIcon className="h-6 w-6 text-customDark  text-black" />
                </div>
                <p>Messages</p>
              </div>
            </Link>
            <Link href="/" className="nav-item-container">
              <div className="flex gap-4 items-center p-4 text-center">
                <div className="icon-container bg-white p-2 bg-white rounded-full" >
                  <PlusIcon className=" h-6 w-6 text-customDark  text-black" />
                </div>
                <p>Create</p>
              </div>
            </Link>
            <Link href="/" className="nav-item-container">
              <div className="flex gap-4 items-center p-4 text-center">
                <div className="icon-container bg-white p-2 bg-white rounded-full" >
                  <UserIcon className="h-6 w-6 text-customDark  text-black" />
                </div>
                <p>Profile</p>
              </div>
            </Link>
          </div>
      </div>
    )
}