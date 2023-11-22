import { Auth } from "../models/AuthModel"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const handleAuthRegister = async(req, res) => {
    try {
        const {name, email, password} = req.body
        if(!name || !email || !password) {
            return res.status(400).json({
                message: "Bad request"
            })
        }
        const user = await Auth.findOne({email: email})
        if(user) {
            return res.status(400).json({
                message: "User already exists"
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt); 
        const newUser = await Auth.create({
            name: name,
            email: email,
            password: hashPassword,
        })
        res.status(200).json({
            message: "Register success",
            data:  newUser
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const handleLogin = async(req, res) => {
    try {
        const {email, password} = req.body
        if(!email || !password) {
            return res.status(400).json({
                message: "Bad request"
            })
        }
        const user = await Auth.findOne({email: email})
        if(!user) {
            return res.status(400).json({
                message: "Account or password is incorrect"
            })
        }
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            const token = await jwt.sign(
              {
                id: user._id,
                user: user,
              },
              "KHOA_BI_MAT"
            );
            res.status(200).json({
              status: 200,
              token: token,
              data: user,
            });
          } else {
            return res.status(400).json({
              status: 401,
              message: "Account or password is incorrect",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}