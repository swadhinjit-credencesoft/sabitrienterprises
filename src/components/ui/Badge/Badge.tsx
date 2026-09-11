import React from 'react';
import styles from './Badge.module.scss';

interface BadgeProps {
  color?: 'emerald' | 'zinc';
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

export default function Badge({ color = 'zinc', dot = false, children, className = '' }: BadgeProps) {
  return (
    <div className={`${styles.badge} ${styles[color]} ${className}`}>
      {dot && <span className={styles.dot} />}
      {children}
    </div>
  );
}
