import Api from "@/services/axios/config";

// ** Things to do Api
// ** Get all Things to do
export const getAllThingstodo = async () => {
  return await Api
    .get(`/thingstodo`)
    .then(response => response.data)
    .catch((err) => err.response);
}

//** Get Single Things to do*/
export const getSingleThingstodo = async (id) => {
  return await Api
    .get(`/thingstodo/${id}`)
    .then(response => response.data)
    .catch((err) => err.response);
}

//** Get Things to do Based on City */
export const getAllCityThingstodo = async (id) => {
  return await Api
    .get(`/thingstodo/city/${id}`)
    .then(response => response.data)
    .catch((err => err.response))
} 