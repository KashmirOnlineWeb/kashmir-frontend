import Api from "@/services/axios/config";

// ** City Api
// ** Get all City
export const getAllCity = async () => {
  return await Api
    .get(`/city`)
    .then(response => response.data)
    .catch((err) =>  err.response);
}

export const getSingleCity = async (id) => {
  return await Api
    .get(`/destination/${id}`)
    .then(response => response.data)
    .catch((err) =>  err.response);
}

// get all dentinations from /dentinations
export const getAllDestinations = async () => {
  return await Api
    .get(`/destinations`)
    .then(response => response.data)
    .catch((err) =>  err.response);
}