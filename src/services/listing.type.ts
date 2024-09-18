export namespace ListingType {
  export interface price {
    x: number;
    xmax: number;
  }
  export interface filters {
    price: number[];
    max_capacity?: number[];
    available_slots?: number[];
    days?: number[];
    nights?: number[];
    hotel_star: string[];
    season: string[];
    destination?: string[];
  }
  export interface CategoriesFilters {
    // days: number[];
    // nights: number[];
    // max_capacity: number[];
    // available_slots: number[];
    destination: string[];
    season: string[];

  }
  interface PackageItenary {
    title: string;
    description: string;
  }

  interface PackageHighlight {
    title: string;
    content: string;
  }
  export type PackageResult = {
    package_name: string;
    destination: string;
    content: string;
    description: string;
    price: number;
    duration: {
      days: number;
      nights: number;
    };
    date_range: {
      start_date: Date;
      end_date: Date;
    };
    accommodations: string;
    max_capacity: number;
    available_slots: number;
    image: string;
    imageURL: string;
    category_id: string;
    highlight_content: PackageHighlight[];
    highlight_title: string;
    image_alt_text: string;
    package_content: PackageItenary[];
    time_period: string;
    title: string;
    sub_title: string;
    add_more_things: string;
    itenery_content: PackageItenary[];
    itenery_title: string;
    itenery_description: string;
    switch_toggle: boolean;
    hotel_detail: string;
    hotel_star: string;
    hotel_check_time: string;
    car_detail: string;
    car_transfer_detail: string;
    illusions_content: PackageItenary[];
    illusions_title: string;
    illusions_icon: string;
    active: boolean;
    slug: string;
  };
  export type HotelResponse = {
    meta: {
      totalCount: number;
      currentPage: number;
      totalPages: number;
    };
    filters: filters;
    results: PackageResult[];
  };
}
