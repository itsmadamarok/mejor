// app/preguntas-frecuentes/layout.tsx
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';

// Optimized SEO Title and Description (Strict SERP character targets)
const PAGE_TITLE = `Preguntas Frecuentes IPTV España - Respuestas y Ayuda`; // 55 chars
const PAGE_DESCRIPTION = `Resuelve tus dudas sobre nuestro servicio IPTV en España. Compatibilidad con Smart TV, instalación en Firestick, pruebas y soporte 24/7.`; // 152 chars

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...generateSEOMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/preguntas-frecuentes'),
    title: `${PAGE_TITLE} | ${CONSTANTS.BRAND_NAME}`,
    description: PAGE_DESCRIPTION,
    keywords: [
      CONSTANTS.FOCUS_KEYWORD,
      CONSTANTS.SECOND_FOCUS_KEYWORD,
      CONSTANTS.THIRD_FOCUS_KEYWORD,
      'preguntas frecuentes iptv',
      'faq iptv españa',
      'como instalar iptv',
      'soporte tecnico iptv',
      'resolucion dudas iptv',
      CONSTANTS.BRAND_NAME,
    ],
    metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
    alternates: {
      canonical: `https://${CONSTANTS.DOMAIN}/preguntas-frecuentes`,
      languages: {
        'es-ES': `https://${CONSTANTS.DOMAIN}/preguntas-frecuentes`,
        'x-default': `https://${CONSTANTS.DOMAIN}/preguntas-frecuentes`,
      },
    },
    openGraph: {
      title: `${PAGE_TITLE} | ${CONSTANTS.BRAND_NAME}`,
      description: PAGE_DESCRIPTION,
      url: `https://${CONSTANTS.DOMAIN}/preguntas-frecuentes`,
      type: 'website',
      locale: 'es_ES',
      siteName: CONSTANTS.BRAND_NAME,
      images: [
        {
          url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
          width: 1200,
          height: 630,
          alt: `Preguntas Frecuentes y Soporte - ${CONSTANTS.BRAND_NAME}`,
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
}

export default function FAQLayout({ children }: { children: ReactNode }) {
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
        name: 'Preguntas Frecuentes',
        item: `https://${CONSTANTS.DOMAIN}/preguntas-frecuentes`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        id="faq-breadcrumb-schema"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}