
import React from 'react';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.05.087l-1.069.427A2 2 0 011 13.848V5a2 2 0 012-2h16a2 2 0 012 2v9.348a2 2 0 01-1.572 1.953l-1.069-.427z" />
      </svg>
    ),
    title: 'Waterproofing System',
    desc: 'Solusi pelapisan kedap air menggunakan membran bakar, semen base premium, dan liquid coating untuk atap, dak, dan balkon.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'High Pressure Injection',
    desc: 'Teknologi Injeksi PU (Polyurethane) tekanan tinggi untuk menghentikan kebocoran pada beton retak secara instan dan permanen.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Concrete Repair',
    desc: 'Perbaikan struktur beton keropos, penguatan kolom, dan restorasi dinding penahan tanah (TPT) untuk integritas bangunan.'
  }
];

const Services = () => (
  <section id="services" className="py-24 bg-white relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Keahlian Kami</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Layanan Profesional</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
        <p className="text-slate-500 text-lg leading-relaxed">Kami menyediakan solusi teknis yang spesifik untuk setiap tantangan struktur bangunan Anda dengan standar kualitas tertinggi.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {services.map((item, i) => (
          <div key={i} className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/20 group-hover:scale-110 group-hover:rotate-3 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
