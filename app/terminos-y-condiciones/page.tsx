// app/terminos-y-condiciones/page.tsx - Versión Optimizada con SEO y Flags
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  CreditCard, 
  UserCheck, 
  Ban, 
  RefreshCw, 
  Mail, 
  Scale, 
  ShieldCheck,
  Lock,
  Users,
  Star
} from 'lucide-react';

// ============ KEYWORDS FROM SEO.TS ============
const { FOCUS_KEYWORD, SECOND_FOCUS_KEYWORD, THIRD_FOCUS_KEYWORD, BRAND_NAME, DOMAIN } = CONSTANTS;

export const metadata = generateSEOMetadata(
  `Términos y Condiciones | ${FOCUS_KEYWORD} - Políticas del Servicio`,
  `Conoce los términos y condiciones del ${FOCUS_KEYWORD}. El ${SECOND_FOCUS_KEYWORD} ofrece transparencia total. ${THIRD_FOCUS_KEYWORD} con garantía y confianza.`,
  '/terminos-y-condiciones'
);

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-[#F1E8DB]">
      
      {/* ====== HERO SECTION ====== */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(202,20,33,0.15),_transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#CA142108_1px,transparent_1px),linear-gradient(to_bottom,#CA142108_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#CA1421] px-4 py-2 rounded-full mb-6 shadow-md">
            <Scale className="w-4 h-4 text-[#F1E8DB]" />
            <span className="text-[#F1E8DB] font-black text-xs uppercase tracking-widest">
              {FOCUS_KEYWORD} - Términos Legales
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#F1E8DB] uppercase tracking-tighter leading-none mb-6">
            Términos y <span className="text-[#CA1421]">Condiciones</span>
          </h1>
          <p className="text-lg md:text-xl text-[#F1E8DB]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            Lee los términos del <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong>. 
            Nuestro <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> es claro y transparente. 
            <strong className="text-white/70"> {THIRD_FOCUS_KEYWORD}</strong> con total confianza.
          </p>
          <p className="text-xs text-[#F1E8DB]/40 mt-4 font-bold uppercase tracking-wider">
            Última actualización: Enero 2026
          </p>
        </div>
      </section>

      {/* ====== MAIN CONTENT ====== */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        
        {/* Acceptance Box */}
        <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#CA1421]" />
              </div>
            </div>
            <div>
              <p className="text-[#1A1A1D] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#CA1421] font-black uppercase tracking-wide block mb-1">Aceptación de Términos del {FOCUS_KEYWORD}:</span> 
                Al contratar el <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> o utilizar nuestro <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong>, 
                aceptas estos términos. Al <strong className="text-[#CA1421]">{THIRD_FOCUS_KEYWORD}</strong>, confirmas tu acuerdo.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Sections */}
        <div className="space-y-10">
          
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Descripción del Servicio {FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed">
              El <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> ofrece streaming IPTV digital. 
              Nuestro <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> incluye canales en vivo y VOD. 
              Al <strong className="text-white/70">{THIRD_FOCUS_KEYWORD}</strong>, accedes a contenido premium para uso personal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Responsabilidades del Usuario del {SECOND_FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              Al usar el <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong>, garantizas que:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                `Eres mayor de 18 años y tienes capacidad legal para contratar el ${SECOND_FOCUS_KEYWORD}.`,
                `Proporcionas datos correctos al ${THIRD_FOCUS_KEYWORD} con el ${FOCUS_KEYWORD}.`,
                `Mantienes confidenciales tus credenciales del ${SECOND_FOCUS_KEYWORD}.`,
                `No usas el ${FOCUS_KEYWORD} para retransmisiones comerciales.`,
                `Tienes conexión de al menos 25 Mbps para el ${SECOND_FOCUS_KEYWORD} en 4K.`
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#F1E8DB]/80 font-bold text-sm md:text-base">
                  <CheckCircle className="w-5 h-5 text-[#CA1421] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#CA1421]/10 flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-[#CA1421]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#1A1A1D] text-sm font-bold leading-relaxed">
                    <span className="text-[#CA1421] font-black uppercase tracking-wide block mb-0.5">Seguridad de Cuenta del {FOCUS_KEYWORD}:</span> 
                    Eres responsable de tu cuenta del <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong>. 
                    El {FOCUS_KEYWORD} no se hace responsable por usos no autorizados.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Planes, Precios y Pagos del {FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              Los planes del <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> están en nuestra página de precios. 
              Al <strong className="text-[#CA1421]">{THIRD_FOCUS_KEYWORD}</strong>, aceptas:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                `Pagos anticipados del ${SECOND_FOCUS_KEYWORD} por métodos seguros.`,
                `Sin renovación automática del ${FOCUS_KEYWORD} (tú decides cuándo renovar).`,
                `Activación inmediata del ${SECOND_FOCUS_KEYWORD} tras confirmación de pago.`,
                `Precios del ${FOCUS_KEYWORD} incluyen todos los impuestos aplicables.`
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#F1E8DB]/80 font-bold text-sm md:text-base">
                  <CheckCircle className="w-5 h-5 text-[#CA1421] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#F1E8DB] border-4 border-green-600 rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-green-600/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="text-[#1A1A1D] text-sm font-bold leading-relaxed">
                    <span className="text-green-600 font-black uppercase tracking-wide block mb-0.5">Pago Seguro del {FOCUS_KEYWORD}:</span> 
                    Todas las transacciones del <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> usan cifrado SSL 256-bit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Uso Aceptable del {SECOND_FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              El <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> prohíbe el uso indebido:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                `Revender o restreamear las líneas del ${SECOND_FOCUS_KEYWORD}.`,
                `Streaming simultáneo en más dispositivos que los permitidos por el plan del ${FOCUS_KEYWORD}.`,
                `Intentos de hackeo o sobrecarga de servidores del ${SECOND_FOCUS_KEYWORD}.`,
                `Descarga o redistribución de contenido del ${FOCUS_KEYWORD}.`,
                `Cualquier uso ilegal del ${SECOND_FOCUS_KEYWORD} según la ley aplicable.`
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#F1E8DB]/80 font-bold text-sm md:text-base">
                  <Ban className="w-5 h-5 text-[#CA1421] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#CA1421]/10 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-[#CA1421]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#1A1A1D] text-sm font-bold leading-relaxed">
                    <span className="text-[#CA1421] font-black uppercase tracking-wide block mb-0.5">Consecuencias del Abuso del {FOCUS_KEYWORD}:</span> 
                    El <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> puede bloquear cuentas sin reembolso por violación de estos términos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Garantía de 7 Días del {FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              El <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> ofrece garantía de satisfacción de 7 días. 
              Si el <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> no cumple tus expectativas, 
              puedes solicitar reembolso al {THIRD_FOCUS_KEYWORD} dentro de los 7 días.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Disponibilidad del {SECOND_FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              El <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> garantiza 99.9% uptime. 
              El <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> puede tener mantenimientos programados. 
              Al {THIRD_FOCUS_KEYWORD}, aceptas que los canales pueden cambiar.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                `Actualización de listas del ${SECOND_FOCUS_KEYWORD} para mejor calidad.`,
                `Mantenimiento programado del ${FOCUS_KEYWORD} fuera de horas pico.`,
                `Cambios de precios del ${SECOND_FOCUS_KEYWORD} para nuevos planes.`
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#F1E8DB]/80 font-bold text-sm md:text-base">
                  <RefreshCw className="w-5 h-5 text-[#CA1421] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Propiedad Intelectual del {FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed">
              Todos los derechos del <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> son propiedad de {BRAND_NAME}. 
              El <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> no se hace responsable por daños indirectos. 
              Al {THIRD_FOCUS_KEYWORD}, aceptas estos términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Contacto del {SECOND_FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              Para consultas sobre el <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> o soporte del <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong>:
            </p>
            <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 my-6 text-center shadow-xl">
              <Mail className="w-8 h-8 text-[#CA1421] mx-auto mb-2" />
              <p className="text-xs uppercase font-black text-[#1A1A1D]/60 tracking-widest mb-1">Departamento Legal del {FOCUS_KEYWORD}</p>
              <a 
                href={`mailto:legal@${DOMAIN}`} 
                className="text-[#1A1A1D] font-black text-xl md:text-2xl hover:text-[#CA1421] transition-colors"
              >
                legal@{DOMAIN}
              </a>
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
              <p className="text-[#F1E8DB]/60 text-xs font-bold uppercase tracking-widest">{FOCUS_KEYWORD} - Transparencia</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6 text-[#CA1421]" />
              </div>
              <p className="text-[#F1E8DB]/60 text-xs font-bold uppercase tracking-widest">{THIRD_FOCUS_KEYWORD} Seguro</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-[#CA1421]" />
              </div>
              <p className="text-[#F1E8DB]/60 text-xs font-bold uppercase tracking-widest">Clientes del {SECOND_FOCUS_KEYWORD}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-[#CA1421]" />
              </div>
              <p className="text-[#F1E8DB]/60 text-xs font-bold uppercase tracking-widest">{FOCUS_KEYWORD} - Confianza</p>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-[#CA1421] hover:text-[#F1E8DB] transition-colors font-black text-xs uppercase tracking-widest">
            ← Volver al {FOCUS_KEYWORD}
          </Link>
        </div>
      </div>
    </div>
  );
}