'use client'
import Sidebar from '../../components/sidebar'
import { Aside } from '../../components/aside'
import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'

export interface UserData {
  username: string;
  email: string;
  birthdate: string;
  profileImage: string;
}

export interface UserResponse {
  user: UserData | null;
  error: AxiosError | null;
}

async function getUser(): Promise<UserResponse> {
  try {
    const { data } = await axios.get('/api/auth/user');
    const { user } = data;
    return {
      user: user,
      error: null
    };
  } catch (e) {
    const error = e as AxiosError;
    return {
      user: null,
      error
    };
  }
}

export default function NextLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    (async () => {
      const { user, error } = await getUser();

      if (error) {
        router.push('/');
        return;
      }

      setUserData(user);
      setIsLogged(true);
    })();
  }, [router]);

  if (!isLogged) {
    return <p className='text-red-600'>Loading...</p>;
  }

  return (
    <div>
      <main className='min-h-screen' style={{ backgroundColor: '#0e0d0e' }}>
        <Sidebar userData={userData} />
        <div className='flex justify-center'>
          <div className='flex justify-center gap-10 mb-20 md:ml-20 md:mb-0'>
            {children}
            <Aside userData={userData} />
          </div>
        </div>
      </main>
    </div>
  );
}
