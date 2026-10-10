import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Navigation, 
  Check, 
  ShieldCheck, 
  Mail, 
  User, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import PainterButton from './PainterButton';

export default function LeadFunnel() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 md:py-36 bg-[#FBF9F5] border-t border-[#EBE6DD] relative overflow-hidden">
      
      {/* Sanfter architektonischer Lichtakzent */}
      <div className="absolute top-1/3 -right-36 w-96 h-96 bg-[#0084C7]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Linke Spalte: Ruhige redaktionelle Präsentation & Direkter Meisterkontakt (5 Spalten) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            
            {/* 4 Markenfarben Akzent */}
            <div className="flex items-center space-x-2.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0084C7]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" />
              <span className="text-[12px] font-headline font-bold tracking-widest text-[#0084C7] uppercase ml-1">
                Einfach &amp; Direkt
              </span>
            </div>

            <h2 className="font-headline text-[2.1rem] xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171815] leading-[1.18] pb-1 mb-4 sm:mb-5">
              Lassen Sie uns über Ihr Vorhaben sprechen.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 font-normal">
              Ob fugenloses Bad, eine Akzentwand oder das einzelne Zimmer: Ich berate Sie ehrlich, verlässlich und mit meisterlicher Sorgfalt direkt bei Ihnen vor Ort.
            </p>

            {/* Stilvolle, ruhige Kontaktleiste */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4 sm:space-y-5 mb-6 sm:mb-8">
              
              {/* Telefon & WhatsApp */}
              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#171815] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">
                    Telefon &amp; WhatsApp
                  </span>
                  <a 
                    href="tel:015129585277" 
                    className="text-lg sm:text-xl font-headline font-bold text-[#171815] hover:text-[#0084C7] transition-colors block mt-0.5"
                  >
                    01512 9585277
                  </a>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Mo.–Sa. persönlich erreichbar · Gerne auch Fotos per WhatsApp
                  </span>
                </div>
              </div>

              <div className="h-px bg-slate-100 w-full" />

              {/* Regionales Einsatzgebiet */}
              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#0084C7] shrink-0 mt-0.5">
                  <Navigation className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wider">
                    Regionales Einsatzgebiet
                  </span>
                  <span className="text-sm font-headline font-bold text-[#171815] block mt-0.5">
                    Raddestorf, Petershagen, Minden &amp; Region
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5 leading-relaxed">
                    Kurze Wege auch in Uchte, Warmsen, Stolzenau, Rahden &amp; ca. 40 km Umkreis.
                  </span>
                </div>
              </div>

            </div>

            {/* 3 klare Zusagen */}
            <div className="space-y-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
              <div className="flex items-center space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span>Rückmeldung garantiert innerhalb von 24 Stunden</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span>Verbindliches Festpreis-Angebot ohne versteckte Kosten</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span>100 % Chefin persönlich vor Ort auf Ihrer Baustelle</span>
              </div>
            </div>

          </div>

          {/* Rechte Spalte: Das saubere, moderne, extrem einfache Formular (7 Spalten) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_16px_50px_rgba(0,0,0,0.04)] p-5 sm:p-8 md:p-12 relative">
              
              {submitted ? (
                <motion.div 
                  className="py-10 sm:py-12 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-6 shadow-md shadow-emerald-600/20">
                    <CheckCircle2 className="w-9 h-9" strokeWidth={2.4} />
                  </div>
                  
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 mb-3">
                    Nachricht erfolgreich gesendet
                  </span>

                  <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#171815] mb-3">
                    Vielen Dank, {name}!
                  </h3>

                  <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-8">
                    Ich habe Ihre Anfrage erhalten und melde mich <strong className="text-[#171815]">werktags innerhalb von 24 Stunden persönlich</strong> bei Ihnen unter <strong className="text-[#0084C7]">{phone}</strong>.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-xs text-slate-700 space-y-1 mb-6">
                    <p className="font-semibold text-[#171815]">Eiliges Vorhaben?</p>
                    <p>Rufen Sie mich direkt an: <a href="tel:015129585277" className="font-bold text-[#0084C7] hover:underline">01512 9585277</a></p>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setPhone("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-900 underline transition-colors cursor-pointer"
                  >
                    Weitere Nachricht senden
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  
                  {/* Form Header */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#171815]">
                        Projekt unverbindlich anfragen
                      </h3>
                      <span className="text-xs font-semibold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full">
                        Kostenfrei
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Füllen Sie einfach kurz die Felder aus. Ich melde mich direkt bei Ihnen.
                    </p>
                  </div>

                  {/* Die 3 klaren Felder */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Ihr Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input 
                          type="text" 
                          required
                          placeholder="z. B. Frank Müller" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 hover:border-slate-300 focus:border-[#0084C7] focus:ring-4 focus:ring-[#0084C7]/10 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Telefon */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Telefonnummer für Rückruf *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input 
                          type="tel" 
                          required
                          placeholder="z. B. 0151 12345678" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 hover:border-slate-300 focus:border-[#0084C7] focus:ring-4 focus:ring-[#0084C7]/10 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                        />
                      </div>
                    </div>

                  </div>

                  {/* E-Mail */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      E-Mail-Adresse <span className="text-slate-400 font-normal">(optional für schriftliches Angebot)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input 
                        type="email" 
                        placeholder="beispiel@email.de" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 hover:border-slate-300 focus:border-[#0084C7] focus:ring-4 focus:ring-[#0084C7]/10 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Nachricht / Textfeld */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Ihr Vorhaben <span className="text-slate-400 font-normal">(optional – kurz beschreiben)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea 
                        rows={3}
                        placeholder="Was möchten Sie machen lassen? (z. B. Bad ca. 9 m² fugenlos, Wohnzimmer streichen, Brillux Farbton 15.06.09 aus dem Raumplaner...)" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 hover:border-slate-300 focus:border-[#0084C7] focus:ring-4 focus:ring-[#0084C7]/10 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Absende-Button: Sauber, harmonisch & zentriert */}
                  <div className="pt-2">
                    <PainterButton 
                      as="button" 
                      type="submit" 
                      size="default"
                      icon="right"
                      className="w-full sm:w-auto px-8 py-3.5 shadow-md hover:shadow-lg justify-center"
                    >
                      Kostenfreies Angebot anfordern
                    </PainterButton>

                    <p className="mt-3 text-[11px] sm:text-[11.5px] text-slate-400">
                      100 % unverbindlich · Keine Weitergabe an Dritte · Antwort werktags binnen 24 Stunden
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
