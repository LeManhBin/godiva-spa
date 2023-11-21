import axios from "axios";
import { BE_URL } from "../constants/url";

export const fetchRegister = async(payload) => {
    try {
        const user = await axios.post(`${BE_URL}/register`, payload)
        return user
    } catch (error) {
        console.log(error.message);
    }
}