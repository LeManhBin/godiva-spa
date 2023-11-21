import mongoose from "mongoose";

const {Schema} = mongoose

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    
})