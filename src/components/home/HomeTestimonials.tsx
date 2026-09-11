'use client';
import React from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/home';
import SectionHeader from '../shared/SectionHeader';
import { useGSAPReveal } from '../../hooks/useGSAPReveal';
import styles from './home.module.scss';

export default function HomeTestimonials() {
  const revealRef = useGSAPReveal({ stagger: 0.15 });
  const items = testimonials.slice(0, 3);

  return (
    <section className={styles.testimonials}>
      <div className={styles.testiContainer}>
        <SectionHeader
          caption="Guest Stories"
          title="Kind Words From Our Guests"
          description="Real experiences shared by travellers who stayed, toured, and shopped with Sabitri Enterprises."
        />
        <div className={styles.testiGrid} ref={revealRef}>
          {items.map((t, idx) => (
            <div key={idx} className={styles.testiCard}>
              <div className={styles.testiStars}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} />
                ))}
              </div>
              <p className={styles.testiText}>“{t.text}”</p>
              <div className={styles.testiMeta}>
                <div>
                  <p className={styles.testiName}>{t.name}</p>
                  <p>{t.location}</p>
                </div>
                <span className={styles.testiService}>{t.service}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link href="/testimonials" className={styles.aboutLink}>
            Read More Testimonials &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
