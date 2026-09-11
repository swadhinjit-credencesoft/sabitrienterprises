'use client';
import React from 'react';
import { Heart, Sparkles, Users, Award } from 'lucide-react';
import styles from '@/components/sections/home.module.scss';

const valuesData = [
  {
    title: 'Hospitality First',
    desc: 'We treat every guest like family, every time.',
    icon: Heart,
    iconColor: 'navyIcon',
  },
  {
    title: 'Authenticity',
    desc: 'Real experiences, rooted in Odisha.',
    icon: Sparkles,
    iconColor: 'goldIcon',
  },
  {
    title: 'Community',
    desc: 'Empowering artisans and supporting local.',
    icon: Users,
    iconColor: 'navyIcon',
  },
  {
    title: 'Quality',
    desc: 'Care in every detail, promise in every service.',
    icon: Award,
    iconColor: 'goldIcon',
  },
];

export default function HomeWhyUs() {
  return (
    <section className={styles.whyUs}>
      <div className={styles.whyUsContainer}>
        <div className={styles.sectionTitleRow}>
          <span className={styles.titleLine} />
          <span className={styles.titleDiamond} />
          <h2 className={styles.sectionHeading}>
            Values That Guide Everything We Do
          </h2>
          <span className={styles.titleDiamond} />
          <span className={`${styles.titleLine} ${styles.lineRight}`} />
        </div>

        <div className={styles.whyUsGrid}>
          {valuesData.map((val) => {
            const Icon = val.icon;
            const colorClass = styles[val.iconColor] || '';
            return (
              <div key={val.title} className={styles.whyCard}>
                <div className={`${styles.whyIcon} ${colorClass}`}>
                  <Icon size={24} />
                </div>
                <h3 className={styles.whyTitle}>{val.title}</h3>
                <p className={styles.whyDesc}>{val.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}