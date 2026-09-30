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
    <section className="py-24 md:py-32 bg-[#FFFFFF] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[12px] font-bold tracking-[0.2em] text-blue-700 uppercase">
            Häufige Fragen
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F294A] mt-3 leading-tight">
            Transparente Antworten vor Projektstart.
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Haben Sie weitere Fragen? Wir beraten Sie jederzeit gerne persönlich am Telefon oder direkt vor Ort.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5 sm:py-6">
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0F294A] group-hover:text-blue-800 transition-colors pr-6">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-md bg-slate-100 text-blue-700 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-blue-100' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" strokeWidth={2} />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-12 text-sm sm:text-base text-slate-600 leading-relaxed">
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
