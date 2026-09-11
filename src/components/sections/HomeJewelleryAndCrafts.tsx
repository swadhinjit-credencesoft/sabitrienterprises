'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { IMG } from '@/data/images';
import styles from '@/components/sections/home.module.scss';

const jewelleryList = [
  {
    slug: 'divine-grace-jagannath-enamel-pendant',
    name: 'Lord Jagannath Enamel Pendant',
    desc: '925 sterling silver with rich Meenakari enamel.',
    price: '₹3,499',
    unit: 'piece',
    image: IMG.silver1,
    href: '/jewellery',
  },
  {
    slug: 'om-pendant-orange-enamel',
    name: 'Sacred Om Silver Pendant',
    desc: 'Pure 925 silver with vibrant enamel detailing.',
    price: '₹1,499',
    unit: 'piece',
    image: IMG.silver5,
    href: '/jewellery',
  },
  {
    slug: 'divine-grace-jagannath-floral-halo',
    name: 'Jagannath Floral Halo Pendant',
    desc: 'Hallmarked silver with filigree petal border.',
    price: '₹3,999',
    unit: 'piece',
    image: IMG.silver4,
    href: '/jewellery',
  },
];

const craftsList = [
  {
    slug: 'jagannath-triangle-painting',
    name: 'Pattachitra: Puri Trinity',
    desc: 'Hand-painted on cotton with natural mineral colours.',
    price: '₹2,500',
    unit: 'artwork',
    image: IMG.art,
    href: '/handicrafts',
  },
  {
    slug: 'mini-temple-replica',
    name: 'Silver Filigree Temple Replica',
    desc: 'Handcrafted Cuttack Tarakasi silver miniature.',
    price: '₹5,500',
    unit: 'artefact',
    image: IMG.jewellery1,
    href: '/handicrafts',
  },
  {
    slug: 'palm-leaf-etching',
    name: 'Palm Leaf Etched Panel',
    desc: 'Traditional Odia Tala Pattachitra manuscript art.',
    price: '₹1,200',
    unit: 'panel',
    image: IMG.handcraft2,
    href: '/handicrafts',
  },
];

export default function HomeJewelleryAndCrafts() {
  return (
    <section className={styles.dualSection}>
      <div className={styles.dualContainer}>
        <div className={styles.dualGrid}>
          {/* Jewellery Column */}
          <div className={styles.dualCol}>
            <div className={styles.sectionTitleRow}>
              <span className={styles.titleLine} />
              <span className={styles.titleDiamond} />
              <h2 className={styles.sectionHeading}>
                Handcrafted Silver & Jewellery
              </h2>
              <span className={styles.titleDiamond} />
              <span className={`${styles.titleLine} ${styles.lineRight}`} />
            </div>

            <div className={styles.cardsRow}>
              {jewelleryList.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className={styles.miniRoomCard}
                >
                  <div className={styles.miniCardImageWrap}>
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className={styles.miniCardBody}>
                    <h3 className={styles.miniCardName}>{item.name}</h3>
                    <p className={styles.miniCardDesc}>{item.desc}</p>
                    <div className={styles.miniCardPrice}>
                      {item.price} <span>/ {item.unit}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className={styles.viewAllBtnWrap}>
              <Link href="/jewellery" className={styles.viewAllBtn}>
                View All Jewellery <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Handicrafts Column */}
          <div className={styles.dualCol}>
            <div className={styles.sectionTitleRow}>
              <span className={styles.titleLine} />
              <span className={styles.titleDiamond} />
              <h2 className={styles.sectionHeading}>
                Authentic Odisha Handicrafts
              </h2>
              <span className={styles.titleDiamond} />
              <span className={`${styles.titleLine} ${styles.lineRight}`} />
            </div>

            <div className={styles.cardsRow}>
              {craftsList.map((craft) => (
                <Link
                  key={craft.slug}
                  href={craft.href}
                  className={styles.miniRoomCard}
                >
                  <div className={styles.miniCardImageWrap}>
                    <img
                      src={craft.image}
                      alt={craft.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className={styles.miniCardBody}>
                    <h3 className={styles.miniCardName}>{craft.name}</h3>
                    <p className={styles.miniCardDesc}>{craft.desc}</p>
                    <div className={styles.miniCardPrice}>
                      {craft.price} <span>/ {craft.unit}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className={styles.viewAllBtnWrap}>
              <Link href="/handicrafts" className={styles.viewAllBtn}>
                View All Handicrafts <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}