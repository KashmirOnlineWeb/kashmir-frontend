import axios from 'axios';
import Api from "@/services/axios/config";

// ** Top Destination Api
// ** Get all Top Destination
export const getAllTopdestination = async () => {
  return await Api
    .get(`/topdestination`)
    .then(response => response.data)
    .catch((err) => err.response);
}

//** Get Single Top Destination*/
export const getSingleTopdestination = async (id) => {
  return await axios
    .get(`${process.env.NEXT_PUBLIC_CLERK_API_URL}api/v1/topdestination/${id}`)
    .then(response => response.data)
    .catch((err) => err.response);
}

//** Get Top Destination Based on City */
export const getAllCityTopDestination = async (id) => {
  return await axios
    .get(`${process.env.NEXT_PUBLIC_CLERK_API_URL}api/v1/topdestination/city/${id}`)
    .then(response => response.data)
    .catch((err => err.response))
} 