import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Clock, HeartHandshake } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export default function AboutJessica() {
  return (
    <section id="ueber-mich" className="py-24 md:py-36 bg-[#FFFFFF] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Real Photo of Jessica Meyer with Company Van (5 Spalten) */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 aspect-[4/5]">
              <img 
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jessica%20Meyer%20Malermeisterin/jessica-meyer-malermeisterin-portrait.webp" 
                alt="Jessica Meyer - Malermeisterin in Glissen / Raddestorf vor ihrem Einsatzfahrzeug mit Slogan Zeit für was Neues" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-bold tracking-widest uppercase bg-blue-600/80 backdrop-blur-md px-2.5 py-1 rounded">
                  Inhaberin &amp; Malermeisterin
                </span>
                <p className="text-xl font-bold mt-2">Jessica Meyer</p>
                <p className="text-xs text-blue-200">Geprüfte Meisterin der Handwerkskammer Hannover (2024)</p>
              </div>
            </div>
          </motion.div>

          {/* Story & Philosophy Content (7 Spalten) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="text-[12px] font-bold tracking-[0.2em] text-blue-700 uppercase">
              Über mich · Handwerk aus Leidenschaft
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F294A] mt-3 mb-6 leading-tight">
              Zeit für was Neues. Mit Liebe zum Detail.
            </h2>

            {/* Authentisches Qualitäts-Motto */}
            <div className="border-l-4 border-blue-600 pl-4 py-3 bg-blue-50/60 rounded-r-lg mb-6 w-full">
              <p className="text-base sm:text-lg font-bold italic text-[#0F294A]">
                „Man sollte es bei Kunden genau so machen, wie man es zu Hause selber haben möchte.“
              </p>
              <p className="text-xs text-slate-500 mt-1">
                — Mein persönliches Handwerker-Versprechen an Sie
              </p>
            </div>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed mb-8">
              <p>
                Ich bin in der Bautischlerei meiner Eltern aufgewachsen. Schon als Kind habe ich miterlebt, was ehrliche Handwerksarbeit bedeutet: Verantwortung zu übernehmen, mit den eigenen Händen Schönes zu schaffen und Kunden mit verlässlicher Qualität zu begeistern.
              </p>
              <p>
                Nach meiner fundierten Ausbildung im regionalen Handwerk und dem erfolgreichen Meisterabschluss 2024 habe ich Anfang 2025 meinen eigenen Malerbetrieb gegründet. Mein Anspruch: Modernste Techniken wie fugenlose Mikrozement-Bäder und Airless-Spritzlackierung mit herzlicher, persönlicher Betreuung zu verbinden.
              </p>
              <p className="font-semibold text-[#0F294A]">
                Und ganz wichtig: Ich bin nicht nur für Großprojekte da. Auch wenn Sie nur ein einzelnes Zimmer, einen Flur oder eine Akzentwand renovieren möchten, sind Sie bei mir herzlich willkommen!
              </p>
            </div>

            {/* 3 Core Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100 w-full">
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center space-x-2 text-[#0F294A] font-bold text-sm">
                  <Shield className="w-4 h-4 text-blue-700" strokeWidth={2} />
                  <span>100% Chefin vor Ort</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Feste Ansprechpartnerin von der ersten Beratung bis zur Übergabe.
                </p>
              </div>

              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center space-x-2 text-[#0F294A] font-bold text-sm">
                  <HeartHandshake className="w-4 h-4 text-blue-700" strokeWidth={2} />
                  <span>Groß &amp; Klein willkommen</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Jedes Projekt wird mit derselben Meister-Sorgfalt ausgeführt.
                </p>
              </div>

              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center space-x-2 text-[#0F294A] font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-blue-700" strokeWidth={2} />
                  <span>Sauberkeits-Garantie</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Staubarme Werkzeuge und gründliche Reinigung nach Abschluss der Arbeiten.
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
