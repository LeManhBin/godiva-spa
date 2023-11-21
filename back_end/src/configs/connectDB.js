import mongoose from "mongoose";

const connectDataBase = () => {
    try {
        mongoose.connect("mongodb+srv://pacmam2k1:godiva123@cluster0.010p19e.mongodb.net/").then(() => {
            console.log("Connect DB success!");
        })
    } catch (error) {
        console.log(error);
    }
}

export default connectDataBase