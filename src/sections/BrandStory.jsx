import React from 'react';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';
import { FiAward } from 'react-icons/fi';
import expDining from '../assets/exp_dining.png';
import StaggerText from '../components/StaggerText';

const BrandStory = () => {
  return (
    <section id="story" className="py-28 bg-[#FAF9F6] text-[#111111] relative overflow-hidden">
      
      {/* Background Subtle 24K Gold Fine Dining Cutlery Crest Vectors */}
      <div className="absolute top-10 left-6 w-72 h-72 opacity-15 pointer-events-none text-[#AA771C]">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="100" cy="100" r="82" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="70" strokeWidth="0.75" />
          <g transform="rotate(-25 100 100)">
            <path d="M85 45 L85 85 C85 100 100 105 100 105 M75 45 L75 75 C75 88 85 92 85 92 M95 45 L95 75 C95 88 85 92 85 92" strokeWidth="1.2" />
            <path d="M85 92 L85 155" strokeWidth="2" />
          </g>
          <g transform="rotate(25 100 100)">
            <path d="M115 45 Q130 72 115 95 L115 155" strokeWidth="1.2" />
            <path d="M115 45 L115 155" strokeWidth="2" />
          </g>
          <circle cx="100" cy="100" r="10" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="absolute bottom-10 right-6 w-80 h-80 opacity-15 pointer-events-none text-[#AA771C]">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="100" cy="100" r="82" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="70" strokeWidth="0.75" />
          <g transform="rotate(-25 100 100)">
            <path d="M85 45 L85 85 C85 100 100 105 100 105 M75 45 L75 75 C75 88 85 92 85 92 M95 45 L95 75 C95 88 85 92 85 92" strokeWidth="1.2" />
            <path d="M85 92 L85 155" strokeWidth="2" />
          </g>
          <g transform="rotate(25 100 100)">
            <path d="M115 45 Q130 72 115 95 L115 155" strokeWidth="1.2" />
            <path d="M115 45 L115 155" strokeWidth="2" />
          </g>
          <circle cx="100" cy="100" r="10" strokeWidth="0.75" />
        </svg>
      </div>

      {/* Background Watermark Shadow Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl md:text-[13rem] font-serif font-extralight text-[#AA771C]/5 uppercase tracking-[0.25em] pointer-events-none select-none whitespace-nowrap">
        HERITAGE & ART
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Story Details */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-white shadow-sm mb-6">
              <HiSparkles className="text-[#AA771C] text-xs" />
              <span className="text-xs uppercase tracking-[0.35em] text-[#AA771C] font-medium">
                OUR HERITAGE • EST. 1998
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#111111] mb-6 leading-tight">
              A Culinary Journey <br/> 
              <span className="italic text-[#AA771C] font-light">Redefining Haute Gastronomy</span>
            </h2>

            <StaggerText 
              text="Founded on the principles of passion and architectural precision, L'Élégance has been redefining fine dining for over two decades. Our philosophy is rooted in the belief that every meal should be a masterpiece, an orchestration of rare flavors that tells an intimate story." 
              className="text-[#111111]/80 text-base sm:text-lg leading-relaxed mb-6 block font-light"
              delay={0.2}
            />

            <StaggerText 
              text="We source the rarest seasonal ingredients from private estate producers around the world, combining centuries-old traditional techniques with avant-garde innovation to transcend the ordinary." 
              className="text-[#111111]/80 text-base sm:text-lg leading-relaxed mb-10 block font-light"
              delay={0.4}
            />
            
            {/* 3 Luxury Stat Badges */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#D4AF37]/30">
              <div className="bg-white p-4 rounded-xl border border-[#D4AF37]/30 shadow-sm text-center">
                <h4 className="text-2xl sm:text-3xl font-serif text-[#AA771C] font-bold mb-1">25+</h4>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#111111]/60 font-medium">Years of Excellence</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#D4AF37]/30 shadow-sm text-center">
                <h4 className="text-2xl sm:text-3xl font-serif text-[#AA771C] font-bold mb-1">3</h4>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#111111]/60 font-medium">Michelin Stars</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#D4AF37]/30 shadow-sm text-center">
                <h4 className="text-2xl sm:text-3xl font-serif text-[#AA771C] font-bold mb-1">3,000+</h4>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#111111]/60 font-medium">Vintage Wines</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Photography with Gold Frame & Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative h-[500px] sm:h-[580px] w-full"
          >
            {/* Gold Offset Accent Frame */}
            <div className="absolute inset-0 border-2 border-[#D4AF37]/60 rounded-2xl transform translate-x-4 translate-y-4 pointer-events-none" />
            
            {/* Main Photography Container */}
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white">
              <img 
                src={expDining} 
                alt="L'Élégance Michelin Dining Interior" 
                className="w-full h-full object-cover filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Gold Wax Seal Badge */}
            <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#D4AF37]/50 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#AA771C] flex items-center justify-center text-white shadow-md">
                <FiAward className="text-xl" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#AA771C] font-bold">HAUTE DINING SANCTUARY</p>
                <p className="text-[11px] text-[#111111]/70">Mayfair Place, London</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BrandStory;
