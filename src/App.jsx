import React from 'react';
import { ContactModalProvider } from './context/ContactModalContext';
import { LegalModalProvider } from './context/LegalModalContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Showcases from './components/Showcases';
import RoomDesigner from './components/RoomDesigner';
import AboutJessica from './components/AboutJessica';
import Process from './components/Process';
import FAQ from './components/FAQ';
import LeadFunnel from './components/LeadFunnel';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import LegalModal from './components/LegalModal';

export default function App() {
  return (
    <ContactModalProvider>
      <LegalModalProvider>
        <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0F294A] selection:text-white">
          <Header />
          <main>
            <Hero />
            <ProblemSection />
            <Showcases />
            <RoomDesigner />
            <AboutJessica />
            <Process />
            <FAQ />
            <LeadFunnel />
          </main>
          <Footer />
          <ContactModal />
          <LegalModal />
        </div>
      </LegalModalProvider>
    </ContactModalProvider>
  );
}
