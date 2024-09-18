import API from "./axios/config"

export const getCulture = async () => {
    try {
        const response = await API.get(`/culture`)
        return response.data
    } catch (err) {
        return err
    }
}

export const getSingleCulture = async (id) => {
    try {
        const response = await API.get(`/culture/${id}`)
        return response.data
    } catch (err) {
        return err
    }
}