'use client';
import React from 'react';
import Link from 'next/link';
import { BedDouble, Compass, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/data/navigation';
import styles from '@/components/shared/CTASection.module.scss';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function CTASection({
  title = 'Plan Your Puri Experience Today',
  description = 'Stay, explore, celebrate – all with one trusted family.',
  primaryLabel = 'Book a Stay',
  primaryHref = '/booking',
}: CTASectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desc}>{description}</p>
          </div>
          <div className={styles.actions}>
            <Link href={primaryHref} className={styles.goldBtn}>
              <BedDouble size={16} />
              {primaryLabel}
            </Link>
            <Link href="/tours" className={styles.outlineBtn}>
              <Compass size={16} />
              Explore Tours
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}