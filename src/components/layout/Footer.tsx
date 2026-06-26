import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/20 pb-16">
          
          <div className="space-y-6">
            <img src="/Logo%20Ghost.png" alt="GATSBY" className="h-10 w-auto object-contain" />
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Comfort Guaranteed. Elevating everyday living through luxury bedding, smart home furnishings, and timeless elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6">Shop Collections</h4>
            <ul className="space-y-4">
              <li><Link to="/shop?category=smart" className="text-gray-300 hover:text-gold-500 transition-colors text-sm">Smart Curtains</Link></li>
              <li><Link to="/shop?category=turkish" className="text-gray-300 hover:text-gold-500 transition-colors text-sm">Turkish Curtains</Link></li>
              <li><Link to="/shop?category=bedding" className="text-gray-300 hover:text-gold-500 transition-colors text-sm">Luxury Bedding Sets</Link></li>
              <li><Link to="/shop?category=toppers" className="text-gray-300 hover:text-gold-500 transition-colors text-sm">Premium Bed Toppers</Link></li>
              <li><Link to="/shop?category=towels" className="text-gray-300 hover:text-gold-500 transition-colors text-sm">Hotel Collection Towels</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6">Services & Support</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-gray-300 hover:text-gold-500 transition-colors text-sm">Book Consultation</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold-500 transition-colors text-sm">Request a Quote</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-gold-500 transition-colors text-sm">Our Story</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-gold-500 transition-colors text-sm">FAQ & Care Guide</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-gold-500 transition-colors text-sm">Shipping & Returns</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <MapPin className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <span>Banana Island, Ikoyi<br />Lagos, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <span>+234 (0) 800 GATSBY</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <span>concierge@gatsbyhome.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Gatsby Luxury Home. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
