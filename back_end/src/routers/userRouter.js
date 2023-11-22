import express from "express";
import { handleDeleteUser, handleGetAllUser, handleRegister } from "../controllers/userController";
import { verifyToken } from "../middleware/authMiddleware";

const router = express.Router()

router.post("/register", handleRegister)
router.get("/users", handleGetAllUser)
router.delete("/user/:userId", handleDeleteUser)

export default router