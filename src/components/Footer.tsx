import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
  isFooterVisible?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isFooterVisible = false }) => {
  const { t } = useLanguage();
  const light = isFooterVisible;

  return (
    <footer
      id="footer"
      className="relative border-t py-8 px-4 sm:px-8"
      style={{
        backgroundColor: light ? '#FFFFFF' : '#050507',
        borderColor: light ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.1)',
        transition: 'background-color 700ms ease, border-color 700ms ease',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center text-xs font-mono">
        <div
          style={{
            color: light ? '#4B5563' : 'rgba(163,163,163,1)',
            transition: 'color 700ms ease',
          }}
        >
          © 2026 {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};
