import axios from "axios";
import { BE_URL } from "../constants/url";

export const fetchGetAllCustomer = async ({queryKey}) => {
    try {
        const customers = await axios.get(`${BE_URL}/users?page=${queryKey[1]?.page}&limit=${queryKey[1]?.limit}`)
        return customers
    } catch (error) {
        console.log(error);
    }
}