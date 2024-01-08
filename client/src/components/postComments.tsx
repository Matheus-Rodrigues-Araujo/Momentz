import Skeleton from "react-loading-skeleton";
import "../../node_modules/react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/store/store";
import { PostInformation } from "./postCommentsCard";
import axios from "axios";

interface IPostComments {
  loading: boolean;
  postId: string;
  totalComments: number;
  commentContent: any;
  image: string;
  content: string;
  username: string;
  profileImage: string;
  handlePublishComment: any;
  setCommentsCardVisibility: () => void;
}

export const PostComments = ({
  postId,
  loading,
  username,
  profileImage,
  totalComments,
  commentContent,
  image,
  content,
  handlePublishComment,
  setCommentsCardVisibility,
}: IPostComments) => {
  const [text, setText] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const theme = useAppSelector((state) => state.theme);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!event.target.value) {
      setIsButtonVisible(false);
    }
    setText(event.target.value);
  };

  const autoResize = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className="comment-container grid gap-3">
      {loading ? (
        <Skeleton
          width={120}
          height={20}
          className="rounded-full mr-2 my-1 product-image"
          style={{ borderRadius: "2em" }}
        />
      ) : (
        <p
          onClick={setCommentsCardVisibility}
          className="text-customLightGray hover:text-gray-200"
        >
          {totalComments === 1
            ? `See ${totalComments} comment`
            : totalComments >= 2
            ? `See ${totalComments} comments`
            : "No comment"}
        </p>
      )}
      {loading ? (
        <Skeleton
          width={120}
          height={20}
          className="rounded-full mr-2 product-image my-3"
          style={{ borderRadius: "2em" }}
        />
      ) : (
        <div className="flex gap-2">
          <textarea
            className={`${
              theme === "dark"
                ? "bg-customDark text-white"
                : "bg-white text-black"
            } w-[90%] h-12 focus:outline-none resize-none overflow-y-auto`}
            value={text}
            placeholder="Add comment"
            onChange={handleChange}
            onInput={() => {
              autoResize;
              setIsButtonVisible(true);
            }}
          />
          {isButtonVisible && (
            <button
              onClick={() => {
                handlePublishComment(postId, text);
                setText("");
              }}
              className="w-20 text-customBlue text-md hover:text-customLightBlue"
            >
              Publish
            </button>
          )}
        </div>
      )}
    </div>
  );
};
