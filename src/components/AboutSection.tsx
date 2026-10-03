import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-8 border-t border-white/5 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto">
        
        {/* Monadnock-Style Section Header with Outline Number 01 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex items-start sm:items-center gap-4 sm:gap-8 mb-16 max-w-5xl"
        >
          <span className="text-6xl sm:text-8xl md:text-9xl font-condensed text-outline-white select-none shrink-0 leading-none">
            01
          </span>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-px bg-white/30" />
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
                {lang === 'AL' ? 'RRETH CAPO CONSTRUCTION' : 'ABOUT CAPO CONSTRUCTION'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tighter uppercase leading-[1.02]">
              {t.about.titleMain} <span className="text-gradient">{t.about.titleAccent}</span>
            </h2>
          </div>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
              {t.about.para1}
            </p>

            <p className="text-base text-neutral-400 leading-relaxed font-light">
              {t.about.para2}
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-mono text-white hover:text-neutral-300 transition-colors group"
              >
                <span>{t.about.exploreCapabilities}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Column - Team Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl glass-card group">
              <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/our-team.png" 
                  alt="Capo Construction Team" 
                  className="w-full h-full object-cover object-center filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl glass-nav border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white font-display">{t.about.imageTitle}</h4>
                  {t.about.imageSubtitle && <p className="text-xs text-neutral-400">{t.about.imageSubtitle}</p>}
                </div>
                <span className="text-xs font-mono text-neutral-400 uppercase">Capo Construction</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Statistics Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {t.about.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl glass-card glass-card-hover border border-white/10 flex flex-col justify-between min-h-[180px] group"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight group-hover:text-gradient transition-all">
                  {stat.value}
                </span>
                <h4 className="text-sm font-semibold text-neutral-200 mt-2">
                  {stat.label}
                </h4>
              </div>

              <p className="text-xs text-neutral-400 font-mono mt-4 pt-4 border-t border-white/10">
                {stat.highlight}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
