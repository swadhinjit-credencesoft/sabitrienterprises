'use client';
import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setMobileMenuOpen } from '@/store/slices/uiSlice';
import { navLinks } from '@/data/navigation';
import { X } from 'lucide-react';
import styles from '@/components/layout/MobileMenu.module.scss';
import Button from '@/components/ui/Button';

export default function MobileMenu() {
  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch(setMobileMenuOpen(false));
  };

  return (
    <div className={styles.overlay} onClick={closeMenu}>
      <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <span className={styles.title}>Menu</span>
          <button onClick={closeMenu} className={styles.closeBtn}>
            <X size={24} />
          </button>
        </div>
        <div className={styles.links}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.link}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className={styles.footer}>
          <Link href="/booking" onClick={closeMenu}>
            <Button className={styles.button}>Book a Stay</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
