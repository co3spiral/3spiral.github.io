
import React, { useRef, useEffect, useState } from 'react';
import { useLang } from './LanguageContext';
import { TRANSLATIONS } from '../constants';

const Manifesto: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const { lang } = useLang();
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-40 px-6 bg-black relative">
      <div className="max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl md:text-8xl font-bold leading-none mb-16 tracking-tighter uppercase">
            {t.manifestoTitle}
          </h2>
          
          <div className="w-full">
            <p className="text-lg md:text-2xl text-white/70 leading-relaxed font-light tech-font">
              {t.manifestoText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
