import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';
import { FiCalendar, FiClock, FiUser, FiPhone, FiCheckCircle } from 'react-icons/fi';
import TiltCard from '../components/TiltCard';

const ReservationExperience = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1800);
  };

  return (
    <section id="reservation" className="py-14 md:py-18 bg-[#0a0a0a] text-white relative overflow-hidden">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
        <TiltCard>
          <div className="bg-neutral-950/90 backdrop-blur-xl p-6 sm:p-10 md:p-12 rounded-3xl border border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
            
            {/* Header Badge & Title */}
            <div className="text-center mb-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 shadow-sm mb-3">
                <HiSparkles className="text-[#D4AF37] text-[11px] animate-pulse" />
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#F3E5AB] font-medium">TABLE RESERVATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-white font-light">
                Request a Table
              </h2>

              <p className="text-neutral-400 text-xs font-light mt-1.5 max-w-md mx-auto">
                Select your preferred date, time, and guest count. Our concierge will confirm availability.
              </p>
            </div>

            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 relative z-10"
              >
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center mx-auto mb-4 shadow-md">
                  <FiCheckCircle className="text-2xl" />
                </div>

                <h3 className="text-2xl font-serif text-white font-light mb-2">
                  Reservation Request Received
                </h3>

                <p className="text-neutral-300 text-xs sm:text-sm font-light max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you. Our Mayfair concierge team will review your request and contact you via phone or email within 2 hours.
                </p>

                <button 
                  onClick={() => setFormState('idle')}
                  className="px-6 py-2.5 rounded-full bg-neutral-900 border border-[#D4AF37]/50 text-xs uppercase tracking-widest text-[#F3E5AB] font-semibold hover:bg-[#D4AF37] hover:text-black transition-colors"
                >
                  Make Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  
                  {/* Full Name Input */}
                  <div className="relative">
                    <div className="flex items-center gap-1.5 mb-1.5 text-[11px] uppercase tracking-widest text-[#D4AF37] font-medium">
                      <FiUser className="text-xs" />
                      <span>Full Name</span>
                    </div>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Lord Edward Sterling"
                      className="w-full bg-neutral-900/80 border border-white/10 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone Number Input */}
                  <div className="relative">
                    <div className="flex items-center gap-1.5 mb-1.5 text-[11px] uppercase tracking-widest text-[#D4AF37] font-medium">
                      <FiPhone className="text-xs" />
                      <span>Phone Number</span>
                    </div>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+44 7911 123456"
                      className="w-full bg-neutral-900/80 border border-white/10 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Guest Count Selection */}
                  <div className="relative">
                    <div className="flex items-center gap-1.5 mb-1.5 text-[11px] uppercase tracking-widest text-[#D4AF37] font-medium">
                      <FiUser className="text-xs" />
                      <span>Number of Guests</span>
                    </div>
                    <select 
                      required 
                      defaultValue="" 
                      className="w-full bg-neutral-900/80 border border-white/10 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="" disabled className="bg-neutral-900 text-neutral-400">Select Party Size</option>
                      <option value="1" className="bg-neutral-900 text-white">1 Guest (Solo Dining)</option>
                      <option value="2" className="bg-neutral-900 text-white">2 Guests (Intimate Table)</option>
                      <option value="3" className="bg-neutral-900 text-white">3 Guests</option>
                      <option value="4" className="bg-neutral-900 text-white">4 Guests</option>
                      <option value="5+" className="bg-neutral-900 text-white">5+ Guests (Private Suite Inquiry)</option>
                    </select>
                  </div>

                  {/* Date & Time Selectors */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <div className="flex items-center gap-1 mb-1.5 text-[11px] uppercase tracking-widest text-[#D4AF37] font-medium">
                        <FiCalendar className="text-xs" />
                        <span>Date</span>
                      </div>
                      <input 
                        type="date" 
                        required 
                        className="w-full bg-neutral-900/80 border border-white/10 focus:border-[#D4AF37] rounded-xl px-3 py-3 text-xs text-white focus:outline-none transition-colors cursor-pointer" 
                      />
                    </div>

                    <div className="relative">
                      <div className="flex items-center gap-1 mb-1.5 text-[11px] uppercase tracking-widest text-[#D4AF37] font-medium">
                        <FiClock className="text-xs" />
                        <span>Time</span>
                      </div>
                      <input 
                        type="time" 
                        required 
                        className="w-full bg-neutral-900/80 border border-white/10 focus:border-[#D4AF37] rounded-xl px-3 py-3 text-xs text-white focus:outline-none transition-colors cursor-pointer" 
                      />
                    </div>
                  </div>

                </div>

                {/* Submit Action Button */}
                <div className="text-center">
                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="px-9 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#AA771C] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right transition-all duration-500 rounded-full text-black font-medium tracking-widest text-[11px] uppercase shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transform hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {formState === 'submitting' ? 'Transmitting Request...' : 'Confirm Reservation Request'}
                  </button>
                </div>
              </form>
            )}

          </div>
        </TiltCard>
      </div>
    </section>
  );
};

export default ReservationExperience;
