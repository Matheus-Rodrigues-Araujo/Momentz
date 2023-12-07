import mongoose, {Schema, model, models} from "mongoose";

const DBConnection: string | undefined = process.env.DATABASE_URI;
DBConnection ? mongoose.connect(DBConnection) : console.error(".env is not defined")
mongoose.Promise = global.Promise;

const userSchema = new Schema({
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
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
        default: "../../../public/default-profile-image.jpg",
    },
    followings: {
        type: [Schema.Types.ObjectId],
        default: []
    },
    followers: {
        type: [Schema.Types.ObjectId],
        default: []
    },
},{
    timestamps: true,
})

const User = models.User || model("User", userSchema);

module.exports = User;