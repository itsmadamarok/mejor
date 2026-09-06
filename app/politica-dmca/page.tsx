// app/politica-dmca/page.tsx - Versión Optimizada con SEO y Flags
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ShieldCheck, Mail, AlertCircle, CheckCircle, ArrowRight, Lock, Headphones, Users } from 'lucide-react';

// ============ KEYWORDS FROM SEO.TS ============
const { FOCUS_KEYWORD, SECOND_FOCUS_KEYWORD, THIRD_FOCUS_KEYWORD, BRAND_NAME, DOMAIN } = CONSTANTS;

export const metadata = generateSEOMetadata(
  `Política DMCA y Derechos de Autor | ${BRAND_NAME}`,
  `Conoce la política DMCA y de derechos de autor de ${BRAND_NAME}, el ${FOCUS_KEYWORD}. Información sobre protección de contenido y procedimientos de eliminación para tu ${SECOND_FOCUS_KEYWORD}.`,
  '/politica-dmca'
);

export default function DMCAPage() {
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
              {FOCUS_KEYWORD} - Protección Legal
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#F1E8DB] uppercase tracking-tighter leading-none mb-6">
            DMCA <span className="text-[#CA1421]">y Derechos de Autor</span>
          </h1>
          <p className="text-lg md:text-xl text-[#F1E8DB]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            El <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> respeta los derechos de propiedad intelectual. 
            Nuestro <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> cumple strictly con la DMCA. 
            <strong className="text-white/70"> {THIRD_FOCUS_KEYWORD}</strong> con total transparencia y legalidad.
          </p>
        </div>
      </section>

      {/* ====== CTA BANNER ====== */}
      <section className="w-full bg-gradient-to-r from-[#CA1421] via-[#DB4439] to-[#CA1421] py-10 px-4 sm:px-6 border-y-4 border-[#F1E8DB]/20 shadow-[0_0_50px_rgba(202,20,33,0.4)] relative z-20 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="bg-[#F1E8DB] text-[#CA1421] font-black text-xs px-5 py-2 rounded-full uppercase tracking-widest shadow-md">
            {FOCUS_KEYWORD} - Compromiso Legal
          </div>
          <h2 className="text-[#F1E8DB] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            {THIRD_FOCUS_KEYWORD} CON TRANSPARENCIA
          </h2>
          <p className="text-[#F1E8DB]/90 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            El <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> opera con total legalidad. 
            Nuestro <strong className="text-white">{SECOND_FOCUS_KEYWORD}</strong> respeta todos los derechos de autor.
          </p>
          <div className="w-full sm:w-auto mt-2">
            <Link
              href="/planes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#F1E8DB] text-[#1A1A1D] hover:bg-[#1A1A1D] hover:text-[#F1E8DB] hover:scale-105 transition-all duration-300 px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl"
            >
              <span>{THIRD_FOCUS_KEYWORD} - Ver Planes</span>
              <ArrowRight className="w-5 h-5 text-[#CA1421]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== MAIN CONTENT ====== */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        
        {/* Notice Card */}
        <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-[#CA1421]" />
              </div>
            </div>
            <div>
              <p className="text-[#1A1A1D] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#CA1421] font-black uppercase tracking-wide block mb-1">Aviso Importante:</span> 
                {BRAND_NAME}, el <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong>, no aloja ni gestiona archivos multimedia en sus servidores. 
                Nuestro <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> solo indexa y organiza streams públicos. 
                Al <strong className="text-[#CA1421]">{THIRD_FOCUS_KEYWORD}</strong>, aceptas nuestros términos legales.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Text Body */}
        <div className="space-y-10">
          
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              {FOCUS_KEYWORD} - Cumplimiento de Derechos de Autor
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed">
              {BRAND_NAME}, el <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong>, respeta los derechos de propiedad intelectual. 
              Nuestro <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> cumple con la DMCA y la legislación europea. 
              Al <strong className="text-white/70">{THIRD_FOCUS_KEYWORD}</strong>, aceptas estas condiciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              ¿Qué No Aloja el {FOCUS_KEYWORD}?
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              Es esencial entender que <strong className="text-[#FFC400]">{BRAND_NAME}</strong>, el <strong className="text-[#CA1421]">{FOCUS_KEYWORD}</strong>, 
              no transmite, almacena ni aloja archivos multimedia en sus servidores. Nuestro <strong className="text-white/70">{SECOND_FOCUS_KEYWORD}</strong> 
              solo indexa enlaces públicos.
            </p>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed">
              Al <strong className="text-[#CA1421]">{THIRD_FOCUS_KEYWORD}</strong>, entiendes que el {FOCUS_KEYWORD} actúa como interfaz técnica. 
              No tenemos control sobre el contenido de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Notificación de Infracción (DMCA Takedown)
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed">
              Si eres propietario legítimo de derechos de autor del <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> 
              y consideras que contenido en nuestro <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> infringe tus derechos, 
              puedes presentar una notificación DMCA. El {FOCUS_KEYWORD} actuará con diligencia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              Procedimiento para {THIRD_FOCUS_KEYWORD} y Solicitudes
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-6">
              Para presentar una solicitud DMCA al <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong>, 
              contacta con nuestro departamento legal del <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong>:
            </p>
            
            {/* Contact Email Box */}
            <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 my-6 text-center shadow-xl">
              <Mail className="w-8 h-8 text-[#CA1421] mx-auto mb-2" />
              <p className="text-xs uppercase font-black text-[#1A1A1D]/60 tracking-widest mb-1">Departamento Legal del {FOCUS_KEYWORD}</p>
              <a 
                href={`mailto:dmca@${DOMAIN}`} 
                className="text-[#1A1A1D] font-black text-xl md:text-2xl hover:text-[#CA1421] transition-colors"
              >
                dmca@{DOMAIN}
              </a>
            </div>

            <p className="text-[#F1E8DB]/80 text-bold font-bold mb-4">
              Tu notificación del <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong> debe incluir:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "Firma física o electrónica del propietario de derechos del contenido.",
                "Identificación clara del trabajo protegido por derechos de autor.",
                "Enlaces exactos o referencias a eliminar del directorio.",
                "Datos de contacto: nombre, dirección, teléfono y email.",
                "Declaración de buena fe sobre el uso no autorizado.",
                "Declaración de precisión de la información bajo juramento."
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
              Infractores Reincidentes del {SECOND_FOCUS_KEYWORD}
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed">
              {BRAND_NAME}, el <strong className="text-[#FFC400]">{FOCUS_KEYWORD}</strong>, aplica una política estricta. 
              Las cuentas de usuarios del <strong className="text-[#CA1421]">{SECOND_FOCUS_KEYWORD}</strong> que infrinjan repetidamente 
              derechos de autor serán canceladas inmediatamente al {THIRD_FOCUS_KEYWORD}.
            </p>
          </section>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-6 h-6 text-[#CA1421]" />
              </div>
              <p className="text-[#F1E8DB]/60 text-xs font-bold uppercase tracking-widest">Protección Legal</p>
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
                <Users className="w-6 h-6 text-[#CA1421]" />
              </div>
              <p className="text-[#F1E8DB]/60 text-xs font-bold uppercase tracking-widest">{FOCUS_KEYWORD} - Confianza</p>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-[#CA1421] hover:text-[#F1E8DB] transition-colors font-black text-xs uppercase tracking-widest">
            ← Volver a la página principal del {FOCUS_KEYWORD}
          </Link>
        </div>
      </div>
    </div>
  );
}