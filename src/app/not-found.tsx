import Link from 'next/link';
import styles from '@/app/not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.text}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className={styles.link}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
