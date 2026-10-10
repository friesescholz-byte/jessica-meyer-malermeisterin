import React, { createContext, useContext, useState, useEffect } from 'react';

const LegalModalContext = createContext();

export function LegalModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('impressum'); // 'impressum' | 'datenschutz' | 'barrierefreiheit'

  const openLegalModal = (tab = 'impressum') => {
    setActiveTab(tab);
    setIsOpen(true);
  };

  const closeLegalModal = () => {
    setIsOpen(false);
  };

  // Fängt globale Klicks auf Links zu impressum.html, datenschutz.html, barrierefreiheit.html ab,
  // sodass sich das elegante Fenster öffnet, ohne die Seite neu zu laden!
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a[href*="impressum"], a[href*="datenschutz"], a[href*="barrierefreiheit"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        // Wenn es ein interner Link zu den rechtlichen Seiten ist
        if (href && (href.includes('impressum') || href.includes('datenschutz') || href.includes('barrierefreiheit'))) {
          e.preventDefault();
          if (href.includes('impressum')) {
            openLegalModal('impressum');
          } else if (href.includes('datenschutz')) {
            openLegalModal('datenschutz');
          } else if (href.includes('barrierefreiheit')) {
            openLegalModal('barrierefreiheit');
          }
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <LegalModalContext.Provider value={{ isOpen, activeTab, setActiveTab, openLegalModal, closeLegalModal }}>
      {children}
    </LegalModalContext.Provider>
  );
}

export const useLegalModal = () => useContext(LegalModalContext);
