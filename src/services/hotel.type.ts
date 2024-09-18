export interface Faq {
    faqs_question: string;
    faqs_answer: string;
}
export interface Hotel {
    _id: string;
    faqs_content: Faq[];
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
    amenities:
    string,
    slug: string;
    __v: number;
}

export interface Meta {
    totalCount: number;
    totalPages: number;
}

export interface Filter {
    price: number[];
    star: string[];
    location: string[];
    ammenities: string[]
}
export interface HotelResultResponse {
    results: Hotel;
    filters: Filter;
}