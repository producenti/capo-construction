import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] text-neutral-400 border-t border-white/10 pt-20 pb-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 border border-white/20 flex items-center justify-center shadow-md overflow-hidden shrink-0">
                <img src="/logo.png" alt="Capo Construction Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-extrabold tracking-[0.2em] text-base text-white font-display">
                CAPO CONSTRUCTION
              </span>
            </div>

            <p className="text-xl sm:text-2xl font-light text-neutral-300 font-display max-w-md leading-relaxed">
              {t.footer.headline} <br />
              <span className="text-white font-medium">{t.footer.headlineBold}</span>
            </p>

            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              {lang === 'AL' ? 'E DISPONUESHME NË ÇDO TERRITOR TË SHQIPËRISË' : 'AVAILABLE IN EVERY TERRITORY OF ALBANIA'}
            </span>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">{t.footer.sitemap}</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-white transition-colors">
                  {t.nav.projects}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-white transition-colors">
                  {t.nav.process}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('partners')} className="hover:text-white transition-colors">
                  {t.nav.partners}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">{t.footer.contacts}</h4>
            <div className="flex flex-col gap-2 text-xs font-mono">
              <span className="text-white font-semibold">Tirana & Regional Offices</span>
              <a href="tel:+355694172942" className="hover:text-white transition-colors">Tel: +355 69 417 2942</a>
              <a href="tel:+355693748971" className="hover:text-white transition-colors">Tel: +355 69 374 8971</a>
              <a href="mailto:capoconstruction@yahoo.com" className="hover:text-white transition-colors">Email: capoconstruction@yahoo.com</a>
              <span>Operacione që nga 2008</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            © {new Date().getFullYear()} {t.footer.rights}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 hover:border-white/20 text-white transition-colors"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
