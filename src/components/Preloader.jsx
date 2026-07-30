import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-between bg-[#0a0a0a] text-white p-8 md:p-16 select-none"
        >
          {/* Top Brand Tag */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
            <HiSparkles className="text-[#D4AF37] text-xs animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#F3E5AB] font-medium">MAYFAIR LONDON • 3-STAR MICHELIN</span>
          </div>

          {/* Center Brand Title & Progress Counter */}
          <div className="text-center my-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-[0.2em] uppercase font-light mb-4"
            >
              L'Élégance
            </motion.h1>

            <p className="text-xs sm:text-sm font-light text-neutral-400 tracking-widest uppercase mb-8">
              Initializing Haute Gastronomy Sanctuary
            </p>

            {/* Progress Bar Container */}
            <div className="w-56 sm:w-80 h-1 bg-neutral-900 rounded-full overflow-hidden mx-auto border border-white/10 relative">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#D4AF37] via-[#AA771C] to-[#D4AF37] rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage Display */}
            <div className="mt-4 text-xs font-mono text-[#D4AF37] tracking-widest">
              {progress}%
            </div>
          </div>

          {/* Bottom Protocol Note */}
          <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-light">
            Sanctuary Protocol v3.0
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
