import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, User, Phone, Mail, MessageSquare, ShieldCheck } from 'lucide-react';
import { useContactModal } from '../context/ContactModalContext';
import PainterButton from './PainterButton';

export default function ContactModal() {
  const { isOpen, closeContactModal, presetSubject } = useContactModal();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Wenn ein vorausgewähltes Thema übergeben wurde (z. B. "Fugenloses Bad")
  useEffect(() => {
    if (presetSubject) {
      setMessage(`Vorhaben: ${presetSubject}\n`);
    }
  }, [presetSubject]);

  // Body Scroll sperren, solange das Fenster offen ist
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeContactModal();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, closeContactModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    closeContactModal();
    // Nach kurzer Zeit zurücksetzen
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          
          {/* Milchiger, abgedunkelter Hintergrund mit Klick zum Schließen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Das eigentliche Modal-Fenster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xl p-5 sm:p-9 my-auto z-10 overflow-y-auto max-h-[92vh]"
          >
            {/* Schließen Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              aria-label="Fenster schließen"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.2} />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-600/20">
                  <CheckCircle2 className="w-9 h-9" strokeWidth={2.4} />
                </div>
                
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 mb-3">
                  Erfolgreich gesendet
                </span>

                <h3 className="font-headline text-2xl font-bold text-[#171815] mb-2">
                  Vielen Dank, {name}!
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Ich habe Ihre Anfrage erhalten und melde mich <strong className="text-[#171815]">werktags innerhalb von 24 Stunden persönlich</strong> bei Ihnen unter <strong className="text-[#0084C7]">{phone}</strong>.
                </p>

                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-full bg-[#171815] text-white text-xs font-semibold hover:bg-[#0084C7] transition-colors cursor-pointer"
                >
                  Fenster schließen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Header */}
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#0084C7]" />
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
                    <span className="text-[11px] font-headline font-bold tracking-widest text-[#0084C7] uppercase ml-1">
                      Kostenfreie Anfrage
                    </span>
                  </div>

                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#171815]">
                    Projekt unverbindlich anfragen
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Geben Sie einfach kurz Ihre Kontaktdaten ein – ich melde mich direkt bei Ihnen.
                  </p>
                </div>

                {/* Eingabefelder: Einfach, übersichtlich, ohne Schnickschnack */}
                <div className="space-y-3 pt-1">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Ihr vollständiger Name *
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
                        className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 focus:border-[#0084C7] focus:ring-3 focus:ring-[#0084C7]/10 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Telefonnummer */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
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
                        className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 focus:border-[#0084C7] focus:ring-3 focus:ring-[#0084C7]/10 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* E-Mail */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
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
                        className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 focus:border-[#0084C7] focus:ring-3 focus:ring-[#0084C7]/10 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Nachricht / Textfeld */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Ihr Vorhaben / Notiz <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea 
                        rows={3}
                        placeholder="Was planen Sie? (z. B. Bad ca. 9 m² fugenlos, Wohnzimmer streichen, Brillux Farbton 15.06.09...)" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 focus:border-[#0084C7] focus:ring-3 focus:ring-[#0084C7]/10 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                </div>

                {/* Absende-Button */}
                <div className="pt-2">
                  <PainterButton 
                    as="button" 
                    type="submit" 
                    size="default"
                    icon="right"
                    className="w-full justify-center shadow-md hover:shadow-lg"
                  >
                    Kostenfreies Angebot anfordern
                  </PainterButton>

                  <div className="mt-3 flex items-center justify-center space-x-1.5 text-[11px] text-slate-400 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>100 % unverbindlich · Antwort werktags binnen 24h</span>
                  </div>
                </div>

              </form>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
