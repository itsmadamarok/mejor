'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';

export default function PartnerSlider() {
  // Generate clean partner objects without repetitive words
  const partners = Array.from({ length: 10 }, (_, i) => {
    const partnerNumber = String(i + 1).padStart(2, '0');
    return {
      name: `Brand-${partnerNumber}`,
      imagePath: `/img/partners/omniptv-partners-${partnerNumber}`,
      width: 128,
      height: 128,
    };
  });

  // Duplicate for smooth infinite loop
  const sliderItems = useMemo(() => [...partners, ...partners], [partners]);

  // Total animation travel distance (10 items × 150px = 1500px)
  const animationDistance = partners.length * 150;

  return (
    <div className="w-full overflow-hidden relative py-16 bg-[#CA1421]">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#FFC400]/15 blur-[120px] pointer-events-none rounded-full" />

      {/* Blended gradient edge masks matching the solid red background */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#CA1421] via-[#CA1421]/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#CA1421] via-[#CA1421]/50 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 relative z-10">
        <p className="text-xs sm:text-sm text-[#FFC400] font-black uppercase tracking-[0.2em] bg-[#111113]/30 inline-block px-4 py-2 rounded-full border border-yellow-300/20 shadow-lg">
          Dispositivos & Apps IPTV Compatibles en España
        </p>
      </div>

      {/* Hide entire motion track from search engines and screen readers to prevent keyword loops */}
      <div aria-hidden="true" role="presentation" className="relative z-10 mb-8">
        <motion.div 
          className="flex gap-12 md:gap-16 items-center w-max"
          animate={{
            x: [0, -animationDistance],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {sliderItems.map((partner, idx) => (
            <div 
              key={`${partner.name}-${idx}`} 
              className="flex items-center justify-center min-w-[120px] md:min-w-[150px] opacity-75 hover:opacity-100 transition-all duration-300"
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28 drop-shadow-md">
                <Image
                  src={`${partner.imagePath}.png`}
                  alt=""
                  aria-hidden="true"
                  width={partner.width}
                  height={partner.height}
                  className="object-contain filter brightness-0 invert"
                  sizes="(max-width: 768px) 80px, 112px"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Small paragraph under slider */}
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <p className="text-white/90 text-xs sm:text-sm font-medium leading-relaxed">
          Nuestra plataforma IPTV está optimizada para funcionar sin cortes en Smart TVs (Samsung, LG, Sony), dispositivos Android TV, Fire TV Stick, Apple TV, ordenadores y teléfonos móviles mediante las aplicaciones más populares del mercado.
        </p>
      </div>
    </div>
  );
}