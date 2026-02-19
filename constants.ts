
import { SocialLink, ArtPiece } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'X (Twitter)',
    url: 'https://x.com/co3spiral',
    icon: 'custom-x',
    description: ''
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/co_3spiral',
    icon: 'fab fa-instagram',
    description: ''
  },
  {
    platform: 'Zora',
    url: 'https://zora.co/@3spiral',
    icon: 'custom-zora',
    description: ''
  },
  {
    platform: 'Objkt',
    url: 'https://objkt.com/users/tz1hjc5fAb5abh69VadryWi9E3qfT3dEKkHk',
    icon: 'custom-objkt',
    description: ''
  }
];

export const GALLERY: ArtPiece[] = [
  { 
    id: '1', 
    title: 'Bosque Gracias Summer 2026', 
    imageUrl: 'https://lavender-worrying-clam-733.mypinata.cloud/ipfs/bafybeie5dbiugaytr5jvc45yhnmaeso36tr4oado7rdzvxtq4vshox4pwy', 
    description: 'Bosque Gracias é um território artístico familiar na Patagônia Argentina que une natureza, tecnologia e criação coletiva. Após incêndios devastadores em 2026, o projeto de documentação da residência se transformou em um filme sobre memória, perda e resistência.'
  },
  { 
    id: '2', 
    title: 'Nostalgia Utópica', 
    imageUrl: 'https://lavender-worrying-clam-733.mypinata.cloud/ipfs/bafybeihgzpmuyaxrolt37rvsv6usqcovfrqgqpcylswqghd7rfbxuisdve', 
    description: 'Esta coleção transforma memórias em futuro, recriando estéticas digitais da infância — pixels, colagens, brilhos e universos online — a partir de uma perspectiva trans e diaspórica. Um gesto colaborativo de reescrever o passado para imaginar novas possibilidades e ocupar o centro das narrativas visuais.'
  }
];
