import Skeleton from "react-loading-skeleton";
import "../../node_modules/react-loading-skeleton/dist/skeleton.css";

interface IPostImage {
  loading: boolean;
  image: string;
}

export const PostImage = ({ loading, image }: IPostImage) => {
  if (loading) {
    return <Skeleton className="skeleton-img" />;
  }
  return (
    <img
      src={image}
      width={50}
      height={50}
      alt="Post image"
      className="h-auto w-[460px] rounded-md md:max-w-[500px]"
    />
  );
};
