import Skeleton from "react-loading-skeleton";
import "../../node_modules/react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";
import { useAppSelector } from "@/store/store";
import { PostContent } from "./postContent";
import Image from "next/image";

interface PostInformation {
  loading: boolean;
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
  setPostVisibility,
}: PostInformation) => {
  const theme = useAppSelector((state) => state.theme);
  const profileImage = "/default-profile-image.jpg";
  console.log(commentContent);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-customDark" : "bg-gray-200"
      } fixed left-0 top-5 w-[80vw] h-[95vh] grid grid-cols-2 z-[1000] md:left-20 xl:left-40`}
    >
      <img
        src={image}
        alt="Post image"
        className="hidden object-fill h-[100%] rounded-md grid-span-6 md:max-w-[500px] md:block"
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
              RandomUser
            </p>
          </div>
          <button
            onClick={setPostVisibility}
            className="text-white text-md font-bold"
          >
            X
          </button>
        </div>
        <div style={{ borderBottom: "1px solid white" }}>
          <PostContent loading={loading} content={content} />
        </div>

        <div className="post-comments mt-2">
          {commentContent.length ? (
            commentContent.map((data: any) => (
              <div
                className={`${
                  theme === "dark" ? "bg-customDark" : "bg-customGray"
                } flex  items-center gap-2 mt-2`}
              >
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
                      theme === "dark"
                        ? "text-white bg-black "
                        : "text-white bg-customGray"
                    }`}
                  >
                    User
                  </p>
                </div>

                <p
                  className={`${
                    theme === "dark"
                      ? "text-white bg-black "
                      : "text-white bg-customGray"
                  } w-80`}
                >
                  {data.content}
                </p>
              </div>
            ))
          ) : (
            <p
              className={`${theme === "dark" ? "text-white" : "text-black"}`}
              style={{ borderBottom: "1px solid white" }}
            >
              Post don't have comment
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
