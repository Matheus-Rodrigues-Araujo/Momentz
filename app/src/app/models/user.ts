import { Document, Schema, model, models, Types } from "mongoose";
import { connectDatabase } from "@/lib/db";

connectDatabase();

export interface IUser extends Document {
  username: string;
  birthdate: Date;
  email: string;
  password: string;
  profileImage: string;
  followings: Types.ObjectId[];
  followers: Types.ObjectId[];
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      maxlength: 20,
    },
    birthdate: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profileImage: {
      type: String,
      default: "/default-profile-image.jpg",
    },
    followings: {
      type: [Schema.Types.ObjectId],
      default: [],
    },
    followers: {
      type: [Schema.Types.ObjectId],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", userSchema);

export default User;
