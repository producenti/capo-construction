import React from 'react';
import { motion } from 'framer-motion';
import { PARTNERS_LIST } from '../data/companyData';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PartnersSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="partners" className="relative py-24 sm:py-32 px-4 sm:px-8 border-t border-white/5 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/15 text-neutral-400 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-neutral-300" />
            <span>{t.partners.tag}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tighter font-display"
          >
            {t.partners.titleMain} <span className="text-gradient">{t.partners.titleAccent}</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-400 font-light mt-4"
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
