// "use client";
import Image from "next/image";
import { IPost } from "@/interfaces/IPost";
import Skeleton from "react-loading-skeleton";
import "../../node_modules/react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/store/store";
import {
  HeartIcon,
  PaperAirplaneIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import PostButtons from "./postButtons";

export const PostCard = ({ post }: IPost) => {
  const user = useAppSelector((state) => state.user);
  const theme = useAppSelector((state) => state.theme);
  const [isLiked, setIsLiked] = useState(false);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState(post)
  const [likes, setLikes] = useState(0)
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState("")
  const postImage = `/uplouds/post-3.jpg`;
  const profileImage = "/default-profile-image.jpg";

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleLikeStyle = () => {
    if (isLiked) {
      return "text-customLightpink h-6 w-6";
    } else if (!isLiked && theme === "dark") {
      return "text-white h-6 w-6 ";
    }
    return "text-black h-6 w-6";
  };

  const autoResize = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const updatePost = async () => {
    await axios.get(`/api/auth/post/${post._id}`)
    .then((res)=>{
      const {data} = res
      setPostData(data)
    })
    .catch((error) => console.log(error))
    
  }

  const handleLike = async () => {
    const payload = {
      postId: post["_id"],
      currentUserId: user._id,
    };
  
    try {
      // Make the like API call
      await axios.put("/api/auth/like", payload);
  
      // Fetch the updated post data
      const response = await axios.get(`/api/auth/post/${post._id}`);
      const updatedPostData = response.data;
  
      // Update the likes state with the new count
      setLikes(updatedPostData.likes.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    if(postData.likes){
      setLikes(postData.likes.length)
    }
  }, [])

  useEffect(()=>{
    if(postData.content){
      setLikes(postData.likes.length)
    }
  }, [])

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div
      className="post-card cursor-pointer bg-gray-900 shadow-x-2 shadow-y-9 shadow-blur-2 rounded-none md:p-4"
      style={{ backgroundColor: "var(--gray)" }}
    >
      <div className="p-0 mb-4 rounded-md">
        <div className="mb-4 flex items-center ">
          {loading ? (
            <Skeleton
              width={40}
              className=" h-10 rounded-full mr-2 product-image"
              style={{ borderRadius: "2em" }}
            />
          ) : (
            <Image
              src={profileImage}
              width={50}
              height={50}
              alt="Profile image"
              className="object-cover w-10 h-10 rounded-full mr-2"
            />
          )}
          <div className="flex items-center gap-3">
            {loading ? (
              <Skeleton width={40} />
            ) : (
              <p className="text-sm font-medium text-white">{post.username}</p>
            )}
            {loading ? (
              <Skeleton width={120} />
            ) : (
              <p className="text-gray-500 text-sm">
                2023-12-10
                {/* {post.datetime.toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'})} */}
              </p>
            )}
          </div>
        </div>

        {loading ? (
          <Skeleton className="skeleton-img" />
        ) : (
          <img
            src={postImage}
            width={50}
            height={50}
            alt="Post image"
            className="h-auto w-[460px] rounded-md md:max-w-[500px]"
          />
        )}

        {/* <div className="flex items-center mt-4 space-x-2">
          {loading ? (
            <Skeleton width={25} height={25} style={{ borderRadius: "2em" }} />
          ) : (
            <button
              title="Curtir"
              onClick={() => {
                handleLike();
                // setIsLiked(!isLiked);
              }}
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } gap-1 flex items-center`}
            >
              <HeartIcon className={handleLikeStyle()} />
              {likes}
            </button>
          )}
          {loading ? (
            <Skeleton width={25} height={25} style={{ borderRadius: "2em" }} />
          ) : (
            <button
              title="Comentar"
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } gap-1 flex items-center`}
            >
              <ChatBubbleOvalLeftIcon
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } h-6 w-6`}
              />
            </button>
          )}
          {loading ? (
            <Skeleton width={25} height={25} style={{ borderRadius: "2em" }} />
          ) : (
            <button
              title="Enviar"
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } gap-1 flex items-center`}
            >
              <PaperAirplaneIcon
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } h-6 w-6`}
              />
            </button>
          )}
        </div> */}
        <PostButtons loading={loading} post={post} user={user} likes={post.likes.length} />

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
              } text-sm font-medium self-start`}
            >
              {'User123'}
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
              } text-sm content mb-4`}
            >
              {postData?.content}
            </p>
          )}
        </div>

        <div className="comment-container grid gap-3">
          {loading ? (
            <Skeleton
              width={120}
              height={20}
              className="rounded-full mr-2 my-1 product-image"
              style={{ borderRadius: "2em" }}
            />
          ) : (
            <p className="text-customLightGray">See all 32 comment</p>
          )}
          {loading ? (
            <Skeleton
              width={120}
              height={20}
              className="rounded-full mr-2 product-image my-3"
              style={{ borderRadius: "2em" }}
            />
          ) : (
            <div className="grid">
              <textarea
                className={`${
                  theme === "dark"
                    ? "bg-customDark text-white"
                    : "bg-white text-black"
                } w-full h-12  focus:outline-none resize-none overflow-y-auto`}
                value={text}
                placeholder="Add comment"
                onChange={handleChange}
                onInput={autoResize}
              />
            </div>
          )}
        </div>
        <div className="w-[100%] bg-gray-500 h-[1px]"></div>
      </div>
    </div>
  );
};
