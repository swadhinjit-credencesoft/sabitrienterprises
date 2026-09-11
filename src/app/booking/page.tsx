import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CalendarCheck,
  BadgeCheck,
  Sparkles,
} from 'lucide-react';
import BookingClient from '@/components/forms/BookingClient';
import { IMG } from '@/data/images';
import { CONTACT_PHONE, WHATSAPP_NUMBER } from '@/data/navigation';
import styles from '@/components/forms/booking.module.scss';

export const metadata: Metadata = {
  title: 'Book & Enquire | Sabitri Enterprises, Puri',
  description:
    'Book your homestay room, an Odisha tour, or enquire about jewellery and handicrafts. Direct booking with Sabitri Enterprises — best rates, no prepayment, confirmed within hours.',
};

export default function BookingPage() {
  return (
    <main>
      <section className={styles.hero}>
        <img src={IMG.heroStay} alt="" className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            <Sparkles size={14} />
            Reserve with Sabitri Enterprises
          </span>
          <h1 className={styles.heroTitle}>
            Book &amp; Enquire in <span className={styles.heroAccent}>One Place</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Book a homestay room, plan an Odisha tour, or enquire about
            jewellery and handicrafts — all four divisions, one simple request.
            Our family team confirms every reservation personally within a few
            hours.
          </p>
          <div className={styles.heroTrust}>
            <span>
              <ShieldCheck size={16} />
              Best-rate guarantee
            </span>
            <span>
              <CalendarCheck size={16} />
              No prepayment required
            </span>
            <span>
              <BadgeCheck size={16} />
              Confirmed within hours
            </span>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <strong>4</strong>
              <span>Business divisions</span>
            </div>
            <div className={styles.heroStat}>
              <strong>0%</strong>
              <span>Prepayment</span>
            </div>
            <div className={styles.heroStat}>
              <strong>24h</strong>
              <span>Personal reply</span>
            </div>
            <div className={styles.heroStat}>
              <strong>100%</strong>
              <span>Family-run care</span>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <BookingClient />
      </Suspense>

      <section className={styles.policiesNote}>
        <div className={styles.container}>
          <div className={styles.policiesCard}>
            <p>
              By booking you agree to our{' '}
              <Link href="/policies/booking-policy">Booking Policy</Link>,{' '}
              <Link href="/policies/cancellation-policy">
                Cancellation &amp; Refund Policy
              </Link>{' '}
              and{' '}
              <Link href="/policies/privacy-policy">Privacy Policy</Link>. Need
              help? Call{' '}
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}>
                {CONTACT_PHONE}
              </a>{' '}
              or message us on{' '}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
