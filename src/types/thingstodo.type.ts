export interface ThingToDo {
    city_name: any;
    active: boolean;
    category_id: string;
    city_id: string;
    content: string; // Assuming this is HTML content
    faqs_content: any[]; // Replace 'any' with a more specific type if you have the structure
    highlight_content: string[]; // Assuming this is an array of JSON strings or similar structure
    id: string;
    image: string; // Image filename
    imageURL: string; // Full image URL
    price: number;
    slug: string;
    sub_title: string;
    title: string;
    _id: string;
  }
  
  // Example usage:
  export interface ThingsTodoResultResponse {
    data: ThingToDo[];
    status: string;
    results: number;
}
  