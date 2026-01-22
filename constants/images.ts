/**
 * Centralized Image Repository - CV. KIARA MAS
 * Menggunakan import langsung agar Vite memproses aset ke dalam bundle produksi.
 */

// Backgrounds
import bg1 from '../assets/bg1.webp';
import bg2 from '../assets/bg2.webp';
import bg3 from '../assets/bg3.webp';

// Sections
import aboutImg from '../assets/about.webp';

// Portfolio
import p1 from '../assets/p1.webp';
import p2 from '../assets/p2.webp';
import p3 from '../assets/p3.webp';

export const IMAGES = {
  // Hero Carousel
  hero: [bg1, bg2, bg3],
  
  // Section Content
  about: aboutImg,
  
  // Portfolio Items
  portfolio: [
    { local: p1 },
    { local: p2 },
    { local: p3 },
    { local: p1 } // Fallback
  ]
};