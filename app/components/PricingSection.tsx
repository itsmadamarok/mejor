'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { CheckCircle2, Sparkles, Zap, Crown, MonitorPlay, Gift, ShieldCheck, Flame } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

export default function PricingSection() {
  const [devices, setDevices] = useState<1 | 2 | 3>(1);

  // Exact pricing structure in Euros for Mejor IPTV
  const pricing: Record<number, Record<number, { total: number; mo: string }>> = {
    1: {
      3: { total: 29, mo: (29 / 3).toFixed(2) },
      6: { total: 45, mo: (45 / 6).toFixed(2) },
      12: { total: 75, mo: (75 / 12).toFixed(2) },
    },
    2: {
      3: { total: 45, mo: (45 / 3).toFixed(2) },
      6: { total: 75, mo: (75 / 6).toFixed(2) },
      12: { total: 115, mo: (115 / 12).toFixed(2) },
    },
    3: {
      3: { total: 65, mo: (65 / 3).toFixed(2) },
      6: { total: 99, mo: (99 / 6).toFixed(2) },
      12: { total: 175, mo: (175 / 12).toFixed(2) },
    },
  };

  const currentPricing = pricing[devices] || pricing[1];

  const handleWhatsAppRedirect = (months: number) => {
    const price = currentPricing[months]?.total || 0;
    const message = `Hola, buenas. Me interesa la suscripción de ${months} meses para ${devices} ${
      devices > 1 ? 'dispositivos' : 'dispositivo'
    } por €${price}.`;

    const whatsappUrl = `https://live-support.netlify.app/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleFreeTrialRedirect = () => {
    const message = "Hola, me gustaría solicitar el acceso de prueba de 24 horas, por favor.";
    const whatsappUrl = `https://live-support.netlify.app/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="pricing-section" 
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 scroll-mt-20 bg-gradient-to-b from-[#FFC400] via-[#e0ac00] to-[#FFC400] overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] my-12 shadow-[0_0_50px_rgba(255,196,0,0.3)] border-4 border-[#CA1421]"
    >
      {/* Background patterns and glowing accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000d_1px,transparent_1px),linear-gradient(to_bottom,#0000000d_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none md:bg-[size:48px_48px]"></div>
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-[#CA1421]/20 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-[#CA1421]/20 blur-[150px] pointer-events-none rounded-full" />
      
      <FadeIn className="text-center justify-center max-w-4xl mx-auto mb-12 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#CA1421] px-5 py-2.5 rounded-full mb-6 shadow-xl border border-yellow-300/30">
          <Crown className="w-4 h-4 text-[#FFC400]" />
          <span className="text-[#FFC400] font-black text-xs uppercase tracking-widest">
            {CONSTANTS.BRAND_NAME} — Servidores Anti-Freeze 4K
          </span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#111113] mb-6 uppercase tracking-tight drop-shadow-sm">
          COMPRAR <span className="text-[#CA1421] drop-shadow">IPTV ESPAÑA</span> PLANES
        </h2>
        <p className="text-sm sm:text-lg text-[#111113]/90 mb-10 max-w-2xl mx-auto leading-relaxed font-bold px-2">
          Disfruta del <strong className="text-[#CA1421]">mejor iptv españa</strong> con servidores estables sin cortes. Fútbol en directo, LaLiga, Champions, Movistar+, DAZN y más de 20.000 canales en vivo.
        </p>

        {/* Screen / Devices Selector */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-[#CA1421]" />
            <span className="text-xs sm:text-sm text-[#111113] font-black uppercase tracking-widest">
              Selecciona Tus Pantallas Simultáneas
            </span>
          </div>
          <div className="inline-flex bg-[#111113] border-2 border-[#CA1421] rounded-full p-1.5 sm:p-2 relative shadow-2xl max-w-full overflow-x-auto">
            {[1, 2, 3].map((d) => (
              <button 
                key={d}
                onClick={() => setDevices(d as 1 | 2 | 3)}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-base font-black tracking-wider uppercase transition-all whitespace-nowrap ${
                  devices === d 
                    ? 'bg-[#CA1421] text-[#FFC400] shadow-lg border border-yellow-400/40 scale-105' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {d} {d > 1 ? 'Pantallas' : 'Pantalla'}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Pricing Cards Grid */}
      <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch max-w-6xl mx-auto mt-16 sm:mt-20 relative z-10">
        
        {/* 3 Months Plan Card */}
        <FadeInItem className="bg-[#111113] border-4 border-[#CA1421] rounded-3xl p-6 sm:p-8 flex flex-col group relative overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC400]/10 blur-3xl pointer-events-none rounded-full" />
          <div className="relative z-10 flex flex-col h-full text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-black text-[#FFC400] uppercase tracking-[0.2em] bg-white/5 px-3 py-1 rounded-md border border-white/10">Plan Trimestral</h3>
              <MonitorPlay className="w-5 h-5 text-[#FFC400]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white mb-1 tracking-tighter uppercase">3 Meses IPTV</div>
            <p className="text-xs text-white/60 mb-4 font-semibold">Ideal para probar el servicio</p>
            
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl sm:text-5xl font-black text-[#FFC400] tracking-tighter">
                €{currentPricing[3]?.total || 0}
              </span>
              <span className="text-xs text-white/50 font-bold uppercase">Pago Único</span>
            </div>
            <div className="text-[11px] font-black text-white mb-6 sm:mb-8 uppercase tracking-widest border border-white/15 self-start px-3 py-1.5 rounded-full inline-block bg-white/5">
              Equivale a €{currentPricing[3]?.mo || 0} / mes
            </div>
            
            <ul className="w-full space-y-2.5 sm:space-y-3 flex-grow relative mb-8">
              {[
                `${devices} Pantalla${devices > 1 ? 's' : ''} Simultánea${devices > 1 ? 's' : ''}`,
                'Calidad 4K Ultra HD & HEVC sin cortes',
                '+20.000 Canales en Vivo y Estables',
                '+50.000 Películas y Series VOD',
                'Fútbol Total: LaLiga, Champions, Movistar+',
                'Guía EPG y Sistema 7 Días Catch-up',
                'Servidores anti-freeze de alta velocidad',
                'Compatible Smart TV, Firestick, Android, iOS',
                'Soporte Técnico 24/7 vía WhatsApp',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-white/85 text-xs font-bold leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC400] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="w-full flex mt-auto">
              <button
                onClick={() => handleWhatsAppRedirect(3)}
                className="w-full text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#CA1421] text-white font-black text-xs sm:text-sm uppercase tracking-widest transition-transform hover:scale-105 shrink-0 shadow-lg border border-red-400/40"
              >
                Comprar 3 Meses
              </button>
            </div>
          </div>
        </FadeInItem>

        {/* 12 Months Plan Card */}
        <FadeInItem className="relative bg-[#111113] border-4 border-[#FFC400] rounded-3xl p-6 sm:p-10 flex flex-col transform lg:-translate-y-4 shadow-[0_0_70px_rgba(255,196,0,0.4)] z-20 group overflow-visible transition-all duration-300 hover:-translate-y-6 mt-6 lg:mt-0">
          
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-35">
            <div className="bg-[#FFC400] text-[#111113] text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_4px_20px_rgba(255,196,0,0.6)] border-2 border-[#CA1421] whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-[#CA1421]" /> Más Vendido España
            </div>
          </div>

          <div className="absolute top-0 right-0 w-48 h-48 bg-[#CA1421]/30 blur-3xl pointer-events-none rounded-full" />
          
          <div className="relative z-10 flex flex-col h-full text-white mt-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs sm:text-sm font-black text-[#FFC400] uppercase tracking-[0.2em] bg-[#FFC400]/10 px-3 py-1 rounded-md border border-[#FFC400]/30">Plan Anual VIP</h3>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white mb-1 tracking-tighter uppercase">12 Meses IPTV</div>
            <p className="text-xs text-[#FFC400] mb-4 font-bold flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#CA1421]" /> ¡Ahorra un 65% hoy! El favorito de España
            </p>
            
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl sm:text-6xl font-black text-[#FFC400] tracking-tighter">
                €{currentPricing[12]?.total || 0}
              </span>
              <span className="text-xs text-white/50 font-bold uppercase">Pago Anual</span>
            </div>
            <div className="text-[11px] font-black text-white mb-6 sm:mb-8 uppercase tracking-widest border border-[#FFC400]/40 self-start px-4 py-2 rounded-full inline-block bg-[#CA1421] shadow">
              ¡Sólo €{currentPricing[12]?.mo || 0} / mes!
            </div>

            <ul className="w-full space-y-2.5 sm:space-y-3 flex-grow relative mb-8">
              {[
                `${devices} Pantalla${devices > 1 ? 's' : ''} Simultánea${devices > 1 ? 's' : ''}`,
                'Calidad 4K Ultra HD & HEVC sin cortes',
                '+20.000 Canales en Vivo y Estables',
                '+50.000 Películas y Series VOD',
                'Fútbol Total: LaLiga, Champions, Movistar+',
                'Guía EPG y Sistema 7 Días Catch-up',
                'Servidores anti-freeze de alta velocidad',
                'Compatible Smart TV, Firestick, Android, iOS',
                'Soporte Técnico 24/7 vía WhatsApp',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-white text-xs sm:text-sm font-bold leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC400] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="w-full flex mt-auto">
              <button 
                onClick={() => handleWhatsAppRedirect(12)}
                className="w-full text-center whitespace-nowrap px-6 py-5 rounded-full bg-[#FFC400] text-[#111113] font-black text-sm sm:text-base uppercase tracking-widest transition-transform hover:scale-105 shrink-0 shadow-2xl hover:bg-[#e0ac00] flex items-center justify-center gap-2"
              >
                Comprar 12 Meses <Zap className="w-4 h-4 text-[#CA1421]" />
              </button>
            </div>
          </div>
        </FadeInItem>

        {/* 6 Months Plan Card */}
        <FadeInItem className="bg-[#111113] border-4 border-[#CA1421] rounded-3xl p-6 sm:p-8 flex flex-col group relative overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC400]/10 blur-3xl pointer-events-none rounded-full" />
          <div className="relative z-10 flex flex-col h-full text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-black text-[#FFC400] uppercase tracking-[0.2em] bg-white/5 px-3 py-1 rounded-md border border-white/10">Plan Semestral</h3>
              <MonitorPlay className="w-5 h-5 text-[#FFC400]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white mb-1 tracking-tighter uppercase">6 Meses IPTV</div>
            <p className="text-xs text-white/60 mb-4 font-semibold">Excelente relación calidad-precio</p>
            
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl sm:text-5xl font-black text-[#FFC400] tracking-tighter">
                €{currentPricing[6]?.total || 0}
              </span>
              <span className="text-xs text-white/50 font-bold uppercase">Semestral</span>
            </div>
            <div className="text-[11px] font-black text-white mb-6 sm:mb-8 uppercase tracking-widest border border-white/15 self-start px-3 py-1.5 rounded-full inline-block bg-white/5">
              Equivale a €{currentPricing[6]?.mo || 0} / mes
            </div>
            
            <ul className="w-full space-y-2.5 sm:space-y-3 flex-grow relative mb-8">
              {[
                `${devices} Pantalla${devices > 1 ? 's' : ''} Simultánea${devices > 1 ? 's' : ''}`,
                'Calidad 4K Ultra HD & HEVC sin cortes',
                '+20.000 Canales en Vivo y Estables',
                '+50.000 Películas y Series VOD',
                'Fútbol Total: LaLiga, Champions, Movistar+',
                'Guía EPG y Sistema 7 Días Catch-up',
                'Servidores anti-freeze de alta velocidad',
                'Compatible Smart TV, Firestick, Android, iOS',
                'Soporte Técnico 24/7 vía WhatsApp',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-white/85 text-xs font-bold leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC400] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="w-full flex mt-auto">
              <button 
                onClick={() => handleWhatsAppRedirect(6)}
                className="w-full text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#CA1421] text-white font-black text-xs sm:text-sm uppercase tracking-widest transition-transform hover:scale-105 shrink-0 shadow-lg border border-red-400/40"
              >
                Comprar 6 Meses
              </button>
            </div>
          </div>
        </FadeInItem>
      </FadeInStagger>

      {/* Bottom Horizontal Card (24h Free Trial) */}
      <FadeIn className="max-w-3xl mx-auto mt-12 relative z-30">
        <div className="bg-[#111113] border-4 border-[#CA1421] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="bg-[#CA1421] p-3.5 rounded-2xl text-[#FFC400] shrink-0 hidden sm:flex border border-yellow-400/30">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#FFC400]/20 text-[#FFC400] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#FFC400]/30">Sin Compromiso</span>
                <ShieldCheck className="w-4 h-4 text-[#FFC400]" />
              </div>
              <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-tight">
                ¿Quieres una Prueba IPTV Gratuita de 24 Horas?
              </h4>
              <p className="text-xs text-white/70 font-medium">
                Comprueba la estabilidad de nuestros servidores 4K y canales deportivos solicitando tu prueba gratis.
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0">
            <button 
              onClick={handleFreeTrialRedirect}
              className="w-full md:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-[#FFC400] text-[#111113] font-black text-xs sm:text-sm uppercase tracking-widest transition-transform hover:scale-105 shadow-xl hover:bg-[#e0ac00] flex items-center justify-center gap-2"
            >
              Pedir Test Gratis <Gift className="w-4 h-4 text-[#CA1421]" />
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}