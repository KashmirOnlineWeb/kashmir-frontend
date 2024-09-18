import Api from "@/services/axios/config"

export const HomeApi = async () => {
    return await Api.get(`/homepage?method=get&data=*`)
        .then(res => res)
        .catch((err) => err.res)
}