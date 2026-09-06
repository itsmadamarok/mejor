// app/instalacion/page.tsx - Versión Completa con UI Oscura (#161619) y Acentos Red/Gold
'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONSTANTS } from '@/lib/seo';
import Image from 'next/image';
import { 
  MonitorSmartphone, Tv, Apple, Laptop, Sparkles, Lock, Zap, Users, 
  CheckCircle2, PlayCircle, ArrowRight, MessageCircle, Clock, Headphones, 
  Shield, Download, Mail, Cpu, Search, AlertCircle, TrendingUp, X, ChevronDown
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import Link from 'next/link';
import ShareButtons from '../components/ShareButtons';

// ============ KEYWORDS FROM SEO.TS ============
const { FOCUS_KEYWORD, SECOND_FOCUS_KEYWORD, THIRD_FOCUS_KEYWORD, BRAND_NAME } = CONSTANTS;

// ============ BANDERAS DEL FOOTER (ES, MX, AR, CO, CL) ============
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

// ============ DISPOSITIVOS ============
const devices = [
  { id: 'firestick', name: 'Firestick / Android TV', icon: MonitorSmartphone, popular: true, steps: 6 },
  { id: 'smarttv', name: 'Smart TV (LG / Samsung)', icon: Tv, popular: false, steps: 6 },
  { id: 'apple', name: 'Apple TV & iOS', icon: Apple, popular: false, steps: 6 },
  { id: 'pc', name: 'PC / Mac', icon: Laptop, popular: false, steps: 6 },
];

// ============ DATOS DE PASOS POR DISPOSITIVO ============
const stepData = {
  firestick: {
    title: 'Fire TV Stick & Android TV',
    icon: MonitorSmartphone,
    steps: [
      { 
        number: 1, 
        title: 'Obtén tu Suscripción Activa', 
        description: `Inicia la configuración seleccionando tu suscripción en la sección de planes del ${FOCUS_KEYWORD}. Tras realizar el pedido y al ${THIRD_FOCUS_KEYWORD}, te enviaremos al instante por email y WhatsApp tus datos privados (URL de Portal, Usuario y Contraseña) para la conexión por Xtream Codes API.`, 
        duration: '1-2 min', 
        icon: Users, 
        tip: `Conserva tus credenciales del ${SECOND_FOCUS_KEYWORD} en un lugar seguro para introducirlas sin espacios adicionales.` 
      },
      { 
        number: 2, 
        title: 'Habilita Orígenes Desconocidos', 
        description: `Accede al menú de tu Firestick en Configuración > Mi Fire TV > Opciones para desarrolladores. Activa la casilla "Instalar aplicaciones desconocidas" o "Fuentes desconocidas" para permitir la instalación de aplicaciones avanzadas de reproducción.`, 
        duration: '1 min', 
        icon: Shield, 
        tip: `En las versiones más recientes de Fire OS, debes conceder el permiso específicamente a la app Downloader.` 
      },
      { 
        number: 3, 
        title: 'Descarga e Instala Downloader', 
        description: `Dirígete al buscador principal de la Appstore de Amazon en tu Firestick. Escribe "Downloader" e instala la aplicación con el icono naranja. Es la herramienta oficial recomendada para instalar reproductores en tu dispositivo.`, 
        duration: '2 min', 
        icon: Download, 
        tip: `Acepta los permisos de almacenamiento la primera vez que abras Downloader.` 
      },
      { 
        number: 4, 
        title: 'Introduce el Código de Descarga Directa', 
        description: `Abre Downloader, coloca el cursor en el campo de dirección URL e ingresa el código numérico asignado o el enlace directo provisto por nuestro soporte. Haz clic en "Go" para descargar e instalar la APK oficial del ${FOCUS_KEYWORD}.`, 
        duration: '2 min', 
        icon: MonitorSmartphone, 
        tip: `Si aparece una ventana emergente de seguridad tras la descarga, selecciona "Instalar".` 
      },
      { 
        number: 5, 
        title: 'Inicia Sesión vía Xtream Codes', 
        description: `Abre la aplicación instalada en tu Firestick. Haz clic en la opción "Iniciar sesión con API de Xtream Codes". Introduce la URL del Servidor, tu Usuario y Contraseña enviados tras tu compra del ${SECOND_FOCUS_KEYWORD}.`, 
        duration: '2 min', 
        icon: Mail, 
        tip: `Asegúrate de respetar las mayúsculas y minúsculas al escribir las credenciales del ${FOCUS_KEYWORD}.` 
      },
      { 
        number: 6, 
        title: '¡Disfruta del Contenido en UHD!', 
        description: `Una vez descargada la lista de canales y contenido VOD, tu Firestick estará listo. Disfruta de la mejor televisión en directo en 4K Ultra HD y contenido bajo demanda con tecnología Anti-Freeze habilitada.`, 
        duration: '¡Listo!', 
        icon: PlayCircle, 
        tip: `Puedes añadir tus canales y películas favoritas a la sección "Favoritos" para acceso rápido.` 
      },
    ]
  },
  smarttv: {
    title: 'Smart TV Setup (Samsung, LG, Android TV)',
    icon: Tv,
    steps: [
      { 
        number: 1, 
        title: 'Consigue tus Credenciales de Acceso', 
        description: `Elige tu plan preferido del ${FOCUS_KEYWORD} en nuestra plataforma. Al ${THIRD_FOCUS_KEYWORD}, recibirás un correo electrónico de confirmación con tu URL de portal, nombre de usuario y contraseña listos para vincular a tu Smart TV.`, 
        duration: '1-2 min', 
        icon: Users, 
        tip: `Para un rendimiento óptimo en Smart TV, recomendamos conectar tu televisor mediante cable de red Ethernet.` 
      },
      { 
        number: 2, 
        title: 'Abre la Tienda de Aplicaciones', 
        description: `Conecta tu Smart TV a internet y abre la tienda oficial de aplicaciones (LG Content Store para WebOS, Samsung App Store para Tizen o Google Play Store para Android TV).`, 
        duration: '1 min', 
        icon: MonitorSmartphone, 
        tip: `Comprueba que el software de tu Smart TV esté actualizado a la última versión disponible.` 
      },
      { 
        number: 3, 
        title: 'Busca e Instala un Reproductor Compatible', 
        description: `En el buscador de la tienda, escribe el nombre de una app recomendada como "IBO Player", "IPTV Smarters Pro", "Tivimate" o "SmartOne". Haz clic en instalar en tu televisor.`, 
        duration: '2 min', 
        icon: Search, 
        tip: `IBO Player e IPTV Smarters Pro son las opciones más estables para televisores LG y Samsung.` 
      },
      { 
        number: 4, 
        title: 'Abre la App y Selecciona el Método de Login', 
        description: `Ejecuta la aplicación en tu TV. Selecciona la opción de añadir usuario mediante "Xtream Codes API" o identifica la dirección MAC que aparece en pantalla si la app requiere activación web.`, 
        duration: '2 min', 
        icon: Download, 
        tip: `Si usas IBO Player o SmartOne, anota la MAC Address y la Key para ingresar las credenciales desde la web de la app.` 
      },
      { 
        number: 5, 
        title: 'Ingresa las Credenciales del Servicio', 
        description: `Introduce la URL del servidor, usuario y contraseña de tu cuenta del ${SECOND_FOCUS_KEYWORD}. Pulsa en "Añadir Usuario" o "Login" para sincronizar la guía EPG y los contenidos.`, 
        duration: '3 min', 
        icon: Mail, 
        tip: `Verifica que no haya espacios automáticos al final del texto al teclear con el mando a distancia.` 
      },
      { 
        number: 6, 
        title: '¡Todo Listo para Transmitir!', 
        description: `¡Tu Smart TV está totalmente configurada! Explora la biblioteca con miles de canales en vivo, eventos deportivos y películas en alta resolución sin interrupciones.`, 
        duration: '¡Listo!', 
        icon: PlayCircle, 
        tip: `Ajusta el tamaño de búfer en los ajustes de la app a "Medio" o "Alto" si tu conexión Wi-Fi es inestable.` 
      },
    ]
  },
  apple: {
    title: 'Apple TV, iPhone & iPad',
    icon: Apple,
    steps: [
      { 
        number: 1, 
        title: 'Suscríbete al Servicio', 
        description: `Selecciona la duración de tu suscripción del ${FOCUS_KEYWORD} en nuestra tienda. Tras completar el proceso y al ${THIRD_FOCUS_KEYWORD}, recibirás los datos de acceso por correo de forma inmediata.`, 
        duration: '1-2 min', 
        icon: Users, 
        tip: `Nuestras credenciales son compatibles con las aplicaciones de reproducción más avanzadas de iOS y tvOS.` 
      },
      { 
        number: 2, 
        title: 'Accede a la App Store', 
        description: `Abre la App Store en tu dispositivo Apple (iPhone, iPad o Apple TV). Asegúrate de iniciar sesión con tu ID de Apple activo para poder descargar aplicaciones.`, 
        duration: '1 min', 
        icon: MonitorSmartphone, 
        tip: `Usa la misma ID de Apple si deseas instalar el reproductor en varios dispositivos de la marca.` 
      },
      { 
        number: 3, 
        title: 'Descarga un Reproductor IPTV', 
        description: `Busca "IPTV Smarters Pro", "GSE Smart IPTV" o "IPTVX" en el buscador de la App Store. Toca en "Obtener" para realizar la instalación en tu dispositivo Apple.`, 
        duration: '2 min', 
        icon: Search, 
        tip: `IPTV Smarters Pro ofrece una experiencia de navegación fluida en dispositivos Apple.` 
      },
      { 
        number: 4, 
        title: 'Abre la Aplicación Instalada', 
        description: `Inicia la aplicación en tu iPhone o Apple TV. Acepta los términos de uso e inicia el asistente para añadir una nueva lista de reproducción.`, 
        duration: '1 min', 
        icon: Download, 
        tip: `Concede permisos de red local si la app lo solicita para un óptimo funcionamiento.` 
      },
      { 
        number: 5, 
        title: 'Conecta con Xtream Codes API', 
        description: `Elige la opción "Load Your Playlist or File / Xtream Codes API". Rellena los campos con la URL del Servidor, Nombre de Usuario y Clave del ${SECOND_FOCUS_KEYWORD}.`, 
        duration: '2 min', 
        icon: Mail, 
        tip: `Copia y pega directamente las credenciales desde el correo de bienvenida para evitar erratas.` 
      },
      { 
        number: 6, 
        title: '¡Disfruta en Ecosistema Apple!', 
        description: `Tu contenido ya está sincronizado. Disfruta de tus canales y series favoritas con características como AirPlay para enviar la señal a tu televisor o Picture-in-Picture.`, 
        duration: '¡Listo!', 
        icon: PlayCircle, 
        tip: `Aprovecha la función AirPlay para transmitir instantáneamente desde tu iPhone a un Apple TV o Smart TV compatible.` 
      },
    ]
  },
  pc: {
    title: 'PC Windows & Mac OS',
    icon: Laptop,
    steps: [
      { 
        number: 1, 
        title: 'Consigue tu Enlace M3U / Xtream API', 
        description: `Realiza tu suscripción en la web oficial del ${FOCUS_KEYWORD}. Al ${THIRD_FOCUS_KEYWORD}, recibirás tus claves de usuario junto con la dirección URL de tu lista M3U personalizada en tu e-mail.`, 
        duration: '1-2 min', 
        icon: Users, 
        tip: `Guarda el enlace M3U en tus marcadores de correo para usarlo en reproductores de ordenador.` 
      },
      { 
        number: 2, 
        title: 'Descarga VLC o IPTV Smarters para PC', 
        description: `Descarga VLC Media Player desde videolan.org o instala la aplicación de escritorio oficial IPTV Smarters Pro compatible con Windows y Mac OS.`, 
        duration: '2 min', 
        icon: Download, 
        tip: `VLC es un software 100% gratuito, ligero y altamente estable para la emisión de flujos multimedia.` 
      },
      { 
        number: 3, 
        title: 'Instala la Aplicación en tu Sistema', 
        description: `Ejecuta el instalador descargado en tu equipo informático y sigue los pasos del asistente de instalación por defecto.`, 
        duration: '2 min', 
        icon: Cpu, 
        tip: `En Mac OS, arrastra el icono del programa a la carpeta Aplicaciones.` 
      },
      { 
        number: 4, 
        title: 'Copia tus Credenciales o URL M3U', 
        description: `Abre el correo de confirmación enviado por el soporte del ${SECOND_FOCUS_KEYWORD} y copia la URL completa de la lista M3U o tus datos de inicio de sesión.`, 
        duration: '1 min', 
        icon: Mail, 
        tip: `Asegúrate de copiar el enlace en su totalidad sin omitir los parámetros de usuario y contraseña.` 
      },
      { 
        number: 5, 
        title: 'Abre la Ubicación de Red', 
        description: `Si usas VLC, entra en "Medio" > "Abrir ubicación de red..." (Ctrl+N), pega la URL M3U y haz clic en "Reproducir". Si usas IPTV Smarters PC, introduce tus claves por Xtream API.`, 
        duration: '2 min', 
        icon: PlayCircle, 
        tip: `En VLC, pulsa las teclas Ctrl + L para desplegar la lista completa de canales y categorizarlos.` 
      },
      { 
        number: 6, 
        title: '¡Streaming de Alta Calidad en tu PC!', 
        description: `El reproductor cargará la programación. Ya puedes disfrutar del mejor contenido en directo, deportes y televisión bajo demanda en la pantalla de tu ordenador.`, 
        duration: '¡Listo!', 
        icon: TrendingUp, 
        tip: `Presiona la tecla F11 o dobla clic en la pantalla de VLC para poner la reproducción a pantalla completa.` 
      },
    ]
  }
};

// ============ FAQ ============
const setupFaqs = [
  {
    q: `¿Cuánto tiempo tarda la activación tras ${THIRD_FOCUS_KEYWORD}?`,
    a: `La activación del ${FOCUS_KEYWORD} se realiza de forma automatizada e inmediata. Recibirás tus datos de acceso en tu correo electrónico y WhatsApp en un plazo de 1 a 5 minutos después de ${THIRD_FOCUS_KEYWORD}.`
  },
  {
    q: `¿Puedo instalar la suscripción del ${SECOND_FOCUS_KEYWORD} en varios dispositivos?`,
    a: `Sí, puedes instalar y configurar tus datos en todos los dispositivos que desees (Firestick, Smart TV, Móvil, PC). Sin embargo, las reproducciones simultáneas dependerán de las conexiones contratadas al ${THIRD_FOCUS_KEYWORD}.`
  },
  {
    q: `¿Qué hago si aparece un error de autenticación al iniciar sesión?`,
    a: `Revisa minuciosamente que no haya espacios no deseados al final del usuario o contraseña. Asegúrate de seleccionar el tipo de conexión "Xtream Codes API" e introducir la URL del portal completa exactamente como se indica en el email recibido.`
  },
  {
    q: `¿Es necesario utilizar una conexión VPN con el ${FOCUS_KEYWORD}?`,
    a: `No es obligatorio. Nuestros servidores cuentan con enrutamiento inteligente Anti-Freeze para operar de forma fluida con los principales proveedores de internet en España (Movistar, Vodafone, Orange, Digi). No obstante, nuestro servicio es 100% compatible si prefieres usar una VPN.`
  },
  {
    q: `¿Qué velocidad de internet se requiere para ver canales en 4K Ultra HD?`,
    a: `Para canales en resolución HD/FHD se recomiendan al menos 15 Mbps estables. Para la reproducción fluida de eventos en directo en calidad 4K Ultra HD recomendamos disponer de una velocidad mínima de 30 Mbps.`
  },
  {
    q: `¿Incluye todos los deportes en directo e idioma castellano?`,
    a: `Sí, el ${FOCUS_KEYWORD} incluye la totalidad de diales deportivos (fútbol de primera división, Champions, Baloncesto, F1, Moto GP) con comentarios en castellano y en calidad Full HD / 4K sin retardo.`
  }
];

// ============ STEP ITEM COMPONENT ============
function StepItem({ step, index, isLast }: { step: any; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = step.icon;

  return (
    <div ref={ref} className="relative">
      <div className="flex gap-5 md:gap-6">
        
        <div className="flex flex-col items-center">
          <motion.div 
            className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
              isInView 
                ? 'bg-[#CA1421] text-[#FFFFFF] shadow-[0_0_30px_rgba(202,20,33,0.5)] scale-110' 
                : 'bg-[#161619] text-[#CA1421] border border-white/10'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.4, type: 'spring', delay: index * 0.1 }}
          >
            <span className="text-2xl md:text-3xl font-black">
              {step.number}
            </span>
          </motion.div>
          
          {!isLast && (
            <motion.div 
              className="relative w-1 h-28 md:h-36 my-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: index * 0.15 + 0.3 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle,_#CA1421_1px,_transparent_1px)] bg-[length:4px_8px] bg-repeat-y opacity-30" />
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#CA1421] to-red-800"
                initial={{ height: 0 }}
                animate={{ height: isInView ? '100%' : 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
              />
            </motion.div>
          )}
        </div>
        
        <motion.div 
          className="flex-1 pb-16 md:pb-20"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -40 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={`bg-[#161619] border rounded-2xl p-6 md:p-8 transition-all duration-500 ${
            isInView 
              ? 'border-[#CA1421] shadow-[0_0_30px_rgba(202,20,33,0.15)]' 
              : 'border-white/10'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isInView ? 'bg-[#CA1421]/20 text-[#CA1421]' : 'bg-white/5 text-white/40'
                }`}>
                  <Icon className="w-5 h-5 shrink-0" />
                </div>
                <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tight transition-colors duration-300 ${
                  isInView ? 'text-[#FFFFFF]' : 'text-[#F1E8DB]/70'
                }`}>
                  {step.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Clock className="w-3.5 h-3.5 text-[#FFC400]" />
                <span className="text-[#F1E8DB]/80 text-xs font-bold">{step.duration}</span>
              </div>
            </div>
            
            <p className="text-[#F1E8DB]/80 font-medium leading-relaxed text-sm md:text-base">
              {step.description}
            </p>
            
            {isInView && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 p-4 rounded-xl bg-black/40 border border-[#FFC400]/30"
              >
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#FFC400]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertCircle className="w-4 h-4 text-[#FFC400]" />
                  </div>
                  <div>
                    <p className="text-[#FFC400] font-black text-xs uppercase tracking-wider">Consejo Pro</p>
                    <p className="text-[#F1E8DB]/90 text-sm font-medium mt-0.5">{step.tip}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ============ MAIN COMPONENT ============
export default function SetupPage() {
  const [activeDevice, setActiveDevice] = useState('firestick');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [openFaqIndex, setOpenIndex] = useState<number | null>(0);
  const currentData = stepData[activeDevice as keyof typeof stepData];
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const cleanPhone = (CONSTANTS.CONTACT.phone || '+31612345678').replace(/[^0-9]/g, '');

  const closeVideo = () => {
    setIsVideoOpen(false);
    if (iframeRef.current) {
      iframeRef.current.src = '';
    }
  };

  const openVideo = () => {
    setIsVideoOpen(true);
    setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.src = 'https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0';
      }
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#111113] text-[#F1E8DB]">
      
      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16">
        
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-1.webp"
            alt={`${FOCUS_KEYWORD} - Guía de Instalación Completa`}
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover brightness-[0.18]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/70 to-[#111113]" />
        </div>
        
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #CA1421 1px, transparent 1px),
              linear-gradient(to bottom, #CA1421 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CA1421]/15 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="max-w-4xl mx-auto px-4 pt-10 text-center relative z-10 flex flex-col items-center justify-center">
          <FadeInStagger className="flex flex-col items-center justify-center text-center">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-[#CA1421] px-4 py-2 rounded-full mb-6 shadow-[0_0_20px_rgba(202,20,33,0.4)] border border-white/10">
                <Sparkles className="w-4 h-4 text-[#FFFFFF]" />
                <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
                  {FOCUS_KEYWORD} - Guía Paso a Paso
                </span>
              </div>
            </FadeInItem>
            
            <FadeInItem>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-none text-center">
                Guía de Instalación <br />
                <span className="text-[#CA1421]">{FOCUS_KEYWORD}</span>
              </h1>
            </FadeInItem>

            <FadeInItem>
              <p className="text-base sm:text-lg md:text-xl text-[#F1E8DB]/80 font-medium max-w-2xl mx-auto leading-relaxed px-2 text-center mb-6">
                Aprende a configurar paso a paso el <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> en Smart TV, Firestick y móviles. 
                Disfruta de la máxima estabilidad con tu suscripción de <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong>. 
                <strong className="text-white"> {THIRD_FOCUS_KEYWORD}</strong> y comienza la transmisión en menos de 5 minutos.
              </p>
            </FadeInItem>

            {/* ====== BANDERAS DEL FOOTER ====== */}
            <FadeInItem>
              <div className="w-full flex items-center justify-center mb-8">
                <div className="inline-flex items-center justify-center flex-nowrap gap-2.5 sm:gap-4 px-5 py-2.5 rounded-full bg-[#161619] border border-white/10 shadow-xl backdrop-blur-md">
                  {flagItems.map((flag) => {
                    const FlagComp = flag.component;
                    return (
                      <div 
                        key={flag.code} 
                        className="flex items-center gap-1.5 shrink-0 group cursor-default"
                        title={flag.name}
                      >
                        <FlagComp />
                        <span className="text-[11px] sm:text-xs font-black uppercase text-[#F1E8DB] group-hover:text-[#FFC400] transition-colors">
                          {flag.code}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[#F1E8DB]/70 text-xs md:text-sm font-black uppercase tracking-widest">
                <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-[#CA1421]" /> Conexión Segura SSL</span>
                <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#CA1421]" /> Activación 5 Mins</span>
                <span className="flex items-center gap-2"><Headphones className="w-4 h-4 text-[#CA1421]" /> Soporte Técnico 24/7</span>
              </div>
            </FadeInItem>
            
            <FadeInItem className="mt-10 relative flex justify-center">
              <button 
                onClick={openVideo}
                className="inline-flex items-center justify-center p-2 rounded-full bg-white/5 border border-white/10 hover:border-[#CA1421] transition-all duration-300 relative z-10 shadow-xl group cursor-pointer"
                aria-label="Ver video tutorial del servicio"
              >
                <div className="flex items-center gap-4 bg-[#161619] px-6 py-4 rounded-full border border-white/5 group-hover:bg-[#CA1421]/10 transition-colors">
                  <PlayCircle className="w-8 h-8 text-[#CA1421] shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="text-[#FFFFFF] font-black uppercase tracking-widest text-xs sm:text-sm">Video Tutorial</p>
                    <p className="text-[#F1E8DB]/60 text-[11px] font-bold uppercase tracking-wide">Guía visual de instalación</p>
                  </div>
                </div>
              </button>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ====== CTA BANNER ====== */}
      <section className="w-full bg-gradient-to-r from-[#CA1421] via-red-700 to-[#CA1421] py-8 px-4 sm:px-6 border-y border-white/10 shadow-[0_0_50px_rgba(202,20,33,0.3)] relative z-20 overflow-hidden group">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left relative z-10 gap-6">
          <div className="space-y-2">
            <span className="bg-black/30 border border-white/20 text-[#FFC400] font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest inline-block">
              {FOCUS_KEYWORD}
            </span>
            <p className="text-[#FFFFFF] text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight">
              {THIRD_FOCUS_KEYWORD} HOY MISMO
            </p>
            <p className="text-[#F1E8DB]/90 text-xs sm:text-sm font-medium">
              Activa tu suscripción de <strong className="text-[#FFC400]">{SECOND_FOCUS_KEYWORD}</strong> sin permanencia.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <Link
              href="/planes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FFFFFF] text-[#111113] hover:bg-[#FFC400] transition-all duration-300 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl group/btn"
            >
              <span>{THIRD_FOCUS_KEYWORD} - Ver Planes</span>
              <ArrowRight className="w-4 h-4 text-[#CA1421] group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== SELECTOR DE DISPOSITIVOS ====== */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="text-center mb-12">
          <span className="text-[#FFC400] font-bold text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/10 mb-3 inline-block">
            Compatibilidad Multidispositivo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] mb-3 uppercase tracking-tighter">
            Selecciona tu <span className="text-[#CA1421]">Dispositivo</span>
          </h2>
          <p className="text-[#F1E8DB]/70 text-base font-medium max-w-xl mx-auto">
            Elige el equipo en el que deseas realizar la instalación del <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong>.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {devices.map((device) => {
            const Icon = device.icon;
            const isActive = activeDevice === device.id;
            return (
              <button
                key={device.id}
                onClick={() => setActiveDevice(device.id)}
                className={`relative p-6 rounded-2xl text-center transition-all duration-300 cursor-pointer group border ${
                  isActive 
                    ? 'bg-[#161619] border-[#CA1421] shadow-[0_0_30px_rgba(202,20,33,0.3)] scale-[1.02]' 
                    : 'bg-[#161619]/60 border-white/10 hover:border-white/30 hover:bg-[#161619]'
                }`}
              >
                {device.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#CA1421] text-[#FFFFFF] font-black uppercase text-[10px] tracking-widest px-3 py-0.5 rounded-full whitespace-nowrap shadow-md border border-white/10">
                    Más Utilizado
                  </div>
                )}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors ${
                  isActive ? 'bg-[#CA1421] text-[#FFFFFF]' : 'bg-white/5 text-[#CA1421] group-hover:bg-white/10'
                }`}>
                  <Icon className="w-7 h-7 shrink-0" />
                </div>
                <h3 className="text-base font-black uppercase tracking-wide mb-1 text-[#FFFFFF]">{device.name}</h3>
                <p className="text-xs font-medium text-[#F1E8DB]/50">{device.steps} pasos sencillos</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* ====== PASOS DEL DISPOSITIVO SELECCIONADO ====== */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CA1421]/20 border border-[#CA1421]/40 text-[#CA1421] font-black uppercase text-xs tracking-widest mb-3">
            <currentData.icon className="w-4 h-4 shrink-0" />
            <span>{currentData.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#FFFFFF] uppercase tracking-tight">
            Instrucciones para <span className="text-[#CA1421]">{FOCUS_KEYWORD}</span>
          </h2>
          <p className="text-[#F1E8DB]/60 text-sm font-medium mt-2">
            Sigue estos sencillos pasos para configurar tu cuenta del <strong className="text-[#FFC400]">{SECOND_FOCUS_KEYWORD}</strong>.
          </p>
        </div>

        <div className="relative px-2">
          {currentData.steps.map((step, index) => (
            <StepItem 
              key={step.number}
              step={step}
              index={index}
              isLast={index === currentData.steps.length - 1}
            />
          ))}
        </div>

        {/* ====== CARD DE FINALIZACIÓN ====== */}
        <motion.div 
          className="text-center mt-8 p-8 sm:p-10 rounded-2xl bg-[#161619] border border-[#CA1421] shadow-[0_0_40px_rgba(202,20,33,0.2)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CheckCircle2 className="w-12 h-12 text-[#CA1421] mx-auto mb-3" />
          <h3 className="text-2xl font-black text-[#FFFFFF] uppercase tracking-tight mb-2">
            ¡Instalación Completada!
          </h3>
          <p className="text-[#F1E8DB]/80 font-medium text-sm max-w-md mx-auto mb-6">
            Tu cuenta del <strong className="text-[#FFC400]">{SECOND_FOCUS_KEYWORD}</strong> está configurada correctamente. 
            Disfruta del mejor entretenimiento en directo en tu {currentData.title}.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
            <Link
              href="/"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-[#FFFFFF] font-black text-xs uppercase tracking-widest transition-all border border-white/10"
            >
              Ir a Inicio
            </Link>
            <Link
              href="/planes"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-[#CA1421] hover:bg-red-700 text-[#FFFFFF] font-black text-xs uppercase tracking-widest transition-all shadow-lg"
            >
              {THIRD_FOCUS_KEYWORD} - Ver Planes
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ====== SOPORTE ====== */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="text-center mb-10">
          <span className="text-[#FFC400] font-bold text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/10 mb-3 inline-block">
            Asistencia Personalizada
          </span>
          <h2 className="text-3xl font-black text-[#FFFFFF] mb-2 uppercase tracking-tight">
            ¿Necesitas Ayuda con la <span className="text-[#CA1421]">Configuración</span>?
          </h2>
          <p className="text-[#F1E8DB]/70 text-sm max-w-md mx-auto">
            Nuestro equipo de soporte técnico está disponible para guiarte en el proceso de instalación.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#161619] border border-white/10 rounded-2xl p-8 text-center shadow-xl group hover:border-[#CA1421]/50 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-[#CA1421]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#CA1421]/20 transition-colors">
              <PlayCircle className="w-7 h-7 text-[#CA1421]" />
            </div>
            <h3 className="text-lg font-black text-[#FFFFFF] mb-2 uppercase tracking-wide">Video Tutorial</h3>
            <p className="text-[#F1E8DB]/70 text-xs font-medium mb-6">
              Mira paso a paso la configuración en video de tu reproductor para el <strong className="text-[#FFFFFF]">{FOCUS_KEYWORD}</strong>.
            </p>
            <button 
              onClick={openVideo}
              className="inline-flex items-center gap-2 text-[#CA1421] font-black uppercase text-xs tracking-widest hover:gap-3 transition-all cursor-pointer"
            >
              Ver Tutorial en Video <ArrowRight className="w-4 h-4 text-[#CA1421]" />
            </button>
          </div>

          <div className="bg-[#161619] border border-white/10 rounded-2xl p-8 text-center shadow-xl group hover:border-green-500/50 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
              <MessageCircle className="w-7 h-7 text-green-500" />
            </div>
            <h3 className="text-lg font-black text-[#FFFFFF] mb-2 uppercase tracking-wide">Soporte WhatsApp 24/7</h3>
            <p className="text-[#F1E8DB]/70 text-xs font-medium mb-6">
              ¿Tienes dudas técnicas sobre tu <strong className="text-[#FFFFFF]">{SECOND_FOCUS_KEYWORD}</strong>? Contacta directamente con nuestros agentes.
            </p>
            <a 
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hola ${BRAND_NAME}, necesito asistencia con la instalación del ${SECOND_FOCUS_KEYWORD}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 font-black uppercase text-xs tracking-widest hover:gap-3 transition-all cursor-pointer"
            >
              Contactar por WhatsApp <ArrowRight className="w-4 h-4 text-green-400" />
            </a>
          </div>
        </div>
      </section>

      {/* ====== SHARE BUTTONS ====== */}
      <div className="w-full flex justify-center items-center my-6">
        <ShareButtons />
      </div>

      {/* ====== FAQ ====== */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <FadeIn className="text-center mb-12">
          <span className="text-[#FFC400] font-bold text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/10 mb-3 inline-block">
            {FOCUS_KEYWORD} - Resolvemos tus dudas
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#FFFFFF] mb-3 uppercase tracking-tighter">
            Preguntas <span className="text-[#CA1421]">Frecuentes</span>
          </h2>
          <p className="text-[#F1E8DB]/70 text-sm font-medium max-w-xl mx-auto">
            Respuestas detalladas a las preguntas más comunes sobre la instalación del <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong>.
          </p>
        </FadeIn>
        
        <FadeInStagger className="space-y-3 relative z-10">
          {setupFaqs.map((faq, i) => (
            <FadeInItem key={i}>
              <button
                onClick={() => setOpenIndex(openFaqIndex === i ? null : i)}
                className={`w-full text-left bg-[#161619] border ${openFaqIndex === i ? 'border-[#CA1421]' : 'border-white/10'} rounded-xl p-5 sm:p-6 hover:border-[#CA1421]/60 transition-all duration-300 group cursor-pointer`}
                aria-expanded={openFaqIndex === i}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className={`text-base sm:text-lg font-black uppercase tracking-tight transition-colors ${openFaqIndex === i ? 'text-[#CA1421]' : 'text-[#FFFFFF] group-hover:text-[#CA1421]'} flex items-center gap-3`}>
                    <span className={`${openFaqIndex === i ? 'text-[#CA1421]' : 'text-white/30'} font-black text-xl`}>P.</span> 
                    {faq.q}
                  </h3>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180 text-[#CA1421]' : 'text-white/40'}`} />
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openFaqIndex === i ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[#F1E8DB]/80 font-medium leading-relaxed text-xs sm:text-sm pl-8 border-l-2 border-[#CA1421] py-1">
                    {faq.a}
                  </p>
                </div>
              </button>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* ====== VIDEO MODAL ====== */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeVideo();
            }
          }}
        >
          <div className="relative w-full max-w-4xl mx-4">
            <button 
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-[#FFFFFF] hover:text-[#CA1421] transition-colors cursor-pointer flex items-center gap-2 text-xs font-bold z-10 uppercase tracking-widest"
            >
              <X className="w-5 h-5 shrink-0" /> Cerrar Video
            </button>
            
            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border border-[#CA1421] bg-black">
              <iframe
                ref={iframeRef}
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0&modestbranding=1"
                title={`${FOCUS_KEYWORD} - Video Tutorial de Instalación`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}