// app/planes/page.tsx - Optimized Pricing & Packages Page
'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  CreditCard, 
  Award, 
  Globe, 
  Server, 
  Trophy, 
  Tv, 
  Film, 
  MonitorPlay, 
  Wifi, 
  Calendar, 
  Lock, 
  ThumbsUp, 
  Sparkles, 
  Headphones, 
  Check,
  Star,
  ArrowRight
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import ShareButtons from '../components/ShareButtons';
import { CONSTANTS } from '@/lib/seo';

// ============ KEYWORDS FROM SEO.TS ============
const { FOCUS_KEYWORD, SECOND_FOCUS_KEYWORD, THIRD_FOCUS_KEYWORD, BRAND_NAME } = CONSTANTS;

// Dynamic import for PricingSection
const PricingSection = dynamic(() => import('../components/PricingSection'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#CA1421] border-t-transparent" />
    </div>
  ),
});

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

// ============ ACCORDION FAQ ITEM ============
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      className={`w-full cursor-pointer bg-[#161619] border ${isOpen ? 'border-[#CA1421]' : 'border-white/10'} rounded-2xl p-6 transition-all duration-300 group shadow-lg`}
      role="button"
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-center gap-4">
        <h3 className={`text-base md:text-lg font-bold uppercase tracking-tight transition-colors ${isOpen ? 'text-[#FFC400]' : 'text-white group-hover:text-[#FFC400]'} flex items-center gap-3`}>
          <span className="text-[#CA1421] font-black text-xl">Q.</span> 
          {question}
        </h3>
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#FFC400]' : 'text-white/40 group-hover:text-white'}`} />
      </div>
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-white/5 text-white/75 text-sm font-normal leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

// ============ MAIN PAGE COMPONENT ============
export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#111113] text-white overflow-hidden">
      
      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-2.webp"
            alt={`${FOCUS_KEYWORD} - Planes y Precios`}
            fill
            priority
            className="object-cover object-center brightness-[0.2]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#CA1421]/10 via-[#111113]/40 to-[#111113]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#CA1421]/20 blur-[150px] pointer-events-none rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          <FadeInStagger className="flex flex-col items-center justify-center text-center">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-[#CA1421] backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-[#FFC400]/40 shadow-xl">
                <Sparkles className="w-4 h-4 text-[#FFC400]" />
                <span className="text-[#FFC400] font-black text-xs uppercase tracking-widest">
                  {FOCUS_KEYWORD} - Tarifas y Suscripciones
                </span>
              </div>
            </FadeInItem>
            
            <FadeInItem>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase mb-6 leading-none">
                Planes de <span className="text-[#CA1421]">{BRAND_NAME}</span> <br />
                <span className="text-[#FFC400]">Precios y Ofertas</span>
              </h1>
            </FadeInItem>

            <FadeInItem>
              <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed px-2 font-normal mb-8">
                Descubre por qué somos el <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> con la mejor relación calidad-precio. Nuestro servicio de <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> te ofrece acceso ilimitado en todos tus dispositivos. Decidirte a <strong className="text-[#FFC400]">{THIRD_FOCUS_KEYWORD}</strong> con nosotros te garantiza estabilidad total y activación en minutos.
              </p>
            </FadeInItem>

            {/* BANDERAS DE COBERTRURA */}
            <FadeInItem>
              <div className="w-full flex items-center justify-center mb-8">
                <div className="inline-flex items-center justify-center flex-nowrap gap-3 sm:gap-5 px-5 py-2.5 rounded-full bg-[#161619]/80 border border-white/10 shadow-xl backdrop-blur-md">
                  {flagItems.map((flag) => {
                    const FlagComp = flag.component;
                    return (
                      <div 
                        key={flag.code} 
                        className="flex items-center gap-1.5 shrink-0 group cursor-default"
                        title={flag.name}
                      >
                        <FlagComp />
                        <span className="text-[11px] sm:text-xs font-black uppercase text-white/80 group-hover:text-[#FFC400] transition-colors">
                          {flag.code}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-wrap justify-center gap-6 text-xs md:text-sm font-bold uppercase tracking-widest bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 text-white/90">
                <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-[#FFC400]" /> Sin Permanencia</span>
                <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#CA1421]" /> Activación Inmediata</span>
                <span className="flex items-center gap-2"><ThumbsUp className="w-4 h-4 text-[#FFC400]" /> Soporte 24/7</span>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ====== PRICING SECTION COMPONENT ====== */}
      <section className="w-full relative z-20 bg-[#161619] py-16 border-b border-white/5" id="pricing-section">
        <PricingSection />
      </section>

      {/* ====== INCLUDED FEATURES GRID ====== */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="text-center mb-16">
          <span className="text-[#FFC400] font-bold text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/10 mb-3 inline-block">
            {FOCUS_KEYWORD} - Características
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Todo Incluido en <span className="text-[#CA1421]">Cada Plan</span>
          </h2>
          <p className="text-white/70 text-base max-w-2xl mx-auto font-normal">
            Todos los planes del <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> vienen equipados con nuestras características premium. <strong className="text-[#CA1421]">{THIRD_FOCUS_KEYWORD}</strong> hoy y disfruta de transmisión sin límites.
          </p>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Tv, title: "20.000+ Canales", desc: `Deportes, cine, noticias y canales internacionales en directo con ${SECOND_FOCUS_KEYWORD}.` },
            { icon: Film, title: "60.000+ VOD", desc: `Catálogo masivo de películas y series actualizadas a diario en tu ${FOCUS_KEYWORD}.` },
            { icon: MonitorPlay, title: "Calidad 4K & FHD", desc: `Emisión en ultra alta definición con alto bitrate para una imagen cristalina.` },
            { icon: Wifi, title: "Tecnología Anti-Freeze", desc: `Servidores dedicados con balanceo de carga para evitar cualquier buffering.` },
            { icon: Calendar, title: "Guía EPG 7 Días", desc: `Programación completa e interactiva para no perderte ningún evento.` },
            { icon: Trophy, title: "Eventos PPV Incluidos", desc: `UFC, Boxeo, F1 y Moto GP incluidos sin coste adicional al ${THIRD_FOCUS_KEYWORD}.` },
            { icon: Globe, title: "Servidores Europeos", desc: `Infraestructura de alta velocidad con baja latencia en toda Europa.` },
            { icon: Server, title: "99.9% Uptime", desc: `Disponibilidad continuada garantizada en nuestro servicio de ${SECOND_FOCUS_KEYWORD}.` },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <FadeInItem key={idx} className="bg-[#18181C] border border-white/10 rounded-2xl p-6 hover:border-[#CA1421]/60 shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#CA1421]/20 border border-[#CA1421]/40 flex items-center justify-center mb-4 group-hover:border-[#FFC400] transition-colors">
                  <Icon className="w-6 h-6 text-[#FFC400]" />
                </div>
                <h3 className="font-bold text-white uppercase tracking-wide text-base mb-2">{feature.title}</h3>
                <p className="text-white/60 text-xs font-normal leading-relaxed">{feature.desc}</p>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </section>

      {/* ====== COMPARISON TABLE ====== */}
      <section className="py-24 bg-[#161619] border-y border-white/5 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-[#FFC400] font-bold text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/10 mb-3 inline-block">
              {FOCUS_KEYWORD} - Tabla Comparativa
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              Compara los <span className="text-[#CA1421]">Planes {BRAND_NAME}</span>
            </h2>
            <p className="text-white/70 text-base font-normal max-w-2xl mx-auto">
              Encuentra la opción que mejor se adapte a tus necesidades para disfrutar del mejor <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong>.
            </p>
          </FadeIn>

          <div className="overflow-x-auto bg-[#111113] border border-white/10 rounded-3xl p-4 md:p-6 shadow-2xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white font-bold uppercase tracking-wider text-sm md:text-base">Característica</th>
                  <th className="text-center p-4 text-[#FFC400] font-bold uppercase tracking-wider text-sm md:text-base">3 Meses</th>
                  <th className="text-center p-4 text-[#CA1421] font-black uppercase tracking-wider text-sm md:text-base bg-[#CA1421]/10 rounded-t-xl">12 Meses (VIP)</th>
                  <th className="text-center p-4 text-[#FFC400] font-bold uppercase tracking-wider text-sm md:text-base">6 Meses</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { feature: "Canales en Vivo", basic: "20.000+", pro: "20.000+ VIP", premium: "20.000+" },
                  { feature: "VOD Películas & Series", basic: "60.000+", pro: "60.000+ (Diario)", premium: "60.000+" },
                  { feature: "Streaming 4K & 60FPS", basic: "Sí", pro: "Sí (Ultra Bitrate)", premium: "Sí" },
                  { feature: "Deportes & PPV", basic: "Incluido", pro: "Todos PPV + VIP", premium: "Incluido" },
                  { feature: "EPG & Catch-Up", basic: "EPG Estándar", pro: "7 Días Catch-Up", premium: "EPG Completa" },
                  { feature: "Anti-Freeze", basic: "Estándar", pro: "VIP Prioridad", premium: "Avanzado" },
                  { feature: "VPN Compatible", basic: "Sí", pro: "100% Compatible", premium: "Sí" },
                  { feature: "Pantallas Simultáneas", basic: "1 o 2", pro: "1, 2 o 3", premium: "1 o 2" },
                  { feature: "Soporte Técnico", basic: "WhatsApp", pro: "24/7 VIP Directo", premium: "Prioritario" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-white/90 font-medium text-xs md:text-sm uppercase">{row.feature}</td>
                    <td className="p-4 text-center text-white/70 font-normal text-xs md:text-sm">{row.basic}</td>
                    <td className="p-4 text-center text-[#FFC400] font-bold text-xs md:text-sm bg-[#CA1421]/5">{row.pro}</td>
                    <td className="p-4 text-center text-white/70 font-normal text-xs md:text-sm">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ====== TRUST BADGES ====== */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="text-center mb-16">
          <span className="text-[#FFC400] font-bold text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/10 mb-3 inline-block">
            {FOCUS_KEYWORD} - Garantía y Confianza
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            ¿Por Qué Elegir <span className="text-[#CA1421]">{BRAND_NAME}</span>?
          </h2>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: `${THIRD_FOCUS_KEYWORD} Seguro`, desc: "Procesamiento de pagos 100% encriptado y seguro." },
            { icon: Zap, title: "Activación Instantánea", desc: "Entrega automática de accesos tras completar el pedido." },
            { icon: CreditCard, title: "Garantía de Satisfacción", desc: "Soporte dedicado para asegurar un servicio impecable." },
            { icon: Headphones, title: "Asistencia 24/7", desc: "Atención personalizada para resolver cualquier duda." },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeInItem key={idx} className="flex flex-col items-center text-center p-6 bg-[#161619] border border-white/10 rounded-2xl shadow-xl hover:border-[#CA1421]/60 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-[#CA1421]/20 border border-[#CA1421]/40 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#FFC400]" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
                <p className="text-white/60 text-xs font-normal leading-relaxed">{item.desc}</p>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </section>

      {/* ====== FAQ SECTION ====== */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn className="text-center mb-12">
          <span className="text-[#FFC400] font-bold text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/10 mb-3 inline-block">
            {FOCUS_KEYWORD} - Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Dudas sobre nuestros <span className="text-[#CA1421]">Planes</span>
          </h2>
        </FadeIn>
        
      <FadeInStagger className="space-y-4">
        <FAQItem 
          question={`¿Qué métodos de pago acepta ${BRAND_NAME} y cuán seguro es el proceso?`} 
          answer={`En ${BRAND_NAME} ofrecemos múltiples alternativas de pago adaptadas a la máxima comodidad y privacidad de nuestros usuarios en España y Latinoamérica. Aceptamos tarjetas de crédito y débito (Visa, Mastercard, Maestro), Bizum, transferencias bancarias directas, PayPal y las principales criptomonedas (Bitcoin, USDT). Toda la transacción al ${THIRD_FOCUS_KEYWORD} se realiza mediante pasarelas con encriptación de seguridad SSL de 256 bits, garantizando que tus datos financieros y personales permanezcan 100% protegidos e inaccesibles para terceros.`}
        />

        <FAQItem 
          question={`¿Cómo funciona la activación del ${FOCUS_KEYWORD} tras realizar la compra?`} 
          answer={`La activación de tu suscripción es prácticamente instantánea. Una vez completado el proceso para ${THIRD_FOCUS_KEYWORD}, recibirás un correo electrónico automático y un mensaje prioritario por WhatsApp con tus credenciales de acceso privadas (URL de portal, usuario, contraseña y enlace M3U/Xtream Codes API). Nuestro equipo de soporte técnico estará disponible para ayudarte paso a paso en la instalación y configuración en tu dispositivo en menos de 5 minutos.`}
        />

        <FAQItem 
          question={`¿Qué dispositivos y aplicaciones son compatibles con la lista ${SECOND_FOCUS_KEYWORD}?`} 
          answer={`Nuestro servicio de ${SECOND_FOCUS_KEYWORD} es compatible con prácticamente cualquier dispositivo conectado a internet. Puedes disfrutarlo en Smart TVs (Samsung Tizen, LG WebOS, Android TV, Google TV), dispositivos de streaming (Amazon Fire TV Stick, Chromecast, Xiaomi Mi Box, Apple TV), decodificadores MAG y Formuler, Smartphones y Tablets (iOS y Android), así como ordenadores (Windows y Mac). Es plenamente compatible con las aplicaciones más populares del mercado como IBO Player, IPTV Smarters Pro, Tivimate, XCIPTV, GSE Smart IPTV y SSIPTV.`}
        />

        <FAQItem 
          question={`¿Necesito una velocidad de internet muy alta o usar VPN en España para ver el ${FOCUS_KEYWORD}?`} 
          answer={`Para disfrutar de contenido en calidad HD y FHD es suficiente con una conexión estable de al menos 15-20 Mbps. Para emisiones en 4K Ultra HD recomendamos contar con 30 Mbps o más. Gracias a nuestros servidores de alta velocidad equipados con tecnología Anti-Freeze y enrutamiento inteligente, el servicio funciona sin cortes con los principales operadores de España (Movistar, Vodafone, Orange, Digi, MásMóvil). El uso de VPN no es estrictamente obligatorio, pero nuestro ${FOCUS_KEYWORD} es 100% compatible si prefieres navegar con un nivel extra de privacidad.`}
        />

        <FAQItem 
          question={`¿Puedo usar mi cuenta de ${SECOND_FOCUS_KEYWORD} en varios dispositivos al mismo tiempo?`} 
          answer={`Puedes instalar y configurar tus datos de acceso en todos los dispositivos que desees (tu Smart TV del salón, el Fire Stick del dormitorio o tu smartphone móvil). Sin embargo, el número de reproducciones en directo simultáneas dependerá de la cantidad de conexiones que selecciones al ${THIRD_FOCUS_KEYWORD}. Disponemos de opciones de 1, 2 y 3 conexiones simultáneas (Multi-Room) ideales para compartir el servicio con miembros de tu familia en diferentes estancias del hogar.`}
        />

        <FAQItem 
          question={`¿Existe compromiso de permanencia o cobros recurrentes al ${THIRD_FOCUS_KEYWORD}?`} 
          answer={`No, en ${BRAND_NAME} no existe ningún tipo de contrato de permanencia ni cobros automáticos recurrentes. Todos los planes de nuestro ${FOCUS_KEYWORD} son 100% prepagados por el período seleccionado (1, 3, 6 o 12 meses). Cuando tu suscripción esté próxima a vencer, te enviaremos un aviso recordatorio y tú decidirás libremente si deseas renovar el servicio. Si eliges no renovar, la cuenta simplemente caducará sin comisiones ocultas ni penalizaciones.`}
        />

        <FAQItem 
          question={`¿Puedo cambiar o ampliar mi plan del ${SECOND_FOCUS_KEYWORD} más adelante?`} 
          answer={`¡Por supuesto! Puedes actualizar tu plan de ${SECOND_FOCUS_KEYWORD} en cualquier momento. Si has contratado una suscripción individual y deseas ampliarla a más meses o añadir pantallas simultáneas adicionales, solo tienes que contactar a nuestro equipo de asistencia por WhatsApp. Calcularemos la diferencia de forma justa y actualizaremos tu cuenta al instante sin perder tu configuración previa.`}
        />

        <FAQItem 
          question={`¿Qué tipo de contenido incluye la guía de canales y la biblioteca VOD del ${FOCUS_KEYWORD}?`} 
          answer={`Nuestra plataforma incluye más de 20.000 canales de televisión en directo de todo el mundo, con un enfoque especial en España, Europa y Latinoamérica. Tendrás acceso a todos los eventos deportivos en vivo (fútbol de primera división, Champions League, baloncesto, F1, Moto GP, UFC), canales de cine, series, documentales e infantiles. Además, la biblioteca VOD cuenta con más de 60.000 películas y series actualizadas semanalmente, con opciones multilingüe y subtítulos en castellano.`}
        />

        <FAQItem 
          question={`¿Qué garantía tengo si el servicio de ${SECOND_FOCUS_KEYWORD} no funciona correctamente?`} 
          answer={`Ofrecemos una garantía de satisfacción garantizada de 7 días en todos nuestros planes de ${SECOND_FOCUS_KEYWORD}. Si sufres cualquier problema técnico insalvable o el servicio no cumple con tus expectativas de calidad y estabilidad tras ser guiado por nuestro equipo de soporte técnico, te reembolsaremos el importe íntegro de tu pago sin complicaciones.`}
        />
      </FadeInStagger>


      </section>

      {/* ====== SHARE BUTTONS ====== */}
      <div className="w-full flex justify-center items-center my-8">
        <ShareButtons />
      </div>

      {/* ====== BOTTOM CTA ====== */}
      <section className="py-20 bg-[#161619] border-t border-white/5 w-full">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <span className="text-[#FFC400] font-bold text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/10 mb-3 inline-block">
              {FOCUS_KEYWORD} - Comienza Hoy
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              ¿Listo para <span className="text-[#CA1421]">{THIRD_FOCUS_KEYWORD}</span>?
            </h2>
            <p className="text-white/70 text-base font-normal mb-8 max-w-2xl mx-auto">
              Únete a miles de clientes satisfechos que disfrutan del <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> líder en calidad y estabilidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
              <Link
                href="#pricing-section"
                className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-[#CA1421] text-white font-black uppercase tracking-wider text-sm transition-transform hover:scale-105 shadow-xl border border-red-400/30"
              >
                {THIRD_FOCUS_KEYWORD} - Ver Planes
              </Link>
              <Link
                href="/instalacion"
                className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-white/5 text-white font-bold uppercase tracking-wider text-sm transition-transform hover:scale-105 border border-white/10 hover:bg-white/10"
              >
                Guía de Instalación
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}