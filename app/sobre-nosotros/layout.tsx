// app/sobre-nosotros/layout.tsx
import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';

// Optimized SEO Metadata
const PAGE_TITLE = `Sobre Nosotros - Proveedor Líder de IPTV en España`; // 52 chars
const PAGE_DESCRIPTION = `Conoce nuestra plataforma de IPTV en España. Servidores de alta disponibilidad, emisión en 4K sin cortes y soporte técnico en español.`; // 147 chars

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  ...generateSEOMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/sobre-nosotros'),
  title: `${PAGE_TITLE} | ${CONSTANTS.BRAND_NAME}`,
  description: PAGE_DESCRIPTION,
  keywords: [
    CONSTANTS.FOCUS_KEYWORD,
    CONSTANTS.SECOND_FOCUS_KEYWORD,
    CONSTANTS.THIRD_FOCUS_KEYWORD,
    'sobre nosotros iptv',
    'proveedor iptv españa',
    'servidores iptv estables',
    'emision iptv 4k',
    CONSTANTS.BRAND_NAME,
  ],
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  alternates: {
    canonical: `https://${CONSTANTS.DOMAIN}/sobre-nosotros`,
    languages: {
      'es-ES': `https://${CONSTANTS.DOMAIN}/sobre-nosotros`,
      'x-default': `https://${CONSTANTS.DOMAIN}/sobre-nosotros`,
    },
  },
  openGraph: {
    title: `${PAGE_TITLE} | ${CONSTANTS.BRAND_NAME}`,
    description: PAGE_DESCRIPTION,
    url: `https://${CONSTANTS.DOMAIN}/sobre-nosotros`,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `Sobre Nosotros - ${CONSTANTS.BRAND_NAME}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PAGE_TITLE} | ${CONSTANTS.BRAND_NAME}`,
    description: PAGE_DESCRIPTION,
    images: [`https://${CONSTANTS.DOMAIN}/img/structer.webp`],
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

export default function AboutLayout({ children }: { children: ReactNode }) {
  // Schema for AboutPage and Organization
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `${PAGE_TITLE} | ${CONSTANTS.BRAND_NAME}`,
    description: PAGE_DESCRIPTION,
    url: `https://${CONSTANTS.DOMAIN}/sobre-nosotros`,
    mainEntity: {
      '@type': 'Organization',
      name: CONSTANTS.BRAND_NAME,
      url: `https://${CONSTANTS.DOMAIN}`,
      logo: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
      description: `Plataforma especializada en servicios de ${CONSTANTS.FOCUS_KEYWORD} con infraestructura de alta disponibilidad.`,
      areaServed: ['ES'],
      knowsAbout: [
        CONSTANTS.FOCUS_KEYWORD,
        CONSTANTS.SECOND_FOCUS_KEYWORD,
        CONSTANTS.THIRD_FOCUS_KEYWORD,
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '12450',
        bestRating: '5',
        worstRating: '1',
      },
    },
  };

  // Schema for Breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: `https://${CONSTANTS.DOMAIN}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Sobre Nosotros',
        item: `https://${CONSTANTS.DOMAIN}/sobre-nosotros`,
      },
    ],
  };

  return (
    <div className="w-full min-h-screen bg-[#000000] text-[#F1E8DB] selection:bg-[#CA1421] selection:text-[#FFC400]">
      <script
        type="application/ld+json"
        id="about-page-schema"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        id="about-breadcrumb-schema"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </div>
  );
}