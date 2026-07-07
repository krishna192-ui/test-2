export type Category = 'Men' | 'Women' | 'Kids';
export type Style = 'Ethnic' | 'Formal' | 'Casual' | 'Seasonal';

export interface Product {
  id: string;
  name: string;
  category: Category;
  style: Style;
  price: string;
  priceRange?: string;
  description: string;
  image: string;
  additionalImages?: string[];
  fabric?: string;
  technique?: string;
  care?: string;
  delivery?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
