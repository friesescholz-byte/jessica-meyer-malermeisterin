import React from 'react';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFFFF] border-t border-neutral-200 pt-16 pb-12 text-neutral-600">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-neutral-100">
          
          {/* Brand Info (5 Spalten) */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="text-xl font-bold tracking-tight text-neutral-900 block">
                JESSICA MEYER
              </span>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-neutral-400 uppercase">
                Malermeisterin
              </span>
            </div>
            <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
              Ihr Meisterbetrieb für fugenlose Bäder, moderne Airless-Spritztechnik, exklusive Wand- und Raumkonzepte sowie hochwertige Bodenbeläge in Raddestorf, Petershagen, Minden und Umgebung.
            </p>
            <div className="text-xs text-neutral-500 pt-2">
              Eingetragener Meisterbetrieb der Handwerkskammer Hannover
            </div>
          </div>

          {/* Quick Links (3 Spalten) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
              Leistungsbereiche
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#fugenlose-baeder" className="hover:text-neutral-900 transition-colors">
                  Fugenlose Bäder (Mikrozement)
                </a>
              </li>
              <li>
                <a href="#airless-technik" className="hover:text-neutral-900 transition-colors">
                  Airless-Spritztechnik
                </a>
              </li>
              <li>
                <a href="#raumkonzepte" className="hover:text-neutral-900 transition-colors">
                  Wandgestaltung &amp; Tapeten
                </a>
              </li>
              <li>
                <a href="#bodenbelaege" className="hover:text-neutral-900 transition-colors">
                  Design- &amp; Parkettböden
                </a>
              </li>
              <li>
                <a href="#fassadenschutz" className="hover:text-neutral-900 transition-colors">
                  Fassadenschutz &amp; Holzschutz
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 Spalten) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
              Kontakt &amp; Standort
            </h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                <span>Glisser Bruch 7, 31604 Raddestorf (Glissen)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-neutral-800 shrink-0" />
                <a href="tel:015129585277" className="hover:text-neutral-900 font-medium">
                  01512 9585277
                </a>
              </div>
            </div>
            <div className="pt-2 text-xs text-neutral-500">
              Erreichbar: Montag – Samstag von 07:30 bis 18:00 Uhr
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <div>
            © {new Date().getFullYear()} Jessica Meyer · Malermeisterin. Alle Rechte vorbehalten.
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-neutral-600 transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-neutral-600 transition-colors">
              Datenschutz
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 hover:text-neutral-800 transition-colors ml-4"
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
