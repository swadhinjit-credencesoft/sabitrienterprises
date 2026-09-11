import { NavLink, MegamenuItem } from '../types';
import { IMG } from './images';

export const COMPANY_NAME = 'Sabitri Enterprises';
export const BRAND = 'Sabitri';
export const TAGLINE = 'Crafting Experiences, Honouring Heritage';
export const CONTACT_PHONE = '+91  96912 67091';
export const CONTACT_EMAIL = 'info@sabitrienterprises.com';
export const CONTACT_ADDRESS = 'Grand Road, Puri, Odisha, India 752001';
export const WHATSAPP_NUMBER = '919000000000';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Homestay', href: '/homestay' },
  { label: 'Jewellery', href: '/jewellery' },
  { label: 'Tours', href: '/tours' },
  { label: 'Handicrafts', href: '/handicrafts' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const megamenuItems: MegamenuItem[] = [
  {
    name: 'Sabitri Homestay',
    short: 'Stay',
    tagline: 'Heritage homestay near Jagannath Temple, Puri.',
    image: IMG.house1,
    href: '/homestay',
  },
  {
    name: 'Sabitri Jewellery',
    short: 'Adorn',
    tagline: 'Handcrafted traditional jewellery collections.',
    image: IMG.jewellery1,
    href: '/jewellery',
  },
  {
    name: 'Sabitri Tours & Travels',
    short: 'Explore',
    tagline: 'Curated Odisha tour packages and travel services.',
    image: IMG.beach1,
    href: '/tours',
  },
  {
    name: 'Sabitri Handicrafts',
    short: 'Own',
    tagline: 'Pattachitra, filigree and Odisha craft heritage.',
    image: IMG.art,
    href: '/handicrafts',
  },
];

export const divisions = megamenuItems;
