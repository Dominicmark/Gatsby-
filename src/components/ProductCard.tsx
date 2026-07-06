import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

export function ProductCard({ product, showCategory = true }: { product: Product, showCategory?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered && product.images && product.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
      }, 2000); // Slide every 2 seconds
    } else {
      setCurrentImageIndex(0); // Reset to first image on mouse leave
    }
    return () => clearInterval(interval);
  }, [isHovered, product.images]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <Link 
      to={`/product/${product.id}`} 
      className="group cursor-pointer block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] bg-warm-beige mb-6 overflow-hidden">
        {product.isNew && (
          <span className="absolute top-4 left-4 z-10 bg-white/90 text-charcoal-900 text-xs px-3 py-1 uppercase tracking-wider font-semibold shadow-sm">New</span>
        )}
        {product.isBestseller && !product.isNew && (
          <span className="absolute top-4 left-4 z-10 bg-gold-500/90 text-white text-xs px-3 py-1 uppercase tracking-wider font-semibold shadow-sm">Bestseller</span>
        )}
        
        {/* Images Container */}
        <div className="w-full h-full overflow-hidden">
          <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
            <div 
              className="w-full h-full flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {(product.images || []).map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`${product.name} ${idx + 1}`} 
                  className="object-cover w-full h-full flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Indicators for multiple images */}
        {product.images && product.images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            {product.images.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1 rounded-full transition-all duration-500 ${idx === currentImageIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`}
              />
            ))}
          </div>
        )}

        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
      <div>
        {showCategory && <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{product.category}</p>}
        <h3 className="font-serif text-lg text-charcoal-900 mb-2 truncate group-hover:text-gold-500 transition-colors">{product.name}</h3>
        <p className="text-charcoal-900 font-medium">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
