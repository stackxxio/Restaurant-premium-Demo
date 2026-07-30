import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState('default'); // default, hover, view, drag

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    const handleMouseOver = (e) => {
      if (e.target.closest('[data-cursor="view"]')) {
        setCursorState('view');
      } else if (e.target.closest('[data-cursor="drag"]')) {
        setCursorState('drag');
      } else if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.classList.contains('hover-target') ||
        e.target.closest('.hover-target')
      ) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: 'rgba(212, 175, 55, 1)',
      mixBlendMode: 'normal',
      border: '1px solid transparent',
      opacity: 1
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(212, 175, 55, 0.5)',
      mixBlendMode: 'difference',
      opacity: 1
    },
    view: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: 'rgba(212, 175, 55, 0.9)',
      border: 'none',
      mixBlendMode: 'normal',
      opacity: 1
    },
    drag: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      border: 'none',
      mixBlendMode: 'normal',
      opacity: 1
    }
  };

  const textVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1, transition: { delay: 0.1 } },
    exit: { opacity: 0, scale: 0.5 }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] rounded-full pointer-events-none transition-all duration-100 ease-out hidden md:flex items-center justify-center text-[10px] tracking-widest font-semibold"
      variants={variants}
      animate={cursorState}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
    >
      {cursorState === 'view' && (
        <motion.span variants={textVariants} initial="initial" animate="animate" exit="exit" className="text-black uppercase">View</motion.span>
      )}
      {cursorState === 'drag' && (
        <motion.span variants={textVariants} initial="initial" animate="animate" exit="exit" className="text-black uppercase">Drag</motion.span>
      )}
    </motion.div>
  );
};

export default CustomCursor;
