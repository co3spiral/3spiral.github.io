
import React, { useEffect, useState, useRef } from 'react';

const Hero: React.FC = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [motion, setMotion] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    
    const handleMove = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      } else {
        return;
      }
      
      setMotion({
        x: (clientX / window.innerWidth - 0.5) * 15,
        y: (clientY / window.innerHeight - 0.5) * 15,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, []);

  const opacity = Math.max(0, 1 - scrollPos / 600);
  const scale = 1 + scrollPos / 1500;
  const translateY = scrollPos * 0.15;

  return (
    <section ref={containerRef} className="relative h-[100svh] flex items-center justify-center overflow-hidden bg-black">
      <div className="scanline"></div>
      
      {/* Dynamic Background Motion */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-transform duration-700 ease-out"
        style={{ 
          transform: `scale(${scale}) translate(${motion.x}px, ${motion.y}px)`,
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] border-[0.5px] border-white/5 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] border-[1px] border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] border-[1px] border-white/20 rounded-full"></div>
      </div>

      <div 
        className="relative z-10 text-center px-6 mix-blend-difference pointer-events-none flex flex-col items-center"
        style={{ opacity, transform: `translateY(${translateY}px)` }}
      >
        <div className="overflow-hidden mb-8">
          <h2 className="text-xl md:text-2xl font-bold tracking-[0.4em] animate-reveal opacity-50">
            Spiral Collective
          </h2>
        </div>
        
        {/* Logo SVG Centralizado e Responsivo */}
        <div className="w-full max-w-[85vw] md:max-w-[65vw] mb-12 select-none">
          <svg 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1165.33 438.26"
            className="w-full h-auto fill-white"
          >
            <path d="M771.08,293.58h-13.12v-13.89h-13.89v-13.12h-27v-27h-27v-13.89h13.12v-13.12h13.89v-13.89h13.89v-67.89h-13.89v-13.89h-149.68v13.89h-13.12v13.89h40.12v27h13.89v67.89h13.89v81.78h13.12v13.12h13.89v13.89h13.84l.05-1.16v-66.35l-.05-1.16h-13.84v-26.23h13.12v13.12h27v13.89h13.89v13.12h27v13.89h13.89v13.89h13.12v25.85l.03,1.16h13.86v13.12h27v-40.89h-27v-27ZM689.3,184.8h-13.12v13.89h-13.89v13.12h-13.12v-13.12h-13.12v-40.89h-13.89v-13.12h67.12v40.12Z"/>
            <path d="M944.56,314.94h-15.75l-.12-46.35h-.89s-13.86,0-13.86,0v-30.61h-15.75v-46.36h-15.75v-30.61h-14.87v-30.61h-15.75v-15.74h-30.62v200.3h-14.87v46.36h30.62v-15.74h14.87v-30.59l1.31-.02h43.74l1.31.02v15.72h14.87v14.87h14.43l1.31.03v15.9h30.62v-31.67h-14.87v-14.87ZM882.45,284.32h-30.62v-46.36h14.87v15.74h15.75v30.61Z"/>
            <path d="M1078.03,253.01v46.36h-30.62v14.87h-46.36v-168.82h-14.87v-46.36h-31.49v108.46h15.75l-.19,153.95c.14-.03.8,0,1.06,0h59.93l1.31-1.31v-14.43h45.49v-14.43l1.31-1.31h29.3v-76.97h-30.62Z"/>
            <polyline points="79.4 89.9 79.4 76.79 161.19 76.79 161.19 89.9 174.3 89.9 174.3 131.57 161.19 131.57 161.19 144.68 147.3 144.68 147.3 157.8 161.19 157.8 161.19 171.68 188.19 171.68 188.19 185.57 202.08 185.57 202.08 198.69 215.19 198.69 215.19 212.57 229.08 212.57 229.08 294.35 215.19 294.35 215.19 321.36 202.08 321.36 202.08 334.47 188.19 334.47 188.19 348.36 161.19 348.36 161.19 361.47 79.4 361.47 79.4 348.36 65.52 348.36 65.52 307.47 79.4 307.47 79.4 320.58 93.29 320.58 93.29 334.47 147.3 334.47 147.3 320.58 160.41 320.58 160.41 307.47 174.3 307.47 174.3 293.58 188.19 293.58 188.19 280.47 201.31 280.47 201.31 226.46 188.19 226.46 188.19 213.73 187.03 212.57 174.3 212.57 174.3 199.46 120.29 199.46 120.29 185.57 106.41 185.57 106.41 157.8 120.29 157.8 120.29 144.68 133.41 144.68 133.41 130.79 147.3 130.79 147.3 103.81 146.14 103.79 134.18 103.79 134.18 117.68 93.29 117.68 93.29 144.68 79.4 144.68 79.4 131.57 66.67 131.57 65.52 131.54 65.52 89.97"/>
            <polygon points="334.41 116.91 334.41 130.02 361.41 130.02 361.41 157.03 375.29 157.03 375.3 158.18 375.3 184.8 361.41 184.8 361.41 198.69 347.53 198.69 347.53 184.8 333.64 184.8 333.64 157.8 279.63 157.8 279.63 197.92 307.41 197.92 307.41 211.8 320.52 211.8 320.52 224.92 334.41 224.92 334.41 238.8 361.41 238.8 361.41 251.92 374.14 251.92 375.3 251.91 375.3 279.69 388.42 279.69 388.42 347.59 361.41 347.59 361.41 361.47 320.52 361.47 320.52 347.59 279.63 347.59 279.63 333.7 252.63 333.7 252.63 320.58 238.74 320.58 238.74 292.81 279.63 292.81 279.63 306.71 280.79 306.7 293.52 306.7 293.52 319.81 320.52 319.81 320.52 333.7 347.53 333.7 347.53 319.81 361.41 319.81 361.41 279.66 360.26 279.69 347.53 279.69 347.53 265.85 346.37 265.81 320.52 265.81 320.52 252.69 306.63 252.69 306.63 238.8 279.63 238.8 279.63 225.69 265.74 225.69 265.74 211.8 252.63 211.8 252.63 130.02 279.63 130.02 279.63 116.91 334.41 116.91"/>
            <path d="M456.31,116.91v13.89h54.01v12.73l-.03,1.16h13.92v81.01h-13.89v1.16s0,12.73,0,12.73h-13.12v13.89h-13.89v13.12h-27v13.89h-13.89v13.12h-13.12v67.89h-27.78v-162.79h-13.12v-67.89h40.12v-13.89h27.78ZM496.43,158.57h-67.12v94.12h13.12v-13.12h13.89v-13.89h27v-13.89h13.12v-53.23Z"/>
            <rect x="548.73" y="225.69" width="27" height="135.78"/>
            <path d="M575.73,157.8v13.12h13.89v40.89h-54.78v-40.89h13.89v-13.12h27ZM575.73,184.8h-27v13.12h27v-13.12Z"/>
          </svg>
        </div>

        <div className="h-[2px] w-20 md:w-32 bg-white mx-auto mb-10 animate-grow-x"></div>
        <p className="max-w-xs md:max-w-xl mx-auto text-sm md:text-lg text-white/40 leading-relaxed font-light tracking-[0.5em] uppercase pixel-font">
          Protocol // Media // Artifacts
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;
