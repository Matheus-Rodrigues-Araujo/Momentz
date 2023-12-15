import { Document, Schema, model, models, Types } from "mongoose";

export interface IImage extends Document {
    name: string;
    url: string;
    postId: Types.ObjectId;
  }
  
  const imageSchema = new Schema<IImage>(
    {
      name: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
      },
    },
    {
      timestamps: true,
      collection: 'App',
    }
  );

const Image = models.Image || model("Image", imageSchema);

export default Image;

