import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/shared/SectionHeader';
import { policies } from '@/data/policies';
import { IMG } from '@/data/images';
import styles from '@/app/policies/policies.module.scss';

export const metadata: Metadata = {
  title: 'Policies',
  description:
    'Booking, cancellation, refund, privacy, terms, and shipping policies of Sabitri Enterprises.',
};

export default function PoliciesPage() {
  return (
    <main>
      <PageHero
        title="Policies"
        subtitle="Clear, fair, and honest terms for stays, tours, and purchases with Sabitri Enterprises."
        image={IMG.house2}
        badge="Good to Know"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            caption="Our Policies"
            title="Transparent Terms, Every Time"
            description="Please review the relevant policy before booking a stay, planning a tour, or placing an order."
          />
          <div className={styles.grid}>
            {policies.map((policy) => (
              <Link key={policy.slug} href={`/policies/${policy.slug}`} className={styles.card}>
                <h2 className={styles.cardTitle}>{policy.title}</h2>
                <p className={styles.cardDesc}>{policy.description}</p>
                <span className={styles.cardLink}>
                  Read policy <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
