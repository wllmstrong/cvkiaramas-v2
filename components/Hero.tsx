
import React from 'react';

const Hero = () => (
  <section className="min-h-screen flex items-center text-white pt-20 relative">
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl">
        <div className="animate-fade-in-up">
          <p className="text-blue-400 font-black tracking-[0.4em] uppercase mb-6 text-sm flex items-center gap-3">
            <span className="w-10 h-[2px] bg-blue-500"></span>
            Specialist Construction & Waterproofing
          </p>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tighter">
            Solusi Beton <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Kuat & Kedap Air</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed max-w-2xl font-medium opacity-90">
            Berpengalaman sejak 2010 menangani kebocoran infrastruktur industri dan komersial dengan teknologi <span className="text-white font-bold border-b-2 border-blue-500">Fosroc</span>.
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="#contact" className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/40 hover:scale-105 active:scale-95 flex items-center gap-3">
              Konsultasi Gratis
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
            <a href="#portfolio" className="px-10 py-5 bg-white/10 border border-white/20 font-black rounded-2xl hover:bg-white/20 transition-all backdrop-blur-md hover:border-white/40">
              Lihat Portofolio
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <style>{`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in-up {
        animation: fadeInUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }
    `}</style>
  </section>
);

export default Hero;
