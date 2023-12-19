import { Document, Schema, model, models, Types } from "mongoose";
import { connectDatabase } from "@/lib/db";

connectDatabase()

export interface IComment extends Document{
    authorId: Types.ObjectId;
    postId: Types.ObjectId;
    content: string;
}

const commentSchema = new Schema<IComment>({
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    },
    content: {
        type: String,
        maxlength: 120,
        required: true
    }
},{
    timestamps: true,
    collection: 'App',
});

const Comment = models.Comment || model("Comment", commentSchema);

export default Comment;