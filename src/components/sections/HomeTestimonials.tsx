'use client';
import React from 'react';
import { Star } from 'lucide-react';
import { IMG } from '@/data/images';
import styles from '@/components/sections/home.module.scss';

const testimonialsData = [
  {
    text: 'Our stay at Sabitri Homestay was warm and memorable. So close to the temple and the sea. Truly felt at home.',
    name: 'Ananya Sharma',
    location: 'Bengaluru',
    rating: 5,
    avatar: IMG.woman1,
  },
  {
    text: 'The Puri–Konark tour was perfectly planned. Comfortable, insightful, and spiritually uplifting.',
    name: 'Rohit Verma',
    location: 'New Delhi',
    rating: 5,
    avatar: IMG.man1,
  },
  {
    text: 'The jewellery is exquisite and the handicrafts are authentic. Supporting local artisans feels amazing.',
    name: 'Meera Iyer',
    location: 'Chennai',
    rating: 5,
    avatar: IMG.woman2,
  },
];

export default function HomeTestimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.testiContainer}>
        <div className={styles.sectionTitleRow}>
          <h2 className={styles.sectionHeading}>Loved by Our Guests</h2>
        </div>

        <div className={styles.testiGrid}>
          {testimonialsData.map((t, idx) => (
            <div key={idx} className={styles.testiCard}>
              <div className={styles.testiQuoteIcon}>“</div>
              <p className={styles.testiText}>{t.text}</p>
              <div className={styles.testiStars}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} />
                ))}
              </div>
              <div className={styles.testiAuthor}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  className={styles.testiAvatar}
                />
                <div>
                  <h4 className={styles.testiName}>{t.name}</h4>
                  <p className={styles.testiLocation}>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

