import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Users, Ruler, BedDouble, Bath, ArrowRight } from 'lucide-react';
import RoomCard from '../../../../components/shared/RoomCard';
import CTASection from '../../../../components/shared/CTASection';
import { rooms } from '../../../../data/rooms';
import styles from './room.module.scss';

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  return {
    title: room ? room.name : 'Room',
    description: room
      ? `${room.name} at Sabitri Homestay, Puri — ${room.price} per night. ${room.description}`
      : 'Sabitri Homestay room.',
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    return (
      <main className={styles.missing}>
        <h1>Room not found</h1>
        <Link href="/homestay">Back to Homestay</Link>
      </main>
    );
  }

  const otherRooms = rooms.filter((r) => r.slug !== slug).slice(0, 3);

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img src={room.image} alt={room.name} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>{room.status}</span>
          <h1 className={styles.title}>{room.name}</h1>
          <div className={styles.specs}>
            <span className={styles.spec}>
              <Users size={18} />
              {room.capacity} Guests
            </span>
            <span className={styles.spec}>
              <Ruler size={18} />
              {room.size}
            </span>
            <span className={styles.spec}>
              <BedDouble size={18} />
              {room.beds}
            </span>
            <span className={styles.spec}>
              <Bath size={18} />
              {room.bathrooms} Bathroom
            </span>
          </div>
          <div className={styles.priceRow}>
            <span className={styles.price}>{room.price}</span>
            <span className={styles.perNight}>/ night</span>
          </div>
          <Link
            href={`/booking?division=homestay&room=${room.slug}`}
            className={styles.bookBtn}
          >
            Book This Room <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.split}>
            <div>
              <span className={styles.caption}>About This Room</span>
              <h2 className={styles.subTitle}>A Room With a Story</h2>
              <p className={styles.text}>{room.description}</p>
              <ul className={styles.highlights}>
                {room.highlights.map((h) => (
                  <li key={h}>
                    <Check size={16} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className={styles.caption}>In-Room Amenities</span>
              <h2 className={styles.subTitle}>Comforts & Conveniences</h2>
              <ul className={styles.amenities}>
                {room.amenities.map((a) => (
                  <li key={a}>
                    <Check size={16} />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <h2 className={styles.otherTitle}>Other Rooms You May Like</h2>
          <div className={styles.roomGrid}>
            {otherRooms.map((r) => (
              <RoomCard
                key={r.slug}
                room={{
                  slug: r.slug,
                  name: r.name,
                  price: r.price,
                  capacity: `${r.capacity} Guests`,
                  image: r.image,
                  location: 'Grand Road, Puri',
                  status: r.status,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Reserve the ${room.name}`}
        description="Book this room directly for the best rates — choose your dates and send your request in under a minute."
        primaryLabel="Check Availability"
        primaryHref={`/booking?division=homestay&room=${room.slug}`}
      />
    </main>
  );
}
