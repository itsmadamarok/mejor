// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import { GoogleAnalytics } from '@next/third-parties/google';
import Loading from './components/loading';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

// Optimized SEO Metadata with tight title/description character limits
const HOME_TITLE = `Mejor IPTV España - Suscripción 4K sin Cortes y Prueba 24h`;
const HOME_DESCRIPTION = `IPTV en España con +20.000 canales y cine VOD en 4K. Servidores estables sin cortes. ¡Solicita tu prueba gratis de 24 horas hoy!`;

export const metadata: Metadata = {
  ...generateSEOMetadata(HOME_TITLE, HOME_DESCRIPTION, '/'),
  title: `${HOME_TITLE}`,
  description: HOME_DESCRIPTION,
  keywords: [
    CONSTANTS.FOCUS_KEYWORD,
    CONSTANTS.SECOND_FOCUS_KEYWORD,
    CONSTANTS.THIRD_FOCUS_KEYWORD,
    'iptv españa 4k',
    'prueba gratis iptv',
    'comprar iptv españa',
    'servidor iptv estable',
    'iptv para firestick',
    'iptv smart tv',
    CONSTANTS.BRAND_NAME,
  ],
  metadataBase: new URL(CONSTANTS.SITE_URL),
  alternates: {
    canonical: CONSTANTS.SITE_URL,
    languages: {
      'es-ES': CONSTANTS.SITE_URL,
      'x-default': CONSTANTS.SITE_URL,
    },
  },
  openGraph: {
    title: `${HOME_TITLE}`,
    description: HOME_DESCRIPTION,
    url: CONSTANTS.SITE_URL,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: `${CONSTANTS.SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.FOCUS_KEYWORD}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${HOME_TITLE}`,
    description: HOME_DESCRIPTION,
    images: [`${CONSTANTS.SITE_URL}/img/structer.webp`],
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

  icons: {
    icon: [
      { url: '/img/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/img/favicons/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/img/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/img/favicons/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/img/favicons/favicon-256x256.png', sizes: '256x256', type: 'image/png' },
      { url: '/img/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/img/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/img/favicons/favicon.ico',
    apple: [
      { url: '/img/favicons/apple-touch-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/img/favicons/safari-pinned-tab.svg',
        color: '#CA1421',
      },
    ],
  },



};

// Fixed Viewport setup to pass responsive layout audits
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1A1A1D',
};

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
        alternateName: 'Mejor IPTV España',
        url: CONSTANTS.SITE_URL,
        logo: `${CONSTANTS.SITE_URL}/img/structer.webp`,
        image: `${CONSTANTS.SITE_URL}/img/structer.webp`,
        description: `${CONSTANTS.BRAND_NAME} es el servicio de televisión por protocolo de internet líder en España con transmisión en calidad 4K sin cortes.`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT.phone,
          contactType: 'atención al cliente',
          availableLanguage: ['Spanish', 'English'],
          contactOption: 'TollFree',
        },
      }),
    }}
  />
);

const WebsiteSchema = () => (
  <script
    type="application/ld+json"
    id="website-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: CONSTANTS.BRAND_NAME,
        alternateName: `${CONSTANTS.BRAND_NAME} - El Mejor Proveedor IPTV en España`,
        url: CONSTANTS.SITE_URL,
        description: 'El mejor abono IPTV en España con servidores anti-freeze y soporte técnico 24/7.',
        inLanguage: 'es-ES',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${CONSTANTS.SITE_URL}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      }),
    }}
  />
);

const ProductSchema = () => (
  <script
    type="application/ld+json"
    id="product-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: `${CONSTANTS.BRAND_NAME} Suscripción Premium`,
        image: `${CONSTANTS.SITE_URL}/img/structer.webp`,
        description: 'Servicio IPTV premium en España con televisión en directo 4K y contenido bajo demanda sin cortes.',
        brand: {
          '@type': 'Brand',
          name: CONSTANTS.BRAND_NAME,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          bestRating: '5',
          ratingCount: '1280',
        },
        offers: [
          {
            '@type': 'Offer',
            name: '1 Dispositivo - 3 Meses',
            priceCurrency: 'EUR',
            price: '25.00',
            priceValidUntil: '2028-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: CONSTANTS.SITE_URL,
          },
          {
            '@type': 'Offer',
            name: '1 Dispositivo - 6 Meses',
            priceCurrency: 'EUR',
            price: '35.00',
            priceValidUntil: '2028-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: CONSTANTS.SITE_URL,
          },
          {
            '@type': 'Offer',
            name: '1 Dispositivo - 12 Meses',
            priceCurrency: 'EUR',
            price: '49.00',
            priceValidUntil: '2028-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: CONSTANTS.SITE_URL,
          },
          {
            '@type': 'Offer',
            name: '2 Dispositivos - 12 Meses',
            priceCurrency: 'EUR',
            price: '110.00',
            priceValidUntil: '2028-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: CONSTANTS.SITE_URL,
          },
          {
            '@type': 'Offer',
            name: '3 Dispositivos - 12 Meses',
            priceCurrency: 'EUR',
            price: '150.00',
            priceValidUntil: '2028-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: CONSTANTS.SITE_URL,
          },
        ],
      }),
    }}
  />
);

const FAQSchema = () => (
  <script
    type="application/ld+json"
    id="faq-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Qué es el servicio IPTV y cómo funciona?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `IPTV transmite canales de televisión directamente a través de tu conexión a internet. Con ${CONSTANTS.BRAND_NAME} puedes ver televisión en directo en tu Smart TV, Firestick, móvil o TV Box.`,
            },
          },
          {
            '@type': 'Question',
            name: '¿Cuál es el mejor proveedor de IPTV en España?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${CONSTANTS.BRAND_NAME} está calificado como el servicio más estable en España gracias a servidores anti-freeze de alta velocidad y soporte 24/7 en español.`,
            },
          },
          {
            '@type': 'Question',
            name: '¿Cómo comprar e instalar la suscripción?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Selecciona tu plan en nuestra web. Al instante recibirás tu lista M3U y credenciales Xtream con una guía paso a paso.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Puedo solicitar una prueba IPTV gratis de 24 horas?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí, puedes solicitar una prueba gratis de 24 horas directamente por WhatsApp para comprobar la estabilidad de los canales.',
            },
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
        name: `${HOME_TITLE}`,
        description: HOME_DESCRIPTION,
        url: CONSTANTS.SITE_URL,
        inLanguage: 'es-ES',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${CONSTANTS.SITE_URL}/img/structer.webp`,
          width: '1200',
          height: '630',
        },
      }),
    }}
  />
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${poppins.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#1A1A1D" />
        <meta name="thumbnail" content={`${CONSTANTS.SITE_URL}/img/structer.webp`} />
      </head>
      <body
        className={`${poppins.className} antialiased min-h-screen bg-[#1A1A1D] text-[#F1E8DB]`}
        suppressHydrationWarning
      >
        <OrganizationSchema />
        <WebsiteSchema />
        <ProductSchema />
        <FAQSchema />
        <WebPageSchema />

        <Loading />
        <Header />
        <main>{children}</main>
        <Footer />

        <GoogleAnalytics gaId="G-J6D6ZYTLT9" />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}