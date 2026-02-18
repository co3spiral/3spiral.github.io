
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Network: React.FC = () => {
  return (
    <section id="connect" className="py-40 px-6 bg-[#030303] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-5xl font-black tracking-tighter mb-8 uppercase leading-[0.8]">Join the <br/> Spiral</h2>
            <p className="text-white/30 leading-relaxed font-medium pr-10">
              The 3spiral presence spans across multiple protocols. From real-time visual signals to on-chain collectibles.
            </p>
            <div className="mt-12 flex gap-4">
              <div className="w-12 h-[1px] bg-white/20 mt-3"></div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">Established 2024</span>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.platform} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-12 rounded-lg hover:bg-white/[0.04] transition-all duration-700 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-700"></div>
                <div className="flex items-center justify-between mb-10">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full group-hover:border-white/40 transition-colors">
                    <i className={`${link.icon} text-lg`}></i>
                  </div>
                  <span className="text-[10px] font-black opacity-20 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">Connection Live</span>
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-500 uppercase">{link.platform}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;
