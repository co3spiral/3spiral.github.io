
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-card' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center animate-spin-slow">
            <div className="w-4 h-4 rounded-full border border-white opacity-50"></div>
          </div>
          3SPIRAL
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase opacity-70">
          <a href="#about" className="hover:opacity-100 transition-opacity">Manifesto</a>
          <a href="#work" className="hover:opacity-100 transition-opacity">Archive</a>
          <a href="#connect" className="hover:opacity-100 transition-opacity">Network</a>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://x.com/co3spiral" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full border border-white/20 text-xs font-bold hover:bg-white hover:text-black transition-all"
          >
            ENTER THE SPIRAL
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
