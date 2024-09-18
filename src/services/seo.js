import API from "./axios/config"
export const getSeo = async () => {
    try {
        const response = await API.get(`/seo`)
        return response.data
    } catch (err) {
        return err
    }
}