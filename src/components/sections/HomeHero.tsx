'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, LayoutGrid, BedDouble } from 'lucide-react';
import { IMG } from '@/data/images';
import styles from '@/components/sections/home.module.scss';

export default function HomeHero() {
  const v1 = useRef<HTMLVideoElement>(null);
  const v2 = useRef<HTMLVideoElement>(null);
  const v3 = useRef<HTMLVideoElement>(null);
  const v4 = useRef<HTMLVideoElement>(null);
  const v5 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    [v1, v2, v3, v4, v5].forEach((ref) => {
      if (ref.current) {
        ref.current.muted = true;
        ref.current.play().catch(() => {});
      }
    });
  }, []);

  return (
    <section className={styles.hero}>
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
          {/* Slot 1: Main Jagannath Temple Video */}
          <div className={`${styles.mosaicItem} ${styles.mosaicTemple}`}>
            <video
              ref={v1}
              src="https://assets.mixkit.co/videos/1086/1086-720.mp4"
              poster={IMG.temple}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>

          {/* Slot 2: Top-Right Homestay Bedroom Video */}
          <div className={`${styles.mosaicItem} ${styles.mosaicRoom}`}>
            <video
              ref={v2}
              src="https://assets.mixkit.co/videos/4029/4029-720.mp4"
              poster={IMG.room1}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>

          {/* Slot 3: Far-Right Gold Jewellery Video */}
          <div className={`${styles.mosaicItem} ${styles.mosaicJewellery}`}>
            <video
              ref={v3}
              src="https://assets.mixkit.co/videos/5220/5220-720.mp4"
              poster={IMG.jewelleryGold}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>

          {/* Slot 4: Far-Right Bottom Handicrafts Video */}
          <div className={`${styles.mosaicItem} ${styles.mosaicCraft}`}>
            <video
              ref={v4}
              src="https://assets.mixkit.co/videos/5177/5177-720.mp4"
              poster={IMG.art}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>

          {/* Slot 5: Bottom Puri Beach / Tours Video */}
          <div className={`${styles.mosaicItem} ${styles.mosaicBeach}`}>
            <video
              ref={v5}
              src="https://assets.mixkit.co/videos/42368/42368-720.mp4"
              poster={IMG.beach2}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}