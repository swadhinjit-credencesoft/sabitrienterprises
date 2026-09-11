import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import PageHero from '../../components/shared/PageHero';
import SectionHeader from '../../components/shared/SectionHeader';
import FaqClient from './FaqClient';
import { faqItems } from '../../data/home';
import { WHATSAPP_NUMBER } from '../../data/navigation';
import { IMG } from '../../data/images';
import styles from './faq.module.scss';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about Sabitri Homestay, tours, jewellery, and handicrafts in Puri.',
};

export default function FaqPage() {
  return (
    <main>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Quick answers about stays, tours, and shopping with Sabitri Enterprises."
        image={IMG.temple}
        badge="Good to Know"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            caption="Common Questions"
            title="Everything You Might Be Wondering"
          />
          <FaqClient items={faqItems} />
        </div>
      </section>

      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.helpCard}>
            <div className={styles.helpInfo}>
              <h2 className={styles.helpTitle}>Still have a question?</h2>
              <p className={styles.helpText}>
                Message us on WhatsApp and we&apos;ll reply as quickly as we can.
              </p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.helpBtn}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <Link href="/contact" className={styles.helpLink}>
              or use our contact form
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
