import type { Metadata, Viewport } from 'next';
import { Providers } from './providers';
import Navigation from '../components/layout/Navigation/Navigation';
import Footer from '../components/layout/Footer/Footer';
import './globals.scss';

export const metadata: Metadata = {
  title: {
    default: 'Sabitri Enterprises | Homestay, Jewellery, Tours & Handicrafts in Puri',
    template: '%s | Sabitri Enterprises',
  },
  description:
    'Sabitri Enterprises, Puri — a family-run group offering heritage homestay near Jagannath Temple, handcrafted jewellery, Odisha tour packages, and authentic handicrafts. Crafting experiences, honouring heritage.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Sabitri Enterprises',
    description:
      'Homestay, jewellery, tours & travel, and handicrafts from the heart of Puri, Odisha.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sabitri Enterprises',
    description:
      'Homestay, jewellery, tours & travel, and handicrafts from the heart of Puri, Odisha.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
