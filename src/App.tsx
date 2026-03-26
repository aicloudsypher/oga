import { MapPin, Phone, Clock, ChefHat, Utensils, PartyPopper, ArrowRight, Menu, X, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneNumber = "(763) 200-5773";
  const phoneLink = "tel:+17632005773";
  const whatsappLink = "https://wa.me/17632005773";
  const mapsLink = "https://share.google/Lq7FU2T10rKfLxMWV";
  const address = "6000 Shingle Creek Pkwy, Minneapolis, MN 55430";

  const menuItems = [
    { name: "Jollof Rice Feast", description: "Smoky, spicy West African rice served with fried plantain and choice of protein.", price: "$18", category: "West African" },
    { name: "Egusi Soup & Pounded Yam", description: "Rich melon seed soup with spinach and assorted meats, served with soft pounded yam.", price: "$22", category: "West African" },
    { name: "Pilau Special", description: "Fragrant Kenyan spiced rice with tender beef or goat, served with kachumbari.", price: "$19", category: "Kenyan" },
    { name: "Githeri", description: "Traditional Kenyan maize and beans stew, slow-cooked for rich flavor and texture.", price: "$15", category: "Kenyan" },
    { name: "Suya Platter", description: "Spicy grilled skewered beef seasoned with authentic yaji spice.", price: "$16", category: "West African" },
    { name: "Nyama Choma", description: "Authentic Kenyan-style goat or beef roasted to perfection.", price: "$25", category: "Kenyan" },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-accent font-sans text-secondary selection:bg-primary selection:text-secondary">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-secondary text-white shadow-lg py-3" : "bg-transparent text-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo Left */}
          <div 
            className="group flex items-center space-x-2 cursor-pointer shrink-0" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="border-2 border-primary px-2 py-0.5 rounded-sm bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <span className="font-serif text-xl font-black tracking-tighter uppercase text-white">
                OGA
              </span>
            </div>
            <div className="hidden sm:block font-serif text-lg font-bold tracking-wider uppercase">
              Oga Madam <span className="text-primary italic">Kitchen</span>
            </div>
          </div>

          {/* Centered Nav Links */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 space-x-8 text-[11px] font-bold tracking-[0.2em] uppercase text-white/80">
            <button onClick={() => scrollToSection("menu")} className="hover:text-primary transition-colors hover:scale-105 transform">Menu</button>
            <button onClick={() => scrollToSection("gallery")} className="hover:text-primary transition-colors hover:scale-105 transform">Gallery</button>
            <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors hover:scale-105 transform">Services</button>
            <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors hover:scale-105 transform">About</button>
            <button onClick={() => scrollToSection("location")} className="hover:text-primary transition-colors hover:scale-105 transform">Location</button>
          </div>

          {/* CTA Right */}
          <div className="flex items-center space-x-4">
            <a href={phoneLink} className="hidden md:block bg-primary text-secondary px-6 py-2.5 rounded-full hover:bg-primary-hover transition-all font-bold uppercase text-[10px] tracking-widest shadow-lg hover:shadow-primary/20">
              Order Now
            </a>
            <button className="lg:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-secondary text-white pt-24 px-6 flex flex-col space-y-6 text-lg uppercase tracking-wider font-medium"
          >
            <button onClick={() => scrollToSection("menu")} className="text-left py-4 border-b border-white/10">Menu</button>
            <button onClick={() => scrollToSection("gallery")} className="text-left py-4 border-b border-white/10">Gallery</button>
            <button onClick={() => scrollToSection("services")} className="text-left py-4 border-b border-white/10">Services</button>
            <button onClick={() => scrollToSection("about")} className="text-left py-4 border-b border-white/10">About</button>
            <button onClick={() => scrollToSection("location")} className="text-left py-4 border-b border-white/10">Location</button>
            <a href={phoneLink} className="bg-primary text-secondary text-center py-4 rounded font-bold mt-4">
              Call {phoneNumber}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern Hero Section (Design 2) */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center pt-24 md:pt-0 overflow-hidden bg-[#121212]">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content (Left) */}
          <div className="text-left max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[1.1] drop-shadow-2xl">
                Oga Madam <br/>
                <span className="text-primary italic">Kitchen</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl mb-12 max-w-md leading-relaxed">
                Experience the soulful essence of West African and Kenyan flavors, masterfully crafted for the modern palate.
              </p>
              <motion.div 
                className="flex flex-wrap gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <button 
                  onClick={() => scrollToSection("menu")}
                  className="bg-primary text-secondary px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-primary-hover transition-all shadow-[0_10px_30px_rgba(234,179,8,0.3)] hover:-translate-y-1"
                >
                  Explore Menu
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Image Centerpiece (Right) */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.6)]">
                <img
                  src="/hero_west_african.png"
                  alt="Signature Jollof Rice"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Element Accents */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 backdrop-blur-xl rounded-full -z-10 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 backdrop-blur-3xl rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>

        {/* Torn Paper Bottom Edge */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg className="relative block w-full h-[60px] text-accent" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.32,37.5,72.74,21.19,144.92,45.45,221.68,52.5S954,136.19,1012,126c62.61-11,123.6-43,188-43V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Our Signature Dishes</p>
            <h2 className="text-3xl md:text-5xl font-serif mb-4">The Oga Madam <span className="italic text-primary">Menu</span></h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {menuItems.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex justify-between items-baseline mb-3 pb-2 border-b border-gray-100">
                  <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors">{item.name}</h3>
                  <span className="text-primary font-bold">{item.price}</span>
                </div>
                <p className="text-secondary/70 text-sm leading-relaxed mb-4">{item.description}</p>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">{item.category}</span>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a href={phoneLink} className="inline-block bg-secondary text-white px-10 py-4 rounded font-semibold uppercase tracking-widest hover:bg-black transition-all shadow-xl hover:shadow-2xl">
              Order Now For Pickup
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Visual Experience</p>
            <h2 className="text-3xl md:text-5xl font-serif mb-4 text-white">Our <span className="italic text-primary">Gallery</span></h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-12">
            {[
              { src: "/gallery/fufu_soup.png", alt: "Authentic Fufu and Soup", size: "lg:col-span-2 lg:row-span-2" },
              { src: "/gallery/pilau.png", alt: "Kenyan Beef Pilau", size: "" },
              { src: "/gallery/suya.png", alt: "West African Suya", size: "" },
              { src: "/gallery/interior.png", alt: "Oga Madam Kitchen Ambiance", size: "lg:col-span-2" }
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative group rounded-2xl overflow-hidden cursor-pointer ${img.size}`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                  <span className="text-white font-serif italic text-xl border-b border-primary pb-1">{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Our Culinary Offerings</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-xl shadow-sm border border-black/5 hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-secondary transition-colors text-primary">
                <Utensils size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">West African Food</h3>
              <p className="text-secondary/70 leading-relaxed">
                Rich, bold, and authentic. Enjoy traditional West African dishes prepared with time-honored recipes and the freshest ingredients.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-sm border border-black/5 hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-secondary transition-colors text-primary">
                <ChefHat size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Kenyan Cuisine</h3>
              <p className="text-secondary/70 leading-relaxed">
                Savor the unique tastes of East Africa. Our Kenyan specialties bring the warmth and vibrant flavors of Nairobi to your table.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-sm border border-black/5 hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-secondary transition-colors text-primary">
                <PartyPopper size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Catering Services</h3>
              <p className="text-secondary/70 leading-relaxed">
                Elevate your next event with our premium catering. We provide unforgettable culinary experiences for gatherings of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About & Trust Section */}
      <section id="about" className="py-24 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Authentic Taste, <br/><span className="text-primary italic">Uncompromising Quality</span></h2>
            <p className="text-white/80 text-lg mb-6 leading-relaxed font-light">
              At Oga Madam Kitchen, we believe that food is more than just sustenance—it's a celebration of culture, community, and heritage. Located in the heart of Minneapolis, we are dedicated to bringing you the true essence of African cuisine.
            </p>
            <p className="text-white/80 text-lg mb-8 leading-relaxed font-light">
              Whether you're craving the spicy depth of West African stews or the comforting warmth of Kenyan classics, our kitchen prepares every meal with authentic spices and uncompromising care.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-bold text-xl mb-1">Authentic Recipes</h4>
                <p className="text-white/60 text-sm">True to our roots</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-bold text-xl mb-1">Fresh Ingredients</h4>
                <p className="text-white/60 text-sm">Quality you can taste</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-bold text-xl mb-1">Local Business</h4>
                <p className="text-white/60 text-sm">Proudly serving Minneapolis</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-bold text-xl mb-1">Expert Catering</h4>
                <p className="text-white/60 text-sm">For your special events</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=2070&auto=format&fit=crop" 
              alt="Authentic African Dish" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-4 border-primary/20 rounded-2xl m-4 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="location" className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-black/5 flex flex-col lg:flex-row">
            
            {/* Contact Info */}
            <div className="lg:w-1/2 p-12 lg:p-16 bg-secondary text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-8">Visit or Contact Us</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-1">Location</h4>
                    <p className="text-lg">{address}</p>
                    <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-white/60 hover:text-primary underline underline-offset-4 transition-colors">
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-1">Hours</h4>
                    <p className="text-lg">Tuesday - Sunday: 11:00 AM - 8:00 PM</p>
                    <p className="text-white/60 mt-1">Closed on Mondays</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-1">Call Us</h4>
                    <a href={phoneLink} className="text-xl font-medium hover:text-primary transition-colors block">
                      {phoneNumber}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a href={phoneLink} className="flex-1 bg-primary text-secondary px-6 py-4 rounded font-bold uppercase tracking-wide hover:bg-primary-hover transition-colors flex items-center justify-center gap-2">
                  <Phone size={20} />
                  Call Now
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366] text-white px-6 py-4 rounded font-bold uppercase tracking-wide hover:bg-[#20BD5A] transition-colors flex items-center justify-center gap-2">
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Map Placeholder / Image */}
            <div className="lg:w-1/2 min-h-[400px] relative bg-gray-200">
              <img 
                src="/ogaa.png" 
                alt="Oga Madam Kitchen Location" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-secondary/20"></div>
              <a 
                href={mapsLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="bg-white/90 backdrop-blur-sm text-secondary px-8 py-4 rounded-full font-bold uppercase tracking-wide shadow-lg group-hover:scale-105 transition-transform flex items-center gap-2">
                  <MapPin size={20} className="text-primary" />
                  Open in Google Maps
                </div>
              </a>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-light text-white/60 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-serif text-xl font-bold tracking-wider uppercase text-white">
            Oga Madam <span className="text-primary">Kitchen</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            <a href={phoneLink} className="hover:text-primary transition-colors">{phoneNumber}</a>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Minneapolis, MN</a>
          </div>
          
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Oga Madam Kitchen. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <motion.a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20BD5A] transition-all"
        >
          <MessageCircle size={28} />
        </motion.a>
        <motion.a 
          href={phoneLink}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 bg-primary text-secondary rounded-full shadow-2xl flex items-center justify-center hover:bg-primary-hover transition-all"
        >
          <Phone size={28} />
        </motion.a>
      </div>
    </div>
  );
}
