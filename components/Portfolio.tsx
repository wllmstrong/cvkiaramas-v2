
import React from 'react';

const projects = [
  {
    title: "Waterproofing Bak Penampungan / STP",
    location: "Kawasan Industri, Bekasi",
    category: "Industrial",
    year: "2023",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800"
  },
  {
    title: "Proteksi Kedap Air Kolam Renang",
    location: "Residensial Mewah, Jakarta",
    category: "Hospitality",
    year: "2022",
    image: "https://images.unsplash.com/photo-1562095241-8c6714fd4178?q=80&w=800"
  },
  {
    title: "Repair Struktur Beton Tangga",
    location: "Infrastruktur Publik, Bandung",
    category: "Construction",
    year: "2023",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800"
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3 block">Rekam Jejak</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Portofolio Unggulan</h2>
          </div>
          <button className="text-blue-600 font-bold text-sm uppercase tracking-widest hover:text-blue-700 transition-colors flex items-center gap-2 group">
            Lihat Semua Proyek
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-slate-100 rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-sm hover:shadow-2xl transition-all duration-700">
              <img 
                src={project.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
                <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="text-slate-300 text-xs flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                    {project.location}
                  </span>
                  <span className="text-white font-bold text-xs">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
