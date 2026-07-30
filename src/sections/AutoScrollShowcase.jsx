import React from 'react';
import { HiSparkles } from 'react-icons/hi2';
import { FiStar, FiArrowRight } from 'react-icons/fi';

import dishCaviar from '../assets/dish_caviar.png';
import dishLobster from '../assets/dish_lobster.png';
import dishWagyu from '../assets/dish_wagyu.png';
import dishSouffle from '../assets/dish_souffle.png';
import dishFoieGras from '../assets/dish_foiegras.png';
import dishWine from '../assets/dish_wine.png';

import expDining from '../assets/exp_dining.png';
import expChef from '../assets/exp_chef.png';
import expAmbience from '../assets/exp_ambience.png';
import expWine from '../assets/exp_wine.png';
import hero1 from '../assets/hero_1.png';
import hero3 from '../assets/hero_3.png';

const dishes = [
  {
    id: 1,
    title: "Beluga Caviar Imperial",
    tag: "SIGNATURE APPETIZER",
    price: "$280",
    rating: "5.0",
    img: dishCaviar,
    desc: "Wild Caspian Beluga caviar with gold blinis."
  },
  {
    id: 2,
    title: "Brittany Blue Lobster",
    tag: "MAINE COAST",
    price: "$195",
    rating: "4.9",
    img: dishLobster,
    desc: "Butter poached lobster tail with saffron bisque."
  },
  {
    id: 3,
    title: "A5 Miyazaki Wagyu",
    tag: "CHEF'S SPECIALTY",
    price: "$340",
    rating: "5.0",
    img: dishWagyu,
    desc: "Seared A5 Wagyu tenderloin with truffle jus."
  },
  {
    id: 4,
    title: "Grand Marnier Soufflé",
    tag: "HAUTE DESSERT",
    price: "$65",
    rating: "4.9",
    img: dishSouffle,
    desc: "French soufflé with Madagascar vanilla bean."
  },
  {
    id: 5,
    title: "Pan-Seared Foie Gras",
    tag: "CLASSIC HAUTE",
    price: "$145",
    rating: "4.9",
    img: dishFoieGras,
    desc: "Artisanal Duck Foie Gras with fig chutney."
  },
  {
    id: 6,
    title: "Château Margaux 2015",
    tag: "SOMMELIER ALLOCATION",
    price: "$380/glass",
    rating: "5.0",
    img: dishWine,
    desc: "Grand Cru Classé allocation paired by sommeliers."
  }
];

const ambiances = [
  {
    id: 101,
    title: "Michelin 3-Star Dining Room",
    category: "MAIN HALL",
    img: expDining,
    detail: "Candlelight seating under crystal chandeliers."
  },
  {
    id: 102,
    title: "Chef's Culinary Theater",
    category: "LIVE KITCHEN",
    img: expChef,
    detail: "Front-row seats to Master Chef Laurent's artistry."
  },
  {
    id: 103,
    title: "Private Sommelier Cellar",
    category: "RESERVE VAULT",
    img: expWine,
    detail: "Underground vault with 3,000 Grand Cru allocations."
  },
  {
    id: 104,
    title: "Private Dining Salon",
    category: "VIP SUITE",
    img: expAmbience,
    detail: "Exclusive dining suites for up to 12 guests."
  },
  {
    id: 105,
    title: "The Grand Archway Entrance",
    category: "ARCHITECTURE",
    img: hero1,
    detail: "Ornate 19th-century Parisian gold archway facade."
  },
  {
    id: 106,
    title: "Sommelier Vintage Vaults",
    category: "RARE BOTTLES",
    img: hero3,
    detail: "Temperature-controlled private cellars for collectors."
  }
];

const AutoScrollShowcase = () => {
  const doubledDishes = [...dishes, ...dishes];
  const doubledAmbiances = [...ambiances, ...ambiances];

  return (
    <section className="relative py-20 bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* Background Glow Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-black/60 backdrop-blur-md mb-4 shadow-[0_0_25px_rgba(212,175,55,0.2)]">
          <HiSparkles className="text-[#D4AF37] text-sm animate-pulse" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#F3E5AB] font-medium">
            INFINITE HAUTE SHOWCASE
          </span>
          <HiSparkles className="text-[#D4AF37] text-sm animate-pulse" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-[#F3E5AB] to-[#D4AF37] mb-3">
          An Orchestration of Flavor & Elegance
        </h2>

        <p className="text-neutral-400 text-xs sm:text-sm font-light max-w-xl mx-auto">
          Hover over any dish or ambiance moment to pause and explore our 7-star Michelin creations.
        </p>
      </div>

      {/* Row 1: Auto-Scroll Left (Gourmet Dishes) */}
      <div className="relative w-full mb-4 overflow-hidden py-4">
        {/* Left/Right Gradient Mask Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 w-max animate-marquee-left py-2 px-4">
          {doubledDishes.map((item, idx) => (
            <div 
              key={`dish-${idx}`}
              className="group relative w-72 sm:w-80 rounded-xl bg-neutral-950/80 border border-[#D4AF37]/30 hover:border-[#D4AF37] p-3.5 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_35px_rgba(212,175,55,0.4)] transform hover:-translate-y-2 transform-gpu"
            >
              {/* Image Container */}
              <div className="relative h-36 sm:h-40 rounded-lg overflow-hidden mb-3">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/70 border border-[#D4AF37]/40 text-[9px] uppercase tracking-widest text-[#F3E5AB]">
                  {item.tag}
                </div>
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/70 border border-[#D4AF37]/40 text-[10px] font-semibold text-[#D4AF37] flex items-center gap-1">
                  <FiStar className="fill-[#D4AF37]" /> {item.rating}
                </div>
              </div>

              {/* Details */}
              <div className="flex items-start justify-between mb-1.5">
                <h3 className="text-base sm:text-lg font-serif text-white font-medium group-hover:text-[#F3E5AB] transition-colors">
                  {item.title}
                </h3>
                <span className="text-sm sm:text-base font-serif text-[#D4AF37] font-semibold">
                  {item.price}
                </span>
              </div>

              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-3 line-clamp-2">
                {item.desc}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-[#D4AF37] font-medium tracking-wider uppercase">
                <span>Explore Pairing</span>
                <FiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Auto-Scroll Right (Luxury Ambiance & Cellar) */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left/Right Gradient Mask Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 w-max animate-marquee-right py-2 px-4">
          {doubledAmbiances.map((item, idx) => (
            <div 
              key={`ambiance-${idx}`}
              className="group relative w-72 sm:w-80 rounded-xl bg-neutral-950/80 border border-[#D4AF37]/30 hover:border-[#D4AF37] p-3.5 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_35px_rgba(212,175,55,0.4)] transform hover:-translate-y-2 transform-gpu"
            >
              {/* Image Container */}
              <div className="relative h-36 sm:h-40 rounded-lg overflow-hidden mb-3">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/70 border border-[#D4AF37]/40 text-[9px] uppercase tracking-widest text-[#F3E5AB]">
                  {item.category}
                </div>
              </div>

              {/* Details */}
              <h3 className="text-base sm:text-lg font-serif text-white font-medium mb-1.5 group-hover:text-[#F3E5AB] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-3 line-clamp-2">
                {item.detail}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-[#D4AF37] font-medium tracking-wider uppercase">
                <span>View Dining Space</span>
                <FiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AutoScrollShowcase;
