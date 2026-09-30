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
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="bg-[#FBF9F5] border border-neutral-200 rounded-2xl p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column (5 Spalten) */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center space-x-2 text-[12px] font-bold tracking-wider text-neutral-500 uppercase mb-3">
                <Navigation className="w-4 h-4 text-neutral-800" strokeWidth={2} />
                <span>Regionale Nähe</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-tight mb-4">
                In Raddestorf, Petershagen, Minden und Umgebung für Sie da.
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                Als regional verwurzelter Meisterbetrieb sind wir schnell bei Ihnen vor Ort. Kurze Wege garantieren maximale Flexibilität, direkte Ansprechbarkeit und persönliche Begleitung Ihres Bauvorhabens.
              </p>
              <div className="text-xs font-semibold text-neutral-500">
                * Größere Projekte außerhalb dieses 40-km-Radius nach vorheriger Absprache jederzeit möglich.
              </div>
            </div>

            {/* Right Column Grid (7 Spalten) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {locations.map((loc, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-4 sm:p-5 rounded-xl border border-neutral-200 flex items-start space-x-3.5 shadow-sm"
                >
                  <MapPin className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900">
                      {loc.city}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
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
