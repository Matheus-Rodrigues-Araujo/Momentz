import { StaticImageData } from "next/image";
import { Types } from "mongoose";

export type postType = {
  _id: Types.ObjectId | string | null,
  username: string;
  profileImage: StaticImageData;
  postImage: StaticImageData;
  datetime: Date;
  content: string;
};
