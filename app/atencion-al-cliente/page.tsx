'use client';

import { useState, useRef, useEffect } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import { 
  Mail, 
  User, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Phone,
  Clock,
  Check,
  X,
  Headphones,
  Zap,
  ShieldCheck,
  Users,
  LifeBuoy,
  Award
} from 'lucide-react';
import Link from 'next/link';

// ============ KEYWORDS FROM SEO.TS ============
const { FOCUS_KEYWORD, SECOND_FOCUS_KEYWORD, THIRD_FOCUS_KEYWORD, BRAND_NAME } = CONSTANTS;

// ============ COUNTRY FLAGS ============
const FlagES = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-es"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-es)">
      <path fill="#AA151B" d="M0 0h32v32H0z" />
      <path fill="#F1BF00" d="M0 8h32v16H0z" />
    </g>
  </svg>
);

const FlagMX = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-mx"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-mx)">
      <path fill="#006341" d="M0 0h10.7v32H0z" />
      <path fill="#FFF" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#CE1126" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagAR = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-ar"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-ar)">
      <path fill="#75AADB" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
    </g>
  </svg>
);

const FlagCO = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-co"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-co)">
      <path fill="#FCD116" d="M0 0h32v16H0z" />
      <path fill="#003893" d="M0 16h32v8H0z" />
      <path fill="#CE1126" d="M0 24h32v8H0z" />
    </g>
  </svg>
);

const FlagCL = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
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

// Toast Component
const Toast = ({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-20 sm:top-24 right-3 sm:right-4 z-50 max-w-sm sm:max-w-md w-[calc(100%-1.5rem)] animate-slide-in">
      <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl border-2 sm:border-4 backdrop-blur-xl ${
        type === 'success' 
          ? 'bg-[#F1E8DB] border-green-600' 
          : 'bg-[#F1E8DB] border-[#CA1421]'
      }`}>
        <div className="flex items-start gap-3 sm:gap-4">
          <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
            type === 'success' ? 'bg-green-600/20' : 'bg-[#CA1421]/20'
          }`}>
            {type === 'success' ? (
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            ) : (
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#CA1421]" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[#1A1A1D] font-black uppercase text-xs sm:text-sm leading-tight">{message}</p>
          </div>
          <button 
            onClick={onClose}
            className="flex-shrink-0 text-[#1A1A1D]/40 hover:text-[#CA1421] transition-colors p-1"
            aria-label="Cerrar notificación"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Success Popup Modal
const SuccessPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in p-4">
      <div className="bg-[#F1E8DB] border-2 sm:border-4 border-[#CA1421] rounded-2xl sm:rounded-3xl p-6 sm:p-10 max-w-md w-full shadow-2xl text-center animate-scale-up">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-600/30 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9 text-green-600" />
          </div>
        </div>
        
        <h3 className="text-xl sm:text-3xl font-black text-[#1A1A1D] mb-2 sm:mb-3 uppercase tracking-tight">
          ¡Mensaje Enviado!
        </h3>
        
        <p className="text-[#CA1421] font-bold text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
          Gracias por contactar con <strong className="text-[#1A1A1D]">{BRAND_NAME}</strong>, el {FOCUS_KEYWORD}. 
          Nuestro equipo del {SECOND_FOCUS_KEYWORD} te responderá en minutos.
        </p>
        
        <div className="bg-[#1A1A1D] rounded-xl sm:rounded-2xl border border-white/5 p-4 sm:p-5 mb-5 sm:mb-6 text-left">
          <p className="text-[#F1E8DB]/40 text-[10px] sm:text-xs uppercase tracking-widest font-black mb-2 sm:mb-3">¿Qué sucede ahora?</p>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[#F1E8DB]/80 font-bold uppercase tracking-wide">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#CA1421] shrink-0" />
              Especialista asignado
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#CA1421] shrink-0" />
              Revisión de tu consulta sobre {SECOND_FOCUS_KEYWORD}
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#CA1421] shrink-0" />
              Respuesta rápida por WhatsApp
            </li>
          </ul>
        </div>
        
        <button
          onClick={onClose}
          className="w-full py-3 sm:py-4 rounded-full bg-[#CA1421] text-[#F1E8DB] font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-[#DB4439] transition-transform hover:scale-[1.02] active:scale-95 shadow-md cursor-pointer"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const cleanPhone = (CONSTANTS.CONTACT.phone || '+31612345678').replace(/[^0-9]/g, '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const encodedMsg = encodeURIComponent(
        `Hola ${BRAND_NAME},\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nAsunto: ${formData.subject}\nMensaje: ${formData.message}`
      );
      window.open(`https://wa.me/${cleanPhone}?text=${encodedMsg}`, '_blank');

      setShowSuccessPopup(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setToast({ message: '¡Tu mensaje ha sido enviado con éxito!', type: 'success' });
    } catch {
      setToast({ message: 'Error al enviar. Intenta de nuevo por WhatsApp.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const startWhatsAppChat = () => {
    const defaultText = encodeURIComponent("Hola, buenas. Tengo una consulta sobre los servicios disponibles.");
    window.open(`https://wa.me/${cleanPhone}?text=${defaultText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#000000] pt-24 sm:pt-32 pb-12 sm:pb-16 text-[#F1E8DB] overflow-x-hidden">
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}

      {showSuccessPopup && (
        <SuccessPopup onClose={() => setShowSuccessPopup(false)} />
      )}

      {/* ====== HERO SECTION ====== */}
      <section className="relative px-4 sm:px-6 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(202,20,33,0.18),_transparent_55%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#CA1421] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-md">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F1E8DB]" />
              <span className="text-[#F1E8DB] font-black text-[10px] sm:text-xs uppercase tracking-widest">
                {FOCUS_KEYWORD} - Soporte 24/7
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#F1E8DB] tracking-tighter uppercase mb-4 sm:mb-6 leading-tight sm:leading-none">
              Contacta con <span className="text-[#CA1421]">{BRAND_NAME}</span>
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl text-[#F1E8DB]/80 font-bold max-w-2xl mx-auto leading-relaxed mb-6">
              ¿Tienes preguntas sobre el <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong>? 
              Nuestro equipo del <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> está aquí para ayudarte. 
              <strong className="text-white/70"> {THIRD_FOCUS_KEYWORD}</strong> con total confianza.
            </p>

            {/* Country Flags Row */}
            <div className="w-full flex items-center justify-center">
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
          </FadeIn>
        </div>
      </section>

      {/* ====== CONTACT FORM & SIDEBAR ====== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Form */}
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="bg-[#F1E8DB] border-2 sm:border-4 border-[#CA1421] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl">
                <h2 className="text-xl sm:text-3xl font-black text-[#1A1A1D] uppercase tracking-tight mb-1.5 sm:mb-2">
                  Envíanos un mensaje
                </h2>
                <p className="text-[#CA1421] font-bold text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
                  Completa el formulario y te responderemos del <strong className="text-[#1A1A1D]">{FOCUS_KEYWORD}</strong> en minutos.
                </p>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-black text-[#1A1A1D] uppercase tracking-wide mb-1.5">
                      Nombre Completo <span className="text-[#CA1421]">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#1A1A1D]/40 pointer-events-none" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-black/[0.04] border-2 border-[#1A1A1D]/15 rounded-xl text-[#1A1A1D] text-xs sm:text-sm font-bold placeholder-[#1A1A1D]/40 focus:border-[#CA1421] transition-colors outline-none"
                        placeholder="ej. Juan Pérez"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-black text-[#1A1A1D] uppercase tracking-wide mb-1.5">
                      Email <span className="text-[#CA1421]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#1A1A1D]/40 pointer-events-none" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-black/[0.04] border-2 border-[#1A1A1D]/15 rounded-xl text-[#1A1A1D] text-xs sm:text-sm font-bold placeholder-[#1A1A1D]/40 focus:border-[#CA1421] transition-colors outline-none"
                        placeholder="nombre@ejemplo.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-xs sm:text-sm font-black text-[#1A1A1D] uppercase tracking-wide mb-1.5">
                      Asunto <span className="text-[#CA1421]">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#1A1A1D]/40 pointer-events-none" />
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 sm:pl-12 pr-10 py-3 sm:py-3.5 bg-black/[0.04] border-2 border-[#1A1A1D]/15 rounded-xl text-[#1A1A1D] text-xs sm:text-sm font-bold focus:border-[#CA1421] transition-colors outline-none appearance-none truncate"
                      >
                        <option value="" className="bg-[#F1E8DB]">Selecciona un asunto...</option>
                        <option value="test" className="bg-[#F1E8DB]">Solicitar Prueba Gratuita 24H del {FOCUS_KEYWORD}</option>
                        <option value="setup" className="bg-[#F1E8DB]">Ayuda para Instalar el {SECOND_FOCUS_KEYWORD}</option>
                        <option value="pricing" className="bg-[#F1E8DB]">Preguntas sobre Planes y Precios</option>
                        <option value="technical" className="bg-[#F1E8DB]">Soporte Técnico del {FOCUS_KEYWORD}</option>
                        <option value="billing" className="bg-[#F1E8DB]">Pagos ({THIRD_FOCUS_KEYWORD})</option>
                        <option value="general" className="bg-[#F1E8DB]">Consulta General</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#1A1A1D]/40">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5z"/></svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-black text-[#1A1A1D] uppercase tracking-wide mb-1.5">
                      Mensaje <span className="text-[#CA1421]">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 sm:py-3.5 bg-black/[0.04] border-2 border-[#1A1A1D]/15 rounded-xl text-[#1A1A1D] text-xs sm:text-sm font-bold placeholder-[#1A1A1D]/40 focus:border-[#CA1421] transition-colors outline-none resize-none"
                        placeholder={`Escribe tu consulta sobre el ${FOCUS_KEYWORD}...`}
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#CA1421] to-[#DB4439] text-[#F1E8DB] font-black text-xs sm:text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2 sm:gap-3 ${
                      loading 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:scale-[1.01] active:scale-95 hover:shadow-xl cursor-pointer'
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-[#F1E8DB]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FadeIn>
              <div className="bg-[#F1E8DB] border-2 sm:border-4 border-[#CA1421] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl space-y-5 sm:space-y-6">
                <h3 className="text-lg sm:text-xl font-black text-[#1A1A1D] uppercase tracking-tight mb-4 sm:mb-6">
                  Datos de Contacto
                </h3>
                
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#CA1421]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[#1A1A1D]/50 text-[10px] sm:text-xs uppercase tracking-widest font-black">Email</p>
                    <a href={`mailto:${CONSTANTS.CONTACT.email}`} className="text-[#1A1A1D] hover:text-[#CA1421] transition-colors text-xs sm:text-sm font-bold block truncate">
                      {CONSTANTS.CONTACT.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#CA1421]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[#1A1A1D]/50 text-[10px] sm:text-xs uppercase tracking-widest font-black">WhatsApp</p>
                    <a href={`https://live-support.netlify.app/${cleanPhone}`} target="_blank" rel="noopener noreferrer" className="text-[#1A1A1D] hover:text-[#CA1421] transition-colors text-xs sm:text-sm font-bold block truncate">
                      {CONSTANTS.CONTACT.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-[#CA1421]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[#1A1A1D]/50 text-[10px] sm:text-xs uppercase tracking-widest font-black">Contacto Directo</p>
                    <p className="text-[#1A1A1D] text-xs sm:text-sm font-bold">24/7 Disponible</p>
                    <button 
                      onClick={startWhatsAppChat}
                      className="text-[#CA1421] text-[10px] sm:text-xs font-black uppercase tracking-widest hover:text-[#DB4439] transition-colors mt-1 cursor-pointer block text-left"
                    >
                      Iniciar Chat WhatsApp →
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#CA1421]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[#1A1A1D]/50 text-[10px] sm:text-xs uppercase tracking-widest font-black">Tiempo de Respuesta</p>
                    <p className="text-[#1A1A1D] text-xs sm:text-sm font-bold">En 5 a 15 minutos</p>
                  </div>
                </div>
                
                {/* Badges Grid */}
                <div className="pt-4 sm:pt-6 border-t-2 border-black/10">
                  <p className="text-[#1A1A1D]/50 text-[10px] sm:text-xs uppercase tracking-widest font-black mb-3">Servicio Garantizado</p>
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <div className="bg-black/5 rounded-xl p-2.5 sm:p-3 text-center border border-black/10">
                      <Headphones className="w-4 h-4 sm:w-5 sm:h-5 text-[#CA1421] mx-auto mb-1" />
                      <p className="text-[#1A1A1D] text-[9px] uppercase font-black tracking-wider">Soporte 24/7</p>
                    </div>
                    <div className="bg-black/5 rounded-xl p-2.5 sm:p-3 text-center border border-black/10">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#CA1421] mx-auto mb-1" />
                      <p className="text-[#1A1A1D] text-[9px] uppercase font-black tracking-wider">Seguro</p>
                    </div>
                    <div className="bg-black/5 rounded-xl p-2.5 sm:p-3 text-center border border-black/10">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#CA1421] mx-auto mb-1" />
                      <p className="text-[#1A1A1D] text-[9px] uppercase font-black tracking-wider">Activación Rápida</p>
                    </div>
                    <div className="bg-black/5 rounded-xl p-2.5 sm:p-3 text-center border border-black/10">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#CA1421] mx-auto mb-1" />
                      <p className="text-[#1A1A1D] text-[9px] uppercase font-black tracking-wider">20K+ Clientes</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ====== TRUST BADGES ====== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16 w-full">
        <FadeIn>
          <div className="bg-[#F1E8DB] border-2 sm:border-4 border-[#CA1421] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <LifeBuoy className="w-5 h-5 sm:w-6 sm:h-6 text-[#CA1421]" />
                </div>
                <h4 className="text-[#1A1A1D] font-black text-xs sm:text-sm uppercase tracking-wide">Soporte 24/7</h4>
                <p className="text-[#1A1A1D]/60 text-[10px] sm:text-xs font-bold mt-0.5">Siempre disponible</p>
              </div>
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#CA1421]" />
                </div>
                <h4 className="text-[#1A1A1D] font-black text-xs sm:text-sm uppercase tracking-wide">Respuesta Rápida</h4>
                <p className="text-[#1A1A1D]/60 text-[10px] sm:text-xs font-bold mt-0.5">Directo por WhatsApp</p>
              </div>
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#CA1421]" />
                </div>
                <h4 className="text-[#1A1A1D] font-black text-xs sm:text-sm uppercase tracking-wide">Privacidad</h4>
                <p className="text-[#1A1A1D]/60 text-[10px] sm:text-xs font-bold mt-0.5">Conexión segura</p>
              </div>
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#CA1421]" />
                </div>
                <h4 className="text-[#1A1A1D] font-black text-xs sm:text-sm uppercase tracking-wide">Mejor Servicio</h4>
                <p className="text-[#1A1A1D]/60 text-[10px] sm:text-xs font-bold mt-0.5">#1 en España</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ====== FAQ MINI ====== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-20 w-full">
        <FadeIn className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-[#F1E8DB] mb-2 sm:mb-3 uppercase tracking-tight">
            Preguntas <span className="text-[#CA1421]">Frecuentes</span>
          </h2>
          <p className="text-[#F1E8DB]/70 font-bold text-xs sm:text-base">Respuestas sobre el <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong></p>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {[
            {
              q: `¿Cómo contacto más rápido con el ${FOCUS_KEYWORD}?`,
              a: `Para atención inmediata del ${FOCUS_KEYWORD}, envía un mensaje por WhatsApp al ${CONSTANTS.CONTACT.phone}. El equipo del ${SECOND_FOCUS_KEYWORD} responde en minutos.`
            },
            {
              q: `¿Ofrecen ayuda para instalar el ${SECOND_FOCUS_KEYWORD}?`,
              a: `Sí, nuestros técnicos del ${FOCUS_KEYWORD} te guían paso a paso para configurar el ${SECOND_FOCUS_KEYWORD} en Smart TV, Firestick o Android.`
            },
            {
              q: `¿Puedo solicitar una prueba del ${FOCUS_KEYWORD}?`,
              a: `¡Claro! Solicita una prueba gratuita de 24H del ${FOCUS_KEYWORD} por WhatsApp. Prueba todos los canales del ${SECOND_FOCUS_KEYWORD} sin compromiso.`
            },
            {
              q: `¿Cómo recibo mis datos del ${SECOND_FOCUS_KEYWORD}?`,
              a: `Al ${THIRD_FOCUS_KEYWORD}, recibes tu enlace M3U y códigos Xtream del ${FOCUS_KEYWORD} en 5 minutos por email y WhatsApp.`
            }
          ].map((faq, idx) => (
            <FadeInItem key={idx} className="bg-[#F1E8DB] border-2 sm:border-4 border-[#CA1421] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl transition-all">
              <h3 className="text-[#1A1A1D] font-black text-xs sm:text-base uppercase tracking-tight mb-1.5 sm:mb-2">{faq.q}</h3>
              <p className="text-[#1A1A1D]/80 text-xs sm:text-sm font-bold leading-relaxed">{faq.a}</p>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* Back Link */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#CA1421] hover:text-[#F1E8DB] transition-colors font-black text-xs uppercase tracking-widest"
          >
            ← Volver al {FOCUS_KEYWORD}
          </Link>
        </div>
      </section>

      <style jsx global>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-up {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-slide-in { animation: slide-in 0.4s ease-out; }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-scale-up { animation: scale-up 0.4s ease-out; }
      `}</style>
    </div>
  );
}