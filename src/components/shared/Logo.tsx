import Link from 'next/link';
import { BRAND, COMPANY_NAME } from '@/data/navigation';
import styles from '@/components/shared/Logo.module.scss';

export default function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label={COMPANY_NAME}>
      <span className={styles.brand}>{BRAND}</span>
      <span className={styles.sub}>{COMPANY_NAME.replace(`${BRAND} `, '')}</span>
    </Link>
  );
}