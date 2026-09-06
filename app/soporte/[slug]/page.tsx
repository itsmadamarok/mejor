// app/soporte/[slug]/page.tsx
import { blogPosts } from '@/lib/blog';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Tag, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Headphones,
  MessageCircle,
  Flame
} from 'lucide-react';
import ShareButtons from '../../components/ShareButtons';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return generateSEOMetadata('Artikel Niet Gevonden');

  const coverImageUrl = post.image.startsWith('http') 
    ? post.image 
    : `https://${CONSTANTS.DOMAIN}${post.image}`;

  const cleanTitle = post.title.length > 60 ? `${post.title.substring(0, 57)}...` : post.title;

  return {
    title: `${cleanTitle} | ${CONSTANTS.BRAND_NAME}`,
    description: post.description || post.excerpt || `Bekijk de officiële ${CONSTANTS.BRAND_NAME} handleiding voor ${post.title}.`,
    keywords: post.keywords ? post.keywords.join(', ') : CONSTANTS.PRIMARY_KEYWORDS.join(', '),
    alternates: {
      canonical: `https://${CONSTANTS.DOMAIN}/soporte/${post.slug}`,
      languages: {
        'nl-NL': `https://${CONSTANTS.DOMAIN}/soporte/${post.slug}`,
        'nl-BE': `https://${CONSTANTS.DOMAIN}/soporte/${post.slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description || post.excerpt,
      url: `https://${CONSTANTS.DOMAIN}/soporte/${post.slug}`,
      type: 'article',
      locale: 'nl_NL',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      siteName: CONSTANTS.BRAND_NAME,
      images: [
        {
          url: coverImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
          type: 'image/webp',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: cleanTitle,
      description: post.description || post.excerpt,
      images: [coverImageUrl],
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
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const coverImageUrl = post.image.startsWith('http') 
    ? post.image 
    : `https://${CONSTANTS.DOMAIN}${post.image}`;

  const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readTime = Math.max(3, Math.ceil(wordCount / 200));

  const displayCategory = post.keywords && post.keywords.length > 0 ? post.keywords[0] : 'Handleiding';
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.description || post.excerpt,
    keywords: post.keywords ? post.keywords.join(', ') : '',
    image: [coverImageUrl],
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'nl-NL',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://${CONSTANTS.DOMAIN}/soporte/${post.slug}`,
    },
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: 'IPTV Technical Specialist',
    },
    publisher: {
      '@type': 'Organization',
      name: CONSTANTS.BRAND_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
      },
    },
  };

  const breadcrumbSchema = {
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
        name: 'Kennisbank',
        item: `https://${CONSTANTS.DOMAIN}/soporte`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://${CONSTANTS.DOMAIN}/soporte/${post.slug}`,
      },
    ],
  };

  const whatsappIboMsg = encodeURIComponent(`Hallo, ik lees het artikel "${post.title}" en ik wil IBO Player activeren.`);
  const whatsappSubMsg = encodeURIComponent(`Hallo, ik lees het artikel "${post.title}" en ik wil graag een IPTV abonnement aanvragen.`);

  return (
    <article className="flex flex-col min-h-screen bg-[#111113] text-[#F1E8DB]">
      
      {/* Schema Scripts */}
      <script
        type="application/ld+json"
        id="article-schema-data"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        id="breadcrumb-schema-data"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Banner Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover opacity-60 brightness-90 scale-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/70 to-[#111113]/90" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#CA1421]/20 blur-[140px] rounded-full pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 bg-[#CA1421] px-5 py-2 rounded-full mb-6 shadow-[0_0_20px_rgba(202,20,33,0.5)] border border-white/20">
            <Sparkles className="w-4 h-4 text-[#FFC400]" />
            <span className="text-[#FFFFFF] font-black text-xs sm:text-sm uppercase tracking-widest">
              {displayCategory}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#F1E8DB]/90 font-medium max-w-2xl mx-auto leading-relaxed mb-8">
            {post.description || post.excerpt}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm font-black uppercase tracking-wider text-[#F1E8DB]/80 bg-[#161619] px-6 py-3 rounded-full border-2 border-[#CA1421]/40 shadow-xl">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#FFC400]" />
              <span>
                {new Date(post.date).toLocaleDateString('nl-NL', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#CA1421]" />
              <span className="text-[#FFFFFF]">{post.author}</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#FFC400]" />
              <span className="text-[#FFC400]">{readTime} min leestijd</span>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Back Navigation Button */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-4 mb-2">
        <Link 
          href="/soporte" 
          className="inline-flex items-center gap-3 text-[#FFFFFF] bg-gradient-to-r from-[#CA1421] to-[#a30f1a] hover:from-[#FFC400] hover:to-[#e6b000] hover:text-[#111113] transition-all duration-300 font-black text-xs sm:text-sm uppercase tracking-widest px-6 py-3.5 rounded-2xl border border-white/20 shadow-[0_4px_20px_rgba(202,20,33,0.4)] group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1.5 transition-transform" /> 
          Terug Naar Alle Artikelen
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Article Body Area */}
        <div className="lg:col-span-8 order-1">
          
          {/* HTML Prose Render */}
          <div 
            className="prose prose-invert prose-base md:prose-lg max-w-none
              [&>h1]:text-2xl [&>h1]:md:text-4xl [&>h1]:font-black [&>h1]:text-[#FFFFFF] [&>h1]:mb-6 [&>h1]:tracking-tight [&>h1]:uppercase
              [&>h2]:text-xl [&>h2]:md:text-3xl [&>h2]:font-black [&>h2]:text-[#FFFFFF] [&>h2]:mb-4 [&>h2]:mt-10 [&>h2]:tracking-tight [&>h2]:uppercase [&>h2]:border-l-4 [&>h2]:border-[#FFC400] [&>h2]:pl-4
              [&>h3]:text-lg [&>h3]:md:text-2xl [&>h3]:font-black [&>h3]:text-[#FFC400] [&>h3]:mb-3 [&>h3]:mt-8 [&>h3]:uppercase
              [&>h4]:text-base [&>h4]:md:text-xl [&>h4]:font-black [&>h4]:text-[#CA1421] [&>h4]:mb-2 [&>h4]:mt-6 [&>h4]:uppercase
              [&>p]:text-[#F1E8DB]/90 [&>p]:text-base [&>p]:md:text-lg [&>p]:font-medium [&>p]:leading-relaxed [&>p]:mb-6
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:text-[#F1E8DB]/90 [&>ul]:space-y-2
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol]:text-[#F1E8DB]/90 [&>ol]:space-y-2
              [&>li]:text-[#F1E8DB]/90 [&>li]:font-medium
              [&>a]:text-[#FFC400] [&>a]:font-black [&>a]:underline [&>a]:hover:text-[#CA1421] [&>a]:transition-colors
              [&>blockquote]:border-l-4 [&>blockquote]:border-[#CA1421] [&>blockquote]:bg-[#161619] [&>blockquote]:p-6 [&>blockquote]:rounded-r-2xl [&>blockquote]:my-8 [&>blockquote]:text-[#F1E8DB] [&>blockquote]:italic
              [&>code]:bg-[#161619] [&>code]:px-3 [&>code]:py-1 [&>code]:rounded-lg [&>code]:text-[#FFC400] [&>code]:text-sm [&>code]:border [&>code]:border-white/10
              [&>pre]:bg-[#161619] [&>pre]:p-6 [&>pre]:rounded-2xl [&>pre]:overflow-x-auto [&>pre]:border [&>pre]:border-white/10
              [&>img]:rounded-2xl [&>img]:my-8 [&>img]:border-2 [&>img]:border-[#CA1421]/30 [&>img]:w-full [&>img]:h-auto
              [&>hr]:border-white/10 [&>hr]:my-10
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Social Media Sharing Container - Forced Single Line */}
              <ShareButtons 
                title={`${post.title} - ${CONSTANTS.BRAND_NAME}`} 
                url={`https://${CONSTANTS.DOMAIN}/soporte/${post.slug}`} 
              />

          {/* Topic Tags */}
          {post.keywords && post.keywords.length > 0 && (
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4 text-[#FFC400]" />
                <h4 className="text-[#FFFFFF] font-black text-sm uppercase tracking-wider">
                  Relevante Onderwerpen
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span 
                    key={keyword} 
                    className="px-3.5 py-1.5 bg-[#161619] text-[#FFC400] text-xs font-black uppercase tracking-wider rounded-lg border border-[#CA1421]/30 hover:bg-[#CA1421] hover:text-[#FFFFFF] transition-all cursor-default"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Box */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl border-2 border-[#CA1421]/50 bg-[#161619] relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="w-20 h-20 rounded-2xl bg-[#CA1421] border-2 border-[#FFC400] flex items-center justify-center text-[#FFC400] font-black text-3xl uppercase flex-shrink-0 shadow-xl">
                {post.author[0]}
              </div>
              <div>
                <h4 className="text-[#FFFFFF] font-black text-xl mb-1 uppercase tracking-tight">
                  {post.author}
                </h4>
                <p className="text-[#FFC400] text-xs uppercase tracking-widest font-black mb-3">
                  IPTV & Streaming Expert bij {CONSTANTS.BRAND_NAME}
                </p>
                <p className="text-[#F1E8DB]/80 text-sm font-medium leading-relaxed">
                  Gespecialiseerd in streamingprotocollen, app-configuraties en netwerkoptimalisaties voor Smart TV, Firestick en Android apparaten.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Sidebar */}
        <aside className="lg:col-span-4 order-2 lg:sticky lg:top-28 space-y-8">
          
          {/* 1. Related Articles Box */}
          <div className="bg-[#161619] border border-white/10 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FFC400]" /> Gerelateerde Artikelen
            </h3>
            
            <div className="space-y-4">
              {relatedPosts.map((relPost) => (
                <Link 
                  key={relPost.slug} 
                  href={`/soporte/${relPost.slug}`}
                  className="flex items-center gap-3 group bg-white/5 border border-white/5 p-3 rounded-2xl hover:border-[#FFC400] transition-all"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-black/40 border border-white/10">
                    <Image 
                      src={relPost.image} 
                      alt={relPost.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-black text-[#FFFFFF] group-hover:text-[#FFC400] transition-colors uppercase line-clamp-2 mb-1">
                      {relPost.title}
                    </h4>
                    <p className="text-[10px] text-[#F1E8DB]/60 font-medium line-clamp-1">
                      {relPost.description || relPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 2. Player / WhatsApp Support Card */}
          <div className="bg-[#161619] border-2 border-[#CA1421] rounded-3xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC400]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="inline-flex items-center gap-1.5 bg-[#CA1421] text-[#FFFFFF] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              <Flame className="w-3.5 h-3.5 text-[#FFC400]" /> Direct Inspringen
            </div>
            
            <h3 className="text-xl font-black text-[#FFFFFF] uppercase tracking-tight mb-2">
              Snelle Support via WhatsApp
            </h3>
            <p className="text-[#F1E8DB]/80 text-xs font-medium leading-relaxed mb-6">
              Ondervindt u problemen met uw app of wenst u directe hulp bij het instellen van uw afspeellijst?
            </p>
            
            <a
              href={`https://api.whatsapp.com/send?phone=${CONSTANTS.CONTACT.phone.replace(/[^0-9]/g, '')}&text=${whatsappIboMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#25D366] text-white font-black text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Direct WhatsApp Contact</span>
            </a>
          </div>

          {/* 3. IPTV Subscription Offers */}
          <div className="bg-[#161619] border-2 border-[#FFC400] rounded-3xl p-6 shadow-xl">
            <div className="inline-flex items-center gap-1.5 bg-[#FFC400] text-[#111113] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              <Zap className="w-3.5 h-3.5 fill-current" /> Premium Streaming
            </div>
            <h3 className="text-xl font-black text-[#FFFFFF] uppercase tracking-tight mb-2">
              Kies Uw IPTV Abonnement
            </h3>
            <p className="text-[#F1E8DB]/80 text-xs font-medium mb-6">
              20.000+ zenders & 60.000+ VODs in haarscherpe 4K kwaliteit.
            </p>

            <div className="space-y-4">
              {/* Option A */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-[#FFC400] transition-all">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[#FFFFFF] font-black text-sm uppercase">6 Maanden VIP</span>
                  <span className="text-[#FFC400] font-black text-lg">€45,00</span>
                </div>
                <p className="text-[11px] text-[#F1E8DB]/60 font-medium mb-3">4K Kwaliteit • Anti-Freeze</p>
                <a
                  href={`https://api.whatsapp.com/send?phone=${CONSTANTS.CONTACT.phone.replace(/[^0-9]/g, '')}&text=${whatsappSubMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-xl bg-white/10 text-[#FFFFFF] hover:bg-[#CA1421] transition-colors font-black text-[11px] uppercase tracking-wider block"
                >
                  Aanvragen
                </a>
              </div>

              {/* Option B */}
              <div className="bg-black/60 border-2 border-[#CA1421] rounded-2xl p-4 relative shadow-lg">
                <div className="absolute -top-3 right-4 bg-[#CA1421] text-[#FFC400] border border-[#FFC400] px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest">
                  Populairst
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[#FFFFFF] font-black text-sm uppercase">12 Maanden VIP</span>
                  <span className="text-[#FFC400] font-black text-lg">€75,00</span>
                </div>
                <p className="text-[11px] text-[#F1E8DB]/60 font-medium mb-3">Alle Sport & VOD • 24/7 Service</p>
                <a
                  href={`https://api.whatsapp.com/send?phone=${CONSTANTS.CONTACT.phone.replace(/[^0-9]/g, '')}&text=${whatsappSubMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-xl bg-[#CA1421] text-[#FFFFFF] hover:bg-[#FFC400] hover:text-[#111113] transition-colors font-black text-[11px] uppercase tracking-wider block shadow-md"
                >
                  Aanvragen VIP
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <Link href="/planes" className="text-xs font-black text-[#FFC400] uppercase tracking-wider hover:underline inline-flex items-center gap-1">
                Bekijk alle pakketten <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </aside>

      </div>

      {/* Footer Badges */}
      <div className="border-t border-white/10 mt-12 py-8 bg-[#0D0D0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[#F1E8DB]/70 text-xs font-black uppercase tracking-widest">
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#FFC400]" /> 4K Ultra HD</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#CA1421]" /> 99.9% Server Uptime</span>
            <span className="flex items-center gap-2"><Headphones className="w-4 h-4 text-[#FFC400]" /> 24/7 WhatsApp Support</span>
          </div>
        </div>
      </div>
    </article>
  );
}