import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import connectDataBase from "./configs/connectDB";
import userRouter from "./routers/userRouter";
import authRouter from "./routers/authRouter"
const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connectDataBase()

app.use("/api",  userRouter)
app.use("/api",  authRouter)

app.listen(8000, ()=> {
    console.log(`Server is running on port 8000`);
})