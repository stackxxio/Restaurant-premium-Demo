import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';

import dishCaviar from '../assets/dish_caviar.png';
import dishLobster from '../assets/dish_lobster.png';
import dishWagyu from '../assets/dish_wagyu.png';
import dishSouffle from '../assets/dish_souffle.png';
import dishFoiegras from '../assets/dish_foiegras.png';
import dishWine from '../assets/dish_wine.png';

const dishes = [
  { id: 1, category: 'Starters', name: 'Osetra Caviar Panna Cotta', desc: 'Beluga caviar, meyer lemon gel, 24k gold flakes', price: '$120', img: dishCaviar, badge: "Chef's Selection" },
  { id: 2, category: 'Main Course', name: 'A5 Miyazaki Wagyu Beef', desc: 'Kobe beef, charcoal smoke, black truffle puree', price: '$250', img: dishWagyu, badge: 'Prime Cut' },
  { id: 3, category: 'Seafood', name: 'Poached Maine Lobster Tail', desc: 'Saffron butter, white asparagus, bisque foam', price: '$180', img: dishLobster, badge: 'Wild Caught' },
  { id: 4, category: 'Desserts', name: 'Grand Marnier Gold Soufflé', desc: 'Madagascar vanilla bean, 24k gold, raspberry coulis', price: '$85', img: dishSouffle, badge: 'Baked to Order' },
  { id: 5, category: 'Signature Specials', name: 'Foie Gras Torchon', desc: 'Artisan fig compote, toasted brioche, fleur de sel', price: '$95', img: dishFoiegras, badge: 'French Classic' },
  { id: 6, category: 'Signature Specials', name: 'Grand Cru Reserve Pairing', desc: 'Sommelier flight of vintage prestige vintages', price: '$350', img: dishWine, badge: 'Vault Reserve' }
];

const categories = ['All', 'Starters', 'Main Course', 'Seafood', 'Desserts', 'Signature Specials'];

const SignatureDishes = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredDish, setHoveredDish] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const filteredDishes = activeCategory === 'All' 
    ? dishes 
    : dishes.filter(dish => dish.category === activeCategory);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="menu" className="py-28 md:py-36 bg-[#FAF9F6] text-[#111111] relative overflow-hidden cursor-default" ref={containerRef}>
      
      {/* Background Subtle Botanical Floral Vector */}
      <div className="absolute top-10 right-6 w-80 h-80 opacity-10 pointer-events-none text-[#AA771C]">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 20C110 60 140 90 180 100C140 110 110 140 100 180C90 140 60 110 20 100C60 90 90 60 100 20Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-white shadow-sm mb-4">
            <HiSparkles className="text-[#AA771C] text-xs animate-pulse" />
            <span className="text-xs uppercase tracking-[0.35em] text-[#AA771C] font-medium">GASTRONOMY</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#111111] font-light mb-8">
            Signature Menu
          </h2>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-black font-semibold shadow-md' 
                    : 'bg-white border border-[#D4AF37]/30 text-neutral-600 hover:text-black hover:border-[#D4AF37]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Dishes List */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col space-y-2"
            >
              {filteredDishes.map((dish) => (
                <div 
                  key={dish.id}
                  className="group relative flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-white border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 shadow-sm hover:shadow-lg transition-all duration-300"
                  onMouseEnter={() => setHoveredDish(dish.img)}
                  onMouseLeave={() => setHoveredDish(null)}
                >
                  <div className="md:w-5/12 flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#AA771C]/10 text-[#AA771C] font-semibold border border-[#D4AF37]/30">
                      {dish.badge}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif text-[#111111] group-hover:text-[#AA771C] transition-colors duration-300 font-light">
                      {dish.name}
                    </h3>
                  </div>

                  <div className="md:w-5/12 mt-2 md:mt-0">
                    <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                      {dish.desc}
                    </p>
                  </div>

                  <div className="md:w-2/12 text-left md:text-right mt-3 md:mt-0">
                    <span className="text-[#AA771C] font-serif text-2xl font-medium">
                      {dish.price}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mouse Follow HD Floating Image Preview */}
      <AnimatePresence>
        {hoveredDish && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 3 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: 'fixed',
              left: mousePos.x + 24,
              top: mousePos.y - 120,
              pointerEvents: 'none',
              zIndex: 50
            }}
            className="hidden md:block w-72 h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37] bg-black"
          >
            <img 
              src={hoveredDish} 
              alt="Dish Preview" 
              className="w-full h-full object-cover filter brightness-95"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default SignatureDishes;
