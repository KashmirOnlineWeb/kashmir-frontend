import Api from "@/services/axios/config";

export const BookingPackage = async (data) => {
    return await Api.post("/bookingpackage", data)
        .then((response) => response.data)
        .catch(err => err)
}