import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Providers } from '@/app/providers';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { COMPANY_NAME, SITE_URL } from '@/lib/constants';
import { getJsonLd } from '@/lib/jsonld';
import '@/app/globals.scss';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sabitri Enterprises | Homestay, Jewellery, Tours & Handicrafts in Puri',
    template: '%s | Sabitri Enterprises',
  },
  description:
    'Sabitri Enterprises, Puri — a luxury family-run heritage group offering heritage homestay near Jagannath Temple, handcrafted jewellery, Odisha tour packages, and authentic handicrafts. Crafting experiences, honouring heritage.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sabitri Enterprises',
    description:
      'Luxury homestay, jewellery, tours & travel, and handicrafts from the heart of Puri, Odisha.',
    url: SITE_URL,
    siteName: COMPANY_NAME,
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/officiallogo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sabitri Enterprises',
    description:
      'Luxury homestay, jewellery, tours & travel, and handicrafts from the heart of Puri, Odisha.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>
        <Providers>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Navigation />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': getJsonLd(),
            }),
          }}
        />
      </body>
    </html>
  );
}