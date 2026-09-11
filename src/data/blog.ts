import { BlogPost } from '../types';
import { IMG } from './images';

export const blogCategories = ['Puri Guide', 'Temples', 'Travel Tips', 'Crafts & Culture', 'Food', 'Homestay'];

export const blogPosts: BlogPost[] = [
  {
    slug: 'complete-puri-travel-guide',
    title: 'The Complete Puri Travel Guide (2026)',
    excerpt:
      'Temples, beaches, food, shopping, and the best times to visit — everything you need to plan a perfect trip to Puri.',
    category: 'Puri Guide',
    date: '2026-01-10',
    readTime: '8 min read',
    image: IMG.beach1,
    author: 'Sabitri Editorial Team',
    body: [
      {
        heading: 'Why Visit Puri',
        content: [
          'Puri is one of the four Char Dham pilgrimage sites and home to the magnificent Jagannath Temple. But beyond its spiritual fame, Puri is a charming seaside town with golden beaches, vibrant markets, and some of the warmest hospitality in India.',
          'Whether you come for darshan, for the sun, or simply for the slow rhythm of coastal Odisha, Puri rewards every kind of traveller.',
        ],
      },
      {
        heading: 'Top Attractions',
        content: [
          'The Jagannath Temple dominates the old town, while Puri Beach and Swargadwar offer beautiful sunrises and sunsets. The nearby heritage crafts village of Raghurajpur, the UNESCO-listed Konark Sun Temple, and the vast Chilika Lake are all within easy reach.',
          'Plan at least 3 days to experience the temple, the beach, and at least one day trip.',
        ],
      },
      {
        heading: 'Practical Tips',
        content: [
          'Puri is best visited between October and March when the weather is pleasant. Book accommodation well in advance for festivals like Rath Yatra and the Konark Dance Festival.',
          'Carry light cotton clothing, modest attire for temple visits, and stay hydrated. Our homestay team is always happy to help plan your itinerary.',
        ],
      },
    ],
  },
  {
    slug: 'jagannath-temple-darshan-guide',
    title: 'Jagannath Temple: A Complete Darshan Guide',
    excerpt:
      'Everything pilgrims need to know — rituals, timings, prasad, and how to make your darshan smooth and meaningful.',
    category: 'Temples',
    date: '2026-01-15',
    readTime: '7 min read',
    image: IMG.temple,
    author: 'Sabitri Editorial Team',
    body: [
      {
        heading: 'The Sacred Trinity',
        content: [
          'The Jagannath Temple enshrines Lord Jagannath (Lord of the Universe), his brother Balabhadra, and sister Subhadra. The temple is one of the four most sacred pilgrimages in India and the centre of the world-famous Rath Yatra.',
          'The wooden deities are uniquely styled, and devotees believe a glimpse of them brings immense blessing.',
        ],
      },
      {
        heading: 'Temple Timings & Rituals',
        content: [
          'The temple opens early around 5:00 AM and closes after the last aarti at night. The most special experience is the Mangala Aarti at dawn, followed by the morning darshan when the deities are adorned.',
          'Darshan queues are shortest on weekday mornings. Non-Hindu visitors can view the temple from the Raghunandan Library rooftop opposite.',
        ],
      },
      {
        heading: 'Mahaprasad & Offerings',
        content: [
          'The temple kitchen is famous for cooking the world’s largest kitchen tradition — Mahaprasad, served to thousands of devotees daily. You can purchase prasad from the Ananda Bazaar inside the temple complex.',
          'Our team can guide you through the darshan process and arrange for prasad bookings where possible.',
        ],
      },
    ],
  },
  {
    slug: 'konark-sun-temple-guide',
    title: 'Konark Sun Temple: The Chariot of the Sun',
    excerpt:
      'A guide to the 13th-century UNESCO wonder — its history, architecture, and the best way to visit from Puri.',
    category: 'Temples',
    date: '2026-01-20',
    readTime: '6 min read',
    image: IMG.architecture,
    author: 'Sabitri Editorial Team',
    body: [
      {
        heading: 'A Marvel in Stone',
        content: [
          'Built in the 13th century by King Narasimhadeva I, the Konark Sun Temple is designed as a colossal chariot of the Sun God, drawn by seven horses on twelve pairs of intricately carved wheels.',
          'It is a UNESCO World Heritage Site and one of the finest examples of Kalinga architecture in the world.',
        ],
      },
      {
        heading: 'What to See',
        content: [
          'The main sanctum, the beautifully carved wheels, the sculptural panels depicting daily life, and the archaeological museum across the road are all unmissable. The temple glows spectacularly at sunset.',
          'Combine your visit with the nearby Chandrabhaga Beach for a peaceful evening.',
        ],
      },
      {
        heading: 'Getting There',
        content: [
          'Konark is about 35 km from Puri, a comfortable one-hour drive. Our Tours & Travels division runs a popular Puri–Konark–Chilika day trip that covers all the highlights with a knowledgeable driver-guide.',
        ],
      },
    ],
  },
  {
    slug: 'chilika-lake-boat-safari',
    title: 'Chilika Lake: Dolphins, Birds & Island Shrines',
    excerpt:
      'Plan the perfect boat safari on Asia’s largest brackish water lagoon — where to go, what to see, and when.',
    category: 'Travel Tips',
    date: '2026-02-02',
    readTime: '7 min read',
    image: IMG.lake,
    author: 'Sabitri Editorial Team',
    body: [
      {
        heading: 'The Great Lagoon',
        content: [
          'Chilika is Asia’s largest brackish water lagoon, stretching across Odisha’s coastline. It is home to Irrawaddy dolphins, hundreds of migratory bird species, and the sacred island of Kalijai.',
          'Winter (November to February) is the best season for bird watching, while dolphins can be spotted year-round near Satapada.',
        ],
      },
      {
        heading: 'The Boat Safari',
        content: [
          'Safaris typically begin at Satapada village. The journey takes you across calm waters to dolphin sighting points, Kalijai island, and into the Nalabana Bird Sanctuary during migration season.',
          'A 3–4 hour safari is ideal. Carry a hat, sunscreen, and binoculars, and enjoy a fresh local seafood lunch on the way back if you wish.',
        ],
      },
    ],
  },
  {
    slug: 'raghurajpur-heritage-village',
    title: 'Raghurajpur: The Living Heritage Village of Odisha',
    excerpt:
      'Meet the master Pattachitra painters and gotipua dancers keeping Odisha’s most beautiful traditions alive.',
    category: 'Crafts & Culture',
    date: '2026-02-10',
    readTime: '6 min read',
    image: IMG.art,
    author: 'Sabitri Editorial Team',
    body: [
      {
        heading: 'A Village of Artists',
        content: [
          'Raghurajpur, a small village near Puri, is officially recognised as a heritage crafts village. Every home doubles as a studio, and the village is famous for Pattachitra — intricate scroll paintings on cloth using natural colours.',
          'The village is also the birthplace of the gotipua dance tradition, a precursor to classical Odissi.',
        ],
      },
      {
        heading: 'What to Experience',
        content: [
          'Walk through the village lanes, watch painters at work, try your hand at palm-leaf etching, and see a live gotipua performance. You can buy authentic art directly from the artists at fair prices.',
          'Allow half a day for a relaxed visit. Our craft tours include a guided walk and artist interactions.',
        ],
      },
    ],
  },
  {
    slug: 'rath-yatra-guide-puri',
    title: 'Rath Yatra in Puri: The Festival of the Chariots',
    excerpt:
      'How to experience the world’s grandest chariot festival — dates, what to expect, and practical advice.',
    category: 'Puri Guide',
    date: '2026-02-18',
    readTime: '6 min read',
    image: IMG.market,
    author: 'Sabitri Editorial Team',
    body: [
      {
        heading: 'The Grand Procession',
        content: [
          'Rath Yatra is the annual festival when the deities of Jagannath Temple ride out in three towering wooden chariots to the Gundicha Temple. It is among the largest religious gatherings on earth.',
          'Millions of devotees pull the chariots along Grand Road, making it an unforgettable, deeply moving experience.',
        ],
      },
      {
        heading: 'Planning Your Visit',
        content: [
          'The festival falls around June–July each year. Book your stay months in advance — our homestay is located right on the festival route.',
          'Arrive a day early to soak in the atmosphere, follow the crowd guidance of the authorities, and stay hydrated. Post-festival days offer a calmer, equally beautiful experience.',
        ],
      },
    ],
  },
  {
    slug: 'best-food-puri-odia-cuisine',
    title: 'The Best of Odia Food in Puri',
    excerpt:
      'From Mahaprasad to seafood at the beach — a food lover’s guide to eating your way through Puri.',
    category: 'Food',
    date: '2026-03-05',
    readTime: '5 min read',
    image: IMG.market,
    author: 'Sabitri Editorial Team',
    body: [
      {
        heading: 'Temple Food',
        content: [
          'No visit to Puri is complete without Mahaprasad — the sacred meal cooked in the Jagannath Temple kitchen. Simple, wholesome, and deeply satisfying, it is served in earthen pots on banana leaves.',
          'For a lighter temple snack, try the sweet offerings like Kheeri and Rasagola, both of which have their roots in Odisha.',
        ],
      },
      {
        heading: 'Street & Beach Food',
        content: [
          'Puri’s beach road is famous for fresh grilled seafood, prawn pakoras, and spicy chickpea chaat. Grand Road is lined with sweet shops selling the legendary Dalma, Pakhala, and Chenna Poda.',
          'For a truly home-style meal, ask our family kitchen — our guests love our vegetarian Odia thali prepared with recipes passed down generations.',
        ],
      },
    ],
  },
  {
    slug: 'when-to-visit-puri-best-season',
    title: 'When to Visit Puri: Season by Season',
    excerpt:
      'Weather, festivals, and crowd levels across the year — so you can time your Puri trip perfectly.',
    category: 'Travel Tips',
    date: '2026-03-15',
    readTime: '5 min read',
    image: IMG.beach2,
    author: 'Sabitri Editorial Team',
    body: [
      {
        heading: 'Winter (Oct – Mar)',
        content: [
          'The best time to visit Puri. Pleasant weather, clear skies, and a packed festival calendar including the Konark Dance Festival. Expect comfortable temperatures during the day and cool evenings.',
        ],
      },
      {
        heading: 'Summer (Apr – Jun)',
        content: [
          'Hot and humid, but the season brings the spectacular Rath Yatra and Nabakalebara festivals. Summer is also the quietest and most budget-friendly time for temple-focused visits.',
        ],
      },
      {
        heading: 'Monsoon (Jul – Sep)',
        content: [
          'The coastline turns lush and dramatic. Temple visits are rewarding, and the rains bring a peaceful, meditative mood to Puri. Beaches are best viewed rather than swum during this season.',
        ],
      },
    ],
  },
  {
    slug: 'silver-filigree-tarakasi-guide',
    title: 'Tarakasi: The Art of Odisha’s Silver Filigree',
    excerpt:
      'Inside the delicate world of Cuttack’s silver filigree — how it is made, how to buy, and how to care for it.',
    category: 'Crafts & Culture',
    date: '2026-03-28',
    readTime: '6 min read',
    image: IMG.jewellery1,
    author: 'Sabitri Editorial Team',
    body: [
      {
        heading: 'A Delicate Heritage',
        content: [
          'Tarakasi is the art of shaping silver wire and strips into breathtaking jewellery and artefacts. Originating in Cuttack over 500 years ago, it is now a registered Geographical Indication of Odisha.',
          'Each piece is shaped by hand — melted, drawn into thread-thin wire, and twisted into intricate patterns inspired by temples and nature.',
        ],
      },
      {
        heading: 'How to Buy & Care',
        content: [
          'Buy from reputable stores or directly from artisan families. Ask about silver purity and check the craftsmanship of the joints and finishing.',
          'Store filigree in an airtight pouch, clean gently with a soft cloth, and avoid perfumes and chemicals to keep the silver bright for years.',
        ],
      },
    ],
  },
  {
    slug: 'things-to-do-puri-beyond-temple',
    title: '10 Things to Do in Puri Beyond the Temple',
    excerpt:
      'Sunrises, surfing, craft villages, boat rides, and quiet corners — see another side of Puri.',
    category: 'Puri Guide',
    date: '2026-04-08',
    readTime: '6 min read',
    image: IMG.canoe,
    author: 'Sabitri Editorial Team',
    body: [
      {
        heading: 'Around the Beach',
        content: [
          'Watch the sunrise at Swargadwar, try beginner surfing lessons, or take a long walk along the golden sands. The light at both dawn and dusk is extraordinary.',
        ],
      },
      {
        heading: 'Around the Region',
        content: [
          'Visit Raghurajpur for live Pattachitra painting, drive to Konark for the Sun Temple, and spend a day on Chilika Lake. Each is a short, easy trip from Puri.',
          'Take a quieter evening to wander Grand Road’s markets for shells, silver, and handloom — our team can recommend trusted shops and guide you on fair prices.',
        ],
      },
    ],
  },
  {
    slug: 'homestay-vs-hotel-puri',
    title: 'Homestay vs Hotel in Puri: What’s Right for You?',
    excerpt:
      'Warmth, home-cooked food, and local stories — why travellers are choosing homestays for their Puri trip.',
    category: 'Homestay',
    date: '2026-04-20',
    readTime: '5 min read',
    image: IMG.room1,
    author: 'Sabitri Editorial Team',
    body: [
      {
        heading: 'The Homestay Difference',
        content: [
          'A homestay offers what hotels rarely can — a family, a home kitchen, and an insider’s view of the city. Hosts share the best darshan times, the quietest beach stretches, and the most authentic restaurants.',
          'Guests consistently tell us that the personal care is what makes their trip memorable.',
        ],
      },
      {
        heading: 'What to Consider',
        content: [
          'Choose a homestay if you value warm hospitality, home-cooked meals, and local guidance. Choose a hotel if you need full-service facilities like a pool or banquet.',
          'At Sabitri Homestay, you get the comfort of a boutique stay with the heart of a family home — the best of both worlds.',
        ],
      },
    ],
  },
  {
    slug: 'odisha-shopping-guide',
    title: 'Odisha Shopping Guide: What to Buy & Where',
    excerpt:
      'Pattachitra, filigree, appliqué, handloom, and stone carvings — a shopper’s guide to Odisha’s finest crafts.',
    category: 'Crafts & Culture',
    date: '2026-05-02',
    readTime: '7 min read',
    image: IMG.lanterns,
    author: 'Sabitri Editorial Team',
    body: [
      {
        heading: 'The Signature Crafts',
        content: [
          'Every region of Odisha has a signature craft: Pattachitra paintings from Raghurajpur, silver filigree from Cuttack, appliqué from Pipli, ikat handloom from Sambalpur, and stone carving from Konark.',
          'These crafts are not just souvenirs — they are living traditions supporting thousands of artisan families.',
        ],
      },
      {
        heading: 'Shopping Tips',
        content: [
          'Buy directly from artisans or trusted stores that source fairly. Check for the GI tags that certify authentic regional crafts.',
          'At Sabitri Handicrafts, we source directly from artisans, so every piece comes with its story — and we ship safely across India and abroad.',
        ],
      },
    ],
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
