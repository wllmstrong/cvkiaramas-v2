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

const App: React.FC = () => {
  useEffect(() => {
    console.log("%c🚀 CV. KIARA MAS - PROFILE LIVE", "color: white; background: #2563eb; padding: 6px 16px; border-radius: 8px; font-weight: 800; font-size: 14px;");
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <DynamicBackground />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <Portfolio />
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