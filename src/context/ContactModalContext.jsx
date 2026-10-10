import React, { createContext, useContext, useState, useEffect } from 'react';

const ContactModalContext = createContext();

export function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetSubject, setPresetSubject] = useState('');

  const openContactModal = (subject = '') => {
    setPresetSubject(subject);
    setIsOpen(true);
  };

  const closeContactModal = () => {
    setIsOpen(false);
  };

  // Fängt alle Klicks auf Buttons / Links mit href="#kontakt" global ab,
  // sodass sich sofort das edle Fenster (Modal) öffnet!
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a[href="#kontakt"]');
      if (anchor) {
        e.preventDefault();
        const subject = anchor.getAttribute('data-subject') || '';
        openContactModal(subject);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <ContactModalContext.Provider value={{ isOpen, openContactModal, closeContactModal, presetSubject }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export const useContactModal = () => useContext(ContactModalContext);
