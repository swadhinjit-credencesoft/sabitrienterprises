import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, MapPin, Check, ChevronDown, ArrowRight } from 'lucide-react';
import PageHero from '../../components/shared/PageHero';
import SectionHeader from '../../components/shared/SectionHeader';
import Badge from '../../components/ui/Badge/Badge';
import CTASection from '../../components/shared/CTASection';
import { tourPackages, destinations, travelServices } from '../../data/tours';
import { IMG } from '../../data/images';
import styles from './tours.module.scss';

export const metadata: Metadata = {
  title: 'Sabitri Tours & Travels',
  description:
    'Curated Odisha tour packages — Puri, Konark, Chilika, Raghurajpur, and Bhubaneswar. Private cabs, guided darshan, and custom itineraries.',
};

export default function ToursPage() {
  return (
    <main>
      <PageHero
        title="Sabitri Tours & Travels"
        subtitle="Temples, beaches, lagoons, and craft villages — journeys across Odisha, planned with local heart."
        image={IMG.beach1}
        video="https://assets.mixkit.co/videos/42368/42368-720.mp4"
        badge="Explore with Us"
      />

      {/* Destinations */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            caption="Destinations"
            title="Where We'll Take You"
            description="From the sacred lanes of Puri to the wonder of Konark and the calm of Chilika — handpicked by people who call Odisha home."
          />
          <div className={styles.destGrid}>
            {destinations.map((dest) => (
              <div key={dest.slug} className={styles.destCard}>
                <div className={styles.destImageWrap}>
                  <img src={dest.image} alt={dest.name} className={styles.destImage} />
                </div>
                <div className={styles.destBody}>
                  <h3 className={styles.destName}>
                    <MapPin size={16} />
                    {dest.name}
                  </h3>
                  <p className={styles.destDesc}>{dest.description}</p>
                  <ul className={styles.destHighlights}>
                    {dest.highlights.map((h) => (
                      <li key={h}>
                        <Check size={14} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour packages */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <SectionHeader
            caption="Tour Packages"
            title="Planned, Priced & Delivered With Care"
            description="Every package includes private transport, trusted drivers, and local guidance. Custom itineraries available on request."
          />
          <div className={styles.packageGrid}>
            {tourPackages.map((pkg) => (
              <div key={pkg.slug} className={styles.packageCard}>
                <div className={styles.packageImageWrap}>
                  <img src={pkg.image} alt={pkg.name} className={styles.packageImage} />
                  <div className={styles.packageBadge}>
                    <Badge color="emerald" dot>
                      {pkg.status}
                    </Badge>
                  </div>
                </div>
                <div className={styles.packageBody}>
                  <h3 className={styles.packageName}>{pkg.name}</h3>
                  <p className={styles.packageDuration}>
                    <Clock size={14} />
                    {pkg.duration}
                  </p>
                  <p className={styles.packageDesc}>{pkg.description}</p>
                  <ul className={styles.packageHighlights}>
                    {pkg.highlights.slice(0, 4).map((h) => (
                      <li key={h}>
                        <Check size={14} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <details className={styles.itinerary}>
                    <summary className={styles.itinerarySummary}>
                      View Itinerary <ChevronDown size={16} />
                    </summary>
                    <div className={styles.itineraryList}>
                      {pkg.itinerary.map((day) => (
                        <div key={day.title} className={styles.itineraryDay}>
                          <p className={styles.itineraryDayTitle}>
                            {day.day} — {day.title}
                          </p>
                          <p className={styles.itineraryDayDesc}>
                            {day.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </details>
                  <div className={styles.packageFooter}>
                    <span className={styles.packagePrice}>{pkg.price}</span>
                    <Link
                      href={`/booking?division=tours&tour=${pkg.slug}`}
                      className={styles.packageLink}
                    >
                      Book This Tour <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            caption="Our Services"
            title="Travel Services We Offer"
          />
          <div className={styles.serviceGrid}>
            {travelServices.map((service) => (
              <div key={service} className={styles.serviceItem}>
                <span className={styles.serviceIcon}>
                  <Check size={16} />
                </span>
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Plan Your Odisha Journey"
        description="Tell us your dates, group size, and interests — we'll craft the perfect itinerary and send you a clear quote."
        primaryLabel="Plan My Trip"
      />
    </main>
  );
}
