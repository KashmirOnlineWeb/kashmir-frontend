import Api from "@/services/axios/config";
import { ListingType } from "@/services/listing.type";
import { PackageDetails } from "@/services/axios/package.details.type";
import { FiltersAndResults } from "@/services/axios/package.list.type";
import { PackageResultResponse } from "@/services/listing.type.package";

export namespace ListingServices {
  export const Package = async (data: {
    available_slots: string | string[] | undefined;
    price: string | string[] | undefined;
    nights: string | string[] | undefined;
    hotel_star: string | string[] | undefined;
    max_capacity: string | string[] | undefined;
    destination: string | string[] | undefined;
    days: string | string[] | undefined;
    season: string | string[] | undefined;
    category_name: string | string[] | undefined;
    limit: number;
    budget_type: string | string [] | undefined;
    category: string | string [] | undefined;

  }): Promise<PackageResultResponse> => {
    try {
      const res = await Api.post(
        `/listing?type=package&limit=${data.limit}`,
        data
      );
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  export const PackageDetails = async (data: {
    slug: string;
  }): Promise<PackageDetails> => {
    try {
      const res = await Api.get(`/listing/${data.slug}?type=package`);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
