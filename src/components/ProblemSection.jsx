import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

const problems = [
  {
    num: "01",
    tag: "DAS PROBLEM GROSSER FIRMEN",
    title: "„Für so ein kleines Zimmer kommen wir nicht raus“",
    problem: "Viele etablierte Malerbetriebe nehmen nur noch lukrative Großbaustellen an. Wer nur ein Wohnzimmer, einen Flur oder eine Akzentwand renovieren möchte, wird vertröstet oder abgewimmelt.",
    solution: "Bei mir ist jedes Projekt willkommen! Ich schätze auch kleine Renovierungen und führe sie mit der exakt gleichen Meisterpräzision und Liebe zum Detail durch wie Großprojekte."
  },
  {
    num: "02",
    tag: "DIE ANGST VOR BAUSTAUB",
    title: "Baustellen-Chaos & Dreck im bewohnten Haus",
    problem: "Handwerker kommen unpünktlich, halten Absprachen nicht ein und hinterlassen feinen Schleifstaub, der noch wochenlang in allen Schränken und Wohnbereichen sitzt.",
    solution: "Staubarme Schleiftechnik mit Direktabsaugung, penibles Abkleben aller Möbel und Laufwege sowie absolute Verlässlichkeit bei vereinbarten Terminen."
  },
  {
    num: "03",
    tag: "UNANSEHNLICHE OBERFLÄCHEN",
    title: "Schimmelfugen im Bad & Streifen an der Decke",
    problem: "Vergraute Silikon- und Zementfugen in der Dusche oder unschöne Rollkanten und fleckige Ansätze an Decken und Wänden, wenn Tageslicht einfällt.",
    solution: "Fugenlose Mikrozement-Bäder ohne jede Schimmelfuge und modernste Airless-Spritztechnik für vollkommen homogene, spiegelglatte Decken in Q4-Meistergüte."
  }
];

export default function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-[12px] font-bold tracking-[0.2em] text-blue-700 uppercase">
            Identifikation &amp; Handwerksehre
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F294A] mt-3 leading-tight">
            Kennen Sie den Frust über abgewiesene Kleinaufträge und Baustellenstaub?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Renovieren sollte Ihr Zuhause verschönern – nicht Ihre Nerven strapazieren. Wir schließen die Lücke im Handwerk: Mit Herzblut für große Vorhaben und voller Hingabe für kleine Projekte.
          </p>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {problems.map((card, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col justify-between p-8 rounded-xl border border-slate-200 bg-[#FFFFFF] shadow-xs hover:border-blue-300 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease }}
            >
              <div>
                {/* Header with Number & Tag */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                  <span className="text-[11.5px] font-bold tracking-wider text-blue-800 uppercase">
                    {card.tag}
                  </span>
                  <span className="text-sm font-bold text-slate-400">
                    {card.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0F294A] mb-4 leading-snug">
                  {card.title}
                </h3>

                {/* The Pain */}
                <div className="flex items-start space-x-3 mb-6">
                  <AlertCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.problem}
                  </p>
                </div>
              </div>

              {/* The Solution */}
              <div className="pt-6 border-t border-slate-100 bg-blue-50/50 -mx-8 -mb-8 p-8 rounded-b-xl border-b border-x border-blue-100">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <span className="text-[11px] font-bold tracking-wider text-[#0F294A] uppercase block mb-1">
                      Die Jessica-Meyer-Lösung:
                    </span>
                    <p className="text-sm font-medium text-slate-800 leading-relaxed">
                      {card.solution}
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
