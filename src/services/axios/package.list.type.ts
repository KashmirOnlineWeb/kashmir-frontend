export interface PackageContent {
  illusions_title: string;
  illusions_icon: string;
}

export interface Package {
  _id: string;
  faqs_content: any[];
  package_content: any[];
  itenery_content: any[];
  illusions_content: PackageContent[];
  active: boolean;
  package_name: string;
  destination: string;
  price: number;
  duration: {
    days: number;
    nights: number;
  };
  date_range: {
    start_date: string | null;
    end_date: string | null;
  };
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

export interface Filter {
  price: number[];
  max_capacity: number[];
  available_slots: number[];
  days: number[];
  nights: number[];
  hotel_star: string[];
  season: string[];
  destination: string[];
}

export interface Meta {
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

export interface FiltersAndResults {
  filters: Filter;
  meta: Meta;
  results: Package[];
}
