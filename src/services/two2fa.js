import axios from "axios";
import Api from "@/services/axios/config";

export const Twofa = async (data) => {
    try {
        const response = await axios.post(`http://localhost:4000/api/v1/users/user-2fa`, data)
        return response.data
    }
    catch (err) { err }
}

export const getTwofa = async (id) => {
    console.log("idd", id)
    try {
        const response = await axios.get(`http://localhost:4000/api/v1/users/getuser-2fa/${id}`)
        return response.data
    }
    catch (err) { err }
} 