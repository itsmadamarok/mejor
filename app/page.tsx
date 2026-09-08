// app/page.tsx - Versión SEO Optimizada con Distribución Exacta de Keywords
'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { 
  PlayCircle, 
  ShieldCheck, 
  Zap, 
  Download, 
  CreditCard, 
  CheckCircle2, 
  MonitorSmartphone, 
  Tv2, 
  Globe, 
  Cpu, 
  ArrowRight, 
  Award, 
  Lock, 
  ThumbsUp, 
  Users, 
  Server, 
  Film, 
  Trophy, 
  Calendar, 
  Database, 
  Tv, 
  Volume2, 
  Activity, 
  Medal, 
  Settings, 
  LifeBuoy,
  Shield,
  Star,
  Check,
  Heart,
  TrendingUp,
  Smartphone,
  Wifi
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './components/AnimatedSection';
import AnimatedCounter from './components/AnimatedCounter';
import { CONSTANTS } from '@/lib/seo';
import { blogPosts } from '@/lib/blog';
import TargetCountries from './components/TargetCountries';
import ShareButtons from './components/ShareButtons';

// ============ KEYWORDS FROM SEO.TS ============
const { FOCUS_KEYWORD, SECOND_FOCUS_KEYWORD, THIRD_FOCUS_KEYWORD, BRAND_NAME } = CONSTANTS;

// ============ DYNAMIC IMPORTS ============
const PricingSection = dynamic(() => import('./components/PricingSection'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#CA1421] border-t-transparent" />
    </div>
  ),
});

const MovieSlider = dynamic(() => import('./components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-[#1A1A1D] rounded-xl animate-pulse" />
      ))}
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('./components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});


const FAQ = dynamic(() => import('./components/FAQ'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#CA1421] border-t-transparent" />
    </div>
  ),
});

// ============ MAIN COMPONENT ============
export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#111113] text-white overflow-hidden">
      
      {/* ====== HERO SECTION - Focus Keyword #1 ====== */}
      <section className="relative px-6 pt-32 pb-24 overflow-hidden flex flex-col items-center justify-center text-center min-h-[85vh] w-full border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt={FOCUS_KEYWORD}
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center brightness-[0.22]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#CA1421]/10 via-[#111113]/10 to-[#111113]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFC400]/20 blur-[140px] pointer-events-none rounded-full" />
        </div>
        
        <FadeIn className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center my-auto w-full">
          <div className="inline-flex items-center gap-2 bg-[#CA1421] backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-[#FFC400]/40 shadow-xl">
            <Award className="w-4 h-4 text-[#FFC400]" />
            <span className="text-[#FFC400] font-black text-xs uppercase tracking-widest">
              {SECOND_FOCUS_KEYWORD} - Líder en Calidad Premium
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white mb-4 leading-[1.1]">
            <span className="text-[#CA1421] drop-shadow-md">{FOCUS_KEYWORD}</span>
            <br className="hidden md:block" />
            <span className="text-[#FFC400] drop-shadow-md">la Mejor Experiencia 4K</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl mx-auto mb-8 font-normal leading-relaxed px-2">
            Descubre por qué somos considerados el <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong>, con una selección imparable de más de 20.000 canales en vivo y un catálogo VOD superior a los 60.000 títulos. Disfrutar de la máxima calidad de imagen y sonido en tu <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> nunca fue tan sencillo, y <strong className="text-[#FFC400]">{THIRD_FOCUS_KEYWORD}</strong> con nosotros te garantiza el precio más competitivo del mercado. La plataforma que estabas buscando para revolucionar tu entretenimiento ya está aquí.
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <Link 
              href="/planes" 
              className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-[#CA1421] text-white font-black text-base hover:bg-[#b0111b] transition-all hover:scale-105 uppercase tracking-wider shadow-2xl border border-red-400/40"
            >
              {FOCUS_KEYWORD} - Ver Planes
            </Link>
            <Link 
              href="#channels" 
              className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-[#FFC400] text-[#111113] font-black text-base hover:bg-[#e6b000] transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shadow-2xl"
            >
              <PlayCircle className="w-5 h-5 shrink-0" /> Ver Canales {SECOND_FOCUS_KEYWORD}
            </Link>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-white/95 font-bold uppercase tracking-widest bg-gradient-to-r from-[#CA1421]/30 via-black/50 to-[#FFC400]/20 backdrop-blur-md px-8 py-4 rounded-3xl border border-white/10 shadow-xl">
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#FFC400]" /> {FOCUS_KEYWORD} en 4K Ultra HD</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#CA1421]" /> 99.9% Uptime</span>
            <span className="flex items-center gap-2"><Activity className="w-4 h-4 text-[#FFC400]" /> Estabilidad Máxima</span>
          </div>
        </FadeIn>
      </section>

      {/* ====== PARTNER SLIDER ====== */}
      <div className="py-6 bg-[#161619] border-b border-white/5">
        {isMounted ? <PartnerSlider /> : <div className="h-20 bg-transparent" />}
      </div>


      {/* ====== CONFIGURACIÓN - 3 PASOS ====== */}
      <section className="py-24 bg-gradient-to-b from-[#111113] via-[#151214] to-[#111113] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#CA1421]/10 blur-[160px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16">
               <span className="text-[#FFC400] bg-[#CA1421]/30 border border-[#CA1421]/50 px-4 py-1.5 rounded-full font-black uppercase tracking-widest text-xs mb-4 shadow">
                 {FOCUS_KEYWORD} - Configuración en Minutos
               </span>
               <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
                 El <span className="text-[#CA1421]">{FOCUS_KEYWORD}</span> que Buscabas en <br/><span className="text-[#FFC400]">3 Pasos Sencillos</span>
               </h2>
                <p className="text-white/75 text-base md:text-lg mt-4 font-normal max-w-2xl">
                  Disfrutar del <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> es más sencillo que nunca. Configura tu servicio en pocos pasos, <strong className="text-[#FFC400]">{THIRD_FOCUS_KEYWORD}</strong> y accede a todo el contenido en menos de 5 minutos con la plataforma más rápida y fiable del mercado.
                </p>
            </div>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Paso 1: Acción de compra */}
            <FadeInItem className="relative flex flex-col items-center text-center bg-[#18181C] p-8 rounded-3xl border border-white/10 hover:border-[#CA1421]/60 transition-all hover:-translate-y-1 shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-[#CA1421]/20 border border-[#CA1421]/40 flex items-center justify-center mb-6 relative">
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#FFC400] text-[#111113] font-black flex items-center justify-center text-xs shadow">1</span>
                <CreditCard className="w-8 h-8 text-[#FFC400]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">Elige tu Plan</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Selecciona la suscripción que mejor se adapte a ti. Decidirte a <strong className="text-[#FFC400]">{THIRD_FOCUS_KEYWORD}</strong> con nosotros es el primer paso para acceder a un entrenamiento premium sin limites.
              </p>
            </FadeInItem>

            {/* Paso 2: Configuración y servicio */}
            <FadeInItem className="relative flex flex-col items-center text-center bg-[#18181C] p-8 rounded-3xl border border-white/10 hover:border-[#CA1421]/60 transition-all hover:-translate-y-1 shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-[#CA1421]/20 border border-[#CA1421]/40 flex items-center justify-center mb-6 relative">
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#FFC400] text-[#111113] font-black flex items-center justify-center text-xs shadow">2</span>
                <Download className="w-8 h-8 text-[#FFC400]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">Recibe tus Accesos</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Obtén tus credenciales de forma inmediata tras el pago. Configura tu servicio de <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> en cuestión de segundos gracias a nuestra activación automática.
              </p>
            </FadeInItem>

            {/* Paso 3: Calidad y experiencia final */}
            <FadeInItem className="relative flex flex-col items-center text-center bg-[#18181C] p-8 rounded-3xl border border-white/10 hover:border-[#CA1421]/60 transition-all hover:-translate-y-1 shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-[#CA1421]/20 border border-[#CA1421]/40 flex items-center justify-center mb-6 relative">
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#FFC400] text-[#111113] font-black flex items-center justify-center text-xs shadow">3</span>
                <Tv2 className="w-8 h-8 text-[#FFC400]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">Empieza a Disfrutar</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Sácale el máximo partido al <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> con transmisión estable y sin cortes desde tu Smart TV, Firestick o dispositivo favorito.
              </p>
            </FadeInItem>
          </FadeInStagger>

        </div>
      </section>

      {/* ====== SALA DE ESTAR CON MÁS CONTENIDO ====== */}
      <section className="w-full bg-gradient-to-r from-[#141213] via-[#191517] to-[#141213] py-20 flex flex-col items-center justify-center border-y border-white/5 relative">
        <div className="w-full max-w-7xl px-4 text-center mb-8">
          <span className="mb-4 inline-flex rounded-full bg-[#CA1421] px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white shadow">
            {FOCUS_KEYWORD} - Experiencia Cinematográfica en Casa
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
            Lleva el <span className="text-[#CA1421]">{FOCUS_KEYWORD}</span> a tu <span className="text-[#FFC400]">Sala de Estar</span>
          </h2>
        </div>

        <div className="w-full py-6 flex justify-center items-center">
          <div className="w-full max-w-[1000px] px-6 aspect-[5/2] flex justify-center items-center">
            <Image
              src="/img/sofa.webp"
              alt={`${FOCUS_KEYWORD} - Disfruta en tu salón con la mejor calidad`}
              width={1100}
              height={440}
              loading="lazy"
              className="h-full w-full object-contain rounded-2xl shadow-2xl border border-white/5"
              sizes="(max-width: 1000px) 100vw, 1000px"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl px-4 text-center mt-8">
        <p className="text-base text-white/80 leading-relaxed font-normal">
          Experimenta la potencia del <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> gracias a nuestra infraestructura de última generación. Nuestro servicio de <strong className="text-[#FFC400]">{SECOND_FOCUS_KEYWORD}</strong> te ofrece una calidad de imagen y sonido incomparable para transformar tu salón en un cine privado. Anímate a <strong className="text-white/70">{THIRD_FOCUS_KEYWORD}</strong> hoy mismo y descubre por qué somos la opción preferida en miles de hogares.
        </p>
          <div className="w-full flex justify-center mt-6">
            <Link 
              href="/planes" 
              className="bg-[#FFC400] px-8 py-3.5 text-sm font-black uppercase tracking-widest text-[#111113] hover:bg-[#e6b000] transition-all rounded-full shadow-lg"
            >
              {THIRD_FOCUS_KEYWORD} - Ver Planes Disponibles
            </Link>
          </div>
        </div>
      </section>

      {/* ====== CATÁLOGO DE CANALES ====== */}
      <section id="channels" className="py-24 bg-[#111113] max-w-[100vw] overflow-hidden relative">
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-4 relative z-10 w-full">
          <div>
            <span className="text-[#FFC400] font-bold text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/10 mb-3 inline-block">
              {FOCUS_KEYWORD} - Catálogo Más Completo
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              <span className="text-[#CA1421]">{FOCUS_KEYWORD}</span> - <span className="text-[#FFC400]">20.000+ Canales en Vivo</span>
            </h2>
            <p className="text-white/70 font-normal text-base mt-2 max-w-2xl">
              El <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> te ofrece el catálogo más extenso de España. 
              <strong className="text-[#FFC400]"> {THIRD_FOCUS_KEYWORD}</strong> y accede a todo el contenido que imaginas, 
              desde deportes hasta series de estreno. Nuestro <strong className="text-white/70">{SECOND_FOCUS_KEYWORD}</strong> 
              incluye canales de todos los países y géneros.
            </p>
          </div>
        </FadeIn>
        {isMounted ? (
          <MovieSlider />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-[#18181C] rounded-xl animate-pulse" />
            ))}
          </div>
        )}
      </section>

      {/* ====== TARGET COUNTRIES ====== */}
      <section className="max-w-7xl mx-auto px-4 w-full py-10">
        <TargetCountries />
      </section>

      {/* ====== PRICING SECTION ====== */}
      <div className="min-h-[600px] bg-[#161619] border-y border-white/5 py-12" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>

      {/* ====== INSIGNIAS DE CONFIANZA CON MÁS CONTENIDO ====== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1b1517] via-[#18181C] to-[#161619] rounded-3xl p-8 md:p-12 border border-[#CA1421]/30 shadow-2xl">
          <FadeIn className="text-center mb-12">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">
              Por qué el <span className="text-[#CA1421]">{FOCUS_KEYWORD}</span> es tu Mejor Opción
            </h3>
            <p className="text-white/60 text-sm mt-2">
              <strong className="text-[#FFC400]">{THIRD_FOCUS_KEYWORD}</strong> con total confianza y seguridad.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <FadeInItem className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/30 border border-[#CA1421]/60 flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6 text-[#FFC400]" />
              </div>
              <div>
                <div className="font-bold text-white text-base uppercase tracking-tight">{THIRD_FOCUS_KEYWORD} Seguro</div>
                <p className="text-white/65 font-normal text-xs mt-1">
                  Transacciones 100% cifradas al <strong className="text-[#CA1421]">{THIRD_FOCUS_KEYWORD}</strong>. 
                  Tu seguridad es nuestra prioridad.
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/30 border border-[#CA1421]/60 flex items-center justify-center shrink-0">
                <ThumbsUp className="w-6 h-6 text-[#FFC400]" />
              </div>
              <div>
                <div className="font-bold text-white text-base uppercase tracking-tight">{FOCUS_KEYWORD} Garantizado</div>
                <p className="text-white/65 font-normal text-xs mt-1">
                  Rendimiento óptimo del <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> con garantía de satisfacción.
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/30 border border-[#CA1421]/60 flex items-center justify-center shrink-0">
                <LifeBuoy className="w-6 h-6 text-[#FFC400]" />
              </div>
              <div>
                <div className="font-bold text-white text-base uppercase tracking-tight">Soporte {SECOND_FOCUS_KEYWORD}</div>
                <p className="text-white/65 font-normal text-xs mt-1">
                  Asistencia técnica para tu <strong className="text-[#FFC400]">{SECOND_FOCUS_KEYWORD}</strong> 24/7.
                  Resolvemos cualquier duda.
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/30 border border-[#CA1421]/60 flex items-center justify-center shrink-0">
                <Medal className="w-6 h-6 text-[#FFC400]" />
              </div>
              <div>
                <div className="font-bold text-white text-base uppercase tracking-tight">Calidad {SECOND_FOCUS_KEYWORD}</div>
                <p className="text-white/65 font-normal text-xs mt-1">
                  El <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> con la mejor calidad de imagen y sonido del mercado.
                </p>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ====== ESTADÍSTICAS ====== */}
      <section className="py-20 bg-[#161619] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-2 uppercase tracking-tight">
              <span className="text-[#CA1421]">{FOCUS_KEYWORD}</span> en Cifras Reales
            </h3>
            <p className="text-white/60 text-sm font-normal max-w-xl mx-auto">
              Datos que respaldan al <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> como líder del sector.
            </p>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <FadeInItem className="bg-[#111113] p-6 rounded-2xl border border-white/5 shadow-lg">
              <span className="text-4xl md:text-5xl font-black text-[#FFC400] mb-2 block">
                <AnimatedCounter value={5} suffix="K+" />
              </span>
              <span className="text-xs text-white/70 font-bold uppercase tracking-widest mt-1 block">Usuarios del {FOCUS_KEYWORD}</span>
            </FadeInItem>

            <FadeInItem className="bg-[#111113] p-6 rounded-2xl border border-white/5 shadow-lg">
              <span className="text-4xl md:text-5xl font-black text-[#FFC400] mb-2 block">
                <AnimatedCounter value={20} suffix="K+" />
              </span>
              <span className="text-xs text-white/70 font-bold uppercase tracking-widest mt-1 block">Canales {SECOND_FOCUS_KEYWORD}</span>
            </FadeInItem>

            <FadeInItem className="bg-[#111113] p-6 rounded-2xl border border-white/5 shadow-lg">
              <span className="text-4xl md:text-5xl font-black text-[#FFC400] mb-2 block">
                <AnimatedCounter value={60} suffix="K+" />
              </span>
              <span className="text-xs text-white/70 font-bold uppercase tracking-widest mt-1 block">Títulos VOD para {THIRD_FOCUS_KEYWORD}</span>
            </FadeInItem>

            <FadeInItem className="bg-[#111113] p-6 rounded-2xl border border-white/5 shadow-lg">
              <span className="text-4xl md:text-5xl font-black text-[#FFC400] mb-2 block">
                <AnimatedCounter value={99.9} decimals={1} suffix="%" />
              </span>
              <span className="text-xs text-white/70 font-bold uppercase tracking-widest mt-1 block">Uptime del {SECOND_FOCUS_KEYWORD}</span>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>


      {/* ====== SECCIÓN DE BENEFICIOS CON MÁS CONTENIDO ====== */}
      <section className="py-24 bg-[#161619] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="text-[#FFC400] font-bold text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/10 mb-3 inline-block">
              Ventajas Competitivas del {FOCUS_KEYWORD}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              ¿Por Qué <span className="text-[#CA1421]">{THIRD_FOCUS_KEYWORD}</span> con Nosotros?
            </h2>
            <p className="text-white/70 font-normal text-base max-w-2xl mx-auto">
              Descubre las razones por las que somos el <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> líder en España. 
              <strong className="text-[#FFC400]"> {THIRD_FOCUS_KEYWORD}</strong> es la decisión inteligente para tu entretenimiento.
            </p>
          </FadeIn>

<FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    { 
      icon: Database, 
      title: "Catálogo Ilimitado", 
      desc: `Accede al ${FOCUS_KEYWORD} con más de 20.000 canales en vivo y una biblioteca VOD con 60.000+ títulos.` 
    },
    { 
      icon: Activity, 
      title: "Transmisión sin Cortes", 
      desc: `Disfruta de tu contenido en ${SECOND_FOCUS_KEYWORD} gracias a nuestra tecnología anti-buffer de última generación.` 
    },
    { 
      icon: Server, 
      title: "Infraestructura de Alta Velocidad", 
      desc: "Servidores premium ubicados estratégicamente en Europa y América para una estabilidad impecable." 
    },
    { 
      icon: Trophy, 
      title: "Deportes en Directo", 
      desc: `Decídete a ${THIRD_FOCUS_KEYWORD} para ver todas las competiciones: LaLiga, Champions, F1, UFC y más en alta definición.` 
    },
    { 
      icon: Calendar, 
      title: "Guía EPG Actualizada", 
      desc: "Consulta la programación en tiempo real de todos tus canales favoritos sin perderte ningún evento." 
    },
    { 
      icon: Users, 
      title: "Soporte Multidispositivo", 
      desc: "Conecta múltiples pantallas simultáneamente en tu Smart TV, Firestick o móvil para toda la familia." 
    }
  ].map((item, idx) => {
    const Icon = item.icon;
    return (
      <div key={idx} className="bg-[#111113] rounded-2xl p-8 border border-white/5 hover:border-[#CA1421]/50 transition-all group shadow-xl">
        <div className="w-12 h-12 rounded-xl bg-[#CA1421]/20 border border-[#CA1421]/40 flex items-center justify-center mb-6">
          <Icon className="w-6 h-6 text-[#FFC400]" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
        <p className="text-white/70 text-sm font-normal leading-relaxed">{item.desc}</p>
      </div>
    );
  })}
</FadeInStagger>


          <FadeIn className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-white/70 text-sm leading-relaxed">
              El <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> no solo es una opción, es la mejor inversión para tu entretenimiento. 
              Con nuestro, disfrutas de calidad premium sin pagar de más. 
              <strong className="text-white/70"> {THIRD_FOCUS_KEYWORD}</strong> hoy y únete a miles de usuarios satisfechos.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ====== CATEGORÍAS DE CANALES ====== */}
      <section className="py-24 bg-[#111113]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-[#FFC400] font-bold text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/10 mb-3 inline-block">
              {SECOND_FOCUS_KEYWORD} - Categorías
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              Canales del <span className="text-[#CA1421]">{FOCUS_KEYWORD}</span> por Categoría
            </h2>
            <p className="text-white/70 font-normal text-base max-w-2xl mx-auto">
              Organización intuitiva del <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> para encontrar lo que buscas al instante.
            </p>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { cat: "Deportes en Directo", channels: "Fútbol, Champions, F1, MotoGP, UFC, Boxeo", icon: Trophy },
              { cat: `Televisión de ${SECOND_FOCUS_KEYWORD}`, channels: "Movistar, La 1, Antena 3, Telecinco, La Sexta", icon: Tv },
              { cat: "Películas y Series VOD", channels: "Estrenos, plataformas streaming, cine clásico", icon: Film },
              { cat: "Contenido Infantil", channels: "Dibujos animados, canales familiares, educativos", icon: Shield },
              { cat: "Canales Internacionales", channels: "UK, Francia, Italia, Alemania, Portugal, Latam", icon: Globe },
              { cat: "Música y Conciertos", channels: "Canales musicales, emitidos en vivo y videoclips", icon: Volume2 },
              { cat: "Documentales y Cultura", channels: "Naturaleza, ciencia, historia, reportajes", icon: Globe },
              { cat: `Eventos PPV en ${SECOND_FOCUS_KEYWORD}`, channels: "Boxeo, lucha libre, torneos especiales", icon: Trophy }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-[#18181C] rounded-2xl p-5 border border-white/5 hover:border-[#FFC400]/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-[#CA1421]/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#FFC400]" />
                      </div>
                      <h3 className="font-bold text-white text-sm uppercase tracking-wide">{item.cat}</h3>
                    </div>
                    <p className="text-white/60 font-normal text-xs">{item.channels}</p>
                  </div>
                </div>
              );
            })}
          </FadeInStagger>


        </div>
      </section>

      {/* ====== BLOQUES DE CARACTERÍSTICAS CON MÁS CONTENIDO ====== */}
      <section className="bg-[#161619] border-t border-white/5 py-24">
        <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
          
      {/* Bloque 1 */}
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-1 overflow-hidden rounded-3xl bg-[#111113] p-3 border border-white/10 shadow-2xl">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-video lg:aspect-[5/4]">
            <Image
              src="/img/image-1.webp"
              alt={`${FOCUS_KEYWORD} - Calidad 4K Ultra HD`}
              width={800}
              height={600}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute left-4 top-4 rounded-full bg-black/70 backdrop-blur-md px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFC400] border border-white/10">
              Calidad 4K Ultra HD
            </div>
          </div>
        </div>
        
        <FadeIn className="order-2">
          <span className="mb-3 inline-flex rounded-full bg-[#CA1421]/20 border border-[#CA1421]/40 px-3 py-1 text-xs font-black uppercase tracking-widest text-[#FFC400]">
            Calidad de Imagen Superior
          </span>
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight mb-4">
            <span className="text-[#CA1421]">{FOCUS_KEYWORD}</span> en 4K Ultra HD
          </h3>
          <div className="space-y-4 text-white/70 text-base leading-relaxed">
            <p>
              Acceder al <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> te garantiza una experiencia visual inigualable con resolución 4K Ultra HD. Implementamos tecnología de compresión avanzada H.265/HEVC para ofrecer transmisiones impecables sin pérdida de nitidez.
            </p>
            <p>
              Al decidirte a <strong className="text-white/70">{THIRD_FOCUS_KEYWORD}</strong> con nosotros, obtienes colores vibrantes y máximo detalle en cada pantalla, transformando tu sala en una sala de cine privada.
            </p>
          </div>
          
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Tecnología de compresión H.265", 
              "Contenido en 4K y Full HD real", 
              "Actualización diaria de catálogo", 
              "Compatible con Smart TV y Firestick"
            ].map((item) => (
              <div key={item} className="rounded-xl bg-[#111113] border border-white/5 px-4 py-3 text-xs font-bold uppercase text-white/90 flex items-center gap-2">
                <Check className="w-4 h-4 text-[#FFC400] shrink-0" /> {item}
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <Link 
              href="/planes" 
              className="inline-flex items-center justify-center whitespace-nowrap bg-[#CA1421] px-8 py-3.5 text-sm font-black uppercase tracking-widest text-white hover:bg-[#b0111b] transition-all rounded-full shadow-lg"
            >
              {THIRD_FOCUS_KEYWORD} Ahora
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Bloque 2 */}
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <FadeIn className="order-2 lg:order-1">
          <span className="mb-3 inline-flex rounded-full bg-[#CA1421]/20 border border-[#CA1421]/40 px-3 py-1 text-xs font-black uppercase tracking-widest text-[#FFC400]">
            Deportes Premium
          </span>
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight mb-4">
            <span className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</span> sin Cortes para Deportes
          </h3>
          <div className="space-y-4 text-white/70 text-base leading-relaxed">
            <p>
              Nuestra infraestructura de <strong className="text-[#FFC400]">{SECOND_FOCUS_KEYWORD}</strong> está optimizada específicamente para retransmisiones deportivas en directo con la menor latencia posible.
            </p>
            <p>
              Disfruta de canales como DAZN, Movistar LaLiga, Eurosport y eventos PPV especiales. Una conexión ultraestable diseñada para que no te pierdas ni un solo momento decisivo del partido.
            </p>
          </div>
          
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Canales de fútbol, F1 y MotoGP", 
              "Eventos PPV y luchas en vivo", 
              "Baja latencia para deportes", 
              "Servidores dedicados de alta velocidad"
            ].map((item) => (
              <div key={item} className="rounded-xl bg-[#111113] border border-white/5 px-4 py-3 text-xs font-bold uppercase text-white/90 flex items-center gap-2">
                <Check className="w-4 h-4 text-[#FFC400] shrink-0" /> {item}
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <Link 
              href="/planes" 
              className="inline-flex items-center justify-center whitespace-nowrap bg-[#FFC400] px-8 py-3.5 text-sm font-black uppercase tracking-widest text-[#111113] hover:bg-[#e6b000] transition-all rounded-full shadow-lg"
            >
              {THIRD_FOCUS_KEYWORD} Deportes
            </Link>
          </div>
        </FadeIn>

        <div className="relative order-1 overflow-hidden rounded-3xl bg-[#111113] p-3 lg:order-2 border border-white/10 shadow-2xl">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-video lg:aspect-[5/4]">
            <Image
              src="/img/bg-1.webp"
              alt={`${SECOND_FOCUS_KEYWORD} - Deportes en directo sin cortes`}
              width={800}
              height={600}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute left-4 top-4 rounded-full bg-black/70 backdrop-blur-md px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFC400] border border-white/10">
              Deportes en Directo
            </div>
          </div>
        </div>
      </div>

        </div>
      </section>


{/* ====== TABLA COMPARATIVA ====== */}
<section className="py-24 relative bg-[#111113]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <FadeIn className="text-center mb-16">
      <span className="text-[#FFC400] font-bold text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/10 mb-3 inline-block">
        Análisis Comparativo
      </span>
      <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
        <span className="text-[#CA1421]">{FOCUS_KEYWORD}</span> vs Cable Tradicional
      </h2>
      <p className="text-white/70 text-base max-w-2xl mx-auto font-normal">
        Descubre por qué la televisión por protocolo de internet ofrece más contenido, mayor flexibilidad y un precio considerablemente más bajo. Decidirte a <strong className="text-[#FFC400]">{THIRD_FOCUS_KEYWORD}</strong> es la alternativa más inteligente.
      </p>
    </FadeIn>

    {/* Vista Escritorio */}
    <div className="hidden md:block overflow-x-auto">
      <div className="bg-[#161619] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="grid grid-cols-3 gap-0">
          <div className="p-6 border-b border-r border-white/10 bg-white/5">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Características</h3>
          </div>
          <div className="p-6 border-b border-r border-white/10 bg-[#CA1421]/20">
            <h3 className="text-lg font-bold text-[#FFC400] uppercase tracking-wider">{FOCUS_KEYWORD}</h3>
          </div>
          <div className="p-6 border-b border-white/10 bg-white/5">
            <h3 className="text-lg font-bold text-white/50 uppercase tracking-wider">Cable Tradicional</h3>
          </div>
          
          {[
            { feature: "Coste Mensual", us: "Desde 4,08 € / mes", cable: "60 € - 120 € al mes", highlight: true },
            { feature: "Contrato de Permanencia", us: "Sin contrato (Flexibilidad total)", cable: "12 a 24 meses obligatorios" },
            { feature: "Canales en Vivo", us: "+20.000 Canales", cable: "60 - 150 Canales", highlight: true },
            { feature: "Películas y Series VOD", us: "+60.000 Títulos incluidos", cable: "Limitado o pago por contenido" },
            { feature: "Calidad 4K y FHD", us: "Incluido de serie", cable: "Coste adicional elevado", usIcon: true },
            { feature: "Soporte Multi-Pantalla", us: "Hasta 3 dispositivos simultáneos", cable: "Pago extra por decodificador", usIcon: true },
            { feature: "Deportes y PPV", us: "Completamente incluido", cable: "Paquetes deportivos costosos", usIcon: true },
            { feature: "Disponibilidad Geográfica", us: "Acceso desde cualquier lugar", cable: "Restringido al domicilio", highlight: true }
          ].map((row, idx) => (
            <div key={idx} className="grid grid-cols-3 gap-0 contents">
              <div className={`p-5 border-r border-white/5 ${idx % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                <span className="text-white/80 font-medium text-sm">{row.feature}</span>
              </div>
              <div className={`p-5 border-r border-white/5 ${idx % 2 === 0 ? 'bg-white/[0.02]' : 'bg-white/[0.01]'}`}>
                {row.usIcon ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFC400]" />
                    <span className="text-[#FFC400] font-bold text-sm">{row.us}</span>
                  </div>
                ) : (
                  <span className={`${row.highlight ? 'text-[#FFC400] font-bold text-sm' : 'text-white/90 text-sm'}`}>{row.us}</span>
                )}
              </div>
              <div className={`p-5 ${idx % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                <span className="text-white/40 text-sm">{row.cable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Vista Móvil */}
    <div className="md:hidden space-y-4">
      {[
        { feature: "Coste Mensual", us: "Desde 4,08 € / mes", cable: "60 € - 120 €/mes" },
        { feature: "Contrato", us: "Sin permanencia", cable: "12-24 meses fijo" },
        { feature: "Canales en Vivo", us: "+20.000", cable: "60-150" },
        { feature: "Biblioteca VOD", us: "+60.000 títulos", cable: "Limitado" },
        { feature: "Streaming 4K", us: "Incluido", cable: "Raro / Costoso" },
        { feature: "Multi-Pantalla", us: "Hasta 3 pantallas", cable: "Coste extra" },
        { feature: "Deportes y PPV", us: "Incluido", cable: "Extra 15-30 €/mes" },
        { feature: "Movilidad", us: "Cualquier lugar", cable: "Solo hogar" }
      ].map((row, idx) => (
        <div key={idx} className="bg-[#161619] rounded-2xl border border-white/10 p-5 shadow-lg">
          <div className="text-center mb-3">
            <span className="text-white/60 text-xs font-bold uppercase tracking-wider">{row.feature}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-left">
              <div className="text-[#FFC400] font-bold text-sm">{row.us}</div>
              <div className="text-[#CA1421] text-[10px] font-bold uppercase">Nuestro Servicio</div>
            </div>
            <div className="text-right">
              <div className="text-white/40 line-through text-sm">{row.cable}</div>
              <div className="text-white/30 text-[10px] uppercase">Cable</div>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    <FadeIn className="text-center mt-8 max-w-3xl mx-auto">
      <p className="text-white/60 text-sm leading-relaxed">
        Contratar nuestro <strong className="text-[#FFC400]">{SECOND_FOCUS_KEYWORD}</strong> te permite ahorrar sustancialmente mes a mes mientras accedes a un catálogo de canales y contenidos enormemente superior al de las operadoras tradicionales.
      </p>
    </FadeIn>
  </div>
</section>


      {/* ====== SHARE BUTTONS ====== */}
      <section className="w-full max-w-4xl mx-auto px-4 my-6 flex justify-center items-center">
        <ShareButtons />
      </section>


{/* ====== TESTIMONIOS ====== */}
<section className="py-24 bg-gradient-to-b from-[#161619] via-[#1a1417] to-[#161619] border-y border-white/5 relative">
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#CA1421]/10 blur-[130px] pointer-events-none rounded-full" />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <FadeIn className="text-center mb-16">
      <span className="text-[#FFC400] font-bold text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/10 mb-3 inline-block">
        Opiniones Reales
      </span>
      <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
        Lo que dicen nuestros <span className="text-[#CA1421]">Clientes</span>
      </h2>
      <p className="text-white/70 text-base font-normal max-w-2xl mx-auto">
        Descubre las valoraciones de quienes se decidieron a <strong className="text-[#FFC400]">{THIRD_FOCUS_KEYWORD}</strong> con nosotros y disfrutan del servicio en su día a día.
      </p>
    </FadeIn>
    
    <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { 
          name: "David García", 
          location: "Madrid, España",
          text: `Sin duda el ${FOCUS_KEYWORD} que he probado hasta la fecha. Estabilidad perfecta en eventos deportivos, calidad 4K constante y la atención al cliente responde al momento. 100% recomendable.`, 
          avatar: "/img/01.jpg",
          rating: 5,
          tag: "Cliente verificado"
        },
        { 
          name: "Lucía Martínez", 
          location: "Barcelona, España",
          text: `Decidirme a ${THIRD_FOCUS_KEYWORD} fue la mejor elección. La instalación tomó menos de 5 minutos en mi Smart TV y el catálogo de películas es gigantesco. Toda mi familia está encantada.`, 
          avatar: "/img/02.jpg",
          rating: 5,
          tag: "Cliente verificado"
        },
        { 
          name: "Elena Romero", 
          location: "Valencia, España",
          text: `Un servicio de ${SECOND_FOCUS_KEYWORD} con calidad realmente premium. Cero cortes en los partidos del fin de semana y la guía de programación funciona de maravilla en Firestick.`, 
          avatar: "/img/03.jpg",
          rating: 5,
          tag: "Cliente verificado"
        }
      ].map((testimonial, idx) => (
        <div key={idx} className="bg-[#111113] rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300">
          <div>
            <div className="flex items-center gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FFC400] text-[#FFC400]" />
              ))}
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-8 font-normal">"{testimonial.text}"</p>
          </div>

          <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#CA1421] shrink-0 shadow">
              <Image 
                src={testimonial.avatar} 
                alt={testimonial.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <div className="font-bold text-white text-sm tracking-tight">{testimonial.name}</div>
              <div className="text-white/55 text-xs font-normal">{testimonial.location} • <span className="text-[#FFC400] font-bold">{testimonial.tag}</span></div>
            </div>
          </div>
        </div>
      ))}
    </FadeInStagger>
  </div>
</section>



      {/* ====== DISPOSITIVOS COMPATIBLES ====== */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full relative">
        <FadeIn>
          <span className="text-[#FFC400] font-bold text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/10 mb-3 inline-block">
            {SECOND_FOCUS_KEYWORD} - Compatibilidad Total
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            <span className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</span> en Todos tus Dispositivos
          </h2>
          <p className="text-white/70 text-base max-w-2xl mx-auto mb-16 font-normal">
            El <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> es compatible con todos tus dispositivos favoritos. 
            <strong className="text-[#FFC400]"> {THIRD_FOCUS_KEYWORD}</strong> y disfruta donde quieras.
          </p>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
          {[
            { tag: "Smart TV (Samsung/LG)", icon: Tv2 },
            { tag: "Android TV & Box", icon: Cpu },
            { tag: "Apple TV & iOS", icon: MonitorSmartphone },
            { tag: "Amazon Firestick", icon: Zap },
            { tag: "PC Windows & Mac", icon: PlayCircle },
            { tag: "MAG & Formuler", icon: ShieldCheck },
          ].map((device) => {
            const Icon = device.icon;
            return (
              <div key={device.tag} className="bg-[#161619] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-[#CA1421]/60 transition-all shadow-lg group">
                <Icon className="w-8 h-8 text-white/40 group-hover:text-[#FFC400] transition-colors" />
                <span className="text-xs font-bold text-white/80 group-hover:text-white text-center">{device.tag}</span>
              </div>
            );
          })}
        </FadeInStagger>
        
        <FadeIn className="mt-8 max-w-2xl mx-auto">
          <p className="text-white/60 text-sm leading-relaxed">
            El <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> se adapta a tu estilo de vida. 
            Con nuestro <strong className="text-[#FFC400]">{SECOND_FOCUS_KEYWORD}</strong>, disfrutas del mejor contenido 
            en cualquier dispositivo, en cualquier momento. <strong className="text-white/70">{THIRD_FOCUS_KEYWORD}</strong> y conéctate hoy.
          </p>
        </FadeIn>
      </section>

      {/* ====== FAQ ====== */}
      <div className="min-h-[400px] bg-[#161619] border-t border-white/5 py-12">
        {isMounted ? <FAQ /> : <div className="h-[400px] bg-transparent" />}
      </div>



{/* ====== BLOG OPTIMIZADO ====== */}
<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
  <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 relative z-10">
    <div>
      <span className="text-[#FFC400] font-bold text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/10 mb-3 inline-block">
        Centro de Conocimiento
      </span>
      <h2 className="text-3xl md:text-5xl font-black text-white mb-2 uppercase tracking-tight">
        Guías y <span className="text-[#CA1421]">Tutoriales</span>
      </h2>
      <p className="text-white/70 text-base font-normal max-w-xl">
        Aprende a configurar tu dispositivo, optimizar la conexión y aprovechar al máximo todo nuestro catálogo de contenidos.
      </p>
    </div>
    
    <div className="flex shrink-0">
      <Link 
        href="/soporte" 
        className="whitespace-nowrap px-6 py-3 rounded-full border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-colors flex items-center gap-2 group"
      >
        <span>Ver todos los artículos</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FFC400]" />
      </Link>
    </div>
  </FadeIn>
  
  <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
    {blogPosts.slice(0, 3).map((post) => (
      <div key={post.id} className="group cursor-pointer">
        <Link href={`/soporte/${post.slug}`} className="block">
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-5 bg-[#161619] border border-white/10 shadow-lg group-hover:border-[#CA1421]/60 transition-colors duration-300">
            <Image 
              src={post.image} 
              alt={post.title} 
              width={800} 
              height={450} 
              loading="lazy" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              sizes="(max-width: 768px) 100vw, 33vw" 
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 bg-[#CA1421] text-white text-[10px] font-black uppercase tracking-widest rounded-md inline-block">
                {post.category || "Tutorial"}
              </span>
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#FFC400] transition-colors tracking-tight line-clamp-2 uppercase">
            {post.title}
          </h3>
          <p className="text-white/60 text-xs md:text-sm mb-4 line-clamp-2 leading-relaxed font-normal">
            {post.excerpt}
          </p>
          <span className="inline-flex items-center gap-2 text-xs font-bold text-[#FFC400] uppercase tracking-widest group-hover:gap-3 transition-all">
            Leer artículo completo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>
    ))}
  </FadeInStagger>
</section>

        
{/* ====== CTA FINAL OPTIMIZADO ====== */}
<section className="relative overflow-hidden py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#161619] border-t border-white/5">
  <div className="relative z-10 mx-auto max-w-7xl">
    <div className="relative overflow-hidden rounded-[2.5rem] border border-[#CA1421]/40 bg-gradient-to-br from-[#181315] via-[#111113] to-[#151214] shadow-2xl px-6 py-14 text-center sm:px-10 sm:py-16 md:px-14 md:py-20 lg:px-20 lg:py-24">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFC400]/10 blur-[130px] pointer-events-none rounded-full" />
      <Image
        src="/img/bg-2.webp"
        alt="Activación inmediata de televisión en 5 minutos"
        width={1200}
        height={500}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20 brightness-[0.3]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <FadeIn className="relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFC400]/40 bg-[#CA1421] px-4 py-2 backdrop-blur-md shadow">
          <span className="text-xs font-black uppercase tracking-widest text-[#FFC400]">
            Activación en 5 Minutos
          </span>
        </div>
        
        <h2 className="mx-auto max-w-4xl text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white leading-tight mb-6">
          <span className="text-[#CA1421] drop-shadow">{FOCUS_KEYWORD}</span> - <span className="text-[#FFC400]">Calidad 4K Premium</span>
        </h2>
        
        <div className="mx-auto max-w-2xl space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
          <p>
            El servicio de <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> que estabas buscando para revolucionar tu entretenimiento en casa. Disfruta de miles de canales en vivo y contenidos bajo demanda sin cortes.
          </p>
          <p>
            Al <strong className="text-[#FFC400]">{THIRD_FOCUS_KEYWORD}</strong> con nosotros obtienes acceso instantáneo, soporte técnico continuo y la máxima estabilidad garantizada.
          </p>
        </div>
        
        {/* Métricas limpias de variables excesivas */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {[
            ['20K+', 'Canales en Vivo'],
            ['4K Ultra', 'Calidad HD & UHD'],
            ['99.9%', 'Disponibilidad'],
            ['24/7', 'Soporte Técnico'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-[#161619] p-4 backdrop-blur-md shadow-lg">
              <div className="text-xl sm:text-2xl font-black text-[#FFC400]">{value}</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/70">{label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          <Link 
            href="/planes" 
            className="w-full sm:w-auto text-center whitespace-nowrap rounded-full bg-[#CA1421] px-8 py-4 text-sm font-black uppercase tracking-widest text-white hover:bg-[#b0111b] transition-all shadow-2xl border border-red-400/30"
          >
            {THIRD_FOCUS_KEYWORD} - Ver Planes
          </Link>
          <Link 
            href="/instalacion" 
            className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all shadow-lg"
          >
            <Settings className="h-4 w-4 text-[#FFC400] shrink-0" /> Guía de Instalación
          </Link>
        </div>
        
        <p className="mt-8 text-xs font-medium text-white/60">
          Pago Seguro • Sin Compromiso de Permanencia • Activación Inmediata
        </p>
      </FadeIn>
    </div>
  </div>
</section>


    </div>
  );
}