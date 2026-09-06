// app/planes/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';

// Optimized Title & Description without numbers (Strict SERP Length Constraints)
const PAGE_TITLE = `Suscripción IPTV España - Fútbol, Cine y Series sin Cortes`; // 59 chars
const PAGE_DESCRIPTION = `La televisión IPTV más estable de España. Canales de fútbol en directo, cine 4K y series. Activación inmediata. ¡Prueba gratis hoy!`; // 158 chars

export const metadata: Metadata = {
  ...generateSEOMetadata(
    'Suscripción IPTV España',
    PAGE_DESCRIPTION,
    '/planes'
  ),
  title: `${PAGE_TITLE}`,
  description: PAGE_DESCRIPTION,
  keywords: [
    'planes iptv españa',
    'precios suscripcion iptv',
    'comprar iptv calidad 4k',
    'iptv canales futbol españa',
    'iptv sin cortes alta definicion',
    'proveedor iptv estable españa',
    'prueba iptv sin compromiso',
    CONSTANTS.BRAND_NAME,
  ],
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  alternates: {
    canonical: `https://${CONSTANTS.DOMAIN}/planes`,
    languages: {
      'es-ES': `https://${CONSTANTS.DOMAIN}/planes`,
      'x-default': `https://${CONSTANTS.DOMAIN}/planes`,
    },
  },
  openGraph: {
    title: `${PAGE_TITLE} | ${CONSTANTS.BRAND_NAME}`,
    description: PAGE_DESCRIPTION,
    url: `https://${CONSTANTS.DOMAIN}/planes`,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `Planes y Suscripciones IPTV Premium - ${CONSTANTS.BRAND_NAME}`,
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

// JSON-LD Product & Offers Schema
const PricingPageSchema = () => (
  <script
    type="application/ld+json"
    id="pricing-page-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
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
        offers: [
          {
            '@type': 'Offer',
            name: 'Plan Trimestral - 1 Dispositivo',
            price: '25.00',
            priceCurrency: 'EUR',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/InStock',
            url: `https://${CONSTANTS.DOMAIN}/planes`,
            description: 'Acceso a televisión en directo 4K y cine a la carta sin cortes.',
          },
          {
            '@type': 'Offer',
            name: 'Plan Semestral - 1 Dispositivo',
            price: '35.00',
            priceCurrency: 'EUR',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/InStock',
            url: `https://${CONSTANTS.DOMAIN}/planes`,
            description: 'Acceso IPTV de alta estabilidad en España con eventos deportivos.',
          },
          {
            '@type': 'Offer',
            name: 'Plan Anual - 1 Dispositivo',
            price: '49.00',
            priceCurrency: 'EUR',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/InStock',
            url: `https://${CONSTANTS.DOMAIN}/planes`,
            description: 'Suscripción anual IPTV sin interrupciones con emisión en alta definición.',
          },
        ],
      }),
    }}
  />
);

// FAQ Schema
const PricingFAQSchema = () => (
  <script
    type="application/ld+json"
    id="pricing-faq-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Qué incluye la suscripción IPTV en España?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Incluye canales de televisión en directo para eventos deportivos, cine a la carta, series en alta definición y asistencia técnica personalizada.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cómo funciona la activación del servicio?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'La activación se gestiona inmediatamente tras completar el pedido. Recibirás las credenciales de acceso vía mensaje o correo.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Existen contratos de permanencia?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No hay contratos ni renovaciones automáticas. Los pagos son únicos y finalizan al concluir el periodo contratado.',
            },
          },
        ],
      }),
    }}
  />
);

// Breadcrumb Schema
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
            name: 'Inicio',
            item: `https://${CONSTANTS.DOMAIN}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Planes y Precios',
            item: `https://${CONSTANTS.DOMAIN}/planes`,
          },
        ],
      }),
    }}
  />
);

export default function PkgLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PricingPageSchema />
      <PricingFAQSchema />
      <BreadcrumbSchema />
      {children}
    </>
  );
}