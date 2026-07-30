import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiStar, FiX, FiCheckCircle, FiCalendar } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import TiltCard from '../components/TiltCard';

import expDining from '../assets/exp_dining.png';
import expChef from '../assets/exp_chef.png';
import expAmbience from '../assets/exp_ambience.png';
import expWine from '../assets/exp_wine.png';

const experiences = [
  {
    id: "dining",
    num: "01",
    tag: "MICHELIN 3-STAR CULINARY",
    title: "Fine Dining",
    subtitle: "7-Course Haute Tasting Experience",
    desc: "An immersive multi-sensory journey of taste, luxury textures, and candlelit ambiance.",
    img: expDining,
    highlights: [
      "Amuse-Bouche: Caspian Beluga Caviar with Gold Blinis",
      "Premier Course: Poached Brittany Blue Lobster in Saffron Bisque",
      "Main Highlight: Seared A5 Miyazaki Wagyu Tenderloin",
      "Final Notes: Grand Marnier French Soufflé & Vintage Pairing"
    ],
    details: "Our flagship fine dining experience pairs 3-Star Michelin culinary artistry with intimate acoustical candlelight seating."
  },
  {
    id: "chef",
    num: "02",
    tag: "MASTER CHEF SIGNATURES",
    title: "Chef's Specials",
    subtitle: "Molecular Gastronomy & Live Theater",
    desc: "Exclusive molecular gastronomy & seasonal tasting menus crafted by world-renowned culinary masters.",
    img: expChef,
    highlights: [
      "24K Edible Gold Leaf Wagyu Tartare",
      "Liquid Nitrogen Citrus Sphere & White Truffle Emulsion",
      "Artisanal Duck Foie Gras with Fig & Port Reduction",
      "Chef Laurent's Table-Side Flambé Theater"
    ],
    details: "Experience front-row culinary theater directly at Master Chef Laurent's open kitchen counter."
  },
  {
    id: "ambience",
    num: "03",
    tag: "7-STAR ARCHITECTURAL SPLENDOR",
    title: "Luxury Ambience",
    subtitle: "Ornate Crystal & Private Salons",
    desc: "A breathtaking environment with crystal chandeliers, private booths, and intimate acoustical design.",
    img: expAmbience,
    highlights: [
      "Custom Swarovski Crystal Chandeliers",
      "Private Sound-Isolated Velvet VIP Salons",
      "Handcrafted 19th-Century Parisian Woodwork",
      "Personalized Sommelier & Butler Service"
    ],
    details: "Designed by Parisian interior architects, our dining rooms combine historical majesty with modern luxury."
  },
  {
    id: "wine",
    num: "04",
    tag: "RARE GRAND CRU VINTAGES",
    title: "Wine Collection",
    subtitle: "3,000+ Reserve Sommelier Allocations",
    desc: "Over 3,000 curated sommelier bottles, private underground vault tastings, and vintage pairings.",
    img: expWine,
    highlights: [
      "Château Margaux 2015 Premier Grand Cru Classé",
      "Dom Pérignon P2 Vintage Allocation",
      "Romanée-Conti Grand Cru Reserve Collection",
      "Underground Cellar Private Guided Tastings"
    ],
    details: "Curated by Master Sommelier Jean-Luc, our underground cellar houses some of the rarest bottles in Mayfair."
  }
];

const SignatureExperience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="experience" className="py-28 md:py-36 bg-[#0a0a0a] text-white relative overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 mb-4"
          >
            <HiSparkles className="text-[#D4AF37] text-xs" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#F3E5AB] font-medium">Our Essence</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-light mb-6 tracking-tight text-white"
          >
            Signature Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto"
          >
            Click on any experience card below to expand its exclusive signature details and tasting menus.
          </motion.p>
        </div>

        {/* 4 Experience 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {experiences.map((exp, index) => {
            const isDimmed = selectedExp && selectedExp.id !== exp.id;
            const isSelected = selectedExp && selectedExp.id === exp.id;

            return (
              <div 
                key={exp.id}
                onClick={() => setSelectedExp(exp)}
                className={`transition-all duration-500 transform ${
                  isDimmed ? 'opacity-30 blur-sm scale-95 pointer-events-none' : 'opacity-100 scale-100'
                }`}
              >
                <TiltCard>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12, duration: 0.8 }}
                    className={`group relative overflow-hidden rounded-3xl h-[460px] cursor-pointer bg-neutral-900 border transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.8)] ${
                      isSelected 
                        ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50' 
                        : 'border-white/10 group-hover:border-[#D4AF37]/70'
                    }`}
                  >
                    
                    {/* Background Image with Ken Burns Hover Zoom */}
                    <img 
                      src={exp.img} 
                      alt={exp.title} 
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-[0.8] group-hover:brightness-95 pointer-events-none"
                    />

                    {/* Dark Vignette Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 group-hover:from-black/95 transition-all duration-500 pointer-events-none z-10" />

                    {/* Top Header Controls: Number & Tag */}
                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-none">
                      <span className="text-2xl font-serif text-[#D4AF37] font-semibold tracking-widest drop-shadow-md">
                        {exp.num}
                      </span>
                      <div className="bg-black/60 backdrop-blur-md border border-white/15 group-hover:border-[#D4AF37]/40 px-3 py-1 rounded-full text-[9px] uppercase tracking-widest text-[#F3E5AB] flex items-center gap-1.5 transition-colors duration-300">
                        <FiStar className="text-[#D4AF37] text-[10px]" />
                        {exp.tag.split(" ")[0]}
                      </div>
                    </div>

                    {/* Bottom Content Area */}
                    <div className="absolute bottom-0 left-0 right-0 p-7 z-20 pointer-events-none flex flex-col justify-end transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                      
                      {/* Category Tagline */}
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium mb-1 opacity-90">
                        {exp.tag}
                      </span>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-serif text-white font-light mb-3 group-hover:text-[#F3E5AB] transition-colors duration-300">
                        {exp.title}
                      </h3>

                      {/* Description (Fades In on Hover) */}
                      <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-5 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                        {exp.desc}
                      </p>

                      {/* Interactive Link Arrow */}
                      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold group-hover:text-[#F3E5AB] transition-colors duration-300">
                        <span>Click to Expand</span>
                        <FiArrowUpRight className="text-base transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </div>

                    </div>

                    {/* Golden Border Glow on Hover */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37] rounded-3xl transition-colors duration-500 z-30 pointer-events-none shadow-[0_0_35px_rgba(212,175,55,0)] group-hover:shadow-[0_0_35px_rgba(212,175,55,0.25)]" />

                  </motion.div>
                </TiltCard>
              </div>
            );
          })}
        </div>

      </div>

      {/* Expanded Interactive Detail Modal */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            />

            {/* Modal Card Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 bg-neutral-950 border border-[#D4AF37]/50 rounded-3xl overflow-hidden max-w-3xl w-full shadow-[0_0_80px_rgba(212,175,55,0.3)] flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedExp(null)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 border border-[#D4AF37]/40 text-[#F3E5AB] hover:text-white hover:border-[#D4AF37] flex items-center justify-center transition-colors shadow-lg"
              >
                <FiX className="text-xl" />
              </button>

              {/* Left Image Showcase */}
              <div className="relative w-full md:w-5/12 h-56 md:h-auto overflow-hidden shrink-0">
                <img 
                  src={selectedExp.img} 
                  alt={selectedExp.title} 
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 border border-[#D4AF37]/50 text-[9px] uppercase tracking-widest text-[#F3E5AB]">
                  {selectedExp.tag}
                </div>
              </div>

              {/* Right Content & Highlights */}
              <div className="p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-semibold tracking-widest uppercase mb-1">
                    <span>{selectedExp.num}</span>
                    <span>•</span>
                    <span>{selectedExp.subtitle}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-serif text-white font-light mb-3">
                    {selectedExp.title}
                  </h3>

                  <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {selectedExp.details}
                  </p>

                  {/* Highlights List */}
                  <h4 className="text-xs uppercase tracking-widest text-[#F3E5AB] font-semibold mb-3">
                    Exclusive Highlights & Offerings:
                  </h4>
                  <ul className="space-y-2.5 mb-8">
                    {selectedExp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200 font-light">
                        <FiCheckCircle className="text-[#D4AF37] text-base shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a 
                    href="#reservation"
                    onClick={() => setSelectedExp(null)}
                    className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#AA771C] rounded-full text-black font-medium tracking-widest text-xs uppercase shadow-md hover:shadow-lg transition-shadow flex items-center gap-2"
                  >
                    <FiCalendar className="text-sm" />
                    Reserve Experience
                  </a>

                  <button 
                    onClick={() => setSelectedExp(null)}
                    className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
                  >
                    Close Window
                  </button>
                </div>

              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default SignatureExperience;
