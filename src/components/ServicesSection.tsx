import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUp, ArrowDown, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ServicesSectionProps {
  onNavigateContact: () => void;
}

const SERVICE_IMAGES: Record<string, string> = {
  '01': '/images/pdf_images/extracted_p15_img1.jpeg', // Residential Towers
  '02': '/images/pdf_images/extracted_p14_img1.jpeg', // Rolling Hills Luxury Villas
  '03': '/images/pdf_images/extracted_p10_img1.jpeg', // Wastewater & Municipal Infra
  '04': '/images/pdf_images/extracted_p7_img1.jpeg',  // Qukës-Qafë Plloçë Alpine Highway & Bridges
  '05': '/images/pdf_images/extracted_p8_img1.jpeg',  // Heavy Concrete & Rebar Reinforcement
  '06': '/images/pdf_images/extracted_p20_img1.jpeg', // 15,000 m² Certified Scaffolding Fleet
  '07': '/images/pdf_images/extracted_p5_img1.jpeg',  // Panoramic Transport Tunnel
  '08': '/images/pdf_images/extracted_p18_img1.jpeg'  // Heavy Civil Works & General Contracting
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigateContact }) => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const { lang, t } = useLanguage();

  const total = t.services.items.length;
  const activeService = selectedService !== null ? t.services.items[selectedService] : null;

  const handlePrev = () => {
    if (selectedService !== null) {
      setSelectedService((selectedService - 1 + total) % total);
    }
  };

  const handleNext = () => {
    if (selectedService !== null) {
      setSelectedService((selectedService + 1) % total);
    }
  };

  // Keyboard navigation when slide-in is open
  useEffect(() => {
    if (selectedService === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedService]);

  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-8 border-t border-white/5 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Monumental Outline Number 03 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-start sm:items-center gap-4 sm:gap-8"
          >
            <span className="text-6xl sm:text-8xl md:text-9xl font-condensed text-outline-white select-none shrink-0 leading-none">
              03
            </span>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-px bg-white/30" />
                <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
                  {lang === 'AL' ? 'KAPACITETET TEKNIKE & EKZEKUTIMI' : 'CAPABILITIES & EXECUTION'}
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tighter uppercase leading-[1.02]">
                {t.services.titleMain} <span className="text-gradient">{t.services.titleAccent}</span>
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
            {t.services.desc}
          </motion.p>
        </div>

        {/* Clean Full-Width Services List (Matching reference photo) */}
        <div className="border-t border-white/10 flex flex-col">
          {t.services.items.map((service, index) => (
            <div
              key={service.number}
              className="border-b border-white/10 transition-colors hover:bg-white/[0.02]"
            >
              <button
                type="button"
                onClick={() => setSelectedService(index)}
                className="w-full py-6 sm:py-8 flex items-center justify-between gap-6 text-left group cursor-pointer"
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
                  {service.title}
                </span>

                <div className="shrink-0 flex items-center gap-2">
                  <ArrowRight className="w-6 h-6 stroke-[1.5] text-neutral-400 group-hover:translate-x-2 group-hover:text-white transition-all duration-300" />
                </div>
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Monadnock-Style Slide-In Detail Experience (Matching uploaded photo) */}
      <AnimatePresence>
        {selectedService !== null && activeService && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
            />

            {/* Slide-In Main Container from Right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full lg:w-[94vw] xl:w-[92vw] h-full flex bg-[#EAE6DF] text-[#121214] shadow-2xl overflow-hidden"
            >
              {/* Left Control Strip with (X) and (↑ / ↓) */}
              <div className="w-14 sm:w-18 md:w-22 shrink-0 h-full border-r border-black/10 flex flex-col justify-between items-center py-6 sm:py-8 bg-[#E2DDD5]/70 select-none">
                {/* Top Close (X) button */}
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-black/25 hover:border-black flex items-center justify-center text-black/70 hover:text-black hover:bg-black/5 transition-all cursor-pointer"
                  aria-label="Close"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Bottom Up / Down Arrows */}
                <div className="flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-black/25 hover:border-black flex items-center justify-center text-black/70 hover:text-black hover:bg-black/5 transition-all cursor-pointer"
                    aria-label="Previous service"
                    title="Previous service"
                  >
                    <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-black/25 hover:border-black flex items-center justify-center text-black/70 hover:text-black hover:bg-black/5 transition-all cursor-pointer"
                    aria-label="Next service"
                    title="Next service"
                  >
                    <ArrowDown className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </button>
                </div>
              </div>

              {/* Main Content Area (Text on left, Tall Project Photo on right) */}
              <div className="flex-1 h-full flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden">
                
                {/* Left Text Column */}
                <div className="flex-1 p-6 sm:p-10 md:p-12 lg:p-16 overflow-y-auto flex flex-col justify-between">
                  <div>
                    {/* Monumental Headline */}
                    <motion.h2 
                      key={`title-${selectedService}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-condensed font-extrabold uppercase tracking-tight text-[#121214] leading-[0.92] mb-6 sm:mb-8"
                    >
                      {activeService.title}
                    </motion.h2>

                    {/* Editorial Paragraph */}
                    <motion.p 
                      key={`desc-${selectedService}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="text-base sm:text-lg md:text-xl text-[#26262A] font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl"
                    >
                      {activeService.description}
                    </motion.p>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm font-bold text-[#121214] uppercase tracking-wider mb-5">
                      {lang === 'AL' 
                        ? 'Arsyet pse projektet tona janë lider në fushë:' 
                        : 'A few reasons our projects are the best in the field:'}
                    </p>

                    {/* 2-Column Numbered Reasons / Specifications */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 max-w-3xl">
                      {activeService.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <span className="text-xs font-mono font-bold text-[#76767E] shrink-0 mt-0.5">
                            {String(fIdx + 1).padStart(2, '0')}
                          </span>
                          <p className="text-xs sm:text-[13px] text-[#303035] leading-relaxed">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="pt-8 mt-8 border-t border-black/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedService(null);
                        onNavigateContact();
                      }}
                      className="px-7 py-3 rounded-full bg-[#121214] hover:bg-black text-white text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-95"
                    >
                      <span>{lang === 'AL' ? 'KONSULTO KËTË SHËRBIM' : 'INQUIRE THIS SERVICE'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <span className="text-xs font-mono text-neutral-500 hidden sm:inline-block">
                      CAPO CONSTRUCTION • {activeService.number} / {String(total).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Right Column: Full-Height Project Photo */}
                <div className="w-full lg:w-[42%] xl:w-[45%] h-72 sm:h-96 lg:h-full relative overflow-hidden bg-neutral-900 shrink-0">
                  <motion.img
                    key={`img-${selectedService}`}
                    initial={{ scale: 1.06, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    src={SERVICE_IMAGES[activeService.number] || '/images/pdf_images/extracted_p15_img1.jpeg'}
                    alt={activeService.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

