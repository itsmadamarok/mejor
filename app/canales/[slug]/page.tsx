// app/canales/[slug]/page.tsx
import { channelsData, getChannelCategoryBySlug, getAllCategorySlugs } from '@/lib/canales-data';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Tv, 
  ShieldCheck, 
  Zap, 
  ArrowLeft, 
  Sparkles, 
  HelpCircle, 
  Activity, 
  Cpu, 
  MonitorSmartphone,
  Star,
  ChevronDown,
  Clock,
  Wifi,
  Award,
  Play
} from 'lucide-react';
import ShareButtons from '../../components/ShareButtons';

// ============ BANDERAS DEL FOOTER ============
const FlagES = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-es"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-es)">
      <path fill="#AA151B" d="M0 0h32v32H0z" />
      <path fill="#F1BF00" d="M0 8h32v16H0z" />
    </g>
  </svg>
);

const FlagUK = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-uk"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-uk)">
      <path fill="#012169" d="M0 0h32v32H0z" />
      <path fill="#FFFFFF" d="M0 0l32 32M32 0L0 32" stroke="#FFFFFF" strokeWidth="4" />
      <path fill="#C8102E" d="M0 0l32 32M32 0L0 32" stroke="#C8102E" strokeWidth="2" />
      <rect x="0" y="12" width="32" height="8" fill="#FFFFFF" />
      <rect x="0" y="14" width="32" height="4" fill="#C8102E" />
      <rect x="12" y="0" width="8" height="32" fill="#FFFFFF" />
      <rect x="14" y="0" width="4" height="32" fill="#C8102E" />
    </g>
  </svg>
);

const FlagUSA = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-usa"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-usa)">
      <path fill="#B22234" d="M0 0h32v32H0z" />
      <path fill="#FFFFFF" d="M0 2.5h32v2.5H0zM0 7.5h32v2.5H0zM0 12.5h32v2.5H0zM0 17.5h32v2.5H0zM0 22.5h32v2.5H0zM0 27.5h32v2.5H0z" />
      <rect x="0" y="0" width="14" height="12.5" fill="#3C3B6E" />
      <path fill="#FFFFFF" d="M4 1l1 2h3l-2.5 2 1 2.5L4 5.5 1.5 7.5l1-2.5L0 3h3zM8 6l1 2h3l-2.5 2 1 2.5L8 10.5 5.5 12.5l1-2.5L4 8h3z" />
    </g>
  </svg>
);

const FlagFR = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-fr"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-fr)">
      <path fill="#002395" d="M0 0h10.7v32H0z" />
      <path fill="#FFFFFF" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#ED2939" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagDE = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-de"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-de)">
      <path fill="#000000" d="M0 0h32v10.7H0z" />
      <path fill="#DD0000" d="M0 10.7h32v10.6H0z" />
      <path fill="#FFCC00" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagIT = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-it"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-it)">
      <path fill="#009246" d="M0 0h10.7v32H0z" />
      <path fill="#FFFFFF" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#CE2B37" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagPT = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-pt"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-pt)">
      <path fill="#006600" d="M0 0h16v32H0z" />
      <path fill="#FF0000" d="M16 0h16v32H16z" />
      <circle cx="10" cy="16" r="6" fill="#FFCC00" stroke="#FF0000" strokeWidth="1.5" />
      <path fill="#006600" d="M10 13l1 2h3l-2.5 1.5 1 2.5L10 17l-2.5 2 1-2.5L6 15h3z" />
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

// Hero Flags Circulares
const FlagCircleES = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-md shrink-0 ring-2 ring-[#CA1421]/80" viewBox="0 0 32 32">
    <clipPath id="hc-es"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#hc-es)">
      <path fill="#AA151B" d="M0 0h32v32H0z" />
      <path fill="#F1BF00" d="M0 8h32v16H0z" />
    </g>
  </svg>
);

const FlagCircleMX = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-md shrink-0 ring-2 ring-[#CA1421]/80" viewBox="0 0 32 32">
    <clipPath id="hc-mx"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#hc-mx)">
      <path fill="#006341" d="M0 0h10.7v32H0z" />
      <path fill="#FFF" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#CE1126" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagCircleAR = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-md shrink-0 ring-2 ring-[#CA1421]/80" viewBox="0 0 32 32">
    <clipPath id="hc-ar"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#hc-ar)">
      <path fill="#75AADB" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
    </g>
  </svg>
);

const FlagCircleCO = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-md shrink-0 ring-2 ring-[#CA1421]/80" viewBox="0 0 32 32">
    <clipPath id="hc-co"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#hc-co)">
      <path fill="#FCD116" d="M0 0h32v16H0z" />
      <path fill="#003893" d="M0 16h32v8H0z" />
      <path fill="#CE1126" d="M0 24h32v8H0z" />
    </g>
  </svg>
);

const FlagCircleCL = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-md shrink-0 ring-2 ring-[#CA1421]/80" viewBox="0 0 32 32">
    <clipPath id="hc-cl"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#hc-cl)">
      <path fill="#FFF" d="M0 0h32v16H0z" />
      <path fill="#D52B1E" d="M0 16h32v16H0z" />
      <path fill="#0039A6" d="M0 0h12.8v16H0z" />
    </g>
  </svg>
);

const flagItems = [
  { name: 'España', code: 'ES', component: FlagCircleES },
  { name: 'México', code: 'MX', component: FlagCircleMX },
  { name: 'Argentina', code: 'AR', component: FlagCircleAR },
  { name: 'Colombia', code: 'CO', component: FlagCircleCO },
  { name: 'Chile', code: 'CL', component: FlagCircleCL },
];

// ============ MAPA COMPLETO DE PAÍSES A BANDERAS ============
const getCountryFlag = (country: string) => {
  const flagMap: Record<string, React.ReactNode> = {
    // España
    'España': <FlagES />,
    'Spain': <FlagES />,
    'ES': <FlagES />,
    
    // Reino Unido
    'Reino Unido': <FlagUK />,
    'UK': <FlagUK />,
    'United Kingdom': <FlagUK />,
    'Inglaterra': <FlagUK />,
    'England': <FlagUK />,
    
    // Estados Unidos
    'Estados Unidos': <FlagUSA />,
    'USA': <FlagUSA />,
    'United States': <FlagUSA />,
    'EE.UU.': <FlagUSA />,
    'EEUU': <FlagUSA />,
    
    // Francia
    'Francia': <FlagFR />,
    'France': <FlagFR />,
    'FR': <FlagFR />,
    
    // Alemania
    'Alemania': <FlagDE />,
    'Germany': <FlagDE />,
    'DE': <FlagDE />,
    
    // Italia
    'Italia': <FlagIT />,
    'Italy': <FlagIT />,
    'IT': <FlagIT />,
    
    // Portugal
    'Portugal': <FlagPT />,
    'PT': <FlagPT />,
    
    // México
    'México': <FlagMX />,
    'Mexico': <FlagMX />,
    'MX': <FlagMX />,
    
    // Argentina
    'Argentina': <FlagAR />,
    'AR': <FlagAR />,
    
    // Colombia
    'Colombia': <FlagCO />,
    'CO': <FlagCO />,
    
    // Chile
    'Chile': <FlagCL />,
    'CL': <FlagCL />,
  };
  
  return flagMap[country] || <FlagES />;
};

// ============ GLOBE ICON (FIXED: REMOVED EXPORT) ============
function GlobeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
    </svg>
  );
}

// ============ TYPES ============
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

// ============ METADATA ============
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const category = getChannelCategoryBySlug(resolvedParams.slug);

  if (!category) {
    return generateSEOMetadata('Paquete de Canales No Encontrado');
  }

  return {
    title: `${category.name} en IPTV | +${category.totalChannels} Canales | ${CONSTANTS.BRAND_NAME}`,
    description: `Disfruta de ${category.totalChannels} canales de ${category.name} en Full HD 60FPS. Prueba gratuita 24H.`,
    keywords: [...category.keywords, `IPTV ${category.name}`].join(', '),
    alternates: { canonical: `https://${CONSTANTS.DOMAIN}/canales/${category.slug}` },
  };
}

// ============ MAIN ============
export default async function ChannelCategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const category = getChannelCategoryBySlug(resolvedParams.slug);

  if (!category) notFound();

  const cleanPhone = (CONSTANTS.CONTACT.phone || '+31612345678').replace(/[^0-9]/g, '');
  
  // Determinista en renderizado de servidor para evitar discrepancias de rehidratación
  const discoverPhrase = `Descubre todos los ${category.totalChannels} canales de ${category.name}`;

  return (
    <div className="flex flex-col min-h-screen bg-[#0C0C0E] text-[#F9F9FB] overflow-hidden">

      {/* HERO */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#CA1421]/20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(202,20,33,0.22),_transparent_60%)]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 bg-[#CA1421] text-white px-4 py-2 rounded-full mb-6 shadow-lg shadow-[#CA1421]/30">
            <Sparkles className="w-4 h-4 text-[#FFCC00]" />
            <span className="font-black text-xs uppercase tracking-widest">Centro de Streaming en Directo</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
            {category.name} <span className="text-[#CA1421]">IPTV</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#F9F9FB]/80 font-bold max-w-3xl mx-auto leading-relaxed mb-6">
            {category.description}
          </p>

          {/* Flag Bar */}
          <div className="w-full max-w-2xl mx-auto my-6 px-3 py-2.5 rounded-full bg-black/60 border border-[#CA1421]/30 backdrop-blur-md flex items-center justify-center gap-3 sm:gap-6 overflow-x-auto">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#FFCC00] shrink-0">Disponible en:</span>
            <div className="flex items-center gap-3 sm:gap-5 shrink-0">
              {flagItems.map((flag) => {
                const FlagComp = flag.component;
                return (
                  <div key={flag.code} className="flex items-center gap-1.5 group cursor-default transition-transform hover:scale-105" title={flag.name}>
                    <FlagComp />
                    <span className="text-[11px] sm:text-xs font-black uppercase text-white group-hover:text-[#FFC400] transition-colors">
                      {flag.code}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-[#F9F9FB]/70 font-black uppercase tracking-widest mt-6">
            <span className="flex items-center gap-2 bg-black/60 border border-[#CA1421]/40 px-4 py-2 rounded-full text-white hover:border-[#CA1421] transition-all whitespace-nowrap">
              <Zap className="w-4 h-4 text-[#FFCC00]" /> {category.totalChannels}+ Canales
            </span>
            <span className="flex items-center gap-2 bg-black/60 border border-[#CA1421]/40 px-4 py-2 rounded-full text-white hover:border-[#CA1421] transition-all whitespace-nowrap">
              <ShieldCheck className="w-4 h-4 text-[#CA1421]" /> Anti-Freeze 60FPS
            </span>
            <span className="flex items-center gap-2 bg-black/60 border border-[#CA1421]/40 px-4 py-2 rounded-full text-white hover:border-[#CA1421] transition-all whitespace-nowrap">
              <Activity className="w-4 h-4 text-[#FFCC00]" /> 99.9% Uptime
            </span>
          </div>

          {/* 2 BOTONES */}
          <div className="mt-8 flex flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <Link
              href="/planes"
              className="px-6 py-3 rounded-full bg-[#CA1421] text-white font-black text-xs uppercase tracking-widest hover:bg-[#b0111c] transition-all hover:scale-105 shadow-lg shadow-[#CA1421]/30 whitespace-nowrap"
            >
              Elegir Plan Ahora
            </Link>
            <a
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hola ${CONSTANTS.BRAND_NAME}, quiero solicitar una prueba gratuita de 24 horas.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-black border-2 border-white/20 text-white font-black text-xs uppercase tracking-widest hover:border-[#CA1421] hover:bg-[#141417] transition-all hover:scale-105 whitespace-nowrap"
            >
              <Play className="w-3 h-3 inline mr-1" /> Prueba Gratuita 24H
            </a>
          </div>
        </div>
      </section>

      {/* CHANNELS GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Canales de <span className="text-[#CA1421]">{category.name}</span>
            </h2>
            <p className="text-[#F9F9FB]/70 font-bold text-sm sm:text-base mt-2">Todas las emisiones en FHD y HD.</p>
          </div>
          <div className="text-xs uppercase font-black tracking-widest text-[#FFCC00] bg-black border border-[#CA1421]/40 px-4 py-2 rounded-xl flex items-center gap-2 whitespace-nowrap">
            <Wifi className="w-3 h-3" /> Guía EPG Automática
          </div>
        </div>

        {/* CHANNEL CARDS CON FLAGS CORRECTAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {category.channels.slice(0, 30).map((channel, idx) => {
            let countryName = channel.country || category.name;
            
            if (channel.genre) {
              const genreCountryMap: Record<string, string> = {
                'Reino Unido': 'UK',
                'Estados Unidos': 'USA',
                'Francia': 'Francia',
                'Alemania': 'Alemania',
                'Italia': 'Italia',
                'Portugal': 'Portugal',
                'México': 'México',
                'Argentina': 'Argentina',
                'Colombia': 'Colombia',
                'Chile': 'Chile',
              };
              
              for (const [key, value] of Object.entries(genreCountryMap)) {
                if (channel.genre.includes(key) || channel.name.includes(key)) {
                  countryName = value;
                  break;
                }
              }
            }
            
            const countryKeywords = ['UK', 'USA', 'France', 'Germany', 'Italy', 'Portugal', 'Mexico', 'Argentina', 'Colombia', 'Chile'];
            for (const keyword of countryKeywords) {
              if (channel.name.includes(keyword) || channel.description.includes(keyword)) {
                countryName = keyword;
                break;
              }
            }

            return (
              <div
                key={idx}
                className="bg-[#141417] border-2 border-[#CA1421]/30 rounded-2xl p-5 shadow-xl flex flex-col justify-between hover:border-[#CA1421] hover:bg-[#1a1a1f] hover:scale-[1.02] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 bg-[#CA1421] text-white text-[10px] font-black uppercase tracking-wider rounded-md shadow-sm whitespace-nowrap">
                      {channel.quality}
                    </span>
                    <span className="text-[10px] font-black uppercase text-[#FFCC00] tracking-wider bg-black/40 px-2 py-0.5 rounded whitespace-nowrap">
                      {channel.genre || category.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 my-2">
                    <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#CA1421] group-hover:border-[#CA1421] transition-colors">
                      <Tv className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-white text-sm uppercase tracking-tight leading-tight truncate">
                        {channel.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        {getCountryFlag(countryName)}
                        <span className="text-[10px] text-white/50 font-bold truncate">
                          {countryName}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#F9F9FB]/70 text-xs font-bold mt-2 leading-relaxed line-clamp-2">
                    {channel.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-black uppercase text-[#FFCC00]">
                  <span className="flex items-center gap-1 whitespace-nowrap"><Zap className="w-3 h-3" /> 60 FPS</span>
                  <span className="flex items-center gap-1 whitespace-nowrap"><Clock className="w-3 h-3" /> 7 Días</span>
                  {channel.isFeatured && (
                    <span className="flex items-center gap-1 text-[#CA1421] whitespace-nowrap">
                      <Star className="w-3 h-3 fill-[#CA1421]" /> Destacado
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* DISCOVER MORE CARD */}
        {category.channels.length > 30 && (
          <div className="mt-12">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#CA1421]/20 via-[#CA1421]/10 to-transparent border-2 border-[#CA1421]/30 rounded-3xl p-8 sm:p-12 text-center hover:border-[#CA1421] transition-all duration-500 group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(202,20,33,0.15)_0%,_transparent_70%)]" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#CA1421]/20 px-4 py-2 rounded-full mb-4">
                  <Sparkles className="w-5 h-5 text-[#FFCC00]" />
                  <span className="text-[#FFCC00] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                    {category.totalChannels - 30}+ Canales Más
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-3">
                  {discoverPhrase}
                </h3>
                
                <p className="text-[#F9F9FB]/70 font-bold text-base max-w-2xl mx-auto mb-6">
                  Amplía tu experiencia con todos los canales disponibles de {category.name}.
                </p>
                
                {/* 2 BOTONES */}
                <div className="flex flex-row items-center justify-center gap-3 max-w-md mx-auto">
                  <a
                    href="#all-channels"
                    className="px-6 py-3 rounded-full bg-[#CA1421] text-white font-black text-xs uppercase tracking-widest hover:bg-[#b0111c] transition-all hover:scale-105 shadow-lg shadow-[#CA1421]/30 whitespace-nowrap inline-flex items-center justify-center"
                  >
                    <ChevronDown className="w-3 h-3 inline mr-1" /> Ver Todos
                  </a>
                  <Link
                    href="/planes"
                    className="px-6 py-3 rounded-full bg-black border-2 border-white/20 text-white font-black text-xs uppercase tracking-widest hover:border-[#CA1421] hover:bg-[#141417] transition-all hover:scale-105 whitespace-nowrap inline-flex items-center justify-center"
                  >
                    <Award className="w-3 h-3 inline mr-1" /> Elegir Plan
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-white/50 font-bold">
                  <span className="flex items-center gap-1 whitespace-nowrap"><Tv className="w-3 h-3" /> {category.totalChannels} Canales</span>
                  <span className="flex items-center gap-1 whitespace-nowrap"><GlobeIcon className="w-3 h-3" /> Sin restricciones</span>
                  <span className="flex items-center gap-1 whitespace-nowrap"><Clock className="w-3 h-3" /> 7 días catch-up</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ALL CHANNELS */}
        <div id="all-channels" className="mt-16 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-black text-white uppercase tracking-tight">
              Todos los Canales de <span className="text-[#CA1421]">{category.name}</span>
            </h3>
            <span className="text-xs text-white/40 font-bold">{category.totalChannels} canales</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.channels.slice(30).map((channel, idx) => {
              let countryName = channel.country || category.name;
              
              const countryKeywords = ['UK', 'USA', 'France', 'Germany', 'Italy', 'Portugal', 'Mexico', 'Argentina', 'Colombia', 'Chile'];
              for (const keyword of countryKeywords) {
                if (channel.name.includes(keyword) || channel.description.includes(keyword) || channel.genre?.includes(keyword)) {
                  countryName = keyword;
                  break;
                }
              }
              
              return (
                <div
                  key={idx + 30}
                  className="bg-[#141417] border border-white/10 rounded-xl p-4 hover:border-[#CA1421]/50 hover:bg-[#1a1a1f] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-black border border-white/10 flex items-center justify-center shrink-0">
                      <Tv className="w-4 h-4 text-white/60" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-bold text-xs uppercase truncate">{channel.name}</h4>
                      <div className="flex items-center gap-1 mt-0.5">
                        {getCountryFlag(countryName)}
                        <span className="text-[10px] text-white/40 truncate">{countryName}</span>
                      </div>
                    </div>
                    <span className="text-[8px] font-black uppercase text-[#FFCC00] bg-black/40 px-2 py-0.5 rounded whitespace-nowrap">
                      {channel.quality}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#09090b] border-t border-[#CA1421]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#141417] border-2 border-[#CA1421] rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
              ¿Por qué ver {category.name} con <span className="text-[#CA1421]">{CONSTANTS.BRAND_NAME}</span>?
            </h2>
            <div className="text-[#F9F9FB]/80 font-medium text-sm sm:text-base leading-relaxed space-y-4">
              <p>Con <strong>{CONSTANTS.BRAND_NAME}</strong>, obtienes acceso completo al paquete de <strong>{category.name}</strong> sin restricciones.</p>
              <p>Nuestra infraestructura garantiza conexiones estables y mínima latencia.</p>
              <div className="bg-[#CA1421]/10 border border-[#CA1421]/30 rounded-xl p-4 mt-4">
                <p className="text-[#FFCC00] font-black text-sm">
                  <Tv className="w-4 h-4 inline mr-2" />
                  {category.totalChannels} canales de {category.name} disponibles 24/7.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            <div className="p-6 bg-[#141417] border border-[#CA1421]/40 rounded-2xl text-center shadow-md hover:border-[#CA1421] transition-all group">
              <Cpu className="w-8 h-8 text-[#FFCC00] mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-black text-sm uppercase text-white">H.265 / HEVC</h3>
              <p className="text-xs text-[#F9F9FB]/60 font-bold mt-1">Imagen nítida, bajo consumo</p>
            </div>
            <div className="p-6 bg-[#141417] border border-[#CA1421]/40 rounded-2xl text-center shadow-md hover:border-[#CA1421] transition-all group">
              <MonitorSmartphone className="w-8 h-8 text-[#CA1421] mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-black text-sm uppercase text-white">Compatibilidad Total</h3>
              <p className="text-xs text-[#F9F9FB]/60 font-bold mt-1">Smart TV, Firestick, Android</p>
            </div>
            <div className="p-6 bg-[#141417] border border-[#CA1421]/40 rounded-2xl text-center shadow-md hover:border-[#CA1421] transition-all group">
              <ShieldCheck className="w-8 h-8 text-[#FFCC00] mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-black text-sm uppercase text-white">Anti-Congelamiento</h3>
              <p className="text-xs text-[#F9F9FB]/60 font-bold mt-1">Sin cortes en horas pico</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-8 text-center">
              Preguntas Frecuentes sobre <span className="text-[#CA1421]">{category.name}</span>
            </h2>
            <div className="space-y-4">
              {category.faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#141417] border border-white/10 rounded-2xl p-6 shadow-xl hover:border-[#CA1421]/30 transition-all">
                  <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#FFCC00] flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-[#F9F9FB]/70 text-sm font-bold leading-relaxed pl-7 border-l-2 border-[#CA1421] ml-1">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <ShareButtons
            title={`Guía de Canales ${category.name} - ${CONSTANTS.BRAND_NAME}`}
            url={`https://${CONSTANTS.DOMAIN}/canales/${category.slug}`}
          />

          <div className="mt-16 pt-10 border-t border-white/10">
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-6 text-center">Explora Otros Paquetes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {channelsData.filter((c) => c.slug !== category.slug).map((cat) => (
                <Link key={cat.slug} href={`/canales/${cat.slug}`} className="p-4 bg-[#141417] border border-white/10 rounded-xl hover:border-[#CA1421] hover:bg-[#1a1a1f] transition-all text-center group shadow-md">
                  <span className="text-xs sm:text-sm font-black uppercase text-white group-hover:text-[#FFCC00] transition-colors block truncate">
                    {cat.name}
                  </span>
                  <span className="text-[10px] text-[#FFCC00]/80 font-bold mt-1 block">
                    {cat.totalChannels}+ Canales
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-[#CA1421] hover:text-white transition-colors font-black text-xs uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4" /> Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}