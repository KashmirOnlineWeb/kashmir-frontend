import API from "./axios/config"
export const getFaqs = async () => {
    try {
        const response = await API.get(`/faqs`)
        return response.data
    } catch (err) {
        return err
    }
}