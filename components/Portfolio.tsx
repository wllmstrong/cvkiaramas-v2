
import React from 'react';

// Menggunakan URL constructor agar Vite dapat melacak file di root dari dalam folder components
const p1 = new URL('../p1.webp', import.meta.url).href;
const p2 = new URL('../p2.webp', import.meta.url).href;
const p3 = new URL('../p3.webp', import.meta.url).href;

const projects = [
  {
    title: "Repair Kebocoran Kolam IPAL & Waterproofing Coating",
    location: "PT. Panca Kraft Pratama, Tangerang",
    category: "Industrial",
    year: "2025",
    image: p1
  },
  {
    title: "Perbaikan Lapisan Beton Kolam Pengolahan Limbah Industri (IPAL)",
    location: "PT. Krakatau Steel, Cilegon - Banten",
    category: "Industrial",
    year: "2025",
    image: p2
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Image Container: Fixed Aspect Ratio */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                <img 
                  src={project.image} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={project.title}
                  loading="lazy"
                />
                {/* Overlay: Diperhalus agar tidak menutupi gambar */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                <div className="absolute bottom-4 left-4">
                   <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-wider rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-extrabold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <div className="mt-auto pt-5 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-500 text-[11px] font-semibold italic">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    </svg>
                    <span className="truncate max-w-[160px]">{project.location}</span>
                  </div>
                  <span className="text-slate-400 font-black text-[11px] bg-slate-50 px-2 py-1 rounded">{project.year}</span>
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
