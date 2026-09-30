import React from 'react';
import { Palette, ExternalLink, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function RoomDesigner() {
  return (
    <section id="farbdesigner" className="py-24 md:py-32 bg-[#FFFFFF] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F294A] via-[#15345E] to-[#1E40AF] text-white p-8 sm:p-12 lg:p-16 border border-blue-900 shadow-xl">
          
          {/* Subtle Background Glow Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column (7 Spalten) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-wider uppercase mb-5 text-blue-200">
                <Palette className="w-4 h-4 text-blue-300" />
                <span>Virtueller Raum- &amp; Farbplaner</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
                Farben virtuell erleben mit dem Brillux Farbdesigner.
              </h2>

              <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed mb-8 max-w-2xl">
                Sind Sie unsicher, welcher Farbton am besten zu Ihrem Parkett, Ihren Möbeln oder den Lichtverhältnissen passt? Nutzen Sie den bewährten <strong>Brillux Farbdesigner</strong>, um reale Raumszenen vorab digital in verschiedenen Farbtönen und Nuancen auszuprobieren.
              </p>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-start space-x-3 text-sm text-blue-100">
                  <div className="p-1 rounded bg-blue-500/20 text-blue-300 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                  <span>Wohnräume, Küchen, Bäder und Fassaden digital farblich gestalten.</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-blue-100">
                  <div className="p-1 rounded bg-blue-500/20 text-blue-300 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                  <span>Entwurf oder Farbcode ganz einfach als PDF / Notiz speichern.</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-blue-100">
                  <div className="p-1 rounded bg-blue-500/20 text-blue-300 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                  <span>Bei der kostenfreien Vor-Ort-Besichtigung bringt Jessica Meyer die echten Originalmuster mit!</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://www.brillux.de/services/tools/farbdesigner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2.5 bg-white text-[#0F294A] font-bold px-7 py-4 rounded-lg hover:bg-blue-50 transition-all shadow-md group active:scale-[0.98]"
                >
                  <span>Brillux Farbdesigner öffnen</span>
                  <ExternalLink className="w-4 h-4 text-blue-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-lg border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  <span>Farbtöne direkt anfragen</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Visual Preview Card (5 Spalten) */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-white space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-semibold text-blue-200">Planungs-Vorschau</span>
                  <span className="text-xs bg-blue-500/30 text-blue-200 px-2.5 py-0.5 rounded-full font-medium">
                    Kostenfrei
                  </span>
                </div>

                <div className="space-y-3 text-xs text-blue-100/90 leading-relaxed">
                  <p className="font-semibold text-white text-sm">
                    So einfach funktioniert Ihr Entwurf:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 pl-1">
                    <li>Öffnen Sie den Farbdesigner über den Button.</li>
                    <li>Wählen Sie einen Beispielraum oder ein Bauteil.</li>
                    <li>Testen Sie Brillux Trend- und Wunschfarbtöne.</li>
                    <li>Geben Sie den Farbcode einfach in unserem Anfrageformular an!</li>
                  </ol>
                </div>

                <div className="pt-3 border-t border-white/10 text-[11px] text-blue-200/80 italic">
                  * Brillux ist eine eingetragene Marke der Brillux GmbH &amp; Co. KG. Wir verarbeiten Original-Brillux Premiumfarben.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
