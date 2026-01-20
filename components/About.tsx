
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4 tracking-widest uppercase">
              PROFIL PERUSAHAAN
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Ahli dalam <span className="text-blue-600">Sistem Waterproofing</span> & Proteksi Beton
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>
                CV. Kiara Mas adalah perusahaan spesialis yang berdedikasi tinggi dalam menangani masalah kebocoran bangunan, kolam limbah industri, hingga proteksi struktur beton menggunakan teknologi terkini.
              </p>
              <p>
                Sejak 2010, kami telah dipercaya sebagai aplikator resmi produk-produk <span className="font-bold text-blue-700 underline decoration-blue-300 underline-offset-4">Fosroc</span> dan sistem semen base berkualitas tinggi untuk memastikan properti Anda bebas dari rembesan air yang merusak struktur.
              </p>
              <p className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 italic">
                "Fokus utama kami adalah memberikan solusi teknis yang akurat, bukan sekadar menambal, melainkan memperbaiki sumber masalah secara profesional."
              </p>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-2 transition-transform hover:rotate-0 duration-500">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000" 
                alt="Waterproofing work" 
                className="w-full h-64 md:h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-0 md:-right-6 bg-blue-700 p-6 md:p-8 rounded-2xl shadow-xl text-white max-w-[200px] md:max-w-xs animate-bounce-subtle">
              <p className="text-2xl md:text-4xl font-black mb-1">100%</p>
              <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest opacity-90">Garansi Bebas Bocor</p>
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
