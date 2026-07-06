import React, { useState } from "react";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Reset after 5s
  };

  return (
    <div className="pt-20 bg-ivory min-h-screen">
      <div className="bg-charcoal-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Book a Consultation</h1>
          <p className="font-light text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you are furnishing a new luxury apartment, upgrading your hotel linens, or seeking smart drapery solutions, our experts are here to help.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-serif mb-8 text-charcoal-900">Get in Touch</h2>
            <div className="space-y-8 font-light text-gray-600">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-charcoal-900 font-medium mb-1">Showroom & Headquarters</h4>
                  <p>Tejuosho ultra modern shopping mall<br />Shop G305/306/307, Lagos</p>
                  <p className="text-sm text-gray-400 mt-2">Visits strictly by appointment.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-charcoal-900 font-medium mb-1">Call Us</h4>
                  <p>+234 701 917 5328</p>
                  <p>Mon - Fri, 9am - 6pm (WAT)</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-charcoal-900 font-medium mb-1">Email</h4>
                  <p>concierge@gatsbyhome.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-serif text-xl mb-4 text-charcoal-900">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center text-charcoal-900 hover:border-gold-500 hover:text-gold-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center text-charcoal-900 hover:border-gold-500 hover:text-gold-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl font-serif mb-6 text-charcoal-900">Request a Callback</h3>
            {submitted ? (
              <div className="bg-warm-beige p-6 text-center border border-gold-500/30">
                <h4 className="font-serif text-xl text-charcoal-900 mb-2">Thank You</h4>
                <p className="text-gray-600 font-light text-sm">Your request has been received. Our concierge team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                    <input type="text" required className="w-full border-b border-gray-300 focus:border-gold-500 pt-2 pb-3 bg-transparent outline-none transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                    <input type="text" required className="w-full border-b border-gray-300 focus:border-gold-500 pt-2 pb-3 bg-transparent outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                  <input type="email" required className="w-full border-b border-gray-300 focus:border-gold-500 pt-2 pb-3 bg-transparent outline-none transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                  <input type="tel" required className="w-full border-b border-gray-300 focus:border-gold-500 pt-2 pb-3 bg-transparent outline-none transition-colors" placeholder="+234..." />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Service Required</label>
                  <select className="w-full border-b border-gray-300 focus:border-gold-500 pt-2 pb-3 bg-transparent outline-none transition-colors text-charcoal-900">
                    <option>Smart Curtains Consultation</option>
                    <option>Hotel / Airbnb Furnishing</option>
                    <option>General Luxury Bedding</option>
                    <option>Interior Styling Guidance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message (Optional)</label>
                  <textarea rows={3} className="w-full border-b border-gray-300 focus:border-gold-500 pt-2 pb-3 bg-transparent outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full bg-charcoal-900 text-white py-4 hover:bg-gold-500 transition-colors uppercase tracking-widest text-sm font-semibold">
                  Submit Request
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
