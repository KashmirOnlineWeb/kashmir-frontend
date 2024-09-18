import Api from "@/services/axios/config";
import { ListingType } from "@/services/listing.type";
import { HotelDetails } from "./hotel.detail.type";
import { FiltersAndResults } from "@/services/axios/package.list.type";
import { HotelResultResponse } from "@/services/hotel.type";

export namespace HotelServices {
    export const Hotel = async (data: {
        price: string | string[] | undefined;
        location: string | string[] | undefined;
        star: string | string[] | undefined;
        limit: number;
    }): Promise<HotelResultResponse> => {
        console.log(data, "chack data prop in hotel service")
        try {
            const res = await Api.post(
                `/listing?type=hotel&limit=${data.limit}`,
                data
            );
            console.log(res.data[0].results.filter((value:any) => value.star == data.star), "hotel post api data[0]res")
            return Promise.resolve(res.data[0]);
        } catch (e) {
            return Promise.reject(e);
        }
    };
    export const HotelDetails = async (data: {
        slug: string;
    }): Promise<HotelDetails> => {
        try {
            const res = await Api.get(`/listing/${data.slug}?type=hotel`);
            return Promise.resolve(res.data);
        } catch (e) {
            return Promise.reject(e);
        }
    };
}
