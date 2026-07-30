import React from 'react';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';
import { FiMapPin, FiClock, FiPhone, FiMail, FiNavigation } from 'react-icons/fi';

const LocationExperience = () => {
  return (
    <section id="location" className="py-16 md:py-20 bg-[#0a0a0a] text-white relative overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Details */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 mb-4 self-start">
              <HiSparkles className="text-[#D4AF37] text-[11px] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#F3E5AB] font-medium">MAYFAIR DESTINATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white mb-6 tracking-tight">
              Visit Us
            </h2>
            
            <div className="space-y-4">
              
              {/* Address Box */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
                <div className="flex items-center gap-2.5 text-[#D4AF37] text-[11px] uppercase tracking-widest font-semibold mb-1">
                  <FiMapPin className="text-sm" />
                  <span>Sanctuary Address</span>
                </div>
                <p className="text-neutral-200 text-xs sm:text-sm font-serif font-light leading-relaxed">
                  12 Mayfair Place, Mayfair, London W1J 8AJ, United Kingdom
                </p>
              </div>

              {/* Hours Box */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
                <div className="flex items-center gap-2.5 text-[#D4AF37] text-[11px] uppercase tracking-widest font-semibold mb-2">
                  <FiClock className="text-sm" />
                  <span>Service Hours & Protocol</span>
                </div>
                <ul className="text-neutral-300 text-xs font-light space-y-1.5">
                  <li className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-white font-medium">Dinner Service:</span>
                    <span>Mon – Sun: 5:00 PM – 11:30 PM</span>
                  </li>
                  <li className="flex justify-between pt-0.5">
                    <span className="text-white font-medium">Sommelier Vault:</span>
                    <span>4:00 PM – Midnight</span>
                  </li>
                </ul>
              </div>

              {/* Contact Box */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
                <div className="flex items-center gap-2.5 text-[#D4AF37] text-[11px] uppercase tracking-widest font-semibold mb-1.5">
                  <FiPhone className="text-sm" />
                  <span>Direct Concierge</span>
                </div>
                <div className="text-neutral-300 text-xs font-light flex flex-wrap gap-4">
                  <p className="flex items-center gap-1.5">
                    <FiMail className="text-[#D4AF37]" />
                    <span>concierge@lelegance-mayfair.com</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <FiPhone className="text-[#D4AF37]" />
                    <span>+44 20 7946 0912</span>
                  </p>
                </div>
              </div>

              {/* Navigation Action Button */}
              <div className="pt-2">
                <a 
                  href="https://maps.google.com/?q=Mayfair+Place+London" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3 bg-gradient-to-r from-[#D4AF37] via-[#AA771C] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right transition-all duration-500 rounded-full text-black font-medium tracking-widest text-[11px] uppercase shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transform hover:-translate-y-0.5"
                >
                  <FiNavigation className="text-sm" />
                  <span>Open Directions in Google Maps</span>
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Clean Dark Mayfair Google Map Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[380px] sm:h-[440px] w-full rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-neutral-950 group"
          >
            {/* Embedded Dark Mayfair Map */}
            <iframe 
              title="L'Élégance Mayfair London Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.279860641217!2d-0.14441062338023164!3d51.50811997181476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d54641979b%3A0xc43574971c26b643!2sMayfair%20Pl%2C%20Mayfair%2C%20London%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter brightness-70 contrast-125 invert-[88%] hue-rotate-180 opacity-75 group-hover:opacity-90 transition-all duration-500 pointer-events-auto"
            ></iframe>
            
            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60 pointer-events-none z-10" />

            {/* Top Glass Badge */}
            <div className="absolute top-4 left-4 right-4 pointer-events-none z-20">
              <div className="bg-black/90 backdrop-blur-md p-3 rounded-xl border border-[#D4AF37]/40 flex items-center justify-between shadow-xl">
                <span className="text-white font-serif tracking-widest text-[11px] uppercase text-[#F3E5AB]">
                  L'ÉLÉGANCE MAYFAIR LONDON
                </span>
                <span className="text-[#D4AF37] text-[9px] uppercase tracking-widest font-semibold animate-pulse flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  MAYFAIR W1J 8AJ
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LocationExperience;
