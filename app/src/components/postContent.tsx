import Skeleton from "react-loading-skeleton";
import "../../node_modules/react-loading-skeleton/dist/skeleton.css";
import { useAppSelector } from "@/store/store";

interface IPostContent {
  loading: boolean;
  username: string;
  content: string;
  profileImage: string;
}

export const PostContent = ({
  loading,
  username,
  profileImage,
  content,
}: IPostContent) => {
  const theme = useAppSelector((state) => state.theme);

  return (
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
          } text-sm content mb-4`}
        >
          {content}
        </p>
      )}
    </div>
  );
};
