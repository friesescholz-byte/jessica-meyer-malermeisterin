import React from 'react';
import { Home, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

const pillars = [
  {
    icon: Home,
    title: "Jede Projektgröße willkommen",
    desc: "Vom einzelnen Zimmer oder Flur bis zum anspruchsvollen Neubau"
  },
  {
    icon: ShieldCheck,
    title: "Transparente Angebote",
    desc: "Ehrliche Empfehlungen & verlässliche Absprachen ohne Fachchinesisch"
  },
  {
    icon: Sparkles,
    title: "Sorgfältige Ausführung",
    desc: "Staubarmes Schleifen, penibles Abkleben & rücksichtsvolles Arbeiten"
  },
  {
    icon: MapPin,
    title: "Regionale Nähe",
    desc: "Glissen, Raddestorf, Minden, Petershagen & ca. 40 km Umkreis"
  }
];

export default function TrustBar() {
  return (
    <section className="border-b border-[#E7E2D8] bg-[#F6F3EC] py-7">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E2DDD3]">
          
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`py-4 sm:py-1 ${idx === 0 ? 'sm:pl-0 sm:pr-6' : idx === 3 ? 'sm:pl-6 sm:pr-0' : 'sm:px-6'} flex items-start space-x-3.5`}
              >
                <div className="p-2 rounded bg-white/80 border border-[#DCD6C9] shrink-0 text-[#1E3A8A] shadow-2xs">
                  <Icon className="w-4 h-4" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-[13.5px] font-bold text-[#0F243A] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-[#64748B] leading-snug mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
