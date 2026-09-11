import { HeroSlide, Testimonial, FaqItem } from '@/types';
import { IMG } from '@/data/images';
import { rooms } from '@/data/rooms';

export const homeHeroSlides: HeroSlide[] = [
  {
    index: '01',
    label: 'Odisha',
    image: IMG.heroHome,
    video: 'https://assets.mixkit.co/videos/1086/1086-720.mp4',
    badge: 'Welcome to Sabitri Enterprises',
    title: 'Experience the Soul of Odisha, One Stay at a Time',
    subtitle:
      'A heritage homestay beside the Jagannath Temple, handcrafted jewellery, curated Odisha tours, and living crafts — all from one trusted Puri family.',
    primary: { label: 'Our Story', href: '/about' },
    secondary: { label: 'Get in Touch', href: '/contact' },
  },
  {
    index: '02',
    label: 'Homestay',
    image: IMG.room1,
    video: 'https://assets.mixkit.co/videos/4029/4029-720.mp4',
    badge: 'Heritage Homestay',
    title: 'Sleep in a Century-Old Family Home on Grand Road',
    subtitle:
      'Steps from the Jagannath Temple and a short walk to Puri Beach — rooms with character, warm Odia hospitality, and home-cooked meals.',
    primary: { label: 'View Rooms', href: '/homestay' },
    secondary: { label: 'Book a Stay', href: '/booking' },
  },
  {
    index: '03',
    label: 'Jewellery',
    image: IMG.jewellery1,
    video: 'https://assets.mixkit.co/videos/5220/5220-720.mp4',
    badge: 'Handcrafted Jewellery',
    title: 'Silver Filigree, Gold & Heirlooms by Master Jewellers',
    subtitle:
      "Odisha's Tarakasi and traditional designs, handcrafted to be worn, treasured, and passed down through generations.",
    primary: { label: 'Shop Collections', href: '/jewellery' },
    secondary: { label: 'Enquire', href: '/contact' },
  },
  {
    index: '04',
    label: 'Tours',
    image: IMG.beach2,
    video: 'https://assets.mixkit.co/videos/42368/42368-720.mp4',
    badge: 'Tours & Travels',
    title: 'Puri, Konark & Chilika — Planned with Local Heart',
    subtitle:
      'Private cabs, guided darshan, and custom itineraries across Odisha, curated by the people who call it home.',
    primary: { label: 'View Packages', href: '/tours' },
    secondary: { label: 'Plan My Trip', href: '/booking' },
  },
  {
    index: '05',
    label: 'Handicrafts',
    image: IMG.art,
    video: 'https://assets.mixkit.co/videos/5177/5177-720.mp4',
    badge: 'Living Crafts',
    title: 'Pattachitra, Filigree & Handloom from Master Artisans',
    subtitle:
      'Authentic Odisha crafts sourced directly from Raghurajpur painters, Cuttack silversmiths, and village weavers.',
    primary: { label: 'Explore Crafts', href: '/handicrafts' },
    secondary: { label: 'Enquire', href: '/contact' },
  },
];

export const homeStats = [
  { value: '10', suffix: '+', label: 'Years of Trust' },
  { value: '8', suffix: '', label: 'Heritage Rooms' },
  { value: '25', suffix: '+', label: 'Destinations' },
  { value: '50', suffix: '+', label: 'Partner Artisans' },
];

const featuredRoomSlugs = [
  'jagannath-suite',
  'sea-view-double',
  'garden-family-room',
] as const;

const featuredRoomLocations: Record<string, string> = {
  'jagannath-suite': 'Grand Road, Puri',
  'sea-view-double': '5 mins from Puri Beach',
  'garden-family-room': 'Private courtyard access',
  'budget-standard-room': 'Quiet temple-town lane',
  'rooftop-terrace-room': 'Direct rooftop terrace access',
};

export const featuredRooms = featuredRoomSlugs.map((slug) => {
  const room = rooms.find((r) => r.slug === slug);
  if (!room) throw new Error(`Featured room not found: ${slug}`);
  return {
    slug: room.slug,
    name: room.name,
    location: featuredRoomLocations[slug] ?? 'Grand Road, Puri',
    price: room.price,
    capacity: `${room.capacity} Guests`,
    image: room.image,
    status: room.status,
  };
});

export const testimonials: Testimonial[] = [
  {
    name: 'Ananya Sharma',
    location: 'Kolkata, India',
    service: 'Homestay Stay',
    rating: 5,
    text: 'The most heartfelt stay in Puri. The family treated us like their own, and the room was spotless. Walking distance to the temple was a blessing during Rath Yatra.',
  },
  {
    name: 'Rahul Menon',
    location: 'Bengaluru, India',
    service: 'Tours & Travels',
    rating: 5,
    text: 'Our Konark–Chilika day trip was perfectly planned. The guide was knowledgeable and patient, and the boat ride at Chilika was unforgettable.',
  },
  {
    name: 'Priya Iyer',
    location: 'Chennai, India',
    service: 'Jewellery & Handicrafts',
    rating: 5,
    text: 'I bought a silver filigree piece and a Pattachitra painting. The quality is exceptional and the story behind each piece made it priceless.',
  },
  {
    name: 'David Thompson',
    location: 'London, UK',
    service: 'Homestay & Tours',
    rating: 5,
    text: 'A true taste of Odisha. From the homemade meals to the sunrise at the beach, everything was arranged with genuine care. Highly recommended.',
  },
  {
    name: 'Smita Das',
    location: 'Bhubaneswar, India',
    service: 'Handicrafts',
    rating: 5,
    text: 'Their collection of Pattachitra art is one of the finest in Puri. Fair pricing, honest guidance, and beautiful packaging.',
  },
  {
    name: 'Arjun Nair',
    location: 'Mumbai, India',
    service: 'Jewellery',
    rating: 4,
    text: 'Ordered a custom silver jewellery set. The craftsmanship was superb and delivery was on time. Will definitely order again.',
  },
];

export const faqItems: FaqItem[] = [
  {
    q: 'How far is Sabitri Homestay from Jagannath Temple?',
    a: 'Our homestay is located on Grand Road, just a few minutes’ walk from the main gate of the Jagannath Temple and a short drive to Puri Beach.',
  },
  {
    q: 'Do you arrange temple darshan and local sightseeing?',
    a: 'Yes. Our Tours & Travels division can arrange temple darshan guidance, Puri local tours, and full-day trips to Konark, Chilika, Raghurajpur, and more.',
  },
  {
    q: 'What is the check-in and check-out time?',
    a: 'Standard check-in is 12:00 PM and check-out is 11:00 AM. Early check-in and late check-out can be arranged on request subject to availability.',
  },
  {
    q: 'Do you provide home-cooked meals?',
    a: 'Yes. We serve authentic Odia vegetarian meals prepared fresh in our family kitchen. Special dietary needs can be accommodated with prior notice.',
  },
  {
    q: 'Can I buy handicrafts and jewellery without staying at the homestay?',
    a: 'Absolutely. Our handicraft and jewellery store is open to all visitors, and we also ship products across India and internationally.',
  },
  {
    q: 'How do I book a room or a tour?',
    a: 'You can book directly through our Booking page, by phone, or on WhatsApp. Choose your room, add a tour, and send your request — our team confirms availability within a few hours.',
  },
];
