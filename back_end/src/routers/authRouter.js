import express from "express"
import { handleAuthRegister, handleLogin } from "../controllers/authController"

const router = express.Router()

router.post("/auth/register", handleAuthRegister)
router.post("/auth/login", handleLogin)

export default router