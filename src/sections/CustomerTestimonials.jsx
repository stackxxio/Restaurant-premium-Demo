import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Eleanor Vance",
    role: "Food Critic",
    text: "L'Elegance is not merely a restaurant; it is a theatre of culinary perfection. The attention to detail in every dish is astounding, creating an experience that lingers in the memory long after the final course.",
    rating: 5
  },
  {
    name: "Arthur Pendelton",
    role: "Sommelier Magazine",
    text: "The wine pairing is arguably the finest I have experienced in Europe. The sommelier's depth of knowledge and the rare vintages presented elevate the tasting menu to an ethereal level.",
    rating: 5
  },
  {
    name: "Sophia Laurent",
    role: "Lifestyle Editor",
    text: "From the moment you walk through the doors, you are transported into a world of refined luxury. The service is impeccable, anticipating needs before they are even spoken.",
    rating: 5
  }
];

const CustomerTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden bg-[#111111]">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Background" 
          className="w-full h-full object-cover filter brightness-[0.2] sepia-[0.3]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-4 block">Accolades</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Words of Praise</h2>
        </div>

        <div className="max-w-4xl mx-auto relative h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center glass-dark p-8 md:p-12"
            >
              <div className="flex gap-2 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-[#D4AF37]">★</span>
                ))}
              </div>
              <p className="text-xl md:text-2xl font-serif text-white/90 italic mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <h4 className="text-lg font-serif text-[#D4AF37] uppercase tracking-widest">{testimonials[currentIndex].name}</h4>
                <span className="text-sm text-white/50">{testimonials[currentIndex].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-[#D4AF37]' : 'w-4 bg-white/20'
              } hover-target`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
