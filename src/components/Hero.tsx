import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ChevronRight, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_DETAILS } from '../data/companyData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const { t } = useLanguage();
  
  const opacity = useTransform(scrollY, [0, 500], [1, 0.1]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.95]);
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const bgScale = useTransform(scrollY, [0, 1000], [1, 1.15]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-8 overflow-hidden">
      
      {/* Background Parallax */}
      <motion.div 
        style={{ scale: bgScale }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 pointer-events-none"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center filter brightness-[0.45] contrast-[1.1]"
          style={{ backgroundImage: `url('/images/hero.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C]/90 via-transparent to-[#0A0A0C]/90" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0A0A0C] to-transparent" />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8 mt-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/15 text-neutral-300 text-xs font-mono tracking-widest uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{t.hero.badge}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tighter leading-[0.95] max-w-4xl"
        >
          {t.hero.headlineMain} <br />
          <span className="text-gradient">{t.hero.headlineAccent}</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-2 max-w-2xl"
        >
          <span className="text-xs sm:text-sm font-extrabold tracking-[0.3em] uppercase text-neutral-400 font-display">
            {t.hero.companyName}
          </span>
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed text-balance">
            {t.hero.subheadline}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full"
        >
          <button
            onClick={() => onNavigate('projects')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-neutral-200 hover:scale-105 shadow-2xl shadow-white/10 active:scale-95 flex items-center justify-center gap-2 group"
          >
            <span>{t.hero.btnProjects}</span>
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href={COMPANY_DETAILS.pdfCatalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-full glass-card border border-white/25 text-white font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white/15 hover:border-white/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4 text-neutral-300" />
            <span>{t.hero.btnDownloadCatalog}</span>
          </a>

          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-7 py-4 rounded-full glass-card border border-white/20 text-white font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>{t.hero.btnContact}</span>
          </button>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12 w-full pt-8 border-t border-white/10"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">25+</span>
            <span className="text-[11px] text-neutral-400 uppercase tracking-widest mt-1">{t.hero.stat1}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">15,000 m²</span>
            <span className="text-[11px] text-neutral-400 uppercase tracking-widest mt-1">{t.hero.stat2}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">50+</span>
            <span className="text-[11px] text-neutral-400 uppercase tracking-widest mt-1">{t.hero.stat3}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">Që nga 2008</span>
            <span className="text-[11px] text-neutral-400 uppercase tracking-widest mt-1">{t.hero.stat4}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down */}
      <motion.button 
        onClick={() => onNavigate('about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full glass-card border border-white/15 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll Down"
      >
        <ArrowDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
};
