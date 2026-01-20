
import React from 'react';
// Import gambar secara eksplisit agar dikenali oleh Vite
import p1 from '../p-1.webp';
import p2 from '../p-2.webp';
import p3 from '../p-3.webp';

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
    year: "-",
    image: p3
  }
];

const Portfolio: React.FC = () => {
  return (
    <div id="portfolio" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-8 text-center md:text-left">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-2 block">Rekam Jejak</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">Portofolio Unggulan</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
              {/* Image Container: aspect-video membuat gambar lebih landai (16:9) */}
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img 
                  src={project.image} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={project.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                   <span className="px-2 py-0.5 bg-blue-600 text-white text-[8px] font-black uppercase tracking-wider rounded">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight line-clamp-2 min-h-[2.5rem]">
                  {project.title}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-medium italic">
                    <svg className="w-3 h-3 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    </svg>
                    <span className="truncate max-w-[150px]">{project.location}</span>
                  </div>
                  <span className="text-slate-400 font-bold text-[9px]">{project.year}</span>
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
