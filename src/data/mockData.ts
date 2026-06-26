import { Product, Category, Collection } from '../types';

export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "The Monte Carlo Smart Curtain System",
    category: "Smart Curtains",
    price: 450000,
    description: "Experience the ultimate convenience with our flagship motorized curtain system. Whisper-quiet and compatible with all major smart home ecosystems. Wake up naturally to the gentle opening of curtains.",
    images: ["https://res.cloudinary.com/dbbw8jsjc/image/upload/v1782400864/Luxury_smart_curtains_in_a_202606251537_chdgci.jpg", "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80"],
    isBestseller: true,
    features: ["Motorized tracking system", "App control via WiFi", "Voice Assistant compatible", "Custom lengths up to 6 meters"],
    details: {
      material: "Heavyweight Linen Blend",
      care: "Dry clean only",
    }
  },
  {
    id: "p2",
    name: "Istanbul Heritage Turkish Curtains",
    category: "Turkish Curtains",
    price: 185000,
    description: "Handcrafted in Turkey, these exquisite sheer and blackout curtain pairs bring opulent texture and unparalleled light control to luxury living spaces.",
    images: ["https://res.cloudinary.com/dbbw8jsjc/image/upload/v1782400883/Luxurious_Turkish_curtains_with_intricate_202606251543_p7u0oc.jpg", "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80"],
    isNew: true,
  },
  {
    id: "p3",
    name: "Signature 1000TC Egyptian Cotton Bedding Set",
    category: "Bedding Sets",
    price: 250000,
    description: "The pinnacle of sleeping luxury. Woven from single-ply Egyptian cotton, this 1000-thread-count set gets softer with every wash.",
    images: ["https://res.cloudinary.com/dbbw8jsjc/image/upload/v1782400869/Luxury_bedroom_setting_featuring_a_202606251547_iljhqw.jpg", "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&q=80"],
    isBestseller: true,
  },
  {
    id: "p4",
    name: "Cloud 9 Memory Foam Bed Topper",
    category: "Bed Toppers",
    price: 120000,
    description: "Transform your current mattress into a 5-star hotel experience. Our breathable gel-infused memory foam contours to your body for perfect spinal alignment.",
    images: ["https://res.cloudinary.com/dbbw8jsjc/image/upload/v1782400869/Cloud_9_memory_foam_bed_202606251551_vv42uv.jpg"],
  },
  {
    id: "p5",
    name: "Royal Latex Contour Pillow",
    category: "Latex Pillows",
    price: 45000,
    description: "Naturally hypoallergenic and dust mite resistant. The ergonomic contour design supports your neck and relieves shoulder pressure.",
    images: ["https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=800&q=80"],
    isBestseller: true,
  },
  {
    id: "p6",
    name: "Plush Microfiber Hotel Towel Set",
    category: "Towels",
    price: 85000,
    description: "Indulgent, heavyweight 800 GSM towels that provide maximum absorbency and luxury hotel feel in your own bathroom.",
    images: ["https://images.unsplash.com/photo-1584100262145-21d451b61cff?w=800&q=80"],
  }
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(price);
};
