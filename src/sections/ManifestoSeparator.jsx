import React from 'react';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';

const ManifestoSeparator = () => {
  return (
    <section className="relative bg-[#FAF9F6] text-[#111111] py-7 sm:py-9 overflow-hidden shadow-[inset_0_0_50px_rgba(0,0,0,0.03)] z-20">
      
      {/* Giant Background Shadow Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl sm:text-8xl md:text-[10rem] font-serif font-extralight text-[#AA771C]/10 uppercase tracking-[0.2em] pointer-events-none select-none whitespace-nowrap z-0">
        L'ÉLÉGANCE
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Minimal Gold Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/40 bg-white/90 shadow-sm mb-3.5"
        >
          <HiSparkles className="text-[#AA771C] text-[11px]" />
          <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.35em] text-[#AA771C] font-medium">
            OUR CULINARY MANIFESTO
          </span>
          <HiSparkles className="text-[#AA771C] text-[11px]" />
        </motion.div>

        {/* Pure High-Fashion Quote */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-2xl md:text-3xl font-serif italic font-light leading-snug sm:leading-relaxed text-[#111111] mb-3.5 max-w-3xl mx-auto tracking-wide"
        >
          “Haute gastronomy is not merely culinary preparation; it is an intimate expression of memory, emotion, and architectural precision.”
        </motion.h2>

        {/* Minimal Subtitle */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[#AA771C] font-semibold"
        >
          <span className="w-8 h-px bg-[#AA771C]/40" />
          <span>L'Élégance Mayfair Board</span>
          <span className="w-8 h-px bg-[#AA771C]/40" />
        </motion.div>

      </div>
    </section>
  );
};

export default ManifestoSeparator;
