'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import type { GalleryItem } from '@/types/index';
import styles from '@/components/forms/gallery.module.scss';

interface GalleryClientProps {
  categories: string[];
  items: GalleryItem[];
}

export default function GalleryClient({ categories, items }: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === 'All'
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className={styles.filters}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.filter} ${activeCategory === category ? styles.filterActive : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((item) => (
          <button
            key={item.src + item.caption}
            className={styles.tile}
            onClick={() => setSelected(item)}
            aria-label={`View ${item.caption}`}
          >
            <img src={item.src} alt={item.alt} className={styles.image} />
            <span className={styles.caption}>{item.caption}</span>
          </button>
        ))}
      </div>

      {selected && (
        <div className={styles.lightbox} onClick={() => setSelected(null)}>
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.close}
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <img src={selected.src} alt={selected.alt} className={styles.lightboxImage} />
            <div className={styles.lightboxInfo}>
              <p className={styles.lightboxCaption}>{selected.caption}</p>
              <span className={styles.lightboxCategory}>{selected.category}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
