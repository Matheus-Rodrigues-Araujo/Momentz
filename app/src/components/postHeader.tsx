import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "../../node_modules/react-loading-skeleton/dist/skeleton.css";
import { useAppSelector } from "@/store/store";

interface IPostHeader {
  loading: boolean;
  username: string;
  profileImage: string;
  createdAt: {
    date: string;
    time: string;
  };
}

export const PostHeader = ({
  loading,
  username,
  profileImage,
  createdAt
}: IPostHeader) => {
  const theme = useAppSelector((state) => state.theme);

  return (
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
          <p
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } text-sm font-medium`}
          >
            {username}
          </p>
        )}
        {loading ? (
          <Skeleton width={120} />
        ) : (
          <p className="text-gray-500 text-sm font-light">
            {createdAt.date}
          </p>
        )}
      </div>
    </div>
  );
};
