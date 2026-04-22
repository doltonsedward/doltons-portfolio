'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReturnCurtainTransition() {
  const [showCurtain, setShowCurtain] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fromWriter = sessionStorage.getItem('returnFromWriter');
      if (fromWriter) {
        setShowCurtain(true);
        setShowText(true);
        sessionStorage.removeItem('returnFromWriter');

        // Hide Text rapidly
        setTimeout(() => {
          setShowText(false);
        }, 800);

        // Open Curtains
        setTimeout(() => {
          setShowCurtain(false);
        }, 1200);
      }
    }
  }, []);

  return (
    <AnimatePresence>
      {showCurtain && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col">
          {/* Top Curtain */}
          <motion.div
            initial={{ y: 0, borderBottomColor: '#111111' }}
            exit={{ y: '-100%', skewY: -2, borderBottomColor: '#E00000' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="absolute top-0 left-0 w-full h-[55vh] bg-[#111] z-10 border-b-[12px] shadow-2xl"
          />
          {/* Bottom Curtain */}
          <motion.div
            initial={{ y: 0, borderTopColor: '#111111' }}
            exit={{ y: '100%', skewY: -2, borderTopColor: '#E00000' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="absolute bottom-0 left-0 w-full h-[55vh] bg-[#111] z-10 border-t-[12px] shadow-2xl"
          />

          <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
              >
                <h1 className="font-p5-ransom text-6xl md:text-8xl text-center uppercase tracking-widest leading-none flex flex-col gap-4">
                  <span className="text-white block rotate-2">BACK TO</span>
                  <span className="text-[#E00000] block -rotate-2">
                    REALITY
                  </span>
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
}
