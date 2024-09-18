export interface Faq {
  faqs_question: string;
  faqs_answer: string;
}

export interface PackageContent {
  title: string;
  sub_title: string;
  add_more_things: string;
  time_period: string;
}

export interface Itinerary {
  itinerary_day: string;
  itinerary_title: string;
  transfer: string;
  hotel: string;
  sightseeings: string;
  adventure: string;
  hotel_detail: string;
  hotel_check_time: string;
  car_detail: string;
  adventcar_transfer_detailure: string;
  car_type: string;
  car_time_duration: string;
  itinerary_highlights: string;
}

export interface Illusion {
  illusions_title: string;
  illusions_icon: string;
}

export interface Package {
  _id: string;
  faqs_content: Faq[];
  package_content: PackageContent[];
  itinerary_content: Itinerary[];
  illusions_content: Illusion[];
  active: boolean;
  package_name: string;
  destination: string;
  price: number;
  imageURL: string;
  duration: { days: number; nights: number };
  date_range: { start_date: string | null; end_date: string | null };
  accommodations: string;
  max_capacity: number;
  available_slots: number;
  image_alt_text: string;
  budget_type: string;
  season: string;
  category_id: string;
  switch_toggle: boolean;
  content: string;
  highlight_editor: string;
  exclusions_editor: string;
  addons_editor: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  __v: number;
  tags: string;
  hotel_star: string;
}

export interface Meta {
  totalCount: number;
  totalPages: number;
}

export interface Result {
  meta: Meta;
  results: Package[];
}

export interface Filter {
  price: number[];
  max_capacity: number[];
  available_slots: number[];
  days: number[];
  nights: number[];
  hotel_star: string[];
  season: string[];
  destination: string[];
  budget_type: string[];
  categories: []
}
export interface HeaderFilter {
  price: number[];
  hotel_star: string[];
  season: string[];
  categories: string[];
  budget_type: string[];
  defaultProp: boolean;
}
export interface PackageResultResponse {
  data: Result[];
  filter: Filter[];
}

export interface Duration {
  days: number;
  nights: number;
}

export interface Tab {
  days: number;
  nights: number;
  label: string;
}


