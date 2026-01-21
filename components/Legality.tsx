
import React from 'react';

const Legality = () => (
  <section id="legality" className="py-24 bg-slate-900 text-white">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black mb-8 italic">Legalitas <br/>Terjamin</h2>
          <p className="text-slate-400 mb-10 text-lg">Keamanan dan kepercayaan klien adalah prioritas utama kami dalam setiap kerjasama proyek.</p>
          <div className="space-y-4">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center">
              <span className="font-bold text-blue-400 uppercase tracking-widest text-xs">NIB</span>
              <span className="font-mono text-xl">9120106822686</span>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center">
              <span className="font-bold text-blue-400 uppercase tracking-widest text-xs">NPWP</span>
              <span className="font-mono text-xl text-sm md:text-xl">31.156.427.2-413.000</span>
            </div>
          </div>

          <div className="mt-10 p-6 bg-blue-600/10 rounded-2xl border border-blue-500/20 flex items-start gap-4">
            <div className="text-2xl mt-1 shrink-0">📄</div>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Untuk <span className="text-white font-bold">Legalitas Detail</span> dan Info Lebih Lanjut, Silahkan Request <span className="text-blue-400 font-black italic underline decoration-blue-400/30 underline-offset-4">Company Profile</span> Perusahaan kami melalui Whatsapp.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-40 bg-blue-600/20 rounded-3xl border border-blue-500/30 flex items-center justify-center text-4xl shadow-2xl shadow-blue-500/10">📜</div>
          <div className="h-40 bg-blue-600/20 rounded-3xl border border-blue-500/30 flex items-center justify-center text-4xl mt-10 shadow-2xl shadow-blue-500/10">🏢</div>
        </div>
      </div>
    </div>
  </section>
);

export default Legality;
