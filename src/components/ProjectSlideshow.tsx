import React from 'react';
import { PROJECTS_DATA } from '../data/companyData';

// Collect all unique project photos
const RAW_IMAGES: string[] = PROJECTS_DATA.flatMap((project) => {
  const images = [project.image, ...(project.galleryImages || [])];
  return images.filter(Boolean);
});

// Deduplicate
const UNIQUE_IMAGES = Array.from(new Set(RAW_IMAGES));

// Double the set for seamless 100% infinite looping
const SLIDES = [...UNIQUE_IMAGES, ...UNIQUE_IMAGES];

export const ProjectSlideshow: React.FC = () => {
  return (
    <section
      id="project-slideshow"
      className="relative py-14 sm:py-20 overflow-hidden border-t border-white/5 bg-[#0A0A0C]"
    >
      <div className="w-full overflow-hidden select-none">
        <div className="animate-slideshow flex items-center gap-4 sm:gap-6 px-3">
          {SLIDES.map((imgSrc, idx) => (
            <div
              key={idx}
              className="w-[280px] sm:w-[400px] md:w-[480px] lg:w-[540px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shrink-0 shadow-2xl bg-neutral-900 border border-white/10"
            >
              <img
                src={imgSrc}
                alt="Capo Construction Project Photo"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
