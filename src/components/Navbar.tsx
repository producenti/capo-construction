import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
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
    { name: t.nav.process, href: 'process' },
    { name: t.nav.partners, href: 'partners' },
    { name: t.nav.contact, href: 'contact' },
  ];

  return (
    <>
      {/* Full-screen Dark Scrim for Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-xl z-40 transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#0A0A0C]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3 sm:py-3.5' 
          : 'bg-gradient-to-b from-[#0A0A0C]/95 via-[#0A0A0C]/60 to-transparent backdrop-blur-[2px] py-4 sm:py-6 border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => {
              onNavigate('hero');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl bg-white p-1 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-md overflow-hidden shrink-0">
              <img src="/logo.png" alt="Capo Construction Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-[0.2em] text-sm text-white font-display group-hover:text-neutral-300 transition-colors">
                CAPO CONSTRUCTION
              </span>
              <span className="text-[10px] text-neutral-400 tracking-widest uppercase font-mono">
                {t.nav.subtitle}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Pill */}
          <nav className={`hidden md:flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-500 ${
            isScrolled 
              ? 'bg-white/10 backdrop-blur-md border border-white/10 shadow-inner' 
              : 'bg-white/5 backdrop-blur-md border border-white/10'
          }`}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => onNavigate(link.href)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-300 rounded-full ${
                  activeSection === link.href
                    ? 'text-white bg-white/20 shadow-inner font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button & Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Language Toggle Pill */}
            <div className="flex items-center p-1 rounded-full glass-card border border-white/15 text-xs font-mono">
              <button
                onClick={() => setLang('EN')}
                className={`px-3 py-1 rounded-full transition-all duration-300 ${
                  lang === 'EN'
                    ? 'bg-white text-black font-extrabold shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('AL')}
                className={`px-3 py-1 rounded-full transition-all duration-300 ${
                  lang === 'AL'
                    ? 'bg-white text-black font-extrabold shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                AL
              </button>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] shadow-lg shadow-white/5 active:scale-95"
            >
              <span>{t.nav.startProject}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Language Switcher */}
            <div className="flex items-center p-0.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-mono">
              <button
                onClick={() => setLang('EN')}
                className={`px-2 py-0.5 rounded-full ${lang === 'EN' ? 'bg-white text-black font-bold shadow-sm' : 'text-neutral-400'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('AL')}
                className={`px-2 py-0.5 rounded-full ${lang === 'AL' ? 'bg-white text-black font-bold shadow-sm' : 'text-neutral-400'}`}
              >
                AL
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white focus:outline-none active:scale-95 transition-transform"
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
