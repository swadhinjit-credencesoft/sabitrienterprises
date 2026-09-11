import type { Metadata } from 'next';
import { SITE_URL, COMPANY_NAME } from './constants';

export interface PageMetadataArgs {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  image,
}: PageMetadataArgs): Metadata {
  const url = path ? `${SITE_URL}${path}` : SITE_URL;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: path ?? '/' },
    openGraph: {
      title,
      description,
      url,
      siteName: COMPANY_NAME,
      locale: 'en_IN',
      type: 'website',
      images: image ? [{ url: image }] : [{ url: '/officiallogo.png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}