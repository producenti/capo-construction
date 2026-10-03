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
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-px bg-white/30" />
                <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
                  {lang === 'AL' ? 'EKOSISTEMI STRATEGJIK' : 'STRATEGIC ECOSYSTEM'}
                </span>
              </div>
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

        {/* Partners Monochromatic Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {PARTNERS_LIST.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="group p-6 sm:p-8 rounded-3xl glass-card glass-card-hover border border-white/10 flex flex-col items-center justify-center text-center min-h-[140px]"
            >
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-400 group-hover:text-white font-display transition-colors duration-300">
                {partner.name}
              </span>
              <span className="text-[10px] text-neutral-400 font-mono tracking-wider uppercase mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                {partner.category}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
