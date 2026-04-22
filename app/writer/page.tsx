'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'substack',
    title: 'SUBSTACK',
    subtitle: 'The Monetization Lab',
    desc: 'Deep dives, heavy storytelling, and the absolute core of my knowledge about making money and tech.',
    color: 'bg-white',
    textColor: 'text-black',
    rotation: '-rotate-2',
  },
  {
    id: 'linkedin',
    title: 'LINKEDIN',
    subtitle: 'Professional Insights',
    desc: 'Sharing skills, career strategies, and practical ways to monetize your daily grind.',
    color: 'bg-blue-600',
    textColor: 'text-white',
    rotation: 'rotate-1',
  },
  {
    id: 'tiktok',
    title: 'TIKTOK',
    subtitle: 'Money Bites',
    desc: 'Fast, snappy, right-to-the-point bytes about cash, business, and tech.',
    color: 'bg-black',
    textColor: 'text-white',
    rotation: '-rotate-1',
  },
  {
    id: 'instagram',
    title: 'INSTAGRAM',
    subtitle: 'Mindset & Wawasan',
    desc: 'Stories, daily reflections, and mindset shifts to broaden your horizons.',
    color: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500',
    textColor: 'text-white',
    rotation: 'rotate-2',
  },
];

export default function WriterModePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const handleEscape = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen p-4 md:p-12 p5-bg-red p5-halftone overflow-hidden relative selection:bg-black selection:text-white">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-full md:w-3/4 h-full p5-bg-black p5-jagged opacity-90 transform translate-x-32" />
      <div className="absolute top-1/4 left-10 w-96 h-96 p5-bg-black p5-halftone-light opacity-20 p5-jagged transform rotate-[25deg]" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white p5-jagged p5-halftone-light opacity-10 transform -translate-x-10 translate-y-10" />

      {/* Escape Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleEscape}
        className="absolute top-6 right-6 md:top-12 md:right-12 z-50 p5-bg-black text-white px-4 md:px-8 py-2 md:py-4 p5-jagged font-bebas text-xl md:text-3xl flex items-center gap-2 hover:bg-white hover:text-black transition-colors border-4 border-transparent hover:border-black shadow-[4px_4px_0_rgba(0,0,0,0.5)]"
      >
        <ArrowLeft size={28} className="hidden md:block" /> RETURN
      </motion.button>

      {/* Main Container */}
      <main className="relative z-10 w-full h-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-12 mt-16 md:mt-0">
        {/* Left Side: Dynamic Info Panel */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start md:pl-16">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="mb-12"
          >
            <h1 className="font-p5-ransom text-7xl md:text-9xl text-white drop-shadow-[5px_5px_0_#111] uppercase leading-[0.8] tracking-tighter">
              <span className="block transform rotate-2">WRITER</span>
              <span className="block transform -rotate-2 p5-bg-black w-max px-4 pb-2 p5-text-red mt-2">
                PERSONA
              </span>
            </h1>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ x: -50, opacity: 0, scale: 0.9, skewX: 10 }}
              animate={{ x: 0, opacity: 1, scale: 1, skewX: -5 }}
              exit={{ x: 50, opacity: 0, scale: 0.9, skewX: -10 }}
              transition={{ type: 'spring', bounce: 0.5 }}
              className={`p-6 md:p-10 p5-jagged-heavy shadow-[10px_10px_0_#111] max-w-xl ${activeTab.color} ${activeTab.textColor}`}
            >
              <h2 className="font-bebas text-5xl md:text-7xl mb-2 leading-none uppercase tracking-wide">
                {activeTab.subtitle}
              </h2>
              <p className="font-syne text-lg md:text-2xl font-bold border-t-4 border-current pt-4 mt-4 leading-tight">
                {activeTab.desc}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-6 py-3 bg-black text-white p5-jagged font-bebas text-2xl uppercase shadow-[4px_4px_0_rgba(255,255,255,0.3)] border-2 border-white/20 hover:bg-[#E00000] transition-colors"
                onClick={() =>
                  window.open(
                    activeTab.id === 'substack'
                      ? 'https://substack.com/@dollong'
                      : '#',
                    '_blank'
                  )
                }
              >
                Read More
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Menu Items */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-end gap-6 md:gap-8 pr-4 md:pr-24">
          {CATEGORIES.map((cat, i) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveTab(cat)}
              onMouseEnter={() => setHoveredTab(cat.id)}
              onMouseLeave={() => setHoveredTab(null)}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
              className={`relative font-p5-ransom text-5xl md:text-8xl uppercase tracking-wider text-right transition-all duration-200 z-10 text-white ${
                activeTab.id === cat.id
                  ? 'opacity-100 scale-[1.02]'
                  : 'opacity-60 hover:opacity-100 hover:scale-[1.02]'
              }`}
            >
              {/* Star graphic to indicate selected */}
              <AnimatePresence>
                {activeTab.id === cat.id && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    className="absolute -left-12 md:-left-20 top-1/2 -translate-y-1/2 text-[#E00000] text-5xl md:text-7xl drop-shadow-[2px_2px_0_#FFF]"
                  >
                    ★
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Background slash effect on active/hover */}
              <AnimatePresence>
                {(activeTab.id === cat.id || hoveredTab === cat.id) && (
                  <motion.div
                    layoutId="menuHighlight"
                    className={`absolute -inset-x-8 -inset-y-2 -z-10 p5-jagged opacity-100 transform skew-x-12 border-2 ${
                      activeTab.id === cat.id
                        ? 'p5-bg-black border-black'
                        : 'p5-bg-red border-red-800'
                    }`}
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                  />
                )}
              </AnimatePresence>

              <span
                className={`block transform ${cat.rotation} drop-shadow-[4px_4px_0_#111] transition-transform duration-200`}
              >
                {cat.title}
              </span>
            </motion.button>
          ))}
        </div>
      </main>

      {/* Abstract foreground shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-48 -right-48 w-[600px] h-[600px] border-[24px] border-white/10 p5-jagged pointer-events-none"
      />
    </div>
  );
}
