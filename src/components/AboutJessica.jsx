import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export default function AboutJessica() {
  return (
    <section id="ueber-mich" className="py-24 md:py-36 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-[1560px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-center">
          
          {/* Linke Seite: Authentische Bildbühne mit 3 echten Fotos von Jessica bei der Arbeit */}
          <motion.div 
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            {/* 3-Bilder-Collage: Großes Hauptbild + 2 echte Werkstatt- & Baustellenfotos im versetzten Editorial-Look */}
            <div className="grid grid-cols-12 gap-3 sm:gap-5 items-start">
              
              {/* Großes Portrait vor dem Einsatzfahrzeug (7 Spalten) */}
              <div className="col-span-7 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-100 aspect-[3/4] group">
                <img 
                  src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jessica%20Meyer%20Malermeisterin/jessica-meyer-malermeisterin-portrait.webp" 
                  alt="Jessica Meyer - Malermeisterin in Glissen / Raddestorf vor ihrem Einsatzfahrzeug mit Slogan Zeit für was Neues" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out" 
                  loading="lazy"
                />
                
                {/* Dezente, edle Namensplakette am Fuß des Portraits */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl border border-white/80 shadow-md">
                  <p className="font-headline text-sm sm:text-lg font-bold text-[#171815] leading-tight">
                    Jessica Meyer
                  </p>
                  <p className="text-[10.5px] sm:text-xs text-slate-600 font-medium mt-0.5 leading-tight">
                    Geprüfte Malermeisterin (2024)
                  </p>
                </div>
              </div>

              {/* Rechte Spalte: 2 echte Arbeitsfotos (Tapezieren & Streichen) – elegant versetzt (5 Spalten) */}
              <div className="col-span-5 flex flex-col space-y-3 sm:space-y-5 sm:pt-6">
                
                {/* Echtes Foto 1: Jessica rollt Decke (Malermeisterin_Jessica_Meyer_04.webp) */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-slate-100 aspect-[4/5] group">
                  <img 
                    src="/Malermeisterin_Jessica_Meyer_04.webp" 
                    alt="Malermeisterin Jessica Meyer streicht Decke und Wand mit Farbrolle" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy" 
                  />
                </div>

                {/* Echtes Foto 2: Jessica tapeziert Marmortapete (Malermeisterin_Jessica_Meyer_05.webp) */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-slate-100 aspect-[4/5] group">
                  <img 
                    src="/Malermeisterin_Jessica_Meyer_05.webp" 
                    alt="Malermeisterin Jessica Meyer bringt exklusive Designtapete an" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy" 
                  />
                </div>

              </div>

            </div>
          </motion.div>

          {/* Story & Philosophy Content (6 Spalten) */}
          <motion.div 
            className="lg:col-span-6 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            {/* Header mit Markenfarben-Punkten */}
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0084C7]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" />
              <span className="text-[12px] font-headline font-bold tracking-widest text-[#0084C7] uppercase ml-1">
                Über mich · Handwerk aus Leidenschaft
              </span>
            </div>

            <h2 className="font-headline text-[2.1rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.02em] text-[#171815] leading-[1.18] pb-1.5 mb-4 sm:mb-5">
              Zeit für was Neues. <br />
              <span className="inline-block pb-3 -mb-3 bg-gradient-to-r from-[#0084C7] via-[#10B981] to-[#E11D48] bg-clip-text text-transparent">
                Mit Liebe zum Detail.
              </span>
            </h2>

            {/* Authentisches Qualitäts-Motto im Designer-Rahmen */}
            <div className="relative border-l-4 border-[#0084C7] pl-4 sm:pl-5 py-3 sm:py-4 bg-[#FAF8F5] rounded-r-2xl mb-6 sm:mb-8 w-full border border-y-[#EBE6DD] border-r-[#EBE6DD]">
              <p className="font-headline text-base sm:text-xl font-bold italic text-[#171815]">
                „Ich mache es bei Ihnen genau so ordentlich, wie ich es mir zu Hause selbst wünschen würde.“
              </p>
              <p className="text-[11px] sm:text-xs font-mono text-slate-500 mt-2 uppercase tracking-wider">
                — Jessica Meyer · Malermeisterin
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed mb-8 sm:mb-10 font-normal">
              <p>
                Handwerk liegt mir einfach im Blut: Ich bin praktisch in der Bautischlerei meiner Eltern großgeworden. Zwischen Hobelspänen und Baustellen habe ich schon früh gelernt, worauf es wirklich ankommt – sauber zu arbeiten, mitzudenken und sein Wort zu halten.
              </p>
              <p>
                Für mich war schnell klar, dass das Malerhandwerk genau mein Ding ist. Nach der Ausbildung habe ich 2024 meinen Meister gemacht und mich direkt auf eigene Beine gestellt. Ich liebe es, Räumen wieder neues Leben einzuhauchen – ob mit feinen Vliestapeten, moderner Airless-Spritztechnik oder fugenlosen Bädern.
              </p>
              <p className="font-medium text-[#171815]">
                Was mir besonders am Herzen liegt: Bei mir gibt es kein „Dafür rücken wir gar nicht erst aus“. Ob Sie ein ganzes Haus renovieren oder einfach nur Ihr Flur oder ein einzelnes Zimmer einen frischen Anstrich braucht – ich freue mich auf jedes Vorhaben.
              </p>
            </div>

            {/* 3 Kernwerte in großzügigen Boxen */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 pt-6 sm:pt-8 border-t border-slate-200 w-full">
              <div className="flex flex-col space-y-2 p-4 rounded-xl bg-[#FAF8F5] border border-[#EBE6DD]">
                <div className="flex items-center space-x-2 text-[#0084C7] font-headline font-bold text-sm">
                  <Shield className="w-4 h-4 text-[#0084C7]" strokeWidth={2.4} />
                  <span>Persönlicher Kontakt</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Feste Ansprechpartnerin von der ersten Idee bis zum fertigen Raum.
                </p>
              </div>

              <div className="flex flex-col space-y-2 p-4 rounded-xl bg-[#FAF8F5] border border-[#EBE6DD]">
                <div className="flex items-center space-x-2 text-[#10B981] font-headline font-bold text-sm">
                  <HeartHandshake className="w-4 h-4 text-[#10B981]" strokeWidth={2.4} />
                  <span>Jedes Projekt zählt</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Vom kleinen Flur bis zum Neubau mit der gleichen Sorgfalt.
                </p>
              </div>

              <div className="flex flex-col space-y-2 p-4 rounded-xl bg-[#FAF8F5] border border-[#EBE6DD]">
                <div className="flex items-center space-x-2 text-[#E11D48] font-headline font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-[#E11D48]" strokeWidth={2.4} />
                  <span>Sorgfältige Arbeit</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Penibles Abkleben, staubarmes Schleifen und sauberes Verlassen.
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
