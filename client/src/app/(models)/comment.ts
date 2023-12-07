import mongoose, { Schema, model, models } from "mongoose";

const DBConnection: string | undefined = process.env.DATABASE_URI;
DBConnection ? mongoose.connect(DBConnection) : console.error(".env is not defined")
mongoose.Promise = global.Promise;

const commentSchema = new Schema({
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
});

const Comment = models.Comment || model("Comment", commentSchema);

module.exports = Comment;