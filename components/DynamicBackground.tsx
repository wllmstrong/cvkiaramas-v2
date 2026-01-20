
import React, { useState, useEffect } from 'react';
import bg1 from '../bg1.webp';
import bg2 from '../bg2.webp';
import bg3 from '../bg3.webp';

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
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[3000ms] ease-in-out ${
            index === currentIndex ? 'opacity-30' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            transform: index === currentIndex ? 'scale(1.05)' : 'scale(1)',
            transition: 'opacity 3000ms ease-in-out, transform 12000ms linear'
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/60 to-slate-950"></div>
      
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
    </div>
  );
};

export default DynamicBackground;
