
import React from 'react';

const team = [
  {
    role: "Komisaris",
    name: "Neneng Hernawati",
    initials: "NH"
  },
  {
    role: "Direktur",
    name: "Reiza Akbar Rismaya",
    initials: "RA"
  },
  {
    role: "Direktur",
    name: "Dadiek Siswanto",
    initials: "DS"
  }
];

const Team: React.FC = () => {
  return (
    <div className="py-24 bg-white relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[11px] mb-4 block">
            Struktur Organisasi
          </span>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Susunan Dewan Direksi
          </h3>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-600 leading-relaxed font-medium text-lg">
            Struktur kepemimpinan CV. Kiara Mas yang berdedikasi tinggi dalam menjaga integritas operasional dan kualitas teknis di setiap proyek.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="group relative bg-slate-50 p-12 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 text-center overflow-hidden">
              {/* Subtle Decorative Gradient */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-28 h-28 bg-slate-900 rounded-[2rem] mx-auto mb-10 flex items-center justify-center shadow-2xl shadow-slate-200 group-hover:bg-blue-600 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <span className="text-3xl font-black text-white tracking-widest">{member.initials}</span>
                </div>
                
                <h4 className="text-2xl font-black text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h4>
                
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-600/20">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  {member.role}
                </div>
              </div>

              {/* Bottom Slogan */}
              <div className="mt-10 pt-8 border-t border-slate-200/50 group-hover:border-blue-100 transition-colors">
                <p className="text-[10px] text-slate-400 group-hover:text-blue-400 font-bold uppercase tracking-[0.2em] italic transition-colors">
                  Integritas • Kualitas • Komitmen
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
