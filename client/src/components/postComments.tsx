import Skeleton from "react-loading-skeleton";
import "../../node_modules/react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";
import { useAppSelector } from "@/store/store";
import { PostInformation } from "./postInformation";

interface IPostComments {
  loading: boolean;
  postId: string;
  totalComments: number;
  commentContent: any;
  image: string;
  content: string;
  username: string;
  profileImage: string;
}

export const PostComments = ({
  loading,
  username,
  profileImage,
  totalComments,
  commentContent,
  image,
  content,
}: IPostComments) => {
  const [text, setText] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isInformationVisible, setIsInformationVisible] = useState(false);

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

  const handlePostInformation = () => {
    setIsInformationVisible(!isInformationVisible);
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
          onClick={() => setIsInformationVisible(!isInformationVisible)}
          className="text-customLightGray hover:text-gray-200"
        >
          {totalComments ? `See all ${totalComments} comments` : "No comment"}
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
            <button className="w-20 text-customBlue text-md hover:text-customLightBlue">
              Publish
            </button>
          )}
          {isInformationVisible && (
            <PostInformation
              loading={loading}
              setPostVisibility={handlePostInformation}
              username ={username}
              profileImage={profileImage}
              image={image}
              content={content}
              commentContent={commentContent}
            />
          )}
        </div>
      )}
    </div>
  );
};
