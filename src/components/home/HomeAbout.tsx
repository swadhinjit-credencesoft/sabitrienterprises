'use client';
import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { companyProfile } from '../../data/company';
import { IMG } from '../../data/images';
import styles from './home.module.scss';

export default function HomeAbout() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImageWrap}>
            <img src={IMG.house1} alt="Sabitri Homestay on Grand Road, Puri" />
          </div>
          <div>
            <span className={styles.aboutCaption}>Our Story</span>
            <h2 className={styles.aboutTitle}>
              Rooted in Puri, Growing with Heritage
            </h2>
            <p className={styles.aboutText}>{companyProfile.story[0]}</p>
            <ul className={styles.aboutList}>
              {companyProfile.whyChooseUs.slice(0, 4).map((item) => (
                <li key={item}>
                  <Check size={18} />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className={styles.aboutLink}>
              Read Our Full Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
