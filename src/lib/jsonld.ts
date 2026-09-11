import {
  SITE_URL,
  COMPANY_NAME,
  TAGLINE,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  CONTACT_ADDRESS,
} from './constants';

export function getJsonLd(): object[] {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: SITE_URL,
      slogan: TAGLINE,
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      address: {
        '@type': 'PostalAddress',
        streetAddress: CONTACT_ADDRESS,
        addressLocality: 'Puri',
        addressRegion: 'Odisha',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://www.instagram.com/sabitrienterprises',
        'https://www.facebook.com/sabitrienterprises',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LodgingBusiness',
      name: 'Sabitri Homestay',
      url: `${SITE_URL}/homestay`,
      description: 'Heritage homestay near Jagannath Temple, Puri, Odisha.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: CONTACT_ADDRESS,
        addressLocality: 'Puri',
        addressRegion: 'Odisha',
        addressCountry: 'IN',
      },
      telephone: CONTACT_PHONE,
      checkinTime: '12:00',
      checkoutTime: '11:00',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, NEFT',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: COMPANY_NAME,
      url: SITE_URL,
    },
  ];
}