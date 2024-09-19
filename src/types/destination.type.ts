export interface Faq {
    image: string;
    active: boolean;
    _id: string;
    question: string;
    answer: string;
    slug: string;
    __v: number;
    id: string;
}

export interface WhyKashmirOnlineContent {
    icon: string;
    content_text: string;
    content_safety: string;
}

export interface WhyKashmirOnline {
    image: string;
    whykashmironline_content: WhyKashmirOnlineContent[];
    active: boolean;
    _id: string;
    destinations: number;
    travellers: number;
    agents: number;
    sub_title: string;
    title: string;
    slug: string;
    id: string;
}

export interface Background {
    image: string;
    image1: string;
    active: boolean;
    _id: string;
    title: string;
    tags: string;
    meta_description: string;
    image_alt_text: string;
    image_alt_text1: string;
    city_id: string;
    background_content: string;
    history_content: string;
    keywords: string;
    slug: string;
    __v: number;
    imageURL: string;
    image1URL: string;
    id: string;
}

export interface LocationItem {
    image: string;
    active: boolean;
    _id: string;
    title: string;
    tags: string;
    meta_description: string;
    keywords: string;
    name: string;
    sub_title: string;
    city_id: string;
    content: string;
    image_alt_text: string;
    slug: string;
    __v: number;
    imageURL: string;
    id: string;
}

export interface HowToReachItem {
    title: any;
    sub_title: any;
    // Similar structure as LocationItem
}

export interface ThingsToDoItem {
    // Similar structure as LocationItem
}

export interface ReligiousPlaceItem {
    title: any;
    sub_title: any;
    // Similar structure as LocationItem
}

export interface HotelItem {
    title: any;
    sub_title: any;
    // Similar structure as LocationItem
}

export interface SightSeeingItem {
    // Similar structure as LocationItem
}

export interface HouseBoatItem {
    // Similar structure as LocationItem
}

export interface HospitalItem {
    hospital_content: any;
    title: any;
    sub_title: any;
    // Similar structure as LocationItem
}

export interface PharmacyItem {
    title: any;
    sub_title: any;
    // Similar structure as LocationItem
}

export interface ShoppingPlaceItem {
    title: any;
    sub_title: any;
    // Similar structure as LocationItem
}

export interface CollegeAndSchoolItem {
    map(arg0: (data: any) => any): unknown;
    title: any;
    sub_title: any;
    // Similar structure as LocationItem
}

export interface ThingsToBeNotedItem {
    // Similar structure as LocationItem
}

export interface RestaurantItem {
    restaurant_content: any;
    title: any;
    sub_title: any;
    // Similar structure as LocationItem
}

export interface SafetyContentItem {
    safety_title: string;
    safety_number: string;
}

export interface SafetyInformationItem {
    map: any;
    image: string;
    safety_content: SafetyContentItem[]
    active: boolean;
    _id: string;
    title: string;
    tags: string;
    meta_description: string;
    keywords: string;
    name: string;
    sub_title: string;
    city_id: string;
    content: string;
    image_alt_text: string;
    slug: string;
    __v: number;
    imageURL: string;
    id: string;
}


// Example of how you might use this in a component:
// Assume 'safetyInfo' is of type SafetyInformationItem and has been fetched from your API.
// ... and so on for other fields like 'location', 'generalinformation', 'safetyinformation', etc.

export interface DestinationResponse {
    faqs: Faq[];
    whykashmironline: WhyKashmirOnline[];
    background: Background[];
    location: LocationItem[];
    generalinformation: any[];  // Define the structure if available
    safetyinformation: SafetyInformationItem;  // Define the structure if available
    howtoreach: HowToReachItem[];
    thingstodo: ThingsToDoItem[];
    religiousplaces: ReligiousPlaceItem[];
    hotel: HotelItem[];
    sightseeing: SightSeeingItem[];
    houseboats: HouseBoatItem[];
    //hospitals: HospitalItem[];
    //pharmacies: PharmacyItem[];
    shoppingplaces: ShoppingPlaceItem[];
    collagesandschools: CollegeAndSchoolItem[];
    thingstobenoted: ThingsToBeNotedItem[];
    //restaurants: RestaurantItem[];
    other_data: any;
    hotels: any;
    shopping_places: any;
    collages_and_schools: any;
    restaurants: any;
    hospitals: any;
    pharmacies: any;
}