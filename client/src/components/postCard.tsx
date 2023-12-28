"use client";
import Image from "next/image";
import { IPost } from "@/interfaces/IPost";
import Skeleton from "react-loading-skeleton";
import "../../node_modules/react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/store/store";
import axios from "axios";
import { UserState } from "@/reducers/userSlice";
import { PostButtons } from "./postButtons";
import { PostComments } from "./postComments";
import { PostContent } from "./postContent";
import { PostImage } from "./postImage";
import { PostHeader } from "./postHeader";

export const PostCard = ({ post }: IPost) => {
  const user: UserState = useAppSelector((state) => state.user);
  const theme = useAppSelector((state) => state.theme);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [commentContent, setCommentContent] = useState("");
  const [postInfo, setPostInfo] = useState(post);
  const [loading, setLoading] = useState(true);

  const postImage = `/uplouds/post-3.jpg`;
  const profileImage = "/default-profile-image.jpg";

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (postInfo.likes) {
      setLikes(postInfo.likes.length);
    }
  });

  useEffect(() => {
    if (postInfo._id) {
      handleComments();
    }
  }, []);

  const handleLikeStyle = () => {
    // @ts-ignore
    if (postInfo.likes.includes(user._id)) {
      return "text-customLightpink h-6 w-6";
    } else if (!isLiked && theme === "dark") {
      return "text-white h-6 w-6 ";
    }
    return "text-black h-6 w-6";
  };

  const handleLike = async () => {
    const payload = {
      currentUserId: user._id,
    };
    await axios
      .put(`/api/auth/like/${postInfo._id}`, payload)
      .then(() => {
        updatePost();
      })
      .catch((e) => console.log(e));
  };

  const handleComments = async () => {
    await axios.get(`/api/auth/comment/${postInfo._id}`).then((res) => {
      const data = res.data;
      const { total, comment } = data;
      setTotalComments(total);
      setCommentContent(comment);
    });
  };

  const updatePost = async () => {
    const response = await axios.get(`/api/auth/post/${post._id}`);
    const data = response.data;
    const postUpdated = data.data;
    setPostInfo(postUpdated);
  };

  return (
    <div
      className="post-card cursor-pointer bg-gray-900 shadow-x-2 shadow-y-9 shadow-blur-2 rounded-none md:p-4"
      style={{ backgroundColor: "var(--gray)" }}
    >
      <div className="p-0 mb-4 rounded-md">
        <PostHeader loading={loading} profileImage={profileImage} />

        <PostImage loading={loading} image={postImage} />

        <PostButtons
          loading={loading}
          likes={likes}
          handleLike={handleLike}
          handleLikeStyle={handleLikeStyle}
        />

        <PostContent loading={loading} content={postInfo.content} />

        <PostComments
          postId={String(postInfo._id)}
          loading={loading}
          totalComments={totalComments}
          commentContent={commentContent}
          image={postImage}
          content={postInfo.content}
        />

        <div
          className={`${
            theme === "dark" ? "bg-gray-500" : "bg-black"
          } w-[100%] h-[1px]`}
        ></div>
      </div>
    </div>
  );
};
