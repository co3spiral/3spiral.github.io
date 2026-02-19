
import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Gallery from './components/Gallery';
import Network from './components/Network';
import { ArtPiece } from './types';
import { useLang } from './components/LanguageContext';
import { TRANSLATIONS } from './constants';

const VideoPlayer: React.FC<{ src: string }> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative border border-white/10 bg-black overflow-hidden group">
      <video 
        ref={videoRef}
        src={src} 
        controls
        playsInline 
        className="w-full h-auto block"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <div 
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer group-hover:bg-black/20 transition-all z-10"
        >
          <div className="w-20 h-20 flex items-center justify-center border-2 border-white rounded-full bg-white/10 backdrop-blur-sm transform transition-transform group-hover:scale-110">
            <i className="fas fa-play text-white text-2xl ml-1"></i>
          </div>
        </div>
      )}
    </div>
  );
};

const Lightbox: React.FC<{ 
  images: string[]; 
  currentIndex: number; 
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}> = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div 
      className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-md flex items-center justify-center cursor-zoom-out animate-reveal p-2 md:p-6"
      onClick={onClose}
    >
      <button 
        onClick={(e) => { stopPropagation(e); onClose(); }}
        className="absolute top-4 right-4 md:top-8 md:right-8 text-white/60 hover:text-white hover:scale-110 transition-all z-[2010] p-4 cursor-pointer"
        aria-label="Fechar"
      >
        <i className="fas fa-times text-2xl md:text-4xl"></i>
      </button>
      
      <button 
        onClick={(e) => { stopPropagation(e); onPrev(); }}
        className="absolute left-2 md:left-6 text-white/30 hover:text-white text-4xl md:text-7xl transition-all z-[2010] p-4 cursor-pointer"
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      <div className="relative w-full h-full flex items-center justify-center cursor-default pointer-events-none">
        <img 
          key={images[currentIndex]}
          src={images[currentIndex]} 
          alt={`Artwork ${currentIndex + 1}`} 
          className="max-w-[70%] max-h-[80%] md:max-w-[75%] md:max-h-[85%] object-contain shadow-[0_0_100px_rgba(0,0,0,0.5)] select-none pointer-events-auto animate-[reveal_0.3s_ease-out]"
          onClick={stopPropagation}
        />
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white/20 tech-font uppercase text-[9px] tracking-[0.4em] whitespace-nowrap">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <button 
        onClick={(e) => { stopPropagation(e); onNext(); }}
        className="absolute right-2 md:right-6 text-white/30 hover:text-white text-4xl md:text-7xl transition-all z-[2010] p-4 cursor-pointer"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

const AboutUs: React.FC = () => {
  const [kaeuWorksOpen, setKaeuWorksOpen] = useState(false);
  const [qabWorksOpen, setQabWorksOpen] = useState(false);
  const { lang } = useLang();
  const t = TRANSLATIONS[lang];
  
  const kaeuImg = "https://lavender-worrying-clam-733.mypinata.cloud/ipfs/bafybeicdfruzoptatjv7q7s6qzsx7w27xsvpz4jm3lqyfkqbyone3squ7a";
  const qabImg = "https://qabqabqab.github.io/imagens/foto-perfil.jpg";
  
  const kaeuWorks = [
    {
      title: "CLOWNMORFIA",
      image: "https://lavender-worrying-clam-733.mypinata.cloud/ipfs/bafybeiegduasklqr4iempuggtu4u3sgbprfgcrczom3wfrj76xrzgwndz4",
      desc: t.clownmorfiaDesc,
      link: "https://www.youtube.com/watch?v=7FBqaDEMyF8&feature=youtu.be",
      linkText: t.watchHere
    },
    {
      title: "UltravioletaS2",
      image: "https://lavender-worrying-clam-733.mypinata.cloud/ipfs/bafybeidbk3cqvwg3mrmdxoqhh3jvtislbk3clghrwft536k66otdngueua",
      desc: t.uvs2Desc,
      link: "https://drop.art/bm/2MwfMhhHNMwZhcJamgikKS",
      linkText: t.checkHere
    },
    {
      title: "D'Águas",
      image: "https://lavender-worrying-clam-733.mypinata.cloud/ipfs/bafybeibywor2qyykk6b3gbv57l3iuluoxmmcsw3efnb5jtakdtow7wuhje",
      desc: t.daguasDesc,
      link: "https://www.youtube.com/watch?v=N5SmAr_F63M",
      linkText: t.watchHere
    }
  ];

  return (
    <section className="py-24 md:py-40 px-6 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-20 opacity-90 uppercase">{t.aboutTitle}</h2>
        
        {/* PERFIL KAÊU */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
            <div className="w-32 md:w-48 aspect-square flex-shrink-0 bg-zinc-900 border border-white/10 overflow-hidden">
              <img src={kaeuImg} alt="Kaêu Esuna" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">KAÊU ESUNA</h3>
              <p className="text-white/50 text-base md:text-lg leading-relaxed tech-font font-light whitespace-pre-wrap">
                {t.kaeuBio}
              </p>
            </div>
          </div>

          <div className="border-b border-white/5 pb-10">
            <div className="flex items-center gap-4 md:gap-8 w-full">
              <h3 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase whitespace-nowrap">{t.worksTitle}</h3>
              <div className="flex-grow h-[1px] bg-white/20 mt-2"></div>
              <button 
                onClick={() => setKaeuWorksOpen(!kaeuWorksOpen)}
                className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center border border-white/10 rounded-full hover:bg-white/10 transition-all flex-shrink-0"
              >
                <i className={`fas fa-chevron-down text-xs md:text-sm transition-transform duration-500 ${kaeuWorksOpen ? 'rotate-180' : ''}`}></i>
              </button>
            </div>

            {kaeuWorksOpen && (
              <div className="mt-12 space-y-24 animate-reveal">
                {kaeuWorks.map((work, idx) => (
                  <div key={idx} className="space-y-6">
                    <div className="border border-white/10 bg-black overflow-hidden shadow-xl aspect-video">
                      <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">{work.title}</h4>
                      <p className="text-white/40 text-sm md:text-base leading-relaxed tech-font whitespace-pre-wrap">
                        {work.desc}
                      </p>
                      <a 
                        href={work.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block text-[#3B82F6] hover:text-[#60A5FA] text-xs md:text-sm font-bold tracking-widest tech-font uppercase transition-colors"
                      >
                        {work.linkText}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* PERFIL QAB LIMA */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
            <div className="w-32 md:w-48 aspect-square flex-shrink-0 bg-zinc-900 border border-white/10 overflow-hidden">
              <img src={qabImg} alt="Qab Lima" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">QAB LIMA</h3>
              <p className="text-white/50 text-base md:text-lg leading-relaxed tech-font font-light whitespace-pre-wrap">
                {t.qabBio}
              </p>
            </div>
          </div>

          <div className="border-b border-white/5 pb-10">
            <div className="flex items-center gap-4 md:gap-8 w-full">
              <h3 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase whitespace-nowrap">{t.worksTitle}</h3>
              <div className="flex-grow h-[1px] bg-white/20 mt-2"></div>
              <button 
                onClick={() => setQabWorksOpen(!qabWorksOpen)}
                className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center border border-white/10 rounded-full hover:bg-white/10 transition-all flex-shrink-0"
              >
                <i className={`fas fa-chevron-down text-xs md:text-sm transition-transform duration-500 ${qabWorksOpen ? 'rotate-180' : ''}`}></i>
              </button>
            </div>

            {qabWorksOpen && (
              <div className="mt-12 space-y-12 animate-reveal">
                <div className="space-y-6">
                  <div className="border border-white/10 bg-black overflow-hidden shadow-xl aspect-video md:aspect-video">
                    <img src="https://lavender-worrying-clam-733.mypinata.cloud/ipfs/bafybeiegduasklqr4iempuggtu4u3sgbprfgcrczom3wfrj76xrzgwndz4" alt="Work" className="w-full h-full object-cover opacity-80" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectDetail: React.FC<{ 
  project: ArtPiece, 
  onOpenLightbox: (index: number, images: string[]) => void 
}> = ({ project, onOpenLightbox }) => {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [project.id]);

  const bg_videoUrl1 = "https://lavender-worrying-clam-733.mypinata.cloud/ipfs/bafybeib6faumzreyzav3nz4st4fwjjnm5fhz4qvj2xfyilnpbu6i37y2mq";
  const bg_videoUrl2 = "https://lavender-worrying-clam-733.mypinata.cloud/ipfs/bafybeifhmnrjxmzcl5qiocqwu77ccbtlqsl47qaqivcve4knkwgteje4oy";
  const bg_artworkImageUrl1 = "https://assets.objkt.media/file/assets-003/bafybeifhzcuclgswlee76ahd2by6smccllcg7txbtc4k5lab7o6ywgarxu/artifact";
  const bg_artworkImageUrl2 = "https://lavender-worrying-clam-733.mypinata.cloud/ipfs/bafybeigontgxu5abv3akwjymm5hqipteiyuq5s77v4hn7cnjkod63fa7ui";

  const nu_gif1 = "https://assets.drop.art/4lmcby3cIFP2QzLbkgPenx-bafybeia3ghsslf44nmpozitq757xjfwc6cm24u5iofs2whbtngf7dqarx4.gif";
  const nu_gif2 = "https://assets.drop.art/4lmcby3cIFP2QzLbkgPenx-bafybeieucp6f2v4gb3o7x5ba5lwsztk3u6q7ti7ngdzbhjtngwdgjew5e4.gif";
  const nu_placeholder = "https://assets.drop.art/4lmcby3cIFP2QzLbkgPenx-bafybeibtmhwzwtukhp6ut4ajfp3tec6te7n2omzgaf6nkwsuojeva6jqxu.png";
  const nu_galleryImages = Array(25).fill(nu_placeholder);

  if (project.id === '1') {
    return (
      <div className="pt-32 pb-40 px-6 max-w-4xl mx-auto animate-reveal">
        <div className="mb-12">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">{project.title}</h1>
        </div>
        
        <div className="mb-16">
          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light tech-font whitespace-pre-wrap">
            {t.bosqueMainDesc}
          </p>
        </div>

        <div className="mb-12 space-y-6 border-t border-white/5 pt-12">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">{t.dia1Title}</h2>
          <div className="mb-8">
            <VideoPlayer src={bg_videoUrl1} />
          </div>
          <div className="text-lg text-white/40 leading-relaxed font-mono tech-font whitespace-pre-wrap">
            {t.dia1Text}
          </div>
        </div>

        <div className="mb-12 space-y-6 border-t border-white/5 pt-12">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">{t.dia2Title}</h2>
          <div className="mb-8">
            <VideoPlayer src={bg_videoUrl2} />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">{t.tallerTitle}</h3>
            <div className="text-lg text-white/40 leading-relaxed font-mono tech-font whitespace-pre-wrap">
              {t.dia2Text}
            </div>
          </div>
        </div>

        <div className="mb-12 border-t border-white/5 pt-12">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">{t.artesTitle}</h2>
        </div>
        
        <div className="mb-24 space-y-8">
          <div className="border border-white/10 bg-black overflow-hidden cursor-pointer" onClick={() => onOpenLightbox(0, [bg_artworkImageUrl1, bg_artworkImageUrl2])}>
            <img src={bg_artworkImageUrl1} alt="Art 1" className="w-full h-auto block opacity-100 shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">Vegetação do Bosque</h3>
            <p className="text-white/50 text-base md:text-lg leading-relaxed tech-font">
              {t.vegetacaoDesc}
            </p>
          </div>
        </div>

        <div className="mb-24 space-y-8">
          <div className="border border-white/10 bg-black overflow-hidden cursor-pointer" onClick={() => onOpenLightbox(1, [bg_artworkImageUrl1, bg_artworkImageUrl2])}>
            <img src={bg_artworkImageUrl2} alt="Art 2" className="w-full h-auto block opacity-100 shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight uppercase">Síntese</h3>
            <p className="text-white/50 text-base md:text-lg leading-relaxed tech-font whitespace-pre-wrap">
              {t.sinteseDesc}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-40 px-6 max-w-4xl mx-auto animate-reveal">
      <div className="mb-12">
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">{project.title}</h1>
      </div>
      
      <div className="mb-16 border border-white/10 bg-black overflow-hidden shadow-2xl">
        <img src={nu_gif1} alt="Motion 1" className="w-full h-auto block opacity-100" />
      </div>

      <div className="mb-24">
        <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light tech-font">{project.description}</p>
      </div>

      <div className="mb-24 border border-white/10 bg-black overflow-hidden shadow-2xl">
        <img src={nu_gif2} alt="Motion 2" className="w-full h-auto block opacity-100" />
      </div>

      <div className="mb-12">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">Coleção</h2>
      </div>

      <div className="grid grid-cols-5 gap-2 md:gap-4 mb-24">
        {nu_galleryImages.map((img, idx) => (
          <div 
            key={idx} 
            onClick={() => onOpenLightbox(idx, nu_galleryImages)}
            className="aspect-square bg-[#0a0a0a] border border-white/5 overflow-hidden cursor-pointer hover:border-white/40 transition-all group"
          >
            <img src={img} alt={`Obra ${idx + 1}`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ArtPiece | null>(null);
  const [lightboxData, setLightboxData] = useState<{index: number, images: string[]} | null>(null);
  const { lang } = useLang();

  useEffect(() => {
    document.title = selectedProject ? `3SPIRAL | ${selectedProject.title}` : "3SPIRAL | Collective";
  }, [selectedProject]);

  const handleSelectProject = (project: ArtPiece) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleBack = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const openLightbox = (index: number, images: string[]) => {
    setLightboxData({ index, images });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxData(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-black min-h-screen selection:bg-white selection:text-black">
      <Navbar isInternal={!!selectedProject} onBack={handleBack} />
      
      {lightboxData && (
        <Lightbox 
          images={lightboxData.images}
          currentIndex={lightboxData.index}
          onClose={closeLightbox}
          onNext={() => setLightboxData(prev => prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null)}
          onPrev={() => setLightboxData(prev => prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null)}
        />
      )}

      <main>
        {selectedProject ? (
          <ProjectDetail project={selectedProject} onOpenLightbox={openLightbox} />
        ) : (
          <>
            <Hero />
            <div className="h-[10vh] md:h-[20vh] bg-gradient-to-b from-transparent to-black"></div>
            <Manifesto />
            <Gallery onSelectProject={handleSelectProject} />
            <AboutUs />
            <Network />
          </>
        )}
      </main>

      <footer className="py-24 px-6 border-t border-white/5 bg-black flex flex-col items-center text-center gap-10">
        <div className="w-20 md:w-24">
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" className="w-full h-auto fill-white">
            <polygon points="267.03 104.2 267.03 135.27 251.93 135.27 251.93 150.36 237.29 150.36 235.96 151.69 235.96 182.32 220.86 182.32 220.86 228.48 204.89 228.48 204.89 306.59 189.79 306.59 189.79 353.64 204.89 353.64 204.89 430.87 220.86 430.87 220.86 477.92 235.96 477.92 235.96 508.99 251.93 508.99 251.93 524.97 267.03 524.97 267.03 556.03 283 556.03 283 572.01 298.98 572.01 298.98 587.1 314.08 587.1 314.08 603.08 345.15 603.08 345.15 618.17 375.77 618.17 377.1 619.5 377.1 634.15 408.17 634.15 408.17 650.13 470.31 650.13 470.31 665.22 579.5 665.22 579.5 650.13 640.31 650.13 641.64 648.8 641.64 634.15 656.29 634.15 657.62 632.82 657.62 618.17 688.69 618.17 688.69 603.08 719.76 603.08 719.76 587.1 734.85 587.1 734.85 572.01 765.48 572.01 766.81 570.68 766.81 556.03 781.9 556.03 781.9 524.97 797.88 524.97 797.88 493.9 812.97 493.9 812.97 446.85 828.95 446.85 828.95 306.59 812.97 306.59 812.97 259.55 797.88 259.55 797.88 228.48 781.9 228.48 781.9 213.39 766.81 213.39 766.81 182.32 736.19 182.32 734.85 182.29 734.85 166.34 719.76 166.34 719.76 150.36 688.69 150.36 688.69 135.27 657.62 135.27 657.62 119.25 656.29 119.29 625.67 119.29 625.67 104.2 517.36 104.2 517.36 119.29 470.31 119.29 470.31 135.27 439.24 135.27 439.24 150.36 408.17 150.36 408.17 166.34 392.19 166.34 392.19 182.32 377.1 182.32 377.1 213.33 375.77 213.39 361.12 213.39 361.12 228.48 346.48 228.48 345.15 228.49 345.15 244.46 330.05 244.46 330.05 275.53 314.08 275.53 314.08 384.71 330.05 384.71 330.05 415.78 345.15 415.78 345.15 430.87 361.12 430.87 361.12 462.83 377.1 462.83 377.1 477.92 392.19 477.92 392.19 493.9 408.17 493.9 408.17 508.99 454.33 508.99 454.33 524.98 455.67 524.97 594.59 524.97 594.59 508.99 625.67 508.99 625.67 493.9 656.29 493.9 657.62 493.89 657.62 477.92 672.71 477.92 672.71 462.83 688.62 462.83 688.69 461.5 688.69 430.87 703.78 430.87 703.78 322.57 688.69 322.57 688.69 291.5 672.71 291.5 672.71 275.53 657.62 275.53 657.62 259.63 656.29 259.55 625.67 259.55 625.67 244.46 501.38 244.46 501.38 259.55 470.31 259.55 470.31 291.5 454.33 291.5 454.33 368.73 470.31 368.73 470.31 399.8 563.52 399.8 563.52 384.71 579.54 384.71 579.5 383.38 579.5 353.64 516.48 353.64 516.48 306.59 547.55 306.59 547.55 290.62 579.5 290.62 579.5 306.59 610.57 306.59 610.57 321.68 626.55 321.68 626.55 337.66 641.64 337.66 641.64 400.69 626.55 400.69 626.55 415.78 610.57 415.78 610.57 431.76 579.5 431.76 579.5 446.85 548.43 446.85 548.43 462.83 501.38 462.83 501.38 446.99 500.05 446.85 454.33 446.85 454.33 431.76 438.36 431.76 438.36 415.78 407.29 415.78 407.29 384.71 392.19 384.71 392.19 275.53 407.29 275.53 407.29 243.57 438.36 243.57 438.36 228.48 454.33 228.48 454.33 212.5 485.41 212.5 485.41 197.41 516.48 197.41 516.48 181.43 626.55 181.43 626.55 197.41 657.62 197.41 657.62 212.5 688.69 212.5 688.69 228.48 704.67 228.48 704.67 243.57 719.76 243.57 719.76 259.55 735.74 259.55 735.74 306.59 750.83 306.59 750.83 321.68 766.81 321.68 766.81 431.76 750.83 431.76 750.83 446.85 735.74 446.85 735.74 478.81 719.76 478.81 719.76 509.87 704.67 509.87 704.67 524.97 673.6 524.97 673.6 540.94 657.62 540.94 657.62 556.03 626.55 556.03 626.55 572.01 579.5 572.01 579.5 587.99 454.33 587.99 454.33 572.01 407.29 572.01 407.29 556.03 376.22 556.03 376.22 524.97 345.15 524.97 345.15 509.87 329.17 509.87 329.17 493.9 314.08 493.9 314.08 478.81 298.1 478.81 298.1 431.76 283 431.76 283 400.69 267.03 400.69 267.03 259.55 283 259.55 283 228.48 298.1 228.48 298.1 181.43 314.08 181.43 314.08 166.34 329.17 166.34 329.17 150.36 345.15 150.36 345.15 134.38 376.22 134.38 376.22 103.31 407.29 103.31 407.29 88.22 438.36 88.22 438.36 72.24 485.41 72.24 485.41 56.27 641.64 56.27 641.64 72.24 704.67 72.24 704.67 88.22 719.76 88.22 719.76 103.31 750.83 103.31 750.83 119.27 752.17 119.29 766.81 119.29 766.81 134.38 781.46 134.38 782.79 135.71 782.79 150.36 797.88 150.36 797.88 166.34 799.21 166.34 813.86 166.34 813.86 181.43 828.95 181.43 828.95 212.5 844.93 212.5 844.93 228.48 860.02 228.48 860.02 259.63 861.35 259.55 876 259.55 876 337.66 891.98 337.66 891.98 462 890.65 461.94 876 461.94 876 493.9 861.35 493.9 860.02 493.89 860.02 524.97 844.93 524.97 844.93 540.94 828.95 540.94 828.95 572.01 813.86 572.01 813.86 587.99 797.88 587.99 797.88 603.08 782.79 603.08 782.79 619.06 766.81 619.06 766.81 634.15 752.17 634.15 750.83 635.48 750.83 650.13 719.76 650.13 719.76 666.11 704.67 666.11 704.67 681.2 657.62 681.2 657.62 697.18 579.5 697.18 579.5 712.27 470.31 712.27 470.31 697.18 392.19 697.18 392.19 681.2 345.15 681.2 345.15 666.11 314.08 666.11 314.08 650.13 298.1 650.13 298.1 634.15 283 634.15 283 619.06 267.03 619.06 267.03 603.08 251.05 603.08 251.05 587.99 235.96 587.99 235.96 572.01 219.98 572.01 219.98 556.03 204.89 556.03 204.89 526.3 203.55 524.97 188.91 524.97 188.91 509.87 173.82 509.87 173.82 478.81 157.84 478.81 157.84 431.76 141.86 431.76 141.86 228.48 157.84 228.48 157.84 181.43 173.82 181.43 173.82 150.36 188.91 150.36 188.91 134.38 204.89 134.38 204.89 103.31 219.98 103.31 219.98 88.22 235.96 88.22 235.96 72.24 251.05 72.24 251.05 57.6 252.38 56.27 297.65 56.27 298.98 57.6 298.98 102.87 297.65 104.2 267.03 104.2"/>
          </svg>
        </div>

        <div className="text-white/40 text-xs tracking-widest tech-font uppercase">© 2026</div>

        <div className="text-white/80 text-sm md:text-base tech-font tracking-tight">co3spiral@gmail.com</div>

        <div className="flex gap-8 items-center pt-2">
          <a href="https://www.instagram.com/co_3spiral" target="_blank" className="opacity-50 hover:opacity-100 transition-opacity">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="https://x.com/co3spiral" target="_blank" className="opacity-50 hover:opacity-100 transition-opacity w-5 h-5 flex items-center justify-center">
            <svg viewBox="0 0 326.67 329.98" className="fill-current w-5 h-5">
              <path d="M310.86,315.92l-86.93.2-81.38-118.16-101.42,117.96-25.32.03,115.45-134.41L16.04,14.07l86.93-.2,76.68,111.31L275.21,14.06l25.11.27-109.38,127.28,119.92,174.3ZM273.1,296L92.74,33.93l-38.86.15,180.48,262.23,38.75-.3Z"/>
            </svg>
          </a>
          <a href="https://zora.co/@3spiral" target="_blank" className="opacity-50 hover:opacity-100 transition-opacity w-6 h-6 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <defs>
                <radialGradient id="zoraGradFooter" cx="70%" cy="25%" r="65%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
                </radialGradient>
              </defs>
              <circle cx="12" cy="12" r="10" fill="url(#zoraGradFooter)" />
            </svg>
          </a>
          <a href="https://objkt.com/users/tz1hjc5fAb5abh69VadryWi9E3qfT3dEKkHk" target="_blank" className="opacity-50 hover:opacity-100 transition-opacity tech-font text-sm font-bold lowercase tracking-tight">
            objkt
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
