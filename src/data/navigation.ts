import { NavLink, MegamenuItem } from '@/types';
import { IMG } from '@/data/images';
import {
  COMPANY_NAME,
  BRAND,
  TAGLINE,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  CONTACT_ADDRESS,
  WHATSAPP_NUMBER,
} from '@/lib/constants';

export {
  COMPANY_NAME,
  BRAND,
  TAGLINE,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  CONTACT_ADDRESS,
  WHATSAPP_NUMBER,
};

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
