import type { Metadata } from 'next';
import Link from 'next/link';
import { Wifi, Wind, Waves, Bath, Check, Clock, CalendarDays } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/shared/SectionHeader';
import RoomCard from '@/components/shared/RoomCard';
import CTASection from '@/components/shared/CTASection';
import { rooms, roomAmenities, homestayHighlights } from '@/data/rooms';
import { IMG } from '@/data/images';
import styles from '@/app/homestay/homestay.module.scss';

export const metadata: Metadata = {
  title: 'Sabitri Homestay',
  description:
    'Heritage homestay near Jagannath Temple, Puri. Comfortable rooms, home-cooked Odia meals, and warm family hospitality steps from Puri Beach.',
};

export default function HomestayPage() {
  return (
    <main>
      <PageHero
        title="Sabitri Homestay"
        subtitle="A heritage home on Grand Road, Puri — steps from the Jagannath Temple and a short walk to the beach."
        image={IMG.heroStay}
        video="https://bookonelocal.in/cdn/VID-20251123-WA0003.mp4"
        badge="Stay with Heritage"
      />

      {/* Overview */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewImageWrap}>
              <video
                src="https://bookonelocal.in/cdn/VID-20251123-WA0003.mp4"
                poster={IMG.house1}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Sabitri Homestay video tour"
              />
            </div>
            <div>
              <span className={styles.caption}>Welcome Home</span>
              <h2 className={styles.title}>
                More Than a Stay — It&apos;s Family Hospitality
              </h2>
              <p className={styles.text}>
                Sabitri Homestay is our family home, opened to travellers who
                want to experience Puri the way locals do. Every room is kept
                spotless, every meal is cooked in our family kitchen, and every
                guest is treated like a relative visiting home.
              </p>
              <p className={styles.text}>
                We help with temple darshan guidance, local sightseeing, laundry,
                and arranging trips to Konark, Chilika, and Raghurajpur through
                our own Tours &amp; Travels desk.
              </p>
              <ul className={styles.highlightList}>
                {homestayHighlights.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <SectionHeader
            caption="Our Rooms"
            title="Choose Your Perfect Stay"
            description="Five thoughtfully designed rooms, each with modern comforts and a touch of Odia tradition."
          />
          <div className={styles.roomGrid}>
            {rooms.map((room) => (
              <RoomCard
                key={room.slug}
                room={{
                  slug: room.slug,
                  name: room.name,
                  price: room.price,
                  capacity: `${room.capacity} Guests`,
                  image: room.image,
                  location: 'Grand Road, Puri',
                  status: room.status,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            caption="Amenities"
            title="Everything You Need for a Comfortable Stay"
          />
          <div className={styles.amenityGrid}>
            {roomAmenities.map((amenity) => (
              <div key={amenity} className={styles.amenityItem}>
                <Check size={16} />
                {amenity}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking info */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Clock size={22} />
              </div>
              <h3 className={styles.infoTitle}>Check-in / Check-out</h3>
              <p className={styles.infoText}>
                Check-in from 12:00 PM, check-out by 11:00 AM. Early check-in and
                late check-out are available on request.
              </p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Wifi size={22} />
              </div>
              <h3 className={styles.infoTitle}>Free Amenities</h3>
              <p className={styles.infoText}>
                High-speed Wi-Fi, air conditioning, hot water, daily
                housekeeping, and complimentary tea and coffee in every room.
              </p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Waves size={22} />
              </div>
              <h3 className={styles.infoTitle}>Beach Access</h3>
              <p className={styles.infoText}>
                Just a 5-minute walk to Puri Beach and easy access to
                Swargadwar for sunrise and sunset.
              </p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Bath size={22} />
              </div>
              <h3 className={styles.infoTitle}>Home-Cooked Meals</h3>
              <p className={styles.infoText}>
                Authentic Odia vegetarian meals prepared fresh in our family
                kitchen. Special dietary needs accommodated on request.
              </p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <CalendarDays size={22} />
              </div>
              <h3 className={styles.infoTitle}>Tour Desk</h3>
              <p className={styles.infoText}>
                Book Konark, Chilika, and Raghurajpur tours through our own
                travel desk with trusted local drivers and guides.
              </p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Wind size={22} />
              </div>
              <h3 className={styles.infoTitle}>Rooftop Terrace</h3>
              <p className={styles.infoText}>
                Enjoy Puri sunrise, sea breezes, and a cup of Odia tea on our
                rooftop terrace any time of day.
              </p>
            </div>
          </div>
          <div className={styles.policyNote}>
            <p>
              Please review our{' '}
              <Link href="/policies/booking-policy">Booking Policy</Link>,{' '}
              <Link href="/policies/cancellation-policy">
                Cancellation &amp; Refund Policy
              </Link>
              , and{' '}
              <Link href="/policies/privacy-policy">Privacy Policy</Link> before
              confirming your reservation.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Reserve Your Room in Puri"
        description="Book directly with us for the best rates and personalised care. Our team confirms all bookings personally."
        primaryLabel="Book Your Stay"
      />
    </main>
  );
}
