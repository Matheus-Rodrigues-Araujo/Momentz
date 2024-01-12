import Skeleton from "react-loading-skeleton";
import "../../node_modules/react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/store";
import { PostContent } from "./postContent";
import Image from "next/image";

interface PostCommentsCard {
  loading: boolean;
  username: string;
  profileImage: string;
  image: string;
  content: string;
  commentContent: any;
  commentsCardVisibility: boolean;
  setCommentsCardVisibility: () => void;
}

export const PostCommentsCard = ({
  loading,
  image,
  content,
  commentContent,
  username,
  profileImage,
  commentsCardVisibility,
  setCommentsCardVisibility,
}: PostCommentsCard) => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-transparentBlack" : "bg-transparentWhite"
      } fixed z-40 top-0 left-0 flex justify-center items-center min-w-full min-h-full`}
    >
      <div
        className={`${theme === "dark" ? "" : ""}
        flex justify-center
        w-10/12
        h-[80dvh]
        `}
      >
        <img src={image} alt="Post image" className="post-comments-image" />
        <div
          className={`${
            theme === "dark" ? "bg-black" : "bg-white"
          } px-1 grid-span-6`}
        >
          <div className="flex justify-between">
            <div className="flex items-center gap-2 py-1">
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
              onClick={setCommentsCardVisibility}
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

          <div className="post-comments-container">
            <div
              className={`${
                theme === "dark" ? "bg-black" : "bg-white"
              } post-comments custom-scrollbars__content mt-1`}
            >
              {commentContent.length ? (
                commentContent.map((data: any) => (
                  <div className="flex items-center  mt-1 py-1">
                    <div className="w-6/12 flex items-center ">
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
                        } text-sm `}
                      >
                        User
                      </p>
                    </div>

                    <p
                      className={`${
                        theme === "dark" ? "text-white " : "text-black bg-white"
                      } w-80 text-[14px] text-left text-sm`}
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
                      : "text-black bg-white"
                  } text-md font-light`}
                >
                  No comments
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
