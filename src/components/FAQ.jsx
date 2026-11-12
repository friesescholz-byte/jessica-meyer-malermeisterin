import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, MessageSquare } from 'lucide-react';

const faqs = [
  {
    q: "Nehmen Sie auch kleinere Arbeiten an, z. B. nur ein einziges Zimmer oder eine Wand?",
    a: "Ja, ausdrücklich und sehr gerne! Viele Betriebe konzentrieren sich heute vorrangig auf Großbaustellen. Bei mir ist jedes Projekt willkommen – vom Anstrich eines einzelnen Zimmers oder Flurs über eine tapezierte Akzentwand bis zur kompletten Altbausanierung. Jede Arbeit wird mit derselben meisterlichen Sorgfalt ausgeführt."
  },
  {
    q: "Was kostet ein fugenloses Badezimmer im Vergleich zu herkömmlichen Fliesen?",
    a: "Ein fugenloses Bad mit Mikrozement liegt preislich in der Regel auf Augenhöhe mit einer hochwertigen Fliesenverlegung im Großformat. Ein riesiger Vorteil: Bei Sanierungen können bestehende Fliesen oft direkt nach fachgerechter Grundierung überarbeitet werden – das spart Ihnen aufwendige Stemmarbeiten, tagelangen Bauschutt und spürbare Abrisskosten."
  },
  {
    q: "Bieten Sie auch Fassadendämmung (WDVS) an?",
    a: "Nein, bewusst nicht. Wir konzentrieren uns im Außenbereich rein auf fachgerechte, langlebige Fassadenanstriche und wetterbeständige Holzschutzlasuren für Dachüberstände, Giebel und Holzverkleidungen. Reine Dämmarbeiten (WDVS) führen wir nicht durch."
  },
  {
    q: "Kann die Airless-Spritztechnik auch in einem bewohnten Haus genutzt werden?",
    a: "Ja, absolut. Wir arbeiten mit professionellen Staubschutz- und Abdecksystemen. Dank moderner Niederdruck-Düsentechnologie (HEA) entsteht kaum Sprühnebel. Das Verfahren ist nicht nur sauber, sondern spart Ihnen tagelanges Renovierungschaos, da Flächen in Rekordzeit fertiggestellt werden."
  },
  {
    q: "Muss ich für die Erstberatung und Vor-Ort-Besichtigung etwas bezahlen?",
    a: "Nein. Das erste persönliche Gespräch bei Ihnen vor Ort im Umkreis von ca. 40 km (Raddestorf, Petershagen, Minden und Umgebung) inklusive Untergrundprüfung und Musterberatung ist für Sie zu 100 % unverbindlich und kostenfrei."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="flex items-center justify-center space-x-2.5 mb-3 sm:mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0084C7]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" />
            <span className="text-[12px] font-headline font-bold tracking-widest text-[#0084C7] uppercase ml-1">
              Häufige Fragen
            </span>
          </div>
          
          <h2 className="font-headline text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171815] leading-[1.18] pb-1">
            Transparente Antworten vor Projektstart.
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 mt-3 sm:mt-4 leading-relaxed font-normal">
            Häufige Fragen zu Ablauf, Ausführung und Vor-Ort-Beratung. Ich berate Sie jederzeit auch gerne direkt persönlich.
          </p>
        </div>

        {/* Mobile-optimierte Accordion-Cards */}
        <div className="space-y-3 sm:space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-slate-300 shadow-[0_4px_20px_rgba(0,0,0,0.04)] ring-1 ring-slate-900/5' 
                    : 'bg-[#FBF9F5]/70 hover:bg-[#FBF9F5] border-slate-200/90'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-4 sm:p-5 md:p-6 text-left flex items-start justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-[15px] sm:text-[17px] font-bold leading-snug transition-colors pr-1 ${
                    isOpen ? 'text-[#0084C7]' : 'text-[#171815]'
                  }`}>
                    {faq.q}
                  </span>
                  
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
                    isOpen 
                      ? 'rotate-180 bg-[#0084C7]/10 text-[#0084C7]' 
                      : 'bg-white border border-slate-200/80 text-slate-500 shadow-2xs'
                  }`}>
                    <ChevronDown className="w-4 h-4" strokeWidth={2.4} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0 text-[13.5px] sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                        <div className="pt-3 border-t border-slate-100">
                          {faq.a}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Mobiler Direktanruf-Hinweis */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-5 rounded-2xl bg-[#FBF9F5] border border-[#EBE6DD] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <div className="text-xs sm:text-sm text-slate-600">
            <span className="font-bold text-[#171815] block sm:inline mr-1">Noch eine Frage offen?</span>
            Rufen Sie mich einfach kurz an oder schreiben Sie mir per WhatsApp.
          </div>
          <a
            href="tel:015129585277"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-xs sm:text-sm font-bold text-[#171815] hover:text-[#0084C7] shadow-2xs transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#0084C7]" />
            <span>01512 9585277</span>
          </a>
        </div>

      </div>
    </section>
  );
}
