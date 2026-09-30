import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProblemSection from './components/ProblemSection';
import Showcases from './components/Showcases';
import RoomDesigner from './components/RoomDesigner';
import AboutJessica from './components/AboutJessica';
import Process from './components/Process';
import ServiceArea from './components/ServiceArea';
import FAQ from './components/FAQ';
import LeadFunnel from './components/LeadFunnel';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0F294A] selection:text-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <Showcases />
        <RoomDesigner />
        <AboutJessica />
        <Process />
        <ServiceArea />
        <FAQ />
        <LeadFunnel />
      </main>
      <Footer />
    </div>
  );
}
