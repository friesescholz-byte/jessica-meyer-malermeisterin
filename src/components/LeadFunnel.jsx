import React, { useState } from 'react';
import { Phone, MapPin, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

const services = [
  "Fugenloses Bad (Mikrozement)",
  "Airless-Spritzlackierung (Decken/Wände)",
  "Maler- & Tapezierarbeiten (auch Einzelzimmer)",
  "Hochwertige Bodenbeläge",
  "Fassadenanstrich & Holzschutz",
  "Kleine Reparatur- & Streicharbeit"
];

export default function LeadFunnel() {
  const [selectedServices, setSelectedServices] = useState(["Fugenloses Bad (Mikrozement)"]);
  const [projectType, setProjectType] = useState("Bestandsimmobilie / Sanierung");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone || !name) return;
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 md:py-36 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Phone & Personal Contact (5 Spalten) */}
          <div className="lg:col-span-5">
            <span className="text-[12px] font-bold tracking-[0.2em] text-blue-700 uppercase">
              Kontakt &amp; Beratung
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F294A] mt-3 leading-tight mb-4">
              Lassen Sie uns über Ihr nächstes Raumprojekt sprechen.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Egal ob fugenloses Bad, ein kompletter Neubau oder ein einzelnes Zimmer, das neuen Glanz braucht: Malermeisterin Jessica Meyer berät Sie persönlich und unverbindlich.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-8">
              <a 
                href="tel:015129585277" 
                className="flex items-start space-x-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 transition-colors shadow-2xs group"
              >
                <div className="p-2.5 rounded-lg bg-[#0F294A] text-white shrink-0">
                  <Phone className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">Direkt anrufen oder WhatsApp</span>
                  <span className="text-lg font-bold text-[#0F294A] group-hover:text-blue-700 transition-colors">
                    01512 9585277
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">Mo.–Sa. von 07:30 bis 18:00 Uhr persönlich erreichbar</span>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-800 shrink-0">
                  <MapPin className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">Standort &amp; Werkstatt</span>
                  <span className="text-sm font-bold text-[#0F294A] block mt-0.5">
                    Jessica Meyer · Malermeisterin
                  </span>
                  <span className="text-xs text-slate-600">Glisser Bruch 7, 31604 Raddestorf (Glissen)</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-800 shrink-0">
                  <Clock className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">Kostenfreie Vor-Ort-Besichtigung</span>
                  <span className="text-xs text-slate-600 block mt-0.5">
                    Unverbindliche Beratung mit Farbmustern direkt in Ihren Räumen.
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 60-Second Lead Funnel (7 Spalten) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-[#0F294A] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-[#0F294A] mb-2">
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-6">
                  Malermeisterin Jessica Meyer hat Ihre Projektdaten erhalten und meldet sich innerhalb von 24 Stunden persönlich bei Ihnen zur Terminabsprache.
                </p>
                <div className="inline-flex items-center space-x-2 text-sm font-semibold text-[#0F294A]">
                  <span>Eiliges Vorhaben? Rufen Sie direkt an: 01512 9585277</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#0F294A]">
                      In 60 Sekunden Projekt anfragen
                    </h3>
                    <span className="text-xs font-semibold text-blue-800 bg-blue-50 px-2.5 py-1 rounded">
                      Unverbindlich &amp; Kostenfrei
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Wählen Sie Ihre gewünschten Gewerke – kein Projekt ist uns zu klein!
                  </p>
                </div>

                {/* Step 1: Services Chips */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                    1. Welches Gewerk planen Sie? (Mehrfachauswahl möglich)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((srv, idx) => {
                      const active = selectedServices.includes(srv);
                      return (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => toggleService(srv)}
                          className={`text-xs sm:text-sm font-medium px-3.5 py-2 rounded-lg border transition-all ${
                            active
                              ? 'bg-[#0F294A] text-white border-[#0F294A]'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Project Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                    2. Art des Objekts
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Bestandsimmobilie / Sanierung", "Neubau / Erstbezug"].map((type, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setProjectType(type)}
                        className={`text-xs sm:text-sm font-medium p-3 rounded-lg border text-center transition-all ${
                          projectType === type
                            ? 'bg-[#0F294A] text-white border-[#0F294A]'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Contact Inputs */}
                <div className="space-y-4">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                    3. Ihre Kontaktdaten für den Rückruf
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        required
                        placeholder="Ihr vollständiger Name *" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0F294A] transition-colors"
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        required
                        placeholder="Telefonnummer für Rückruf *" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0F294A] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <input 
                      type="email" 
                      placeholder="E-Mail-Adresse (optional für schriftliches Angebot)" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0F294A] transition-colors"
                    />
                  </div>

                  <div>
                    <textarea 
                      rows={3}
                      placeholder="Kurze Beschreibung oder Brillux-Farbcode (z. B. Flur ca. 15 m², Bad fugenlos, Farbton 15.06.09 etc.)" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0F294A] transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#0F294A] text-white font-medium py-4 rounded-lg hover:bg-blue-900 transition-all flex items-center justify-center space-x-2 active:scale-[0.99] shadow-sm"
                >
                  <span>Kostenfreies Angebot anfordern</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-slate-400 text-center leading-normal">
                  Ihre Daten werden streng vertraulich behandelt und ausschließlich zur Beantwortung Ihrer Anfrage genutzt.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
