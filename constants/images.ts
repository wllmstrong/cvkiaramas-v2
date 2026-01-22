// Import all images directly to ensure Vite processes them correctly and avoids 404s
import bg1 from '../assets/bg1.webp';
import bg2 from '../assets/bg2.webp';
import bg3 from '../assets/bg3.webp';
import aboutImg from '../assets/about.webp';
import p1 from '../assets/p1.webp';
import p2 from '../assets/p2.webp';
import p3 from '../assets/p3.webp';

/**
 * Centralized Image Repository for CV. KIARA MAS
 * Using direct imports to solve 404 issues in production/Vercel
 */
export const IMAGES = {
  // Backgrounds
  hero: [bg1, bg2, bg3],
  
  // Sections
  about: aboutImg,
  
  // Portfolio (Matching your file names: p1, p2, p3)
  portfolio: [
    { local: p1 },
    { local: p2 },
    { local: p3 },
    { local: p1 } // Fallback for 4th item using p1
  ]
};