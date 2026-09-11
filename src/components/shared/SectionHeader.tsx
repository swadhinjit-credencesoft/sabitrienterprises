import styles from '@/components/shared/SectionHeader.module.scss';

interface SectionHeaderProps {
  caption?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeader({
  caption,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`${styles.header} ${align === 'center' ? styles.center : ''} ${
        light ? styles.light : ''
      }`}
    >
      {caption && <span className={styles.caption}>{caption}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.desc}>{description}</p>}
    </div>
  );
}
