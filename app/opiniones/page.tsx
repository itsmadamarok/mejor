'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  ThumbsUp, 
  Zap, 
  ChevronDown,
  Sparkles,
  MessageCircle,
  ArrowRight,
  Trophy,
  Tv,
  Settings,
  Headphones,
  Smartphone,
  Layers
} from 'lucide-react';

const CONSTANTS = {
  BRAND_NAME: 'Mejor IPTV',
  DOMAIN: 'mejoriptv.org',
  FOCUS_KEYWORD: 'Mejor IPTV España',
  SECOND_FOCUS_KEYWORD: 'Suscripción IPTV',
  THIRD_FOCUS_KEYWORD: 'Comprar IPTV',
  CONTACT: {
    phone: '+447462159850',
  },
};

const { FOCUS_KEYWORD, SECOND_FOCUS_KEYWORD, THIRD_FOCUS_KEYWORD, BRAND_NAME } = CONSTANTS;

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

const flagItems = [
  { name: 'España', code: 'ES', component: FlagES },
  { name: 'México', code: 'MX', component: FlagMX },
  { name: 'Argentina', code: 'AR', component: FlagAR },
  { name: 'Colombia', code: 'CO', component: FlagCO },
  { name: 'Chile', code: 'CL', component: FlagCL },
];

interface ReviewItem {
  id: number;
  name: string;
  avatar: string;
  location: string;
  country: string;
  rating: number;
  date: string;
  tag: 'sport' | 'kwaliteit' | 'support' | 'installatie';
  service: string;
  device: string;
  title: string;
  content: string;
  helpfulCount: number;
}

const rawReviews: ReviewItem[] = [
  {
    id: 1,
    name: 'Carlos García',
    avatar: 'C',
    location: 'Madrid, España',
    country: 'ES',
    rating: 5,
    date: '2 días atrás',
    tag: 'sport',
    service: '12 Meses Premium',
    device: 'Apple TV 4K',
    title: `¡El mejor ${FOCUS_KEYWORD} para Fórmula 1!`,
    content: `Después de probar varios proveedores, encontré el servicio ideal. El ${SECOND_FOCUS_KEYWORD} funciona perfectamente en 60FPS sin tirones. Al ${THIRD_FOCUS_KEYWORD}, no esperaba esta estabilidad. Cero cortes durante las carreras.`,
    helpfulCount: 42
  },
  {
    id: 2,
    name: 'María López',
    avatar: 'M',
    location: 'Barcelona, España',
    country: 'ES',
    rating: 5,
    date: '1 semana atrás',
    tag: 'sport',
    service: '12 Meses VIP',
    device: 'Samsung Smart TV',
    title: `El mejor ${FOCUS_KEYWORD} para LaLiga`,
    content: `Excelente transmisión para los partidos de fútbol. El ${SECOND_FOCUS_KEYWORD} incluye todos los canales deportivos de alta definición. Al ${THIRD_FOCUS_KEYWORD}, recibí mis datos al instante.`,
    helpfulCount: 38
  },
  {
    id: 3,
    name: 'Javier Rodríguez',
    avatar: 'J',
    location: 'Valencia, España',
    country: 'ES',
    rating: 5,
    date: '2 semanas atrás',
    tag: 'installatie',
    service: '6 Meses',
    device: 'Amazon Firestick 4K',
    title: 'Instalación súper rápida y sencilla',
    content: `La configuración fue instantánea. Con el ${SECOND_FOCUS_KEYWORD} todo quedó configurado en menos de 5 minutos en el Firestick. El soporte de ayuda fue impecable al ${THIRD_FOCUS_KEYWORD}.`,
    helpfulCount: 29
  },
  {
    id: 4,
    name: 'Ana Martínez',
    avatar: 'A',
    location: 'Sevilla, España',
    country: 'ES',
    rating: 5,
    date: '3 semanas atrás',
    tag: 'kwaliteit',
    service: '12 Meses Premium',
    device: 'LG OLED Smart TV',
    title: 'Calidad 4K real sin compresión',
    content: `La definición de los canales 4K de este ${FOCUS_KEYWORD} es espectacular. El ${SECOND_FOCUS_KEYWORD} brinda una fluidez notable en eventos en vivo. Totalmente satisfecho al ${THIRD_FOCUS_KEYWORD}.`,
    helpfulCount: 19
  },
  {
    id: 5,
    name: 'David Fernández',
    avatar: 'D',
    location: 'Málaga, España',
    country: 'ES',
    rating: 5,
    date: '1 mes atrás',
    tag: 'sport',
    service: '3 Meses',
    device: 'Nvidia Shield Pro',
    title: 'Ideal para UFC y Deportes PPV',
    content: `Transmisiones perfectas sin ningún lag en eventos nocturnos. El ${SECOND_FOCUS_KEYWORD} cubre todos los eventos en vivo. Sin cobros sorpresa al ${THIRD_FOCUS_KEYWORD}.`,
    helpfulCount: 31
  },
  {
    id: 6,
    name: 'Elena Sánchez',
    avatar: 'E',
    location: 'Bilbao, España',
    country: 'ES',
    rating: 5,
    date: '1 mes atrás',
    tag: 'support',
    service: '12 Meses Premium',
    device: 'Sony Android TV',
    title: 'Atención por WhatsApp 24/7 excelente',
    content: `Resuelven cualquier duda por WhatsApp en minutos. Con el ${SECOND_FOCUS_KEYWORD} la atención es personalizada y muy amable al ${THIRD_FOCUS_KEYWORD}.`,
    helpfulCount: 17
  }
];

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'sport' | 'kwaliteit' | 'support' | 'installatie'>('all');
  const [visibleCount, setVisibleCount] = useState(6);
  const [helpfulState, setHelpfulState] = useState<{ [key: number]: boolean }>({});

  const cleanPhone = (CONSTANTS.CONTACT.phone || '').replace(/[^0-9]/g, '');

  const filteredReviews = useMemo(() => {
    if (activeFilter === 'all') return rawReviews;
    return rawReviews.filter((r) => r.tag === activeFilter);
  }, [activeFilter]);

  const displayedReviews = useMemo(() => {
    return filteredReviews.slice(0, visibleCount);
  }, [filteredReviews, visibleCount]);

  const handleHelpfulClick = (id: number) => {
    setHelpfulState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#111113] text-[#F1E8DB] overflow-hidden">
      
      {/* Responsive Hero Section */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(202,20,33,0.25),_transparent_60%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CA1421]/15 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-[#CA1421] px-5 py-2 rounded-full mb-6 shadow-[0_0_20px_rgba(202,20,33,0.4)] border border-white/20 whitespace-nowrap">
            <Star className="w-4 h-4 text-[#FFC400] fill-current" />
            <span className="text-white font-black text-xs uppercase tracking-widest">
              Opiniones Verificadas de Clientes
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-tight">
            Opiniones del <span className="text-[#CA1421]">{FOCUS_KEYWORD}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#F1E8DB]/90 font-medium max-w-3xl mx-auto leading-relaxed mb-8">
            Descubre por qué miles de usuarios confían en el <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong>. Disfruta del mejor <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> con estabilidad 4K y soporte inmediato al <strong className="text-white">{THIRD_FOCUS_KEYWORD}</strong>.
          </p>

          <div className="w-full flex items-center justify-center">
            <div className="inline-flex items-center justify-center flex-nowrap gap-3 sm:gap-5 px-5 py-2.5 rounded-full bg-[#161619] border-2 border-[#CA1421]/40 shadow-xl backdrop-blur-md">
              {flagItems.map((flag) => {
                const FlagComp = flag.component;
                return (
                  <div 
                    key={flag.code} 
                    className="flex items-center gap-2 shrink-0 group cursor-default whitespace-nowrap"
                    title={flag.name}
                  >
                    <FlagComp />
                    <span className="text-xs font-black uppercase text-[#F1E8DB] group-hover:text-[#FFC400] transition-colors">
                      {flag.code}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Aggregate Score Bar */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 w-full">
        <div className="bg-[#161619] border-2 border-[#CA1421] rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-5xl sm:text-6xl font-black text-[#FFFFFF] tracking-tight">4.9</span>
                <div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFC400] text-[#FFC400]" />
                    ))}
                  </div>
                  <p className="text-xs font-black uppercase tracking-wider text-[#FFC400] mt-1 whitespace-nowrap">Excelente Valoración</p>
                </div>
              </div>
              <p className="text-xs font-medium text-[#F1E8DB]/70 mt-3">
                Basado en más de <strong className="text-white">1.280+ opiniones</strong> sobre el <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong>.
              </p>
            </div>

            <div className="md:col-span-5 space-y-2">
              <div className="flex items-center gap-3 text-xs font-black text-[#F1E8DB]">
                <span className="w-16 whitespace-nowrap">5 Estrellas</span>
                <div className="flex-1 h-2.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-[#CA1421] rounded-full w-[94%]" />
                </div>
                <span className="w-8 text-right text-white/60">94%</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-black text-[#F1E8DB]">
                <span className="w-16 whitespace-nowrap">4 Estrellas</span>
                <div className="flex-1 h-2.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-[#CA1421] rounded-full w-[5%]" />
                </div>
                <span className="w-8 text-right text-white/60">5%</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-black text-[#F1E8DB]">
                <span className="w-16 whitespace-nowrap">3 Estrellas</span>
                <div className="flex-1 h-2.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-[#CA1421] rounded-full w-[1%]" />
                </div>
                <span className="w-8 text-right text-white/60">1%</span>
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col gap-2.5 justify-center bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 text-xs font-black text-[#FFFFFF] whitespace-nowrap">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span>Clientes {FOCUS_KEYWORD}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-black text-[#FFFFFF] whitespace-nowrap">
                <Zap className="w-4 h-4 text-[#FFC400] shrink-0" />
                <span>99.9% Uptime Servidores</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-black text-[#FFFFFF] whitespace-nowrap">
                <ShieldCheck className="w-4 h-4 text-[#CA1421] shrink-0" />
                <span>Garantía al {THIRD_FOCUS_KEYWORD}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        
        {/* Category Filters with SVG Icons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {[
            { id: 'all', label: `Todas las Reseñas (${rawReviews.length})`, icon: Layers },
            { id: 'sport', label: 'Deportes & F1', icon: Trophy },
            { id: 'kwaliteit', label: 'Calidad 4K', icon: Tv },
            { id: 'installatie', label: 'Configuración', icon: Settings },
            { id: 'support', label: 'Soporte 24/7', icon: Headphones },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id as any);
                  setVisibleCount(6);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md whitespace-nowrap flex items-center gap-2 ${
                  activeFilter === tab.id
                    ? 'bg-[#CA1421] text-[#FFFFFF] scale-105 border-2 border-[#FFC400]'
                    : 'bg-[#161619] text-[#F1E8DB]/80 border border-white/10 hover:border-[#CA1421] hover:text-[#FFFFFF]'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0 text-[#FFC400]" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Reviews Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedReviews.map((review) => {
            const isHelpful = helpfulState[review.id];
            const currentHelpfulCount = review.helpfulCount + (isHelpful ? 1 : 0);

            return (
              <div
                key={review.id}
                className="bg-[#161619] border-2 border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-[#CA1421] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#CA1421] border border-[#FFC400] text-white font-black flex items-center justify-center text-lg shadow-md shrink-0">
                        {review.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm sm:text-base font-black text-[#FFFFFF] uppercase tracking-tight">
                            {review.name}
                          </h3>
                          {review.country === 'ES' && <FlagES />}
                          {review.country === 'MX' && <FlagMX />}
                          {review.country === 'AR' && <FlagAR />}
                          {review.country === 'CO' && <FlagCO />}
                          {review.country === 'CL' && <FlagCL />}
                        </div>
                        <p className="text-[11px] font-medium text-[#F1E8DB]/60">{review.location}</p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="flex gap-0.5 justify-end">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#FFC400] text-[#FFC400]" />
                        ))}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#F1E8DB]/50 block mt-1 whitespace-nowrap">
                        {review.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 my-4">
                    <span className="px-3 py-1 bg-white/5 text-[#FFC400] text-[10px] font-black uppercase tracking-wider rounded-lg border border-white/10 whitespace-nowrap">
                      {review.service}
                    </span>
                    <span className="px-3 py-1 bg-black/40 text-[#F1E8DB] text-[10px] font-black uppercase tracking-wider rounded-lg border border-white/10 whitespace-nowrap flex items-center gap-1.5">
                      <Smartphone className="w-3.5 h-3.5 text-[#FFC400]" />
                      <span>{review.device}</span>
                    </span>
                    <span className="px-2.5 py-1 bg-green-500/10 text-green-400 text-[10px] font-black uppercase tracking-wider rounded-lg border border-green-500/20 flex items-center gap-1 whitespace-nowrap">
                      <CheckCircle2 className="w-3 h-3 text-green-400" /> Verificado
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-black text-[#FFFFFF] uppercase tracking-tight my-2 leading-snug">
                    "{review.title}"
                  </h4>

                  <p className="text-[#F1E8DB]/85 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                    {review.content}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs gap-2">
                  <span className="text-[11px] font-medium text-[#F1E8DB]/60">
                    ¿Te fue útil esta valoración?
                  </span>
                  <button
                    onClick={() => handleHelpfulClick(review.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      isHelpful
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-white/5 text-[#F1E8DB] hover:bg-[#CA1421] hover:text-[#FFFFFF]'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Útil ({currentHelpfulCount})</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredReviews.length && (
          <div className="w-full flex justify-center items-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="px-8 py-3.5 rounded-full bg-[#161619] text-[#FFFFFF] border-2 border-[#CA1421] hover:bg-[#CA1421] transition-all font-black text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer shadow-xl whitespace-nowrap"
            >
              <span>Cargar más reseñas...</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Call to Action Container */}
        <div className="bg-[#161619] border-2 border-[#CA1421] rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden mt-16">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFC400]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 bg-[#CA1421] px-4 py-1.5 rounded-full mb-4 shadow-md whitespace-nowrap">
            <Sparkles className="w-4 h-4 text-[#FFC400]" />
            <span className="text-white font-black text-xs uppercase tracking-widest">
              {FOCUS_KEYWORD} - Acceso Inmediato
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#FFFFFF] uppercase tracking-tight mb-3">
            ¿Listo para <span className="text-[#CA1421]">{THIRD_FOCUS_KEYWORD}</span>?
          </h2>

          <p className="text-[#F1E8DB]/80 text-sm sm:text-base max-w-xl mx-auto mb-8 font-medium">
            Únete a miles de clientes satisfechos. Accede al mejor <strong className="text-white">{SECOND_FOCUS_KEYWORD}</strong> con calidad 4K.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <Link
              href="/pakketten"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#CA1421] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#FFC400] hover:text-[#111113] transition-all shadow-xl whitespace-nowrap inline-flex items-center justify-center gap-2"
            >
              <span>{THIRD_FOCUS_KEYWORD} - Ver Planes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://live-support.netlify.app/${encodeURIComponent('Hola, me gustaría solicitar información sobre los planes y servicios disponibles.')}`}              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] text-white font-black text-xs uppercase tracking-widest hover:bg-[#20ba5a] transition-all shadow-xl flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Soporte WhatsApp 24H</span>
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}