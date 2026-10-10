import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Camera, Sliders, MessageSquareShare } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

const steps = [
  {
    num: "1",
    icon: Camera,
    color: "#E11D48",
    bgSubtle: "bg-rose-500/20 border-rose-400/40 text-rose-200",
    bgFull: "group-hover:bg-[#E11D48] group-hover:border-[#E11D48] group-hover:text-white group-hover:shadow-[0_8px_25px_rgba(225,29,72,0.45)]",
    cardHover: "hover:border-rose-400/40",
    title: "Eigenen Raum fotografieren",
    text: "Laden Sie einfach ein Foto Ihres Wohnzimmers, Flurs oder Bades hoch – oder wählen Sie einen Musterraum."
  },
  {
    num: "2",
    icon: Sliders,
    color: "#F59E0B",
    bgSubtle: "bg-amber-500/20 border-amber-400/40 text-amber-200",
    bgFull: "group-hover:bg-[#F59E0B] group-hover:border-[#F59E0B] group-hover:text-white group-hover:shadow-[0_8px_25px_rgba(245,158,11,0.45)]",
    cardHover: "hover:border-amber-400/40",
    title: "Wunschfarben live testen",
    text: "Dank KI erkennt das Tool Wände und Böden automatisch. Probieren Sie originale Brillux-Farbtöne per Klick aus."
  },
  {
    num: "3",
    icon: MessageSquareShare,
    color: "#10B981",
    bgSubtle: "bg-emerald-500/20 border-emerald-400/40 text-emerald-200",
    bgFull: "group-hover:bg-[#10B981] group-hover:border-[#10B981] group-hover:text-white group-hover:shadow-[0_8px_25px_rgba(16,185,129,0.45)]",
    cardHover: "hover:border-emerald-400/40",
    title: "Direkt mit Jessica besprechen",
    text: "Farbcode notieren oder Vorher-Nachher-Entwurf mitsenden. Zur Vor-Ort-Besichtigung bringe ich die echten Farbmuster mit!"
  }
];

export default function RoomDesigner() {
  // 3D Tilt Hook wie im SF Webdesign Projekt ("Erfolgreiche Zusammenarbeit")
  const tiltCardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, scale: 1 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!tiltCardRef.current) return;
    const rect = tiltCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setTilt({
      x: -((y - cy) / cy) * 9,
      y: ((x - cx) / cx) * 9,
      scale: 1.03
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, scale: 1 });
    setIsHovered(false);
  };

  return (
    <section id="farbdesigner" className="relative pt-24 pb-28 sm:pt-32 sm:pb-36 lg:pt-36 lg:pb-40 bg-gradient-to-br from-[#0084C7] via-[#026DAA] to-[#0A2542] text-white overflow-hidden">
      
      {/* 1. Organischer Farbübergang OBEN: Aus dem warmen #FAF8F5 von Showcases nahtlos ins kräftige Blau */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg 
          viewBox="0 0 1440 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-10 sm:h-14 lg:h-16" 
          preserveAspectRatio="none"
        >
          {/* Deckt den oberen Bereich mit der Hintergrundfarbe der vorherigen Sektion (#FAF8F5) ab */}
          <path 
            d="M0,0 L1440,0 L1440,24 C1100,56 740,8 380,44 C180,60 60,32 0,24 Z" 
            fill="#FAF8F5" 
          />
          {/* Dezente Kurvenkontur für edle Trennung */}
          <path 
            d="M0,24 C60,32 180,60 380,44 C740,8 1100,56 1440,24" 
            stroke="rgba(255, 255, 255, 0.4)" 
            strokeWidth="1.5" 
            fill="none" 
          />
        </svg>
      </div>

      {/* Hauptinhalt: Großzügig, modern, aufgeräumt */}
      <div className="relative z-10 max-w-[1560px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Linke Spalte (7 Spalten): Headline & 3 interaktive Schritte mit 3D-Rotations-Icons */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            {/* Headline ohne Tag */}
            <h2 className="font-headline text-[2.1rem] xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] text-white leading-[1.18] mb-4 sm:mb-5">
              Farben virtuell erleben mit dem Brillux Raumdesigner.
            </h2>

            {/* Subtext: Klar, menschlich, problemorientiert */}
            <p className="text-sm sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-6 sm:mb-8 max-w-2xl">
              Sind Sie unsicher, welcher Farbton am besten zu Ihrem Parkett, den Möbeln oder den Lichtverhältnissen passt? Nutzen Sie den digitalen <strong>Brillux Raumdesigner</strong>, um Wunschfarben direkt an Ihrem Raum auszuprobieren – vor dem ersten Pinselstrich.
            </p>

            {/* Die 3 Schritte: Dezent rot, gelb, grün getönt – bei Hover volle Farbe & 3D-Rotation */}
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div 
                    key={idx}
                    className={`group flex items-start space-x-3.5 sm:space-x-4 p-3.5 sm:p-4.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 transition-all duration-300 hover:bg-white/15 cursor-default ${step.cardHover}`}
                    style={{ perspective: 600 }}
                  >
                    {/* Icon Box: Dezent rot/gelb/grün getönt -> bei Mouseover 3D-Rotation & volle Leuchtfarbe */}
                    <div 
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300 ease-out transform group-hover:scale-115 group-hover:-rotate-6 group-hover:-translate-y-0.5 shadow-xs ${step.bgSubtle} ${step.bgFull}`}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-105" strokeWidth={2.2} />
                    </div>

                    <div className="flex-1">
                      <h4 className="font-headline text-sm sm:text-lg font-bold text-white mb-0.5 sm:mb-1 transition-colors duration-200">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-[13.5px] text-blue-100/90 leading-relaxed font-normal">
                        {step.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons: Groß, haptisch & klar getrennt */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href="https://www.brillux.de/projekt-service/digitale-projekt-assistenten/raumdesigner/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 bg-white text-[#0084C7] font-headline font-extrabold px-7 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>Brillux Raumdesigner öffnen</span>
                <ExternalLink className="w-4 h-4 text-[#0084C7] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
              </a>

              <a
                href="#kontakt"
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl border border-white/35 text-white font-headline font-bold hover:bg-white/15 transition-all"
              >
                <span>Farben vor Ort besprechen</span>
                <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
              </a>
            </div>

            <p className="text-[11px] text-blue-200/80 mt-4">
              * Brillux ist eine eingetragene Marke der Brillux GmbH &amp; Co. KG. Wir verarbeiten originale Brillux Premiumfarben.
            </p>
          </motion.div>

          {/* Rechte Spalte (5 Spalten): Brillux Tablet mit echtem SF 3D-Tilt & schwebendem Logo oben rechts */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            {/* 3D-Tilt Wrapper (wie in sf-website .tilt-wrapper) */}
            <div 
              ref={tiltCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative rounded-2xl sm:rounded-3xl cursor-pointer"
              style={{ perspective: 1000 }}
            >
              {/* Inner Card mit 3D-Transform & dynamischem Schatten */}
              <div 
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/25 transition-transform duration-200 ease-out bg-slate-900/40"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.scale})`,
                  boxShadow: isHovered 
                    ? '0 30px 65px -10px rgba(0, 132, 199, 0.45), 0 20px 45px -15px rgba(0, 0, 0, 0.6)' 
                    : '0 20px 45px -10px rgba(0, 0, 0, 0.4)'
                }}
              >
                {/* Tablet Foto */}
                <img 
                  src="/brillux-raumdesigner-tablet.webp" 
                  alt="Brillux Raumdesigner Anwendung auf dem Tablet mit Vorher-Nachher Farbauswahl" 
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />

                {/* Brillux Logo Badge oben rechts: Schwebt mit translateZ(35px) und sattem 3D-Schatten über dem Bild */}
                <div 
                  className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-20 bg-white/95 backdrop-blur-md px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-xl border border-white/90 shadow-[0_16px_36px_rgba(0,0,0,0.45),0_6px_14px_rgba(0,0,0,0.25)] pointer-events-none transition-transform duration-200 flex items-center justify-center"
                  style={{ transform: 'translateZ(35px)' }}
                >
                  <img 
                    src="/brillux-logo.webp" 
                    alt="Brillux Logo" 
                    className="h-4 sm:h-5.5 w-auto object-contain block drop-shadow-xs" 
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 2. Organischer Farbübergang UNTEN: Aus dem kräftigen Blau nahtlos in das saubere Weiß (#FFFFFF) von Über Mich */}
      <div className="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg 
          viewBox="0 0 1440 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-10 sm:h-14 lg:h-16" 
          preserveAspectRatio="none"
        >
          {/* Deckt den unteren Bereich mit der Hintergrundfarbe der nächsten Sektion (#FFFFFF) ab */}
          <path 
            d="M0,32 C380,68 740,12 1100,48 C1280,64 1380,40 1440,32 L1440,64 L0,64 Z" 
            fill="#FFFFFF" 
          />
          {/* Dezente Kurvenkontur für edle Trennung */}
          <path 
            d="M0,32 C380,68 740,12 1100,48 C1280,64 1380,40 1440,32" 
            stroke="rgba(255, 255, 255, 0.45)" 
            strokeWidth="1.5" 
            fill="none" 
          />
        </svg>
      </div>

    </section>
  );
}
