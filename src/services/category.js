import Api from "@/services/axios/config";

// ** Category Api
// ** Get all Category
export const getAllCategory = async () => {
  return await Api
    .get(`/categories`)
    .then(response => response.data)
    .catch((err) =>  err.response);
}




