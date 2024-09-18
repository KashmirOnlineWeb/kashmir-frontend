import API from "./axios/config"
export const getTestimonial = async () => {
    try {
        const response = await API.get(`/testimonial`)
        return response.data
    } catch (err) {
        return err
    }
}