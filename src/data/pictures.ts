export interface PictureItem {
  id: string;
  originalFile: string;
  optimizedFile: string;
  src: string;
  width: number;
  height: number;
  aspectRatio: string;
  originalSize: string;
  optimizedSize: string;
  savingsPercent: string;
  title: string;
  category: 'campus' | 'incubateur' | 'recherche' | 'gouvernance' | 'formation-continue' | 'partenaires' | 'general';
  recommendedPage: string;
  tags: string[];
  cloudinaryPublicId?: string;
  cloudinaryUrl?: string;
}

import manifestData from '../../public/pictures/cloudinary-manifest.json';

export const pictures: PictureItem[] = manifestData as PictureItem[];

/**
 * Filter pictures by category
 */
export function getPicturesByCategory(category: PictureItem['category']): PictureItem[] {
  return pictures.filter(p => p.category === category);
}

/**
 * Filter pictures by recommended page
 */
export function getPicturesByPage(pagePath: string): PictureItem[] {
  return pictures.filter(p => p.recommendedPage === pagePath);
}

/**
 * Get a picture by its ID (basename without extension, e.g. "IMG_8994")
 */
export function getPictureById(id: string): PictureItem | undefined {
  return pictures.find(p => p.id === id);
}

/**
 * Key flagship pictures for immediate use across the site
 */
export const FLAGSHIP_PICTURES = {
  heroCampus: '/pictures/IMG_8994.webp',
  campusAerial: '/pictures/IMG_9025.webp',
  amphitheater: '/pictures/IMG_6984.webp',
  boardroomExecutive: '/pictures/888.webp',
  boardroomModern: '/pictures/IMG_7242.webp',
  coworkingIncubateur: '/pictures/8568.webp',
  challengeInnovHec: '/pictures/77.webp',
  formationContinue: '/pictures/IMG_8190.webp',
  executiveSession: '/pictures/IMG_7072.webp',
  professorPartners: '/pictures/IMG_7565.webp',
  researchColloque: '/pictures/IMG_7066.webp',
  workshopFlexSim: '/pictures/12.webp',
  workshopCNV: '/pictures/2.webp',
  executiveProcurement: '/pictures/30.webp',
  interactiveSeminar: '/pictures/20.webp',
  practicalCaseStudy: '/pictures/1111.webp',
  hospitalLogistics: '/pictures/17.webp',
  seminarHallReady: '/pictures/18.webp',
} as const;
