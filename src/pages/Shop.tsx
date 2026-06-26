import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Filter, ChevronDown } from "lucide-react";
import { formatPrice } from "../data/mockData";
import { cn } from "../lib/utils";
import { useProducts } from "../context/ProductContext";

const categories = ["All", "Smart Curtains", "Turkish Curtains", "Bedding Sets", "Bed Toppers", "Latex Pillows", "Towels"];

export default function Shop() {
  const { products } = useProducts();
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [activeCategory, setActiveCategory] = useState(
    initialCategory === "All" || !categories.includes(initialCategory as string) ? "All" : initialCategory
  );

  const filteredProducts = products.filter((product) =>
    activeCategory === "All" ? true : product.category === activeCategory
  );

  return (
    <div className="pt-20 bg-ivory min-h-screen">
      {/* SHOP HEADER */}
      <div className="bg-warm-beige py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-4">The Collection</h1>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            Discover our curated selection of premium home furnishings. Each piece is designed to elevate your living space to a 5-star standard.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* SIDEBAR FILTERS md+ */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <h3 className="font-serif text-lg mb-6 flex items-center"><Filter className="w-4 h-4 mr-2" /> Categories</h3>
            <ul className="space-y-3 font-light text-gray-600">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "transition-colors text-left w-full",
                      activeCategory === cat ? "text-gold-500 font-medium" : "hover:text-charcoal-900"
                    )}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* MOBILE FILTERS */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto pb-4 space-x-4 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "whitespace-nowrap px-4 py-2 rounded-full border text-sm transition-colors",
                    activeCategory === cat 
                      ? "bg-charcoal-900 text-white border-charcoal-900" 
                      : "bg-transparent text-gray-600 border-gray-300"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-8">
              <span className="text-sm text-gray-500 font-light">{filteredProducts.length} Products</span>
              <button className="text-sm font-light flex items-center text-gray-500 hover:text-charcoal-900 transition-colors">
                Sort by <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredProducts.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="group cursor-pointer block">
                  <div className="relative aspect-[4/5] bg-warm-beige mb-4 overflow-hidden">
                    {product.isNew && (
                      <span className="absolute top-4 left-4 z-10 bg-white/90 text-charcoal-900 text-[10px] px-2 py-1 uppercase tracking-wider font-semibold">New</span>
                    )}
                    {product.isBestseller && !product.isNew && (
                      <span className="absolute top-4 left-4 z-10 bg-gold-500/90 text-white text-[10px] px-2 py-1 uppercase tracking-wider font-semibold">Bestseller</span>
                    )}
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal-900 mb-1 group-hover:text-gold-500 transition-colors">{product.name}</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{product.category}</p>
                    <p className="text-charcoal-900 font-medium">{formatPrice(product.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-20 text-gray-500 font-light">
                No products found in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
