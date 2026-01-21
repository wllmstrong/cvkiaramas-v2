
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
    <div className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">Governance</span>
          <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Susunan Dewan Direksi</h3>
          <p className="text-slate-600 leading-relaxed font-medium">
            Struktur kepemimpinan CV. Kiara Mas yang berdedikasi tinggi dalam menjaga integritas operasional dan kualitas teknis di setiap proyek.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-6 rounded-full opacity-30"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="group relative bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 text-center overflow-hidden">
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-slate-900 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-xl shadow-slate-200 group-hover:bg-blue-600 transition-colors duration-500 group-hover:-rotate-3">
                  <span className="text-2xl font-black text-white tracking-widest">{member.initials}</span>
                </div>
                
                <h4 className="text-2xl font-black text-slate-900 mb-2 leading-tight">
                  {member.name}
                </h4>
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  {member.role}
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className="mt-8 pt-8 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Integritas • Kualitas • Komitmen</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
