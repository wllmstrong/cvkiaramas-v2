import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import Legality from './components/Legality';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import DynamicBackground from './components/DynamicBackground';

// Import contoh aset untuk pengecekan
import bg1 from './assets/bg1.webp';
import p11 from './assets/11.webp';

const App: React.FC = () => {
  useEffect(() => {
    console.log("%c🚀 KIARA MAS - PRODUCTION MODE ACTIVE", "color: white; background: #059669; padding: 4px 12px; border-radius: 4px; font-weight: bold;");
    
    const checkAsset = (name: string, path: string) => {
      const img = new Image();
      img.onload = () => console.log(`%c✅ LOADED: ${name}`, "color: #10b981;");
      img.onerror = () => console.error(`%c❌ MISSING: ${name} (Path: ${path})`, "color: #ef4444; font-weight: bold;");
      img.src = path;
    };

    checkAsset('Main Background', bg1);
    checkAsset('Portfolio Image', p11);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <DynamicBackground />
      <Navbar />
      
      <main>
        <Hero />
        <div className="bg-white">
          <About />
        </div>
        <VisionMission />
        <div className="bg-slate-50">
          <Services />
        </div>
        <div className="bg-white">
          <Portfolio />
        </div>
        <CaseStudies />
        <Legality />
        <Team />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default App;