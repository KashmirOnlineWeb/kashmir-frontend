import API from "./axios/config"
export const getHowItworks = async () => {
    try {
        const response = await API.get(`/howitworks`)
        return response.data
    } catch (err) {
        return err
    }
}