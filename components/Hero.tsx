
import React from 'react';

const Hero = () => (
  <section className="min-h-screen flex items-center text-white pt-20">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl">
        <p className="text-blue-400 font-bold tracking-[0.3em] uppercase mb-4 text-sm animate-pulse">
          Spesialis Konstruksi & Waterproofing
        </p>
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          Solusi Beton <br/>
          <span className="text-blue-500 bg-clip-text">Kuat & Kedap Air</span>
        </h1>
        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
          Berpengalaman sejak 2010 menangani kebocoran bangunan, kolam renang, bak kolam IPAL industri, dan proteksi struktur beton dengan teknologi terkini dari Fosroc.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95">
            Konsultasi Gratis
          </a>
          <a href="#services" className="px-8 py-4 bg-white/10 border border-white/20 font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm">
            Lihat Layanan
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
