"use client";
import Sidebar from "../../components/sidebar";
import { Aside } from "../../components/aside";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setUser } from "@/reducers/userSlice";
import { Types } from "mongoose";

export interface UserData {
  _id: string,
  username: string;
  email: string;
  birthdate: string;
  profileImage: string;
}

export interface UserResponse {
  user: UserData | null;
  error: AxiosError | null;
}

export async function getUser(): Promise<UserResponse> {
  try {
    const { data } = await axios.get("/api/auth/user");
    const { user } = data;
    return {
      user: user,
      error: null,
    };
  } catch (e) {
    const error = e as AxiosError;
    return {
      user: null,
      error,
    };
  }
}

export default function NextLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme);
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();

  const handleLogin = (data: UserData | null) => {
    if (data === null) {
      console.error("User data is null");
      return;
    }
    dispatch(setUser(data));
  };

  useEffect(() => {
    (async () => {
      const { user, error } = await getUser();

      if (error) {
        router.push("/");
        return;
      }
      handleLogin(user);
      setIsLogged(true);
    })();
  }, [router]);

  if (!isLogged) {
    return <p className="text-yellow-600">Loading...</p>;
  }

  return (
    <div>
      <main className={`min-h-screen ${theme === 'dark' ? 'bg-customDark' : 'bg-white'}`}>
        <Sidebar />
        <div className="flex justify-center">
          <div className="flex justify-center gap-10 mb-20 md:ml-20 md:mb-0">
            {children}
            <Aside />
          </div>
        </div>
      </main>
    </div>
  );
}
