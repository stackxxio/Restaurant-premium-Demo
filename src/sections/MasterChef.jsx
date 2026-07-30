import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar, FiCheckCircle } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import StaggerText from '../components/StaggerText';

const MasterChef = () => {
  return (
    <section className="py-28 md:py-36 bg-[#0a0a0a] text-white overflow-hidden relative">
      
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Chef Portrait with Gold Frame Accents */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative h-[520px] sm:h-[620px] lg:h-[680px] w-full group"
          >
            {/* Gold Accent Offset Frame */}
            <div className="absolute inset-0 border border-[#D4AF37]/40 transform translate-x-4 translate-y-4 rounded-3xl transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
            
            {/* Main Portrait Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1974&auto=format&fit=crop" 
                alt="Master Chef Antoine Laurent" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
              
              {/* Floating Michelin Badge */}
              <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md border border-[#D4AF37]/40 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <FiStar className="text-[#D4AF37]" />
                <span className="text-xs uppercase tracking-widest text-[#F3E5AB] font-medium">3 Michelin Stars</span>
              </div>

              {/* Bottom Tagline Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                <p className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold mb-1">Executive Culinary Director</p>
                <p className="text-sm text-neutral-300 font-light">"Precision, passion, and perfection on every plate."</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Signature */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6 pl-0 lg:pl-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 mb-6">
              <HiSparkles className="text-[#D4AF37] text-xs" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#F3E5AB] font-medium">Master Chef</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6 font-light text-white tracking-tight">
              Antoine Laurent
            </h2>
            
            <StaggerText 
              text='"Cooking is not merely about feeding. It is an art form, a symphony of flavors that evokes memories and creates new ones. Every plate is a blank canvas, and every ingredient is a color waiting to be masterfully applied."'
              className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8 italic font-serif"
              delay={0.2}
            />

            {/* Awards Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10 border-y border-white/10 py-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FiAward className="text-[#D4AF37] text-lg" />
                  <h4 className="text-xl font-serif text-[#F3E5AB]">James Beard</h4>
                </div>
                <p className="text-xs text-neutral-400 uppercase tracking-widest">Award Winner 2022</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FiCheckCircle className="text-[#D4AF37] text-lg" />
                  <h4 className="text-xl font-serif text-[#F3E5AB]">Global Icon</h4>
                </div>
                <p className="text-xs text-neutral-400 uppercase tracking-widest">Top 50 World Chefs</p>
              </div>
            </div>

            {/* Custom Gold Vector Signature */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-1">Chef Signature</span>
                <svg className="w-64 h-16 text-[#D4AF37]" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 55 C 30 15, 45 10, 50 45 C 55 75, 35 70, 45 40 C 55 10, 75 5, 80 35 C 85 55, 95 65, 110 50 C 120 40, 130 30, 140 50 C 150 70, 160 30, 175 45 C 185 55, 195 25, 210 40 C 220 50, 240 30, 260 45 C 270 52, 285 40, 290 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M30 65 Q 120 75 270 58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                  <text x="25" y="48" fontFamily="serif" fontSize="24" fontStyle="italic" fill="currentColor" opacity="0.95">Antoine Laurent</text>
                </svg>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MasterChef;

