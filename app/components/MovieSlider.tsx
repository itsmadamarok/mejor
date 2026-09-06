'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { CONSTANTS } from '@/lib/seo';

// Localized Movies Array with unique identifiers
const movies = Array.from({ length: 12 }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `movie-${i}`,
    title: `Película en 4K Estreno ${i + 1}`,
    imagePath: `/img/sliders/movies/omniptv-movies-${number}`,
  };
});

// Localized Series Array with unique identifiers
const series = Array.from({ length: 12 }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `series-${i}`,
    title: `Serie VOD Premium ${i + 1}`,
    imagePath: `/img/sliders/series/omniptv-serie-${number}`,
  };
});

// Localized Sports Array with unique identifiers
const sports = Array.from({ length: 12 }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `sport-${i}`,
    title: `Canal de Deporte en Directo ${i + 1}`,
    imagePath: `/img/sliders/sports/omniptv-sports-${number}`,
  };
});

const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing-section');
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const InfiniteSlider = ({
  items,
  direction = 'left',
  speed = 50,
  category,
}: {
  items: any[];
  direction?: 'left' | 'right';
  speed?: number;
  category: string;
}) => {
  const [failedImages, setFailedImages] = useState<{ [key: string]: boolean }>({});
  const infiniteItems = useMemo(() => [...items, ...items], [items]);
  const duration = (items.length * speed) / 10;

  return (
    <div className="relative w-full overflow-hidden" aria-hidden="true">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#F1E8DB] via-[#F1E8DB]/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#F1E8DB] via-[#F1E8DB]/50 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex w-max gap-3 md:gap-4"
        animate={{ x: direction === 'left' ? [0, '-50%'] : ['-50%', 0] }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration, ease: 'linear' }}
      >
        {infiniteItems.map((item, idx) => {
          const isClone = idx >= items.length;
          // Primary items get a unique keyword-rich alt tag; clones get alt="" to avoid SEO duplicate flags
          const imageAlt = isClone
            ? ''
            : `${item.title} - ${category} ${CONSTANTS.BRAND_NAME}`;

          return (
            <button
              key={`${item.id}-${idx}`}
              onClick={scrollToPricing}
              tabIndex={isClone ? -1 : 0}
              aria-hidden={isClone ? 'true' : undefined}
              className="flex-shrink-0 w-28 sm:w-32 md:w-44 lg:w-48 block cursor-pointer group text-left bg-transparent border-none p-0"
            >
              <div className="relative aspect-[2/3] rounded-xl md:rounded-2xl overflow-hidden bg-[#111113] border-2 border-[#CA1421] shadow-xl transition-all duration-300 group-hover:border-[#FFC400] group-hover:scale-105">
                {!failedImages[`${item.id}-${idx}`] ? (
                  <Image
                    src={`${item.imagePath}.webp`}
                    alt={imageAlt}
                    width={192}
                    height={288}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={() =>
                      setFailedImages((prev) => ({ ...prev, [`${item.id}-${idx}`]: true }))
                    }
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#CA1421]">
                    <span className="text-[#FFC400] text-xs font-black uppercase tracking-wider">
                      {category}
                    </span>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default function MovieSlider() {
  return (
    <section className="w-full py-20 bg-[#F1E8DB] relative overflow-hidden" aria-label="Media overzicht">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-[#CA1421]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-[#FFC400]/20 blur-[130px] pointer-events-none rounded-full" />

      {/* Movies Row */}
      <div className="mb-14 relative z-10">
        <div className="w-[85%] max-w-7xl mx-auto px-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-[#CA1421] rounded-full" />
            <h3 className="text-2xl sm:text-3xl font-black text-[#111113] uppercase tracking-tight">
              Últimas Películas de Estreno en <span className="text-[#CA1421]">4K</span>
            </h3>
          </div>
          <p className="text-[#111113]/80 text-xs sm:text-sm mt-2 font-semibold hidden md:block max-w-2xl">
            Disfruta de los últimos estrenos de cine, blockbusters de Hollywood y películas con audio en castellano y latino sin cortes.
          </p>
        </div>
        <InfiniteSlider items={movies} direction="left" speed={45} category="Película" />
      </div>

      {/* Series Row */}
      <div className="mb-14 relative z-10">
        <div className="w-[85%] max-w-7xl mx-auto px-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-[#FFC400] rounded-full" />
            <h3 className="text-2xl sm:text-3xl font-black text-[#111113] uppercase tracking-tight">
              Series Populares & <span className="text-[#d8a800]">VOD Ilimitado</span>
            </h3>
          </div>
          <p className="text-[#111113]/80 text-xs sm:text-sm mt-2 font-semibold hidden md:block max-w-2xl">
            Accede a temporadas completas de Netflix, HBO Max, Amazon Prime, Disney+ y Apple TV+ actualizadas al instante.
          </p>
        </div>
        <InfiniteSlider items={series} direction="right" speed={40} category="Serie" />
      </div>

      {/* Sports Row */}
      <div className="relative z-10">
        <div className="w-[85%] max-w-7xl mx-auto px-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-[#CA1421] rounded-full" />
            <h3 className="text-2xl sm:text-3xl font-black text-[#111113] uppercase tracking-tight">
              Deportes en Directo & <span className="text-[#CA1421]">LaLiga</span>
            </h3>
          </div>
          <p className="text-[#111113]/80 text-xs sm:text-sm mt-2 font-semibold hidden md:block max-w-2xl">
            Fútbol en directo total: LaLiga EA Sports, Champions League, Premier League, DAZN, Movistar+ y eventos PPV.
          </p>
        </div>
        <InfiniteSlider items={sports} direction="left" speed={50} category="Deporte" />
      </div>
    </section>
  );
}