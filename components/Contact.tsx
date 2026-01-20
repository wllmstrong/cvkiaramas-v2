import React from 'react';

const Contact = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto bg-slate-50 rounded-[3rem] p-12 shadow-sm border border-slate-100">
        <h2 className="text-3xl font-black text-center mb-12">Lokasi Kami</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-bold text-blue-600 uppercase tracking-widest text-xs mb-4">Kantor Pusat (Cikarang)</h3>
            <p className="text-slate-600 leading-relaxed">Catalonia C-27 KOTA DELTA MAS RT.004/RW.002, Ds. Sukamahi – Cikarang Pusat – Kab. BEKASI</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-600 uppercase tracking-widest text-xs mb-4">Kantor Cabang (Bandung)</h3>
            <p className="text-slate-600 leading-relaxed">Jl. Kiaracondong Gg Lebak No. 31/125A RT.01/RW.08, Bandung 40272</p>
          </div>
        </div>
        <div className="mt-12 text-center pt-12 border-t border-slate-200">
          <p className="text-slate-500 text-sm mb-2 font-bold">Email: cv.kiaramas05@gmail.com</p>
          <p className="text-slate-500 text-sm font-bold">Phone: 022-7234697 / 022-20523262</p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;