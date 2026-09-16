import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin, Calendar, Filter, FileText } from 'lucide-react';
import { PROJECTS_DATA, COMPANY_DETAILS } from '../data/companyData';
import type { Project } from '../data/companyData';
import { ProjectModal } from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';

interface ProjectsSectionProps {
  onNavigateContact: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onNavigateContact }) => {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    { key: 'All', label: t.projects.categories.all },
    { key: 'Infrastructure', label: t.projects.categories.infra },
    { key: 'Residential & Villas', label: t.projects.categories.residential },
    { key: 'Roads & Bridges', label: t.projects.categories.roads },
    { key: 'Tunnels & Structural Works', label: t.projects.categories.tunnels },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const isAl = lang === 'AL';

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-8 border-t border-white/5 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
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
                {t.projects.tag}
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter"
            >
              {t.projects.titleMain} <span className="text-gradient">{t.projects.titleAccent}</span>
            </motion.h2>
          </div>

          <div className="flex flex-col gap-4 max-w-md">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base text-neutral-400 font-light"
            >
              {t.projects.desc}
            </motion.p>

            <a
              href={COMPANY_DETAILS.pdfCatalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border border-white/20 text-xs font-mono text-white hover:bg-white/10 transition-all w-fit"
            >
              <FileText className="w-4 h-4 text-neutral-300" />
              <span>{t.hero.btnDownloadCatalog}</span>
            </a>
          </div>
        </div>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-12 border-b border-white/10"
        >
          <Filter className="w-4 h-4 text-neutral-400 mr-2 shrink-0 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat.key
                  ? 'bg-white text-black font-semibold shadow-lg'
                  : 'glass-card text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onClick={() => setActiveProject(project)}
                className="group relative rounded-3xl overflow-hidden glass-card glass-card-hover border border-white/10 flex flex-col cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-center filter contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full glass-nav border border-white/15 text-[10px] font-mono text-neutral-300 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full glass-nav flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                  <div>
                    <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-neutral-400" />
                        {project.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-neutral-400" />
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight font-display group-hover:text-gradient transition-colors">
                      {isAl ? project.nameAl : project.name}
                    </h3>

                    <p className="text-xs text-neutral-400 line-clamp-2 mt-2 font-light leading-relaxed">
                      {isAl ? project.shortDescriptionAl : project.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-neutral-400 group-hover:text-neutral-200 transition-colors">
                    <span>{t.projects.inspectBtn}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onNavigateContact={onNavigateContact}
      />
    </section>
  );
};
