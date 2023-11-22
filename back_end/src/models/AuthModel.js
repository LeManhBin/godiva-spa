import mongoose from "mongoose";
const {Schema} = mongoose

const authModel = new Schema({
    name: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})


export const Auth = mongoose.model("auth", authModel)