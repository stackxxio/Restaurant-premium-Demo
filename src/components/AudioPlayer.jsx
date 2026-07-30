import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio object
    audioRef.current = new Audio("https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=ambient-piano-amp-strings-10711.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      audioRef.current.pause();
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button 
      onClick={togglePlay}
      className="fixed bottom-10 right-10 z-[100] w-12 h-12 rounded-full glass-dark flex items-center justify-center hover-target group border border-white/20"
      aria-label="Toggle Audio"
    >
      <div className="flex items-end justify-center gap-[2px] h-4">
        {[1, 2, 3, 4].map((bar) => (
          <motion.div
            key={bar}
            animate={{ 
              height: isPlaying ? ["20%", "100%", "40%", "80%", "20%"] : "20%" 
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bar * 0.1
            }}
            className="w-[2px] bg-[#D4AF37] rounded-full"
            style={{ height: '20%' }}
          />
        ))}
      </div>
      
      {/* Tooltip */}
      <span className="absolute right-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs tracking-widest uppercase text-white font-serif whitespace-nowrap pointer-events-none">
        {isPlaying ? 'Sound Off' : 'Sound On'}
      </span>
    </button>
  );
};

export default AudioPlayer;
