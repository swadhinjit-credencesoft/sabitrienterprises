import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Gem,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  BadgeCheck,
  Truck,
} from 'lucide-react';
import CTASection from '@/components/shared/CTASection';
import { jewelleryCollections } from '@/data/jewellery';
import { buildMetadata } from '@/lib/metadata';
import styles from '@/app/jewellery/[slug]/jewellery-detail.module.scss';

export function generateStaticParams() {
  return jewelleryCollections.flatMap((collection) =>
    collection.products.map((product) => ({ slug: product.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = jewelleryCollections
    .flatMap((c) => c.products)
    .find((p) => p.slug === slug);

  return buildMetadata({
    title: product ? product.name : 'Jewellery',
    description: product
      ? `${product.name} — ${product.material}. ${product.description}`
      : 'Sabitri Jewellery product.',
    path: `/jewellery/${slug}`,
    image: product?.image,
  });
}

const trustBadges = [
  { icon: BadgeCheck, label: 'Certified 925 Sterling Silver' },
  { icon: ShieldCheck, label: 'Anti-Tarnish Rhodium Finish' },
  { icon: Truck, label: 'Dispatched in 48 Hours' },
];

export default async function JewelleryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const collection = jewelleryCollections.find((c) =>
    c.products.some((p) => p.slug === slug)
  );
  const product = collection?.products.find((p) => p.slug === slug);

  if (!collection || !product) {
    return (
      <main className={styles.missing}>
        <h1>Product not found</h1>
        <Link href="/jewellery">Back to Jewellery</Link>
      </main>
    );
  }

  const related = collection.products
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroImageWrap}>
          <div className={styles.heroImage}>
            <img src={product.image} alt={product.name} />
          </div>
          <span className={styles.heroIndex}>
            {String(
              collection.products.findIndex((p) => p.slug === slug) + 1
            ).padStart(2, '0')}
          </span>
        </div>
        <div className={styles.heroContent}>
          <Link
            href={`/jewellery#${collection.slug}`}
            className={styles.collectionEyebrow}
          >
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowLabel}>{collection.name}</span>
          </Link>
          <h1 className={styles.title}>{product.name}</h1>
          <span className={styles.materialChip}>{product.material}</span>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.priceRow}>
            <span className={styles.price}>
              {product.price && !product.mrp ? product.price : product.priceFrom}
            </span>
            {product.mrp && (
              <span className={styles.mrp}>MRP {product.mrp}</span>
            )}
          </div>
          <div className={styles.heroActions}>
            <Link
              href={`/booking?division=jewellery&product=${product.slug}`}
              className={styles.enquireBtn}
            >
              <MessageCircle size={17} />
              Enquire Now
            </Link>
            <Link
              href={`/booking?division=jewellery&product=${product.slug}`}
              className={styles.outlineBtn}
            >
              Request on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.trustBar}>
        <div className={styles.container}>
          {trustBadges.map((badge) => (
            <div key={badge.label} className={styles.trustItem}>
              <badge.icon size={18} />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.detailGrid}>
            <div className={styles.detailGallery}>
              <div className={styles.detailFrame}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.detailImage}
                />
              </div>
            </div>
            <div className={styles.detailInfo}>
              <span className={styles.caption}>The Craft</span>
              <h2 className={styles.subTitle}>
                Handcrafted with Devotion
              </h2>
              <p className={styles.text}>{product.description}</p>

              <div className={styles.features}>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>
                    <Sparkles size={18} />
                  </span>
                  <div>
                    <strong>Genuine Metalwork</strong>
                    <span>{product.material} with certified purity</span>
                  </div>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>
                    <ShieldCheck size={18} />
                  </span>
                  <div>
                    <strong>Certified & Hallmarked</strong>
                    <span>Every piece is quality assured</span>
                  </div>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>
                    <Gem size={18} />
                  </span>
                  <div>
                    <strong>Made in Odisha</strong>
                    <span>By trusted master jewellers</span>
                  </div>
                </div>
              </div>

              <div className={styles.priceBox}>
                <span className={styles.priceBoxLabel}>Your Price</span>
                <span className={styles.priceBoxValue}>
                  {product.price
                    ? product.price
                    : `From ${product.priceFrom}`}
                </span>
                {product.mrp && (
                  <span className={styles.priceBoxMrp}>
                    was {product.mrp}
                  </span>
                )}
              </div>

              <Link
                href={`/booking?division=jewellery&product=${product.slug}`}
                className={styles.primaryBtn}
              >
                Enquire About This Piece <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.relatedHeader}>
            <div>
              <span className={styles.caption}>More From This Collection</span>
              <h2 className={styles.otherTitle}>You May Also Adore</h2>
            </div>
            <Link href="/jewellery" className={styles.viewAll}>
              View All <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className={styles.relatedGrid}>
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/jewellery/${r.slug}`}
                className={styles.relatedCard}
              >
                <div className={styles.relatedImageWrap}>
                  <img
                    src={r.image}
                    alt={r.name}
                    className={styles.relatedImage}
                  />
                </div>
                <div className={styles.relatedBody}>
                  <span className={styles.relatedCategory}>{r.category}</span>
                  <h3 className={styles.relatedName}>{r.name}</h3>
                  <span className={styles.relatedPrice}>
                    {r.price ? r.price : `From ${r.priceFrom}`}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Can't Find the Perfect Piece?"
        description="We craft custom pendants to your design. Share your idea and our jewellers will bring it to life."
        primaryLabel="Request a Custom Design"
        primaryHref="/contact"
      />
    </main>
  );
}