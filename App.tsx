
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
    console.log("%c🏗️ CV. KIARA MAS - Diagnostic Mode", "color: #2563eb; font-size: 20px; font-weight: bold;");
    console.log("%cPastikan gambar Anda berada di lokasi berikut:", "color: #64748b; font-size: 14px;");
    console.log("📁 project-root/\n  📁 public/  <-- Letakkan p1.webp, bg1.webp, dll di sini\n  📁 src/\n  📄 package.json");
  }, []);

  return (
    <div className="relative min-h-screen">
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
