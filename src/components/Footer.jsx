import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaTwitter, FaAward } from 'react-icons/fa';
import { FiArrowUp, FiMail, FiMapPin, FiPhone, FiClock } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] text-white pt-24 pb-12 relative overflow-hidden">
      
      {/* Giant Background Shadow Watermark Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-7xl md:text-[14rem] font-serif font-extralight text-[#D4AF37]/5 uppercase tracking-[0.25em] pointer-events-none select-none whitespace-nowrap z-0">
        L'ÉLÉGANCE
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Private Concierge Club Newsletter Strip */}
        <div className="bg-neutral-950/80 border border-[#D4AF37]/40 rounded-3xl p-8 md:p-12 mb-20 backdrop-blur-xl shadow-[0_0_50px_rgba(212,175,55,0.15)] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/40 bg-black/60 mb-3">
              <HiSparkles className="text-[#D4AF37] text-xs animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#F3E5AB] font-medium">
                PRIVATE CONCIERGE CLUB
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-light mb-2">
              Receive Rare Allocation Invites
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
              Subscribe to join our exclusive VIP guest ledger for private cellar allocations and tasting invitations.
            </p>
          </div>

          <form 
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto"
          >
            <div className="relative w-full sm:w-80">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37] text-base" />
              <input 
                type="email" 
                placeholder="Enter your VIP email address..." 
                className="w-full bg-black/80 border border-white/20 focus:border-[#D4AF37] rounded-full pl-11 pr-4 py-3.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
              />
            </div>
            <button 
              type="submit" 
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#AA771C] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right transition-all duration-500 rounded-full text-black font-medium tracking-widest text-xs uppercase shadow-[0_0_25px_rgba(212,175,55,0.4)] whitespace-nowrap"
            >
              Join VIP Club
            </button>
          </form>
        </div>

        {/* 4 Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand & Michelin Accolades */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-serif tracking-widest uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F3E5AB] to-[#D4AF37]">
              L'Élégance
            </h2>
            
            <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
              A symphony of taste, architecture, and French culinary heritage offering a 3-Star Michelin experience in Mayfair.
            </p>

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-black/70 border border-[#D4AF37]/40 mb-6 text-xs text-[#F3E5AB]">
              <FaAward className="text-[#D4AF37] text-base" />
              <span className="font-serif">MICHELIN THREE STARS • 2026</span>
            </div>

            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-neutral-300 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300">
                <FaInstagram size={15} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-neutral-300 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300">
                <FaFacebookF size={15} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-neutral-300 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300">
                <FaTwitter size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3.5">
              {[
                { name: 'The Essence', href: '#experience' },
                { name: 'Culinary Manifesto', href: '#story' },
                { name: 'Chef\'s Specialities', href: '#menu' },
                { name: 'Immersive Gallery', href: '#gallery' },
                { name: 'Private Events', href: '#reservation' },
                { name: 'Table Reservations', href: '#reservation' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="text-neutral-400 hover:text-[#F3E5AB] transition-colors duration-300 text-xs sm:text-sm font-light inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50 group-hover:bg-[#D4AF37] transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours & Policy */}
          <div>
            <h4 className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold mb-6">
              Hours & Protocol
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm text-neutral-400 font-light">
              <li className="flex items-start gap-2.5">
                <FiClock className="text-[#D4AF37] text-base shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Dinner Service</span>
                  <span>Monday – Sunday: 5:00 PM – 11:30 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <FiClock className="text-[#D4AF37] text-base shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Sommelier Cellar</span>
                  <span>4:00 PM – Midnight</span>
                </div>
              </li>
              <li className="pt-2 text-xs text-[#F3E5AB]/80 border-t border-white/10">
                <span className="font-semibold text-[#D4AF37] block mb-1">DRESS CODE POLICY</span>
                <span>Black Tie & Formal Elegant Attire Required</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Concierge */}
          <div>
            <h4 className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold mb-6">
              Mayfair Concierge
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm text-neutral-400 font-light">
              <li className="flex items-start gap-2.5">
                <FiMapPin className="text-[#D4AF37] text-base shrink-0 mt-0.5" />
                <span>12 Mayfair Place, Mayfair, London W1J 8AJ, United Kingdom</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="text-[#D4AF37] text-base shrink-0" />
                <span>+44 20 7946 0912</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiMail className="text-[#D4AF37] text-base shrink-0" />
                <span>concierge@lelegance-mayfair.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back-to-Top Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} L'Élégance Haute Gastronomy London. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex space-x-4 text-xs text-neutral-400 font-light">
              <a href="#" className="hover:text-[#F3E5AB] transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-[#F3E5AB] transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-[#F3E5AB] transition-colors">Sommelier Charter</a>
            </div>

            {/* Back to Top Smooth Scroll Button */}
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/40 bg-black/80 hover:bg-[#D4AF37] hover:text-black text-[#F3E5AB] text-xs font-medium uppercase tracking-widest transition-all duration-300 shadow-md"
            >
              <span>Top</span>
              <FiArrowUp className="text-sm transform group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
