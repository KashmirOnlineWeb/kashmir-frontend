import Api from "@/services/axios/config"

export const DiscoverApi = async (id) => {
    return await Api.get(id)
        .then(res => res)
        .catch(err => err.res)
}