
import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Gallery from './components/Gallery';
import Network from './components/Network';
import { ArtPiece } from './types';

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
  
  const kaeuImg = "https://lavender-worrying-clam-733.mypinata.cloud/ipfs/bafybeicdfruzoptatjv7q7s6qzsx7w27xsvpz4jm3lqyfkqbyone3squ7a";
  const qabImg = "https://qabqabqab.github.io/imagens/foto-perfil.jpg";
  const workBanner = "https://lavender-worrying-clam-733.mypinata.cloud/ipfs/bafybeiegduasklqr4iempuggtu4u3sgbprfgcrczom3wfrj76xrzgwndz4";

  return (
    <section className="py-24 md:py-40 px-6 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-20 opacity-90">SOBRE NÓS</h2>
        
        {/* PERFIL KAÊU */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
            <div className="w-32 md:w-48 aspect-square flex-shrink-0 bg-zinc-900 border border-white/10 overflow-hidden">
              <img src={kaeuImg} alt="Kaêu Esuna" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">KAÊU ESUNA</h3>
              <p className="text-white/50 text-base md:text-lg leading-relaxed tech-font font-light">
                Kaêu Esuna é multiartista quilombola cuja prática atravessa performance, audiovisual, direção criativa e arte educação. Iniciou no teatro em 2014 na Casa de Cultura Cora Coralina e formou se em Teatro pela Etec de Artes em 2020, onde apresentou o trabalho autoral As coisas que deixei ali. É fundador e diretor do projeto teatral Buraco Negro, estreado em 2024 com fomento do Programa VAI, e foi integrante da CIA DezAfio, atuando em teatro sensorial, teatro de rua e intervenções no centro de São Paulo. Em 2022 assumiu a direção criativa do projeto Quem vê close, não vê corre e atuou na mediação e disposição de obras na exposição Inflamação, de Anish Kapoor, ampliando sua experiência em processos curatoriais.
                <br/><br/>
                Em 2025 aprofundou sua atuação no audiovisual ao ser selecionado para o núcleo de Direção de Fotografia do Instituto Criar, onde dirigiu Clamorfia e assinou a direção de fotografia da videoarte YPY. Atuou também na produção de elenco, produção de set e operação de câmera no videocast Vem Aí e realizou o making of do fashion filme A Retomada do Equilíbrio. É cofundador do coletivo 3spiral, núcleo transdisciplinar que investiga Web3, estética trans e memória na diáspora. Sua pesquisa articula gênero, território e ancestralidade a partir de uma perspective afro brasileira e indígena, compreendendo o quilombo como tecnologia histórica de confluência e resistência, mobilizando corpo e imagem como estratégias de reinvenção simbólica e afirmação de corpos dissidente.
              </p>
            </div>
          </div>

          <div className="border-b border-white/5 pb-10">
            <button 
              onClick={() => setKaeuWorksOpen(!kaeuWorksOpen)}
              className="flex items-center justify-between w-full group py-4 hover:opacity-80 transition-opacity"
            >
              <h3 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase">TRABALHOS</h3>
              <div className={`w-12 h-12 flex items-center justify-center border border-white/10 rounded-full transition-transform duration-500 ${kaeuWorksOpen ? 'rotate-180' : ''}`}>
                <i className="fas fa-chevron-down text-sm"></i>
              </div>
            </button>

            {kaeuWorksOpen && (
              <div className="mt-12 space-y-24 animate-reveal">
                {[1, 2].map((i) => (
                  <div key={i} className="space-y-8">
                    <div className="border border-white/10 bg-black overflow-hidden shadow-xl aspect-video md:aspect-[21/9]">
                      <img src={workBanner} alt={`Work ${i}`} className="w-full h-full object-cover opacity-80" />
                    </div>
                    <div className="space-y-6">
                      <h4 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">Trabalho Destacado</h4>
                      <p className="text-white/40 text-base md:text-lg leading-relaxed tech-font font-light max-w-2xl">
                        Amostra da produção artística de Kaêu Esuna, integrando movimento e estética quilombola.
                      </p>
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
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight uppercase uppercase">QAB LIMA</h3>
              <p className="text-white/50 text-base md:text-lg leading-relaxed tech-font font-light">
                Artista transdisciplinar de São Paulo, Qab Lima atua nas interseções entre arte digital, escultura, pintura, animação 2D, modelagem 3D, edição de vídeo e produção musical. Sua prática investiga identidade, gênero e questões sociopolíticas, criando obras que transitam entre o físico e o digital, o sensível e o tecnológico, muitas vezes incorporando elementos interativos e referências ancestrais.
                <br/><br/>
                Com nove anos de experiência em publicidade como Designer, Motion Designer e UI/UX, desenvolveu forte domínio em comunicação visual, narrativa e estratégias de engajamento. Desde 2021, participa ativamente do ecossistema Web3, explorando blockchain, NFTs e comunidades onchain como extensões de sua pesquisa artística. A partir de 2025, passou também a atuar no desenvolvimento de websites, ampliando sua atuação para a criação de experiências digitais completas.
                <br/><br/>
                Seu trabalho é guiado pela colaboração e pela construção coletiva, buscando conectar práticas artísticas, tecnologia e comunidade em projetos que gerem crescimento, impacto cultural e novas possibilidades de imaginação.
              </p>
            </div>
          </div>

          <div className="border-b border-white/5 pb-10">
            <button 
              onClick={() => setQabWorksOpen(!qabWorksOpen)}
              className="flex items-center justify-between w-full group py-4 hover:opacity-80 transition-opacity"
            >
              <h3 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase">TRABALHOS</h3>
              <div className={`w-12 h-12 flex items-center justify-center border border-white/10 rounded-full transition-transform duration-500 ${qabWorksOpen ? 'rotate-180' : ''}`}>
                <i className="fas fa-chevron-down text-sm"></i>
              </div>
            </button>

            {qabWorksOpen && (
              <div className="mt-12 space-y-24 animate-reveal">
                {[1, 2].map((i) => (
                  <div key={i} className="space-y-8">
                    <div className="border border-white/10 bg-black overflow-hidden shadow-xl aspect-video md:aspect-[21/9]">
                      <img src={workBanner} alt={`Work ${i}`} className="w-full h-full object-cover opacity-80" />
                    </div>
                    <div className="space-y-6">
                      <h4 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">Exploração Digital</h4>
                      <p className="text-white/40 text-base md:text-lg leading-relaxed tech-font font-light max-w-2xl">
                        Interface entre o sensível e o tecnológico, expandindo as possibilidades do on-chain.
                      </p>
                    </div>
                  </div>
                ))}
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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [project.id]);

  const bg_videoUrl1 = "https://lavender-worrying-clam-733.mypinata.cloud/ipfs/bafybeicet7gkiioig4dq55qbnwabsmkh66camwmew5syixtaywqnwwzqfu";
  const bg_videoUrl2 = "https://lavender-worrying-clam-733.mypinata.cloud/ipfs/bafybeihju2jusbhxfrzpi6onrrkxe6k6ese3htvvwsag7j6tmyq7vbggpa";
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
        
        <div className="mb-16 space-y-6">
          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light tech-font">
            Bosque Gracias é um território artístico familiar localizado na zona rural da Patagônia argentina, entre El Hoyo e Epuyén. Há doze anos, uma família de artistas vive e constrói esse espaço, atuando principalmente no audiovisual e em práticas ligadas à Web3. O território promove residências que conectam natureza, tecnologia e criação coletiva.
          </p>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light tech-font">
            Em janeiro de 2025, Kaêu e Qab participaram da residência como artistas residentes. No ano seguinte retornaram a convite da equipe, integrando o núcleo de documentação fotográfica e audiovisual. O que inicialmente seria apenas o registro da residência transformou se em um documentário sobre o próprio Bosque Gracias.
          </p>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light tech-font">
            Durante o período da residência, o território foi atingido por incêndios devastadores. Das cinco casas que compunham o espaço, apenas uma permaneceu de pé. Equipamentos de audiovisual, arquivos históricos e registros de memória foram perdidos. O trabalho de documentação passou a acompanhar o antes, o durante e o depois do fogo, revelando a vulnerabilidade de territórios autônomos diante do abandono estatal e de políticas ambientais insuficientes.
          </p>
        </div>

        <div className="mb-12">
          <VideoPlayer src={bg_videoUrl1} />
        </div>

        <div className="mb-24 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Título: Dia 1</h2>
          <p className="text-lg text-white/40 leading-relaxed font-mono tech-font">
            O primeiro dia foi dedicado ao reconhecimento do território e de sua história. Os participantes da residência foram introduzidos ao percurso da família até a consolidação do Bosque Gracias e conduzidos pelos biomas do espaço.
          </p>
          <p className="text-lg text-white/40 leading-relaxed font-mono tech-font">
            Foi visitada uma área de mata fechada com árvores que ultrapassam quatrocentos anos. A experiência instaurou um estado de escuta e presença coletiva. Em determinado momento, os participantes passaram a brincar de esconde esconde entre as árvores, ativando o espaço por meio do corpo e do jogo.
          </p>
          <p className="text-lg text-white/40 leading-relaxed font-mono tech-font">
            O vídeo foi registrado por Kaêu e Qab utilizando GoPro 13 e câmera compacta Kodak. As fotografias foram realizadas com Canon 60D. A edição foi conduzida majoritariamente por Qab, em diálogo colaborativo com Kaêu.
          </p>
        </div>

        <div className="mb-12 space-y-6 border-t border-white/5 pt-12">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">Dia 2</h2>
          <div className="mb-8">
            <VideoPlayer src={bg_videoUrl2} />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Taller de Cianotipia</h3>
            <p className="text-lg text-white/40 leading-relaxed font-mono tech-font">
              No segundo dia ocorreu o taller de cianotipia, conduzido por Rocío, como parte das atividades oferecidas aos participantes da residência. O encontro iniciou com uma conversa sobre a técnica e apresentação de trabalhos anteriores, seguido pelo processo coletivo de criação.
            </p>
            <p className="text-lg text-white/40 leading-relaxed font-mono tech-font">
              Kaêu assumiu a direção do registro audiovisual, buscando uma câmera que acompanha de perto mãos e gestos e, em outros momentos, observa à distância, como se espreitasse o processo criativo. O foco esteve na relação entre corpo, matéria, luz e tempo.
            </p>
            <p className="text-lg text-white/40 leading-relaxed font-mono tech-font">
              O vídeo foi gravado com câmera compacta Kodak. A edição foi conduzida por Kaêu, com contribuições de Qab.
            </p>
          </div>
        </div>

        <div className="mb-12 border-t border-white/5 pt-12">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">Artes</h2>
        </div>
        
        <div className="mb-24 space-y-8">
          <div className="border border-white/10 bg-black overflow-hidden cursor-pointer" onClick={() => onOpenLightbox(0, [bg_artworkImageUrl1, bg_artworkImageUrl2])}>
            <img src={bg_artworkImageUrl1} alt="Art 1" className="w-full h-auto block opacity-100 shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">Vegetação do Bosque</h3>
            <p className="text-white/50 text-base md:text-lg leading-relaxed tech-font">
              Trabalho criado em colaboração com @qabqabqab e @olhosdesuna, combinando fotos tiradas em Bosque Gracias, colagem digital, arte ASCII e ilustração.
            </p>
          </div>
        </div>

        <div className="mb-24 space-y-8">
          <div className="border border-white/10 bg-black overflow-hidden cursor-pointer" onClick={() => onOpenLightbox(1, [bg_artworkImageUrl1, bg_artworkImageUrl2])}>
            <img src={bg_artworkImageUrl2} alt="Art 2" className="w-full h-auto block opacity-100 shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight uppercase">Síntese</h3>
            <p className="text-white/50 text-base md:text-lg leading-relaxed tech-font">
              A obra nasce das fotografias realizadas por Kaêu e Qab durante o primeiro dia de reconhecimento do território. A partir desses registros, elementos do bosque, como flores, texturas e fragmentos orgânicos, foram isolados e transformados em adesivos digitais.
              <br/><br/>
              Com esses fragmentos, Kaêu e Qab criaram uma colagem que tensiona documentação e fabulação. A peça funciona como memória expandida do encontro com o território, misturando registro, jogo e reinvenção visual do bosque.
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
      
      <div className="mb-24">
        <p className="text-lg text-white/30 leading-relaxed font-mono tech-font">
          Esta série explora a fragmentação da memória digital através de artefatos visuais...
        </p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ArtPiece | null>(null);
  const [lightboxData, setLightboxData] = useState<{index: number, images: string[]} | null>(null);

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
            <path d="M766.81,821.45v15.98h-15.98v15.09h-15.09v15.98h31.07v31.07h31.07v15.09h15.98v15.98h15.09v31.07h31.07v47.05h-31.07v-15.09h-15.95l-.03-1.33v-29.74h-15.09v-15.98h-15.98v-15.98h-31.07v-15.09h-15.98v-15.98h-31.07v-15.09h-15.09v30.18h15.92l.06,1.33v76.34l-.06,1.33h-15.92v-15.98h-15.98v-15.09h-15.09v-94.09h-15.98v-78.12h-15.98v-31.07h-46.16v-15.98h15.09v-15.98h172.22v15.98h15.98v78.12M782.79,821.45h15.09v-203.28h31.07v15.98h15.98v31.07h15.09v31.07h15.98v47.05h15.98v31.07h15.09v-155.35h-15.98v-110.07h31.96v47.05h15.09v171.32h47.05v-15.09h31.07v-47.05h31.07v78.12h-29.74l-1.33,1.33v14.65h-46.16v14.65l-1.33,1.33h-61.7v46.16h15.98v15.09h15.09v47.94h-31.07v-31.93l-1.33-.03h-14.65v-15.09h-15.09v-15.95l-1.33-.02h-44.39l-1.33.02v31.05h-15.09v15.98h-31.06v-47.05M844.04,743.34h-15.09v47.05h31.07v-31.07h-15.98v-15.98ZM734.85,759.32h-77.23v15.09h15.98v47.05h15.09v15.09h15.09v-15.09h15.98v-15.98h15.09v-46.16h0Z"/>
            <polyline points="48.65 540.06 48.65 524.97 142.74 524.97 142.74 540.06 157.84 540.06 157.84 587.99 142.74 587.99 142.74 603.08 126.77 603.08 126.77 618.17 142.74 618.17 142.74 634.15 173.82 634.15 173.82 650.13 189.79 650.13 189.79 665.22 204.89 665.22 204.89 681.2 220.86 681.2 220.86 775.29 204.89 775.29 204.89 806.36 189.79 806.36 189.79 821.45 173.82 821.45 173.82 837.43 142.74 837.43 142.74 852.52 48.65 852.52 48.65 837.43 32.67 837.43 32.67 790.38 48.65 790.38 48.65 805.47 64.63 805.47 64.63 821.45 126.77 821.45 126.77 805.47 141.86 805.47 141.86 790.38 157.84 790.38 157.84 774.41 173.82 774.41 173.82 759.32 188.91 759.32 188.91 697.18 173.82 697.18 173.82 682.53 172.48 681.2 157.84 681.2 157.84 666.11 95.7 666.11 95.7 650.13 79.72 650.13 79.72 618.17 95.7 618.17 95.7 603.08 110.79 603.08 110.79 587.1 126.77 587.1 126.77 556.05 125.43 556.03 111.67 556.03 111.67 572.01 64.63 572.01 64.63 603.08 48.65 603.08 48.65 587.99 34 587.99 32.67 587.96 32.67 540.13"/>
            <polygon points="330.05 681.2 330.05 696.29 361.12 696.29 361.12 727.36 377.09 727.36 377.09 728.69 377.1 759.32 361.12 759.32 361.12 775.29 345.15 775.29 345.15 759.32 329.17 759.32 329.17 728.25 267.03 728.25 267.03 774.41 298.98 774.41 298.98 790.38 314.08 790.38 314.08 805.47 330.05 805.47 330.05 821.45 361.12 821.45 361.12 836.54 375.77 836.54 377.1 836.53 377.1 868.5 392.19 868.5 392.19 946.62 361.12 946.62 361.12 962.6 314.08 962.6 314.08 946.62 267.03 946.62 267.03 930.64 235.96 930.64 235.96 915.55 219.98 915.55 219.98 883.59 267.03 883.59 267.03 899.59 268.36 899.57 283 899.57 283 914.66 314.08 914.66 314.08 930.64 345.15 930.64 345.15 914.66 361.12 914.66 361.12 868.47 359.79 868.5 345.15 868.5 345.15 852.57 343.81 852.52 314.08 852.52 314.08 837.43 298.1 837.43 298.1 821.45 267.03 821.45 267.03 806.36 251.05 806.36 251.05 790.38 235.96 790.38 235.96 696.29 267.03 696.29 267.03 681.2 330.05 681.2"/>
            <path d="M470.31,727.36v15.98h62.14v14.65l-.04,1.33h16.02v93.21h-15.98v15.98h-15.09v15.98h-15.98v15.09h-31.07v15.98h-15.98v15.09h-15.09v78.12h-31.96v-187.3h-15.09v-78.12h46.16v-14.65l.02-1.33h31.94,0ZM516.48,775.29h-77.23v108.3h15.09v-15.09h15.98v-15.98h31.07v-15.98h15.09v-61.25Z"/>
            <rect x="579.5" y="868.5" width="31.07" height="156.23"/>
            <path d="M610.57,790.38v15.09h15.98v47.05h-63.03v-47.05h15.98v-15.09h31.07ZM610.57,821.45h-31.07v15.09h31.07v-15.09Z"/>
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
                <radialGradient id="zoraGradFooterFinal" cx="70%" cy="25%" r="65%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
                </radialGradient>
              </defs>
              <circle cx="12" cy="12" r="10" fill="url(#zoraGradFooterFinal)" />
            </svg>
          </a>
          <a href="https://objkt.com/users/tz1hjc5fAb5abh69VadryWi9E3qfT3dEKkHk" target="_blank" className="opacity-50 hover:opacity-100 transition-opacity w-10 h-auto flex items-center justify-center">
            <svg viewBox="0 0 390.67 158.67" className="fill-current w-full h-auto">
              <g>
                <path d="M164.11,65.39c5.22,15.12,3.44,38.44-11.75,47.78-7.94,4.88-18,5.55-26.61,2.24-4.87-1.87-7.32-5.61-10.6-10.05l-1.53,10.43-12.52-.04V17.11s14.66-.03,14.66-.03l.04,39.3c5.05-7.16,12.94-10.46,21.51-10.28,12.38.26,22.54,7.46,26.79,19.29ZM133.55,103.59c8.53.01,15.33-5.23,17.3-13.27,1.43-5.82,1.43-11.97-.24-17.73-2.34-8.06-9.49-12.94-17.78-12.64s-14.92,5.59-16.7,13.64c-1.21,5.45-1.21,10.97.02,16.38,1.86,8.17,8.71,13.6,17.39,13.62Z"/>
                <polygon points="275.59 78.4 308.37 115.63 290.62 115.75 260.04 80.99 259.95 115.8 245.23 115.74 245.23 17.11 259.96 17.09 260.04 76.12 286.33 47.77 304.63 47.87 275.59 78.4"/>
                <path d="M79.61,94.71c-5.51,18.04-24.03,26.06-41.82,21.69-10.92-2.69-19.53-10.65-22.89-21.47-2.81-9.03-2.71-18.75.57-27.57,6.21-16.72,23.34-23.78,40.16-20.24,21.89,4.6,30.03,27.79,23.99,47.6ZM50.03,103.51c15.25-1.82,19.08-17.7,15.64-29.96-2.41-8.6-9.95-13.63-18.74-13.46-9.31.17-16.95,6.16-18.56,15.41-1.21,6.95-.81,16.59,4.23,22.04,4.42,4.78,10.69,6.78,17.43,5.98Z"/>
                <path d="M377.05,115.63l-22.25-.06c-5.31-.01-10.78-1.9-14.46-5.74-3.35-3.51-4.78-8.63-4.79-13.53l-.12-36.25-17.28-.03-.03-12.26,11.46-.12c3.31-.03,6.24-2.54,6.86-5.74l2.34-11.99,11.32-.03.05,17.81,27.18.03-.03,12.3-27.17.02.06,35.08c0,4.52,3.11,7.12,7.36,7.61l19.44.13.05,12.77Z"/>
                <path d="M169.28,146.06l-.02-12.63,27.78-.03c2.03,0,3.99-1.58,3.99-3.8v-65.39c0-2.23-2.05-3.68-3.97-3.68l-17.55-.05v-12.59s22.96.16,22.96.16c7.17.05,13.09,5.48,13.1,13.11l.09,70.7c.01,8.43-60.03,14.08-14.39,14.11l-32,.1Z"/>
                <path d="M217.36,22.02c1.89,3.56,1.43,7.71-.81,10.87-2.06,2.89-5.61,4.58-9.59,4.58-6.19,0-11.09-4.26-11.35-10.18s4.17-10.67,10.42-11.07c4.52-.29,9.02,1.47,11.33,5.81Z"/>
              </g>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
