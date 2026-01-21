
import React, { useState, useEffect } from 'react';

const DynamicBackground: React.FC = () => {
  const images = [
    "https://i.ibb.co.com/DgRXssKJ/bg1.webp",
    "https://i.ibb.co.com/RkdrLCfm/bg2.webp",
    "https://i.ibb.co.com/rqL1G3P/bg3.webp"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[4000ms] ease-in-out ${
            index === currentIndex ? 'opacity-40' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            transform: index === currentIndex ? 'scale(1.1)' : 'scale(1)',
            transition: 'opacity 4000ms ease-in-out, transform 20000ms linear'
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950"></div>
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    </div>
  );
};

export default DynamicBackground;
