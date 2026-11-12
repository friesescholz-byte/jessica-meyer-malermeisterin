import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Scale, Lock, Eye, ExternalLink, Phone, Mail, MapPin } from 'lucide-react';
import { useLegalModal } from '../context/LegalModalContext';

export default function LegalModal() {
  const { isOpen, activeTab, setActiveTab, closeLegalModal } = useLegalModal();
  const contentRef = useRef(null);

  // Body Scroll sperren, solange das Fenster offen ist & ESC-Taste unterstützen
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeLegalModal();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, closeLegalModal]);

  // Wenn Tab gewechselt wird, scrollt der Inhalt sanft nach oben
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          
          {/* Milchiger, abgedunkelter Hintergrund mit Klick zum Schließen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLegalModal}
            className="fixed inset-0 bg-slate-950/65 backdrop-blur-md"
          />

          {/* Das eigentliche Modal-Fenster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl z-10 flex flex-col max-h-[92vh] sm:max-h-[88vh] overflow-hidden"
          >
            {/* Modal Header: Sticky mit Logo, Tab-Leiste & Schließen-Button */}
            <div className="border-b border-slate-200/90 px-4 sm:px-8 py-3.5 sm:py-4.5 bg-white/95 backdrop-blur-md flex flex-col gap-3 shrink-0">
              
              <div className="flex items-center justify-between">
                {/* Brand Accent & Title */}
                <div className="flex items-center space-x-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0084C7]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" />
                  <span className="text-[11px] sm:text-xs font-headline font-bold uppercase tracking-widest text-[#0084C7] ml-1">
                    Rechtliche Hinweise · Meisterbetrieb
                  </span>
                </div>

                {/* Schließen Button */}
                <button
                  onClick={closeLegalModal}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                  aria-label="Fenster schließen"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.2} />
                </button>
              </div>

              {/* Die 3 Tabs: Impressum | Datenschutz | Barrierefreiheit */}
              <div className="flex items-center space-x-1 sm:space-x-2 bg-slate-100/80 p-1 rounded-xl sm:rounded-2xl">
                <button
                  onClick={() => setActiveTab('impressum')}
                  className={`flex-1 py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                    activeTab === 'impressum'
                      ? 'bg-white text-[#171815] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0084C7]" />
                  <span>Impressum</span>
                </button>

                <button
                  onClick={() => setActiveTab('datenschutz')}
                  className={`flex-1 py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                    activeTab === 'datenschutz'
                      ? 'bg-white text-[#171815] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10B981]" />
                  <span>Datenschutz</span>
                </button>

                <button
                  onClick={() => setActiveTab('barrierefreiheit')}
                  className={`flex-1 py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                    activeTab === 'barrierefreiheit'
                      ? 'bg-white text-[#171815] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E11D48]" />
                  <span className="truncate">Barrierefreiheit</span>
                </button>
              </div>

            </div>

            {/* Scrollbarer Inhaltsbereich */}
            <div 
              ref={contentRef}
              className="p-5 sm:p-8 md:p-10 overflow-y-auto flex-1 text-slate-700 text-sm sm:text-base leading-relaxed space-y-6"
            >
              
              {/* TAB 1: IMPRESSUM */}
              {activeTab === 'impressum' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#171815] tracking-tight mb-2">
                      Impressum
                    </h2>
                    <p className="text-xs text-slate-500">
                      Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-slate-200">
                    <h3 className="font-headline text-base sm:text-lg font-bold text-[#171815] mb-2">
                      Diensteanbieterin
                    </h3>
                    <p className="font-medium text-[#171815]">
                      Jessica Meyer<br />
                      <strong>Malermeisterin · Handwerksbetrieb</strong><br />
                      Glisser Bruch 7<br />
                      31604 Raddestorf (Ortsteil Glissen)<br />
                      Deutschland
                    </p>
                  </div>

                  <div>
                    <h3 className="font-headline text-base sm:text-lg font-bold text-[#171815] mb-2">
                      Kontakt
                    </h3>
                    <p>
                      Telefon: <a href="tel:015129585277" className="text-[#0084C7] font-semibold hover:underline">01512 9585277</a><br />
                      E-Mail: <a href="mailto:mail@jessica-meyer-malermeisterin.de" className="text-[#0084C7] font-semibold hover:underline">mail@jessica-meyer-malermeisterin.de</a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-headline text-base sm:text-lg font-bold text-[#171815] mb-2">
                      Berufsbezeichnung &amp; berufsrechtliche Regelungen
                    </h3>
                    <p className="mb-2">
                      <strong>Gesetzliche Berufsbezeichnung:</strong> Malermeisterin<br />
                      (verliehen in der Bundesrepublik Deutschland)
                    </p>
                    <p className="mb-2">
                      <strong>Zuständige Kammer:</strong><br />
                      Handwerkskammer Hannover<br />
                      Berliner Allee 17, 30175 Hannover<br />
                      Website: <a href="https://www.hwk-hannover.de" target="_blank" rel="noopener noreferrer" className="text-[#0084C7] hover:underline inline-flex items-center space-x-1"><span>www.hwk-hannover.de</span><ExternalLink className="w-3 h-3" /></a>
                    </p>
                    <p>
                      <strong>Berufsrechtliche Regelungen:</strong><br />
                      Handwerksordnung (HwO) – Gesetz zur Ordnung des Handwerks.<br />
                      Regelungen einsehbar unter: <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer" className="text-[#0084C7] hover:underline inline-flex items-center space-x-1"><span>www.gesetze-im-internet.de/hwo/</span><ExternalLink className="w-3 h-3" /></a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-headline text-base sm:text-lg font-bold text-[#171815] mb-2">
                      Umsatzsteuer
                    </h3>
                    <p>
                      Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                      Befreiung von der Umsatzsteuer gemäß § 19 UStG (Kleinunternehmerregelung) bzw. Steuernummer erteilt durch das Finanzamt Nienburg/Weser.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-headline text-base sm:text-lg font-bold text-[#171815] mb-2">
                      Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                    </h3>
                    <p>
                      Jessica Meyer<br />
                      Glisser Bruch 7<br />
                      31604 Raddestorf
                    </p>
                  </div>

                  <div>
                    <h3 className="font-headline text-base sm:text-lg font-bold text-[#171815] mb-2">
                      EU-Streitschlichtung &amp; Verbraucherstreitbeilegung
                    </h3>
                    <p className="mb-2">
                      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                      <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#0084C7] hover:underline ml-1">https://ec.europa.eu/consumers/odr/</a>.
                    </p>
                    <p>
                      Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: DATENSCHUTZ */}
              {activeTab === 'datenschutz' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#171815] tracking-tight mb-2">
                      Datenschutzerklärung
                    </h2>
                    <p className="text-xs text-slate-500">
                      Stand: Oktober 2026 · DSGVO &amp; TDDDG-konform
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-slate-200">
                    <h3 className="font-headline text-base sm:text-lg font-bold text-[#171815] mb-2">
                      1. Name und Kontaktdaten der verantwortlichen Stelle
                    </h3>
                    <p className="font-medium text-[#171815]">
                      Jessica Meyer · Malermeisterin<br />
                      Glisser Bruch 7, 31604 Raddestorf (Glissen)<br />
                      Telefon: 01512 9585277<br />
                      E-Mail: mail@jessica-meyer-malermeisterin.de
                    </p>
                  </div>

                  <div>
                    <h3 className="font-headline text-base sm:text-lg font-bold text-[#171815] mb-2">
                      2. Hosting über Cloudflare Pages &amp; R2 Storage
                    </h3>
                    <p className="mb-2">
                      Wir hosten diese Website bei dem Anbieter <strong>Cloudflare, Inc.</strong>, 101 Townsend St, San Francisco, CA 94107, USA.
                    </p>
                    <p className="mb-2">
                      Beim Aufruf unserer Seiten erfasst Cloudflare technische Logfiles inklusive Ihrer IP-Adresse, um die Sicherheit und Auslieferungsgeschwindigkeit der Website zu gewährleisten (CDN). Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission sowie das EU-US Data Privacy Framework gestützt.
                    </p>
                    <p>
                      Rechtsgrundlage ist unser berechtigtes Interesse an einer schnellen, sicheren und fehlerfreien Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-headline text-base sm:text-lg font-bold text-[#171815] mb-2">
                      3. Spam- &amp; Bot-Schutz: Cloudflare Turnstile
                    </h3>
                    <p>
                      Wir nutzen <strong>Cloudflare Turnstile</strong> zur Absicherung unseres Kontaktformulars gegen automatisierte Bots und Spam. Turnstile analysiert das Nutzerverhalten anhand browserbasierter Parameter, setzt dabei jedoch keine tracking-fähigen Cookies ein und sammelt keine privaten Nutzerdaten zu Werbezwecken. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-headline text-base sm:text-lg font-bold text-[#171815] mb-2">
                      4. Cookies und lokale Speicherung
                    </h3>
                    <p>
                      Technisch notwendige Cookies werden nach § 25 Abs. 2 TDDDG bzw. Art. 6 Abs. 1 lit. f DSGVO verarbeitet. Analyse- oder Marketing-Cookies (z. B. Google Analytics oder Meta Pixel) werden ausschließlich nach Ihrer ausdrücklichen Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 Abs. 1 TDDDG aktiviert und können jederzeit für die Zukunft widerrufen werden.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-headline text-base sm:text-lg font-bold text-[#171815] mb-2">
                      5. Kontaktaufnahme (Formular, Telefon, WhatsApp, E-Mail)
                    </h3>
                    <p>
                      Wenn Sie uns kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage auf Grundlage von <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) vertraulich gespeichert. Ihre Daten werden nicht ohne Ihre Zustimmung an unbefugte Dritte weitergegeben.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-headline text-base sm:text-lg font-bold text-[#171815] mb-2">
                      6. Analyse &amp; Marketing: Google Analytics &amp; Meta Pixel
                    </h3>
                    <p>
                      Soweit eingewilligt, nutzen wir <strong>Google Analytics</strong> (Google Ireland Ltd.) mit aktivierter IP-Anonymisierung zur statistischen Reichweitenmessung sowie das <strong>Meta-Pixel</strong> (Meta Platforms Ireland Ltd.) zur Auswertung von Werbekampagnen. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-headline text-base sm:text-lg font-bold text-[#171815] mb-2">
                      7. Ihre Rechte als betroffene Person
                    </h3>
                    <p>
                      Sie haben jederzeit das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO). Zudem steht Ihnen ein Widerspruchsrecht nach Art. 21 DSGVO zu.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-[#171815] text-xs uppercase tracking-wider mb-1">
                      Zuständige Aufsichtsbehörde in Niedersachsen:
                    </h4>
                    <p className="text-xs">
                      Die Landesbeauftragte für den Datenschutz Niedersachsen<br />
                      Prinzenstraße 5, 30159 Hannover · <a href="https://lfd.niedersachsen.de" target="_blank" rel="noopener noreferrer" className="text-[#0084C7] hover:underline">www.lfd.niedersachsen.de</a>
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 3: BARRIEREFREIHEIT */}
              {activeTab === 'barrierefreiheit' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#171815] tracking-tight mb-2">
                      Erklärung zur Barrierefreiheit
                    </h2>
                    <p className="text-xs text-slate-500">
                      Stand: Oktober 2026 · Barrierefreiheitsstärkungsgesetz (BFSG) &amp; EAA
                    </p>
                  </div>

                  <p>
                    Die Betreiberin dieser Website (<strong>Jessica Meyer · Malermeisterin</strong>) legt großen Wert auf eine barrierefreie Zugänglichkeit ihrer digitalen Inhalte für alle Menschen.
                  </p>

                  <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-slate-200">
                    <h3 className="font-headline text-base sm:text-lg font-bold text-[#171815] mb-2">
                      1. Stand der Vereinbarkeit mit den Anforderungen
                    </h3>
                    <p>
                      Diese Website ist <strong>weitestgehend mit den Vorgaben der BITV 2.0</strong> sowie den Richtlinien der <strong>WCAG 2.1 / 2.2 Konformitätsstufe AA</strong> und der harmonisierten europäischen Norm <strong>EN 301 549</strong> vereinbar.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-headline text-base sm:text-lg font-bold text-[#171815] mb-2">
                      2. Noch bestehende Einschränkungen
                    </h3>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                      <li><strong>Externe Karteninhalte (Google Maps):</strong> Die Barrierefreiheit bei der interaktiven Kartendarstellung wird durch Drittanbieter vorgegeben. Sämtliche Adressdaten sind vollumfänglich als barrierefreier Text bereitgestellt.</li>
                      <li><strong>Ältere PDF-Dokumente:</strong> Einzelne ältere PDF-Dateien sind unter Umständen noch nicht vollends barrierefrei strukturiert und werden sukzessive aktualisiert.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-headline text-base sm:text-lg font-bold text-[#171815] mb-2">
                      3. Feedback &amp; Kontaktangaben
                    </h3>
                    <p className="mb-2">
                      Haben Sie Barrieren auf unserer Website bemerkt? Bitte schreiben Sie uns direkt:
                    </p>
                    <p className="font-medium text-[#171815]">
                      Jessica Meyer · Malermeisterin<br />
                      Glisser Bruch 7, 31604 Raddestorf<br />
                      Telefon: <a href="tel:015129585277" className="text-[#0084C7] hover:underline">01512 9585277</a><br />
                      E-Mail: <a href="mailto:mail@jessica-meyer-malermeisterin.de" className="text-[#0084C7] hover:underline">mail@jessica-meyer-malermeisterin.de</a>
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-[#171815] text-xs uppercase tracking-wider mb-1">
                      Durchsetzungsstelle für digitale Barrierefreiheit Niedersachsen:
                    </h4>
                    <p className="text-xs">
                      Niedersächsisches Ministerium für Soziales, Arbeit, Gesundheit und Gleichstellung<br />
                      Hannah-Arendt-Platz 2, 30159 Hannover · E-Mail: <a href="mailto:barrierefreie-it@ms.niedersachsen.de" className="text-[#0084C7] hover:underline">barrierefreie-it@ms.niedersachsen.de</a>
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="border-t border-slate-200 px-4 sm:px-8 py-3 bg-slate-50/80 flex items-center justify-between text-xs text-slate-500 shrink-0">
              <span>© {new Date().getFullYear()} Jessica Meyer · Malermeisterin</span>
              <button
                onClick={closeLegalModal}
                className="px-4 py-1.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold transition-colors cursor-pointer"
              >
                Schließen
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
