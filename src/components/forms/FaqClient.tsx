'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { FaqItem } from '@/types/index';
import styles from '@/components/forms/faq.module.scss';

interface FaqClientProps {
  items: FaqItem[];
}

export default function FaqClient({ items }: FaqClientProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.list}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.q}
            className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
          >
            <button
              className={styles.question}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
                <Plus size={18} />
              </span>
            </button>
            {isOpen && <p className={styles.answer}>{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
