"use client";
import Image from "next/image";
import userSuggestionsList from "@/userSuggestionsData";
import spiderman from "@/assets/userSuggestions/spiderman.jpg";
import Link from "next/link";
import { UserSuggestionCard } from "./userSuggestionCard";
import { Footer } from "./footer";
import Skeleton from "react-loading-skeleton";
import "../../node_modules/react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect } from "react";
import { UserData } from "@/app/next/nextLayout";
import { useAppSelector } from "@/store/store";

export const Aside = () => {
  const user = useAppSelector((state) => state.user);
  const theme = useAppSelector((state) => state.theme);
  const [loading, setLoading] = useState(true);
  const profileImage = user?.profileImage || "/default-profile-image.jpg";

  const checkLoading = () => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  };

  useEffect(() => {
    checkLoading();
  }, []);

  return (
    <div
      className={`hidden sm:hidden md:hidden lg:flex flex-col mt-12 mr-2 w-[250px] gap-5`}
    >
      <div className="flex gap-4">
        {loading ? (
          <Skeleton
            width={50}
            height={50}
            className=" h-10 rounded-full mr-2 product-image"
            style={{ borderRadius: "10em" }}
          />
        ) : (
          <Image
            src={profileImage}
            height={50}
            width={50}
            alt="User profile"
            className="object-cover bg-white p-[1px] h-14 w-14 rounded-full"
          />
        )}

        <div className="flex flex-col">
          {loading ? (
            <Skeleton width={100} />
          ) : (
            <h4
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } font-medium`}
            >
              {user?.username}
            </h4>
          )}
          {loading ? (
            <Skeleton width={50} />
          ) : (
            <Link
              href={"/"}
              className={`text-semibold ${
                theme === "dark"
                  ? "text-customLightBlue hover:text-customLighterBlue"
                  : "text-blue-600 hover:text-blue-500"
              }`}
            >
              Change
            </Link>
          )}
        </div>
      </div>

      <div className="grid gap-5">
        <div className="flex justify-between">
          {loading ? (
            <Skeleton width={150} />
          ) : (
            <p
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } font-normal text-md`}
            >
              Suggestions for you
            </p>
          )}
          {loading ? (
            <Skeleton width={50} />
          ) : (
            <Link
              href={"/explore/people"}
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } font-bold hover:text-customLightGray`}
            >
              See all
            </Link>
          )}
        </div>
        {userSuggestionsList.length >= 1 &&
          userSuggestionsList.map((item, key) => (
            <UserSuggestionCard key={key} user={item} />
          ))}
      </div>
      <Footer />
    </div>
  );
};
