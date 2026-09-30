import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Content (7 Spalten) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            {/* Eyebrow / Offizieller Slogan vom Firmenwagen */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-md bg-blue-50/80 border border-blue-200/60 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-[12px] font-bold tracking-wider text-blue-900 uppercase">
                Zeit für was Neues · Malermeisterin Jessica Meyer
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0F294A] leading-[1.12] mb-6">
              Meisterhandwerk trifft moderne Raumästhetik.
            </h1>

            {/* Subline */}
            <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed mb-6 max-w-2xl">
              Vom einzelnen Zimmer bis zum fugenlosen Traumbad: Malermeisterin Jessica Meyer verbindet fundierte Handwerkskunst mit aktuellen Wohntrends und modernster Airless-Technologie. Für große Projekte genauso wie für kleine Renovierungsarbeiten.
            </p>

            {/* Authentisches Meisterinnen-Zitat */}
            <div className="border-l-4 border-blue-600 pl-4 py-2 mb-8 bg-slate-50/80 rounded-r-lg max-w-xl">
              <p className="text-sm sm:text-base font-semibold italic text-[#0F294A]">
                „Ich mache es bei Ihnen so, wie ich es mir zu Hause selber wünschen würde.“
              </p>
              <span className="text-xs text-blue-700 font-bold block mt-1">
                — Jessica Meyer, Malermeisterin
              </span>
            </div>

            {/* CTA Cluster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a 
                href="#kontakt" 
                className="inline-flex items-center justify-center space-x-3 bg-[#0F294A] text-white font-medium px-7 py-4 rounded-lg hover:bg-blue-900 transition-all shadow-sm group active:scale-[0.98]"
              >
                <span>Projekt unverbindlich anfragen</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="#farbdesigner" 
                className="inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-lg border border-slate-300 text-[#0F294A] font-semibold hover:bg-slate-50 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Raumplaner &amp; Trends</span>
              </a>
            </div>

            {/* Trust Proof Snippet */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-100 text-slate-600 text-[13.5px]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700" strokeWidth={2} />
                <span>Geprüfte Meisterin HWK (2024)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700" strokeWidth={2} />
                <span>Auch für kleine Aufträge &amp; Einzelzimmer da</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700" strokeWidth={2} />
                <span>100 % persönlich vor Ort</span>
              </div>
            </div>

          </motion.div>

          {/* Right Visual Image (5 Spalten) */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5]">
              <img 
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Jessica%20Meyer%20Malermeisterin/hero-fugenloses-bad.webp" 
                alt="Fugenloses Badezimmer mit Mikrozement Spachteltechnik" 
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
              
              {/* Subtle caption bottom */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-lg border border-slate-200/80 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#0F294A]">Fugenlose Wand- &amp; Bodengestaltung</p>
                  <p className="text-[11px] text-slate-500">Mikrozement in warmem Kalksteinton</p>
                </div>
                <span className="text-[11px] font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
                  Q4 Meistergüte
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
