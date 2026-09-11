import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/shared/SectionHeader';
import ContactForm from '@/components/forms/ContactForm';
import {
  CONTACT_PHONE,
  CONTACT_EMAIL,
  CONTACT_ADDRESS,
} from '@/data/navigation';
import { IMG } from '@/data/images';
import styles from '@/components/forms/contact.module.scss';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Sabitri Enterprises — book a homestay room, plan a tour, or enquire about jewellery and handicrafts. Phone, WhatsApp, and email.',
};

const contactCards = [
  {
    icon: Phone,
    title: 'Call Us',
    lines: [CONTACT_PHONE, 'Daily 6:00 AM — 10:00 PM'],
    href: `tel:${CONTACT_PHONE.replace(/\s/g, '')}`,
    action: 'Call now',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: [CONTACT_EMAIL, 'We reply within 24 hours'],
    href: `mailto:${CONTACT_EMAIL}`,
    action: 'Send email',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: [CONTACT_ADDRESS],
    href: 'https://maps.google.com/?q=Grand+Road+Puri+Odisha',
    action: 'Open in maps',
  },
  {
    icon: Clock,
    title: 'Front Desk Hours',
    lines: ['6:00 AM — 10:00 PM', 'Open all days'],
    href: '/faq',
    action: 'Read our FAQ',
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="Have a question, a booking, or a custom request? We'd love to hear from you."
        image={IMG.house1}
        badge="We're Here to Help"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.infoCol}>
              <SectionHeader
                caption="Get in Touch"
                title="Reach Any of Our Divisions"
                description="One message reaches our whole family — homestay, tours, jewellery, and handicrafts."
                align="left"
              />
              <div className={styles.cardList}>
                {contactCards.map((card) => (
                  <div key={card.title} className={styles.card}>
                    <span className={styles.cardIcon}>
                      <card.icon size={20} />
                    </span>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                      {card.lines.map((line) => (
                        <p key={line} className={styles.cardLine}>
                          {line}
                        </p>
                      ))}
                    </div>
                    <Link href={card.href} className={styles.cardAction}>
                      {card.action}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.formCol}>
              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                <p className={styles.formIntro}>
                  Fill this in and we&apos;ll get back to you — or hit the button
                  to continue on WhatsApp.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
