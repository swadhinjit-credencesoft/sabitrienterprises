'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { divisions } from '@/data/navigation';
import SectionHeader from '@/components/shared/SectionHeader';
import { useGSAPReveal } from '@/hooks/useGSAPReveal';
import styles from '@/components/sections/home.module.scss';

export default function HomeDivisions() {
  const revealRef = useGSAPReveal({ stagger: 0.12 });

  return (
    <section className={styles.divisions}>
      <div className={styles.divContainer}>
        <SectionHeader
          caption="Our Divisions"
          title="Four Businesses, One Family Promise"
          description="From a peaceful stay in Puri to heirlooms crafted in silver and gold — explore the family of brands that make up Sabitri Enterprises."
        />
        <div className={styles.divGrid} ref={revealRef}>
          {divisions.map((item) => (
            <Link key={item.href} href={item.href} className={styles.divCard}>
              <img src={item.image} alt={item.name} className={styles.divImage} />
              <div className={styles.divBody}>
                <span className={styles.divShort}>{item.short}</span>
                <h3 className={styles.divName}>{item.name}</h3>
                <p className={styles.divTagline}>{item.tagline}</p>
                <span className={styles.divArrow}>
                  Explore <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
