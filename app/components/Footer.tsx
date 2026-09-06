'use client';

import Link from "next/link";
import Image from "next/image";
import { CONSTANTS } from "@/lib/seo";
import { channelsData } from "@/lib/canales-data";
import { Facebook, Instagram, Twitter } from "lucide-react";

// Lightweight Circular Flags (ES, MX, AR, CO, CL)
const FlagES = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-es"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-es)">
      <path fill="#AA151B" d="M0 0h32v32H0z" />
      <path fill="#F1BF00" d="M0 8h32v16H0z" />
    </g>
  </svg>
);

const FlagMX = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-mx"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-mx)">
      <path fill="#006341" d="M0 0h10.7v32H0z" />
      <path fill="#FFF" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#CE1126" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagAR = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-ar"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-ar)">
      <path fill="#75AADB" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
    </g>
  </svg>
);

const FlagCO = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-co"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-co)">
      <path fill="#FCD116" d="M0 0h32v16H0z" />
      <path fill="#003893" d="M0 16h32v8H0z" />
      <path fill="#CE1126" d="M0 24h32v8H0z" />
    </g>
  </svg>
);

const FlagCL = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-cl"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-cl)">
      <path fill="#FFF" d="M0 0h32v16H0z" />
      <path fill="#D52B1E" d="M0 16h32v16H0z" />
      <path fill="#0039A6" d="M0 0h12.8v16H0z" />
    </g>
  </svg>
);

const flags = [
  { name: 'España', code: 'ES', component: FlagES },
  { name: 'México', code: 'MX', component: FlagMX },
  { name: 'Argentina', code: 'AR', component: FlagAR },
  { name: 'Colombia', code: 'CO', component: FlagCO },
  { name: 'Chile', code: 'CL', component: FlagCL },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#111113] text-white/70 py-16 px-6 lg:px-12 border-t-4 border-[#CA1421] overflow-hidden min-h-[380px]">
      {/* Structural Accent Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CA1421]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Strict 40% (5 cols) | 20% (2 cols) | 20% (3 cols) | 20% (2 cols) Desktop Distribution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column (~40% on Desktop) */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-3 mb-5 group inline-flex"
                aria-label={`${CONSTANTS.BRAND_NAME} - Inicio`}
              >
                <div className="w-auto h-12 flex items-center group-hover:scale-105 transition-transform">
                  <Image
                    src="/img/iptv-logo.webp"
                    alt={`${CONSTANTS.BRAND_NAME} Logo`}
                    width={180}
                    height={48}
                    className="object-contain h-full w-auto"
                    loading="lazy"
                  />
                </div>
              </Link>

              {/* Description */}
              <p className="text-sm md:text-base font-bold text-white/80 max-w-sm leading-relaxed mb-5">
                Experimenta el futuro de la televisión digital con{" "}
                <strong className="text-[#CA1421]">{CONSTANTS.BRAND_NAME}</strong>. 
                El mejor servicio de IPTV en España y Latinoamérica con más de 20.000 canales en directo y 60.000+ películas y series.
              </p>

              {/* FLAGS UNDER LOGO & DESCRIPTION IN ONE LINE */}
              <div className="inline-flex items-center flex-nowrap gap-2 sm:gap-3 py-1.5 px-3 mb-6 rounded-full bg-white/[0.04] border border-white/10 w-fit">
                <span className="text-[10px] uppercase font-black tracking-wider text-white/50 shrink-0">
                  Enfoque:
                </span>
                <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                  {flags.map((flag) => {
                    const FlagComp = flag.component;
                    return (
                      <div 
                        key={flag.code} 
                        className="flex items-center gap-1 group cursor-default" 
                        title={flag.name}
                      >
                        <FlagComp />
                        <span className="text-[10px] font-black uppercase text-white group-hover:text-[#FFC400] transition-colors">
                          {flag.code}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label={`Síguenos en Twitter`}
                className="group w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-[#CA1421] hover:border-[#CA1421] transition-all duration-300"
              >
                <Twitter className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
              </a>

              <a
                href="#"
                aria-label={`Síguenos en Instagram`}
                className="group w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-[#CA1421] hover:border-[#CA1421] transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
              </a>

              <a
                href="#"
                aria-label={`Síguenos en Facebook`}
                className="group w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-[#CA1421] hover:border-[#CA1421] transition-all duration-300"
              >
                <Facebook className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Navegación (~20% on Desktop) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#CA1421] pb-1 inline-block">
              Navegación
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              <li>
                <Link href="/" className="text-white/60 hover:text-[#FFC400] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/planes" className="text-white/60 hover:text-[#FFC400] transition-colors">
                  Planes
                </Link>
              </li>
              <li>
                <Link href="/instalacion" className="text-white/60 hover:text-[#FFC400] transition-colors">
                  Instalación
                </Link>
              </li>
              <li>
                <Link href="/opiniones" className="text-white/60 hover:text-[#FFC400] transition-colors">
                  Reseñas y Opiniones
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="text-white/60 hover:text-[#FFC400] transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/soporte" className="text-white/60 hover:text-[#FFC400] transition-colors">
                  Soporte
                </Link>
              </li>
              <li>
                <Link href="/atencion-al-cliente" className="text-white/60 hover:text-[#FFC400] transition-colors">
                  Atención al Cliente
                </Link>
              </li>
            </ul>
          </div>

          {/* Centered Zenderpakketten (~20% on Desktop - Cleaned Names, No 4K Label) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#CA1421] pb-1 inline-block">
              Paquetes de Canales
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              {channelsData.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/canales/${category.slug}`}
                    className="text-white/60 hover:text-[#FFC400] transition-colors block"
                  >
                    {category.name.replace(/\s*\([^)]*\)/g, "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Juridisch (~20% on Desktop) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#CA1421] pb-1 inline-block">
              Legal
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              <li>
                <Link href="/sobre-nosotros" className="text-white/60 hover:text-[#FFC400] transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/terminos-y-condiciones" className="text-white/60 hover:text-[#FFC400] transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidad" className="text-white/60 hover:text-[#FFC400] transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-de-garantia" className="text-white/60 hover:text-[#FFC400] transition-colors">
                  Política de Garantía
                </Link>
              </li>
              <li>
                <Link href="/politica-dmca" className="text-white/60 hover:text-[#FFC400] transition-colors">
                  Política DMCA
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar Payment & Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/50 font-bold text-center md:text-left">
          © {new Date().getFullYear()} {CONSTANTS.BRAND_NAME}. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-3 flex-wrap justify-center">
          {[
            { src: "/img/payment/1.png", alt: "PayPal" },
            { src: "/img/payment/2.png", alt: "Bitcoin y Criptomonedas" },
            { src: "/img/payment/3.png", alt: "Visa" },
            { src: "/img/payment/4.png", alt: "Mastercard" },
          ].map((item) => (
            <div
              key={item.alt}
              className="relative h-9 w-14 flex-shrink-0 rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-sm flex items-center justify-center hover:border-[#CA1421]/40 hover:bg-[#CA1421]/5 transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain p-1 opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="56px"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}