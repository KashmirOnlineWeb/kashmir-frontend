import Api from "@/services/axios/config"

export const DiscoverApi = async (id) => {
    return await Api.get(`discover?data=*&method=get&city=${id}`)
        .then(res => res)
        .catch(err => err.res)
}