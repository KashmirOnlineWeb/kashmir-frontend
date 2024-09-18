export interface HotelDetails {
    _id: string;
    active: boolean;
    price: number;
    content: string;
    highlight_editor: string;
    hotel_name: string;
    location: string;
    city: string;
    contact: number;
    tax: number;
    city_id: string;
    total_rooms: number;
    breakfast: boolean;
    balcony: boolean;
    star: string;
    total_washrooms: number;
    total_lobbys: number;
    amenities: [
        String
    ],
    slug: string;
    __v: number;
    imageURL: string;
    id: string;
}
