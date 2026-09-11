import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { policies } from '../../../data/policies';
import styles from './policy.module.scss';

export function generateStaticParams() {
  return policies.map((policy) => ({ slug: policy.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const policy = policies.find((p) => p.slug === slug);
  return {
    title: policy ? policy.title : 'Policy',
    description: policy?.description,
  };
}

export default async function PolicyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const policy = policies.find((p) => p.slug === slug);

  if (!policy) {
    return (
      <main className={styles.missing}>
        <h1>Policy not found</h1>
        <Link href="/policies">Back to Policies</Link>
      </main>
    );
  }

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Link href="/policies" className={styles.back}>
            <ArrowLeft size={16} />
            All Policies
          </Link>
          <h1 className={styles.title}>{policy.title}</h1>
          <p className={styles.subtitle}>{policy.description}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            {policy.sections.map((section) => (
              <div key={section.heading} className={styles.block}>
                <h2 className={styles.heading}>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
