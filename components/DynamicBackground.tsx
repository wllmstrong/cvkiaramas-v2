
import React, { useState, useEffect } from 'react';

/**
 * DynamicBackground v1.0.1
 * Menggunakan aset lokal /bg1.webp, /bg2.webp, /bg3.webp
 */
const DynamicBackground: React.FC = () => {
  const images = [
    "/bg1.webp",
    "/bg2.webp",
    "/bg3.webp"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000); 
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950">
      {images.map((img, index) => (
        <div
          key={`${img}-${index}`}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[3000ms] ease-in-out ${
            index === currentIndex ? 'opacity-40' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            transform: index === currentIndex ? 'scale(1.05)' : 'scale(1)',
            transition: 'opacity 3000ms ease-in-out, transform 12000ms linear'
          }}
        />
      ))}
      
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-slate-950"></div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <style>{`
        .bg-cover {
          will-change: opacity, transform;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default DynamicBackground;
