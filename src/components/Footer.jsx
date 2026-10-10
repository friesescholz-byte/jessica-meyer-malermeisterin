import React from 'react';
import { Phone, MapPin, Mail, ArrowUp, Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { useLegalModal } from '../context/LegalModalContext';

const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJwc0wmdvJUKcRzEPGk8q3lZo";

export default function Footer() {
  const { openLegalModal } = useLegalModal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFFFF] border-t border-slate-200/90 pt-12 sm:pt-16 pb-10 sm:pb-12 text-slate-600 relative overflow-hidden">
      
      {/* Sanfter Marken-Lichtschimmer im Hintergrund */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0084C7]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1560px] 2xl:max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 relative z-10">
        
        {/* Top Grid: 4 Spalten Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-slate-100">
          
          {/* Spalte 1: Brand Info & Offizielles Logo (4 Spalten) */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5">
            <a href="#" className="inline-block">
              <img 
                src="/Logo_Jessica_Meyer_cropped.webp" 
                alt="Jessica Meyer Malermeisterin" 
                className="h-11 sm:h-14 w-auto object-contain"
              />
            </a>
            
            <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-sm">
              Ihr eingetragener Meisterbetrieb für fugenlose Bäder, moderne Airless-Spritztechnik, exklusive Wand- und Raumkonzepte sowie hochwertige Bodenbeläge in Raddestorf, Petershagen, Minden und Region.
            </p>

            <div className="pt-1 flex items-center space-x-2 text-xs font-medium text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Handwerkskammer Hannover (Meisterprüfung 2024)</span>
            </div>
          </div>

          {/* Spalte 2: Google Bewertungen Highlight Card (3 Spalten) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Kundenzufriedenheit
            </h4>

            {/* Coole, klickbare Google Rezensions-Karte */}
            <a 
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 sm:p-4.5 rounded-2xl bg-white border border-slate-200 hover:border-[#0084C7] shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              {/* Google Brand Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {/* Google G Logo SVG */}
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z" />
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z" />
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z" />
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z" />
                  </svg>
                  <span className="text-xs font-bold text-slate-800">Google Rezensionen</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0084C7] transition-colors" />
              </div>

              {/* 5 Sterne */}
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-amber-400 text-amber-400" 
                    strokeWidth={0} 
                  />
                ))}
                <span className="text-sm font-bold text-slate-900 ml-1.5">5,0</span>
              </div>

              <p className="text-[12px] text-slate-500 leading-snug">
                100 % Weiterempfehlung &amp; meisterliche Bewertungen.
              </p>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11.5px] font-semibold text-[#0084C7] group-hover:underline">
                <span>Jetzt bewerten oder lesen</span>
                <span>→</span>
              </div>
            </a>
          </div>

          {/* Spalte 3: Leistungsbereiche Navigation (2 Spalten) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Leistungen
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#fugenlose-baeder" className="hover:text-[#0084C7] transition-colors inline-block py-0.5">
                  Fugenlose Bäder
                </a>
              </li>
              <li>
                <a href="#airless-technik" className="hover:text-[#0084C7] transition-colors inline-block py-0.5">
                  Airless-Spritztechnik
                </a>
              </li>
              <li>
                <a href="#raumkonzepte" className="hover:text-[#0084C7] transition-colors inline-block py-0.5">
                  Wandgestaltung &amp; Tapeten
                </a>
              </li>
              <li>
                <a href="#farbdesigner" className="hover:text-[#0084C7] transition-colors inline-block py-0.5">
                  Brillux Raumplaner
                </a>
              </li>
              <li>
                <a href="#bodenbelaege" className="hover:text-[#0084C7] transition-colors inline-block py-0.5">
                  Design- &amp; Bodenbeläge
                </a>
              </li>
              <li>
                <a href="#fassadenschutz" className="hover:text-[#0084C7] transition-colors inline-block py-0.5">
                  Fassadenanstrich
                </a>
              </li>
            </ul>
          </div>

          {/* Spalte 4: Kontakt & Standort (3 Spalten) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Kontakt &amp; Standort
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#0084C7] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Glisser Bruch 7<br />
                  31604 Raddestorf (Glissen)
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#0084C7] shrink-0" />
                <a href="tel:015129585277" className="hover:text-[#0084C7] font-bold text-slate-900 transition-colors py-0.5">
                  01512 9585277
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#0084C7] shrink-0" />
                <a href="mailto:info@jessicameyer-malermeisterin.de" className="hover:text-[#0084C7] transition-colors break-all py-0.5">
                  info@jessicameyer-malermeisterin.de
                </a>
              </div>
            </div>
            <div className="pt-2 text-xs text-slate-400">
              Montag – Samstag: 07:30 bis 18:00 Uhr
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Rechtliche Links als Modal-Fenster */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Jessica Meyer · Malermeisterin. Alle Rechte vorbehalten.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button 
              onClick={() => openLegalModal('impressum')}
              className="hover:text-slate-900 transition-colors py-1 cursor-pointer font-medium"
            >
              Impressum
            </button>
            <button 
              onClick={() => openLegalModal('datenschutz')}
              className="hover:text-slate-900 transition-colors py-1 cursor-pointer font-medium"
            >
              Datenschutz
            </button>
            <button 
              onClick={() => openLegalModal('barrierefreiheit')}
              className="hover:text-slate-900 transition-colors py-1 cursor-pointer font-medium"
            >
              Barrierefreiheit
            </button>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-900 transition-colors ml-1 py-1 cursor-pointer"
              aria-label="Nach oben scrollen"
            >
              <span>Nach oben</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
