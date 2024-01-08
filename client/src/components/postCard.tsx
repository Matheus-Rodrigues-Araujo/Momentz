"use client";
import "../../node_modules/react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/store/store";
import { UserState } from "@/reducers/userSlice";
import { PostButtons } from "./postButtons";
import { PostComments } from "./postComments";
import { PostContent } from "./postContent";
import { PostImage } from "./postImage";
import { PostHeader } from "./postHeader";
import { PostCommentsCard } from "./postCommentsCard";
// utils
import { formatDateAndTime } from "@/utils/formatDateAndTime";
import { enableScroll } from "@/utils/enableScroll";
import { disableScroll } from "@/utils/disableScroll";
//services
import { handleComments } from "@/services/handleComments";

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
  const [commentsCardVisibility, setCommentsCardVisibility] = useState(false);
  const [postInfo, setPostInfo] = useState(post);
  const [postAuthor, setPostAuthor] = useState({
    username: "",
    profileImage: "",
  });
  const [postDate, setPostDate] = useState({
    date: "",
    time: "",
  });
  const [likesCount, setLikesCount] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [commentContent, setCommentContent] = useState("");

  const postImage = `/uplouds/post-10.jpg`;

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  const handleCommentsCardVisibility = () => {
    setCommentsCardVisibility(!commentsCardVisibility);
  };

  async function getComment(){
    const data = await handleComments(postInfo._id)
    if(data){
      const { total, comment } = data
      setTotalComments(total)
      setCommentContent(comment)
    }
  }

  useEffect(() => {
    if (postInfo._id) {
      getComment()
    }

    if (postInfo.createdAt) {
      const datetime = formatDateAndTime(postInfo.createdAt);
      datetime && setPostDate(datetime);
    }

    if (postInfo.likes) {
      setLikesCount(postInfo.likes.length);
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

  useEffect(() => {
    commentsCardVisibility ? disableScroll() : enableScroll();
  }, [commentsCardVisibility]);

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
          likes={postInfo?.likes}
          likesCount={likesCount}
          handleLike={handleLike}
          // handleLikeStyle={handleLikeStyle}
          setCommentsCardVisibility={handleCommentsCardVisibility}
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
          setCommentsCardVisibility={handleCommentsCardVisibility}
        />

        {commentsCardVisibility && (
          <PostCommentsCard
            loading={loading}
            commentsCardVisibility={commentsCardVisibility}
            setCommentsCardVisibility={handleCommentsCardVisibility}
            username={postAuthor.username}
            profileImage={postAuthor.profileImage}
            image={postImage}
            content={postInfo.content}
            commentContent={commentContent}
          />
        )}

        <div
          className={`${
            theme === "dark" ? "bg-gray-500" : "bg-black"
          } w-[100%] h-[1px]`}
        ></div>
      </div>
    </div>
  );
};
