import API from "./axios/config"

export const getAbout = async () => {
    try {
        const response = await API.get(`/about`)
        return response.data
    } catch (err) {
        return err
    }
}