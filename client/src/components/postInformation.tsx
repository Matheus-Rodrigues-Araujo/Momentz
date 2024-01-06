import Skeleton from "react-loading-skeleton";
import "../../node_modules/react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/store";
import { PostContent } from "./postContent";
import Image from "next/image";

interface PostInformation {
  loading: boolean;
  username: string;
  profileImage: string;
  image: string;
  content: string;
  commentContent: any;
  setPostVisibility: () => void;
}

export const PostInformation = ({
  loading,
  image,
  content,
  commentContent,
  username,
  profileImage,
  setPostVisibility,
}: PostInformation) => {
  const theme = useAppSelector((state) => state.theme);
  
  return (
    <div
      className={`${
        theme === "dark" ? "bg-transparentBlack" : "bg-transparentWhite"
      } fixed z-40 top-0 left-0 flex justify-center items-center min-w-full min-h-full`}
    >
      <div
        className={`${
          theme === "dark" ? "bg-black" : "bg-gray-100"
        } flex gap-2 rounded-md p-3`}
        style={{ width: "90%", height: "80vh" }}
      >
        <img
          src={image}
          alt="Post image"
          className=" rounded-xl "
          style={{ width: "auto", height: "100%" }}
        />
        <div className="w-[95%] grid-span-6">
          <div className="flex pt-2 justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={profileImage}
                width={50}
                height={50}
                alt="Profile image"
                className="object-cover w-10 h-10 rounded-full mr-2  "
              />
              <p
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } text-md`}
              >
                {username}
              </p>
            </div>
            <button
              onClick={setPostVisibility}
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } close-btn text-lg font-bold hover:text-red-600`}
            >
              X
            </button>
          </div>
          <div
            style={
              theme === "dark"
                ? { borderBottom: "1px solid white" }
                : { borderBottom: "1px solid black" }
            }
          >
            <PostContent
              loading={loading}
              content={content}
              username={username}
              profileImage={profileImage}
            />
          </div>

          <div
            className={`${
              theme === "dark" ? "bg-customDark" : "bg-white"
            } post-comments mt-1 overflow-y-auto h-[72%] max-h-[72%]`}
          >
            {commentContent.length ? (
              commentContent.map((data: any) => (
                <div className="flex items-center gap-2 mt-1 py-1" >
                  <div className="w-full flex items-center ">
                    <Image
                      src={profileImage}
                      width={50}
                      height={50}
                      alt="Profile image"
                      className="object-cover w-10 h-10 rounded-full mr-2"
                    />
                    <p
                      className={`${
                        theme === "dark" ? "text-white " : "text-black"
                      }`}
                    >
                      User
                    </p>
                  </div>
                  
                  <p
                    className={`${
                      theme === "dark" ? "text-white " : "text-black bg-white"
                    } w-80 text-[14px] text-left`}
                  >
                    {data.content}
                  </p>
                </div>
              ))
            ) : (
              <p
                className={`${
                  theme === "dark"
                    ? "text-white bg-black"
                    : "text-black bg-gray-100"
                } text-md font-light`}
              >
                No comments
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
