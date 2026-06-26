import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { cn } from "../../lib/utils";
import { useCart } from "../../context/CartContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Collections", path: "/shop?collection=true" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Admin", path: "/admin" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";
  const navBg = scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : isHome ? "bg-transparent" : "bg-white";
  const textColor = (!scrolled && isHome) ? "text-white hover:text-white/80" : "text-charcoal-900 hover:text-gold-500";
  const useWhiteLogo = (!scrolled && isHome);

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", navBg)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn("p-2 rounded-md", textColor)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.slice(0, 3).map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={cn("text-sm tracking-wide uppercase transition-colors", textColor)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex-shrink-0 flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <Link to="/" className="flex items-center justify-center">
              {useWhiteLogo ? (
                <img src="/Logo%20Beige.png" alt="GATSBY" className="h-12 w-auto object-contain block" />
              ) : (
                <img src="/Logo%20Black.png" alt="GATSBY" className="h-12 w-auto object-contain block" />
              )}
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.slice(3).map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={cn("text-sm tracking-wide uppercase transition-colors", textColor)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <button className={cn("p-2", textColor)}><Search className="h-5 w-5" /></button>
              <button className={cn("p-2", textColor)}><User className="h-5 w-5" /></button>
              <button onClick={() => setIsCartOpen(true)} className={cn("p-2 relative", textColor)}>
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-gold-500 text-[10px] flex items-center justify-center text-white font-bold">{cartCount}</span>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center lg:hidden space-x-2">
            <button className={cn("p-2", textColor)}><Search className="h-5 w-5" /></button>
            <button onClick={() => setIsCartOpen(true)} className={cn("p-2 relative", textColor)}>
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-gold-500 text-[10px] flex items-center justify-center text-white font-bold">{cartCount}</span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4">
          <div className="flex flex-col space-y-4 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg text-charcoal-900 border-b border-gray-100 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex space-x-4">
              <span className="text-sm text-gray-500">Account login</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
