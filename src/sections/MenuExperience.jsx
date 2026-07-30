import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiStar, FiCheckCircle } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import Magnetic from '../components/Magnetic';

import dishCaviar from '../assets/dish_caviar.png';
import dishLobster from '../assets/dish_lobster.png';
import dishWagyu from '../assets/dish_wagyu.png';
import dishSouffle from '../assets/dish_souffle.png';
import dishFoiegras from '../assets/dish_foiegras.png';
import dishWine from '../assets/dish_wine.png';

const menuData = {
  Tasting: [
    {
      id: "tast-1",
      course: "COURSE 01",
      name: "Osetra Caviar Panna Cotta",
      desc: "Cauliflower panna cotta, meyer lemon gel, edible 24k gold leaf flakes",
      price: "$65",
      badge: "Chef's Signature",
      image: dishCaviar,
      pairing: "Dom Pérignon Vintage Champagne 2013",
      tag: "Caspian Sea • Chilled"
    },
    {
      id: "tast-2",
      course: "COURSE 03",
      name: "Poached Maine Lobster",
      desc: "Butter-poached lobster tail, white asparagus spears, velvety bisque reduction",
      price: "$95",
      badge: "Wild Caught",
      image: dishLobster,
      pairing: "Puligny-Montrachet Premier Cru 2020",
      tag: "Gulf of Maine • Butter Poached"
    },
    {
      id: "tast-3",
      course: "COURSE 05",
      name: "A5 Miyazaki Wagyu Striploin",
      desc: "Miyazaki beef, black truffle potato puree, dark bordelaise glaze",
      price: "$145",
      badge: "24K Gold Accent",
      image: dishWagyu,
      pairing: "Château Margaux Premier Grand Cru 2012",
      tag: "Grade A5 BMS 11 • Pan Seared"
    },
    {
      id: "tast-4",
      course: "COURSE 07",
      name: "Grand Marnier Soufflé",
      desc: "Warm orange liqueur soufflé, Madagascar vanilla bean crème anglaise",
      price: "$45",
      badge: "House Favorite",
      image: dishSouffle,
      pairing: "Château d'Yquem Sauternes 2015",
      tag: "Baked to Order • 15 Mins"
    }
  ],
  A_La_Carte: [
    {
      id: "alc-1",
      course: "APPETIZER",
      name: "Foie Gras Torchon",
      desc: "Artisan fig compote, toasted brioche, fleur de sel & micro-herbs",
      price: "$55",
      badge: "French Classic",
      image: dishFoiegras,
      pairing: "Sauternes Grand Cru Classé 2016",
      tag: "Moulard Duck • Artisanal"
    },
    {
      id: "alc-2",
      course: "MAIN COURSE",
      name: "A5 Wagyu Striploin Cut",
      desc: "Black truffle potato puree, charred baby vegetables, rich bordelaise sauce",
      price: "$165",
      badge: "Prime Cut",
      image: dishWagyu,
      pairing: "Cabernet Sauvignon Reserve 2016",
      tag: "Miyazaki Prefecture • Prime"
    },
    {
      id: "alc-3",
      course: "SEAFOOD",
      name: "Maine Lobster Bisque & Tail",
      desc: "Vanilla butter poached claw, chervil oil, cognac foam emulsion",
      price: "$85",
      badge: "Fresh Catch",
      image: dishLobster,
      pairing: "Chablis Grand Cru Les Clos 2019",
      tag: "Atlantic Coast • Velvety"
    }
  ],
  Wine_Pairing: [
    {
      id: "wine-1",
      course: "SOMMELIER SELECTION",
      name: "Grand Cru Reserve Flight",
      desc: "5 glass curated tour of iconic French vineyards & rare vintage champagnes",
      price: "$195",
      badge: "Sommelier Choice",
      image: dishWine,
      pairing: "Curated by Head Sommelier Jean-Luc",
      tag: "Vintages 2010 - 2018"
    },
    {
      id: "wine-2",
      course: "PRIVATE VAULT",
      name: "The Sommelier's Vault Access",
      desc: "Exclusive tasting access to unreleased private cellar allocations",
      price: "$380",
      badge: "Ultra Rare",
      image: dishWine,
      pairing: "Bordeaux, Burgundy & Vintage Champagne",
      tag: "Limited Allocation"
    }
  ]
};

const MenuExperience = () => {
  const [activeTab, setActiveTab] = useState('Tasting');
  const [selectedDishIndex, setSelectedDishIndex] = useState(0);

  const currentList = menuData[activeTab] || [];
  // Ensure selected index stays in bounds when tab switches
  const activeDish = currentList[selectedDishIndex] || currentList[0] || currentList[0];

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setSelectedDishIndex(0);
  };

  return (
    <section id="menu" className="py-28 md:py-36 bg-[#0a0a0a] text-white relative overflow-hidden">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 mb-4"
          >
            <HiSparkles className="text-[#D4AF37] text-xs" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#F3E5AB] font-medium">Culinary Excellence</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-light mb-6 tracking-tight"
          >
            The Menu Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed"
          >
            Hover or click any dish to preview its culinary presentation, tasting notes, and master sommelier wine pairing.
          </motion.p>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-10">
            {Object.keys(menuData).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`relative px-6 py-2.5 rounded-full text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 ${
                  activeTab === tab 
                    ? 'text-black font-semibold shadow-[0_0_20px_rgba(212,175,55,0.4)]' 
                    : 'text-neutral-400 hover:text-white border border-white/10 hover:border-[#D4AF37]/40 bg-black/40'
                }`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeMenuTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] rounded-full z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.replace(/_/g, ' ')}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Split Grid: Left Menu List + Right Dish Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Menu Items List (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {currentList.map((item, idx) => {
                  const isSelected = selectedDishIndex === idx;

                  return (
                    <motion.div
                      key={item.id || idx}
                      onMouseEnter={() => setSelectedDishIndex(idx)}
                      onClick={() => setSelectedDishIndex(idx)}
                      className={`group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                        isSelected 
                          ? 'bg-gradient-to-r from-neutral-900/90 via-black to-neutral-900/90 border-[#D4AF37] shadow-[0_10px_30px_rgba(212,175,55,0.15)] scale-[1.01]' 
                          : 'bg-neutral-900/40 hover:bg-neutral-900/70 border-white/10 hover:border-[#D4AF37]/40'
                      }`}
                    >
                      {/* Selection Accent Glow */}
                      {isSelected && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-[#D4AF37] rounded-r-full shadow-[0_0_12px_#D4AF37]" />
                      )}

                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          
                          {/* Course Label & Badge */}
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                              {item.course}
                            </span>
                            {item.badge && (
                              <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#F3E5AB]">
                                {item.badge}
                              </span>
                            )}
                          </div>

                          {/* Item Title */}
                          <h3 className={`text-xl sm:text-2xl font-serif transition-colors duration-300 ${
                            isSelected ? 'text-[#F3E5AB]' : 'text-white group-hover:text-[#F3E5AB]'
                          }`}>
                            {item.name}
                          </h3>

                          {/* Item Description */}
                          <p className="text-neutral-400 text-xs sm:text-sm font-light mt-1 leading-relaxed">
                            {item.desc}
                          </p>

                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className={`text-xl sm:text-2xl font-serif transition-colors duration-300 ${
                            isSelected ? 'text-[#D4AF37] font-medium' : 'text-neutral-300 group-hover:text-[#D4AF37]'
                          }`}>
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Tasting Menu Info Footer */}
            {activeTab === 'Tasting' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-neutral-900/60 border border-[#D4AF37]/20 mt-6"
              >
                <div className="flex items-center gap-3">
                  <FiAward className="text-[#D4AF37] text-xl" />
                  <span className="text-xs text-neutral-300 font-light">Complete Seven Course Tasting Menu</span>
                </div>
                <span className="text-sm font-serif text-[#F3E5AB] font-semibold tracking-wider">
                  $325 per guest • Wine pairing +$195
                </span>
              </motion.div>
            )}
          </div>

          {/* Right Column: Sticky 3D Glassmorphism Showcase Card (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              {activeDish && (
                <motion.div
                  key={activeDish.id || activeDish.name}
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -15 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-3xl overflow-hidden bg-neutral-900/80 backdrop-blur-2xl border border-[#D4AF37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                >
                  
                  {/* Dish Image Container */}
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                    <img 
                      src={activeDish.image} 
                      alt={activeDish.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                    
                    {/* Top Right Floating Badge */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-[#D4AF37]/40 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-[#F3E5AB] flex items-center gap-1.5">
                      <FiStar className="text-[#D4AF37]" />
                      {activeDish.badge}
                    </div>

                    {/* Course Tag Overlay */}
                    <div className="absolute bottom-4 left-6">
                      <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold bg-black/70 px-3 py-1 rounded-md border border-[#D4AF37]/30">
                        {activeDish.course}
                      </span>
                    </div>
                  </div>

                  {/* Showcase Details Card Body */}
                  <div className="p-6 sm:p-8 pt-2">
                    <div className="flex justify-between items-baseline mb-3">
                      <h3 className="text-2xl sm:text-3xl font-serif text-white font-light">
                        {activeDish.name}
                      </h3>
                      <span className="text-2xl font-serif text-[#D4AF37] font-medium">
                        {activeDish.price}
                      </span>
                    </div>

                    <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
                      {activeDish.desc}
                    </p>

                    {/* Sommelier Wine Pairing Note Box */}
                    <div className="p-4 rounded-xl bg-black/50 border border-[#D4AF37]/30 mb-6">
                      <div className="flex items-center gap-2 mb-1">
                        <FiCheckCircle className="text-[#D4AF37] text-xs" />
                        <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                          Sommelier Wine Pairing
                        </span>
                      </div>
                      <p className="text-xs text-neutral-200 font-serif italic">
                        "{activeDish.pairing}"
                      </p>
                    </div>

                    {/* Meta info & Action Button */}
                    <div className="flex items-center justify-between gap-4 pt-2 border-t border-white/10">
                      <span className="text-[11px] text-neutral-400 font-light">
                        {activeDish.tag}
                      </span>

                      <Magnetic>
                        <a
                          href="#reservation"
                          className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#F3E5AB] text-black text-xs uppercase tracking-widest font-semibold rounded-full transition-colors duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] block"
                        >
                          Reserve Table
                        </a>
                      </Magnetic>
                    </div>

                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>

    </section>
  );
};

export default MenuExperience;

