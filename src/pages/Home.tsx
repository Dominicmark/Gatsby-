import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Star } from "lucide-react";
import { formatPrice } from "../data/mockData";
import { useProducts } from "../context/ProductContext";

export default function Home() {
  const { products } = useProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="w-full relative">
      
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* Base dark overlay with additional top gradient for logo visibility */}
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/80 via-black/20 to-transparent z-10" />
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
            poster="https://res.cloudinary.com/dbbw8jsjc/video/upload/v1782314569/gastby_video_1_j4jucx.jpg"
            className="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/dbbw8jsjc/video/upload/v1782314569/gastby_video_1_j4jucx.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight"
          >
            Luxury Home Experiences.<br />
            <span className="italic font-light">Comfort Guaranteed.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light"
          >
            Elevating everyday living in Nigeria through uncompromising quality, exquisite craftsmanship, and timeless elegance.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link 
              to="/shop" 
              className="bg-white text-charcoal-900 px-8 py-4 rounded-sm hover:bg-gold-500 hover:text-white transition-all uppercase tracking-widest text-sm font-medium"
            >
              Shop Collections
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border border-white text-white px-8 py-4 rounded-sm hover:bg-white hover:text-charcoal-900 transition-all uppercase tracking-widest text-sm font-medium"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY GATSBY SECTION */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-4">The Gatsby Standard</h2>
            <p className="text-gray-600 font-light text-lg">Every thread, every mechanism, curated to reflect the zenith of modern lifestyle. We bring 5-star hotel luxury directly into your private sanctuary.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="h-16 w-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-warm-beige group-hover:bg-gold-500 transition-colors">
                <Star className="h-6 w-6 text-gold-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-serif mb-3">Uncompromising Quality</h3>
              <p className="text-gray-500 font-light leading-relaxed">Sourced from the finest global artisans. From Turkish silk blends to Egyptian long-staple cotton.</p>
            </div>
            <div className="text-center group">
              <div className="h-16 w-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-warm-beige group-hover:bg-gold-500 transition-colors">
                <svg className="h-6 w-6 text-gold-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-3">Smart Integration</h3>
              <p className="text-gray-500 font-light leading-relaxed">Seamlessly control your environment with our whisper-quiet motorized curtains and home automation.</p>
            </div>
            <div className="text-center group">
              <div className="h-16 w-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-warm-beige group-hover:bg-gold-500 transition-colors">
                <svg className="h-6 w-6 text-gold-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-3">Concierge Service</h3>
              <p className="text-gray-500 font-light leading-relaxed">From bespoke measuring to white-glove installation, our experts guide you at every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-3">Signature Pieces</h2>
              <p className="text-gray-500 font-light">Curated essentials for the discerning homeowner.</p>
            </div>
            <Link to="/shop" className="hidden border-b border-charcoal-900 text-charcoal-900 pb-1 md:flex items-center hover:text-gold-500 hover:border-gold-500 transition-colors uppercase tracking-widest text-xs font-semibold">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[4/5] bg-warm-beige mb-6 overflow-hidden">
                  {product.isNew && (
                    <span className="absolute top-4 left-4 z-10 bg-white/90 text-charcoal-900 text-xs px-3 py-1 uppercase tracking-wider font-semibold">New</span>
                  )}
                  {product.isBestseller && !product.isNew && (
                    <span className="absolute top-4 left-4 z-10 bg-gold-500/90 text-white text-xs px-3 py-1 uppercase tracking-wider font-semibold">Bestseller</span>
                  )}
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{product.category}</p>
                  <h3 className="font-serif text-lg text-charcoal-900 mb-2 truncate group-hover:text-gold-500 transition-colors">{product.name}</h3>
                  <p className="text-charcoal-900 font-medium">{formatPrice(product.price)}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/shop" className="inline-flex items-center text-charcoal-900 border-b border-charcoal-900 pb-1 uppercase tracking-widest text-xs font-semibold">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOTEL LUXURY SPLIT */}
      <section className="bg-charcoal-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex bg-charcoal-800 min-h-[400px] lg:min-h-[auto]">
            <img 
              src="https://res.cloudinary.com/dbbw8jsjc/image/upload/f_auto,q_auto/v1/Serene_and_sophisticated_luxury_hotel_202606251618_bzxuca.jpg" 
              alt="Hotel Collection" 
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>
          <div className="px-8 py-20 lg:p-24 flex flex-col justify-center">
            <h4 className="text-gold-500 tracking-widest uppercase text-sm font-semibold mb-6">The Hotel Collection</h4>
            <h2 className="text-4xl lg:text-5xl font-serif mb-6 leading-tight">Bring 5-Star Luxury to Your Bedroom.</h2>
            <p className="text-gray-300 font-light text-lg mb-10 leading-relaxed max-w-xl">
              Partnering with luxury boutique hotels and premium Airbnb hosts across Nigeria to deliver unmatched sleeping experiences. Our commercial-grade linens and smart drapery systems are now available for private residences.
            </p>
            <div>
              <Link to="/contact" className="inline-flex items-center space-x-3 text-white hover:text-gold-500 transition-colors group">
                <span className="border-b border-white group-hover:border-gold-500 uppercase tracking-widest text-sm pb-1 font-semibold">Request Commercial Quote</span>
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
