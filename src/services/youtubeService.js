import API from "./axios/config"
export const getyoutube = async () => {
    try {
        const response = await API.get(`/youtube`)
        return response.data
    } catch (err) {
        return err
    }
}