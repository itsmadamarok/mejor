'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';
import { 
  HelpCircle, 
  Tv, 
  Zap, 
  CreditCard, 
  Smartphone, 
  Search,
  ChevronDown,
  LifeBuoy,
  Wrench,
  Cpu,
  CheckCircle2,
  AlertCircle,
  X
} from 'lucide-react';
import ShareButtons from '../components/ShareButtons';

// ============ SEO CONSTANTS ============
const { FOCUS_KEYWORD, SECOND_FOCUS_KEYWORD, THIRD_FOCUS_KEYWORD, BRAND_NAME } = CONSTANTS;

// ============ COUNTRY FLAGS ============
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

interface FAQItem {
  id: string;
  category: 'general' | 'deportes' | 'dispositivos' | 'pagos';
  q: string;
  a: string;
}

const faqList: FAQItem[] = [
  // General
  {
    id: 'gen-1',
    category: 'general',
    q: `¿Qué es el ${FOCUS_KEYWORD} y en qué se diferencia del cable tradicional?`,
    a: `El ${FOCUS_KEYWORD} utiliza tecnología IPTV para transmitir televisión por internet. Nuestro ${SECOND_FOCUS_KEYWORD} elimina la necesidad de antenas o cables. Al ${THIRD_FOCUS_KEYWORD}, disfrutas de miles de canales en 4K desde cualquier lugar.`
  },
  {
    id: 'gen-2',
    category: 'general',
    q: `¿Cómo recibo mis credenciales del ${SECOND_FOCUS_KEYWORD} después del pago?`,
    a: `El ${FOCUS_KEYWORD} genera tus credenciales automáticamente. En 2-5 minutos recibirás tu M3U y códigos Xtream del ${SECOND_FOCUS_KEYWORD} por email. Al ${THIRD_FOCUS_KEYWORD}, todo es inmediato.`
  },
  {
    id: 'gen-3',
    category: 'general',
    q: `¿Puedo ver el ${SECOND_FOCUS_KEYWORD} en varios dispositivos?`,
    a: `El ${FOCUS_KEYWORD} permite instalar la app en múltiples dispositivos. El ${SECOND_FOCUS_KEYWORD} estándar es para 1 stream simultáneo. Al ${THIRD_FOCUS_KEYWORD}, puedes elegir 2 o 3 pantallas.`
  },
  {
    id: 'gen-4',
    category: 'general',
    q: `¿Cómo funciona la garantía de 7 días del ${FOCUS_KEYWORD}?`,
    a: `El ${FOCUS_KEYWORD} ofrece 99.9% de estabilidad. Si el ${SECOND_FOCUS_KEYWORD} tiene fallos técnicos no resueltos en 24h, recibirás reembolso completo al ${THIRD_FOCUS_KEYWORD}.`
  },
  {
    id: 'gen-5',
    category: 'general',
    q: `¿Hay renovación automática al ${THIRD_FOCUS_KEYWORD}?`,
    a: `No, el ${FOCUS_KEYWORD} no tiene renovación automática. Tu ${SECOND_FOCUS_KEYWORD} termina al finalizar el período. Tú decides cuándo ${THIRD_FOCUS_KEYWORD} de nuevo.`
  },
  {
    id: 'gen-6',
    category: 'general',
    q: `¿Puedo probar el ${FOCUS_KEYWORD} antes de ${THIRD_FOCUS_KEYWORD}?`,
    a: `¡Sí! El ${FOCUS_KEYWORD} ofrece una prueba gratuita de 24H. Contacta con nuestro equipo del ${SECOND_FOCUS_KEYWORD} para recibir tu código de prueba.`
  },

  // Deportes
  {
    id: 'dep-1',
    category: 'deportes',
    q: `¿El ${FOCUS_KEYWORD} incluye todos los canales deportivos?`,
    a: `Sí, el ${FOCUS_KEYWORD} tiene todos los canales de LaLiga, Champions, F1 y UFC. El ${SECOND_FOCUS_KEYWORD} transmite en 60FPS. Al ${THIRD_FOCUS_KEYWORD}, tienes acceso a todo el deporte premium.`
  },
  {
    id: 'dep-2',
    category: 'deportes',
    q: `¿Los eventos PPV del ${FOCUS_KEYWORD} tienen coste adicional?`,
    a: `No, el ${FOCUS_KEYWORD} incluye todos los eventos PPV. UFC, Boxeo y WWE están incluidos en tu ${SECOND_FOCUS_KEYWORD} sin coste extra al ${THIRD_FOCUS_KEYWORD}.`
  },
  {
    id: 'dep-3',
    category: 'deportes',
    q: `¿El ${SECOND_FOCUS_KEYWORD} tiene VOD con subtítulos?`,
    a: `El ${FOCUS_KEYWORD} tiene más de 60.000 títulos VOD. El ${SECOND_FOCUS_KEYWORD} incluye subtítulos en español. Al ${THIRD_FOCUS_KEYWORD}, accedes a todo el contenido.`
  },
  {
    id: 'dep-4',
    category: 'deportes',
    q: `¿Cómo funciona la EPG del ${FOCUS_KEYWORD}?`,
    a: `El ${FOCUS_KEYWORD} tiene una guía EPG actualizada cada 6 horas. El ${SECOND_FOCUS_KEYWORD} incluye catch-up de 7 días. Al ${THIRD_FOCUS_KEYWORD}, disfrutas de toda la programación.`
  },
  {
    id: 'dep-5',
    category: 'deportes',
    q: `¿Puedo ocultar canales del ${SECOND_FOCUS_KEYWORD} que no uso?`,
    a: `Sí, el ${FOCUS_KEYWORD} permite ocultar canales en la app. El ${SECOND_FOCUS_KEYWORD} es totalmente personalizable. Al ${THIRD_FOCUS_KEYWORD}, solo ves lo que te interesa.`
  },
  {
    id: 'dep-6',
    category: 'deportes',
    q: `¿El ${FOCUS_KEYWORD} funciona bien en eventos deportivos masivos?`,
    a: `El ${FOCUS_KEYWORD} usa servidores dedicados en Europa. El ${SECOND_FOCUS_KEYWORD} mantiene la calidad durante partidos importantes. Al ${THIRD_FOCUS_KEYWORD}, no tienes cortes.`
  },

  // Dispositivos
  {
    id: 'dis-1',
    category: 'dispositivos',
    q: `¿Qué dispositivos son compatibles con el ${SECOND_FOCUS_KEYWORD}?`,
    a: `El ${FOCUS_KEYWORD} funciona en Smart TV, Firestick, Apple TV, Android, iOS y PC. El ${SECOND_FOCUS_KEYWORD} es universal. Al ${THIRD_FOCUS_KEYWORD}, elige tu dispositivo favorito.`
  },
  {
    id: 'dis-2',
    category: 'dispositivos',
    q: `¿Qué app recomienda el ${FOCUS_KEYWORD} para cada dispositivo?`,
    a: `El ${FOCUS_KEYWORD} recomienda TiviMate para Android, IBO Player para Smart TV, y IPTVX para Apple. El ${SECOND_FOCUS_KEYWORD} funciona con todas las apps principales.`
  },
  {
    id: 'dis-3',
    category: 'dispositivos',
    q: `¿Qué velocidad necesito para el ${FOCUS_KEYWORD} en 4K?`,
    a: `El ${FOCUS_KEYWORD} necesita 25 Mbps para 4K. El ${SECOND_FOCUS_KEYWORD} funciona con 15 Mbps en Full HD. Al ${THIRD_FOCUS_KEYWORD}, recomiendo conexión por cable.`
  },
  {
    id: 'dis-4',
    category: 'dispositivos',
    q: `¿Qué hago si el ${SECOND_FOCUS_KEYWORD} se congela o bufferea?`,
    a: `El ${FOCUS_KEYWORD} tiene tecnología anti-freeze. Si el ${SECOND_FOCUS_KEYWORD} bufferrea, reinicia router y app. Al ${THIRD_FOCUS_KEYWORD}, contacta con nuestro soporte.`
  },
  {
    id: 'dis-5',
    category: 'dispositivos',
    q: `¿Necesito conocimientos técnicos para instalar el ${FOCUS_KEYWORD}?`,
    a: `No, el ${FOCUS_KEYWORD} se instala en 5 minutos. El ${SECOND_FOCUS_KEYWORD} solo requiere ingresar 3 datos. Al ${THIRD_FOCUS_KEYWORD}, todo es muy sencillo.`
  },
  {
    id: 'dis-6',
    category: 'dispositivos',
    q: `¿Puedo usar el ${SECOND_FOCUS_KEYWORD} fuera de España?`,
    a: `Sí, el ${FOCUS_KEYWORD} funciona en todo el mundo. El ${SECOND_FOCUS_KEYWORD} no tiene restricciones geográficas. Al ${THIRD_FOCUS_KEYWORD}, disfrutas donde sea.`
  },

  // Pagos
  {
    id: 'pay-1',
    category: 'pagos',
    q: `¿Qué métodos de pago acepta el ${FOCUS_KEYWORD}?`,
    a: `El ${FOCUS_KEYWORD} acepta tarjetas, PayPal, transferencia y criptomonedas. El ${SECOND_FOCUS_KEYWORD} usa encriptación SSL 256-bit. Al ${THIRD_FOCUS_KEYWORD}, tu pago es seguro.`
  },
  {
    id: 'pay-2',
    category: 'pagos',
    q: `¿Necesito VPN para usar el ${SECOND_FOCUS_KEYWORD}?`,
    a: `No, el ${FOCUS_KEYWORD} funciona sin VPN. El ${SECOND_FOCUS_KEYWORD} es compatible con VPN si deseas más privacidad. Al ${THIRD_FOCUS_KEYWORD}, tú decides.`
  },
  {
    id: 'pay-3',
    category: 'pagos',
    q: `¿Cómo protege el ${FOCUS_KEYWORD} mis datos personales?`,
    a: `El ${FOCUS_KEYWORD} cumple con GDPR. El ${SECOND_FOCUS_KEYWORD} no guarda tu historial. Al ${THIRD_FOCUS_KEYWORD}, tus datos están seguros.`
  },
  {
    id: 'pay-4',
    category: 'pagos',
    q: `¿Qué hago si pierdo mis credenciales del ${SECOND_FOCUS_KEYWORD}?`,
    a: `Contacta con el soporte del ${FOCUS_KEYWORD} por WhatsApp o email. El ${SECOND_FOCUS_KEYWORD} te enviará tus datos en minutos. Al ${THIRD_FOCUS_KEYWORD}, todo es rápido.`
  },
  {
    id: 'pay-5',
    category: 'pagos',
    q: `¿Recibo factura al ${THIRD_FOCUS_KEYWORD}?`,
    a: `Sí, el ${FOCUS_KEYWORD} envía factura digital inmediata. El ${SECOND_FOCUS_KEYWORD} incluye comprobante de pago. Al ${THIRD_FOCUS_KEYWORD}, tienes todo documentado.`
  },
  {
    id: 'pay-6',
    category: 'pagos',
    q: `¿Hay costes ocultos en el ${FOCUS_KEYWORD}?`,
    a: `No, el ${FOCUS_KEYWORD} tiene precios transparentes. El ${SECOND_FOCUS_KEYWORD} no tiene cargos adicionales. Al ${THIRD_FOCUS_KEYWORD}, pagas exactamente lo que ves.`
  }
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'deportes' | 'dispositivos' | 'pagos'>('all');
  const [openAccordion, setOpenAccordion] = useState<string | null>('gen-1');

  const cleanPhone = (CONSTANTS.CONTACT.phone || '').replace(/[^0-9]/g, '');

  const filteredFaqs = useMemo(() => {
    return faqList.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = 
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => prev === id ? null : id);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-[#F1E8DB] overflow-x-hidden">
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        id="faq-schema-page"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(202,20,33,0.18),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#CA142108_1px,transparent_1px),linear-gradient(to_bottom,#CA142108_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:40px_40px] opacity-20" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#CA1421] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-lg">
            <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F1E8DB]" />
            <span className="text-[#F1E8DB] font-black text-[10px] sm:text-xs uppercase tracking-widest">
              {FOCUS_KEYWORD} - Preguntas Frecuentes
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#F1E8DB] tracking-tighter uppercase mb-4 sm:mb-6 leading-tight sm:leading-none">
            Preguntas <span className="text-[#CA1421]">Frecuentes</span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-[#F1E8DB]/80 font-bold max-w-2xl mx-auto leading-relaxed mb-6">
            Encuentra respuestas sobre el <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong>. 
            Todo sobre el <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong>, instalación y pagos. 
            <strong className="text-white/70"> {THIRD_FOCUS_KEYWORD}</strong> con total confianza.
          </p>

          {/* Country Flags Row */}
          <div className="w-full flex items-center justify-center mb-6">
            <div className="inline-flex items-center justify-center flex-wrap gap-2 sm:gap-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/60 border border-[#CA1421]/40 shadow-xl backdrop-blur-md">
              {flagItems.map((flag) => {
                const FlagComp = flag.component;
                return (
                  <div 
                    key={flag.code} 
                    className="flex items-center gap-1 sm:gap-1.5 shrink-0 group cursor-default"
                    title={flag.name}
                  >
                    <FlagComp />
                    <span className="text-[10px] sm:text-xs font-black uppercase text-[#F1E8DB] group-hover:text-[#FFC400] transition-colors">
                      {flag.code}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Search Input */}
          <div className="w-full max-w-xl relative mt-2 sm:mt-4">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#CA1421] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Buscar en las FAQ del ${FOCUS_KEYWORD}...`}
              className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 rounded-full bg-[#F1E8DB] text-[#1A1A1D] placeholder-[#1A1A1D]/60 text-xs sm:text-base font-bold border-2 sm:border-4 border-[#CA1421] focus:outline-none shadow-2xl transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1A1A1D]/60 hover:text-[#CA1421] p-1"
                aria-label="Limpiar búsqueda"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main FAQ Accordion Container */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {[
            { id: 'all', label: `Todas (${faqList.length})`, icon: HelpCircle },
            { id: 'general', label: 'General & Servicio', icon: Tv },
            { id: 'deportes', label: 'Deportes & Canales', icon: Zap },
            { id: 'dispositivos', label: 'Smart TV & Apps', icon: Smartphone },
            { id: 'pagos', label: 'Pagos & Seguridad', icon: CreditCard },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md ${
                  activeCategory === tab.id
                    ? 'bg-[#CA1421] text-[#F1E8DB] scale-105 ring-2 ring-[#CA1421]'
                    : 'bg-white/5 text-[#F1E8DB]/70 border border-white/10 hover:border-[#CA1421] hover:text-[#F1E8DB]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordions */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-3 sm:space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openAccordion === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#F1E8DB] border-2 sm:border-4 border-[#CA1421] rounded-xl sm:rounded-3xl overflow-hidden shadow-xl transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-black text-[#1A1A1D] text-sm sm:text-lg uppercase tracking-tight leading-snug">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1A1A1D] text-[#F1E8DB] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#CA1421]' : ''
                    }`}>
                      <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-[#1A1A1D]/85 text-xs sm:text-sm font-bold leading-relaxed border-t border-[#1A1A1D]/10">
                      <p className="pl-3 sm:pl-4 border-l-3 sm:border-l-4 border-[#CA1421] mt-2">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-[#F1E8DB] border-2 sm:border-4 border-[#CA1421] rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center text-[#1A1A1D] shadow-xl">
            <AlertCircle className="w-8 h-8 text-[#CA1421] mx-auto mb-2" />
            <p className="font-black text-base sm:text-lg uppercase tracking-tight mb-1">No se encontraron resultados</p>
            <p className="text-xs sm:text-sm font-bold text-[#1A1A1D]/70 mb-4">
              Prueba con otra palabra o contacta directamente con soporte.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="px-5 py-2 bg-[#CA1421] text-[#F1E8DB] font-black text-xs uppercase rounded-full hover:bg-[#DB4439] transition-colors"
            >
              Restablecer Filtros
            </button>
          </div>
        )}
      </section>

      {/* Device Matrix Section */}
      <section className="py-12 sm:py-16 bg-[#0a0a0d] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[#FFC400] font-bold text-[10px] sm:text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/10 mb-3 inline-block">
              {FOCUS_KEYWORD} - Dispositivos Compatibles
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#F1E8DB] uppercase tracking-tight mb-3">
              Dispositivos del <span className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</span>
            </h2>
            <p className="text-xs sm:text-base text-[#F1E8DB]/70 font-bold max-w-xl mx-auto">
              El <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> funciona en todos tus dispositivos. 
              Al <strong className="text-white/70">{THIRD_FOCUS_KEYWORD}</strong>, elige el que prefieras.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-[#1A1A1D] border-2 border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#CA1421] transition-colors">
              <div>
                <Smartphone className="w-7 h-7 sm:w-8 sm:h-8 text-[#CA1421] mb-3" />
                <h3 className="text-base sm:text-lg font-black text-[#F1E8DB] uppercase mb-1">Android & Firestick</h3>
                <p className="text-xs text-[#F1E8DB]/60 font-bold mb-4">Máxima estabilidad del {FOCUS_KEYWORD}.</p>
                <ul className="space-y-2 text-xs font-bold text-[#F1E8DB]/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" /> TiviMate para el {SECOND_FOCUS_KEYWORD}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" /> IPTV Smarters Pro
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" /> XCIPTV Player
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-black text-[#CA1421]">
                Vel. Mín.: 20 Mbps
              </div>
            </div>

            <div className="bg-[#1A1A1D] border-2 border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#CA1421] transition-colors">
              <div>
                <Tv className="w-7 h-7 sm:w-8 sm:h-8 text-[#CA1421] mb-3" />
                <h3 className="text-base sm:text-lg font-black text-[#F1E8DB] uppercase mb-1">Smart TV</h3>
                <p className="text-xs text-[#F1E8DB]/60 font-bold mb-4">El {FOCUS_KEYWORD} en tu televisión.</p>
                <ul className="space-y-2 text-xs font-bold text-[#F1E8DB]/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" /> IBO Player para el {SECOND_FOCUS_KEYWORD}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" /> Smart IPTV (SIPTV)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" /> SET IPTV Player
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-black text-[#CA1421]">
                Vel. Mín.: 25 Mbps
              </div>
            </div>

            <div className="bg-[#1A1A1D] border-2 border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#CA1421] transition-colors sm:col-span-2 lg:col-span-1">
              <div>
                <Cpu className="w-7 h-7 sm:w-8 sm:h-8 text-[#CA1421] mb-3" />
                <h3 className="text-base sm:text-lg font-black text-[#F1E8DB] uppercase mb-1">Apple TV & iOS</h3>
                <p className="text-xs text-[#F1E8DB]/60 font-bold mb-4">El {FOCUS_KEYWORD} en Apple.</p>
                <ul className="space-y-2 text-xs font-bold text-[#F1E8DB]/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" /> IPTVX para el {SECOND_FOCUS_KEYWORD}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" /> GSE Smart IPTV
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" /> Smarters Player Lite
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-black text-[#CA1421]">
                Vel. Mín.: 25 Mbps
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#F1E8DB] border-2 sm:border-4 border-[#CA1421] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-6 h-6 sm:w-7 sm:h-7 text-[#CA1421] shrink-0" />
            <h2 className="text-xl sm:text-3xl font-black text-[#1A1A1D] uppercase tracking-tight">
              Soluciones Rápidas del {FOCUS_KEYWORD}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-[#1A1A1D]">
            <div className="p-4 bg-black/5 rounded-2xl border border-black/10">
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#CA1421] text-[#F1E8DB] font-black text-xs flex items-center justify-center mb-2">1</span>
              <h3 className="font-black text-xs sm:text-sm uppercase mb-1">Reinicia tu Router</h3>
              <p className="text-xs font-bold text-[#1A1A1D]/80 leading-relaxed">
                El {FOCUS_KEYWORD} recomienda reiniciar el router para mejorar el {SECOND_FOCUS_KEYWORD}.
              </p>
            </div>

            <div className="p-4 bg-black/5 rounded-2xl border border-black/10">
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#CA1421] text-[#F1E8DB] font-black text-xs flex items-center justify-center mb-2">2</span>
              <h3 className="font-black text-xs sm:text-sm uppercase mb-1">Actualiza tu Lista</h3>
              <p className="text-xs font-bold text-[#1A1A1D]/80 leading-relaxed">
                En la app del {FOCUS_KEYWORD}, selecciona "Actualizar" para refrescar el {SECOND_FOCUS_KEYWORD}.
              </p>
            </div>

            <div className="p-4 bg-black/5 rounded-2xl border border-black/10">
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#CA1421] text-[#F1E8DB] font-black text-xs flex items-center justify-center mb-2">3</span>
              <h3 className="font-black text-xs sm:text-sm uppercase mb-1">Cambia el Formato</h3>
              <p className="text-xs font-bold text-[#1A1A1D]/80 leading-relaxed">
                En la app del {SECOND_FOCUS_KEYWORD}, cambia el stream de TS a HLS para mejor rendimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <div className="w-full flex justify-center items-center my-6 sm:my-10 px-4">
        <ShareButtons />
      </div>

      {/* Support CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 w-full">
        <div className="bg-[#F1E8DB] border-2 sm:border-4 border-[#CA1421] rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 bg-[#CA1421] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 shadow-md">
            <LifeBuoy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F1E8DB]" />
            <span className="text-[#F1E8DB] font-black text-[10px] sm:text-xs uppercase tracking-widest">
              {FOCUS_KEYWORD} - Soporte 24/7
            </span>
          </div>

          <h2 className="text-xl sm:text-4xl font-black text-[#1A1A1D] uppercase tracking-tight mb-3">
            ¿Tienes una pregunta sobre el {FOCUS_KEYWORD}?
          </h2>

          <p className="text-[#CA1421] font-bold text-xs sm:text-base max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            El <strong className="text-[#1A1A1D]">{FOCUS_KEYWORD}</strong> tiene soporte 24/7 para tu {SECOND_FOCUS_KEYWORD}. 
            <strong className="text-[#1A1A1D]"> {THIRD_FOCUS_KEYWORD}</strong> con total confianza.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <a
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hola ${BRAND_NAME}, tengo una pregunta sobre el ${SECOND_FOCUS_KEYWORD}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#CA1421] text-[#F1E8DB] font-black text-xs uppercase tracking-widest hover:bg-[#DB4439] transition-transform hover:scale-105 shadow-xl text-center"
            >
              Soporte WhatsApp
            </a>
            <Link
              href="/planes"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#1A1A1D] text-[#F1E8DB] font-black text-xs uppercase tracking-widest border-2 border-[#CA1421] hover:bg-white/5 transition-transform hover:scale-105 shadow-xl text-center"
            >
              {THIRD_FOCUS_KEYWORD} - Ver Planes
            </Link>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#CA1421] hover:text-[#F1E8DB] transition-colors font-black text-xs uppercase tracking-widest"
          >
            ← Volver al {FOCUS_KEYWORD}
          </Link>
        </div>
      </section>
    </div>
  );
}