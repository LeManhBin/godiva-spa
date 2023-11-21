import express from "express";
import { handleGetAllUser, handleRegister } from "../controllers/userController";

const router = express.Router()

router.post("/register", handleRegister)
router.get("/users", handleGetAllUser)

export default router