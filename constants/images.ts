/**
 * Centralized Image Repository for CV. KIARA MAS
 * Provides high-quality construction imagery with reliable fallbacks.
 */

const getImg = (localPath: string, fallbackId: string) => {
  // Always returns Unsplash high-quality images as primary source for this demo 
  // to ensure the landing page looks professional regardless of local environment.
  return `https://images.unsplash.com/${fallbackId}?auto=format&fit=crop&q=80&w=1200`;
};

export const IMAGES = {
  // Backgrounds
  hero: [
    getImg('/assets/bg1.webp', 'photo-1541888946425-d81bb19240f5'), // Construction site
    getImg('/assets/bg2.webp', 'photo-1503387762-592dea58ef4e'), // Modern architecture
    getImg('/assets/bg3.webp', 'photo-1590644365607-1c5a519a7a37'), // Concrete texture
  ],
  
  // Sections
  about: getImg('/assets/about.webp', 'photo-1504307651254-35682f923f96'), // Engineer at work
  
  // Portfolio
  portfolio: [
    {
      local: '/assets/11.webp',
      fallback: 'photo-1581094288338-2314dddb7ec3', 
    },
    {
      local: '/assets/p2.webp',
      fallback: 'photo-1589939705384-5185137a7f0f', 
    },
    {
      local: '/assets/p3.webp',
      fallback: 'photo-1584132967334-10e028bd69f7', 
    },
    {
      local: '/assets/p4.webp',
      fallback: 'photo-1517646287270-a5a9ca602e5c', 
    }
  ]
};