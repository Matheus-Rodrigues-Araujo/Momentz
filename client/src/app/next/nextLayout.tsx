'use client'
import Sidebar from '../../components/sidebar'
import { Aside } from '../../components/aside'
import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
// import Next from './page'

interface UserResponse{
  user: string | null;
  error: AxiosError | null;
}

async function getUser(): Promise<UserResponse> {
  try {
    const { data } =  await axios.get('/api/auth/user')
    console.log('data: ',data)
    return {
      user: data,
      error: null
    }
  } catch (e) {
      const error = e as AxiosError
      return {
        user: null,
        error
      }
  }
}

export default function NextLayout({ children }:{children: React.ReactNode}) {
  const router = useRouter()
  const [isLogged, setIsLogged] = useState(false)
  
  useEffect(()=>{
    (async () => {
      const {user, error} = await getUser()

      if(error){
        router.push('/')
        return;
      }

      setIsLogged(true)

    })()
  }, [router])

  if(!isLogged){
    return <p className='text-red-600' >Loading...</p>
  }

  return (
    <div>
      <main className='min-h-screen ' style={{backgroundColor: '#0e0d0e'}} >
        <Sidebar/>
        <div className='flex justify-center'>
          <div className='flex justify-center gap-10 mb-20 md:ml-20 md:mb-0' >
            {children}
            <Aside/>
          </div>
        </div>
      </main>
    </div>
  )
}