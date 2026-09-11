import { PolicyDocument } from '@/types/index';

export const policies: PolicyDocument[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    description: 'How Sabitri Enterprises collects, uses, stores, discloses, and protects your personal information.',
    sections: [
      {
        heading: 'Introduction',
        body: [
          'Sabitri Enterprises ("Sabitri Enterprises", "we", "us", or "our") respects your privacy and is committed to protecting your personal information.',
          'This Privacy Policy explains how we collect, use, store, disclose, and protect personal information when you visit our website, create an account, place an order, use our services, or communicate with us.',
          'By accessing or using our website and services, you acknowledge that you have read and understood this Privacy Policy.',
        ],
      },
      {
        heading: '1. Information We Collect',
        body: [
          'We may collect information that you voluntarily provide to us, including:',
          '• Full name',
          '• Billing address',
          '• Shipping/delivery address',
          '• Mobile/telephone number',
          '• Email address',
          '• Account/login information',
          '• Order and purchase details',
          '• Payment-related information processed through authorised payment providers',
          '• Product preferences and items viewed, added to cart, or saved',
          '• Reviews, photographs, comments, and other content submitted by you',
          '• Customer-support communications',
          '• Information provided when you participate in offers, promotions, surveys, or contests',
          'We only request information that is reasonably necessary for providing our services, processing transactions, customer support, legal compliance, and other legitimate business purposes.',
        ],
      },
      {
        heading: '2. Information Collected Automatically',
        body: [
          'When you visit our website, certain technical information may be collected automatically, including:',
          '• IP address',
          '• Browser type and version',
          '• Device type and operating system',
          '• Network information',
          '• Pages visited',
          '• Date and time of visits',
          '• Approximate location information',
          '• Website usage and interaction information',
          '• Cookies and similar technologies',
          'This information may be used to maintain website functionality, improve security, analyse website performance, and improve customer experience.',
        ],
      },
      {
        heading: '3. Cookies and Similar Technologies',
        body: [
          'Our website may use cookies, pixels, tags, and similar technologies to:',
          '• Keep you signed in',
          '• Remember shopping-cart information',
          '• Understand website usage',
          '• Improve website performance',
          '• Provide relevant advertisements where permitted',
          '• Measure marketing and advertising performance',
          '• Prevent fraud and misuse',
          'You may be able to manage or disable cookies through your browser or device settings. Disabling certain cookies may affect some website features.',
        ],
      },
      {
        heading: '4. How We Use Your Personal Information',
        body: [
          'We may use your information to:',
          '1. Process and fulfil orders.',
          '2. Process payments through authorised payment providers.',
          '3. Arrange shipping and delivery.',
          '4. Provide customer support.',
          '5. Communicate order confirmations, shipping updates, and service notifications.',
          '6. Create and maintain customer accounts.',
          '7. Improve our products, website, and services.',
          '8. Detect, investigate, and prevent fraud, abuse, or unauthorised activity.',
          '9. Maintain business and transaction records.',
          '10. Send promotional or marketing communications where permitted by law and, where required, with your consent.',
          '11. Comply with applicable laws, regulations, legal proceedings, or governmental requirements.',
          '12. Protect our legal rights, customers, employees, and business operations.',
        ],
      },
      {
        heading: '5. Payment Information',
        body: [
          'Payments may be processed through third-party payment gateways or financial service providers.',
          'Sabitri Enterprises generally does not directly store complete debit-card, credit-card, banking, or other sensitive payment credentials on its own systems unless specifically stated.',
          'Payment information is processed according to the applicable terms and privacy policies of the relevant payment service provider.',
        ],
      },
      {
        heading: '6. Information Received from Third Parties',
        body: [
          'We may receive limited information from service providers and business partners, including:',
          '• E-commerce/platform providers',
          '• Payment processors',
          '• Courier and logistics providers',
          '• Advertising and marketing partners',
          '• Analytics providers',
          '• Customer-support providers',
          '• Fraud-prevention and security service providers',
          'Such information will be handled in accordance with applicable law and this Privacy Policy, where applicable.',
        ],
      },
      {
        heading: '7. How We Share Personal Information',
        body: [
          'We do not sell your personal information as a commercial commodity.',
          'We may share necessary information with trusted third parties where reasonably required to operate our business, including:',
          '• Payment processors',
          '• Courier and delivery companies',
          '• Hosting and website service providers',
          '• E-commerce technology providers',
          '• IT and technical service providers',
          '• Analytics providers',
          '• Marketing and advertising service providers',
          '• Professional advisers',
          '• Government authorities, courts, regulators, or law-enforcement agencies where legally required',
          'Only information reasonably necessary for the relevant purpose should be shared.',
        ],
      },
      {
        heading: '8. Data Security',
        body: [
          'We take reasonable technical and organisational measures to protect personal information against unauthorised access, loss, misuse, alteration, disclosure, or destruction.',
          'However, no website, electronic transmission, or storage system can be guaranteed to be completely secure.',
          'Customers should also take reasonable precautions, including maintaining the confidentiality of account passwords and not sharing account credentials with others.',
        ],
      },
      {
        heading: '9. Data Retention',
        body: [
          'We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including:',
          '• Processing and fulfilling orders',
          '• Maintaining customer accounts',
          '• Providing customer support',
          '• Maintaining financial and transaction records',
          '• Resolving complaints and disputes',
          '• Preventing fraud and misuse',
          '• Complying with applicable legal, tax, accounting, and regulatory requirements',
          '• Establishing or defending legal claims',
          'When information is no longer reasonably required, it may be deleted, anonymised, or securely disposed of, subject to applicable law.',
        ],
      },
      {
        heading: '10. Your Privacy Rights',
        body: [
          'Subject to applicable law, you may have rights relating to your personal information, including:',
          '• Requesting access to personal information held about you',
          '• Requesting correction of inaccurate information',
          '• Requesting deletion of information where legally permitted',
          '• Requesting information regarding how your data is processed',
          '• Withdrawing consent where processing is based on consent',
          '• Opting out of certain marketing communications',
          '• Raising a complaint regarding the handling of your personal information',
          'Requests may be subject to reasonable verification requirements.',
        ],
      },
      {
        heading: '11. Marketing Communications',
        body: [
          'Where permitted by applicable law, we may send promotional communications regarding:',
          '• New products',
          '• Special offers',
          '• Discounts',
          '• Sales',
          '• Events',
          '• Services',
          '• Other business updates',
          'You may unsubscribe from promotional emails by using the unsubscribe option provided in the communication or by contacting us.',
          'Transactional and essential service communications may still be sent where necessary to complete or manage your order or account.',
        ],
      },
      {
        heading: '12. Children’s Privacy',
        body: [
          'Our website and services are not intentionally designed to collect personal information from children.',
          'If you believe that a child has provided personal information to us without appropriate authorisation, please contact us so that we can review and take appropriate action in accordance with applicable law.',
        ],
      },
      {
        heading: '13. Third-Party Websites',
        body: [
          'Our website may contain links to third-party websites, applications, payment services, social-media platforms, or other external services.',
          'Sabitri Enterprises is not responsible for the privacy practices, security, content, or policies of third-party websites.',
          'Customers should review the privacy policies and terms of the relevant third parties before providing personal information.',
        ],
      },
      {
        heading: '14. User-Generated Content',
        body: [
          'If you voluntarily submit reviews, photographs, comments, testimonials, or other content to our website or official social-media channels, such content may be displayed publicly where applicable.',
          'You should avoid submitting confidential or sensitive personal information in publicly visible reviews or comments.',
          'Where you provide content for publication, you grant Sabitri Enterprises permission to use, reproduce, display, publish, and distribute that content for legitimate business, promotional, or marketing purposes, subject to applicable law.',
        ],
      },
      {
        heading: '15. Data Breaches and Security Incidents',
        body: [
          'If we become aware of a personal-data security incident requiring action or notification under applicable law, we will take appropriate steps as required by the applicable legal and regulatory framework.',
          'This may include investigating the incident, taking reasonable steps to mitigate its effects, and making legally required notifications.',
        ],
      },
      {
        heading: '16. Legal and Regulatory Compliance',
        body: [
          'Sabitri Enterprises may collect, use, preserve, or disclose information where reasonably necessary to:',
          '• Comply with applicable laws and regulations',
          '• Respond to lawful requests from government authorities',
          '• Prevent fraud or unlawful activities',
          '• Protect our rights and property',
          '• Protect customers and other persons',
          '• Investigate suspected violations of our policies',
          '• Establish, exercise, or defend legal claims',
        ],
      },
      {
        heading: '17. Changes to this Privacy Policy',
        body: [
          'We may modify or update this Privacy Policy from time to time due to:',
          '• Changes in our business operations',
          '• Changes in technology',
          '• Changes in our services',
          '• Changes in applicable laws or regulations',
          '• Changes in privacy or security practices',
          'The revised Privacy Policy will be published on our website with an updated "Last Updated" date.',
          'Where required by applicable law, we will provide additional notice or obtain consent for material changes.',
        ],
      },
      {
        heading: '18. Grievance / Privacy Contact',
        body: [
          'If you have questions, concerns, complaints, or requests regarding this Privacy Policy or the handling of your personal information, please contact us:',
          'Sabitri Enterprises',
          'Email: info@sabitrienterprises.com',
          'Phone: +91  96912 67091',
          'Business Address: Grand Road, Puri, Odisha, India 752001',
          'We will review and respond to privacy-related requests in accordance with applicable law and within the applicable statutory timelines.',
        ],
      },
      {
        heading: '19. Governing Law',
        body: [
          'This Privacy Policy shall be interpreted and governed by the applicable laws of India, subject to any mandatory rights or protections available to consumers under applicable law.',
        ],
      },
      {
        heading: '20. Acceptance',
        body: [
          'By using our website, creating an account, placing an order, or otherwise using our services, you acknowledge that you have read and understood this Privacy Policy.',
          'If you do not agree with this Privacy Policy, please discontinue use of the website and services.',
        ],
      },
    ],
  },
  {
    slug: 'terms-and-conditions',
    title: 'Terms & Conditions',
    description: 'The terms that govern your use of our website and services.',
    sections: [
      {
        heading: 'Acceptance of Terms',
        body: [
          'By using this website or booking any service of Sabitri Enterprises, you agree to these Terms & Conditions. If you do not agree, please do not use our services.',
        ],
      },
      {
        heading: 'Our Services',
        body: [
          'Sabitri Enterprises provides homestay accommodation, jewellery and handicraft products, and tour and travel services through its four business divisions.',
          'Descriptions and availability of rooms, products, and tours are provided in good faith and may change without prior notice.',
        ],
      },
      {
        heading: 'Reservations & Bookings',
        body: [
          'All bookings are subject to availability and confirmation by our team. A booking is confirmed only when we send you written confirmation.',
          'Please review the relevant Booking, Cancellation, and Refund Policies before confirming.',
        ],
      },
      {
        heading: 'Pricing & Payments',
        body: [
          'All prices are quoted in Indian Rupees (INR) unless stated otherwise. Taxes and any additional charges will be communicated clearly before confirmation.',
          'Prices may be revised due to changes in taxes, season, or external factors; confirmed bookings will not be changed retroactively.',
        ],
      },
      {
        heading: 'Website Content',
        body: [
          'All text, images, and content on this website are the property of Sabitri Enterprises and may not be reproduced without written permission.',
          'Product and property photographs are representative; actual items and rooms may vary slightly.',
        ],
      },
      {
        heading: 'Limitation of Liability',
        body: [
          'Sabitri Enterprises is not liable for indirect or consequential losses arising from the use of our services, except where required by law.',
          'For tours, we act as an organiser of services provided by third parties and are not responsible for their negligence.',
        ],
      },
    ],
  },
  {
    slug: 'cancellation-policy',
    title: 'Cancellation & Refund Policy',
    description: 'Our cancellation and refund terms for homestay bookings and tour packages.',
    sections: [
      {
        heading: 'Homestay Cancellations',
        body: [
          'Cancellations made 7 or more days before check-in: 100% refund of the amount paid.',
          'Cancellations made 3–6 days before check-in: 50% refund.',
          'Cancellations made less than 48 hours before check-in or no-shows: no refund.',
        ],
      },
      {
        heading: 'Tour Package Cancellations',
        body: [
          'Cancellations made 10 or more days before tour start: 100% refund.',
          'Cancellations made 5–9 days before tour start: 50% refund.',
          'Cancellations made less than 5 days before tour start: no refund.',
        ],
      },
      {
        heading: 'How Refunds Are Processed',
        body: [
          'Refunds are processed within 7–10 business days using the original payment method.',
          'Any bank or gateway charges incurred during the transaction may be deducted from the refund amount.',
        ],
      },
      {
        heading: 'Company-Initiated Cancellations',
        body: [
          'If we cancel a booking due to unforeseen circumstances (such as extreme weather or safety issues), you will receive a full refund or a full credit to reschedule.',
        ],
      },
    ],
  },
  {
    slug: 'booking-policy',
    title: 'Booking Policy',
    description: 'How bookings work for homestay stays and tours.',
    sections: [
      {
        heading: 'How to Book',
        body: [
          'Bookings can be made through our Booking page, by phone at +91  96912 67091, or on WhatsApp.',
          'We recommend booking at least 2–3 days in advance, and well ahead during peak seasons such as Rath Yatra and festival periods.',
        ],
      },
      {
        heading: 'Confirmation',
        body: [
          'A booking is confirmed once you receive written confirmation from our team, including your booking details and payment status.',
          'For online reservations, a valid advance payment or deposit may be required to guarantee the booking.',
        ],
      },
      {
        heading: 'Check-in & Check-out',
        body: [
          'Standard check-in is 12:00 PM and check-out is 11:00 AM.',
          'Early check-in and late check-out depend on availability and can be requested in advance.',
        ],
      },
      {
        heading: 'Guest Responsibilities',
        body: [
          'Guests must carry a valid government photo ID for check-in.',
          'Please inform us of any special requirements, dietary needs, or mobility assistance at the time of booking.',
        ],
      },
    ],
  },
  {
    slug: 'shipping-policy',
    title: 'Shipping & Delivery Policy',
    description: 'Delivery terms for jewellery and handicraft orders.',
    sections: [
      {
        heading: 'Section 1 – Processing Times',
        body: [
          'Each item is carefully made to order. Please allow up to 7 days for processing, quality checks, and secure packaging before shipment.',
          'Processing time is separate from the courier’s delivery time.',
          'Orders cannot be cancelled once processing has begun.',
        ],
      },
      {
        heading: 'Section 2 – Domestic Shipping (India)',
        body: [
          'We ship across India using trusted courier partners.',
          'Estimated delivery timelines will be provided in your shipment confirmation email.',
          'Delivery timelines shown by couriers are estimates only and may vary.',
        ],
      },
      {
        heading: 'Packaging',
        body: [
          'All jewellery and handicrafts are carefully packed in protective, bubble-wrapped packaging to ensure they arrive in perfect condition.',
          'Fragile items are double-boxed and marked accordingly.',
        ],
      },
      {
        heading: 'Tracking',
        body: [
          'A tracking number is shared by email or WhatsApp once your order is dispatched.',
          'You can track your shipment directly on the courier’s website.',
        ],
      },
      {
        heading: 'Damaged or Missing Items',
        body: [
          'Please inspect your package on delivery. If an item is damaged or missing, notify us within 24–48 hours with an unboxing video and clear photos.',
          'We will arrange a replacement or refund for verified claims.',
        ],
      },
    ],
  },
  {
    slug: 'jewellery-return-policy',
    title: 'Jewellery Return & Refund Policy',
    description: 'Return and refund terms for our 925 silver jewellery and Jagannath lockets.',
    sections: [
      {
        heading: 'Return Window',
        body: [
          'Returns are accepted within 7 days from the date of delivery.',
        ],
      },
      {
        heading: 'When Returns Are Accepted',
        body: [
          'Returns are accepted only if the item is damaged, defective, the wrong item, or materially different from the description.',
        ],
      },
      {
        heading: 'Damage Claims',
        body: [
          'Customers must provide an unboxing video along with clear photos within 24–48 hours of delivery for damage claims.',
        ],
      },
      {
        heading: 'Condition of Returned Items',
        body: [
          'The product must be unused, unworn, and in its original packaging.',
        ],
      },
      {
        heading: 'When Returns Are Not Accepted',
        body: [
          'No returns are accepted for change of mind, size preference, or accidental damage after use.',
          'Returns are not accepted for jewellery that has been removed, altered, or modified by the customer.',
        ],
      },
      {
        heading: 'Refunds',
        body: [
          'Refunds are processed after inspection and approval of the returned item.',
          'Refunds are issued back to the original payment method.',
        ],
      },
      {
        heading: 'Return Shipping',
        body: [
          'Shipping charges are treated separately. For seller-error or damaged-item cases, we bear the return shipping cost.',
        ],
      },
    ],
  },
];
