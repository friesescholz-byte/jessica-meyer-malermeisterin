import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import PainterButton from './PainterButton';

const ease = [0.22, 1, 0.36, 1];

const showcases = [
  {
    id: "fugenlose-baeder",
    color: "#0084C7",
    title: "Moderne Bäder ohne eine einzige Fuge.",
    text: "Nahtlose Mikrozement- & Design-Spachtelsysteme für private Wohlfühlbäder. Vollkommen wasserdicht, extrem strapazierfähig und kinderleicht zu reinigen.",
    benefits: [
      "100 % schimmelfrei ohne Zement- und Silikonfugen",
      "Kann direkt auf bestehende Altfliesen aufgetragen werden",
      "Warm, mineralisch & in individuellen Farbnuancen"
    ],
    ctaText: "Fugenloses Bad anfragen",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jessica%20Meyer%20Malermeisterin/fugenloses-bad-dusche.webp",
    objectPosition: "object-right"
  },
  {
    id: "airless-technik",
    color: "#10B981",
    title: "Makellos glatte Oberflächen. Ohne Rollspuren.",
    text: "Mit modernster Airless-Hochdrucktechnik zerstäuben wir Farben und Spachtelmassen spurlos. Das Ergebnis: Vollkommen homogene Decken und Wände in Q3/Q4-Meistergüte.",
    benefits: [
      "Echtes Baustellenfoto: Airless-Spritzen dunkler Holzdecken",
      "Keine sichtbaren Streifen oder Ansätze bei Streiflicht",
      "Gleichmäßiger seidenmatter Farbauftrag mit hoher Deckkraft"
    ],
    ctaText: "Airless-Finish anfragen",
    image: "/airless-spritzen-holzdecke-vorher-nachher.webp",
    objectPosition: "object-right"
  },
  {
    id: "raumkonzepte",
    color: "#F59E0B",
    title: "Exklusive Vliestapeten & raumhohe Motive.",
    text: "Ob eine markante Akzentwand im Wohnbereich, ein komplett neu tapezierter Flur oder meisterhafte Designtapeten: Wir bringen Tiefe, Ruhe und Exklusivität an Ihre Wände.",
    benefits: [
      "Echtes Projekt: Raumhohe Wald-Fototapete im Schlafzimmer",
      "Präzise Muster- und Rapportabstimmung ohne sichtbare Stöße",
      "Wohngesunde, emissionsarme und atmungsaktive Materialien"
    ],
    ctaText: "Wandgestaltung anfragen",
    image: "/Malermeisterin_Jessica_Meyer_06.webp",
    objectPosition: "object-right"
  },
  {
    id: "bodenbelaege",
    color: "#0084C7",
    title: "Präzise Untergrundvorbereitung & edle Böden.",
    text: "Perfekte Böden beginnen mit fachgerechtem Schliff. Mit professioneller Bodenschleiftechnik bereiten wir Estrich und Altböden staubarm vor und verlegen moderne Designbeläge.",
    benefits: [
      "Staubarmes Schleifen mit Profi-Einscheibenmaschine",
      "Fachgerechte Ausgleichsspachtelung für absolut plane Flächen",
      "Nahtlose Übergänge an Sockeln, Türen und Schwellen"
    ],
    ctaText: "Bodenbelag anfragen",
    image: "/Malermeisterin_Jessica_Meyer_09.webp",
    objectPosition: "object-right"
  },
  {
    id: "fassadenschutz",
    color: "#E11D48",
    title: "Fassadenanstriche, Holzveredelung & Schriften.",
    text: "Werterhalt für Veranden, Dachüberstände und Fassaden mit atmungsaktiven Premium-Lasuren gegen Feuchtigkeit und UV-Strahlung. Meisterhafte Fassadenschriftzüge per Hand.",
    benefits: [
      "Echte Referenzen: Wetterfeste Veranda & Fassadenanstriche",
      "Atmungsaktiver Feuchtigkeitsschutz und UV-beständige Lasuren",
      "Wichtiger Hinweis: Kein WDVS / Dämmung – reiner Anstrich & Schutz"
    ],
    ctaText: "Fassadenanstrich anfragen",
    image: "/Malermeisterin_Jessica_Meyer_03.webp",
    objectPosition: "object-right"
  },
  {
    id: "malerarbeiten",
    color: "#10B981",
    title: "Klassische Malerarbeiten & Deckenanstriche.",
    text: "Vom einzelnen Zimmer bis zum bezugsfertigen Einfamilienhaus: Penibles Abkleben aller Böden, rissefreie Untergründe und lösungsmittelfreie Qualitätsfarben.",
    benefits: [
      "100 % Chefin persönlich vor Ort auf Ihrer Baustelle",
      "Rücksichtsvolles, sauberes Arbeiten im bewohnten Zuhause",
      "Geruchsneutrale, allergikerfreundliche Markenfarben"
    ],
    ctaText: "Malerarbeiten anfragen",
    image: "/Malermeisterin_Jessica_Meyer_04.webp",
    objectPosition: "object-right"
  }
];

export default function Showcases() {
  return (
    <section className="pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Wiederverwendbare SVG-ClipPath Definition: Schneidet die Kacheln an der Unterseite exakt wellenförmig ab */}
      <svg width="0" height="0" className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="cardWaveClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,-0.05 L 1,-0.05 L 1,0.95 C 0.85,0.98 0.70,0.91 0.50,0.95 C 0.35,0.99 0.15,0.91 0,0.95 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-[1560px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
        
        {/* Section Heading: Groß, clean & mit Raum */}
        <div className="max-w-4xl mb-10 sm:mb-16 md:mb-20">
          <div className="flex items-center space-x-2.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0084C7]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" />
            <span className="text-[12px] font-headline font-bold tracking-widest text-[#0084C7] uppercase ml-1.5">
              Das Leistungs-Portfolio
            </span>
          </div>

          <h2 className="font-headline text-[2.1rem] xs:text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.02em] text-[#171815] leading-[1.18] pb-2">
            Präzises Handwerk für <br />
            <span className="inline-block pb-3 -mb-3 bg-gradient-to-r from-[#0084C7] via-[#10B981] to-[#E11D48] bg-clip-text text-transparent">
              höchste Wohnansprüche.
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 mt-4 sm:mt-5 leading-relaxed font-normal max-w-3xl">
            Ob fugenlose Mikrozement-Bäder, makelloses Airless-Finish, raumhohe Designtapeten oder der frische Anstrich für Ihr Wohnzimmer: Bei mir erhalten Sie meisterhaftes Handwerk mit echten Ergebnissen.
          </p>
        </div>

        {/* Kompaktes 2-Spalten-Raster: Jeweils 2 Punkte nebeneinander */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {showcases.map((item, idx) => (
            <motion.div
              key={item.id}
              className="relative group transition-all duration-400 hover:-translate-y-1.5 flex flex-col justify-between cursor-default filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:drop-shadow-[0_16px_36px_rgba(0,0,0,0.08)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease }}
            >
              {/* Die eigentliche Kachel: Oben sauber abgerundet, unten durch clipPath physisch an der Welle abgeschnitten */}
              <div 
                className="relative flex-1 flex flex-col rounded-t-3xl overflow-hidden min-h-[440px] sm:min-h-[460px] bg-white"
                style={{ clipPath: 'url(#cardWaveClip)' }}
              >
                {/* 1. Hintergrundbild: Satte, echte Farben – auf der rechten Bildseite voll sichtbar & brillant */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={`w-full h-full object-cover ${item.objectPosition || 'object-right'} saturate-[1.2] contrast-[1.05] brightness-[1.02] opacity-100 group-hover:scale-105 transition-all duration-700 ease-out`} 
                    loading="lazy"
                  />
                  {/* Sanfter Weißverlauf oben: Oben weicher Übergang ("oben auch so ein weißen farbübergang haben") */}
                  <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white via-white/70 to-transparent" />
                  
                  {/* Lesbarkeits-Schleier links: Schützt nur den Textbereich links, lässt das Foto rechts glasklar & farbintensiv */}
                  <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] md:w-[60%] bg-gradient-to-r from-white via-white/95 to-transparent" />
                </div>

                {/* 2. Inhalt: Headline, Text, Haken & Button direkt unter dem Text */}
                <div className="relative z-10 flex-1 p-5 sm:p-7 md:p-8 pb-16 flex flex-col justify-start">
                  
                  <div className="max-w-xl">
                    {/* Headline mit voller Unterlängen-Freiheit */}
                    <h3 className="font-headline text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-[#171815] mb-2.5 sm:mb-3 leading-[1.25] pb-0.5">
                      {item.title}
                    </h3>

                    {/* Text */}
                    <p className="text-sm sm:text-[14.5px] text-slate-800 leading-relaxed mb-4 font-normal">
                      {item.text}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-2 mb-6">
                      {item.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start space-x-2.5 text-[13px] sm:text-[13.5px] text-slate-900 leading-normal font-medium">
                          <span 
                            className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white shadow-xs"
                            style={{ backgroundColor: item.color }}
                          >
                            <Check className="w-2.5 h-2.5" strokeWidth={3} />
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Button direkt unter dem Text / den Punkten */}
                    <a 
                      href="#kontakt" 
                      className="inline-flex items-center justify-center space-x-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-headline font-bold text-white shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all group/btn w-full sm:w-auto"
                      style={{ backgroundColor: item.color }}
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" strokeWidth={2.4} />
                    </a>
                  </div>

                </div>
              </div>

              {/* 3. Der bunte Konturschwung: Schließt die Kachel exakt an der unteren Schnittlinie ab */}
              <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
                <svg 
                  viewBox="0 0 100 100" 
                  preserveAspectRatio="none" 
                  className="w-full h-full block"
                >
                  <path 
                    d="M 0,95 C 15,91 35,99 50,95 C 70,91 85,98 100,95" 
                    stroke={item.color} 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                    vectorEffect="non-scaling-stroke"
                    fill="none" 
                  />
                </svg>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Subtiler, vertrauenserweckender Abschluss-CTA nach den 6 Kacheln */}
        <div className="mt-16 sm:mt-20 max-w-3xl mx-auto text-center px-4">
          <div className="inline-flex items-center space-x-2 text-[12px] font-bold text-[#0084C7] uppercase tracking-widest mb-3">
            <span>Individuelle Gestaltung</span>
          </div>
          <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#171815] mb-3">
            Haben Sie ein anderes Vorhaben oder einen besonderen Farbwunsch?
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Kein Vorhaben ist zu klein oder zu speziell. Ob ein einzelnes Zimmer, ein Akzentflur oder eine komplette Neugestaltung: Ich berate Sie persönlich und unverbindlich direkt vor Ort.
          </p>
          <PainterButton href="#kontakt">
            Jetzt persönliches Projekt anfragen
          </PainterButton>
        </div>

      </div>
    </section>
  );
}
