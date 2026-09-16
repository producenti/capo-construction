import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Home, 
  Layers, 
  Milestone, 
  Hammer, 
  Grid, 
  Compass, 
  Briefcase,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { EQUIPMENT_INVENTORY } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

interface ServicesSectionProps {
  onNavigateContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigateContact }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { lang, t } = useLanguage();

  const getIcon = (number: string) => {
    switch (number) {
      case '01': return <Building2 className="w-6 h-6" />;
      case '02': return <Home className="w-6 h-6" />;
      case '03': return <Layers className="w-6 h-6" />;
      case '04': return <Milestone className="w-6 h-6" />;
      case '05': return <Hammer className="w-6 h-6" />;
      case '06': return <Grid className="w-6 h-6" />;
      case '07': return <Compass className="w-6 h-6" />;
      default: return <Briefcase className="w-6 h-6" />;
    }
  };

  const isAl = lang === 'AL';

  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-8 border-t border-white/5 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
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
                {t.services.tag}
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter"
            >
              {t.services.titleMain} <span className="text-gradient">{t.services.titleAccent}</span>
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-400 font-light max-w-md"
          >
            {t.services.desc}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="group relative p-8 rounded-3xl glass-card glass-card-hover border border-white/10 flex flex-col justify-between min-h-[320px] cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono tracking-widest text-neutral-400 font-semibold group-hover:text-white transition-colors">
                  {service.number}
                </span>

                <div className="w-12 h-12 rounded-2xl glass-nav flex items-center justify-center text-neutral-300 group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                  {getIcon(service.number)}
                </div>
              </div>

              <div className="my-6">
                <h3 className="text-xl font-bold text-white tracking-tight font-display group-hover:text-gradient transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-neutral-400 font-light leading-relaxed mt-3">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-col gap-2">
                  {service.features.slice(0, 2).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[11px] text-neutral-400 group-hover:text-neutral-300 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors">
                  <span>Inquire Service</span>
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Equipment & Material Fleet Inventory Matrix */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-4 h-4 text-neutral-300" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              {t.services.inventoryTag}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {EQUIPMENT_INVENTORY.map((eq, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-card border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-extrabold text-white font-display tracking-tight">
                    {eq.quantity}
                  </span>
                  <h4 className="text-xs font-semibold text-neutral-200 mt-2 font-display">
                    {isAl ? eq.nameAl : eq.name}
                  </h4>
                </div>
                <p className="text-[11px] text-neutral-400 font-light mt-3 pt-3 border-t border-white/5">
                  {isAl ? eq.descriptionAl : eq.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scaffolding Capability Spotlight */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 p-8 sm:p-12 rounded-3xl glass-card border border-white/15 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="relative z-10 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono uppercase tracking-widest text-neutral-300 border border-white/15 mb-4 inline-block">
              {t.services.scaffoldingTag}
            </span>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
              {t.services.scaffoldingTitle}
            </h3>

            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {t.services.scaffoldingDesc}
            </p>
          </div>

          <button
            onClick={onNavigateContact}
            className="relative z-10 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all hover:bg-neutral-200 shrink-0 shadow-xl"
          >
            {t.services.scaffoldingBtn}
          </button>
        </motion.div>

      </div>
    </section>
  );
};
