'use client';
import React from 'react';
import { Landmark, Waves, Users, IndianRupee } from 'lucide-react';
import { IMG } from '@/data/images';
import styles from '@/components/sections/home.module.scss';

const aboutFeatures = [
  { icon: Landmark, label: 'Steps from Jagannath Temple' },
  { icon: Waves, label: 'Close to Puri Beach' },
  { icon: Users, label: 'Supporting Local Artisans' },
  { icon: IndianRupee, label: 'Transparent Pricing' },
];

export default function HomeAbout() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImageWrap}>
            <img
              src={IMG.beach2}
              alt="Puri Beach and Temple Skyline at Sunset"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.aboutContent}>
            <span className={styles.aboutCaption}>OUR STORY</span>
            <h2 className={styles.aboutTitle}>
              Rooted in Puri, Growing with Heritage
            </h2>
            <p className={styles.aboutText}>
              For generations, our family has welcomed travellers, celebrated
              traditions, and supported local artisans. From our heritage homestay
              steps away from Jagannath Temple and Puri Beach to our handcrafted
              jewellery, curated tours, and authentic crafts – everything we do is
              guided by trust, transparency, and the spirit of Odisha.
            </p>
            <div className={styles.aboutBadges}>
              {aboutFeatures.map(({ icon: Icon, label }) => (
                <div key={label} className={styles.aboutBadge}>
                  <div className={styles.aboutBadgeIcon}>
                    <Icon size={18} />
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}