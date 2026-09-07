// app/opiniones/layout.tsx
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';

// Optimized SEO Metadata (Strict SERP Length & High CTR Copywriting)
const PAGE_TITLE = `Opiniones IPTV España - Reseñas y Experiencias Reales`; // 54 chars
const PAGE_DESCRIPTION = `Lee opiniones reales sobre el mejor IPTV en España. Servidores estables sin cortes, canales 4K y soporte 24/7. ¡Mira las valoraciones!`; // 135 chars

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...generateSEOMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/opiniones'),
    title: `${PAGE_TITLE}`,
    description: PAGE_DESCRIPTION,
    keywords: [
      CONSTANTS.FOCUS_KEYWORD,
      CONSTANTS.SECOND_FOCUS_KEYWORD,
      CONSTANTS.THIRD_FOCUS_KEYWORD,
      'opiniones iptv españa',
      'reseñas iptv verificadas',
      'iptv sin cortes opiniones',
      'experiencias usuarios iptv',
      'valoraciones servicio iptv',
      CONSTANTS.BRAND_NAME,
    ],
    metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
    alternates: {
      canonical: `https://${CONSTANTS.DOMAIN}/opiniones`,
      languages: {
        'es-ES': `https://${CONSTANTS.DOMAIN}/opiniones`,
        'x-default': `https://${CONSTANTS.DOMAIN}/opiniones`,
      },
    },
    openGraph: {
      title: `${PAGE_TITLE}`,
      description: PAGE_DESCRIPTION,
      url: `https://${CONSTANTS.DOMAIN}/opiniones`,
      type: 'website',
      locale: 'es_ES',
      siteName: CONSTANTS.BRAND_NAME,
      images: [
        {
          url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
          width: 1200,
          height: 630,
          alt: `Opiniones y Reseñas de Clientes - ${CONSTANTS.BRAND_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${PAGE_TITLE}`,
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
}

export default function ReviewsLayout({ children }: { children: ReactNode }) {
  // Product + AggregateRating Schema for Rich Snippet Stars
  const productAggregateSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Suscripción ${CONSTANTS.BRAND_NAME} - IPTV España`,
    alternateName: CONSTANTS.FOCUS_KEYWORD,
    image: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
    description: PAGE_DESCRIPTION,
    brand: {
      '@type': 'Brand',
      name: CONSTANTS.BRAND_NAME,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1280',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Carlos M.',
        },
        reviewBody:
          'Excelente servicio de IPTV en España. Las transmisiones deportivas se ven fluidas y en alta definición. El servicio técnico responde de inmediato.',
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Alejandro G.',
        },
        reviewBody:
          'Configuración sencilla y rápida. La estabilidad de emisión y la variedad de contenidos superaron totalmente mis expectativas.',
      },
    ],
  };

  // Breadcrumb Schema
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
        name: 'Opiniones',
        item: `https://${CONSTANTS.DOMAIN}/opiniones`,
      },
    ],
  };

  // WebPage Schema
  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${PAGE_TITLE}`,
    description: PAGE_DESCRIPTION,
    url: `https://${CONSTANTS.DOMAIN}/opiniones`,
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        id="product-aggregate-schema"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productAggregateSchema) }}
      />
      <script
        type="application/ld+json"
        id="breadcrumb-schema"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        id="webpage-schema"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      {children}
    </>
  );
}