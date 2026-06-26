export type Product = {
  id: string;
  name: string;
  category: 'Smart Curtains' | 'Turkish Curtains' | 'Bedding Sets' | 'Bed Toppers' | 'Latex Pillows' | 'Fiber Pillows' | 'Towels';
  price: number;
  description: string;
  images: string[];
  features?: string[];
  details?: {
    material?: string;
    care?: string;
    dimensions?: string;
  };
  isNew?: boolean;
  isBestseller?: boolean;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
};

export type Collection = {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}
