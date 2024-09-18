export interface Author {
  node: {
    id: string;
    firstName: string;
    lastName: string;
  };
}

export interface Category {
  nodes: {
    id: string;
    name: string;
    link: string;
  }[];
}

export interface FeaturedImage {
  node: {
    altText: string;
    caption: string;
    link: string;
    title: string;
  };
}

export interface Post {
  date: string;
  author: Author;
  categories: Category;
  id: string;
  title: string;
  link: string;
  content: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  slug: string;
}
