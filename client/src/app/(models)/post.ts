import mongoose, { Schema, model, models } from "mongoose";

const DBConnection: string | undefined = process.env.DATABASE_URI;
DBConnection ? mongoose.connect(DBConnection) : console.error(".env is not defined")
mongoose.Promise = global.Promise;

const postSchema = new Schema({
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String,
        ref: "User",
        required: true,
        maxlength: 120,
    },
    likes: {
        type: [Schema.Types.ObjectId],
        ref: "User",
        default: []
    }
},{
    timestamps: true,
})

const Post = models.Post || model("Post", postSchema);

module.exports = Post;