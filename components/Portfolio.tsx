
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
    <div id="portfolio" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-10 text-center md:text-left">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-2 block">Rekam Jejak</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">Portofolio Unggulan</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
              {/* Image Container: Menggunakan aspect-video agar tidak terlalu tinggi */}
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img 
                  src={project.image} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Fallback jika jalur absolut gagal, coba relatif tanpa slash
                    if (!target.dataset.secondTry) {
                      target.dataset.secondTry = 'true';
                      target.src = project.image.substring(1); 
                    } else {
                      target.src = `https://placehold.co/600x338/003366/white?text=Proyek+${index+1}`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                   <span className="px-2 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-wider rounded">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight line-clamp-2 min-h-[2.5rem]">
                  {project.title}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-medium italic">
                    <svg className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    </svg>
                    <span className="truncate max-w-[140px]">{project.location}</span>
                  </div>
                  <span className="text-slate-400 font-bold text-[10px]">{project.year}</span>
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
