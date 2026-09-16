import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Building2, ArrowRight, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import type { Project } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigateContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onNavigateContact }) => {
  const { lang, t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    if (project) {
      setSelectedImage(project.image);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isAl = lang === 'AL';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#121318] border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto text-white"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-nav flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Active Display Image */}
          <div className="relative h-64 sm:h-96 w-full overflow-hidden bg-neutral-900">
            <img
              src={selectedImage || project.image}
              alt={project.name}
              className="w-full h-full object-cover filter contrast-[1.05] transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-[#121318]/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-white/20 text-xs font-mono text-neutral-300 mb-3">
                <span>{project.category}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                {isAl ? project.nameAl : project.name}
              </h3>
            </div>
          </div>

          <div className="p-6 sm:p-8 flex flex-col gap-6 max-h-[60vh] overflow-y-auto">
            
            {/* Gallery Thumbnails from extracted PDF photos */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-2">
                  <ImageIcon className="w-3.5 h-3.5 text-neutral-300" />
                  {t.modal.galleryTitle}
                </h4>
                <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
                  {project.galleryImages.map((imgUrl, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(imgUrl)}
                      className={`relative w-20 h-16 rounded-xl overflow-hidden border shrink-0 transition-all ${
                        selectedImage === imgUrl ? 'border-white scale-105 shadow-lg' : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt={`Site photo ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Meta Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl glass-card border border-white/10">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase font-mono block">{t.modal.location}</span>
                  <span className="text-xs font-semibold text-white">{project.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-neutral-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase font-mono block">{t.modal.completion}</span>
                  <span className="text-xs font-semibold text-white">{project.year}</span>
                </div>
              </div>

              {project.client && (
                <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                  <Building2 className="w-4 h-4 text-neutral-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase font-mono block">{t.modal.client}</span>
                    <span className="text-xs font-semibold text-white">{project.client}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">{t.modal.overview}</h4>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {isAl ? project.fullDescriptionAl : project.fullDescription}
              </p>
            </div>

            {/* Technical Specifications */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">{t.modal.specs}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(isAl ? project.specsAl : project.specs).map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-neutral-300 shrink-0" />
                    <span className="text-xs text-neutral-200 font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-400 font-mono">
                {t.modal.footerText}
              </span>

              <button
                onClick={() => {
                  onClose();
                  onNavigateContact();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all hover:bg-neutral-200 flex items-center justify-center gap-2"
              >
                <span>{t.modal.inquireBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
