import { ValueItem, TimelineItem } from '@/types';
import { IMG } from '@/data/images';

export const companyProfile = {
  name: 'Sabitri Enterprises',
  shortName: 'Sabitri',
  tagline: 'Crafting Experiences, Honouring Heritage',
  established: 'Founded in Puri, Odisha, India',
  summary:
    'Sabitri Enterprises is a family-run group of businesses rooted in the sacred city of Puri, Odisha. Through our homestay, jewellery studio, tour and travel desk, and handicraft store, we bring the warmth of Odisha hospitality, the artistry of its craftsmen, and the soul of its spiritual landscape to every guest and customer we serve.',
  mission:
    'To offer authentic, heartfelt experiences and handcrafted products that reflect the living heritage of Odisha, while creating meaningful livelihoods for local families and artisans.',
  vision:
    'To be Odisha’s most trusted name in hospitality, travel, and heritage craftsmanship — a brand that travellers remember long after their journey ends.',
  story: [
    'Sabitri Enterprises began with a single homestay built beside the historic Grand Road of Puri, a few steps from the revered Jagannath Temple. What started as a family home welcoming pilgrims and travellers soon grew into a trusted name for warm, authentic Odia hospitality.',
    'The family’s deep roots in the local community — spanning jewellery craftsmanship, pilgrimage tours, and the traditional arts of Raghurajpur — gradually came together under one roof. Today, Sabitri Enterprises unites four businesses driven by a single belief: heritage is not something to preserve in the past, but something to live and share every day.',
    'Every room we open, every piece of jewellery we craft, every journey we guide, and every artwork we sell carries the same promise — authenticity, quality, and the generous spirit of Odisha.',
  ],
  chairman: {
    name: 'Sri Sabyasachi Sabitri',
    role: 'Founder & Chairman',
    image: IMG.man1,
    message: [
      'Welcome to Sabitri Enterprises. Our family has called Puri home for generations, and we consider every guest who walks through our doors to be an extension of our family.',
      'We built this company on the belief that Odisha has a story worth telling — in its temples, its beaches, its crafts, and most of all, in its people. Whether you stay with us, travel with us, or take home a piece of our heritage, we want you to feel that story in everything we do.',
      'Thank you for choosing us. We promise to treat your trust as our most precious possession.',
    ],
  },
  whyChooseUs: [
    'Family-run hospitality with genuine, personal care',
    'Prime location steps away from Jagannath Temple and Puri Beach',
    'Handpicked, verified local artisans and craftsmen',
    'Transparent pricing with no hidden charges',
    '24/7 guest support on phone and WhatsApp',
    'Deep local knowledge for off-the-beaten-path experiences',
  ],
};

export const companyValues: ValueItem[] = [
  {
    icon: 'Heart',
    title: 'Hospitality First',
    description: 'Every decision begins with our guests and customers, and ends with their smile.',
  },
  {
    icon: 'Sparkles',
    title: 'Authenticity',
    description: 'We share Odisha exactly as it is — honest, colourful, and deeply rooted in tradition.',
  },
  {
    icon: 'Handshake',
    title: 'Community',
    description: 'We build with local artisans, guides, and families so that growth benefits everyone.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Quality',
    description: 'From room linen to silver filigree, we never compromise on the quality we put our name on.',
  },
  {
    icon: 'Leaf',
    title: 'Responsibility',
    description: 'We protect our heritage, our environment, and the wellbeing of our team in all we do.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Trust',
    description: 'Clear pricing, honest advice, and reliable service are the cornerstones of our name.',
  },
];

export const companyTimeline: TimelineItem[] = [
  {
    year: 'Home',
    title: 'The Family Home Opens',
    description: 'A few guest rooms open on Grand Road, welcoming pilgrims and travellers to Puri.',
  },
  {
    year: 'Growth',
    title: 'Expanding the Homestay',
    description: 'The homestay grows to a full boutique stay with modern comfort and heritage warmth.',
  },
  {
    year: 'Journeys',
    title: 'Tours & Travels Launches',
    description: 'A travel desk is created to guide guests across Puri, Konark, Chilika, and beyond.',
  },
  {
    year: 'Craft',
    title: 'Handicrafts & Jewellery',
    description: 'The family partners with Raghurajpur artisans and master jewellers to offer heritage crafts.',
  },
  {
    year: 'Today',
    title: 'Sabitri Enterprises',
    description: 'Four businesses united under one roof, sharing Odisha’s heritage with the world.',
  },
];
