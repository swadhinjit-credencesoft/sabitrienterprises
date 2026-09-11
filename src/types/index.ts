export interface Estate {
  id: number;
  name: string;
  location: string;
  status: string;
  statusColor: 'emerald' | 'zinc';
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  garage: number;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
  hasMegamenu?: boolean;
}

export interface MegamenuItem {
  name: string;
  short: string;
  tagline: string;
  image: string;
  href: string;
}

export interface HeroSlide {
  index: string;
  label: string;
  image: string;
  video?: string;
  badge: string;
  title: string;
  subtitle: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}

export interface IconCard {
  icon: string;
  title: string;
  description: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  service: string;
  rating: number;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Room {
  slug: string;
  name: string;
  price: string;
  size: string;
  capacity: number;
  beds: string;
  bathrooms: number;
  image: string;
  images: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  status: string;
}

export interface TourPackage {
  slug: string;
  name: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  highlights: string[];
  itinerary: { day: string; title: string; description: string }[];
  status: string;
}

export interface Destination {
  slug: string;
  name: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface CollectionItem {
  slug: string;
  name: string;
  category: string;
  material: string;
  priceFrom: string;
  price?: string;
  mrp?: string;
  image: string;
  description: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  image: string;
  description: string;
  products: CollectionItem[];
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  category: string;
}

export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface PolicyDocument {
  slug: string;
  title: string;
  description: string;
  sections: { heading: string; body: string[] }[];
}

export interface JobPosting {
  title: string;
  division: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  body: { heading: string; content: string[] }[];
}
