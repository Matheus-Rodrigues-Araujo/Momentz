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

export default function Sidebar(){
    return(
        <div className="h-screen w-40 bg- text-white fixed top-0 left-0 flex flex-col justify-between" style={{backgroundColor: '#211E1F'}}>  
        <div className="mt-5">
          <Link href="/">
            <div className="flex gap-2 items-center p-4 text-center">
              <HomeIcon className="h-6 w-6 text-blue-500" />
              <p>Home</p>
            </div>
          </Link>
          <Link href="/">
            <div className="flex gap-2 items-center p-4 text-center">
              <MagnifyingGlassIcon className="h-6 w-6 text-blue-500" />
              <p>Search</p>
            </div>
          </Link>
          <Link href="/">
            <div className="flex gap-2 items-center p-4 text-center">
              <BellIcon className="h-6 w-6 text-blue-500" />
              <p>Notifications</p>
            </div>
          </Link>
          <Link href="/">
            <div className="flex gap-2 items-center p-4 text-center">
              <EnvelopeIcon className="h-6 w-6 text-blue-500" />
              <p>Messages</p>
            </div>
          </Link>
          <Link href="/">
            <div className="flex gap-2 items-center p-4 text-center">
              <PlusIcon className="bg-white rounded-full h-6 w-6 text-blue-500" />
              <p>Create</p>
            </div>
          </Link>
          <Link href="/">
            <div className="flex gap-2 items-center p-4 text-center">
              <UserIcon className="h-6 w-6 text-blue-500" />
              <p>Profile</p>
            </div>
          </Link>
        </div>
      </div>
    )
}