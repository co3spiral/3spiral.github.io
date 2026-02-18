
import React from 'react';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="work" className="py-20 md:py-40 px-4 md:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-8">
          <div className="flex items-center gap-6">
            <h3 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-none">ARCHIVE</h3>
          </div>
          <p className="text-white/20 text-sm md:text-lg uppercase tracking-[0.3em] font-bold pixel-font">
            [ Signal // Motion // Provenance ]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {GALLERY.map((item) => (
            <div key={item.id} className="art-card relative group">
              <div className="overflow-hidden bg-[#0a0a0a] aspect-video relative border border-white/10 transition-colors group-hover:border-white/40">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black px-2 py-0.5 text-xs font-bold uppercase tracking-tighter">
                    {item.platform}
                  </span>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h4 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">{item.title}</h4>
                  <p className="text-white/30 text-xs mt-2 font-mono">ID_{item.id} // SECURE_ARCHIVE</p>
                </div>
                <div className="h-10 w-10 flex items-center justify-center border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <i className="fas fa-arrow-right text-xs"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 flex justify-center">
          <a 
            href="https://zora.co/@3spi_" 
            target="_blank"
            className="group relative px-12 py-6 border border-white/20 hover:bg-white hover:text-black transition-all flex items-center gap-6"
          >
            <span className="text-xl font-bold tracking-widest uppercase">ENTER ARCHIVE</span>
            <div className="w-2 h-2 bg-current animate-ping"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
