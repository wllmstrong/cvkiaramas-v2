
import React from 'react';
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
