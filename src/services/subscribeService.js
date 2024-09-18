import API from "./axios/config"
export const SubscribeEmailPostService = async ( data ) => {
    try {
        const response = await API.post(`/subscribe`, data)
        return response.data
    } catch (err) {
        return err
    }
}