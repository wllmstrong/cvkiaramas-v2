
import React from 'react';

const projects = [
  {
    title: "Repair Kebocoran Kolam IPAL & Waterproofing Coating",
    location: "PT. Panca Kraft Pratama, Tangerang",
    category: "Industrial",
    year: "2025",
    image: "/p-1.webp"
  },
  {
    title: "Perbaikan Lapisan Beton Kolam Pengolahan Limbah Industri (IPAL)",
    location: "PT. Krakatau Steel, Cilegon - Banten",
    category: "Industrial",
    year: "2025",
    image: "/p-2.webp"
  },
  {
    title: "Pemasangan Waterproofing Kolam Renang & Kamar Mandi",
    location: "Hotel JENG RATU, Pangandaran",
    category: "Hospitality",
    year: "-",
    image: "/p-3.webp"
  }
];

const Portfolio: React.FC = () => {
  return (
    <div id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3 block">Rekam Jejak</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Portofolio Unggulan</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-slate-100 rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-sm hover:shadow-2xl transition-all duration-700">
              <img 
                src={project.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt={project.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/400x500/003366/white?text=Proyek+${index+1}`;
                }}
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
