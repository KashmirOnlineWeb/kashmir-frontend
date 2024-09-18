interface DateRange {
  start_date: Date;
  end_date: Date;
}

interface HighlightContent {
  title: string;
  content: string;
}

interface PackageContent {
  title: string;
  sub_title: string;
  add_more_things: string;
  time_period: string;
}

interface IteneryContent {
  itenery_day: string;
  itenery_title: string;
  transfer: string;
  hotel: string;
  sightseeings: string;
  adventure: string;
  hotel_detail: string;
  hotel_check_time: string;
  car_detail: string;
  car_transfer_detailure: string;
  car_type: string;
  car_time_duration: string;
  itenery_highlights: string;
}

interface IllusionsContent {
  illusions_title: string;
  illusions_icon: string;
}

interface FaqContent {
  faqs_question: string;
  faqs_answer: string;
}

interface Category {
  image: string;
  active: boolean;
  _id: string;
  category_name: string;
  min_price: number;
  slug: string;
  __v: number;
  imageURL: string;
  id: string;
}

export interface PackageDetails {
  duration: {
    days: number;
    nights: number;
  };
  date_range: DateRange;
  highlight_content: HighlightContent[];
  package_content: PackageContent[];
  itenery_content: IteneryContent[];
  illusions_content: IllusionsContent[];
  active: boolean;
  _id: string;
  faqs_content: FaqContent[];
  package_name: string;
  destination: string;
  price: number;
  accommodations: string;
  max_capacity: number;
  available_slots: number;
  image_alt_text: string;
  tags: string;
  budget_type: string;
  season: string;
  category_id: Category;
  switch_toggle: boolean;
  content: string;
  highlight_editor: string;
  exclusions_editor: string;
  addons_editor: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  __v: number;
  hotel_star: string;
  imageURL: string;
  galleryImageURL: any;
  id: string;
}
