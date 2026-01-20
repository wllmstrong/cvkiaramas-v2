import React from 'react';

const Services = () => (
  <section id="services" className="py-24 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-black text-slate-900 mb-4">Layanan Unggulan</h2>
      <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-16"></div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: '🌊', title: 'Waterproofing', desc: 'Sistem membran bakar, semen base, dan coating premium.' },
          { icon: '💉', title: 'Injeksi PU', desc: 'Menutup retak beton dengan sistem injeksi tekanan tinggi.' },
          { icon: '🏗️', title: 'Repair Beton', desc: 'Perbaikan struktur beton keropos dan penguatan pondasi.' }
        ].map((item, i) => (
          <div key={i} className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
            <div className="text-5xl mb-6">{item.icon}</div>
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;