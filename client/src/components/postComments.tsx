import Skeleton from "react-loading-skeleton";
import "../../node_modules/react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";
import { useAppSelector } from "@/store/store";
interface IPostComments {
  loading: boolean;
}

export const PostComments = ({ loading }: IPostComments) => {
  const [text, setText] = useState("");
  const theme = useAppSelector((state) => state.theme);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
  );
};
