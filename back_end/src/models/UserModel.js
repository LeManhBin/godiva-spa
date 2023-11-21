import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    note: {
        type: String,
    }
})

export const User = mongoose.model("user", userSchema)