import React from 'react';
import { IMAGES } from '../constants/images';

const About: React.FC = () => {
  return (
    <div className="py-24 md:py-32 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black mb-6 tracking-[0.2em] uppercase">
              SEJAK 2010
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
              Solusi <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Tuntas</span> <br/>Kebocoran Struktur
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-medium">
              <p>
                CV. Kiara Mas hadir sebagai mitra strategis dalam menjaga integritas struktur bangunan Anda. Kami bukan sekadar aplikator, kami adalah konsultan teknis yang memahami karakter beton.
              </p>
              <p>
                Dengan dukungan material kelas dunia dari <span className="font-extrabold text-blue-700">Fosroc</span>, setiap proyek kami tangani dengan presisi tinggi untuk memastikan hasil yang permanen dan bergaransi.
              </p>
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border-l-8 border-blue-600 text-slate-700 font-medium italic relative shadow-sm">
                <span className="absolute -top-4 -left-2 text-6xl text-blue-200 opacity-50 font-serif">"</span>
                Keamanan struktur bangunan Anda adalah prioritas mutlak kami. Kami memperbaiki hingga ke akar masalah, bukan sekadar menambal permukaan.
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform lg:rotate-2 bg-slate-100 border-[12px] border-white ring-1 ring-slate-100">
              <img 
                src={IMAGES.about} 
                alt="Operasional CV Kiara Mas" 
                className="w-full h-full object-cover min-h-[500px]"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -left-10 z-20 bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl text-white transform -rotate-3 border border-slate-800">
              <p className="text-5xl font-black text-blue-500 mb-1 leading-none tracking-tighter">14+</p>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-80">Tahun Pengalaman</p>
            </div>
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;