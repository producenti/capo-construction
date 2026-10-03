import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const COMPANY_EMAIL = 'capoconstruction@yahoo.com';

interface Job {
  titleEN: string;
  titleAL: string;
  typeEN: string;
  typeAL: string;
  locationEN: string;
  locationAL: string;
  subjectEN: string;
  subjectAL: string;
}

const jobs: Job[] = [
  {
    titleEN: 'Site Worker',
    titleAL: 'Punëtor Kantieri',
    typeEN: 'Full Time',
    typeAL: 'Kohë e Plotë',
    locationEN: 'Albania',
    locationAL: 'Shqipëri',
    subjectEN: 'Application – Site Worker',
    subjectAL: 'Aplikim – Punëtor Kantieri',
  },
  {
    titleEN: 'Scaffolding Worker',
    titleAL: 'Punëtor Skelerie',
    typeEN: 'Full Time',
    typeAL: 'Kohë e Plotë',
    locationEN: 'Albania',
    locationAL: 'Shqipëri',
    subjectEN: 'Application – Scaffolding Worker',
    subjectAL: 'Aplikim – Punëtor Skelerie',
  },
];

export const CareersSection: React.FC = () => {
  const { lang } = useLanguage();

  const openMail = (subject: string) => {
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      lang === 'AL'
        ? 'Pershendetje,\n\nJu shkruaj per pozicionin e larte-permendur.\n\nEmri:\nNumri i kontaktit:\nExperienca:\n\nFaleminderit.'
        : 'Hello,\n\nI am writing to apply for the above-mentioned position.\n\nName:\nContact Number:\nExperience:\n\nThank you.'
    )}`;
  };

  return (
    <section id="careers" className="relative py-24 sm:py-32 px-4 sm:px-8 border-t border-white/5 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header with Outline Number */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex items-start sm:items-center gap-4 sm:gap-8 mb-16 max-w-5xl"
        >
          <span className="text-6xl sm:text-8xl md:text-9xl font-condensed text-outline-white select-none shrink-0 leading-none">
            06
          </span>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-px bg-white/30" />
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
                {lang === 'AL' ? 'MUNDËSI KARRIERE' : 'JOIN THE TEAM'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tighter uppercase leading-[1.02]">
              {lang === 'AL' ? 'Karriera' : 'Careers'}
            </h2>
          </div>
        </motion.div>

        {/* Current Opportunities Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-6"
        >
          {lang === 'AL' ? 'Mundësi Aktuale' : 'Current Opportunities'}
        </motion.p>

        {/* Job Listings */}
        <div>
          {jobs.map((job, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => openMail(lang === 'AL' ? job.subjectAL : job.subjectEN)}
              className="w-full text-left group"
            >
              {/* Top border line */}
              <div className="h-px bg-white/10 group-hover:bg-white/25 transition-colors duration-300" />

              <div className="flex items-center justify-between py-7 sm:py-8 gap-4">
                {/* Left: Title + Type */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight group-hover:text-neutral-200 transition-colors duration-300">
                    {lang === 'AL' ? job.titleAL : job.titleEN}
                  </h3>
                  <span className="text-sm text-neutral-500 font-light">
                    {lang === 'AL' ? job.typeAL : job.typeEN}
                  </span>
                </div>

                {/* Right: Location + Arrow */}
                <div className="flex items-center gap-8 sm:gap-12 shrink-0">
                  <span className="hidden sm:block text-sm text-neutral-400 font-mono">
                    {lang === 'AL' ? job.locationAL : job.locationEN}
                  </span>
                  <span className="text-white/40 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform text-lg">
                    ↗
                  </span>
                </div>
              </div>
            </motion.button>
          ))}

          {/* Bottom border line */}
          <div className="h-px bg-white/10" />
        </div>

        {/* General Application CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <p className="text-neutral-400 text-sm font-light max-w-md leading-relaxed">
            {lang === 'AL'
              ? 'Nuk gjeni pozicionin e duhur? Dërgoni CV-në tuaj dhe ne do t\'ju kontaktojmë.'
              : "Don't see the right role? Send us your CV and we'll be in touch."}
          </p>
          <button
            onClick={() =>
              openMail(lang === 'AL' ? 'Aplikim i Hapur – CV' : 'Open Application – CV')
            }
            className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-mono text-white border border-white/20 px-6 py-3 rounded-full hover:border-white/50 hover:bg-white/5 transition-all duration-300 shrink-0"
          >
            {lang === 'AL' ? 'Dërgo CV-në' : 'Send Your CV'}
            <span className="text-base leading-none">↗</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
