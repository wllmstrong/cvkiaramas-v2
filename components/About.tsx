
import React from 'react';
import aboutImg from '../about.webp';

const About: React.FC = () => {
  return (
    <div className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold mb-4 tracking-widest uppercase">
              PROFIL PERUSAHAAN
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Ahli dalam <span className="text-blue-600">Sistem Waterproofing</span> & Proteksi Beton
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-base">
              <p>
                CV. Kiara Mas adalah perusahaan spesialis yang berdedikasi tinggi dalam menangani masalah kebocoran bangunan, kolam limbah industri, hingga proteksi struktur beton menggunakan teknologi terkini.
              </p>
              <p>
                Sejak 2010, kami telah dipercaya sebagai aplikator resmi produk-produk <span className="font-bold text-blue-700 underline decoration-blue-300 underline-offset-4">Fosroc</span> dan sistem semen base berkualitas tinggi.
              </p>
              <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-blue-600 italic text-sm">
                "Fokus utama kami adalah memberikan solusi teknis yang akurat, memperbaiki sumber masalah secara profesional."
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="rounded-3xl overflow-hidden shadow-xl transform lg:rotate-1 bg-slate-100">
              <img 
                src={aboutImg} 
                alt="Proses Kerja CV Kiara Mas" 
                className="w-full h-auto object-cover min-h-[250px]"
              />
            </div>
            <div className="absolute -bottom-4 -right-2 bg-blue-700 p-5 rounded-2xl shadow-lg text-white animate-bounce-subtle">
              <p className="text-2xl font-black">100%</p>
              <p className="text-[9px] font-bold uppercase tracking-widest opacity-90">Garansi Kebocoran</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default About;
