
import React, { useRef, useEffect, useState } from 'react';

const Manifesto: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-40 px-6 bg-black relative">
      <div className="max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl md:text-8xl font-bold leading-none mb-16 tracking-tighter">
            O futuro é <span className="text-white/30 italic">renderizado</span>.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <p className="text-xl md:text-3xl text-white/70 leading-relaxed font-light pixel-font">
              3spiral é um coletivo que vive na intersecção da descentralização e evolução estética. Acreditamos na espiral: infinita e recorrente.
            </p>
            <div className="space-y-10">
              <div className="border-l-2 border-white/10 pl-6">
                <h4 className="text-lg font-bold uppercase tracking-widest mb-2 opacity-50">Cross-Platform</h4>
                <p className="text-white/40 text-sm font-mono">Identidade unificada: X, IG, Zora.</p>
              </div>
              <div className="border-l-2 border-white/10 pl-6">
                <h4 className="text-lg font-bold uppercase tracking-widest mb-2 opacity-50">On-Chain</h4>
                <p className="text-white/40 text-sm font-mono">Arte que vive para sempre no protocolo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
