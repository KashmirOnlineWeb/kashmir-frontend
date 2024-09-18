export namespace HotelSecondType {
    export interface price {
        x: number;
        xmax: number;
    }
    export interface filters {
        price: number[];
        star: string[];
        location: string[];
        ammenities: string[]
    }
    export type HotelResult = {
        [x: string]: string | undefined;
        _id: string;
        active: any;
        price: any;
        content: string;
        highlight_editor: string;
        hotel_name: string;
        location: string;
        city: string;
        contact: any;
        tax: any;
        city_id: string;
        total_rooms: any;
        breakfast: any;
        balcony: any;
        star: string;
        total_washrooms: any;
        total_lobbys: any;
        amenities:
        string,
        slug: string;
        __v: any;
    };
    export type HotelResponseData = {
        meta: {
            totalCount: number;
            currentPage: number;
            totalPages: number;
        };
        filters: filters;
        results: HotelResult[];
    };
}
