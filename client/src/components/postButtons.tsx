import Skeleton from "react-loading-skeleton";
import "../../node_modules/react-loading-skeleton/dist/skeleton.css";
import { useAppSelector } from "@/store/store";
import {
  HeartIcon,
  PaperAirplaneIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/solid";

interface IPostButtons {
  loading: boolean;
  likes: number;
  handleLikeStyle: () => string;
  handleLike: () => void;
}

export const PostButtons = ({
  loading,
  likes,
  handleLike,
  handleLikeStyle,
}: IPostButtons) => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <div className="flex items-center mt-4 space-x-2">
      {loading ? (
        <Skeleton width={25} height={25} style={{ borderRadius: "2em" }} />
      ) : (
        <button
          title="Curtir"
          onClick={handleLike}
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
    </div>
  );
};
