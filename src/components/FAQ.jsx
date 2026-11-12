import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Nehmen Sie auch kleinere Arbeiten an, z. B. nur ein einziges Zimmer oder eine Wand?",
    a: "Ja, ausdrücklich und sehr gerne! Viele große Malerbetriebe nehmen heutzutage nur noch lukrative Großbaustellen an und winken kleinere Aufträge ab. Bei Malermeisterin Jessica Meyer ist jedes Projekt willkommen – vom Anstrich eines einzelnen Zimmers oder Flurs über eine tapezierte Akzentwand bis zur kompletten Altbausanierung. Jede Arbeit wird mit derselben meisterlichen Sorgfalt ausgeführt."
  },
  {
    q: "Was kostet ein fugenloses Badezimmer im Vergleich zu herkömmlichen Fliesen?",
    a: "Ein fugenloses Bad mit Mikrozement liegt preislich in der Regel auf Augenhöhe mit einer hochwertigen Fliesenverlegung im Großformat. Ein riesiger Vorteil: Bei Sanierungen können bestehende Fliesen oft direkt nach entsprechender Grundierung überarbeitet werden – das spart Ihnen aufwendige Stemmarbeiten, tagelangen Bauschutt und spürbare Abrisskosten."
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
    <section className="py-24 md:py-36 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <div className="flex items-center justify-center space-x-2.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0084C7]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" />
            <span className="text-[12.5px] font-headline font-bold tracking-widest text-[#0084C7] uppercase ml-1">
              Häufige Fragen
            </span>
          </div>
          
          <h2 className="font-headline text-[2.1rem] xs:text-3xl sm:text-5xl md:text-5xl font-extrabold tracking-[-0.02em] text-[#171815] leading-[1.2] pb-1.5">
            Transparente Antworten vor Projektstart.
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 mt-3 sm:mt-4 leading-relaxed font-normal">
            Haben Sie weitere Fragen zu Ablauf, Angeboten oder Terminen? Ich berate Sie jederzeit gerne persönlich am Telefon oder direkt vor Ort.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-4.5 sm:py-6">
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0F294A] group-hover:text-blue-800 transition-colors pr-4 sm:pr-6">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-md bg-slate-100 text-blue-700 transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-blue-100' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" strokeWidth={2} />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3 sm:mt-4 pr-2 sm:pr-12 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
