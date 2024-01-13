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
        <img
          src={image}
          alt="Post image"
          className="hidden md:block post-comments-image"
        />
        {/* apply here */}
        <div
          className={`${
            theme === "dark" ? "bg-black light-shadow" : "bg-white dark-shadow"
          } 
          rounded-[0.7rem] max-[500px]:rounded-t-[0.7rem] max-[500px]:absolute bottom-0 h-[75vh] px-2 max-[500px]:w-full max-[550px]:w-auto 
          md:static px-1 grid span-6 md:h-auto md:w-auto 
          `}
        >
          <div
            className={`${
              theme === "dark" ? "bg-black" : "bg-white"
            } relative flex justify-between`}
          >
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
              } absolute right-3 top-3 close-btn text-lg font-bold hover:text-red-600  max-[315px]:right-10 top-4`}
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
            <div className="flex flex-wrap flex-col mt-4 gap-2">
              {loading ? (
                <Skeleton
                  width={80}
                  height={20}
                  className="rounded-full mr-2 product-image"
                  style={{ borderRadius: "2em" }}
                />
              ) : (
                <p
                  className={`${
                    theme === "dark" ? "text-white" : "text-black"
                  } text-lg font-medium self-start`}
                >
                  {username}
                </p>
              )}
              {loading ? (
                <Skeleton
                  width={250}
                  height={20}
                  className="rounded-full mr-2 product-image"
                  style={{ borderRadius: "2em" }}
                />
              ) : (
                <p
                  className={`${
                    theme === "dark" ? "text-white" : "text-customDark"
                  } text-md content mt-4`}
                >
                  {content}
                </p>
              )}
            </div>
          </div>

          <div className="md:post-comments-container">
            <div
              className={`${
                theme === "dark" ? "bg-black" : "bg-white"
              } post-comments custom-scrollbars__content mt-1`}
            >
              {commentContent.length ? (
                commentContent.map((data: any) => (
                  // <div className="grid gap-1 bg-customDark md:flex gap-0 items-center mt-1 py-1 md:bg-black">
                  <div
                    className={`${
                      theme === "dark" ? "bg-black" : "bg-white"
                    }  flex flex-col items-start gap-2 md:flex-row mt-1 py-1 md:items-center md:gap-0`}
                  >
                    <div className="w-full md:w-6/12 flex items-center ">
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
                        theme === "dark" ? "text-white " : "text-black"
                      } w-80 text-left text-sm  `}
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
