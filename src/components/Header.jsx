import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Palette, ArrowRight, ShieldCheck } from 'lucide-react';
import PainterButton from './PainterButton';
import { useContactModal } from '../context/ContactModalContext';
import { useLegalModal } from '../context/LegalModalContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openContactModal } = useContactModal();
  const { openLegalModal } = useLegalModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body Scroll sperren, wenn Mobile Menü offen ist
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] py-2.5 sm:py-3.5' 
        : 'bg-white/95 backdrop-blur-md border-b border-slate-200/70 shadow-[0_2px_15px_rgba(0,0,0,0.03)] py-3 sm:py-5'
    }`}>
      <div className="max-w-[1560px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 flex items-center justify-between">
        
        {/* Brand Logo: Meisterin-Logo mit feiner Skalierung auf Mobile & Desktop */}
        <a href="#" className="flex items-center group py-0.5" aria-label="Jessica Meyer Malermeisterin Startseite">
          <img 
            src="/Logo_Jessica_Meyer_cropped.webp" 
            alt="Jessica Meyer Malermeisterin" 
            className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] ${
              scrolled 
                ? 'h-10 sm:h-12 md:h-13' 
                : 'h-12 sm:h-16 md:h-20 lg:h-22'
            }`}
          />
        </a>

        {/* Desktop Navigation: Glasklar & hochkontrastreich lesbar */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8 text-[14.5px] font-semibold text-[#171815]">
          <a href="#fugenlose-baeder" className="hover:text-[#0084C7] transition-colors py-1">
            Fugenlose Bäder
          </a>
          <a href="#airless-technik" className="hover:text-[#0084C7] transition-colors py-1">
            Airless-Finish
          </a>
          <a href="#raumkonzepte" className="hover:text-[#0084C7] transition-colors py-1">
            Wand &amp; Boden
          </a>
          <a href="#farbdesigner" className="inline-flex items-center space-x-1.5 text-[#0084C7] hover:text-blue-900 font-bold transition-colors py-1">
            <Palette className="w-3.5 h-3.5" />
            <span>Raumplaner</span>
          </a>
          <a href="#ueber-mich" className="hover:text-[#0084C7] transition-colors py-1">
            Über mich
          </a>
          <a href="#ablauf" className="hover:text-[#0084C7] transition-colors py-1">
            Ablauf
          </a>
        </nav>

        {/* Right Action Cluster: Telefonnummer + Schicker Hero-Button im kompakten Header-Format */}
        <div className="hidden sm:flex items-center space-x-3 md:space-x-5">
          <a 
            href="tel:015129585277" 
            className="flex items-center space-x-2 text-[14px] font-semibold text-[#171815] hover:text-[#0084C7] transition-colors px-2 py-1.5 rounded-lg"
          >
            <Phone className="w-4 h-4 text-[#0084C7]" strokeWidth={2.2} />
            <span>01512 9585277</span>
          </a>

          <PainterButton href="#kontakt" size="sm">
            Projekt anfragen
          </PainterButton>
        </div>

        {/* Mobile Header Right (Phone + Menu) */}
        <div className="lg:hidden flex items-center space-x-1">
          <a 
            href="tel:015129585277" 
            className="w-10 h-10 flex items-center justify-center text-[#171815] hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Telefonisch anrufen: 01512 9585277"
          >
            <Phone className="w-5 h-5 text-[#0084C7]" strokeWidth={2.2} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-[#171815] hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer mit sanfter Animation & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full h-[calc(100vh-100%)] z-50">
            {/* Abgedunkelter Hintergrund */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs top-[60px]"
            />

            {/* Menükarte */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white border-b border-slate-200 px-6 py-6 shadow-2xl max-h-[82vh] overflow-y-auto space-y-5"
            >
              {/* Navigation Items */}
              <nav className="flex flex-col space-y-1 text-base font-semibold text-[#171815]">
                <a 
                  href="#fugenlose-baeder" 
                  onClick={handleNavClick}
                  className="py-2.5 px-3 rounded-xl hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>Fugenlose Bäder</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
                <a 
                  href="#airless-technik" 
                  onClick={handleNavClick}
                  className="py-2.5 px-3 rounded-xl hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>Airless-Finish &amp; Q4</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
                <a 
                  href="#raumkonzepte" 
                  onClick={handleNavClick}
                  className="py-2.5 px-3 rounded-xl hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>Wand- &amp; Bodenkonzepte</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
                <a 
                  href="#farbdesigner" 
                  onClick={handleNavClick}
                  className="py-2.5 px-3 rounded-xl bg-blue-50/60 text-[#0084C7] flex items-center justify-between font-bold"
                >
                  <span className="flex items-center space-x-2">
                    <Palette className="w-4 h-4" />
                    <span>Brillux Raum- &amp; Farbplaner</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#0084C7]" />
                </a>
                <a 
                  href="#ueber-mich" 
                  onClick={handleNavClick}
                  className="py-2.5 px-3 rounded-xl hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>Über Malermeisterin Jessica Meyer</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
                <a 
                  href="#ablauf" 
                  onClick={handleNavClick}
                  className="py-2.5 px-3 rounded-xl hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>Der 4-Schritte Ablauf</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              </nav>
              
              {/* Call to Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
                <a 
                  href="tel:015129585277" 
                  className="flex items-center justify-center space-x-2.5 py-3.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl font-bold text-[#171815] text-sm"
                >
                  <Phone className="w-4 h-4 text-[#0084C7]" />
                  <span>01512 9585277 (Direkter Anruf)</span>
                </a>

                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openContactModal();
                  }}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#0084C7] to-[#026DAA] text-white font-headline font-bold text-sm shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Projekt kostenfrei anfragen</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Legal Links im Mobile Drawer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-center space-x-4 text-xs text-slate-400">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openLegalModal('impressum');
                  }}
                  className="hover:text-slate-700 py-1"
                >
                  Impressum
                </button>
                <span>·</span>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openLegalModal('datenschutz');
                  }}
                  className="hover:text-slate-700 py-1"
                >
                  Datenschutz
                </button>
                <span>·</span>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openLegalModal('barrierefreiheit');
                  }}
                  className="hover:text-slate-700 py-1"
                >
                  Barrierefreiheit
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
