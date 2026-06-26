import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingBag, Heart, ShieldCheck, ChevronRight, Truck } from "lucide-react";
import { formatPrice } from "../data/mockData";
import { cn } from "../lib/utils";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductContext";

export default function ProductDetail() {
  const { products } = useProducts();
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariation, setSelectedVariation] = useState<string | undefined>();
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-gold-500 hover:text-charcoal-900 underline underline-offset-4">Return to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.category.includes('Curtains') && !selectedVariation) {
      alert("Please select a length variation.");
      return;
    }
    addToCart(product, 1, selectedVariation);
  };

  return (
    <div className="pt-20 bg-ivory">
      {/* BREADCRUMBS */}
      <div className="px-4 max-w-7xl mx-auto py-6 flex items-center text-xs uppercase tracking-widest text-gray-500">
        <Link to="/" className="hover:text-charcoal-900 transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <Link to="/shop" className="hover:text-charcoal-900 transition-colors">Shop</Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <span className="text-charcoal-900 truncate max-w-[200px] sm:max-w-none">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* IMAGES */}
          <div className="space-y-4">
            <div className="aspect-[4/5] sm:aspect-square bg-warm-beige w-full relative overflow-hidden">
              <img 
                src={product.images[activeImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex space-x-4 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={cn(
                      "w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 border-2 overflow-hidden",
                      activeImage === idx ? "border-gold-500" : "border-transparent"
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* DETAILS */}
          <div className="flex flex-col">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">{product.category}</p>
            <h1 className="text-3xl sm:text-4xl font-serif text-charcoal-900 mb-4 leading-tight">{product.name}</h1>
            <p className="text-2xl text-charcoal-900 mb-8">{formatPrice(product.price)}</p>

            <p className="text-gray-600 font-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* VARIATIONS (Mocked) */}
            <div className="mb-8 space-y-6">
              {product.category.includes('Curtains') && (
                <div>
                  <span className="block text-sm uppercase tracking-widest text-charcoal-900 mb-3 font-semibold">Length</span>
                  <div className="flex flex-wrap gap-3">
                    {["Standard 240cm", "Long 280cm", "Custom Length"].map(size => (
                      <button 
                        key={size} 
                        onClick={() => setSelectedVariation(size)}
                        className={cn(
                          "border px-4 py-2 text-sm transition-colors",
                          selectedVariation === size ? "border-charcoal-900 bg-charcoal-900 text-white" : "border-gray-300 hover:border-charcoal-900 text-charcoal-900"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex space-x-4 mb-8">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-charcoal-900 text-white py-4 flex justify-center items-center hover:bg-gold-500 transition-colors uppercase tracking-widest text-sm font-semibold"
              >
                <ShoppingBag className="w-4 h-4 mr-2" /> Add to Cart
              </button>
              <button className="w-14 h-[52px] border border-gray-300 flex items-center justify-center text-charcoal-900 hover:text-gold-500 hover:border-gold-500 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            <a 
              href={`https://wa.me/2348000000000?text=I'm interested in ${product.name} (${formatPrice(product.price)})`}
              target="_blank" rel="noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-4 border border-gold-500 text-gold-600 hover:bg-gold-50 transition-colors font-medium mb-10"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              <span>Inquire on WhatsApp</span>
            </a>

            <div className="border-t border-gray-200 mt-4 pt-6 space-y-4">
              <div className="flex items-start">
                <ShieldCheck className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                <div>
                  <h5 className="text-sm font-semibold text-charcoal-900">Gatsby Guarantee</h5>
                  <p className="text-sm text-gray-500 font-light">1-Year Warranty on all motorized systems.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Truck className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                <div>
                  <h5 className="text-sm font-semibold text-charcoal-900">White-Glove Delivery</h5>
                  <p className="text-sm text-gray-500 font-light">Premium installation available in Lagos & Abuja.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
