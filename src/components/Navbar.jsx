import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { cn } from '../utils';
import Magnetic from './Magnetic';

const navLinks = [
  { title: 'Story', href: '#story' },
  { title: 'Experience', href: '#experience' },
  { title: 'Menu', href: '#menu' },
  { title: 'Gallery', href: '#gallery' },
  { title: 'Reservation', href: '#reservation' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 2.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-500',
          isScrolled ? 'py-4 glass-dark' : 'py-8 bg-transparent'
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="text-2xl font-serif tracking-widest text-white uppercase hover-target">
            L'Elegance
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Magnetic key={index}>
                <a
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-white/80 hover:text-[#D4AF37] transition-colors duration-300 hover-target block"
                >
                  {link.title}
                </a>
              </Magnetic>
            ))}
            <Magnetic>
              <a
                href="#reservation"
                className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] text-sm uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all duration-300 hover-target rounded-full block"
              >
                Book Table
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white z-[101]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt4 size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99] bg-[#111111] flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-serif text-white hover:text-[#D4AF37] transition-colors duration-300"
              >
                {link.title}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
