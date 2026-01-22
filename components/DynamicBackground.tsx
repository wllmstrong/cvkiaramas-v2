import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants/images';

const DynamicBackground: React.FC = () => {
  const images = IMAGES.hero;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
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
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[3000ms] ease-in-out ${
            index === currentIndex ? 'opacity-40 scale-110 blur-0' : 'opacity-0 scale-100 blur-sm'
          }`}
          style={{
            transition: 'opacity 3000ms ease-in-out, transform 20000ms linear, filter 3000ms ease-in-out'
          }}
        />
      ))}
      
      {/* Overlay Gradients - Enhanced for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/40 to-slate-950"></div>
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    </div>
  );
};

export default DynamicBackground;