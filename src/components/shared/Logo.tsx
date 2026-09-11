'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { COMPANY_NAME } from '@/data/navigation';
import styles from '@/components/shared/Logo.module.scss';

const LOGOS: { segments: string[]; src: string }[] = [
  { segments: ['homestay'], src: '/homestaylogo.png' },
  { segments: ['jewellery'], src: '/jewlerrylogo.png' },
  { segments: ['handicrafts'], src: '/handicraft.png' },
  { segments: ['tours'], src: '/tour&travel.png' },
];

function getLogoSrc(pathname: string): string {
  for (const entry of LOGOS) {
    if (
      entry.segments.some(
        (s) => pathname === `/${s}` || pathname.startsWith(`/${s}/`),
      )
    ) {
      return entry.src;
    }
  }
  return '/officiallogo.png';
}

export default function Logo() {
  const pathname = usePathname() ?? '';
  const src = getLogoSrc(pathname);

  return (
    <Link href="/" className={styles.logo} aria-label={COMPANY_NAME}>
      <Image src={src} alt={COMPANY_NAME} width={1448} height={1086} className={styles.img} priority />
    </Link>
  );
}