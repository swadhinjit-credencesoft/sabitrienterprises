'use client';
import React from 'react';
import Link from 'next/link';
import { megamenuItems } from '../../../../data/navigation';
import styles from './Megamenu.module.scss';

export default function Megamenu() {
  return (
    <div className={styles.megamenu}>
      <div className={styles.grid}>
        {megamenuItems.map((item, idx) => (
          <Link key={idx} href={item.href} className={styles.item}>
            <div className={styles.imageWrap}>
              <img src={item.image} alt={item.name} className={styles.image} />
            </div>
            <div className={styles.content}>
              <span className={styles.short}>{item.short}</span>
              <h4 className={styles.name}>{item.name}</h4>
              <p className={styles.tagline}>{item.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.footer}>
        <Link href="/about" className={styles.viewAll}>
          Explore All Divisions &rarr;
        </Link>
      </div>
    </div>
  );
}
