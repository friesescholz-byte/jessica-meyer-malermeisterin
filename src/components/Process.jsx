import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

const steps = [
  {
    num: "01",
    icon: PhoneCall,
    title: "Unverbindlicher Erstkontakt",
    desc: "Rufen Sie uns kurz an oder schildern Sie Ihr Vorhaben in 60 Sekunden über das Anfrageformular. Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen."
  },
  {
    num: "02",
    icon: Compass,
    title: "Vor-Ort-Besichtigung & Muster",
    desc: "Wir prüfen den Untergrund bei Ihnen vor Ort, bringen echte Material- und Farbmuster mit und beraten Sie transparent zu den besten Lösungen zum Festpreis."
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Saubere & termintreue Ausführung",
    desc: "Zum vereinbarten Termin decken wir Böden und Möbel sorgfältig ab und führen alle Spachtel-, Spritz- und Malerarbeiten staubarm und zügig durch."
  },
  {
    num: "04",
    icon: HeartHandshake,
    title: "Gemeinsame Abnahme & Übergabe",
    desc: "Wir gehen alle Flächen und Details gemeinsam durch. Erst wenn Sie rundum begeistert von Ihrem neuen Wohngefühl sind, ist unsere Arbeit getan."
  }
];

export default function Process() {
  return (
    <section id="ablauf" className="py-24 md:py-32 bg-[#FBF9F5] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-[12px] font-bold tracking-[0.2em] text-neutral-500 uppercase">
            Transparenter Ablauf
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mt-3 leading-tight">
            In 4 einfachen Schritten zu Ihrem neuen Wohngefühl.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed">
            Keine Überraschungen, keine versteckten Kosten. Wir garantieren Ihnen einen strukturierten und verlässlichen Renovierungsablauf.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-xl border border-neutral-200 flex flex-col justify-between shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-neutral-900">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-lg bg-[#FBF9F5] text-neutral-900 border border-neutral-200/60">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
