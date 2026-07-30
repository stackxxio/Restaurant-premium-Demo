import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';
import { FiX } from 'react-icons/fi';

import dishCaviar from '../assets/dish_caviar.png';
import dishLobster from '../assets/dish_lobster.png';
import dishWagyu from '../assets/dish_wagyu.png';
import dishSouffle from '../assets/dish_souffle.png';
import dishFoieGras from '../assets/dish_foiegras.png';

import expDining from '../assets/exp_dining.png';
import expChef from '../assets/exp_chef.png';
import expAmbience from '../assets/exp_ambience.png';
import expWine from '../assets/exp_wine.png';

const galleryItems = [
  { title: "Beluga Caviar Imperial", category: "HAUTE APPETIZER", src: dishCaviar, height: "h-[420px]" },
  { title: "Michelin 3-Star Dining Hall", category: "AMBIANCE", src: expDining, height: "h-[540px]" },
  { title: "Poached Brittany Blue Lobster", category: "SEAFOOD SELECTION", src: dishLobster, height: "h-[340px]" },
  { title: "Chef's Culinary Theater", category: "LIVE KITCHEN", src: expChef, height: "h-[480px]" },
  { title: "Seared A5 Miyazaki Wagyu", category: "CHEF'S SPECIALTY", src: dishWagyu, height: "h-[360px]" },
  { title: "Velvet VIP Dining Salon", category: "PRIVATE SUITE", src: expAmbience, height: "h-[520px]" },
  { title: "Grand Marnier French Soufflé", category: "HAUTE DESSERT", src: dishSouffle, height: "h-[380px]" },
  { title: "Sommelier Vintage Cellar", category: "GRAND CRU VAULT", src: expWine, height: "h-[460px]" },
  { title: "Artisanal Duck Foie Gras", category: "FRENCH CLASSIC", src: dishFoieGras, height: "h-[400px]" }
];

const ImmersiveGallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="gallery" className="py-28 md:py-36 bg-[#FAF9F6] text-[#111111] relative overflow-hidden">
      
      {/* Background Subtle Botanical Floral Vectors */}
      <div className="absolute top-10 right-6 w-80 h-80 opacity-10 pointer-events-none text-[#AA771C]">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 20C110 60 140 90 180 100C140 110 110 140 100 180C90 140 60 110 20 100C60 90 90 60 100 20Z" />
        </svg>
      </div>

      <div className="absolute bottom-10 left-6 w-80 h-80 opacity-10 pointer-events-none text-[#AA771C] transform rotate-45">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 20C110 60 140 90 180 100C140 110 110 140 100 180C90 140 60 110 20 100C60 90 90 60 100 20Z" />
        </svg>
      </div>

      {/* Giant Background Shadow Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-[12rem] font-serif font-extralight text-[#AA771C]/5 uppercase tracking-[0.25em] pointer-events-none select-none whitespace-nowrap z-0">
        GALLERY OF ELEGANCE
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-white shadow-sm mb-4">
            <HiSparkles className="text-[#AA771C] text-xs" />
            <span className="text-xs uppercase tracking-[0.35em] text-[#AA771C] font-medium">VISUALS</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#111111] font-light mb-4">
            Immersive Gallery
          </h2>

          <p className="text-neutral-600 text-xs sm:text-sm font-light max-w-xl mx-auto">
            An artistic collage of Michelin-starred creations, candlelit interiors, and vintage wine allocations.
          </p>
        </div>

        {/* Dynamic Artistic Collage Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.8 }}
              className={`break-inside-avoid relative group overflow-hidden rounded-2xl cursor-pointer bg-white border border-[#D4AF37]/20 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 ${item.height}`}
              onClick={() => setSelectedItem(item)}
            >
              {/* Image Container */}
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-95"
              />
              
              {/* Dark Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6" />

              {/* Category Badge on Hover */}
              <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-3 py-1 rounded-full bg-black/70 border border-[#D4AF37]/40 text-[9px] uppercase tracking-widest text-[#F3E5AB]">
                {item.category}
              </div>

              {/* Title and Action Text on Hover */}
              <div className="absolute bottom-6 left-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 text-white">
                <h3 className="text-lg font-serif font-medium mb-1 text-[#F3E5AB]">
                  {item.title}
                </h3>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Click to Enlarge ↗
                </span>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Showcase */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              className="absolute top-6 right-6 text-[#F3E5AB] hover:text-white bg-black/60 border border-[#D4AF37]/50 rounded-full p-3 transition-colors z-[210]"
              onClick={() => setSelectedItem(null)}
            >
              <FiX size={28} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/40 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedItem.src} 
                alt={selectedItem.title} 
                className="max-w-full max-h-[75vh] object-contain mx-auto"
              />
              <div className="p-4 bg-neutral-950 border-t border-[#D4AF37]/30 text-center flex items-center justify-between px-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-xl font-serif text-white font-light">
                    {selectedItem.title}
                  </h3>
                </div>
                <span className="text-xs uppercase tracking-widest text-neutral-400">
                  L'Élégance Gallery
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImmersiveGallery;
