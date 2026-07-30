import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCalendar, FiCompass, FiClock, FiMapPin, FiChevronDown } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import Magnetic from '../components/Magnetic';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 240;

const getFrameUrl = (index) => {
  const frameNum = String(index + 1).padStart(3, '0');
  return `/herosection/ezgif-frame-${frameNum}.webp`;
};

const Hero = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const contentRef = useRef(null);
  const promptRef = useRef(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const currentFrameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const images = [];
    let loadedCount = 0;

    // Helper: Draw image with cover fitting
    const drawImageCover = (img) => {
      if (!ctx || !canvas || !img) return;
      const w = canvas.width;
      const h = canvas.height;
      const imgW = img.width;
      const imgH = img.height;

      const hRatio = w / imgW;
      const vRatio = h / imgH;
      const ratio = Math.max(hRatio, vRatio);
      const shiftX = (w - imgW * ratio) / 2;
      const shiftY = (h - imgH * ratio) / 2;

      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, imgW, imgH, shiftX, shiftY, imgW * ratio, imgH * ratio);
    };

    // Handle Canvas Resizing
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (images[currentFrameRef.current]) {
        drawImageCover(images[currentFrameRef.current]);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Preload frames into memory
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        loadedCount++;
        const pct = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
        setLoadProgress(pct);

        if (i === 0) {
          drawImageCover(img);
        }

        if (loadedCount === TOTAL_FRAMES || loadedCount >= 25) {
          setIsReady(true);
          ScrollTrigger.refresh();
        }
      };
      images.push(img);
    }

    // Wrap GSAP timeline in gsap.context for React DOM safety
    const ctxAnim = gsap.context(() => {
      const section = sectionRef.current;
      const content = contentRef.current;
      const promptEl = promptRef.current;

      if (!section) return;

      // Master GSAP Timeline pinned for 400% scroll distance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: 0.05,
          anticipatePin: 1,
          onUpdate: (self) => {
            const frameIndex = Math.min(
              TOTAL_FRAMES - 1,
              Math.floor(self.progress * (TOTAL_FRAMES - 1))
            );
            currentFrameRef.current = frameIndex;
            if (images[frameIndex] && images[frameIndex].complete) {
              requestAnimationFrame(() => {
                drawImageCover(images[frameIndex]);
              });
            }
          }
        }
      });

      // 1. Initial content starts fully visible (opacity 1) and fades out during first 25% of scroll
      if (content) {
        tl.to(content, { opacity: 0, y: -40, duration: 0.25, ease: "power1.out" }, 0);
      }

      // 2. Initial scroll prompt fades out in first 15% of scroll
      if (promptEl) {
        tl.to(promptEl, { opacity: 0, y: -15, duration: 0.15, ease: "power1.out" }, 0);
      }

      // 3. Near final frame (0.70 to 0.85 progress), text fades BACK IN and stays 100% solid & locked (0.85 to 1.0)
      if (content) {
        tl.to(content, { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" }, 0.70);
      }
    }, sectionRef);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctxAnim.revert();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] text-white flex items-center justify-center"
    >
      {/* 240-Frame Scroll Canvas (100% Natural, Bright & Crystal Clear) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Ultra-Light Soft Bottom Gradient for Text Legibility (No Yellow Shades!) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-black/20 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Initial Frame Preloader Indicator */}
      {!isReady && (
        <div className="absolute top-6 right-6 z-30 flex items-center gap-3 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-[#D4AF37]/40 shadow-lg">
          <div className="w-3 h-3 rounded-full border-2 border-[#D4AF37] border-t-transparent animate-spin" />
          <span className="text-xs uppercase tracking-widest text-[#F3E5AB]">
            Loading Experience {loadProgress}%
          </span>
        </div>
      )}

      {/* Initial Scroll Prompt Indicator (Fades out when user starts scrolling) */}
      <div 
        ref={promptRef}
        className="absolute bottom-10 z-20 flex flex-col items-center gap-2 text-[#D4AF37] pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-neutral-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Scroll to Enter
        </span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full border border-[#D4AF37]/70 flex items-center justify-center bg-black/60 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
        >
          <FiChevronDown className="text-base text-[#D4AF37]" />
        </motion.div>
      </div>

      {/* Hero Content (Ultra-Minimal Luxury Presentation) */}
      <div 
        ref={contentRef}
        className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pointer-events-auto"
      >
        {/* Minimal Michelin Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#D4AF37]/40 bg-black/65 backdrop-blur-md mb-8 shadow-[0_0_30px_rgba(212,175,55,0.25)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.4em] text-[#F3E5AB] font-light">
            MICHELIN THREE STARS • MAYFAIR
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
        </div>

        {/* High-Fashion Brand Title */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-serif font-extralight leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-[#F3E5AB] to-[#D4AF37] mb-6 drop-shadow-[0_12px_50px_rgba(0,0,0,0.95)]">
          L'ÉLÉGANCE
        </h1>

        {/* Minimal Luxury Quote */}
        <p className="text-neutral-200 text-base sm:text-2xl font-serif italic font-light max-w-2xl mx-auto tracking-wide drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)]">
          “Where Haute Gastronomy Meets Architectural Perfection.”
        </p>

      </div>
    </section>
  );
};

export default Hero;


