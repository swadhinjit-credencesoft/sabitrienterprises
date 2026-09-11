'use client';
import React from 'react';
import Link from 'next/link';
import { Clock, ArrowUpRight } from 'lucide-react';
import { tourPackages } from '@/data/tours';
import SectionHeader from '@/components/shared/SectionHeader';
import Badge from '@/components/ui/Badge';
import { useGSAPReveal } from '@/hooks/useGSAPReveal';
import styles from '@/components/sections/home.module.scss';

export default function HomeTours() {
  const revealRef = useGSAPReveal({ stagger: 0.15 });
  const tours = tourPackages.slice(0, 3);

  return (
    <section className={styles.tours}>
      <div className={styles.toursContainer}>
        <SectionHeader
          caption="Tours & Travels"
          title="Journeys Through Temple, Coast & Lagoon"
          description="Hand-picked itineraries across Puri, Konark, Chilika, and Raghurajpur — planned with local knowledge and delivered with care."
        />
        <div className={styles.tourGrid} ref={revealRef}>
          {tours.map((tour) => (
            <Link key={tour.slug} href="/tours" className={styles.tourCard}>
              <img src={tour.image} alt={tour.name} className={styles.tourImage} />
              <div className={styles.tourBody}>
                <div className={styles.tourBadge}>
                  <Badge color="zinc" dot>
                    {tour.status}
                  </Badge>
                </div>
                <h3 className={styles.tourName}>{tour.name}</h3>
                <p className={styles.tourDuration}>
                  <Clock size={14} />
                  {tour.duration}
                </p>
                <p className={styles.tourDesc}>{tour.description}</p>
                <div className={styles.tourFooter}>
                  <span className={styles.tourPrice}>{tour.price}</span>
                  <span className={styles.tourLink}>
                    View Package <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
