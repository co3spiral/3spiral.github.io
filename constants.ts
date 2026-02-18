
import { SocialLink, ArtPiece } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'X (Twitter)',
    url: 'https://x.com/co3spiral',
    icon: 'fab fa-x-twitter',
    description: 'Sinais de alta frequência e atualizações do ecossistema on-chain.'
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/co_3spiral',
    icon: 'fab fa-instagram',
    description: 'Laboratório visual e curadoria de motion design orgânico.'
  },
  {
    platform: 'Zora',
    url: 'https://zora.co/@3spi_',
    icon: 'fas fa-eye',
    description: 'A fundação imutável da nossa mídia e coleções digitais.'
  }
];

export const GALLERY: ArtPiece[] = [
  { 
    id: '1', 
    title: '3SPIRAL GENESIS', 
    imageUrl: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=1200', 
    platform: 'Zora' 
  },
  { 
    id: '2', 
    title: 'VOID STUDY // 04', 
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200', 
    platform: 'Instagram' 
  },
  { 
    id: '3', 
    title: 'SIGNAL TRACE', 
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200', 
    platform: 'X (Twitter)' 
  },
  { 
    id: '4', 
    title: 'RECURSIVE FLOW', 
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200', 
    platform: 'Zora' 
  }
];
