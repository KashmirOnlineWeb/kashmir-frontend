import Api from "@/services/axios/config";

// ** Car Api
// ** Get all Car
export const getAllCar = async () => {
  return await Api
    .get(`/car`)
    .then(response => response.data)
    .catch((err) =>  err.response);
}