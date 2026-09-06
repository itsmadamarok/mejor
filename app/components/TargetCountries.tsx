'use client';

// Lightweight Circular Vector Flags for Spanish-speaking regions & key European countries
const FlagES = () => (
  <svg className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md shrink-0 ring-2 ring-white/20 group-hover:ring-[#FFC400] transition-all duration-300" viewBox="0 0 32 32">
    <clipPath id="circle-flag-es"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#circle-flag-es)">
      <path fill="#AA151B" d="M0 0h32v32H0z" />
      <path fill="#F1BF00" d="M0 8h32v16H0z" />
    </g>
  </svg>
);

const FlagMX = () => (
  <svg className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md shrink-0 ring-2 ring-white/20 group-hover:ring-[#FFC400] transition-all duration-300" viewBox="0 0 32 32">
    <clipPath id="circle-flag-mx"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#circle-flag-mx)">
      <path fill="#006847" d="M0 0h10.7v32H0z" />
      <path fill="#FFF" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#CE1126" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagAR = () => (
  <svg className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md shrink-0 ring-2 ring-white/20 group-hover:ring-[#FFC400] transition-all duration-300" viewBox="0 0 32 32">
    <clipPath id="circle-flag-ar"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#circle-flag-ar)">
      <path fill="#74ACDF" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
    </g>
  </svg>
);

const FlagCO = () => (
  <svg className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md shrink-0 ring-2 ring-white/20 group-hover:ring-[#FFC400] transition-all duration-300" viewBox="0 0 32 32">
    <clipPath id="circle-flag-co"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#circle-flag-co)">
      <path fill="#FCD116" d="M0 0h32v16H0z" />
      <path fill="#003893" d="M0 16h32v8H0z" />
      <path fill="#CE1126" d="M0 24h32v8H0z" />
    </g>
  </svg>
);

const FlagCL = () => (
  <svg className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md shrink-0 ring-2 ring-white/20 group-hover:ring-[#FFC400] transition-all duration-300" viewBox="0 0 32 32">
    <clipPath id="circle-flag-cl"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#circle-flag-cl)">
      <path fill="#FFF" d="M0 0h32v16H0z" />
      <path fill="#D52B1E" d="M0 16h32v16H0z" />
      <path fill="#0039A6" d="M0 0h12v16H0z" />
    </g>
  </svg>
);

const FlagUS = () => (
  <svg className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md shrink-0 ring-2 ring-white/20 group-hover:ring-[#FFC400] transition-all duration-300" viewBox="0 0 32 32">
    <clipPath id="circle-flag-us"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#circle-flag-us)">
      <path fill="#B22234" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M0 3.5h32v3.5H0zM0 10.5h32v3.5H0zM0 17.5h32v3.5H0zM0 24.5h32v3.5H0z" />
      <path fill="#3C3B6E" d="M0 0h14v16H0z" />
    </g>
  </svg>
);

export default function CountryFlagsBar() {
  const countries = [
    { name: 'España', code: 'ES', flag: FlagES, channels: 'LaLiga, Movistar+, DAZN' },
    { name: 'México', code: 'MX', flag: FlagMX, channels: 'Liga MX, TUDN, Televisa' },
    { name: 'Argentina', code: 'AR', flag: FlagAR, channels: 'TyC Sports, TNT Sports' },
    { name: 'Colombia', code: 'CO', flag: FlagCO, channels: 'Win Sports+, Caracol' },
    { name: 'Chile', code: 'CL', flag: FlagCL, channels: 'TNT Sports Chile, CDF' },
    { name: 'EE. UU. / Latam', code: 'US', flag: FlagUS, channels: 'Univision, ESPN Latino' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 relative z-10">
      {/* Outer Card with Red Branding, Soft Yellow Glow, and strict responsive structure */}
      <div className="bg-[#CA1421] border border-red-400/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Background ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FFC400]/20 blur-[130px] pointer-events-none rounded-full" />

        {/* Header Section with Description */}
        <div className="text-center max-w-3xl mx-auto mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#111113]/50 backdrop-blur-md px-4 py-2 rounded-full mb-4 shadow-lg border border-yellow-300/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC400] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFC400]" />
            </span>
            <span className="text-[#FFC400] font-black text-xs uppercase tracking-widest">
              Transmisión Global en Español
            </span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight">
            Canales y Deportes de <span className="text-[#FFC400]">Todo el Mundo</span>
          </h3>
          
          <p className="text-white text-xs sm:text-sm md:text-base font-medium mt-3 leading-relaxed max-w-2xl mx-auto">
            Disfruta de la programación local e internacional con la mejor calidad 4K. Audio en castellano, latino e inglés con servidores estables anti-cortes desde cualquier país.
          </p>
        </div>

        {/* Fully Responsive CSS Grid Layout for Cards (No awkward overflow cuts) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10">
          {countries.map((c) => {
            const Flag = c.flag;
            return (
              <div
                key={c.code}
                className="bg-white border-2 border-transparent hover:border-[#FFC400] rounded-2xl p-5 flex items-center gap-4 group transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Flag />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-base sm:text-lg font-black text-[#111113] group-hover:text-[#CA1421] transition-colors truncate">
                    {c.name}
                  </span>
                  <span className="text-xs text-black font-semibold mt-0.5 truncate">
                    {c.channels}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}