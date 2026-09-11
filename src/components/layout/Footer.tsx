import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import {
  TAGLINE,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  CONTACT_ADDRESS,
} from '@/lib/constants';
import styles from '@/components/layout/Footer.module.scss';

const divisionLinks = [
  { label: 'Sabitri Homestay', href: '/homestay' },
  { label: 'Sabitri Jewellery', href: '/jewellery' },
  { label: 'Sabitri Tours & Travels', href: '/tours' },
  { label: 'Sabitri Handicrafts', href: '/handicrafts' },
];

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.topGrid}>
            {/* Col 1: Brand */}
            <div className={styles.brandCol}>
              <Logo />
              <p className={styles.tagline}>{TAGLINE}</p>
              <div className={styles.socials}>
                <a
                  href="https://facebook.com/sabitrienterprises"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={styles.socialIcon}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/sabitrienterprises"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={styles.socialIcon}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@sabitrienterprises"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className={styles.socialIcon}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Our Divisions */}
            <div>
              <h4 className={styles.colTitle}>Our Divisions</h4>
              <ul className={styles.list}>
                {divisionLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Quick Links */}
            <div>
              <h4 className={styles.colTitle}>Quick Links</h4>
              <ul className={styles.list}>
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact Us */}
            <div>
              <h4 className={styles.colTitle}>Contact Us</h4>
              <ul className={styles.contactList}>
                <li>
                  <MapPin size={16} />
                  <span>{CONTACT_ADDRESS}</span>
                </li>
                <li>
                  <Phone size={16} />
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}>
                    {CONTACT_PHONE}
                  </a>
                </li>
                <li>
                  <Mail size={16} />
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </li>
              </ul>
            </div>

            {/* Col 5: Proudly from Puri */}
            <div className={styles.wheelCol}>
              <h4 className={styles.wheelTitle}>Proudly from Puri, Odisha</h4>
              <svg
                viewBox="0 0 100 100"
                className={styles.wheelSvg}
                fill="currentColor"
              >
                {/* Konark Sun Temple Wheel Graphic */}
                <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="4" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="50" cy="50" r="6" fill="currentColor" />
                {/* 16 Spokes */}
                {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={50 + 38 * Math.cos((angle * Math.PI) / 180)}
                    y2={50 + 38 * Math.sin((angle * Math.PI) / 180)}
                    stroke="currentColor"
                    strokeWidth={i % 2 === 0 ? "2.5" : "1"}
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Sabitri Enterprises. All Rights Reserved.
          </p>
          <div className={styles.policyLinks}>
            <Link href="/policies/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/policies/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}