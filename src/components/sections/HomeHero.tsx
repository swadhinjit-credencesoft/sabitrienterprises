'use client';
import React from 'react';
import Link from 'next/link';
import { MapPin, LayoutGrid, BedDouble } from 'lucide-react';
import { IMG } from '@/data/images';
import styles from '@/components/sections/home.module.scss';

export default function HomeHero() {
  return (
    <section className={styles.hero}>
      {/* Subtle Background Watermark */}
      <div className={styles.heroWatermark} aria-hidden="true">
        <svg viewBox="0 0 200 200" className={styles.watermarkSvg}>
          <circle cx="100" cy="100" r="90" fill="none" stroke="#c59a3d" strokeWidth="1.5" strokeOpacity="0.12" />
          <circle cx="100" cy="100" r="75" fill="none" stroke="#c59a3d" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.1" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="#c59a3d" strokeWidth="1.5" strokeOpacity="0.12" />
          <circle cx="100" cy="100" r="10" fill="#c59a3d" fillOpacity="0.08" />
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => (
            <line
              key={i}
              x1="100"
              y1="100"
              x2={100 + 75 * Math.cos((angle * Math.PI) / 180)}
              y2={100 + 75 * Math.sin((angle * Math.PI) / 180)}
              stroke="#c59a3d"
              strokeWidth={i % 2 === 0 ? "1.5" : "0.75"}
              strokeOpacity="0.1"
            />
          ))}
        </svg>
      </div>

      <div className={styles.heroLeft}>
        <h1 className={styles.heroTitle}>
          Experience the Soul of{' '}
          <span className={styles.heroAccent}>Odisha</span>, One Stay at a Time
        </h1>
        <p className={styles.heroSubtitle}>
          A heritage homestay beside Jagannath Temple, handcrafted jewellery,
          curated Odisha tours, and living crafts from one trusted Puri family.
        </p>
        <div className={styles.heroActions}>
          <Link href="/about" className={styles.heroBtnPrimary}>
            <LayoutGrid size={16} />
            Explore Our Divisions
          </Link>
          <Link href="/booking" className={styles.heroBtnGold}>
            <BedDouble size={16} />
            Book a Stay
          </Link>
        </div>
        <div className={styles.heroLocation}>
          <MapPin size={15} />
          <span>Puri, Odisha – Land of Lord Jagannath</span>
          <span className={styles.locationFlourish} aria-hidden="true">✦</span>
        </div>
      </div>

      <div className={styles.heroRight}>
        <div className={styles.heroMosaic}>
          {/* Main Temple Card */}
          <div className={`${styles.mosaicItem} ${styles.mosaicTemple}`}>
            <img
              src={IMG.temple}
              alt="Jagannath Temple at sunset, Puri"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Top-Right Bedroom Card */}
          <div className={`${styles.mosaicItem} ${styles.mosaicRoom}`}>
            <img
              src={IMG.room1}
              alt="Sabitri Heritage Homestay Suite"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Far-Right Gold Jewellery on Royal Blue */}
          <div className={`${styles.mosaicItem} ${styles.mosaicJewellery}`}>
            <img
              src={IMG.jewelleryGold}
              alt="Handcrafted Odia Gold & Silver Jewellery"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Far-Right Bottom Lord Jagannath Carving */}
          <div className={`${styles.mosaicItem} ${styles.mosaicCraft}`}>
            <img
              src={IMG.art}
              alt="Handcrafted Lord Jagannath Art & Pattachitra"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Bottom Puri Beach Sunset */}
          <div className={`${styles.mosaicItem} ${styles.mosaicBeach}`}>
            <img
              src={IMG.beach2}
              alt="Puri Beach Golden Hour"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}