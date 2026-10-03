import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
  isAboutVisible?: boolean;
}

const stats = [
  {
    value: '25+',
    labelEN: 'Years of Engineering Experience',
    labelAL: 'Vite Eksperiencë Inxhinierike',
    noteEN: 'Quarter century of proven execution',
    noteAL: 'Një çerek shekulli ekzekutim i provuar',
  },
  {
    value: '15,000 m²',
    labelEN: 'Scaffolding System Capacity',
    labelAL: 'Kapacitet i Sistemit të Skelës',
    noteEN: 'Modern European certified scaffolding',
    noteAL: 'Skele të certifikuara sipas standardeve europiane',
  },
  {
    value: '50+',
    labelEN: 'Major Infrastructure Projects',
    labelAL: 'Projekte Kryesore Infrastrukturore',
    noteEN: 'Roads, bridges, tunnels & civil works',
    noteAL: 'Rrugë, ura, tunele & punime civile',
  },
  {
    value: 'Since 2001',
    labelEN: 'Active Commercial Operations',
    labelAL: 'Operacione Aktive Komerciale',
    noteEN: 'Available in every territory of Albania',
    noteAL: 'E disponueshme në çdo territor të Shqipërisë',
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({ isAboutVisible = false }) => {
  const { lang, t } = useLanguage();
  const [showMore, setShowMore] = useState(false);
  const light = isAboutVisible;

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-8 border-t"
      style={{
        backgroundColor: light ? '#FFFFFF' : '#0A0A0C',
        borderColor: light ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.05)',
        transition: 'background-color 700ms ease, border-color 700ms ease',
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header with Outline Number 01 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex items-start sm:items-center gap-4 sm:gap-8 mb-16 max-w-5xl"
        >
          <span className="text-6xl sm:text-8xl md:text-9xl font-condensed select-none shrink-0 leading-none text-outline-red">
            01
          </span>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="w-6 h-px"
                style={{
                  backgroundColor: light ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.3)',
                  transition: 'background-color 700ms ease',
                }}
              />
              <span
                className="text-xs font-mono tracking-widest uppercase"
                style={{ color: light ? '#6b7280' : 'rgba(163,163,163,1)', transition: 'color 700ms ease' }}
              >
                {lang === 'AL' ? 'RRETH CAPO CONSTRUCTION' : 'ABOUT CAPO CONSTRUCTION'}
              </span>
            </div>
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter uppercase leading-[1.02]"
              style={{ color: light ? '#0A0A0C' : '#FFFFFF', transition: 'color 700ms ease' }}
            >
              {t.about.titleMain} {t.about.titleAccent}
            </h2>
          </div>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <p
              className="text-lg sm:text-xl font-light leading-relaxed"
              style={{ color: light ? '#374151' : 'rgba(212,212,212,1)', transition: 'color 700ms ease' }}
            >
              {t.about.para1}
            </p>

            <p
              className="text-base leading-relaxed font-light"
              style={{ color: light ? '#6b7280' : 'rgba(163,163,163,1)', transition: 'color 700ms ease' }}
            >
              {t.about.para2}
            </p>

            <div className="pt-2 flex items-center">
              {/* More toggle */}
              <button
                onClick={() => setShowMore(p => !p)}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono transition-colors group"
                style={{ color: light ? '#0A0A0C' : '#FFFFFF' }}
              >
                <span>{lang === 'AL' ? 'Më Shumë' : 'More'}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            {/* Expandable Stats */}
            <AnimatePresence>
              {showMore && (
                <motion.div
                  key="stats"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div
                    className="pt-2"
                    style={{ borderTop: light ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.1)' }}
                  >
                    {stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between gap-4 py-4"
                        style={{ borderBottom: light ? '1px solid rgba(0,0,0,0.05)' : '1px solid rgba(255,255,255,0.05)' }}
                      >
                        <div className="flex flex-col gap-0.5">
                          <span
                            className="text-sm font-semibold"
                            style={{ color: light ? '#1f2937' : 'rgba(229,229,229,1)' }}
                          >
                            {lang === 'AL' ? stat.labelAL : stat.labelEN}
                          </span>
                          <span
                            className="text-xs font-mono"
                            style={{ color: light ? '#9ca3af' : 'rgba(115,115,115,1)' }}
                          >
                            {lang === 'AL' ? stat.noteAL : stat.noteEN}
                          </span>
                        </div>
                        <span
                          className="text-xl sm:text-2xl font-extrabold font-display tracking-tight shrink-0"
                          style={{ color: light ? '#0A0A0C' : '#FFFFFF' }}
                        >
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column - Team Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
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

      </div>
    </section>
  );
};
