'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './PageHero.module.scss';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  video?: string;
  badge?: string;
}

export default function PageHero({ title, subtitle, image, video, badge }: PageHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (el) {
      el.muted = true;
      el.play().catch(() => {});
    }
  }, [video]);

  return (
    <section className={styles.hero}>
      {video ? (
        <video
          ref={videoRef}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={image}
          className={styles.bgVideo}
        />
      ) : (
        image && <img src={image} alt="" className={styles.bg} />
      )}
      <div className={styles.overlay} />
      <div className={styles.container}>
        {badge && <span className={styles.badge}>{badge}</span>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <Link href="/contact" className={styles.link}>
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
