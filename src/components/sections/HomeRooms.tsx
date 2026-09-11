'use client';
import React from 'react';
import { featuredRooms } from '@/data/home';
import SectionHeader from '@/components/shared/SectionHeader';
import RoomCard from '@/components/shared/RoomCard';
import { useGSAPReveal } from '@/hooks/useGSAPReveal';
import styles from '@/components/sections/home.module.scss';

export default function HomeRooms() {
  const revealRef = useGSAPReveal({ stagger: 0.15 });

  return (
    <section className={styles.rooms}>
      <div className={styles.roomsContainer}>
        <SectionHeader
          caption="Stay With Us"
          title="Featured Rooms at Sabitri Homestay"
          description="Thoughtfully designed rooms near Jagannath Temple and Puri Beach — comfort, cleanliness, and genuine Odia hospitality."
        />
        <div className={styles.roomGrid} ref={revealRef}>
          {featuredRooms.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
