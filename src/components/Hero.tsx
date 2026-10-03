import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const { lang, t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play immediately on mount without delay
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Parallax subtle shifts
  const opacity = useTransform(scrollY, [0, 600], [1, 0.2]);
  const y = useTransform(scrollY, [0, 600], [0, 60]);

  const isAl = lang === 'AL';

  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] flex flex-col justify-between pt-20 sm:pt-28 md:pt-32 pb-8 sm:pb-10 px-4 sm:px-8 lg:px-12 overflow-hidden bg-[#0A0A0C]"
    >
      {/* FULL SCREEN CINEMATIC BACKGROUND VIDEO (No poster - plays directly) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover filter contrast-[1.15] brightness-[0.55]"
        >
          <source src="/videos/hero-reel.mp4" type="video/mp4" />
        </video>

        {/* Film Grain & Dark Tonal Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/65 to-[#0A0A0C]/80" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Moncon 12-Column Architectural Guide Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-between px-4 sm:px-8 lg:px-12 opacity-[0.04]">
        <div className="w-px h-full bg-white" />
        <div className="w-px h-full bg-white hidden sm:block" />
        <div className="w-px h-full bg-white hidden md:block" />
        <div className="w-px h-full bg-white hidden lg:block" />
        <div className="w-px h-full bg-white" />
        <div className="w-px h-full bg-white hidden lg:block" />
        <div className="w-px h-full bg-white hidden md:block" />
        <div className="w-px h-full bg-white hidden sm:block" />
        <div className="w-px h-full bg-white" />
      </div>

      {/* Main Monumental Composition (Moncon Style Full-Screen Lockup) */}
      <motion.div 
        style={{ opacity, y }}
        className="relative z-10 my-auto py-10 sm:py-16 flex flex-col justify-center max-w-6xl"
      >

        {/* Monumental Condensed Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-condensed text-6xl sm:text-8xl md:text-9xl lg:text-[8.5vw] xl:text-[9.5vw] font-black uppercase text-white leading-[0.88] tracking-tight drop-shadow-2xl"
        >
          {isAl ? (
            <>
              <span className="block text-white">NDËRTOJMË</span>
              <span className="block text-gradient">TË ARDHMEN.</span>
            </>
          ) : (
            <>
              <span className="block text-white">BUILDING WHAT</span>
              <span className="block text-gradient">COMES NEXT.</span>
            </>
          )}
        </motion.h1>

        {/* Moncon-style Editorial Paragraph & CTA Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 max-w-4xl"
        >
          <p className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed max-w-xl drop-shadow">
            {isAl 
              ? 'Zgjidhje ndërtimi, infrastrukture dhe inxhinierie të ndërtuara me precizion, mbi 15,000 m² skeleri të certifikuar dhe një përvojë të provuar që nga viti 2001 në çdo territor të Shqipërisë.'
              : 'Construction, infrastructure and engineering solutions built with precision, 15,000 m² certified facade scaffolding fleet, and over 25 years of proven execution across Albania.'
            }
          </p>

          {/* Action Buttons: Signature Moncon Expanding Arrow Button */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('projects')}
              className="moncon-btn group"
            >
              <span>{t.hero.btnProjects}</span>
              <div className="flex items-center">
                <span className="arrow-stem" />
                <svg className="arrow-head-svg w-2 h-3.5" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.32422 1.31641L4.5 4.48752L1.32812 7.68359" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Architectural Spec Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full pt-6 border-t border-white/15"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-left">
          
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold font-condensed text-white tracking-wide">
              {isAl ? '25+ VJET' : '25+ YEARS'}
            </span>
            <span className="text-[11px] font-mono text-neutral-300 uppercase tracking-widest mt-0.5">
              {t.hero.stat1}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold font-condensed text-white tracking-wide">15,000 M²</span>
            <span className="text-[11px] font-mono text-neutral-300 uppercase tracking-widest mt-0.5">
              {t.hero.stat2}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold font-condensed text-white tracking-wide">
              {isAl ? '50+ PROJEKTE' : '50+ PROJECTS'}
            </span>
            <span className="text-[11px] font-mono text-neutral-300 uppercase tracking-widest mt-0.5">
              {t.hero.stat3}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold font-condensed text-white tracking-wide">
              {isAl ? 'QË NGA 2001' : 'SINCE 2001'}
            </span>
            <span className="text-[11px] font-mono text-neutral-300 uppercase tracking-widest mt-0.5">
              {t.hero.stat4}
            </span>
          </div>

        </div>
      </motion.div>

      {/* Subtle Scroll Down Cue */}
      <div className="absolute bottom-3 right-4 sm:right-8 lg:right-12 z-10 hidden sm:flex items-center gap-2 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
        <span>SCROLL</span>
        <button
          onClick={() => onNavigate('about')}
          className="w-7 h-7 rounded-full border border-white/20 bg-black/40 flex items-center justify-center text-neutral-300 hover:border-white hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll Down"
        >
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
