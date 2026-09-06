'use client';

import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import { 
  Users, 
  Server, 
  Zap, 
  ShieldCheck, 
  Trophy, 
  Headphones, 
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Tv,
  Film,
  Clock,
  MonitorPlay,
  Check,
  Star,
  Globe,
  Wifi,
  Sliders,
  PiggyBank,
  Clapperboard,
  BadgePercent,
  Tv2,
  Cpu,
  HeartHandshake
} from 'lucide-react';

const { FOCUS_KEYWORD, SECOND_FOCUS_KEYWORD, THIRD_FOCUS_KEYWORD, BRAND_NAME } = CONSTANTS;

// Country Flags (5 Countries)
const FlagES = () => (
  <svg className="w-5 h-5 rounded-full shadow-md border border-white/20 shrink-0" viewBox="0 0 32 32">
    <clipPath id="f-es-about"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-es-about)">
      <path fill="#AA151B" d="M0 0h32v32H0z" />
      <path fill="#F1BF00" d="M0 8h32v16H0z" />
    </g>
  </svg>
);

const FlagMX = () => (
  <svg className="w-5 h-5 rounded-full shadow-md border border-white/20 shrink-0" viewBox="0 0 32 32">
    <clipPath id="f-mx-about"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-mx-about)">
      <path fill="#006341" d="M0 0h10.7v32H0z" />
      <path fill="#FFF" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#CE1126" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagAR = () => (
  <svg className="w-5 h-5 rounded-full shadow-md border border-white/20 shrink-0" viewBox="0 0 32 32">
    <clipPath id="f-ar-about"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-ar-about)">
      <path fill="#75AADB" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
    </g>
  </svg>
);

const FlagCO = () => (
  <svg className="w-5 h-5 rounded-full shadow-md border border-white/20 shrink-0" viewBox="0 0 32 32">
    <clipPath id="f-co-about"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-co-about)">
      <path fill="#FCD116" d="M0 0h32v16H0z" />
      <path fill="#003893" d="M0 16h32v8H0z" />
      <path fill="#CE1126" d="M0 24h32v8H0z" />
    </g>
  </svg>
);

const FlagCL = () => (
  <svg className="w-5 h-5 rounded-full shadow-md border border-white/20 shrink-0" viewBox="0 0 32 32">
    <clipPath id="f-cl-about"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-cl-about)">
      <path fill="#D52B1E" d="M0 16h32v16H0z" />
      <path fill="#FFF" d="M0 0h32v16H0z" />
      <path fill="#0039A6" d="M0 0h16v16H0z" />
      <polygon fill="#FFF" points="8,3.5 9.8,9 15.3,9 10.8,12.3 12.5,17.8 8,14.4 3.5,17.8 5.2,12.3 0.7,9 6.2,9" transform="scale(0.5) translate(8, 8)" />
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

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-[#F1E8DB] pt-24 sm:pt-32 pb-16 overflow-x-hidden">
      
      {/* ====== HERO SECTION WITH EDITORIAL INTRO ====== */}
      <section className="relative px-4 sm:px-6 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_top,_rgba(202,20,33,0.35),_transparent_70%)] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#FFC400] text-[#000000] px-4 py-2 rounded-full mb-6 font-black text-xs uppercase tracking-widest shadow-lg shadow-[#FFC400]/20">
              <BadgePercent className="w-4 h-4 text-[#CA1421]" />
              <span>Nuestra Misión: Entretenimiento Económico Para Todos</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#F1E8DB] uppercase tracking-tighter leading-none mb-6">
              Hacemos Que La Televisión Y El Cine Sean <span className="text-[#FFC400]">Accesibles Para Todos</span>
            </h1>
            
            <p className="text-base sm:text-xl text-[#F1E8DB]/90 font-bold max-w-3xl mx-auto leading-relaxed mb-8">
              En <strong className="text-[#CA1421]">{BRAND_NAME}</strong> transformamos la forma en que las familias acceden a su televisión en vivo y estrenos de cine. Eliminamos las cuotas abusivas de las operadoras tradicionales para ofrecer un servicio de <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> y <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> ultra rápido, económico y sin interrupciones.
            </p>

            {/* Country Coverage */}
            <div className="flex items-center justify-center gap-3 mb-10 bg-[#1A1A1D] border-2 border-[#FFC400] px-6 py-3 rounded-full shadow-xl">
              <span className="text-xs font-black uppercase text-[#FFC400]">Servicio Disponible En:</span>
              {flagItems.map((flag) => {
                const FlagComp = flag.component;
                return (
                  <div key={flag.code} className="flex items-center gap-1.5">
                    <FlagComp />
                    <span className="text-xs font-black text-[#F1E8DB]">{flag.code}</span>
                  </div>
                );
              })}
            </div>

            {/* Conversion Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
              <Link
                href="/planes"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#CA1421] text-[#F1E8DB] font-black text-sm uppercase tracking-widest hover:bg-[#FFC400] hover:text-[#000000] transition-all transform hover:scale-105 shadow-xl shadow-[#CA1421]/30"
              >
                <span>{THIRD_FOCUS_KEYWORD}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ====== DETAILED NARRATIVE: WHO WE ARE ====== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 my-12 w-full">
        <FadeIn>
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#CA1421] text-[#F1E8DB] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              ¿Quiénes Somos?
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-[#F1E8DB] uppercase tracking-tight">
              Una Plataforma Diseñada Para Romper Las Barreras Del Entretenimiento
            </h2>

            <p className="text-sm sm:text-base text-[#F1E8DB]/90 leading-relaxed font-bold">
              Durante años, ver los mejores partidos de fútbol en directo, las películas recién estrenadas en el cine y las series del momento ha significado pagar suscripciones astronómicas a múltiples plataformas. En <strong className="text-[#FFC400]">{BRAND_NAME}</strong>, nacimos con un propósito simple pero contundente: unificar todo el contenido audiovisual en una sola señal estable y ofrecerla a un precio justo para cualquier hogar.
            </p>

            <p className="text-sm sm:text-base text-[#F1E8DB]/80 leading-relaxed font-bold">
              Creemos firmemente que el entretenimiento de calidad no debe ser un lujo reservado para unos pocos. Por eso, combinamos tecnología de vanguardia en servidores dedicados con un modelo de precios económicos que permite a miles de usuarios disfrutar de su contenido favorito sin ataduras, sin contratos permanentes y sin sorpresas en la factura.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ====== DETAILED NARRATIVE: WHAT WE DO ====== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 my-16 w-full">
        <FadeIn>
          <div className="bg-[#1A1A1D] border-4 border-[#FFC400] rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
            <div>
              <span className="text-[#FFC400] text-xs font-black uppercase tracking-widest block mb-2">Infraestructura y Servicio</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#F1E8DB] uppercase tracking-tight">
                ¿Qué Hacemos Y Cómo Garantizamos La Calidad?
              </h2>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-[#F1E8DB]/90 leading-relaxed font-bold">
              <p>
                No somos un distribuidor común; gestionamos una red privada con servidores CDN optimizados ubicados estratégicamente en puntos clave. Esto nos permite transmitir señal de alta definición (FHD) y 4K Ultra HD directamente a tu dispositivo con el menor tiempo de respuesta del mercado.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="border-l-4 border-[#CA1421] pl-4 space-y-2">
                  <h3 className="text-lg font-black text-[#FFC400] uppercase">Transmisión De Canales En Vivo</h3>
                  <p className="text-xs text-[#F1E8DB]/80">
                    Ofrecemos acceso ininterrumpido a miles de canales de televisión en vivo: eventos deportivos internacionales, noticias, canales infantiles, documentales y programación local de diversos países.
                  </p>
                </div>

                <div className="border-l-4 border-[#CA1421] pl-4 space-y-2">
                  <h3 className="text-lg font-black text-[#FFC400] uppercase">Catálogo VOD (Cine Y Series)</h3>
                  <p className="text-xs text-[#F1E8DB]/80">
                    Nuestra biblioteca bajo demanda se actualiza a diario con los últimos lanzamientos de la cartelera de cine y temporadas completas de las series más vistas en las plataformas de streaming.
                  </p>
                </div>
              </div>

              <p className="pt-2">
                Gracias a nuestro sistema con tecnología <strong className="text-[#CA1421]">Anti-Freeze</strong>, eliminamos los molestos cortes durante transmisiones masivas, como finales de fútbol o eventos PPV de alta demanda.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ====== METRICS HIGHLIGHTS ====== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-12">
        <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Users, value: "25.000+", label: "Familias Conectadas", sub: "Comunidad Activa" },
            { icon: Server, value: "99.99%", label: "Uptime Garantizado", sub: "Redundancia Triple" },
            { icon: Trophy, value: "4.9 / 5", label: "Satisfacción Cliente", sub: "+10.000 Valoraciones" },
            { icon: Headphones, value: "24 / 7", label: "Soporte Técnico", sub: "Atención Inmediata" }
          ].map((stat, idx) => (
            <FadeInItem key={idx}>
              <div className="p-6 bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl text-center shadow-xl">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-[#CA1421]" />
                <div className="text-3xl font-black text-[#000000]">{stat.value}</div>
                <div className="text-xs font-black uppercase text-[#000000]/80 mt-1">{stat.label}</div>
                <div className="text-[#CA1421] text-[10px] font-bold uppercase tracking-widest mt-1">{stat.sub}</div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* ====== DETAILED NARRATIVE: WHAT YOU NEED TO DO ====== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 my-16 w-full">
        <FadeIn>
          <div className="text-center mb-10">
            <span className="bg-[#FFC400] text-[#000000] px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest inline-block mb-3">
              Guía Paso A Paso
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#F1E8DB] uppercase tracking-tight">
              ¿Qué Necesitas Para Empezar A Disfrutar?
            </h2>
            <p className="text-xs sm:text-sm text-[#F1E8DB]/80 font-bold max-w-2xl mx-auto mt-2">
              No necesitas ser un experto en tecnología. Nuestro sistema está diseñado para que cualquier persona configure su acceso en cuestión de minutos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1A1A1D] border-2 border-white/10 p-6 rounded-3xl space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#CA1421] text-white font-black flex items-center justify-center text-lg">1</div>
              <h3 className="text-lg font-black text-[#FFC400] uppercase">Tu Dispositivo Favorito</h3>
              <p className="text-xs text-[#F1E8DB]/80 font-bold leading-relaxed">
                Puedes utilizar tu Smart TV (Samsung, LG), un Amazon Firestick, TV Box Android, iPhone, iPad, Tablet o PC.
              </p>
            </div>

            <div className="bg-[#1A1A1D] border-2 border-white/10 p-6 rounded-3xl space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FFC400] text-[#000000] font-black flex items-center justify-center text-lg">2</div>
              <h3 className="text-lg font-black text-[#FFC400] uppercase">Seleccionar Un Plan</h3>
              <p className="text-xs text-[#F1E8DB]/80 font-bold leading-relaxed">
                Elige la suscripción que mejor se adapte a tu bolsillo. Todos nuestros planes incluyen la totalidad del contenido sin cargos ocultos.
              </p>
            </div>

            <div className="bg-[#1A1A1D] border-2 border-white/10 p-6 rounded-3xl space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#CA1421] text-white font-black flex items-center justify-center text-lg">3</div>
              <h3 className="text-lg font-black text-[#FFC400] uppercase">Ingresar Tus Credenciales</h3>
              <p className="text-xs text-[#F1E8DB]/80 font-bold leading-relaxed">
                Una vez confirmado tu pedido, recibirás tus credenciales (Xtream Codes / M3U) para activarlas al instante en tu aplicación preferida.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ====== CORE FEATURES SUMMARY ====== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 w-full">
        <FadeIn className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#F1E8DB] uppercase tracking-tight">
            Ventajas Principales De <span className="text-[#FFC400]">{BRAND_NAME}</span>
          </h2>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: PiggyBank,
              title: "Precios Sin Competencia",
              desc: "Accede a todo el contenido de entretenimiento por una pequeña fracción de lo que cuesta el cable convencional."
            },
            {
              icon: Zap,
              title: "Servidores Ultra Rápidos",
              desc: "Infraestructura con tecnología de estabilidad Anti-Freeze para transmisiones fluidas en directo."
            },
            {
              icon: Clapperboard,
              title: "Películas Y Series En 4K",
              desc: "Estrenos de cine constantemente actualizados para que nunca te quedes sin nada que ver."
            },
            {
              icon: MonitorPlay,
              title: "Compatibilidad Multiplataforma",
              desc: "Soporte completo para las aplicaciones más populares de IPTV en Smart TV y dispositivos móviles."
            },
            {
              icon: ShieldCheck,
              title: "Conexión Privada Y Segura",
              desc: "Nuestros servidores protegen la estabilidad de tu flujo de datos frente a restricciones de operadoras."
            },
            {
              icon: Headphones,
              title: "Soporte Humano 24/7",
              desc: "Te ayudamos durante el proceso de instalación y resolvemos cualquier duda a través de atención personalizada."
            }
          ].map((item, idx) => (
            <FadeInItem key={idx}>
              <div className="bg-[#1A1A1D] border-2 border-[#FFC400] p-6 rounded-3xl h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FFC400] text-[#000000] flex items-center justify-center mb-4 font-black">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-[#F1E8DB] uppercase mb-2">{item.title}</h3>
                  <p className="text-xs text-[#F1E8DB]/80 font-bold leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* ====== CONVERSION BANNER ====== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 my-16 w-full">
        <FadeIn>
          <div className="bg-gradient-to-r from-[#CA1421] via-[#FFC400] to-[#CA1421] p-1 rounded-3xl shadow-2xl">
            <div className="bg-[#000000] rounded-[22px] p-8 sm:p-12 text-center">
              <Star className="w-12 h-12 text-[#FFC400] mx-auto mb-4 fill-[#FFC400]" />
              <h2 className="text-3xl sm:text-5xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4">
                Únete A La Nueva Era De La Televisión
              </h2>
              <p className="text-[#F1E8DB]/80 text-sm sm:text-base font-bold max-w-xl mx-auto mb-8">
                Prueba la calidad de nuestro servicio hoy mismo. Activa tu plan y empieza a ahorrar desde el primer minuto.
              </p>
              <Link
                href="/planes"
                className="inline-flex items-center gap-3 bg-[#FFC400] text-[#000000] hover:bg-[#CA1421] hover:text-[#F1E8DB] transition-all px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105"
              >
                <span>Ver Planes Y Precios</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ====== FOOTER NAVIGATION ====== */}
      <div className="text-center mt-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#CA1421] hover:text-[#FFC400] transition-colors font-black text-xs uppercase tracking-widest"
        >
          ← Volver A La Página Principal
        </Link>
      </div>

    </div>
  );
}