import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Phone, Sparkles } from 'lucide-react';
import PainterlyTransition from './PainterlyTransition';

const ease = [0.22, 1, 0.36, 1];

const slides = [
  {
    url: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jessica%20Meyer%20Malermeisterin/hero-fugenloses-bad.webp",
    alt: "Fugenloses Badezimmer mit Mikrozement Spachteltechnik von Malermeisterin Jessica Meyer"
  },
  {
    url: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jessica%20Meyer%20Malermeisterin/designtapete-akzentwand.webp",
    alt: "Exklusive Designtapete und Akzentwandgestaltung"
  },
  {
    url: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jessica%20Meyer%20Malermeisterin/airless-spritztechnik-finish.webp",
    alt: "Airless Spritztechnik Q4 Oberflächenfinish"
  },
  {
    url: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jessica%20Meyer%20Malermeisterin/designbelag-parkett-boden.webp",
    alt: "Hochwertiger Designbelag und Parkettboden"
  }
];

// Die 4 Kundenversprechen passend zu den 4 Markenfarben
const customerPromises = [
  {
    color: '#0084C7',
    title: 'Jede Projektgröße willkommen',
    desc: 'Vom einzelnen Zimmer oder Flur bis zum anspruchsvollen Neubau.'
  },
  {
    color: '#10B981',
    title: 'Verbindliche Festpreise',
    desc: 'Transparente Kostenaufstellung ohne versteckte Überraschungen.'
  },
  {
    color: '#F59E0B',
    title: 'Saubere Baustellen-Garantie',
    desc: 'Staubarmes Schleifen, penibles Abkleben & rücksichtsvolles Arbeiten.'
  },
  {
    color: '#E11D48',
    title: 'Regionale Nähe',
    desc: 'Glissen, Raddestorf, Minden, Petershagen & ca. 40 km Umkreis.'
  }
];

// Die 4 Tapetenbahnen mit ihren wechselnden Abroll-Richtungen:
// 1. Blau: oben -> unten
// 2. Grün: unten -> oben
// 3. Orange: oben -> unten
// 4. Rot: unten -> oben
const wallpaperPanels = [
  { name: 'Blau', fromTop: true },
  { name: 'Grün', fromTop: false },
  { name: 'Orange', fromTop: true },
  { name: 'Rot', fromTop: false }
];

import PainterButton from './PainterButton';

function PromiseCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex flex-col justify-start group cursor-default pt-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cooler animierter Maus-Over Balken */}
      <div className="w-full h-[4px] bg-slate-100 rounded-full overflow-hidden relative mb-6">
        {/* Ruhezustand: Stilvoller 48px Akzent-Balken */}
        <div 
          className="absolute inset-y-0 left-0 w-12 rounded-full opacity-60"
          style={{ backgroundColor: item.color }}
        />
        {/* Animierte Ausdehnung bei Maus-Over über die volle Breite */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ backgroundColor: item.color }}
          initial={false}
          animate={{
            width: isHovered ? '100%' : '48px',
            opacity: isHovered ? 1 : 0.6
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Headline: Direkt unter dem animierten Balken */}
      <h3 
        className="font-headline font-bold text-xl sm:text-2xl lg:text-[1.55rem] text-[#171815] leading-[1.25] mb-3 transition-colors duration-300"
        style={{ color: isHovered ? item.color : '#171815' }}
      >
        {item.title}
      </h3>

      {/* Fließtext: Klar, sauber & leicht lesbar */}
      <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed font-normal">
        {item.desc}
      </p>
    </div>
  );
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Der ruhige Galerie-Cross-Fade
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-28 pb-8 sm:pt-36 md:pt-44 lg:pt-48 md:pb-16 bg-[#FFFFFF] overflow-hidden">
      
      {/* Schlichtes, dezentes Handwerks-Muster im Hintergrund mit den 4 Markenfarben (hauchzart getönt) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Feines architektonisches Raster mit Handwerks-Kreuzen in den 4 Markenfarben */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-[0.24]" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="painter-craft-grid" width="96" height="96" patternUnits="userSpaceOnUse">
              {/* Feine Rasterlinien im Stil eines Bau- & Tapezierplans */}
              <path d="M 96 0 L 0 0 0 96 M 48 0 L 48 96 M 0 48 L 96 48" fill="none" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3" />
              
              {/* 1. Knoten: Blau (#0084C7) */}
              <path d="M -3 0 h 6 M 0 -3 v 6" stroke="#0084C7" strokeWidth="1" strokeLinecap="round" opacity="0.32" />
              <circle cx="0" cy="0" r="1.2" fill="#0084C7" opacity="0.45" />

              {/* 2. Knoten: Grün (#10B981) */}
              <path d="M 45 0 h 6 M 48 -3 v 6" stroke="#10B981" strokeWidth="1" strokeLinecap="round" opacity="0.32" />
              <circle cx="48" cy="0" r="1.2" fill="#10B981" opacity="0.45" />

              {/* 3. Knoten: Orange (#F59E0B) */}
              <path d="M -3 48 h 6 M 0 45 v 6" stroke="#F59E0B" strokeWidth="1" strokeLinecap="round" opacity="0.32" />
              <circle cx="0" cy="48" r="1.2" fill="#F59E0B" opacity="0.45" />

              {/* 4. Knoten: Rot (#E11D48) */}
              <path d="M 45 48 h 6 M 48 45 v 6" stroke="#E11D48" strokeWidth="1" strokeLinecap="round" opacity="0.32" />
              <circle cx="48" cy="48" r="1.2" fill="#E11D48" opacity="0.45" />
            </pattern>
          </defs>
          <rect 
            width="100%" 
            height="100%" 
            fill="url(#painter-craft-grid)" 
            style={{ maskImage: 'radial-gradient(ellipse 85% 65% at 50% 30%, black 20%, transparent 85%)' }} 
          />
        </svg>

        {/* Hauchzarter 4-Farben-Lichtschein im Hintergrund für organische Raumtiefe */}
        <div 
          className="absolute -top-28 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[400px] bg-gradient-to-r from-[#0084C7]/3.5 via-[#10B981]/3 via-[#F59E0B]/3 to-[#E11D48]/3.5 blur-3xl pointer-events-none rounded-full" 
        />
      </div>

      <div className="relative max-w-[1560px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
        
        {/* Headline & Persönlicher Text (Groß, Design-Schrift Outfit, bunter Farbverlauf) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Linke Spalte: Skulpturale Headline mit buntem Farbverlauf */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            {/* Feine bunte Akzent-Punkte passend zum Logo */}
            <div className="flex items-center space-x-2.5 mb-4 sm:mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0084C7]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]"></span>
              <span className="text-[12px] sm:text-[12.5px] font-headline font-bold tracking-widest text-[#171815] uppercase ml-1.5">
                Jessica Meyer · Meisterbetrieb
              </span>
            </div>

            <h1 className="font-headline text-[2.1rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.3rem] font-extrabold tracking-[-0.02em] text-[#171815] leading-[1.16] pb-2">
              Fugenlose Bäder &amp; <br className="hidden sm:inline" />
              <span className="inline-block pb-3 -mb-3 bg-gradient-to-r from-[#0084C7] via-[#10B981] via-[#F59E0B] to-[#E11D48] bg-clip-text text-transparent">
                moderne Raumgestaltung.
              </span>
            </h1>

            {/* CTAs: Großzügig & auf Mobile optimal zum Tippen */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5 mt-6 sm:mt-10 lg:mt-12">
              <PainterButton href="#kontakt" className="w-full sm:w-auto justify-center">
                Projekt unverbindlich anfragen
              </PainterButton>

              <a 
                href="tel:015129585277" 
                className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-[#171815] text-[14.5px] font-semibold transition-all hover:border-[#0084C7] shadow-xs active:scale-[0.98]"
              >
                <span className="w-7 h-7 rounded-full bg-[#0084C7]/10 flex items-center justify-center text-[#0084C7]">
                  <Phone className="w-3.5 h-3.5" strokeWidth={2.4} />
                </span>
                <span>01512 9585277</span>
              </a>

              <a 
                href="#farbdesigner" 
                className="inline-flex items-center justify-center space-x-2 text-[14px] font-medium text-slate-600 hover:text-[#0084C7] transition-colors py-2 px-2"
              >
                <Sparkles className="w-4 h-4 text-[#0084C7]" />
                <span className="underline underline-offset-4 decoration-slate-300 hover:decoration-[#0084C7]">Raumplaner</span>
              </a>
            </div>
          </motion.div>

          {/* Rechter Bereich: Großer Text — sitzt oben mit gutem Abstand */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-start pt-1 md:pt-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <div className="max-w-md space-y-4">
              <p className="font-headline text-2xl sm:text-3xl lg:text-[2rem] font-bold text-[#171815] leading-[1.28]">
                „Ich mache es bei Ihnen genau so, wie ich es mir <span className="inline-block pb-1 -mb-1 bg-gradient-to-r from-[#0084C7] to-[#E11D48] bg-clip-text text-transparent">zu Hause selber wünschen</span> würde.“
              </p>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Ob <strong className="font-bold text-[#171815]">fugenloses Bad</strong>, makellos glatte <strong className="font-bold text-[#171815]">Airless-Wände</strong> oder das <strong className="font-bold text-[#171815]">einzelne Zimmer</strong>: Bei mir steht immer die <strong className="font-bold text-[#0084C7]">Chefin persönlich</strong> auf der Baustelle — sauber, verlässlich und mit echter Leidenschaft.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Architektonischer Fotobühnen-Bereich: Großzügiger Abstand nach oben verhindert jegliche Überlappung */}
        <div className="relative mt-20 sm:mt-24 md:mt-32 lg:mt-36">
          
          {/* Jessica Meyer Freisteller mit dem bunten Farb-Element halb hinter ihr */}
          <div className="absolute -top-24 sm:-top-32 md:-top-36 lg:-top-40 right-2 sm:right-8 lg:right-12 z-0 pointer-events-none select-none">
            
            {/* Buntes Farb-Element aus dem Markenlogo: Genau halb hinter Jessica überlappend */}
            <motion.div 
              className="absolute -top-5 sm:-top-8 md:-top-10 -right-2 sm:-right-5 md:-right-6 -z-10 opacity-95 drop-shadow-md"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jessica%20Meyer%20Malermeisterin/Jessica_Meyer_Farbe_02.webp" 
                alt="" 
                className="w-20 sm:w-32 md:w-38 lg:w-44 h-auto object-contain"
              />
            </motion.div>

            {/* Jessica Meyer Freisteller */}
            <img 
              src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jessica%20Meyer%20Malermeisterin/Malermeisterin_Jessica_Meyer_01.webp" 
              alt="Malermeisterin Jessica Meyer" 
              className="relative z-10 w-24 sm:w-32 md:w-36 lg:w-40 h-auto object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.35)] drop-shadow-[0_8px_12px_rgba(0,0,0,0.2)]"
              loading="eager"
            />
          </div>

          {/* Der Slider-Rahmen: z-10 verdeckt ihren Unterkörper sauber an der Oberkante. Vollkommen clean ohne Text & Punkte. */}
          <motion.div 
            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-slate-900 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.025 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  opacity: { duration: 1.3, ease: [0.25, 1, 0.5, 1] },
                  scale: { duration: 5.5, ease: "linear" }
                }}
                className="absolute inset-0 w-full h-full"
              >
                <img 
                  src={slides[currentIndex].url} 
                  alt={slides[currentIndex].alt} 
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Die 4 Kundenversprechen: Schicker, cleaner Designer-Übergang mit animiertem Maus-Over Balken & Text */}
        <div className="mt-14 sm:mt-20 lg:mt-32 pt-10 sm:pt-16 border-t border-slate-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 xl:gap-16">
            {customerPromises.map((item, idx) => (
              <PromiseCard key={idx} item={item} />
            ))}
          </div>
        </div>

      </div>

      {/* Schicker, dezenter Designer-Übergang über die volle Breite zum nächsten Abschnitt */}
      <div className="mt-14 sm:mt-20 lg:mt-24 w-full">
        <PainterlyTransition />
      </div>

    </section>
  );
}
