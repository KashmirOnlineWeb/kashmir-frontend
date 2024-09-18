import API from "@/services/axios/config"
export const getContactDetail = async () => {
    return await API
        .get(`/contactdetail`)
        .then((response) => response)
        .catch((err) => err)
}