
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  description: string;
}

export interface ArtPiece {
  id: string;
  title: string;
  imageUrl: string;
  platform?: string;
  description?: string;
}

export type Language = 'en' | 'pt' | 'es';
