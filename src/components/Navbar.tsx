import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Check if cursor is at the top part of the screen (top bar area)
      if (e.clientY <= 85) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t.nav.about, href: 'about' },
    { name: t.nav.projects, href: 'projects' },
    { name: t.nav.services, href: 'services' },
    { name: t.nav.partners, href: 'partners' },
    { name: t.nav.contact, href: 'contact' },
  ];

  return (
    <>
      {/* Full-screen Dark Scrim for Mobile Menu (No blur) */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/90 z-40 transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 ${
          isHovered
            ? 'bg-white border-b border-black/10 shadow-lg'
            : isScrolled || mobileMenuOpen
              ? 'bg-[#0A0A0C] border-b border-white/10 shadow-2xl' 
              : 'bg-gradient-to-b from-[#0A0A0C]/95 via-[#0A0A0C]/60 to-transparent border-b border-transparent'
        } ${isScrolled || mobileMenuOpen ? 'py-3 sm:py-3.5' : 'py-4 sm:py-6'}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => {
              onNavigate('hero');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className={`w-11 h-11 rounded-xl p-1 border flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-md overflow-hidden shrink-0 ${
              isHovered ? 'bg-white border-black/15 shadow-sm' : 'bg-white border-white/20'
            }`}>
              <img src="/logo.png" alt="Capo Construction Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className={`font-extrabold tracking-[0.2em] text-sm font-display transition-colors duration-300 ${
                isHovered ? 'text-black group-hover:text-neutral-700' : 'text-white group-hover:text-neutral-300'
              }`}>
                CAPO CONSTRUCTION
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-mono transition-colors duration-300 ${
                isHovered ? 'text-neutral-600' : 'text-neutral-400'
              }`}>
                {t.nav.subtitle}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (No borders for text) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 transition-colors duration-300">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => onNavigate(link.href)}
                className={`py-1 text-xs font-semibold tracking-wider uppercase transition-colors duration-300 ${
                  isHovered
                    ? activeSection === link.href
                      ? 'text-black font-extrabold'
                      : 'text-neutral-600 hover:text-black'
                    : activeSection === link.href
                      ? 'text-white font-extrabold'
                      : 'text-neutral-300 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button & Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Language Toggle Pill (Border preserved) */}
            <div className={`flex items-center p-1 rounded-full text-xs font-mono transition-all duration-300 ${
              isHovered
                ? 'border border-black/25 bg-black/5'
                : 'border border-white/20 bg-black/30'
            }`}>
              <button
                onClick={() => setLang('EN')}
                className={`px-3 py-1 rounded-full transition-all duration-300 ${
                  lang === 'EN'
                    ? isHovered
                      ? 'bg-black text-white font-extrabold shadow-sm'
                      : 'bg-white text-black font-extrabold shadow-md'
                    : isHovered
                      ? 'text-neutral-600 hover:text-black font-medium'
                      : 'text-neutral-400 hover:text-white font-medium'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('AL')}
                className={`px-3 py-1 rounded-full transition-all duration-300 ${
                  lang === 'AL'
                    ? isHovered
                      ? 'bg-black text-white font-extrabold shadow-sm'
                      : 'bg-white text-black font-extrabold shadow-md'
                    : isHovered
                      ? 'text-neutral-600 hover:text-black font-medium'
                      : 'text-neutral-400 hover:text-white font-medium'
                }`}
              >
                AL
              </button>
            </div>

            {/* START A PROJECT Button (Border preserved) */}
            <button
              onClick={() => onNavigate('contact')}
              className={`group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-xs tracking-wider uppercase transition-all duration-300 active:scale-95 ${
                isHovered
                  ? 'bg-black text-white border border-black hover:bg-neutral-800 shadow-md shadow-black/10'
                  : 'bg-white text-black border border-white hover:bg-neutral-200 shadow-lg shadow-white/5'
              }`}
            >
              <span>{t.nav.startProject}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Language Switcher */}
            <div className={`flex items-center p-0.5 rounded-full text-[11px] font-mono transition-colors duration-300 ${
              isHovered ? 'border border-black/25 bg-black/5' : 'border border-white/20 bg-white/10'
            }`}>
              <button
                onClick={() => setLang('EN')}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  lang === 'EN'
                    ? isHovered ? 'bg-black text-white font-bold shadow-sm' : 'bg-white text-black font-bold shadow-sm'
                    : isHovered ? 'text-neutral-600' : 'text-neutral-400'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('AL')}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  lang === 'AL'
                    ? isHovered ? 'bg-black text-white font-bold shadow-sm' : 'bg-white text-black font-bold shadow-sm'
                    : isHovered ? 'text-neutral-600' : 'text-neutral-400'
                }`}
              >
                AL
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-10 h-10 rounded-full flex items-center justify-center focus:outline-none active:scale-95 transition-all duration-300 ${
                isHovered
                  ? 'text-black border border-black/20 bg-black/5 hover:bg-black/10'
                  : 'text-white border border-white/20 bg-white/10 hover:bg-white/15'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-4 top-20 z-50 p-6 rounded-3xl bg-[#101116] border border-white/20 shadow-2xl shadow-black flex flex-col gap-4 pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-300 max-h-[calc(100vh-6rem)] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-neutral-400 uppercase flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-neutral-300" />
                Language / Gjuha
              </span>
              <div className="flex items-center p-1 rounded-full bg-black/60 border border-white/20 text-xs font-mono">
                <button
                  onClick={() => setLang('EN')}
                  className={`px-3 py-1 rounded-full transition-colors ${lang === 'EN' ? 'bg-white text-black font-extrabold shadow-md' : 'text-neutral-400 hover:text-white'}`}
                >
                  ENGLISH (EN)
                </button>
                <button
                  onClick={() => setLang('AL')}
                  className={`px-3 py-1 rounded-full transition-colors ${lang === 'AL' ? 'bg-white text-black font-extrabold shadow-md' : 'text-neutral-400 hover:text-white'}`}
                >
                  SHQIP (AL)
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1 pb-4 border-b border-white/10">
              {navLinks.map((link, idx) => (
                <button
                  key={link.href}
                  onClick={() => {
                    onNavigate(link.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-medium tracking-wide transition-all ${
                    activeSection === link.href
                      ? 'text-white bg-white/15 font-bold shadow-inner'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5 active:bg-white/10'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-neutral-500 font-mono">0{idx + 1}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white text-black font-semibold text-xs tracking-wider uppercase shadow-xl hover:bg-neutral-200 active:scale-[0.98] transition-all"
            >
              <span>{t.nav.startProject}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>
    </>
  );
};
