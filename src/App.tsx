import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { FullscreenStatement } from './components/FullscreenStatement';
import { PartnersSection } from './components/PartnersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OpeningScreen } from './components/OpeningScreen';
import { CareersSection } from './components/CareersSection';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isCareersVisible, setIsCareersVisible] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Apple-like Lenis smooth scroll inertia
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'services', 'partners', 'careers', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const el = document.getElementById('careers');
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsCareersVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(element, { offset: 0, duration: 1.4 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F3F4F6] selection:bg-neutral-800 selection:text-white relative">
      {/* Cinematic Opening Intro Curtain */}
      <OpeningScreen />

      {/* Translucent Apple Floating Navigation */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Page Layout */}
      <main>
        <Hero onNavigate={scrollToSection} />
        <AboutSection onNavigate={scrollToSection} />
        <ProjectsSection onNavigateContact={() => scrollToSection('contact')} />
        <ServicesSection onNavigateContact={() => scrollToSection('contact')} />
        <PartnersSection />
        <FullscreenStatement />
        <CareersSection isCareersVisible={isCareersVisible} />
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default App;
