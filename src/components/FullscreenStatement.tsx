import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const FullscreenStatement: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const { t } = useLanguage();
  const bgScale = useTransform(scrollYProgress, [0.4, 0.8], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0.4, 0.8], [20, -20]);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 px-4 sm:px-8 overflow-hidden border-t border-b border-white/10 my-12">
      
      {/* Slow Moving Background Canvas */}
      <motion.div 
        style={{ scale: bgScale }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center filter brightness-[0.3] contrast-[1.15]"
          style={{ backgroundImage: `url('/images/hero.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-black/70 to-[#0A0A0C]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-transparent to-[#0A0A0C]" />
      </motion.div>

      {/* Dramatic Statement Content */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-20 h-20 rounded-2xl bg-white p-2 border border-white/20 flex items-center justify-center shadow-2xl mb-2 overflow-hidden"
        >
          <img src="/logo.png" alt="Capo Construction Logo" className="w-full h-full object-contain" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-4xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tighter leading-[0.95] font-display max-w-4xl"
        >
          {t.statement.line1} <br />
          {t.statement.line2} <br />
          <span className="text-gradient">{t.statement.line3}</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-neutral-400 max-w-xl"
        >
          {t.statement.tagline}
        </motion.p>
      </motion.div>
    </section>
  );
};
