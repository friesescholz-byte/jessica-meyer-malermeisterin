import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const locations = [
  { city: "Raddestorf & Glissen", note: "Heimatstandort & Werkstatt" },
  { city: "Petershagen & Lahde", note: "Schnelle Anfahrt im gesamten Stadtgebiet" },
  { city: "Minden & Porta Westfalica", note: "Regelmäßige Projekte in Stadt & Umland" },
  { city: "Uchte & Warmsen", note: "Samtgemeinde Uchte & angrenzende Orte" },
  { city: "Stolzenau & Nienburg (Weser)", note: "Mittelweser-Region" },
  { city: "Rahden, Espelkamp & Stemwede", note: "Kreis Minden-Lübbecke" }
];

export default function ServiceArea() {
  return (
    <section className="py-24 md:py-36 bg-[#FFFFFF] border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-[1560px] 2xl:max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        
        <div className="bg-[#FAF8F5] border border-[#EBE6DD] rounded-2xl md:rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column (5 Spalten) */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center space-x-2 text-[12px] font-mono font-bold tracking-wider text-[#0084C7] uppercase mb-4">
                <Navigation className="w-4 h-4 text-[#0084C7]" strokeWidth={2.4} />
                <span>Regionale Nähe &amp; Flexibilität</span>
              </div>
              
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171815] leading-[1.2] pb-1 mb-4">
                In Raddestorf, Petershagen, Minden und Region für Sie da.
              </h2>
              
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                Als regional verwurzelter Meisterbetrieb bin ich schnell bei Ihnen vor Ort. Kurze Wege garantieren maximale Flexibilität, direkte persönliche Erreichbarkeit und zuverlässige Begleitung Ihres Bauvorhabens.
              </p>
              
              <div className="text-xs font-mono text-slate-500">
                * Größere Projekte außerhalb dieses 40-km-Radius nach vorheriger Absprache jederzeit möglich.
              </div>
            </div>

            {/* Right Column Grid (7 Spalten) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {locations.map((loc, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-[#EBE6DD] flex items-start space-x-4 shadow-xs hover:border-[#0084C7] hover:shadow-sm transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0084C7]/10 flex items-center justify-center shrink-0 text-[#0084C7]">
                    <MapPin className="w-4 h-4" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="font-headline text-base sm:text-[17px] font-bold text-[#171815]">
                      {loc.city}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                      {loc.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
