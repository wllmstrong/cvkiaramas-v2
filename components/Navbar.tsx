
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = (baseColor: string) => `hover:text-blue-600 transition-colors ${
    scrolled ? 'text-slate-600' : baseColor
  }`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-lg py-3 shadow-md' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-600/20">
            KM
          </div>
          <div className="flex flex-col">
            <span className={`font-black tracking-tighter leading-none ${scrolled ? 'text-slate-900' : 'text-white'}`}>CV. KIARA MAS</span>
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${scrolled ? 'text-blue-600' : 'text-blue-400'}`}>Specialist Construction</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
          <a href="#services" className={navLinkClass('text-white/80 hover:text-white')}>Layanan</a>
          <a href="#portfolio" className={navLinkClass('text-white/80 hover:text-white')}>Portofolio</a>
          <a href="#casestudies" className={navLinkClass('text-white/80 hover:text-white')}>Studi Kasus</a>
          <a href="#legality" className={navLinkClass('text-white/80 hover:text-white')}>Legalitas</a>
          <a href="#contact" className={navLinkClass('text-white/80 hover:text-white')}>Kontak</a>
        </div>

        <a href="#contact" className={`hidden md:block px-5 py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest transition-all ${
          scrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white/10 text-white backdrop-blur-md hover:bg-white/20 border border-white/20'
        }`}>
          Free Quote
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
