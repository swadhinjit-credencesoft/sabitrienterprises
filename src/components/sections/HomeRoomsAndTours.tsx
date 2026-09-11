'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { IMG } from '@/data/images';
import styles from '@/components/sections/home.module.scss';

const roomsList = [
  {
    slug: 'jagannath-suite',
    name: 'Jagannath Heritage Suite',
    desc: 'Heritage elegance with temple views & comfort.',
    price: '₹3,500',
    unit: 'night',
    image: IMG.room1,
  },
  {
    slug: 'sea-view-double',
    name: 'Sea Breeze Double Room',
    desc: 'Relax with a sea breeze just minutes from the shore.',
    price: '₹2,800',
    unit: 'night',
    image: IMG.room2,
  },
  {
    slug: 'garden-family-room',
    name: 'Garden Family Room',
    desc: 'Spacious room with garden views for family stays.',
    price: '₹3,200',
    unit: 'night',
    image: IMG.room3,
  },
];

const toursList = [
  {
    slug: 'puri-konark-chilika-classic',
    name: 'Puri–Konark–Chilika Classic',
    duration: '2 Nights / 3 Days',
    price: '₹7,999',
    unit: 'person',
    image: IMG.architecture,
  },
  {
    slug: 'puri-spiritual-retreat',
    name: 'Puri Spiritual Retreat',
    duration: '3 Nights / 4 Days',
    price: '₹9,999',
    unit: 'person',
    image: IMG.temple,
  },
  {
    slug: 'konark-chilika-day-trip',
    name: 'Konark & Chilika Day Trip',
    duration: '1 Day Tour',
    price: '₹3,499',
    unit: 'person',
    image: IMG.canoe,
  },
];

export default function HomeRoomsAndTours() {
  return (
    <section className={styles.dualSection}>
      <div className={styles.dualContainer}>
        <div className={styles.dualGrid}>
          {/* Rooms Column */}
          <div className={styles.dualCol}>
            <div className={styles.sectionTitleRow}>
              <span className={styles.titleLine} />
              <span className={styles.titleDiamond} />
              <h2 className={styles.sectionHeading}>
                Featured Rooms at Sabitri Homestay
              </h2>
              <span className={styles.titleDiamond} />
              <span className={`${styles.titleLine} ${styles.lineRight}`} />
            </div>

            <div className={styles.cardsRow}>
              {roomsList.map((room) => (
                <Link
                  key={room.slug}
                  href={`/homestay/rooms/${room.slug}`}
                  className={styles.miniRoomCard}
                >
                  <div className={styles.miniCardImageWrap}>
                    <img
                      src={room.image}
                      alt={room.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className={styles.miniCardBody}>
                    <h3 className={styles.miniCardName}>{room.name}</h3>
                    <p className={styles.miniCardDesc}>{room.desc}</p>
                    <div className={styles.miniCardPrice}>
                      {room.price} <span>/ {room.unit}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className={styles.viewAllBtnWrap}>
              <Link href="/homestay" className={styles.viewAllBtn}>
                View All Rooms <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Tours Column */}
          <div className={styles.dualCol}>
            <div className={styles.sectionTitleRow}>
              <span className={styles.titleLine} />
              <span className={styles.titleDiamond} />
              <h2 className={styles.sectionHeading}>
                Journeys Through Temple, Coast & Lagoon
              </h2>
              <span className={styles.titleDiamond} />
              <span className={`${styles.titleLine} ${styles.lineRight}`} />
            </div>

            <div className={styles.cardsRow}>
              {toursList.map((tour) => (
                <Link
                  key={tour.slug}
                  href="/tours"
                  className={styles.miniRoomCard}
                >
                  <div className={styles.miniCardImageWrap}>
                    <img
                      src={tour.image}
                      alt={tour.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className={styles.miniCardBody}>
                    <h3 className={styles.miniCardName}>{tour.name}</h3>
                    <p className={styles.miniCardDesc}>{tour.duration}</p>
                    <div className={styles.miniCardPrice}>
                      {tour.price} <span>/ {tour.unit}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className={styles.viewAllBtnWrap}>
              <Link href="/tours" className={styles.viewAllBtn}>
                View All Tours <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}