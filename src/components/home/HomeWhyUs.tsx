'use client';
import React from 'react';
import {
  Heart,
  Sparkles,
  Handshake,
  BadgeCheck,
  Leaf,
  ShieldCheck,
} from 'lucide-react';
import { companyValues } from '../../data/company';
import SectionHeader from '../shared/SectionHeader';
import { useGSAPReveal } from '../../hooks/useGSAPReveal';
import styles from './home.module.scss';

const ICONS: Record<string, React.ElementType> = {
  Heart,
  Sparkles,
  Handshake,
  BadgeCheck,
  Leaf,
  ShieldCheck,
};

export default function HomeWhyUs() {
  const revealRef = useGSAPReveal({ stagger: 0.12 });

  return (
    <section className={styles.whyUs}>
      <div className={styles.whyUsContainer}>
        <SectionHeader
          caption="Why Choose Us"
          title="Values That Guide Everything We Do"
          description="A family of businesses built on hospitality, authenticity, and a deep love for the heritage of Odisha."
        />
        <div className={styles.whyUsGrid} ref={revealRef}>
          {companyValues.slice(0, 4).map((value) => {
            const Icon = ICONS[value.icon];
            return (
              <div key={value.title} className={styles.whyCard}>
                <div className={styles.whyIcon}>
                  {Icon && <Icon size={24} />}
                </div>
                <h3 className={styles.whyTitle}>{value.title}</h3>
                <p className={styles.whyDesc}>{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
