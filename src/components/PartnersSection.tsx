import React from 'react';
import { motion } from 'framer-motion';
import { PARTNERS_LIST } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const PartnersSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="partners" className="relative py-24 sm:py-32 px-4 sm:px-8 border-t border-white/5 bg-[#0A0A0C] overflow-hidden">
      {/* Architectural Ambient Grid in Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Vertical Grid Lines matching opening screen */}
        <div className="absolute inset-0 flex justify-between px-4 sm:px-8 lg:px-12 opacity-[0.06]">
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
        {/* Horizontal Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between py-12 opacity-[0.04]">
          <div className="h-px w-full bg-white" />
          <div className="h-px w-full bg-white" />
          <div className="h-px w-full bg-white" />
          <div className="h-px w-full bg-white" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header with Monumental Outline Number 04 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-start sm:items-center gap-4 sm:gap-8"
          >
            <span className="text-6xl sm:text-8xl md:text-9xl font-condensed text-outline-white select-none shrink-0 leading-none">
              04
            </span>
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tighter uppercase leading-[1.02]">
                {lang === 'AL' ? (
                  <>
                    <span className="text-[#DB192E]">E BESUAR</span> PËRMES <span className="text-gradient">{t.partners.titleAccent}</span>
                  </>
                ) : (
                  <>
                    <span className="text-[#DB192E]">TRUSTED</span> THROUGH <span className="text-gradient">{t.partners.titleAccent}</span>
                  </>
                )}
              </h2>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-400 font-light max-w-md"
          >
            {t.partners.desc}
          </motion.p>
        </div>

        {/* Desktop & Tablet Grid */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {PARTNERS_LIST.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.025, 0.45) }}
              className="group p-6 sm:p-8 rounded-2xl glass-card glass-card-hover border border-white/10 flex items-center justify-center text-center min-h-[110px] sm:min-h-[125px]"
            >
              <span className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-neutral-400 group-hover:text-white font-display transition-colors duration-300">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile Version - Continuous Marquee Slideshow */}
        <div className="sm:hidden relative -mx-4 overflow-hidden flex flex-col gap-3 py-2">
          {/* Subtle edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0A0A0C] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0A0A0C] to-transparent z-10" />

          {/* Row 1 - Slides left */}
          <div className="overflow-hidden w-full select-none">
            <div className="animate-partner-slideshow flex items-center gap-3">
              {[...PARTNERS_LIST.slice(0, 12), ...PARTNERS_LIST.slice(0, 12)].map((partner, idx) => (
                <div
                  key={`m1-${idx}`}
                  className="px-5 py-3 rounded-xl glass-card border border-white/10 shrink-0 flex items-center justify-center min-w-[140px] h-[60px]"
                >
                  <span className="text-base font-extrabold tracking-tight text-neutral-300 font-display text-center whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Slides right */}
          <div className="overflow-hidden w-full select-none">
            <div className="animate-partner-slideshow-reverse flex items-center gap-3">
              {[...PARTNERS_LIST.slice(12), ...PARTNERS_LIST.slice(12)].map((partner, idx) => (
                <div
                  key={`m2-${idx}`}
                  className="px-5 py-3 rounded-xl glass-card border border-white/10 shrink-0 flex items-center justify-center min-w-[140px] h-[60px]"
                >
                  <span className="text-base font-extrabold tracking-tight text-neutral-300 font-display text-center whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
