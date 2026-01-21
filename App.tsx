
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
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
      {/* Background stays at the back */}
      <DynamicBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Page Content */}
      <main>
        <Hero />
        
        {/* White Section: About */}
        <div className="bg-white">
          <About />
        </div>

        {/* Blue Section: Vision & Mission */}
        <VisionMission />

        {/* Gray Section: Services */}
        <div className="bg-slate-50">
          <Services />
        </div>

        {/* White Section: Portfolio */}
        <div className="bg-white">
          <Portfolio />
        </div>

        {/* Dark Section: Legality */}
        <Legality />

        {/* Gray Section: Team */}
        <Team />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default App;
