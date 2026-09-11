import type { Metadata } from 'next';
import { Star, Quote } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/shared/SectionHeader';
import CTASection from '@/components/shared/CTASection';
import { testimonials } from '@/data/home';
import { IMG } from '@/data/images';
import styles from '@/app/testimonials/testimonials.module.scss';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'What our guests and customers say about Sabitri Homestay, tours, jewellery, and handicrafts in Puri.',
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? styles.starFilled : styles.starEmpty}
        />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main>
      <PageHero
        title="Testimonials"
        subtitle="The kindest words come from our guests and customers. Here are a few of them."
        image={IMG.beach1}
        badge="Kind Words"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            caption="Guest Stories"
            title="Loved by Travellers & Customers"
          />
          <div className={styles.grid}>
            {testimonials.map((t) => (
              <figure key={t.name} className={styles.card}>
                <Quote className={styles.quoteIcon} size={28} />
                <Stars rating={t.rating} />
                <blockquote className={styles.text}>{t.text}</blockquote>
                <figcaption className={styles.author}>
                  <div>
                    <p className={styles.name}>{t.name}</p>
                    <p className={styles.meta}>
                      {t.location} · {t.service}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Your Story Could Be Next"
        description="Stay with us, travel with us, or take home a piece of Odisha — then tell us how it went."
        primaryLabel="Get Started"
      />
    </main>
  );
}
