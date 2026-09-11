'use client';
import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/index';
import { setMobileMenuOpen } from '@/store/slices/uiSlice';
import { Menu } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import Button from '@/components/ui/Button';
import MobileMenu from '@/components/layout/MobileMenu';
import { navLinks } from '@/data/navigation';
import styles from '@/components/layout/Navigation.module.scss';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function Navigation() {
  const dispatch = useDispatch();
  useScrollPosition();
  const isScrolled = useSelector((state: RootState) => state.ui.isScrolled);
  const isMobileMenuOpen = useSelector(
    (state: RootState) => state.ui.isMobileMenuOpen,
  );

  return (
    <>
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Logo />

          <div className={styles.desktopLinks}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.actions}>
            <div className={styles.desktopOnly}>
              <Link href="/booking">
                <Button>Book a Stay</Button>
              </Link>
            </div>
            <button
              className={styles.mobileToggle}
              onClick={() => dispatch(setMobileMenuOpen(true))}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && <MobileMenu />}
    </>
  );
}
