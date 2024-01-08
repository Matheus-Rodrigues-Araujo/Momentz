export const handleLikeStyle = (
  postLikes: String[],
  userId: string,
  theme: string
) => {
  return postLikes?.includes(userId)
    ? "text-customLightpink h-6 w-6"
    : theme === "dark"
    ? "text-white h-6 w-6 hover:text-gray-400"
    : "text-black h-6 w-6 hover:text-gray-400";
};
