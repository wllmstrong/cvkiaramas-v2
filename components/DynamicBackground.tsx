
import React, { useState, useEffect } from 'react';
// Import gambar secara eksplisit dari folder assets
import bg1 from '../assets/bg1.webp';
import bg2 from '../assets/bg2.webp';
import bg3 from '../assets/bg3.webp';

const DynamicBackground: React.FC = () => {
  const images = [bg1, bg2, bg3];
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
        <img
          key={index}
          src={img}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[3000ms] ease-in-out ${
            index === currentIndex ? 'opacity-50 scale-110' : 'opacity-0 scale-100'
          }`}
          style={{
            transition: 'opacity 3000ms ease-in-out, transform 20000ms linear'
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error(`❌ Background Gagal: ${img}`);
            target.style.display = 'none';
          }}
        />
      ))}
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950"></div>
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    </div>
  );
};

export default DynamicBackground;
