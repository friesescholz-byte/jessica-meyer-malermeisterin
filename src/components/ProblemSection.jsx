import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

const problemPoints = [
  {
    color: "#0084C7",
    frust: "„Für ein einzelnes Zimmer kommen wir nicht raus.“",
    solution: "Bei mir ist jedes Projekt willkommen: Ob einzelne Akzentwand, Flur oder Neubau – immer mit gleicher Meisterpräzision."
  },
  {
    color: "#10B981",
    frust: "Baustellen-Chaos und feiner Schleifstaub in allen Möbeln.",
    solution: "Staubarmes Schleifen mit Direktabsaugung, penibles Abkleben aller Böden und rücksichtsvolles Arbeiten im bewohnten Zuhause."
  },
  {
    color: "#E11D48",
    frust: "Streifen an der Decke und schimmlige Zementfugen im Bad.",
    solution: "Fugenlose Mikrozement-Bäder ohne Schimmelfugen und modernste Airless-Spritztechnik für spurenlose Oberflächen in Q4-Güte."
  }
];

export default function ProblemSection() {
  return (
    <section 
      className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 bg-fixed bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: `url('https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jessica%20Meyer%20Malermeisterin/hintergrund-mikrozement-architektur.webp')`
      }}
    >
      {/* Edler Lichtschleier: Lässt die Architektur tangibel durchscheinen, sichert perfekte Lesbarkeit */}
      <div className="absolute inset-0 bg-[#FFFFFF]/85 backdrop-blur-[2px]" />

      {/* Sanfter Farbverlauf oben: Blendendes Weiß aus der Hero-Sektion verläuft nahtlos ohne harten Cut in das Hintergrundbild */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 md:h-40 bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF]/85 to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-[1560px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
        
        {/* Section Header: Kompakt, fokussiert & prägnant */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0084C7]" />
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
            <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
            <span className="text-[11.5px] font-headline font-bold tracking-widest text-[#0084C7] uppercase ml-1">
              Identifikation &amp; Handwerksehre
            </span>
          </div>

          <h2 className="font-headline text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold tracking-[-0.02em] text-[#171815] leading-[1.22] pb-1">
            Kennen Sie den Frust über abgewiesene Kleinaufträge und Baustellenstaub?
          </h2>

          <p className="text-sm sm:text-base text-slate-700 mt-3 leading-relaxed font-normal">
            Renovieren sollte Freude machen – nicht die Nerven strapazieren. Ich schließe die Lücke im Handwerk: Volle Hingabe für kleine Zimmer und anspruchsvolle Neubauten.
          </p>
        </div>

        {/* 3 Edle Problem-Lösungs-Cards: Schwebend, dezent, mit sanftem Farb-Curtain Hover von oben */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {problemPoints.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative group rounded-2xl md:rounded-3xl overflow-hidden bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] transition-all duration-400 hover:-translate-y-1.5 flex flex-col justify-between p-5 sm:p-7 md:p-8 cursor-default"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease }}
            >
              {/* Sanfter Farb-Vorhang: Fährt von oben nach unten ein, wenn man über die Kachel hovert */}
              <div 
                className="absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0 pointer-events-none"
                style={{ backgroundColor: item.color }}
              />

              {/* Dezenter 4px Farbbalken oben: Bereits vor dem Hover als feine Nuance sichtbar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5 z-10 transition-opacity duration-300"
                style={{ backgroundColor: item.color }}
              />

              {/* Inhalt (auf z-10 für perfekten Kontrast vor & während des Hovers) */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                
                {/* Frust / Problem */}
                <div className="mb-5 sm:mb-6 pt-1">
                  <div className="flex items-start space-x-3 sm:space-x-3.5">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white/20 group-hover:border-white/30 transition-colors duration-300">
                      <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500 group-hover:text-white transition-colors duration-300" strokeWidth={2.2} />
                    </span>
                    <p className="font-headline text-base sm:text-lg lg:text-[1.15rem] font-bold text-[#171815] group-hover:text-white transition-colors duration-300 leading-snug">
                      {item.frust}
                    </p>
                  </div>
                </div>

                {/* Die Meisterlösung */}
                <div className="pt-4 border-t border-slate-200/80 group-hover:border-white/20 transition-colors duration-300 flex items-start space-x-3 sm:space-x-3.5 bg-slate-50/70 group-hover:bg-white/10 -mx-5 -mb-5 sm:-mx-7 sm:-mb-7 md:-mx-8 md:-mb-8 p-5 sm:p-7 md:p-8 rounded-b-2xl md:rounded-b-3xl">
                  <span 
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white shadow-xs group-hover:bg-white group-hover:text-slate-900 transition-all duration-300"
                    style={{ backgroundColor: item.color }}
                  >
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.6} />
                  </span>
                  <div>
                    <span className="text-[11px] font-headline font-bold uppercase tracking-wider text-slate-500 group-hover:text-white/80 block mb-1 transition-colors duration-300">
                      Meine Meisterlösung:
                    </span>
                    <p className="text-[13px] sm:text-[14.5px] text-slate-700 group-hover:text-white/95 leading-relaxed font-normal transition-colors duration-300">
                      {item.solution}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Kurze, vertrauensbildende Abschluss-Garantiezeile */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-10 text-xs sm:text-sm font-medium text-slate-700">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" strokeWidth={2.2} />
            <span>100 % Chefin persönlich vor Ort</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" strokeWidth={2.2} />
            <span>Verbindliche Festpreis-Garantie</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" strokeWidth={2.2} />
            <span>Staubarme Schleiftechnik &amp; penibles Abkleben</span>
          </div>
        </div>

      </div>

      {/* Spezieller, nahtloser Übergang zum nächsten Abschnitt (#FAF8F5 von Showcases) mit dezenter Farbnote */}
      <div className="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg 
          viewBox="0 0 1440 84" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative block w-full h-12 sm:h-16 md:h-20"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Hauchzarter, eleganter 4-Farben-Verlauf für die Kurvenkante */}
            <linearGradient id="transitionCurveColor" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0084C7" stopOpacity="0.4" />
              <stop offset="35%" stopColor="#10B981" stopOpacity="0.45" />
              <stop offset="68%" stopColor="#F59E0B" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#E11D48" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Die solide, bündige Kurve in #FAF8F5 (schließt 100% sauber an Showcases an) */}
          <path 
            d="M0,32 C380,76 740,12 1080,52 C1260,72 1380,44 1440,32 L1440,84 L0,84 Z" 
            fill="#FAF8F5"
          />

          {/* Dezente, hauchfeine Farbkante entlang des Kurvenschwungs */}
          <path 
            d="M0,32 C380,76 740,12 1080,52 C1260,72 1380,44 1440,32" 
            stroke="url(#transitionCurveColor)" 
            strokeWidth="1.5" 
            fill="none"
          />
        </svg>
      </div>

    </section>
  );
}
