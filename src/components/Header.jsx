import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, Palette } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-4' 
        : 'bg-white/85 backdrop-blur-sm border-b border-slate-100 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo / Wordmark in Meister-Blau */}
        <a href="#" className="flex flex-col group">
          <div className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-[#0F294A] group-hover:text-blue-800 transition-colors">
              JESSICA MEYER
            </span>
          </div>
          <span className="text-[11px] font-semibold tracking-[0.22em] text-blue-700 uppercase -mt-0.5">
            Malermeisterin
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-[14px] font-medium text-slate-600">
          <a href="#fugenlose-baeder" className="hover:text-[#0F294A] transition-colors">
            Fugenlose Bäder
          </a>
          <a href="#airless-technik" className="hover:text-[#0F294A] transition-colors">
            Airless-Finish
          </a>
          <a href="#raumkonzepte" className="hover:text-[#0F294A] transition-colors">
            Wand &amp; Boden
          </a>
          <a href="#farbdesigner" className="inline-flex items-center space-x-1.5 text-blue-700 hover:text-blue-900 font-semibold transition-colors">
            <Palette className="w-3.5 h-3.5" />
            <span>Raumplaner</span>
          </a>
          <a href="#ueber-mich" className="hover:text-[#0F294A] transition-colors">
            Über mich
          </a>
          <a href="#ablauf" className="hover:text-[#0F294A] transition-colors">
            Ablauf
          </a>
        </nav>

        {/* Right Action Cluster */}
        <div className="hidden sm:flex items-center space-x-5">
          <a 
            href="tel:015129585277" 
            className="flex items-center space-x-2 text-[14px] font-semibold text-[#0F294A] hover:text-blue-700 transition-colors px-3 py-2 rounded-lg"
          >
            <Phone className="w-4 h-4 text-blue-700" strokeWidth={1.8} />
            <span>01512 9585277</span>
          </a>

          <a 
            href="#kontakt" 
            className="inline-flex items-center space-x-2 bg-[#0F294A] text-white text-[13.5px] font-medium px-5 py-2.5 rounded-lg hover:bg-blue-900 transition-all shadow-sm active:scale-[0.98]"
          >
            <span>Projekt anfragen</span>
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.8} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-3">
          <a 
            href="tel:015129585277" 
            className="sm:hidden p-2 text-[#0F294A] hover:bg-blue-50 rounded-lg"
            aria-label="Anrufen"
          >
            <Phone className="w-5 h-5 text-blue-700" strokeWidth={1.8} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0F294A] hover:bg-slate-100 rounded-lg"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl space-y-4">
          <nav className="flex flex-col space-y-3 text-[16px] font-medium text-slate-700">
            <a 
              href="#fugenlose-baeder" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0F294A]"
            >
              Fugenlose Bäder
            </a>
            <a 
              href="#airless-technik" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0F294A]"
            >
              Airless-Finish
            </a>
            <a 
              href="#raumkonzepte" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0F294A]"
            >
              Wand- &amp; Bodenkonzepte
            </a>
            <a 
              href="#farbdesigner" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-blue-700 font-semibold"
            >
              Brillux Raum- &amp; Farbplaner
            </a>
            <a 
              href="#ueber-mich" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0F294A]"
            >
              Über Jessica Meyer
            </a>
            <a 
              href="#ablauf" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0F294A]"
            >
              Der 4-Schritte Ablauf
            </a>
          </nav>
          
          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
            <a 
              href="tel:015129585277" 
              className="flex items-center justify-center space-x-2 py-3 border border-slate-200 rounded-lg font-semibold text-[#0F294A]"
            >
              <Phone className="w-4 h-4 text-blue-700" />
              <span>01512 9585277</span>
            </a>
            <a 
              href="#kontakt" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 py-3 bg-[#0F294A] text-white rounded-lg font-medium"
            >
              <span>Projekt anfragen</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
