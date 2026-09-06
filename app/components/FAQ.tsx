'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

const faqs = [
  { 
    q: '¿Qué es IPTV y cómo funciona exactamente?', 
    a: `IPTV significa Televisión por Protocolo de Internet. Te permite ver canales de televisión en directo, deportes y películas bajo demanda a través de tu conexión a internet en lugar de una antena parabólica o cable tradicional. Con ${CONSTANTS.BRAND_NAME} puedes transmitir directamente en calidad 4K en tu Smart TV u otros dispositivos.` 
  },
  { 
    q: `¿Qué hace que ${CONSTANTS.BRAND_NAME} sea el mejor proveedor de IPTV?`, 
    a: `${CONSTANTS.BRAND_NAME} ofrece la máxima estabilidad de transmisión con más de 20.000 canales y 60.000+ películas y series. Gracias a nuestra tecnología de servidores anti-congelamiento, disfrutas de deportes en directo (LaLiga, Champions League, DAZN) sin cortes ni interrupciones.` 
  },
  { 
    q: '¿En qué dispositivos puedo ver IPTV?', 
    a: `Nuestro servicio de IPTV es compatible con prácticamente cualquier dispositivo: Smart TVs de Samsung y LG, Android TV, Google TV, Amazon Firestick, Apple TV, iPhone, iPad, PC con Windows, Mac y dispositivos MAG o Formuler.` 
  },
  { 
    q: '¿Qué tan rápido se activa mi suscripción de IPTV?', 
    a: 'Inmediatamente después de completar tu pedido, tus enlaces M3U y códigos Xtream se generan de forma automática. Recibirás tus datos de acceso en menos de 5 minutos por WhatsApp y correo electrónico, incluyendo instrucciones de instalación claras.' 
  },
  { 
    q: '¿Puedo solicitar primero una prueba de IPTV gratuita de 24 horas?', 
    a: `¡Sí, absolutamente! Puedes ponerte en contacto directamente a través de nuestro sitio web por WhatsApp para solicitar una prueba gratuita y sin compromiso de 24 horas y comprobar por ti mismo nuestros canales 4K y la estabilidad del servidor.` 
  },
  { 
    q: '¿Cómo instalo la aplicación de IPTV en mi Smart TV?', 
    a: 'Descarga una aplicación de IPTV recomendada como IBO Player, TiviMate, Smart IPTV o IPTV Smarters desde la tienda de aplicaciones de tu televisor. Luego, ingresa tu lista de reproducción M3U o datos de acceso para comenzar a disfrutar de inmediato.' 
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section 
      className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 relative bg-transparent" 
      aria-label={`Preguntas frecuentes sobre ${CONSTANTS.BRAND_NAME}`}
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#CA1421]/5 blur-[140px] rounded-full pointer-events-none" />
      
      <FadeIn className="text-center mb-16 relative z-10">
        {/* Fully responsive badge container matching small screens gracefully */}
        <div className="inline-flex items-center gap-2 bg-[#CA1421]/10 border border-[#FFC400] px-3 sm:px-4 py-2 rounded-full mb-6 shadow-sm max-w-[90%] sm:max-w-none mx-auto text-center">
          <HelpCircle className="w-4 h-4 text-[#FFC400] flex-shrink-0" />
          <span className="text-[#FFC400] font-black text-[11px] sm:text-xs uppercase tracking-wider truncate">
            Soporte y Dudas
          </span>
        </div>
        
        {/* Header Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#CA1421] uppercase tracking-tighter leading-tight px-2">
          PREGUNTAS <span className="text-[#FFC400]">FRECUENTES</span>
        </h2>

        {/* Description Under Header: Pure White */}
        <p className="text-white font-bold text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 px-2 leading-relaxed">
          Todo lo que necesitas saber sobre nuestras suscripciones, instalación y canales de <span className="text-[#FFC400]">{CONSTANTS.BRAND_NAME}</span>.
        </p>
      </FadeIn>
      
      <FadeInStagger className="space-y-4 relative z-10">
        {faqs.map((faq, i) => (
          <FadeInItem key={i}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className={`w-full text-left bg-white border-2 transition-all duration-300 rounded-2xl p-5 sm:p-6 md:p-7 shadow-sm group ${
                openIndex === i 
                  ? 'border-[#CA1421] shadow-xl ring-2 ring-[#CA1421]/20' 
                  : 'border-black/10 hover:border-[#CA1421]/50 hover:shadow-md'
              }`}
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className={`text-sm sm:text-base md:text-xl font-black uppercase tracking-tight transition-colors flex items-center gap-2 sm:gap-3 ${
                  openIndex === i ? 'text-[#CA1421]' : 'text-[#111113] group-hover:text-[#CA1421]'
                }`}>
                  <span className={`font-black text-lg sm:text-xl md:text-2xl transition-colors ${
                    openIndex === i ? 'text-[#CA1421]' : 'text-[#CA1421]/60'
                  }`}>
                    P.
                  </span> 
                  {faq.q}
                </h3>
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                  openIndex === i ? 'bg-[#CA1421] text-[#FFC400] rotate-180 shadow-md' : 'bg-black/5 text-[#111113] group-hover:bg-[#CA1421]/10 group-hover:text-[#CA1421]'
                }`}>
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              <div 
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
                }`}
                role="region"
              >
                {/* Answers: Pure Black Text */}
                <p className="text-black font-semibold text-xs sm:text-sm md:text-base leading-relaxed pl-4 sm:pl-6 md:pl-8 border-l-4 border-[#CA1421] ml-1 sm:ml-2 py-2">
                  {faq.a}
                </p>
              </div>
            </button>
          </FadeInItem>
        ))}
      </FadeInStagger>
    </section>
  );
}