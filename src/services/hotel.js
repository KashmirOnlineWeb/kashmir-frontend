import Api from "@/services/axios/config";

// ** Hotel Api
// ** Get all Hotel
export const getAllHotel = async () => {
  return await Api
    .get(`/hotel`)
    .then(response => response.data)
    .catch((err) => err.response);
}

//** Get Single Hotel Data*/
export const getSingleHotel = async (slug) => {
  return await Api
    .get(`/hotel/${slug}`)
    .then(response => response.data)
    .catch((err) => err.response);
}