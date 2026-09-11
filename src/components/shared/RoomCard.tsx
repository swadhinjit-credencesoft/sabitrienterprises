'use client';
import React from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import Badge from '../ui/Badge/Badge';
import styles from '../home/home.module.scss';

export interface RoomCardItem {
  slug: string;
  name: string;
  price: string;
  capacity: string;
  image: string;
  location: string;
  status: string;
}

export default function RoomCard({ room }: { room: RoomCardItem }) {
  return (
    <Link href={`/homestay/rooms/${room.slug}`} className={styles.roomCard}>
      <div className={styles.roomImageWrap}>
        <div className={styles.roomBadge}>
          <Badge color="emerald" dot>
            {room.status}
          </Badge>
        </div>
        <img src={room.image} alt={room.name} className={styles.roomImage} />
      </div>
      <div className={styles.roomBody}>
        <h3 className={styles.roomName}>{room.name}</h3>
        <p className={styles.roomLocation}>
          <MapPin size={14} />
          {room.location}
        </p>
        <div className={styles.roomMeta}>
          <span className={styles.roomPrice}>{room.price}</span>
          <span className={styles.roomStatus}>{room.capacity}</span>
        </div>
      </div>
    </Link>
  );
}
