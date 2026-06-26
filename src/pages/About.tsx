export default function About() {
  return (
    <div className="pt-20 bg-ivory text-charcoal-900 min-h-screen">
      <div className="relative h-[60vh] min-h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80" 
          alt="Gatsby Quality Linen" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/60" />
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
          <div>
            <h1 className="text-4xl md:text-6xl text-white font-serif mb-4">Our Story</h1>
            <p className="text-white/80 uppercase tracking-widest text-sm text-gold-400">Comfort Guaranteed.</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-serif mb-8 text-gold-500">More Than Bedding. It's a Lifestyle.</h2>
        <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
          At Gatsby, we believe that your home should be your sanctuary—a place where luxury meets uncompromising comfort. Born from a desire to bring 5-star hotel experiences into private residences, Gatsby has become Nigeria's premier destination for luxury home furnishings.
        </p>
        <p className="text-lg text-gray-600 font-light leading-relaxed">
          From our signature Smart Curtains that open at the sound of your voice, to our Turkish drapery and Egyptian cotton bedding, every Gatsby product is a testament to extraordinary craftsmanship and modern elegance.
        </p>
      </div>
    </div>
  );
}
