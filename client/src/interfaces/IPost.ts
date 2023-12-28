import { StaticImageData } from "next/image";
import { Types } from "mongoose";

export type postType = {
  _id: Types.ObjectId | string;
  username: string;
  profileImage: StaticImageData;
  postImage: StaticImageData;
  likes: [];
  datetime: Date;
  content: string;
};

export interface IPost {
  post: postType;
}
