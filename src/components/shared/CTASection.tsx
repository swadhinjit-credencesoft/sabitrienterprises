'use client';
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_PHONE, WHATSAPP_NUMBER } from '@/data/navigation';
import styles from './CTASection.module.scss';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function CTASection({
  title = 'Plan Your Puri Experience Today',
  description = 'Book a stay, plan a tour, or take home a piece of Odisha heritage. Our team responds within a few hours.',
  primaryLabel = 'Book Now',
  primaryHref = '/booking',
}: CTASectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.blur1} />
          <div className={styles.blur2} />
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desc}>{description}</p>
            <div className={styles.actions}>
              <Link href={primaryHref} className={styles.primary}>
                {primaryLabel}
              </Link>
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                className={styles.ghost}
              >
                <Phone size={16} />
                {CONTACT_PHONE}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ghost}
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
