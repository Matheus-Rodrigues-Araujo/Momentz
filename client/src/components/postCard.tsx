"use client";
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

interface IPostType {
  _id: string;
  user: [
    {
      username: string;
      profileImage: string;
    }
  ];
  likes: string[];
  datetime: Date;
  content: string;
}

interface IPostCard {
  _id: string;
  user: [{ username: string; profileImage: string }];
  postImage: string;
  likes: string[];
  content: string;
  createdAt: string;
  post: IPostType;
}

export const PostCard: React.FC<{ post: IPostCard }> = ({ post }) => {
  const user: UserState = useAppSelector((state) => state.user);
  const theme = useAppSelector((state) => state.theme);
  const [loading, setLoading] = useState(true);

  const [postInfo, setPostInfo] = useState(post);
  const [postAuthor, setPostAuthor] = useState({
    username: "",
    profileImage: "",
  });

  const [postDate, setPostDate] = useState({
    date: "",
    time: "",
  });

  const [likes, setLikes] = useState(0);

  const [totalComments, setTotalComments] = useState(0);
  const [commentContent, setCommentContent] = useState("");

  const postImage = `/uplouds/post-10.jpg`;

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  const formattedDateAndTime = (date: string) => {
    if (date) {
      const formattedDate = new Date(date).toLocaleDateString();
      const formattedTime = new Date(date).toLocaleTimeString();
      setPostDate({
        date: formattedDate,
        time: formattedTime,
      });
    }
  };

  useEffect(() => {
    if (postInfo._id) {
      handleComments();
    }

    if (postInfo.createdAt) {
      formattedDateAndTime(post.createdAt);
    }

    if (postInfo.likes) {
      setLikes(postInfo.likes.length);
    }

    if (postInfo.user) {
      const { username, profileImage } = postInfo.user[0];
      setPostAuthor({
        username,
        profileImage,
      });
    }
  }, [postInfo]);

  const updatePost = async () => {
    const response = await axios.get(`/api/auth/post/${post._id}`);
    const data = response.data;
    const postUpdated = data.data;
    setPostInfo(postUpdated);
  };

  const handleLikeStyle = () => {
    return postInfo.likes?.includes(user._id)
      ? "text-customLightpink h-6 w-6"
      : theme === "dark"
      ? "text-white h-6 w-6"
      : "text-black h-6 w-6";
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

  const handlePublishComment = async (postId: string, text: string) => {
    try {
      if (text.length > 0) {
        const payload = {
          userId: user._id,
          content: text,
        };
        await axios
          .post(`/api/auth/comment/${postId}`, payload)
          .then(() => {
            updatePost();
          })
          .catch((e) => console.log(e));
      } else {
        alert("Comment is empty!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="post-card cursor-pointer bg-gray-900 shadow-x-2 shadow-y-9 shadow-blur-2 rounded-none md:p-4"
      style={{ backgroundColor: "var(--gray)" }}
    >
      <div className="p-0 mb-4 rounded-md">
        <PostHeader
          loading={loading}
          username={postAuthor.username}
          profileImage={postAuthor.profileImage}
          createdAt={postDate}
        />

        <PostImage loading={loading} image={postImage} />

        <PostButtons
          loading={loading}
          likes={likes}
          handleLike={handleLike}
          handleLikeStyle={handleLikeStyle}
        />

        <PostContent
          loading={loading}
          username={postAuthor.username}
          profileImage={postAuthor.profileImage}
          content={postInfo.content}
        />

        <PostComments
          postId={String(postInfo._id)}
          loading={loading}
          totalComments={totalComments}
          commentContent={commentContent}
          image={postImage}
          username={postAuthor.username}
          profileImage={postAuthor.profileImage}
          content={postInfo.content}
          handlePublishComment={handlePublishComment}
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
