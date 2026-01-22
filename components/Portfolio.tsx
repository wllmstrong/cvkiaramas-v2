import React from 'react';
import { IMAGES } from '../constants/images';

const projects = [
  {
    title: "Repair Kebocoran Kolam IPAL & Waterproofing Coating",
    location: "PT. Panca Kraft Pratama, Tangerang",
    category: "Industrial",
    year: "2025",
    image: IMAGES.portfolio[0].local
  },
  {
    title: "Perbaikan Lapisan Beton Kolam Pengolahan Limbah Industri (IPAL)",
    location: "PT. Krakatau Steel, Cilegon - Banten",
    category: "Industrial",
    year: "2025",
    image: IMAGES.portfolio[1].local
  },
  {
    title: "Pemasangan Waterproofing Kolam Renang dan Kamar Mandi",
    location: "Hotel Jeng Ratu - Pantai Barat Pangandaran",
    category: "Hospitality",
    year: "2024",
    image: IMAGES.portfolio[2].local
  },
  {
    title: "Repair Kebocoran Kolam Renang",
    location: "Puri Bintaro - Jakarta Selatan",
    category: "Residential",
    year: "2024",
    image: IMAGES.portfolio[3].local
  }
];

const Portfolio: React.FC = () => {
  return (
    <div id="portfolio" className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[11px] mb-4 block">Rekam Jejak</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">Portofolio Unggulan</h2>
          <div className="w-24 h-2 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                <img 
                  src={project.image}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-125"
                  alt={project.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-80"></div>
                
                <div className="absolute top-6 right-6">
                   <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-full">
                    {project.year}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                   <span className="inline-block px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-lg mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start gap-2.5 text-slate-500 text-xs font-semibold">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <circle cx="12" cy="10" r="3" strokeWidth="2.5"></circle>
                  </svg>
                  <span className="leading-relaxed">{project.location}</span>
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