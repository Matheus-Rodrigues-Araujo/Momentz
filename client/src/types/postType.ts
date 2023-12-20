import { StaticImageData } from "next/image";

export type postType = {
  username: string;
  profileImage: StaticImageData;
  postImage: StaticImageData;
  datetime: Date;
  content: string;
};
