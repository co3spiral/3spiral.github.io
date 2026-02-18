
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Gallery from './components/Gallery';
import Network from './components/Network';

const App: React.FC = () => {
  useEffect(() => {
    document.title = "3SPIRAL | Collective";
    // Garantir que o scroll comece no topo
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="h-[10vh] md:h-[20vh] bg-gradient-to-b from-transparent to-black"></div>
        
        <Manifesto />
        
        <Gallery />
        
        <Network />
      </main>

      <footer className="py-20 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="text-xl font-black tracking-tighter">3SPIRAL</div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-[10px] font-bold tracking-widest uppercase opacity-40">
            <span>© 2024</span>
            <span>On-Chain Identity</span>
            <span>Curated Archive</span>
          </div>
          <div className="flex gap-6">
            <a href="https://x.com/co3spiral" target="_blank" className="opacity-50 hover:opacity-100 transition-opacity"><i className="fab fa-x-twitter"></i></a>
            <a href="https://www.instagram.com/co_3spiral" target="_blank" className="opacity-50 hover:opacity-100 transition-opacity"><i className="fab fa-instagram"></i></a>
            <a href="https://zora.co/@3spi_" target="_blank" className="opacity-50 hover:opacity-100 transition-opacity"><i className="fas fa-eye"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
