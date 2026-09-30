import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

const showcases = [
  {
    id: "fugenlose-baeder",
    num: "01",
    eyebrow: "INNENBEREICH · BAD & NASSRAUM",
    title: "Moderne Bäder ohne eine einzige Fuge.",
    text: "Verwandeln Sie Ihr Badezimmer in ein privates Spa. Mit hochwertigen Mikrozement- und Design-Spachtelsystemen schaffen wir nahtlose Wand- und Bodenflächen, die vollkommen wasserdicht, extrem strapazierfähig und kinderleicht zu reinigen sind.",
    benefits: [
      "100 % schimmelfrei: Keine Zementfugen, kein Schmutzfang, maximale Hygiene.",
      "Ideal für Sanierungen: Kann direkt auf bestehende Fliesen aufgetragen werden – spart Lärm, Stemmarbeiten und Bauschutt.",
      "Individuelle Farbnuancen: Von warmem Kalkstein über minimalistisches Betongrau bis zu sanften Erdtönen."
    ],
    ctaText: "Fugenloses Bad anfragen",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jessica%20Meyer%20Malermeisterin/fugenloses-bad-dusche.webp",
    aspect: "aspect-[4/3]",
    reverse: false
  },
  {
    id: "airless-technik",
    num: "02",
    eyebrow: "INNENBEREICH · HOCHMODERNE TECHNIK",
    title: "Makellos glatte Oberflächen. Ohne Rollspuren.",
    text: "Große Decken- und Wandflächen verzeihen keine Fehler. Mit unserem modernen Airless-Verfahren zerstäuben wir Farbe und Spachtelmassen unter hohem Druck ohne Druckluft. Das Ergebnis ist ein seidenmatter, absolut gleichmäßiger Farbauftrag in meisterhafter Q3/Q4-Qualität.",
    benefits: [
      "Keine sichtbaren Ansätze: Gleichmäßiges Oberflächenbild selbst bei tiefstehender Abendsonne.",
      "Maximale Zeiteffizienz: Neubau oder Einzelzimmer werden in einem Bruchteil der üblichen Arbeitszeit fertiggestellt.",
      "Hohe Farbbrillanz & Deckkraft: Perfekt für anspruchsvolle Eigenheime und offene Raumfluchten."
    ],
    ctaText: "Airless-Finish anfragen",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jessica%20Meyer%20Malermeisterin/airless-spritztechnik-finish.webp",
    aspect: "aspect-[16/10]",
    reverse: true
  },
  {
    id: "raumkonzepte",
    num: "03",
    eyebrow: "INNENBEREICH · WAND & FARBKONZEPTE",
    title: "Wände mit Tiefe, Charakter und Wärme.",
    text: "Ein Raum wird erst durch das Zusammenspiel von Farbe, Licht und Textur lebendig. Ob eine einzelne Akzentwand im Wohnzimmer, ein komplett neu tapezierter Flur oder das gesamte Haus: Wir beraten Sie stilsicher vor Ort und bringen echte Farbmuster mit.",
    benefits: [
      "Individuelle Farbberatung: Perfekt abgestimmt auf Ihre Möbel, Böden und natürlichen Lichteinfall.",
      "Präzises Tapezieren: Nahtlose Verarbeitung selbst bei großgemusterten Designtapeten.",
      "Wohngesunde Farben: Emissionsarm, geruchsneutral und frei von bedenklichen Lösemitteln."
    ],
    ctaText: "Wandgestaltung anfragen",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jessica%20Meyer%20Malermeisterin/designtapete-akzentwand.webp",
    aspect: "aspect-[4/3]",
    reverse: false
  },
  {
    id: "bodenbelaege",
    num: "04",
    eyebrow: "INNENBEREICH · BODENBELÄGE",
    title: "Harmonische Einheit von Wand bis Boden.",
    text: "Vermeiden Sie lästige Schnittstellenprobleme zwischen verschiedenen Gewerken. Wir verlegen moderne Designbeläge (Vinyl), Parkett und Laminat fachgerecht inklusive Untergrundvorbereitung und millimetergenauer Fußleistenmontage.",
    benefits: [
      "Perfekte Übergänge: Lückenloser Anschluss an Sockelleisten und Türzargen.",
      "Fachgerechte Untergrundprüfung: Ausgleichsspachtelung für dauerhaft plane Flächen.",
      "Hohe Strapazierfähigkeit: Pflegeleichte Böden mit natürlicher Holz- oder Steinoptik."
    ],
    ctaText: "Bodenbelag anfragen",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jessica%20Meyer%20Malermeisterin/designbelag-parkett-boden.webp",
    aspect: "aspect-[16/10]",
    reverse: true
  },
  {
    id: "fassadenschutz",
    num: "05",
    eyebrow: "AUSSENBEREICH · FASSADE & HOLZ",
    title: "Langlebiger Schutz vor Wind und Wetter.",
    text: "Ihre Hausfassade ist Tag für Tag Regen, UV-Strahlung und Temperaturschwankungen ausgesetzt. Mit rissüberbrückenden Fassadenanstrichen und wetterfesten Holzlasuren schützen wir Ihre Bausubstanz nachhaltig vor Feuchtigkeit und Algenbefall.",
    benefits: [
      "Werterhalt Ihrer Immobilie: Schutz vor Feuchteschäden und Witterungseinflüssen.",
      "Ökologischer Holzschutz: Fachgerechte Lasur von Dachüberständen, Carports und Verkleidungen.",
      "Selbstreinigungseffekt: Moderne Fassadenfarben, an denen Schmutz und Algen abperlen."
    ],
    disclaimer: "Wichtiger Hinweis: Wir konzentrieren uns im Außenbereich rein auf hochwertige Fassadenanstriche und Holzschutz. Wärmedämmung (WDVS) bieten wir bewusst nicht an.",
    ctaText: "Fassadenanstrich anfragen",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jessica%20Meyer%20Malermeisterin/fassade-holzschutz-aussen.webp",
    aspect: "aspect-[16/10]",
    reverse: false
  }
];

export default function Showcases() {
  return (
    <section className="py-24 md:py-36 bg-slate-50/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-24 md:mb-32">
          <span className="text-[12px] font-bold tracking-[0.2em] text-blue-700 uppercase">
            Das Leistungs-Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F294A] mt-3 leading-tight">
            Präzises Handwerk für höchste Wohnansprüche.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Ob kompletter Raumumbau oder der frische Anstrich für ein einzelnes Zimmer: Wir bieten Ihnen meisterhaftes Handwerk mit langlebigen Materialien.
          </p>
        </div>

        {/* 5 Alternating Magazin-Showcases */}
        <div className="space-y-28 md:space-y-36">
          {showcases.map((item, idx) => (
            <div 
              key={item.id} 
              id={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                item.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* Content Column */}
              <motion.div 
                className={`lg:col-span-6 ${item.reverse ? 'lg:order-2' : 'lg:order-1'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
              >
                <div className="inline-flex items-center space-x-2 text-[12px] font-bold tracking-wider text-blue-700 uppercase mb-3">
                  <span>{item.num}</span>
                  <span>·</span>
                  <span>{item.eyebrow}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0F294A] mb-5 leading-tight">
                  {item.title}
                </h3>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                  {item.text}
                </p>

                {/* Benefits List */}
                <ul className="space-y-3.5 mb-6">
                  {item.benefits.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-3 text-sm text-slate-700 leading-relaxed">
                      <span className="p-0.5 rounded bg-blue-100 text-blue-800 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Disclaimer if applicable (e.g. Keine Dämmung) */}
                {item.disclaimer && (
                  <div className="flex items-start space-x-2.5 p-3.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs leading-relaxed mb-6">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>{item.disclaimer}</span>
                  </div>
                )}

                {/* CTA Link */}
                <a 
                  href="#kontakt" 
                  className="inline-flex items-center space-x-2 text-[14px] font-bold text-blue-700 hover:text-blue-900 transition-colors group"
                >
                  <span>{item.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Image Column */}
              <motion.div 
                className={`lg:col-span-6 ${item.reverse ? 'lg:order-1' : 'lg:order-2'}`}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
              >
                <div className={`relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 ${item.aspect}`}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
