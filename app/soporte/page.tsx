// app/soporte/page.tsx
import { blogPosts } from '@/lib/blog';
import { CONSTANTS } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { BookOpen, ArrowRight, ChevronRight, Clock, Sparkles } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: {
    default: `Blog de IPTV en España - Guías, Tutoriales y Consejos 2026`,
    template: `%s | ${CONSTANTS.BRAND_NAME}`,
  },
  description: `Ontdek de nieuwste ${CONSTANTS.BRAND_NAME} handleidingen, zenderupdates en installatietips voor Smart TV, Firestick en Android in 4K.`,
  keywords: [
    `${CONSTANTS.BRAND_NAME} blog`,
    'IPTV Handleidingen',
    'IPTV Tips Nederland',
    'IPTV Installeren Smart TV',
    'Beste IPTV Kopen 2026',
    'IPTV Viaplay Ziggo Sport',
    'IPTV Smarters Handleiding',
    'TiviMate Instellen',
    '4K IPTV Streaming Tips',
  ],
  alternates: {
    canonical: `https://${CONSTANTS.DOMAIN}/soporte`,
    languages: {
      'nl-NL': `https://${CONSTANTS.DOMAIN}/soporte`,
      'nl-BE': `https://${CONSTANTS.DOMAIN}/soporte`,
    },
  },
  openGraph: {
    title: `${CONSTANTS.BRAND_NAME} Blog - IPTV Handleidingen & Tips 2026`,
    description: `Blijf op de hoogte met de nieuwste IPTV installatietips, zenderlijst updates en nieuws van ${CONSTANTS.BRAND_NAME}.`,
    url: `https://${CONSTANTS.DOMAIN}/soporte`,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.BRAND_NAME} Blog - IPTV Handleidingen & Tips`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.BRAND_NAME} Blog - IPTV Tips & Handleidingen`,
    description: `Nieuwste IPTV handleidingen, app instellingen en zendernieuws van ${CONSTANTS.BRAND_NAME}.`,
    images: [`https://${CONSTANTS.DOMAIN}/img/structer.webp`],
    creator: `@${CONSTANTS.BRAND_NAME}`,
    site: `@${CONSTANTS.BRAND_NAME}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// ============ REGIONAL FLAGS ============
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

const BlogListingSchema = () => (
  <script
    type="application/ld+json"
    id="blog-listing-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: `${CONSTANTS.BRAND_NAME} Blog`,
        description: `Het laatste nieuws, installatiehandleidingen en streamingtips voor ${CONSTANTS.BRAND_NAME} IPTV.`,
        url: `https://${CONSTANTS.DOMAIN}/soporte`,
        publisher: {
          '@type': 'Organization',
          name: CONSTANTS.BRAND_NAME,
          logo: {
            '@type': 'ImageObject',
            url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
          },
        },
        blogPost: blogPosts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description || post.excerpt,
          url: `https://${CONSTANTS.DOMAIN}/soporte/${post.slug}`,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: 'nl-NL',
          author: {
            '@type': 'Person',
            name: post.author,
          },
          image: post.image,
        })),
      }),
    }}
  />
);

const BreadcrumbSchema = () => (
  <script
    type="application/ld+json"
    id="breadcrumb-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `https://${CONSTANTS.DOMAIN}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `${CONSTANTS.BRAND_NAME} Kennisbank & Blog`,
            item: `https://${CONSTANTS.DOMAIN}/soporte`,
          },
        ],
      }),
    }}
  />
);

const WebPageSchema = () => (
  <script
    type="application/ld+json"
    id="webpage-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `${CONSTANTS.BRAND_NAME} Blog - Handleidingen & Tips 2026`,
        description: `Bekijk de officiële kennisbank van ${CONSTANTS.BRAND_NAME} met duidelijke IPTV tutorials en nieuws.`,
        url: `https://${CONSTANTS.DOMAIN}/soporte`,
        inLanguage: 'nl-NL',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
          width: '1200',
          height: '630',
        },
      }),
    }}
  />
);

export default function BlogListing() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <>
      <WebPageSchema />
      <BlogListingSchema />
      <BreadcrumbSchema />

      <div className="flex flex-col min-h-screen bg-[#111113] text-[#F1E8DB]">
        
        {/* ====== TALLER HERO SECTION ====== */}
        <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-24 sm:pt-44 sm:pb-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/bg-1.webp"
              alt={`${CONSTANTS.BRAND_NAME} Kennisbank`}
              width={1920}
              height={1080}
              priority
              className="w-full h-full object-cover brightness-[0.15]"
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/80 to-[#111113]" />
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

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CA1421]/20 blur-[160px] rounded-full pointer-events-none z-0" />

          <div className="max-w-5xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
            <FadeInStagger className="flex flex-col items-center justify-center text-center">
              <FadeInItem>
                <div className="inline-flex items-center gap-2 bg-[#CA1421] px-5 py-2.5 rounded-full mb-8 shadow-[0_0_25px_rgba(202,20,33,0.5)] border border-white/10">
                  <BookOpen className="w-4 h-4 text-[#FFFFFF]" />
                  <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
                    {CONSTANTS.BRAND_NAME} Kennisbank
                  </span>
                </div>
              </FadeInItem>

              <FadeInItem>
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-8 leading-none">
                  Handleidingen & <span className="text-[#CA1421]">Tips</span>
                </h1>
              </FadeInItem>

              <FadeInItem>
                <p className="text-lg sm:text-2xl text-[#F1E8DB]/80 font-medium max-w-3xl mx-auto leading-relaxed mb-10">
                  Ontdek stapsgewijze gidsen, app-configuraties en de nieuwste updates om het maximale uit uw <strong className="text-[#FFC400]">{CONSTANTS.BRAND_NAME}</strong> abonnementservaring te halen.
                </p>
              </FadeInItem>

              {/* Regional Flags */}
              <FadeInItem>
                <div className="w-full flex items-center justify-center">
                  <div className="inline-flex items-center justify-center flex-nowrap gap-2.5 sm:gap-4 px-6 py-3 rounded-full bg-[#161619] border border-white/10 shadow-2xl backdrop-blur-md">
                    {flagItems.map((flag) => {
                      const FlagComp = flag.component;
                      return (
                        <div key={flag.code} className="flex items-center gap-1.5 shrink-0 group cursor-default" title={flag.name}>
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
            </FadeInStagger>
          </div>
        </section>

        {/* ====== CTA PROMO BANNER ====== */}
        <section className="w-full bg-gradient-to-r from-[#CA1421] via-red-700 to-[#CA1421] py-6 px-4 sm:px-6 border-y border-white/10 shadow-[0_0_50px_rgba(202,20,33,0.3)] relative z-20">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
            <div className="space-y-1">
              <span className="bg-black/30 border border-white/20 text-[#FFC400] font-black text-[10px] px-3 py-0.5 rounded-full uppercase tracking-widest inline-block">
                Premium Stream
              </span>
              <h4 className="text-[#FFFFFF] text-lg sm:text-xl font-black uppercase tracking-tight">
                Abonnement Nodig? Activeer Direct Binnen 5 Minuten
              </h4>
            </div>
            <Link
              href="/planes"
              className="inline-flex items-center gap-2 bg-[#FFFFFF] text-[#111113] hover:bg-[#FFC400] transition-all px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-xl shrink-0"
            >
              <span>Bekijk Pakketten</span>
              <ArrowRight className="w-4 h-4 text-[#CA1421]" />
            </Link>
          </div>
        </section>

        {/* ====== MAIN CONTENT GRID ====== */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow">
          
          {/* FEATURED POST */}
          {featuredPost && (
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#FFC400]/10 border border-[#FFC400]/30 text-[#FFC400] font-black text-xs uppercase tracking-widest mb-6">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Uitgelicht Artikel</span>
              </div>

              <Link 
                href={`/soporte/${featuredPost.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#161619] border border-white/10 hover:border-[#CA1421] rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(202,20,33,0.25)]"
              >
                <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-auto min-h-[340px] overflow-hidden bg-black/40">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161619] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#161619]" />
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="px-3 py-1 bg-[#CA1421] text-[#FFFFFF] text-[10px] font-black uppercase tracking-widest rounded-md shadow-lg">
                      Must Read
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-bold text-[#F1E8DB]/60 mb-4 uppercase tracking-wider">
                      <div className="w-7 h-7 rounded-full bg-[#CA1421] flex items-center justify-center text-[#FFFFFF] font-black text-xs">
                        {featuredPost.author.charAt(0)}
                      </div>
                      <span className="text-[#FFFFFF]">{featuredPost.author}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#FFC400]" />
                        5 min leestijd
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-[#FFFFFF] group-hover:text-[#CA1421] transition-colors uppercase tracking-tight leading-tight mb-4">
                      {featuredPost.title}
                    </h2>

                    <p className="text-[#F1E8DB]/80 text-sm font-medium leading-relaxed line-clamp-4 mb-6">
                      {featuredPost.description || featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-[#CA1421] font-black text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                      Lees Volledig Artikel <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-bold text-[#FFC400] bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      2026 Gids
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* ARTICLES GRID */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight">
              Alle Handleidingen
            </h3>
            <span className="text-xs font-bold text-[#F1E8DB]/50 uppercase tracking-widest">
              {blogPosts.length} Artikelen
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {remainingPosts.map((post, index) => (
              <Link 
                href={`/soporte/${post.slug}`} 
                key={post.id} 
                className="group rounded-2xl overflow-hidden transition-all duration-300 flex flex-col bg-[#161619] border border-white/10 hover:border-[#CA1421] shadow-xl hover:shadow-[0_0_30px_rgba(202,20,33,0.2)]"
              >
                {/* Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={375}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    loading={index < 6 ? 'eager' : 'lazy'}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161619] via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
                    {post.keywords && post.keywords.slice(0, 1).map((kw: string) => (
                      <span 
                        key={kw} 
                        className="px-2.5 py-1 bg-[#111113]/90 text-[#FFC400] border border-white/10 text-[10px] font-black uppercase tracking-widest rounded-md backdrop-blur-md"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#F1E8DB]/60 mb-3 uppercase tracking-wider">
                      <div className="w-6 h-6 rounded-full bg-[#CA1421] flex items-center justify-center text-[#FFFFFF] font-black text-[10px]">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-[#FFFFFF]">{post.author}</span>
                      <span>•</span>
                      <span>
                        {new Date(post.date).toLocaleDateString('nl-NL', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                    
                    <h2 className="text-lg font-black text-[#FFFFFF] group-hover:text-[#CA1421] transition-colors duration-300 leading-snug line-clamp-2 uppercase tracking-tight mb-3">
                      {post.title}
                    </h2>
                    
                    <p className="text-[#F1E8DB]/70 text-xs sm:text-sm font-medium leading-relaxed line-clamp-3 mb-4">
                      {post.description || post.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-[#CA1421] font-black text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                      Lees Artikel <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    </span>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-[#CA1421] transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}