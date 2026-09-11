import { GalleryItem } from '../types';
import { IMG } from './images';

export const galleryCategories = ['All', 'Homestay', 'Tours', 'Jewellery', 'Handicrafts', 'Puri Life'];

export const galleryItems: GalleryItem[] = [
  { src: IMG.room1, alt: 'Jagannath Heritage Suite bedroom', caption: 'Jagannath Heritage Suite', category: 'Homestay' },
  { src: IMG.room2, alt: 'Sea Breeze Double Room', caption: 'Sea Breeze Double Room', category: 'Homestay' },
  { src: IMG.room3, alt: 'Garden Family Room', caption: 'Garden Family Room', category: 'Homestay' },
  { src: IMG.room4, alt: 'Budget Standard Room', caption: 'Budget Standard Room', category: 'Homestay' },
  { src: IMG.room5, alt: 'Rooftop Terrace Room', caption: 'Rooftop Terrace Room', category: 'Homestay' },
  { src: IMG.house1, alt: 'Homestay exterior on Grand Road', caption: 'Our Home on Grand Road', category: 'Homestay' },
  { src: IMG.beach1, alt: 'Puri beach sunrise', caption: 'Puri Beach Sunrise', category: 'Tours' },
  { src: IMG.beach2, alt: 'Golden sands of Puri', caption: 'Golden Sands of Puri', category: 'Tours' },
  { src: IMG.architecture, alt: 'Konark Sun Temple', caption: 'Konark Sun Temple', category: 'Tours' },
  { src: IMG.lake, alt: 'Chilika Lake boat', caption: 'Chilika Lake Safari', category: 'Tours' },
  { src: IMG.canoe, alt: 'Boat ride on Chilika', caption: 'Boat Ride on Chilika', category: 'Tours' },
  { src: IMG.temple, alt: 'Temple architecture of Odisha', caption: 'Temple Architecture of Odisha', category: 'Tours' },
  { src: IMG.nature1, alt: 'Eastern Ghats landscape', caption: 'Eastern Ghats Journey', category: 'Tours' },
  { src: IMG.jewellery1, alt: 'Handcrafted silver filigree jewellery', caption: 'Silver Filigree Craft', category: 'Jewellery' },
  { src: IMG.jewellery2, alt: 'Gold jewellery detail', caption: 'Handcrafted Gold Detail', category: 'Jewellery' },
  { src: IMG.art, alt: 'Pattachitra painting being created', caption: 'Pattachitra Painting', category: 'Handicrafts' },
  { src: IMG.market, alt: 'Pipli appliqué market', caption: 'Pipli Appliqué Crafts', category: 'Handicrafts' },
  { src: IMG.lanterns, alt: 'Festive crafts and lanterns', caption: 'Festive Crafts of Odisha', category: 'Handicrafts' },
  { src: IMG.mist, alt: 'Misty Odisha landscape', caption: 'Misty Odisha Mornings', category: 'Puri Life' },
  { src: IMG.city, alt: 'Temple city skyline', caption: 'Evenings on Grand Road', category: 'Puri Life' },
];
