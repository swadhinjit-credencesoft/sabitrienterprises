'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, LayoutGrid, BedDouble, Sparkles } from 'lucide-react';
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
    <div className={styles.heroWrapper}>
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

      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroEyebrow}>
            <Sparkles size={13} />
            <span>HERITAGE · HOSPITALITY · CULTURE</span>
          </div>
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
            {/* Slot 1: Main Temple Video */}
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

            {/* Slot 2: Homestay Bedroom Video */}
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

            {/* Slot 3: Gold Jewellery Video */}
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

            {/* Slot 4: Handicrafts Video */}
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

            {/* Slot 5: Beach / Tours Video */}
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
    </div>
  );
}