// app/instalacion/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';

const PAGE_TITLE = `Cómo Instalar IPTV en España - Guía Paso a Paso`;
const PAGE_DESCRIPTION = `Configura IPTV en Smart TV, Firestick y Android. Tutorial paso a paso para una instalación rápida, estable y fácil. ¡Empieza hoy!`;

export const metadata: Metadata = {
  ...generateSEOMetadata(
    'Cómo Instalar IPTV en España',
    PAGE_DESCRIPTION,
    '/instalacion'
  ),
  title: `${PAGE_TITLE} | ${CONSTANTS.BRAND_NAME}`,
  description: PAGE_DESCRIPTION,
  keywords: [
    'guia instalacion iptv',
    'como instalar iptv firestick',
    'configurar iptv smart tv',
    'instalar iptv android tv',
    'codigo downloader iptv',
    'instalar tivimate españa',
    'ibo player smart tv tutorial',
    'iptv smarters pro instalacion',
    'configuracion iptv españa',
    'iptv sin cortes instalacion',
    CONSTANTS.BRAND_NAME,
  ],
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  alternates: {
    canonical: `https://${CONSTANTS.DOMAIN}/instalacion`,
    languages: {
      'es-ES': `https://${CONSTANTS.DOMAIN}/instalacion`,
      'x-default': `https://${CONSTANTS.DOMAIN}/instalacion`,
    },
  },
  openGraph: {
    title: `${PAGE_TITLE} | ${CONSTANTS.BRAND_NAME}`,
    description: PAGE_DESCRIPTION,
    url: `https://${CONSTANTS.DOMAIN}/instalacion`,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'es_ES',
    type: 'article',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `Guía de Instalación IPTV para todos los dispositivos - ${CONSTANTS.BRAND_NAME}`,
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

const HowToSchema = () => (
  <script
    type="application/ld+json"
    id="setup-howto-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Cómo instalar IPTV en cualquier dispositivo',
        description:
          'Guía paso a paso para configurar e instalar IPTV en Smart TV, Firestick, Android y otros dispositivos compatibles.',
        totalTime: 'PT5M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'EUR',
          value: '0.00',
        },
        image: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        step: [
          {
            '@type': 'HowToStep',
            name: 'Selecciona tu suscripción IPTV',
            text: 'Elige la opción que prefieras y recibe tus credenciales de acceso de forma inmediata.',
            position: 1,
          },
          {
            '@type': 'HowToStep',
            name: 'Activa aplicaciones de orígenes desconocidos',
            text: 'En tu Firestick o TV Box, accede a los ajustes de desarrollador y habilita la instalación de fuentes externas.',
            position: 2,
          },
          {
            '@type': 'HowToStep',
            name: 'Descarga la app de gestión',
            text: 'Instala la aplicación Downloader o el reproductor preferido desde la tienda oficial de aplicaciones.',
            position: 3,
          },
          {
            '@type': 'HowToStep',
            name: 'Introduce las credenciales Xtream',
            text: 'Abre el reproductor e introduce el usuario, contraseña y URL proporcionados con tu acceso.',
            position: 4,
          },
          {
            '@type': 'HowToStep',
            name: 'Inicia la reproducción',
            text: 'Accede a la lista de canales en directo y contenidos multimedia en alta definición.',
            position: 5,
          },
        ],
        supply: [
          'Dispositivo Smart TV, Firestick o Android TV',
          'Conexión a internet estable',
          'Suscripción de servicio IPTV',
        ],
        tool: ['Aplicación Downloader', 'TiviMate, IBO Player o IPTV Smarters Pro'],
      }),
    }}
  />
);

const SetupFAQSchema = () => (
  <script
    type="application/ld+json"
    id="setup-faq-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Qué dispositivos son compatibles con el servicio?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Es compatible con Amazon Firestick, Android TV, Smart TV Samsung o LG, Apple TV, dispositivos móviles y ordenadores.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cuánto tiempo lleva completar la configuración?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'El proceso completo de instalación suele tomar unos pocos minutos tras descargar la aplicación e introducir las credenciales.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Es necesario contar con una VPN?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No es imprescindible para la conexión, aunque el servicio es totalmente compatible con cualquier red VPN si decides utilizarla.',
            },
          },
        ],
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
            name: 'Inicio',
            item: `https://${CONSTANTS.DOMAIN}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guía de Instalación',
            item: `https://${CONSTANTS.DOMAIN}/instalacion`,
          },
        ],
      }),
    }}
  />
);

const OrganizationSchema = () => (
  <script
    type="application/ld+json"
    id="organization-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: CONSTANTS.BRAND_NAME,
        url: `https://${CONSTANTS.DOMAIN}`,
        logo: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        description: `Guía oficial de instalación para ${CONSTANTS.BRAND_NAME}. Tutoriales claros para todos los dispositivos.`,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          telephone: CONSTANTS.CONTACT.phone,
          availableLanguage: ['Spanish', 'English'],
        },
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
        name: `${PAGE_TITLE} | ${CONSTANTS.BRAND_NAME}`,
        description: PAGE_DESCRIPTION,
        url: `https://${CONSTANTS.DOMAIN}/instalacion`,
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

export default function InstallationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OrganizationSchema />
      <WebPageSchema />
      <HowToSchema />
      <SetupFAQSchema />
      <BreadcrumbSchema />
      {children}
    </>
  );
}