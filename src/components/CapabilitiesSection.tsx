import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CapabilitiesSectionProps {
  onNavigateContact?: () => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = () => {
  const { t } = useLanguage();

  return (
    <section id="process" className="relative py-24 sm:py-32 px-4 sm:px-8 border-t border-white/5 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-px bg-white/30" />
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
                {t.process.tag}
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter"
            >
              {t.process.titleMain} <br />
              <span className="text-gradient">{t.process.titleAccent}</span>
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-400 font-light max-w-md"
          >
            {t.process.desc}
          </motion.p>
        </div>

        {/* Timeline Process Grid */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.process.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group p-8 rounded-3xl glass-card glass-card-hover border border-white/10 flex flex-col justify-between min-h-[300px] relative overflow-hidden"
              >
                <span className="absolute -top-6 -right-2 text-8xl font-extrabold font-display text-white/[0.03] select-none group-hover:text-white/[0.07] transition-colors">
                  {step.number}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full glass-nav text-[10px] font-mono tracking-widest text-neutral-300 border border-white/15">
                      PHASE {step.number}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight font-display group-hover:text-gradient transition-colors">
                    {step.title}
                  </h3>

                  <span className="text-xs text-neutral-400 font-mono block mt-1">
                    {step.subtitle}
                  </span>

                  <p className="text-xs text-neutral-300 font-light leading-relaxed mt-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors">
                  <span>Phase Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
