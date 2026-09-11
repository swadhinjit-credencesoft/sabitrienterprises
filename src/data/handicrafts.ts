import { ProductCategory } from '../types';
import { IMG } from './images';

export const handicraftCategories: ProductCategory[] = [
  {
    slug: 'pattachitra',
    name: 'Pattachitra Paintings',
    image: IMG.art,
    description:
      'The iconic scroll paintings of Odisha, hand-painted on cloth using natural colours. Each piece tells stories from the Jagannath mythology and Krishna’s life.',
    products: [
      {
        slug: 'jagannath-triangle-painting',
        name: 'Jagannath, Balabhadra & Subhadra',
        category: 'Paintings',
        material: 'Hand-painted on Cotton Cloth',
        priceFrom: '₹2,500',
        image: IMG.handcraft,
        description: 'A classic Pattachitra of the Puri trinity with intricate border work.',
      },
      {
        slug: 'dasavatara-scroll',
        name: 'Dasavatara Scroll',
        category: 'Paintings',
        material: 'Natural Colours on Canvas',
        priceFrom: '₹4,000',
        image: IMG.handcraft2,
        description: 'The ten incarnations of Vishnu painted in the traditional style.',
      },
      {
        slug: 'palm-leaf-etching',
        name: 'Palm Leaf Etched Panels',
        category: 'Etchings',
        material: 'Tali Palm Leaf',
        priceFrom: '₹1,200',
        image: IMG.art,
        description: 'Fine etchings on palm leaf, the traditional Odia manuscript art.',
      },
    ],
  },
  {
    slug: 'silver-filigree',
    name: 'Silver Filigree (Tarakasi)',
    image: IMG.jewellery2,
    description:
      'Delicate silver filigree artefacts from Cuttack — miniature temple replicas, jewellery, and decorative pieces of extraordinary craftsmanship.',
    products: [
      {
        slug: 'mini-temple-replica',
        name: 'Miniature Temple Replica',
        category: 'Sculptures',
        material: 'Sterling Silver Filigree',
        priceFrom: '₹5,500',
        image: IMG.jewellery1,
        description: 'A handcrafted silver model of the Jagannath Temple.',
      },
      {
        slug: 'filigree-coaster-set',
        name: 'Filigree Coaster Set',
        category: 'Home Decor',
        material: 'Silver Filigree',
        priceFrom: '₹2,200',
        image: IMG.jewellery2,
        description: 'An elegant set of four filigree coasters.',
      },
    ],
  },
  {
    slug: 'stone-carvings',
    name: 'Stone Carvings',
    image: IMG.architecture,
    description:
      'Traditional stone carvings inspired by the sculptures of Konark and Bhubaneswar — idols, wall panels, and decorative pieces carved from soft khondalite stone.',
    products: [
      {
        slug: 'konark-wheel-sculpture',
        name: 'Konark Wheel Wall Sculpture',
        category: 'Sculptures',
        material: 'Khondalite Stone',
        priceFrom: '₹3,800',
        image: IMG.architecture,
        description: 'A hand-carved replica of the famous Konark chariot wheel.',
      },
      {
        slug: 'ganesh-idol',
        name: 'Ganesh Stone Idol',
        category: 'Idols',
        material: 'Khondalite Stone',
        priceFrom: '₹1,600',
        image: IMG.architecture,
        description: 'A serene hand-carved Ganesh idol for home and office.',
      },
    ],
  },
  {
    slug: 'textiles',
    name: 'Handloom Textiles',
    image: IMG.lanterns,
    description:
      'Vibrant Odia handloom — ikat sarees, cotton fabrics, and traditional towels — woven by weavers of Nuapatna and Bargarh.',
    products: [
      {
        slug: 'sambalpuri-ikat-saree',
        name: 'Sambalpuri Ikat Saree',
        category: 'Sarees',
        material: 'Cotton Handloom',
        priceFrom: '₹2,800',
        image: IMG.lanterns,
        description: 'A classic tie-and-dye ikat saree with traditional motifs.',
      },
      {
        slug: 'odisha-cotton-fabric',
        name: 'Odia Cotton Fabric (5 mtr)',
        category: 'Fabric',
        material: 'Handloom Cotton',
        priceFrom: '₹1,400',
        image: IMG.lanterns,
        description: 'Soft handloom cotton fabric, perfect for tailoring.',
      },
    ],
  },
  {
    slug: 'applique',
    name: 'Appliqué Work',
    image: IMG.market,
    description:
      'The colourful appliqué tradition of Pipli — canopies, umbrellas, lampshades, and home décor in bright, joyful patterns.',
    products: [
      {
        slug: 'pipili-umbrella',
        name: 'Pipli Appliqué Umbrella',
        category: 'Home Decor',
        material: 'Cotton Appliqué',
        priceFrom: '₹900',
        image: IMG.market,
        description: 'The iconic bright umbrella of Pipli, hand-stitched with mirrors.',
      },
      {
        slug: 'applique-lampshade',
        name: 'Appliqué Lampshade',
        category: 'Lighting',
        material: 'Cotton Appliqué',
        priceFrom: '₹1,100',
        image: IMG.market,
        description: 'A warm, festive lampshade that lights up any room.',
      },
    ],
  },
  {
    slug: 'dhokra',
    name: 'Dhokra Metal Craft',
    image: IMG.art,
    description:
      'The ancient lost-wax metal casting craft — tribal figurines, jewellery, and décor pieces from the skilled artisans of Odisha and Chhattisgarh.',
    products: [
      {
        slug: 'tribal-figurine-set',
        name: 'Tribal Figurine Set',
        category: 'Sculptures',
        material: 'Bell Metal (Dhokra)',
        priceFrom: '₹1,800',
        image: IMG.art,
        description: 'A set of hand-cast tribal figures with rustic charm.',
      },
      {
        slug: 'dhokra-animal-brooch',
        name: 'Dhokra Animal Brooch',
        category: 'Accessories',
        material: 'Bell Metal',
        priceFrom: '₹450',
        image: IMG.art,
        description: 'A tiny hand-cast animal brooch with great character.',
      },
    ],
  },
];

export const handicraftWhyChoose = [
  'Directly sourced from master artisans',
  'Authentic Raghurajpur & Pipli crafts',
  'Fair-trade pricing that supports artists',
  'Careful, secure packaging',
  'Shipping across India and worldwide',
  'Custom bulk and corporate orders',
];
