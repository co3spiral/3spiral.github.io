
import React from 'react';
import { SOCIAL_LINKS, TRANSLATIONS } from '../constants';
import { useLang } from './LanguageContext';

const CustomIcons: Record<string, React.ReactNode> = {
  'custom-x': (
    <svg viewBox="0 0 326.67 329.98" className="w-5 h-5 fill-current">
      <path d="M310.86,315.92l-86.93.2-81.38-118.16-101.42,117.96-25.32.03,115.45-134.41L16.04,14.07l86.93-.2,76.68,111.31L275.21,14.06l25.11.27-109.38,127.28,119.92,174.3ZM273.1,296L92.74,33.93l-38.86.15,180.48,262.23,38.75-.3Z"/>
    </svg>
  ),
  'custom-objkt': (
    <svg viewBox="0 0 390.67 158.67" className="w-10 h-auto fill-current">
      <g>
        <path d="M164.11,65.39c5.22,15.12,3.44,38.44-11.75,47.78-7.94,4.88-18,5.55-26.61,2.24-4.87-1.87-7.32-5.61-10.6-10.05l-1.53,10.43-12.52-.04V17.11s14.66-.03,14.66-.03l.04,39.3c5.05-7.16,12.94-10.46,21.51-10.28,12.38.26,22.54,7.46,26.79,19.29ZM133.55,103.59c8.53.01,15.33-5.23,17.3-13.27,1.43-5.82,1.43-11.97-.24-17.73-2.34-8.06-9.49-12.94-17.78-12.64s-14.92,5.59-16.7,13.64c-1.21,5.45-1.21,10.97.02,16.38,1.86,8.17,8.71,13.6,17.39,13.62Z"/>
        <polygon points="275.59 78.4 308.37 115.63 290.62 115.75 260.04 80.99 259.95 115.8 245.23 115.74 245.23 17.11 259.96 17.09 260.04 76.12 286.33 47.77 304.63 47.87 275.59 78.4"/>
        <path d="M79.61,94.71c-5.51,18.04-24.03,26.06-41.82,21.69-10.92-2.69-19.53-10.65-22.89-21.47-2.81-9.03-2.71-18.75.57-27.57,6.21-16.72,23.34-23.78,40.16-20.24,21.89,4.6,30.03,27.79,23.99,47.6ZM50.03,103.51c15.25-1.82,19.08-17.7,15.64-29.96-2.41-8.6-9.95-13.63-18.74-13.46-9.31.17-16.95,6.16-18.56,15.41-1.21,6.95-.81,16.59,4.23,22.04,4.42,4.78,10.69,6.78,17.43,5.98Z"/>
        <path d="M377.05,115.63l-22.25-.06c-5.31-.01-10.78-1.9-14.46-5.74-3.35-3.51-4.78-8.63-4.79-13.53l-.12-36.25-17.28-.03-.03-12.26,11.46-.12c3.31-.03,6.24-2.54,6.86-5.74l2.34-11.99,11.32-.03.05,17.81,27.18.03-.03,12.3-27.17.02.06,35.08c0,4.52,3.11,7.12,7.36,7.61l19.44.13.05,12.77Z"/>
        <path d="M169.28,146.06l-.02-12.63,27.78-.03c2.03,0,3.99-1.58,3.99-3.8v-65.39c0-2.23-2.05-3.68-3.97-3.68l-17.55-.05v-12.59s22.96.16,22.96.16c7.17.05,13.09,5.48,13.1,13.11l.09,70.7c.01,8.43-6.03,14.08-14.39,14.11l-32,.1Z"/>
        <path d="M217.36,22.02c1.89,3.56,1.43,7.71-.81,10.87-2.06,2.89-5.61,4.58-9.59,4.58-6.19,0-11.09-4.26-11.35-10.18s4.17-10.67,10.42-11.07c4.52-.29,9.02,1.47,11.33,5.81Z"/>
      </g>
    </svg>
  ),
  'custom-zora': (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <defs>
        <radialGradient id="zoraGradNetwork" cx="70%" cy="25%" r="65%">
          <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
        </radialGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#zoraGradNetwork)" />
    </svg>
  )
};

const Network: React.FC = () => {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang];

  return (
    <section id="connect" className="py-40 px-6 bg-[#030303] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-5xl font-black tracking-tighter mb-8 uppercase leading-[0.8]">
              {t.networksTitle}
            </h2>
            <p className="text-white/30 leading-relaxed font-medium pr-10 tech-font text-lg md:text-xl">
              co3spiral@gmail.com
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.platform} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-12 rounded-lg hover:bg-white/[0.04] transition-all duration-700 group relative overflow-hidden flex flex-col items-center justify-center text-center"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-700"></div>
                <div className="w-16 h-16 flex items-center justify-center border border-white/10 rounded-full group-hover:border-white/40 transition-colors mb-6">
                  {link.icon.startsWith('custom-') ? (
                    CustomIcons[link.icon]
                  ) : (
                    <i className={`${link.icon} text-2xl`}></i>
                  )}
                </div>
                <h3 className="text-xl font-bold tracking-tight group-hover:scale-110 transition-transform duration-500 uppercase">{link.platform}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;
