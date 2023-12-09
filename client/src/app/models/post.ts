import { Document, Schema, model, models, Types } from "mongoose";

export interface IPost extends Document {
    authorId: Types.ObjectId;
    content: string;
    likes: Types.ObjectId[];
    images: Types.ObjectId[]; // Array de referências às imagens associadas
}

const postSchema = new Schema<IPost>(
{
    authorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    },
    content: {
    type: String,
    required: true,
    maxlength: 120,
    },
    likes: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
    default: [],
    },
    images: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Image',
    },
    ],
},
{
    timestamps: true,
    collection: 'App',
}
);

const Post = models.Post || model("Post", postSchema);

export default Post;