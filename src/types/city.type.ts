export interface City {
    active: boolean;
    city_content: string; // Assuming this is an array of JSON strings
    city_name: string;
    content: string; // HTML content
    highlight_content: string[]; // Assuming this is an array of JSON strings
    id: string;
    image: string; // Image filename
    imageURL: string; // Full image URL
    slug: string;
    switch_toggle: boolean;
    highlight_editor: string;
    galleryImageURL: string;
    _id: string;
}

export interface CityResultResponse {
    data: City[];
    status: string;
    results: number;
}

export interface CityBestTimeToVisit {
    time_period: string | undefined; sub_title: string | undefined;
     title: string | undefined; add_more_things: string | undefined;
}