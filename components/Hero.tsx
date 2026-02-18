
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
        className="relative z-10 text-center px-6 mix-blend-difference pointer-events-none"
        style={{ opacity, transform: `translateY(${translateY}px)` }}
      >
        <div className="overflow-hidden mb-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-[0.4em] animate-reveal opacity-50">
            Spiral Collective
          </h2>
        </div>
        <h1 className="text-7xl md:text-[16rem] font-black tracking-tighter leading-none mb-6 select-none">
          3SPIRAL
        </h1>
        <div className="h-[2px] w-20 md:w-32 bg-white mx-auto mb-8 animate-grow-x"></div>
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
