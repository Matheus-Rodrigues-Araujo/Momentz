import mongoose, { Schema, model, models } from "mongoose";

const DBConnection: string | undefined = process.env.DATABASE_URI;
DBConnection ? mongoose.connect(DBConnection) : console.error(".env. is not defined")
mongoose.Promise = global.Promise;

const imageSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    }
},   {
    timestamps: true,
});

const Image = models.Image || model("Image", imageSchema);

module.exports = Image;