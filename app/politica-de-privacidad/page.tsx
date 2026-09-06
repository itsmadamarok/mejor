// app/politica-de-privacidad/page.tsx - Versión Optimizada con SEO y Flags
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, Mail, CheckCircle, Server, Users, Star } from 'lucide-react';

// ============ KEYWORDS FROM SEO.TS ============
const { FOCUS_KEYWORD, SECOND_FOCUS_KEYWORD, THIRD_FOCUS_KEYWORD, BRAND_NAME, DOMAIN } = CONSTANTS;

export const metadata = generateSEOMetadata(
  `Política de Privacidad | ${FOCUS_KEYWORD} - Protección de Datos`,
  `Conoce la política de privacidad del ${FOCUS_KEYWORD}. El ${SECOND_FOCUS_KEYWORD} protege tus datos según GDPR. ${THIRD_FOCUS_KEYWORD} con total seguridad y confianza.`,
  '/politica-de-privacidad'
);

export default function PrivacyPage() {
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
              {FOCUS_KEYWORD} - Protección de Datos
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#F1E8DB] uppercase tracking-tighter leading-none mb-6">
            Política de <span className="text-[#CA1421]">Privacidad</span>
          </h1>
          <p className="text-lg md:text-xl text-[#F1E8DB]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            El <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> protege tu privacidad. 
            Nuestro <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> cumple con GDPR. 
            <strong className="text-white/70"> {THIRD_FOCUS_KEYWORD}</strong> con total seguridad.
          </p>
          <p className="text-xs text-[#F1E8DB]/40 mt-4 font-bold uppercase tracking-wider">
            Última actualización: Enero 2026
          </p>
        </div>
      </section>

      {/* ====== MAIN CONTENT ====== */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        
        {/* Commitment Card */}
        <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-[#CA1421]" />
              </div>
            </div>
            <div>
              <p className="text-[#1A1A1D] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#CA1421] font-black uppercase tracking-wide block mb-1">Compromiso de Privacidad del {FOCUS_KEYWORD}:</span> 
                El <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> trata tus datos con total confidencialidad. 
                Nuestro <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> cumple con GDPR. 
                Al <strong className="text-[#CA1421]">{THIRD_FOCUS_KEYWORD}</strong>, tu privacidad está garantizada.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Text Body */}
        <div className="space-y-10">
          
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Datos que Recopila el {FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              El <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> recopila datos mínimos para tu {SECOND_FOCUS_KEYWORD}. 
              Al <strong className="text-white/70">{THIRD_FOCUS_KEYWORD}</strong>, confías en nosotros.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                `Email y/o WhatsApp para enviar tus credenciales del ${SECOND_FOCUS_KEYWORD}.`,
                `Verificación de pago al ${THIRD_FOCUS_KEYWORD} (no almacenamos datos bancarios).`,
                `Dirección IP y tipo de dispositivo del ${FOCUS_KEYWORD} para conexión segura.`,
                `Duración del plan y número de pantallas del ${SECOND_FOCUS_KEYWORD}.`,
                `Historial de comunicaciones del ${FOCUS_KEYWORD} para mejor soporte.`
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
                    <Eye className="w-5 h-5 text-[#CA1421]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#1A1A1D] text-sm font-bold leading-relaxed">
                    <span className="text-[#CA1421] font-black uppercase tracking-wide block mb-0.5">Lo que NO Recopila el {FOCUS_KEYWORD}:</span> 
                    El <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> no registra tu historial de visualización. 
                    Tu actividad en el <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> es 100% privada.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Uso de tus Datos en el {SECOND_FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              El <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> usa tus datos para:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                `Activar tu M3U y códigos Xtream del ${SECOND_FOCUS_KEYWORD} inmediatamente.`,
                `Procesar pagos seguros al ${THIRD_FOCUS_KEYWORD} con el ${FOCUS_KEYWORD}.`,
                `Proveer soporte técnico del ${SECOND_FOCUS_KEYWORD} por WhatsApp y email.`,
                `Informar sobre mantenimiento del ${FOCUS_KEYWORD} y actualizaciones.`,
                `Mantener la estabilidad del ${SECOND_FOCUS_KEYWORD} y prevenir abusos.`
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
              Seguridad de Datos del {FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              El <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> implementa medidas de seguridad avanzadas:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                `Cifrado SSL/TLS 256-bit en todas las conexiones del ${SECOND_FOCUS_KEYWORD}.`,
                `Servidores aislados del ${FOCUS_KEYWORD} para prevenir ataques DDoS.`,
                `Acceso restringido a datos del ${SECOND_FOCUS_KEYWORD} solo a personal autorizado.`,
                `Sin almacenamiento de datos bancarios al ${THIRD_FOCUS_KEYWORD} con nosotros.`
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
                    <Server className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="text-[#1A1A1D] text-sm font-bold leading-relaxed">
                    <span className="text-green-600 font-black uppercase tracking-wide block mb-0.5">Sin Venta de Datos:</span> 
                    El <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong> nunca vende tus datos. 
                    Tu privacidad en el <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> es nuestra prioridad.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Cookies y Almacenamiento del {FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed">
              El <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> usa cookies funcionales y anónimas. 
              Nuestro <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> optimiza la experiencia. 
              Puedes desactivar cookies al {THIRD_FOCUS_KEYWORD} desde tu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Tus Derechos GDPR en el {SECOND_FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              El <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> garantiza tus derechos como usuario:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                `Derecho de acceso a tus datos del ${SECOND_FOCUS_KEYWORD}.`,
                `Derecho de rectificación de tus datos del ${FOCUS_KEYWORD}.`,
                `Derecho de eliminación de tu cuenta del ${SECOND_FOCUS_KEYWORD}.`,
                `Derecho de limitación y portabilidad de tus datos.`
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
              Contacto de Privacidad del {FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              ¿Preguntas sobre privacidad del <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong>? 
              Contacta con nuestro delegado de protección de datos del <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong>:
            </p>
            <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 my-6 text-center shadow-xl">
              <Mail className="w-8 h-8 text-[#CA1421] mx-auto mb-2" />
              <p className="text-xs uppercase font-black text-[#1A1A1D]/60 tracking-widest mb-1">Departamento de Privacidad del {FOCUS_KEYWORD}</p>
              <a 
                href={`mailto:privacy@${DOMAIN}`} 
                className="text-[#1A1A1D] font-black text-xl md:text-2xl hover:text-[#CA1421] transition-colors"
              >
                privacy@{DOMAIN}
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
              <p className="text-[#F1E8DB]/60 text-xs font-bold uppercase tracking-widest">{FOCUS_KEYWORD} - Protección</p>
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