import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OpeningScreenProps {
  onComplete?: () => void;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Keep CAPO in the center for a punchy, cinematic moment, then trigger fade
    const timer = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 1600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="opening-curtain"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0C] pointer-events-auto select-none overflow-hidden"
        >
          {/* Subtle Architectural Ambient Grid in Background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex justify-between px-8">
            <div className="w-px h-full bg-white" />
            <div className="w-px h-full bg-white hidden sm:block" />
            <div className="w-px h-full bg-white hidden md:block" />
            <div className="w-px h-full bg-white" />
            <div className="w-px h-full bg-white hidden md:block" />
            <div className="w-px h-full bg-white hidden sm:block" />
            <div className="w-px h-full bg-white" />
          </div>

          {/* Centered Brand Presentation */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            
            {/* The Main Name: CAPO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, letterSpacing: '0.12em' }}
              animate={{ opacity: 1, scale: 1, letterSpacing: '0.2em' }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl sm:text-9xl md:text-[11rem] lg:text-[13rem] font-black uppercase text-white font-display leading-none select-none tracking-[0.2em]"
            >
              CAPO
            </motion.div>

            {/* Subtitle Accent Line */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-3 mt-4 sm:mt-6 text-xs sm:text-sm font-mono tracking-[0.35em] uppercase text-neutral-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#DB192E] animate-pulse" />
              <span className="text-white font-medium">CONSTRUCTION</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400">EST. 2001</span>
            </motion.div>

            {/* Fine Architectural Underline */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-32 sm:w-48 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mt-6"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
