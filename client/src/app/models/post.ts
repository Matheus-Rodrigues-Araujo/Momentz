import { Document, Schema, model, models, Types } from "mongoose";
import { connectDatabase } from "@/lib/db";

connectDatabase();

export interface IPost extends Document {
  authorId: Types.ObjectId;
  content: string;
  likes: Types.ObjectId[];
  images: Types.ObjectId[];
}

const postSchema = new Schema<IPost>(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
      maxlength: 120,
    },
    likes: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
    images: [
      {
        type: Schema.Types.ObjectId,
        ref: "Image",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = models.Post || model("Post", postSchema);

export default Post;
