import axios from "axios";
import { BE_URL } from "../constants/url";
import { toast } from "react-toastify";

export const fetchGetAllCustomer = async ({queryKey}) => {
    try {
        const customers = await axios.get(`${BE_URL}/users?page=${queryKey[1]?.page}&limit=${queryKey[1]?.limit}`)
        return customers
    } catch (error) {
        console.log(error);
    }
}

export const fetchDeleteCustomer = async (userId) => {
    try {
        const customer =  await axios.delete(`${BE_URL}/user/${userId}`)
        return customer
    } catch (error) {
        toast.error(error.message)
    }
}