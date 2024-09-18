import Api from "@/services/axios/config";

// ** Package Api
// ** Get all Package
export const getAllPackage = async () => {
  return await Api
  .get(`/packages`)
  .then(response => response.data)
  .catch((err => err.response))
} 

// ** Get all Package
export const getAllTabsPackage = async () => {
  return await Api
  .get(`/packages/package-with-tabs`)
  .then(response => response.data)
  .catch((err => err.response))
} 

//** Get Package Based on Category */
export const getAllCategoryPackage = async (id) => {
  return await Api
  .get(`/packages/category/${id}`)
  .then(response => response.data)
  .catch((err => err.response))
} 

//** Get Single Package Data*/
export const getSinglePackage = async (slug) => {
  return await Api
  .get(`/packages/${slug}`)
  .then(response => response.data)
  .catch((err => err.response))
} 

//** Get Special Package Data*/
export const getSpecialPackage = async () => {
  return await Api
  .get(`/packages/getSpecialPackages`)
  .then(response => response.data)
  .catch((err => err.response))
} 