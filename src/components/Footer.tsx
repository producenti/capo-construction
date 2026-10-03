import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
  isFooterVisible?: boolean;
}

export const Footer: React.FC<FooterProps> = () => {
  const { t } = useLanguage();

  return (
    <footer
      id="footer"
      className="relative bg-white border-t border-black/10 py-8 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center text-xs font-mono text-neutral-600">
        <div>
          © 2026 {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};
