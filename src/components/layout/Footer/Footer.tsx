import Link from 'next/link';
import {
  COMPANY_NAME,
  TAGLINE,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  CONTACT_ADDRESS,
} from '../../../data/navigation';
import styles from './Footer.module.scss';

const divisionLinks = [
  { label: 'Sabitri Homestay', href: '/homestay' },
  { label: 'Sabitri Jewellery', href: '/jewellery' },
  { label: 'Tours & Travels', href: '/tours' },
  { label: 'Sabitri Handicrafts', href: '/handicrafts' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
];

const helpLinks = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/policies/privacy-policy' },
  { label: 'Terms & Conditions', href: '/policies/terms-and-conditions' },
  { label: 'Cancellation & Refund', href: '/policies/cancellation-policy' },
  { label: 'Shipping Policy', href: '/policies/shipping-policy' },
  { label: 'Jewellery Return & Refund', href: '/policies/jewellery-return-policy' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.col}>
            <h4 className={styles.brand}>{COMPANY_NAME}</h4>
            <p className={styles.tagline}>{TAGLINE}</p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Divisions</h4>
            <ul className={styles.list}>
              {divisionLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.list}>
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Help & Policies</h4>
            <ul className={styles.list}>
              {helpLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.list}>
              <li>
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}>{CONTACT_PHONE}</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>{CONTACT_ADDRESS}</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className={styles.socials}>
            <a href="#" rel="noopener noreferrer">Instagram</a>
            <a href="#" rel="noopener noreferrer">Facebook</a>
            <a href="#" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
