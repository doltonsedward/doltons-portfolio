'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function SecretTriggerSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered && !isClicked) return;
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const originX = rect.left + rect.width / 2;
      const originY = rect.top + rect.height / 2;

      const distanceX = e.clientX - originX;
      const distanceY = e.clientY - originY;

      // Calculate limited movement
      const maxDist = 8;
      const angle = Math.atan2(distanceY, distanceX);
      const dist = Math.min(Math.hypot(distanceX, distanceY) / 10, maxDist);

      setMousePos({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered, isClicked]);

  const handleClick = () => {
    if (isClicked) return;
    setIsClicked(true);

    // Play a short glitch effect then fill the screen
    setTimeout(() => {
      router.push('/writer');
    }, 1800);
  };

  return (
    <>
      {/* Global Dimming Overlay on Hover/Click */}
      <AnimatePresence>
        {(isHovered || isClicked) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.1 } }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Fullscreen Slashing Transition on Click */}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{
              clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
              opacity: 1,
            }}
            animate={{
              clipPath: 'polygon(0% -100%, 200% 0%, 100% 200%, -100% 100%)',
              opacity: 1,
            }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
            className="fixed inset-0 z-[60] p5-bg-red p5-halftone flex justify-center items-center pointer-events-none"
          >
            <motion.h1
              initial={{ scale: 0.5, opacity: 0, skewX: -15, rotate: -5 }}
              animate={{ scale: 1.2, opacity: 1, skewX: -15, rotate: -5 }}
              transition={{ delay: 0.5, type: 'spring', bounce: 0.6 }}
              className="font-p5-ransom text-white text-7xl md:text-9xl drop-shadow-[4px_4px_0_#000]"
            >
              SHOWTIME!
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Trigger Section */}
      <section
        id="secret-trigger"
        className="w-full relative py-16 flex justify-center items-center z-50 cursor-pointer overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div
          ref={containerRef}
          className="relative w-64 h-24 flex justify-center items-center"
        >
          {/* The Ripped Background */}
          <motion.div
            animate={{
              height: isHovered ? '80px' : '20px',
              width: isHovered ? '160px' : '40px',
              rotate: isHovered ? -3 : 0,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute p5-bg-red p5-jagged flex justify-center items-center overflow-hidden shadow-[0_0_20px_rgba(224,0,0,0.5)] border-2 border-black"
          >
            <div className="absolute inset-0 p5-halftone opacity-30 mix-blend-multiply" />

            {/* The Slit / Eye Container */}
            <motion.div
              className="relative bg-white rounded-[100%] flex justify-center items-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] overflow-hidden"
              animate={{
                height: isHovered ? '24px' : '6px',
                width: isHovered ? '48px' : '16px',
                rotate: isHovered ? 4 : 0,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              {/* The Pupil */}
              <motion.div
                className="w-4 h-4 bg-[#E00000] rounded-full border border-black relative"
                animate={{
                  x: mousePos.x,
                  y: mousePos.y,
                  scale: isHovered ? 1 : 0.5,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              >
                <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-black rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Glitch Ransom Text that appears on hover */}
          <AnimatePresence>
            {isHovered && !isClicked && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ type: 'spring', bounce: 0.6 }}
                className="absolute top-24 w-max font-p5-ransom text-lg md:text-3xl text-white uppercase tracking-widest z-50 flex gap-2"
              >
                <span className="p5-bg-black px-3 py-1 transform rotate-2 p5-jagged border border-white">
                  Wake
                </span>
                <span className="p5-bg-black px-3 py-1 transform -rotate-3 p5-jagged border border-white">
                  Up,
                </span>
                <span className="p5-bg-black px-3 py-1 transform rotate-1 p5-text-red p5-jagged border border-red-500">
                  Get
                </span>
                <span className="p5-bg-black px-3 py-1 transform -rotate-2 p5-text-red p5-jagged border border-red-500">
                  Up,
                </span>
                <span className="p5-bg-black px-3 py-1 transform rotate-3 p5-jagged border border-white">
                  Get
                </span>
                <span className="p5-bg-black px-3 py-1 transform -rotate-1 p5-jagged border border-white">
                  Out
                </span>
                <span className="p5-bg-black px-3 py-1 transform rotate-2 p5-jagged border border-white">
                  There
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
