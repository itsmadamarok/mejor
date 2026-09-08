import { Metadata } from 'next';

const DOMAIN = 'mejoriptv.org';
const BRAND_NAME = 'Mejor IPTV';
const FOCUS_KEYWORD = 'Mejor IPTV España';
const SECOND_FOCUS_KEYWORD = 'IPTV España';
const THIRD_FOCUS_KEYWORD = 'Comprar IPTV';

export const CONSTANTS = {
  DOMAIN,
  BRAND_NAME,
  FOCUS_KEYWORD,
  SECOND_FOCUS_KEYWORD,
  THIRD_FOCUS_KEYWORD,
  SITE_URL: `https://${DOMAIN}`,
  
  // Primary Focus Keywords (Top Spanish Search Terms with strict prioritization)
  PRIMARY_KEYWORDS: [
    'Mejor IPTV España',
    'IPTV España',
    'Comprar IPTV',
    'MejorIPTV',
    'iptv 4k',
    'prueba iptv gratis',
    'iptv estable',
    'iptv sin cortes',
  ],

  // Secondary & High-Intent Search Terms
  SECONDARY_KEYWORDS: [
    'comprar suscripcion iptv',
    'iptv españa 4k',
    'canales iptv estables',
    'prueba iptv gratis 24 horas',
    'mejor proveedor iptv españa',
    'futbol en directo iptv',
    'smart tv iptv app',
  ],

  // Business Contact Details (Phone retained)
  CONTACT: {
    email: `support@${DOMAIN}`,
    phone: '+44 7549 589503',
    whatsapp: 'https://live-support.netlify.app',
    supportHours: 'Soporte técnico 24/7 vía WhatsApp y correo electrónico',
  },

  // Major Target Regions / Cities in Spain
  TARGET_REGIONS: [
    'Madrid',
    'Barcelona',
    'Valencia',
    'Sevilla',
    'Zaragoza',
    'Málaga',
    'Murcia',
    'Palma',
    'Bilbao',
    'Alicante',
  ],

  // Value Propositions in Native Spanish (USPs)
  USPS: [
    'Servidores anti-freeze de alta velocidad sin cortes ni buffering',
    'Más de 20.000 canales en vivo y 50.000 películas y series VOD',
    'Activación instantánea en menos de 5 minutos tras el pago',
    'Todo el fútbol, LaLiga, Champions y deportes en calidad 4K & Full HD',
    'Compatible con Smart TV, Firestick, Android, iOS y dispositivos MAG',
  ],
};

export const generateSEOMetadata = (
  pageName: string,
  description?: string,
  path: string = '/'
): Metadata => {
  const defaultDescription = `Contrata el mejor servicio IPTV en España: más de 20.000 canales en vivo y VOD en 4K sin cortes. Solicita tu prueba IPTV gratis de 24 horas hoy mismo.`;
  const pageTitle = `${pageName} | ${BRAND_NAME} - Mejor IPTV España 4K`;

  return {
    title: pageTitle,
    description: description || defaultDescription,
    keywords: [
      ...CONSTANTS.PRIMARY_KEYWORDS,
      ...CONSTANTS.SECONDARY_KEYWORDS,
    ].join(', '),
    metadataBase: new URL(`https://${DOMAIN}`),
    alternates: {
      canonical: path,
      languages: {
              'es-ES': `https://${DOMAIN}${path}`,
              'x-default': `https://${DOMAIN}${path}`,
            },
    },
    openGraph: {
      title: pageTitle,
      description: description || defaultDescription,
      url: `https://${DOMAIN}${path}`,
      siteName: BRAND_NAME,
      locale: 'es_ES',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: description || defaultDescription,
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
};