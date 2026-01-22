
import React from 'react';
import p11 from '../assets/11.webp';
import p2 from '../assets/p2.webp';
import p3 from '../assets/p3.webp';
import p4 from '../assets/p4.webp';

const projects = [
  {
    title: "Repair Kebocoran Kolam IPAL & Waterproofing Coating",
    location: "PT. Panca Kraft Pratama, Tangerang",
    category: "Industrial",
    year: "2025",
    image: p11
  },
  {
    title: "Perbaikan Lapisan Beton Kolam Pengolahan Limbah Industri (IPAL)",
    location: "PT. Krakatau Steel, Cilegon - Banten",
    category: "Industrial",
    year: "2025",
    image: p2
  },
  {
    title: "Repair Kebocoran Kolam Renang",
    location: "Puri Bintaro PB.1 / 30 Sektor 9 – Jakarta Selatan",
    category: "Residential",
    year: "2024",
    image: p4
  },
  {
    title: "Pemasangan Waterproofing Kolam Renang & Kamar Mandi",
    location: "Hotel JENG RATU, Pangandaran",
    category: "Hospitality",
    year: "2024",
    image: p3
  }
];

const Portfolio: React.FC = () => {
  return (
    <div id="portfolio" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-10 text-center">
          <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">Rekam Jejak</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Portofolio Unggulan</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img 
                  src={project.image} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    console.warn(`⚠️ Gagal memuat proyek ke-${index + 1}`);
                    if (!target.src.includes('placehold.co')) {
                       target.src = `https://placehold.co/800x600/007bff/ffffff?text=Image+Missing`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute bottom-3 left-3">
                   <span className="px-2 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-[8px] font-black uppercase tracking-wider rounded-lg shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-md font-extrabold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <div className="mt-auto pt-4 border-t border-slate-50 flex flex-col gap-2">
                  <div className="flex items-start gap-1.5 text-slate-500 text-[10px] font-semibold italic">
                    <svg className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    </svg>
                    <span className="leading-tight">{project.location}</span>
                  </div>
                  <div className="flex justify-end">
                    <span className="text-slate-400 font-black text-[9px] bg-slate-50 px-2 py-0.5 rounded">{project.year}</span>
                  </div>
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
