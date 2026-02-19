
import React from 'react';
import { GALLERY } from '../constants';
import { ArtPiece } from '../types';

interface GalleryProps {
  onSelectProject: (project: ArtPiece) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-20 md:py-40 px-4 md:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-8">
          <div className="flex items-center gap-6">
            <h3 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-none">ARQUIVO</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {GALLERY.map((item) => (
            <div 
              key={item.id} 
              onClick={() => onSelectProject(item)}
              className="art-card relative group cursor-pointer"
            >
              <div className="overflow-hidden bg-[#0a0a0a] aspect-video relative border border-white/10 transition-colors group-hover:border-white/40">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              
              <div className="mt-6 flex justify-between items-start">
                <div className="max-w-[85%]">
                  <h4 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">{item.title}</h4>
                  <p className="text-white/40 text-sm mt-3 leading-relaxed tech-font line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <div className="h-10 w-10 flex items-center justify-center border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all flex-shrink-0">
                  <i className="fas fa-arrow-right text-xs"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
