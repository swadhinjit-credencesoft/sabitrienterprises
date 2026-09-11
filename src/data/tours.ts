import { TourPackage, Destination } from '@/types/index';
import { IMG } from '@/data/images';

export const tourPackages: TourPackage[] = [
  {
    slug: 'puri-konark-chilika-classic',
    name: 'Puri–Konark–Chilika Classic',
    duration: '2 Days / 1 Night',
    price: '₹5,499 per person',
    image: IMG.beach1,
    status: 'Best Seller',
    description:
      'The complete Odisha coastal experience — sunrise at Puri Beach, the architectural marvel of the Sun Temple at Konark, and a serene boat ride through Chilika Lake to spot dolphins and migratory birds.',
    highlights: [
      'Sunrise at Puri Beach',
      'Konark Sun Temple visit',
      'Chilika Lake boat ride',
      'Dolphin point at Satapada',
      'Authentic Odia lunch',
      'Private AC cab with driver',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Puri & Konark',
        description: 'Pickup from your homestay. Morning darshan at Jagannath Temple, then drive to Konark for the Sun Temple. Lunch at a local restaurant, return to Puri for beach sunset.',
      },
      {
        day: 'Day 2',
        title: 'Chilika Lake',
        description: 'Morning drive to Satapada, boat safari on Chilika Lake, visit to a river dolphin spot, Kalijai island and migratory bird islands. Return to Puri by evening.',
      },
    ],
  },
  {
    slug: 'puri-spiritual-retreat',
    name: 'Puri Spiritual Retreat',
    duration: '3 Days / 2 Nights',
    price: '₹7,999 per person',
    image: IMG.temple,
    status: 'Pilgrim Favourite',
    description:
      'A deeply calming pilgrimage experience centred on the Jagannath Temple, including guided darshan, aarti experiences, visits to Shankaracharya Mutt, and a sunset by the sea.',
    highlights: [
      'Guided Jagannath Temple darshan',
      'Temple aarti experience',
      'Shankaracharya Mutt visit',
      'Swargadwar beach sunset',
      'Comfortable homestay stay',
      'All transfers included',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival & Darshan',
        description: 'Arrive, check-in at Sabitri Homestay. Evening first darshan at Jagannath Temple and a guided walk on Grand Road.',
      },
      {
        day: 'Day 2',
        title: 'Temple & Mutts',
        description: 'Morning darshan, temple rituals overview, visits to Shankaracharya Mutt and Lokanath Temple. Evening beach sunset at Swargadwar.',
      },
      {
        day: 'Day 3',
        title: 'Sakshi Gopala & Departure',
        description: 'Short excursion to Sakshi Gopala temple, shopping time on Grand Road, and departure with packed prasad.',
      },
    ],
  },
  {
    slug: 'konark-chilika-day-trip',
    name: 'Konark & Chilika Day Trip',
    duration: 'Full Day (12 hrs)',
    price: '₹3,499 per person',
    image: IMG.canoe,
    status: 'Quick Escape',
    description:
      'One unforgettable day — the wonder of Konark in the morning and the calm of Chilika Lake by afternoon. Perfect for travellers short on time.',
    highlights: [
      'Konark Sun Temple',
      'Chilika boat safari',
      'Local Odia lunch',
      'Private AC cab',
    ],
    itinerary: [
      {
        day: 'Full Day',
        title: 'Konark & Chilika',
        description: 'Early morning departure to Konark, guided temple exploration, drive to Satapada for a Chilika boat safari, and return to Puri by evening.',
      },
    ],
  },
  {
    slug: 'odisha-golden-triangle',
    name: 'Odisha Golden Triangle',
    duration: '4 Days / 3 Nights',
    price: '₹12,999 per person',
    image: IMG.architecture,
    status: 'Luxury Choice',
    description:
      'Bhubaneswar, Puri, and Konark — the three jewels of Odisha — in one beautifully paced journey covering temples, beaches, crafts, and culture.',
    highlights: [
      'Lingaraj & Mukteswar temples',
      'Khandagiri–Udayagiri caves',
      'Jagannath Temple darshan',
      'Konark Sun Temple',
      'Dhauligiri peace pagoda',
      'Raghurajpur craft village',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Bhubaneswar Temple City',
        description: 'Arrive in Bhubaneswar. Visit Lingaraj, Mukteswar, and Rajarani temples, then Dhauligiri. Overnight in Bhubaneswar.',
      },
      {
        day: 'Day 2',
        title: 'Puri & Heritage',
        description: 'Drive to Puri. Evening Jagannath Temple darshan and Grand Road walk. Overnight at Sabitri Homestay.',
      },
      {
        day: 'Day 3',
        title: 'Konark & Raghurajpur',
        description: 'Full day exploring Konark Sun Temple and the Pattachitra artists of Raghurajpur village. Return to Puri.',
      },
      {
        day: 'Day 4',
        title: 'Beach & Departure',
        description: 'Sunrise at Puri Beach, free morning, then transfer to Bhubaneswar airport or railway station.',
      },
    ],
  },
  {
    slug: 'chilika-boat-safari',
    name: 'Chilika Boat Safari',
    duration: 'Half Day (6 hrs)',
    price: '₹2,499 per person',
    image: IMG.lake,
    status: 'Nature Lover',
    description:
      'A focused boat safari into Asia’s largest brackish water lagoon — dolphins, Kalijai island, Nalabana bird sanctuary, and floating markets in season.',
    highlights: [
      'River dolphin spotting',
      'Kalijai island visit',
      'Nalabana bird sanctuary',
      'Fresh crab lunch option',
    ],
    itinerary: [
      {
        day: 'Half Day',
        title: 'Chilika Safari',
        description: 'Morning drive to Satapada, boat safari across Chilika Lake, island and birding stops, and return to Puri by early afternoon.',
      },
    ],
  },
  {
    slug: 'raghurajpur-craft-day',
    name: 'Raghurajpur Craft Village Day',
    duration: 'Full Day (10 hrs)',
    price: '₹2,999 per person',
    image: IMG.art,
    status: 'Culture Deep-Dive',
    description:
      'Spend a day among the master painters and craftsmen of Raghurajpur, the heritage crafts village of Odisha, and watch Pattachitra, palm-leaf etchings, and gotipua dance come to life.',
    highlights: [
      'Live Pattachitra painting demo',
      'Palm leaf etching workshop',
      'Gotipua dance performance',
      'Meet master artisans',
      'Shop directly from artists',
    ],
    itinerary: [
      {
        day: 'Full Day',
        title: 'Raghurajpur',
        description: 'Morning drive to Raghurajpur, guided village walk, artist studios and workshops, traditional lunch, and a gotipua dance performance before returning to Puri.',
      },
    ],
  },
];

export const destinations: Destination[] = [
  {
    slug: 'puri',
    name: 'Puri',
    image: IMG.beach1,
    description:
      'The sacred seaside city home to the Jagannath Temple, golden beaches, and the grand annual Rath Yatra festival.',
    highlights: ['Jagannath Temple', 'Puri Beach', 'Rath Yatra', 'Swargadwar'],
  },
  {
    slug: 'jagannath-temple',
    name: 'Jagannath Temple',
    image: IMG.temple,
    description:
      'One of the four Char Dham pilgrimage sites, an architectural masterpiece and the spiritual heart of Odisha.',
    highlights: ['Char Dham Temple', 'Mahaprasad', 'Aarti Rituals', 'Grand Road'],
  },
  {
    slug: 'konark',
    name: 'Konark Sun Temple',
    image: IMG.architecture,
    description:
      'A UNESCO World Heritage site — the magnificent 13th-century Sun Temple built as a colossal chariot of the Sun God.',
    highlights: ['UNESCO World Heritage', 'Sun Temple', 'Archaeological Museum', 'Chandrabhaga Beach'],
  },
  {
    slug: 'chilika',
    name: 'Chilika Lake',
    image: IMG.lake,
    description:
      'Asia’s largest brackish water lagoon, home to Irrawaddy dolphins, migratory birds, and the island shrine of Kalijai.',
    highlights: ['Dolphin Spotting', 'Boat Safari', 'Nalabana Birds', 'Kalijai Island'],
  },
  {
    slug: 'raghurajpur',
    name: 'Raghurajpur',
    image: IMG.art,
    description:
      'Odisha’s heritage crafts village, where Pattachitra painters, palm-leaf artists, and gotipua dancers keep centuries-old traditions alive.',
    highlights: ['Pattachitra Art', 'Palm Leaf Etching', 'Gotipua Dance', 'Artist Studios'],
  },
  {
    slug: 'bhubaneswar',
    name: 'Bhubaneswar',
    image: IMG.architecture,
    description:
      'The Temple City of India, with over 700 ancient temples spanning more than a thousand years of history.',
    highlights: ['Lingaraj Temple', 'Mukteswar Temple', 'Dhauligiri', 'Museum'],
  },
];

export const travelServices = [
  'Customised tour packages',
  'Airport & station pickups',
  'Private AC cabs with drivers',
  'Guided temple darshan',
  'Homestay + tour combos',
  'Group and corporate travel',
  'Wedding & family event travel',
  'Sightseeing across Odisha',
];
