import axios from 'axios';
import Api from "@/services/axios/config";

// ** Top Destination Api
// ** Get all Top Destination
export const getUserAllWhishlists = async (user_id) => {
  return await Api
    .get(`/wishlist/` + user_id)
    .then(response => response.data)
    .catch((err) => err.response);
}

export const storeWhishlist = async (payload) => {
  return await Api
    .post(`/wishlist/`, payload)
    .then(response => response.data)
    .catch((err) => err.response);
}
