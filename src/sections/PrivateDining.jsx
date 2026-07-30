import React from 'react';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';
import { FiCheck, FiCalendar, FiArrowRight } from 'react-icons/fi';
import expAmbience from '../assets/exp_ambience.png';
import expDining from '../assets/exp_dining.png';

const PrivateDining = () => {
  return (
    <section id="private-dining" className="py-28 md:py-36 bg-[#FAF9F6] text-[#111111] relative overflow-hidden">
      
      {/* Background Subtle Botanical Floral Vector */}
      <div className="absolute top-10 left-6 w-80 h-80 opacity-10 pointer-events-none text-[#AA771C]">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 20C110 60 140 90 180 100C140 110 110 140 100 180C90 140 60 110 20 100C60 90 90 60 100 20Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-white shadow-sm mb-4">
            <HiSparkles className="text-[#AA771C] text-xs" />
            <span className="text-xs uppercase tracking-[0.35em] text-[#AA771C] font-medium">EXCLUSIVE</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#111111] font-light mb-4">
            Private Dining
          </h2>

          <p className="text-neutral-600 text-xs sm:text-sm font-light max-w-xl mx-auto">
            Bespoke sanctuaries designed for intimate celebrations, corporate galas, and private gatherings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Overlapping HD Photography with Gold Offset Border */}
          <div className="relative h-[480px] sm:h-[560px] w-full">
            {/* Main Background Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-xl border border-white z-10"
            >
              <img 
                src={expAmbience} 
                alt="Private Salon Interior" 
                className="w-full h-full object-cover filter brightness-95"
              />
            </motion.div>

            {/* Overlapping Foreground Card */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF9F6] z-20"
            >
              <img 
                src={expDining} 
                alt="Private Table Setting" 
                className="w-full h-full object-cover filter brightness-95"
              />
            </motion.div>

            {/* Gold Offset Accent Frame */}
            <div className="absolute inset-0 border-2 border-[#D4AF37]/50 rounded-2xl transform translate-x-3 translate-y-3 pointer-events-none z-0" />
          </div>

          {/* Right Column: Details & Inquire Control */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pl-6"
          >
            <h3 className="text-3xl sm:text-4xl font-serif text-[#111111] font-light mb-6">
              Elevate Your Celebrations
            </h3>

            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 font-light">
              Whether it's an intimate anniversary, a corporate gala, or a private gathering of discerning minds, our exclusive dining spaces offer an environment of unmatched sophistication.
            </p>

            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Enjoy bespoke tasting menus crafted by Master Chef Antoine Laurent, dedicated sommelier service, and absolute privacy behind closed doors.
            </p>

            {/* Private Spaces Options List */}
            <div className="space-y-3 mb-10">
              {[
                { name: 'The Vault Room', capacity: 'Up to 12 guests' },
                { name: 'The Conservatory', capacity: 'Up to 30 guests' },
                { name: 'Full Restaurant Buyout', capacity: 'Up to 80 guests' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#D4AF37]/30 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#AA771C]/15 flex items-center justify-center text-[#AA771C]">
                      <FiCheck className="text-xs" />
                    </span>
                    <span className="font-serif text-sm font-medium text-[#111111]">{item.name}</span>
                  </div>
                  <span className="text-xs text-[#AA771C] font-mono uppercase tracking-wider">{item.capacity}</span>
                </div>
              ))}
            </div>

            {/* Inquire CTA Button */}
            <a 
              href="#reservation" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#AA771C] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right transition-all duration-500 rounded-full text-black font-medium tracking-widest text-xs uppercase shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] transform hover:-translate-y-0.5"
            >
              <FiCalendar className="text-base" />
              <span>Inquire Concierge</span>
              <FiArrowRight className="text-base" />
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PrivateDining;
