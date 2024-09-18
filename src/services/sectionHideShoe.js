import API from "./axios/config"
export const getsectionHideShow = async () => {
    try {
        const response = await API.get(`/sectionhideshow`)
        return response.data
    } catch (err) {
        return err
    }
}