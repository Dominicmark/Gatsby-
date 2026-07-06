import { X, Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../data/mockData";
import { useState } from "react";
import { cn } from "../../lib/utils";

export default function CartDrawer() {
  const { items, removeFromCart, cartTotal, isCartOpen, setIsCartOpen, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "" });

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    let orderDetails = `*New Order Inquiry*\n\n*Customer:* ${formData.name}\n*Email:* ${formData.email}\n\n*Items:*\n`;
    items.forEach((item) => {
      orderDetails += `- ${item.product.name} (Qty: ${item.quantity}) ${item.variation ? `[${item.variation}]` : ""}\n`;
    });
    orderDetails += `\n*Total:* ${formatPrice(cartTotal)}`;

    const encodedMessage = encodeURIComponent(orderDetails);
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/2347019175328?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    // Open Mail Client
    const mailtoUrl = `mailto:sales@gatsby.com?subject=New Order from ${encodeURIComponent(formData.name)}&body=${encodedMessage}`;
    window.open(mailtoUrl, "_blank");

    clearCart();
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-serif text-charcoal-900">Your Inquiry Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.variation}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-100 flex-shrink-0">
                    <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-charcoal-900 line-clamp-1">{item.product.name}</h3>
                    {item.variation && <p className="text-xs text-gray-500 mt-1">{item.variation}</p>}
                    <p className="text-sm text-charcoal-900 mt-1">{formatPrice(item.product.price)} x {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id, item.variation)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1 h-fit"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm uppercase tracking-widest text-gray-500 font-semibold">Estimated Total</span>
              <span className="text-lg text-charcoal-900 font-serif">{formatPrice(cartTotal)}</span>
            </div>
            
            <form onSubmit={handleCheckout} className="space-y-4">
              <p className="text-xs text-gray-500 mb-2">Please provide your details. We will send the inquiry to WhatsApp and Email.</p>
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-gold-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-gold-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="WhatsApp Number"
                required
                className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-gold-500"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              />
              <button
                type="submit"
                className="w-full bg-charcoal-900 text-white py-4 uppercase tracking-widest text-sm font-semibold hover:bg-gold-500 transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
