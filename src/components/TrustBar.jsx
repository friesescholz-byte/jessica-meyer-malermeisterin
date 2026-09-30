import React from 'react';
import { Home, UserCheck, Droplets, MapPin } from 'lucide-react';

const pillars = [
  {
    icon: Home,
    title: "Groß & Klein willkommen",
    desc: "Vom Fluranstrich bis zum Neubau – kein Auftrag ist zu klein"
  },
  {
    icon: UserCheck,
    title: "100 % Chefin vor Ort",
    desc: "Feste Ansprechpartnerin, keine anonymen Kolonnen"
  },
  {
    icon: Droplets,
    title: "Fugenlose Bäder & Airless",
    desc: "Moderne Wohntrends & spurenlos glatte Oberflächen"
  },
  {
    icon: MapPin,
    title: "Regional & Verlässlich",
    desc: "Raddestorf, Petershagen, Minden & 40 km Umkreis"
  }
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`py-4 sm:py-2 ${idx === 0 ? 'sm:pl-0 sm:pr-6' : idx === 3 ? 'sm:pl-6 sm:pr-0' : 'sm:px-6'} flex items-start space-x-3.5`}
              >
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 shrink-0 text-blue-700 shadow-2xs">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#0F294A] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[12.5px] text-slate-500 leading-snug mt-1">
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
