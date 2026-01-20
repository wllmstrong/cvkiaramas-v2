import React, { useState, useEffect } from 'react';

const DynamicBackground: React.FC = () => {
  // Menggunakan asset lokal yang telah diupload ke root GitHub Anda
  const images = [
    "/bg1.webp",
    "/bg2.webp",
    "/bg3.webp"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000); // Berganti setiap 8 detik agar tidak terlalu cepat
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[3000ms] ease-in-out ${
            index === currentIndex ? 'opacity-50' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            transform: index === currentIndex ? 'scale(1.1)' : 'scale(1)',
            transition: 'opacity 3000ms ease-in-out, transform 12000ms linear'
          }}
        />
      ))}
      
      {/* Gradient Overlay: Memberikan kontras yang kuat untuk teks putih di atasnya */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/40 to-slate-950"></div>
      
      {/* Modern Engineering Grid Pattern (Dots) */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      ></div>

      <style>{`
        /* Menghaluskan pergerakan zoom agar tidak patah-patah */
        .bg-cover {
          will-change: opacity, transform;
        }
      `}</style>
    </div>
  );
};

export default DynamicBackground;