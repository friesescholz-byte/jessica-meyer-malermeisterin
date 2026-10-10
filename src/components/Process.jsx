import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Compass, PaintRoller, HeartHandshake } from 'lucide-react';
import PainterButton from './PainterButton';

const ease = [0.22, 1, 0.36, 1];

const steps = [
  {
    num: "01",
    color: "#0084C7",
    colorRgb: "0, 132, 199",
    icon: PhoneCall,
    title: "Unverbindlicher Erstkontakt",
    desc: "Rufen Sie mich kurz an oder schildern Sie Ihr Vorhaben in 60 Sekunden über das Anfrageformular. Ich melde mich innerhalb von 24 Stunden persönlich bei Ihnen."
  },
  {
    num: "02",
    color: "#10B981",
    colorRgb: "16, 185, 129",
    icon: Compass,
    title: "Vor-Ort-Besichtigung & Muster",
    desc: "Ich prüfe den Untergrund bei Ihnen vor Ort, bringe echte Material- und Farbmuster mit und berate Sie transparent zu den besten Lösungen zum garantierten Festpreis."
  },
  {
    num: "03",
    color: "#F59E0B",
    colorRgb: "245, 158, 11",
    icon: PaintRoller,
    title: "Saubere & termintreue Ausführung",
    desc: "Zum vereinbarten Termin decken wir Böden und Möbel sorgfältig ab und führen alle Spachtel-, Spritz- und Malerarbeiten staubarm und zügig durch."
  },
  {
    num: "04",
    color: "#E11D48",
    colorRgb: "225, 29, 72",
    icon: HeartHandshake,
    title: "Gemeinsame Abnahme & Übergabe",
    desc: "Wir gehen alle Flächen und Details gemeinsam durch. Erst wenn Sie rundum begeistert von Ihrem neuen Wohngefühl sind, ist meine Arbeit getan."
  }
];

export default function Process() {
  return (
    <section 
      id="ablauf" 
      className="relative py-24 md:py-36 bg-fixed bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: `url('/jessica-meyer-van-baustelle-hintergrund.webp')`
      }}
    >
      {/* Edler Lichtschleier: Lässt Jessica & den Meister-Van authentisch durchscheinen, sichert perfekte Lesbarkeit */}
      <div className="absolute inset-0 bg-[#FFFFFF]/85 backdrop-blur-[1px]" />

      {/* Sanfter Farbverlauf oben: Aus Über-Mich (#FFFFFF) nahtlos ohne harten Cut ins Hintergrundbild */}
      <div className="absolute top-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF]/85 to-transparent pointer-events-none z-10" />

      {/* Sanfter Farbverlauf unten: Aus dem Hintergrundbild nahtlos in die FAQ-Sektion (#FFFFFF) */}
      <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/85 to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-[1560px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center space-x-2.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0084C7]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" />
            <span className="text-[12.5px] font-headline font-bold tracking-widest text-[#0084C7] uppercase ml-1.5">
              Transparenter Ablauf
            </span>
          </div>

          <h2 className="font-headline text-[2.1rem] xs:text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.02em] text-[#171815] leading-[1.2] pb-1.5">
            In 4 einfachen Schritten zu Ihrem neuen Wohngefühl.
          </h2>

          <p className="text-base sm:text-xl text-slate-700 mt-4 sm:mt-6 leading-relaxed font-normal max-w-3xl">
            Keine Überraschungen, keine versteckten Kosten. Wir garantieren Ihnen einen strukturierten, verlässlichen und sauberen Renovierungsablauf.
          </p>
        </div>

        {/* 4 Process Cards mit 3D-Tilt Icon Mouse-Over */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white/95 backdrop-blur-md p-6 sm:p-8 md:p-9 rounded-2xl md:rounded-3xl border border-slate-200/90 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] transition-all duration-400 hover:-translate-y-2 relative group overflow-hidden cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease }}
                style={{ perspective: 600 }}
              >
                {/* Farbstreifen oben mit Glow bei Hover */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5 group-hover:h-2 transition-all duration-300"
                  style={{ backgroundColor: step.color }}
                />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    {/* Schritt-Nummer */}
                    <span 
                      className="font-headline font-extrabold text-3xl sm:text-4xl tracking-tight transition-transform duration-300 group-hover:scale-105"
                      style={{ color: step.color }}
                    >
                      {step.num}
                    </span>
                    
                    {/* Icon Box mit 3D-Drehung & voller Farbe bei Mouseover */}
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-400 ease-out transform group-hover:scale-115 group-hover:-rotate-12 group-hover:-translate-y-1 shadow-xs border"
                      style={{ 
                        transformStyle: 'preserve-3d',
                        backgroundColor: `${step.color}15`, 
                        borderColor: `${step.color}30`,
                        color: step.color 
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = step.color;
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.boxShadow = `0 10px 25px -4px rgba(${step.colorRgb}, 0.5)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = `${step.color}15`;
                        e.currentTarget.style.color = step.color;
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" strokeWidth={2.2} />
                    </div>
                  </div>

                  <h3 className="font-headline text-xl sm:text-[22px] font-bold text-[#171815] mb-3.5 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-[14.5px] text-slate-700 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dezent platzierter CTA-Abschluss für den Ablauf */}
        <div className="mt-14 sm:mt-16 text-center">
          <p className="text-sm sm:text-base font-medium text-slate-700 mb-5">
            Bereit für den ersten Schritt? Ich berate Sie unverbindlich und kostenfrei.
          </p>
          <PainterButton href="#kontakt">
            Schritt 1 starten – Projekt anfragen
          </PainterButton>
        </div>

      </div>
    </section>
  );
}
