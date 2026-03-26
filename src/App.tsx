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
          isScrolled ? "bg-secondary text-white shadow-lg py-4" : "bg-transparent text-white py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold tracking-wider uppercase cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            Oga Madam <span className="text-primary">Kitchen</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide uppercase">
            <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection("location")} className="hover:text-primary transition-colors">Location</button>
            <a href={phoneLink} className="bg-primary text-secondary px-6 py-2.5 rounded hover:bg-primary-hover transition-colors font-semibold">
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
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
            <button onClick={() => scrollToSection("services")} className="text-left py-4 border-b border-white/10">Services</button>
            <button onClick={() => scrollToSection("about")} className="text-left py-4 border-b border-white/10">About</button>
            <button onClick={() => scrollToSection("location")} className="text-left py-4 border-b border-white/10">Location</button>
            <a href={phoneLink} className="bg-primary text-secondary text-center py-4 rounded font-bold mt-4">
              Call {phoneNumber}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=2070&auto=format&fit=crop"
            alt="Delicious African Cuisine"
            className="w-full h-full object-cover brightness-110 contrast-105"
            referrerPolicy="no-referrer"
          />
          {/* Gradient just for the top nav and bottom transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-secondary"></div>
          {/* Soft radial glow behind text to ensure readability without darkening the whole image */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,transparent_50%)]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16 drop-shadow-2xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base"
          >
            Welcome to Oga Madam Kitchen
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight"
          >
            The Heartbeat of <br/><span className="text-primary italic">African Cuisine</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light"
          >
            Experience authentic West African and Kenyan flavors right here in Minneapolis. Crafted with passion, served with warmth.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-primary text-secondary px-8 py-4 rounded font-semibold uppercase tracking-wide hover:bg-primary-hover transition-colors flex items-center justify-center gap-2">
              <MapPin size={20} />
              Visit Us
            </a>
            <button onClick={() => scrollToSection("services")} className="w-full sm:w-auto bg-transparent border border-white/30 text-white px-8 py-4 rounded font-semibold uppercase tracking-wide hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              Learn More
              <ArrowRight size={20} />
            </button>
          </motion.div>
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
    </div>
  );
}
