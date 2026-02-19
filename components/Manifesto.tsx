
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
          <h2 className="text-4xl md:text-8xl font-bold leading-none mb-16 tracking-tighter uppercase">
            O QUE SOMOS
          </h2>
          
          <div className="w-full">
            <p className="text-lg md:text-2xl text-white/70 leading-relaxed font-light tech-font">
              3spiral é um coletivo transdisciplinar formado por artistas trans que atuam no audiovisual, performance, fotografia, cultura do skate e experimentação digital. O nome evoca a simultaneidade de passado, presente e futuro, articulada ao número 3 como referência à Web3 e às imaginações de uma diáspora cibernética. Enraizado em memórias afro-brasileiras e indígenas, o coletivo investiga multiplicidades de gênero, política do corpo e tecnologias ancestrais em diálogo com mídias contemporâneas. Sua prática articula ritual, movimento urbano e estética digital para tensionar binarismos coloniais e expandir narrativas sobre existências trans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
