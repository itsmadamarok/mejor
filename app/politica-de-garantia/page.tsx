// app/politica-de-garantia/page.tsx - Versión Optimizada con SEO y Flags
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { 
  RefreshCw, 
  ShieldCheck, 
  CheckCircle, 
  AlertCircle, 
  Mail, 
  MessageSquare,
  Wrench,
  Wifi,
  FileCheck,
  Lock,
  Headphones,
  Star,
  Server,
  HelpCircle,
  CreditCard
} from 'lucide-react';

// ============ KEYWORDS FROM SEO.TS ============
const { FOCUS_KEYWORD, SECOND_FOCUS_KEYWORD, THIRD_FOCUS_KEYWORD, BRAND_NAME, DOMAIN } = CONSTANTS;

export const metadata = generateSEOMetadata(
  `Garantía y Política de Reembolso del ${FOCUS_KEYWORD}`,
  `Conoce la garantía de 7 días del ${FOCUS_KEYWORD}. El ${SECOND_FOCUS_KEYWORD} ofrece reembolso por problemas técnicos. ${THIRD_FOCUS_KEYWORD} con total confianza y seguridad.`,
  '/politica-de-garantia'
);

export default function RefundPolicyPage() {
  const cleanPhone = (CONSTANTS.CONTACT.phone || '+31612345678').replace(/[^0-9]/g, '');

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-[#F1E8DB]">
      
      {/* ====== HERO SECTION ====== */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(202,20,33,0.15),_transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#CA142108_1px,transparent_1px),linear-gradient(to_bottom,#CA142108_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#CA1421] px-4 py-2 rounded-full mb-6 shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#F1E8DB]" />
            <span className="text-[#F1E8DB] font-black text-xs uppercase tracking-widest">
              {FOCUS_KEYWORD} - Garantía Verificada
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#F1E8DB] uppercase tracking-tighter leading-none mb-6">
            Garantía & <span className="text-[#CA1421]">Reembolso</span>
          </h1>
          <p className="text-lg md:text-xl text-[#F1E8DB]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            El <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> ofrece una garantía de 7 días. 
            Nuestro <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> está respaldado por servidores premium. 
            <strong className="text-white/70"> {THIRD_FOCUS_KEYWORD}</strong> con total tranquilidad.
          </p>
          <p className="text-xs text-[#F1E8DB]/40 mt-4 font-bold uppercase tracking-wider">
            Última actualización: Enero 2026
          </p>
        </div>
      </section>

      {/* ====== MAIN CONTENT ====== */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        
        {/* Trust Banner */}
        <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/15 flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-[#CA1421]" />
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-[#1A1A1D] uppercase tracking-tight mb-1">
                Garantía de Calidad de 7 Días del {FOCUS_KEYWORD}
              </h2>
              <p className="text-[#1A1A1D] font-bold text-sm md:text-base leading-relaxed">
                El <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> ofrece streams en 4K y Full HD. 
                Nuestro <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> garantiza la mejor experiencia. 
                Al <strong className="text-[#CA1421]">{THIRD_FOCUS_KEYWORD}</strong>, confías en un servicio premium.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Policy Sections */}
        <div className="space-y-10">
          
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Alcance de la Garantía del {FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              El <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> ofrece reembolso si el servicio no funciona por problemas técnicos en nuestros servidores. 
              Nuestro <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> tiene servidores de alto rendimiento con 99.9% uptime. 
              Al <strong className="text-white/70">{THIRD_FOCUS_KEYWORD}</strong>, estás protegido bajo los siguientes criterios:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "La solicitud debe presentarse dentro de los primeros 7 días calendarios posteriores a la compra.",
                "Debe comprobarse una falla técnica persistente en la infraestructura del servidor principal.",
                `Nuestro soporte técnico del ${FOCUS_KEYWORD} ha intentado resolver la falla mediante reconfiguración dentro de 24 horas sin éxito.`,
                `El usuario ha seguido las pruebas estándar recomendadas para el ${SECOND_FOCUS_KEYWORD}.`
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#F1E8DB]/80 font-bold text-sm md:text-base">
                  <CheckCircle className="w-5 h-5 text-[#CA1421] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Excepciones del {FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              El <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> no ofrece reembolso en situaciones ajenas al control directo de nuestra infraestructura. 
              Nuestro <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> especifica claramente las exenciones:
            </p>

            <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#CA1421]/10 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-[#CA1421]" />
                  </div>
                </div>
                <div>
                  <ul className="space-y-2.5 text-[#1A1A1D] text-xs sm:text-sm font-bold leading-relaxed">
                    <li>• <strong>Preferencia personal:</strong> Solicitudes basadas en cambios de parecer sobre listas de contenido o interfaz de aplicaciones de terceros.</li>
                    <li>• <strong>Problemas de red local:</strong> Caídas o fluctuaciones de velocidad causadas por el proveedor de Internet (ISP) o conexión WiFi inestable.</li>
                    <li>• <strong>Incompatibilidad no declarada:</strong> Intentos de uso en dispositivos antiguos no soportados sin consultar previamente a soporte.</li>
                    <li>• <strong>Cambios temporales de programación:</strong> Ajustes de canales o eventos en vivo por transmisiones internacionales.</li>
                    <li>• <strong>Sanciones por infracción:</strong> Cuentas suspendidas debido a violaciones de términos como el compartir credenciales en múltiples ubicaciones sin plan multipantalla.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Procedimiento de Diagnóstico del {SECOND_FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              El <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> ejecuta un análisis completo antes de autorizar cualquier devolución. 
              Garantizamos que la mayoría de incidencias se solucionan en minutos sin requerir un reembolso.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-between">
                <div>
                  <Wrench className="w-6 h-6 text-[#CA1421] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#F1E8DB] mb-1">1. Verificación Técnica</h4>
                  <p className="text-xs text-[#F1E8DB]/60 font-medium">Validación del estado de la suscripción, lista M3U y credenciales XC del {FOCUS_KEYWORD}.</p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-between">
                <div>
                  <Wifi className="w-6 h-6 text-[#CA1421] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#F1E8DB] mb-1">2. Optimización de Ruta</h4>
                  <p className="text-xs text-[#F1E8DB]/60 font-medium">Reasignación de servidor o cambio de DNS para sobrepasar bloqueos de ISP local en el {SECOND_FOCUS_KEYWORD}.</p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-between">
                <div>
                  <FileCheck className="w-6 h-6 text-[#CA1421] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#F1E8DB] mb-1">3. Dictamen Final</h4>
                  <p className="text-xs text-[#F1E8DB]/60 font-medium">Procesamiento del reembolso en caso de falla irreparable dentro del compromiso del {THIRD_FOCUS_KEYWORD}.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ====== NEW EXTENDED SECTION: COMPATIBILITY & REQUIREMENTS ====== */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Requisitos de Red y Compatibilidad
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              Para validar una reclamación bajo la garantía del <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong>, el entorno técnico del usuario debe cumplir con los requerimientos mínimos de funcionamiento:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Server className="w-5 h-5 text-[#CA1421]" />
                  <h3 className="font-bold text-sm text-[#F1E8DB]">Ancho de Banda Mínimo</h3>
                </div>
                <p className="text-xs text-[#F1E8DB]/70 leading-relaxed font-medium">
                  Se requiere una velocidad estable de al menos 25 Mbps para contenido Full HD y 50 Mbps dedicados para transmisiones en 4K UHD del {SECOND_FOCUS_KEYWORD}.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <HelpCircle className="w-5 h-5 text-[#CA1421]" />
                  <h3 className="font-bold text-sm text-[#F1E8DB]">Aplicaciones Soportadas</h3>
                </div>
                <p className="text-xs text-[#F1E8DB]/70 leading-relaxed font-medium">
                  Configuración en reproductores recomendados (IPTV Smarters, IBO Player, TiviMate, FlixIPTV) en Android, Smart TV o Firestick para garantizar el óptimo rendimiento del {FOCUS_KEYWORD}.
                </p>
              </div>
            </div>
          </section>

          {/* ====== NEW EXTENDED SECTION: REFUND TIMELINE & PAYMENTS ====== */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Tiempos y Métodos de Devolución
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              Una vez aprobada la solicitud por nuestro equipo, la devolución del saldo por la contratación del <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> se efectúa conforme a las reglas del método de pago utilizado:
            </p>
            <div className="bg-[#F1E8DB] border-4 border-green-600 rounded-3xl p-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-green-600/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[#1A1A1D] font-black uppercase tracking-wide text-sm mb-1">
                    Plazos de Acreditación del {SECOND_FOCUS_KEYWORD}
                  </h3>
                  <p className="text-[#1A1A1D] text-xs sm:text-sm font-bold leading-relaxed">
                    • <strong>Tarjetas de Crédito / Débito:</strong> De 2 a 5 días hábiles según la entidad bancaria.<br />
                    • <strong>Transferencias y Cripto:</strong> Procesamiento dentro de 24 horas hábiles tras la aprobación.<br />
                    • <strong>Gastos Administrativos:</strong> No aplicamos comisiones de cancelación ni cargos ocultos en el reembolso.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Solicitud de Reembolso del {FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-6">
              El <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> procesa reembolsos rápidamente tras la verificación. 
              Nuestro <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> ofrece canales de comunicación dedicados para atención inmediata.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#CA1421]/10 flex items-center justify-center mb-3">
                    <MessageSquare className="w-5 h-5 text-[#CA1421]" />
                  </div>
                  <h3 className="text-lg font-black text-[#1A1A1D] uppercase tracking-tight mb-1">
                    Soporte WhatsApp del {FOCUS_KEYWORD}
                  </h3>
                  <p className="text-[#1A1A1D]/80 text-xs sm:text-sm font-bold leading-relaxed mb-4">
                    Contacta con nuestro equipo del <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> para diagnóstico rápido en vivo.
                  </p>
                </div>
                <a
                  href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hola ${BRAND_NAME}, necesito ayuda con mi ${SECOND_FOCUS_KEYWORD}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 rounded-full bg-[#CA1421] text-[#F1E8DB] font-black text-xs uppercase tracking-wider hover:bg-[#DB4439] transition-all"
                >
                  Iniciar Diagnóstico →
                </a>
              </div>

              <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#CA1421]/10 flex items-center justify-center mb-3">
                    <Mail className="w-5 h-5 text-[#CA1421]" />
                  </div>
                  <h3 className="text-lg font-black text-[#1A1A1D] uppercase tracking-tight mb-1">
                    Email del {SECOND_FOCUS_KEYWORD}
                  </h3>
                  <p className="text-[#1A1A1D]/80 text-xs sm:text-sm font-bold leading-relaxed mb-4">
                    Envía tu solicitud formal de reembolso del <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> adjuntando comprobante.
                  </p>
                </div>
                <a
                  href={`mailto:support@${DOMAIN}?subject=Solicitud%20de%20Reembolso%20${FOCUS_KEYWORD}`}
                  className="w-full text-center py-3 rounded-full bg-[#1A1A1D] text-[#F1E8DB] font-black text-xs uppercase tracking-wider border-2 border-[#CA1421] hover:bg-white/5 transition-all"
                >
                  Enviar Solicitud →
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-6 h-6 text-[#CA1421]" />
              </div>
              <p className="text-[#F1E8DB]/60 text-xs font-bold uppercase tracking-widest">{FOCUS_KEYWORD} - Garantía</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6 text-[#CA1421]" />
              </div>
              <p className="text-[#F1E8DB]/60 text-xs font-bold uppercase tracking-widest">{THIRD_FOCUS_KEYWORD} Seguro</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center mx-auto mb-3">
                <Headphones className="w-6 h-6 text-[#CA1421]" />
              </div>
              <p className="text-[#F1E8DB]/60 text-xs font-bold uppercase tracking-widest">Soporte {SECOND_FOCUS_KEYWORD}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-[#CA1421]" />
              </div>
              <p className="text-[#F1E8DB]/60 text-xs font-bold uppercase tracking-widest">{FOCUS_KEYWORD} - Confianza</p>
            </div>
          </div>
        </div>

        {/* Support CTA Banner */}
        <div className="mt-12 text-center">
          <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-black text-[#1A1A1D] uppercase tracking-tight mb-2">
              ¿Necesitas ayuda con el {FOCUS_KEYWORD}?
            </h3>
            <p className="text-[#CA1421] font-bold text-sm md:text-base max-w-md mx-auto mb-6">
              El <strong className="text-[#1A1A1D]">{FOCUS_KEYWORD}</strong> resuelve el 99% de los problemas en minutos. 
              Nuestro <strong className="text-[#1A1A1D]">{SECOND_FOCUS_KEYWORD}</strong> está aquí para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#CA1421] text-[#F1E8DB] font-black text-xs uppercase tracking-widest hover:bg-[#DB4439] transition-all shadow-md"
              >
                Contactar Soporte
              </Link>
              <Link 
                href="/instalacion" 
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#1A1A1D] text-[#F1E8DB] font-black text-xs uppercase tracking-widest border-2 border-[#CA1421] hover:bg-white/5 transition-all"
              >
                Guía de Instalación
              </Link>
            </div>
          </div>
        </div>

        {/* Return Pathway */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-[#CA1421] hover:text-[#F1E8DB] transition-colors font-black text-xs uppercase tracking-widest">
            ← Volver al {FOCUS_KEYWORD}
          </Link>
        </div>
      </div>
    </div>
  );
}