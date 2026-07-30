import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const text = "MICHELIN STAR • FINE DINING • RESERVATIONS OPEN • MASTER CHEF ANTOINE LAURENT • EXCLUSIVE WINE PAIRING • ";
  
  return (
    <div className="relative flex overflow-hidden bg-[#D4AF37] text-[#111111] py-4 items-center">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15
          }}
          className="flex whitespace-nowrap"
        >
          <span className="text-xl md:text-2xl font-serif tracking-widest px-4">{text}</span>
          <span className="text-xl md:text-2xl font-serif tracking-widest px-4">{text}</span>
          <span className="text-xl md:text-2xl font-serif tracking-widest px-4">{text}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
