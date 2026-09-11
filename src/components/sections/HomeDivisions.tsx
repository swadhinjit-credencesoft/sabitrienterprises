'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Home, Gem, Compass, Palette } from 'lucide-react';
import styles from '@/components/sections/home.module.scss';

const divisionsData = [
  {
    name: 'Sabitri Homestay',
    desc: 'Heritage stay near Jagannath Temple & Puri Beach with warm Odia hospitality.',
    linkText: 'Explore Homestay',
    href: '/homestay',
    icon: Home,
    iconColor: 'navyIcon',
  },
  {
    name: 'Sabitri Jewellery',
    desc: 'Exquisite handcrafted silver & gold jewellery inspired by Odisha.',
    linkText: 'Explore Jewellery',
    href: '/jewellery',
    icon: Gem,
    iconColor: 'goldIcon',
  },
  {
    name: 'Sabitri Tours & Travels',
    desc: 'Curated temple, beach & cultural tours across Odisha with comfort.',
    linkText: 'Explore Tours',
    href: '/tours',
    icon: Compass,
    iconColor: 'navyIcon',
  },
  {
    name: 'Sabitri Handicrafts',
    desc: 'Authentic Pattachitra, woodcraft, stone & palm crafts by local artisans.',
    linkText: 'Explore Handicrafts',
    href: '/handicrafts',
    icon: Palette,
    iconColor: 'goldIcon',
  },
];

export default function HomeDivisions() {
  return (
    <section className={styles.divisions}>
      <div className={styles.divContainer}>
        <div className={styles.sectionTitleRow}>
          <span className={styles.titleLine} />
          <span className={styles.titleDiamond} />
          <h2 className={styles.sectionHeading}>Four Businesses, One Family Promise</h2>
          <span className={styles.titleDiamond} />
          <span className={`${styles.titleLine} ${styles.lineRight}`} />
        </div>

        <div className={styles.divGrid}>
          {divisionsData.map((item) => {
            const Icon = item.icon;
            const colorClass = styles[item.iconColor] || '';
            return (
              <Link key={item.href} href={item.href} className={styles.divCard}>
                <div className={`${styles.divIconWrap} ${colorClass}`}>
                  <Icon size={24} />
                </div>
                <div className={styles.divBody}>
                  <h3 className={styles.divName}>{item.name}</h3>
                  <p className={styles.divTagline}>{item.desc}</p>
                  <span className={styles.divArrow}>
                    {item.linkText} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}