import axios from "axios";
import { BE_URL } from "../constants/url";
import { toast } from "react-toastify";

export const fetchAuthRegister = async(payload) => {
    try {
        const data = await axios.post(`${BE_URL}/auth/register`, payload)
        return data
    } catch (error) {
        console.log(error);
    }    
}

export const fetchLogin = async(payload) => {
    try {
        const data = await axios.post(`${BE_URL}/auth/login`, payload)
        return data 
    } catch (error) {
        if(error.request.status === 400) {
            toast.error("Tài khoản hoặc mật khẩu không chính xác")
        }else {
            console.log(error);
        }
    }
}