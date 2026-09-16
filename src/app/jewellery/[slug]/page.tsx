import type { Metadata } from 'next';
import Link from 'next/link';
import { Gem, ArrowRight, Check, ShieldCheck, Sparkles } from 'lucide-react';
import CTASection from '@/components/shared/CTASection';
import { jewelleryCollections } from '@/data/jewellery';
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

  return {
    title: product ? product.name : 'Jewellery',
    description: product
      ? `${product.name} — ${product.material}. ${product.description}`
      : 'Sabitri Jewellery product.',
  };
}

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
        <div className={styles.heroImage}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>{collection.name}</span>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.material}>{product.material}</p>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.priceRow}>
            <span className={styles.price}>
              {product.price
                ? `${product.price}`
                : `From ${product.priceFrom}`}
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
              Enquire Now <ArrowRight size={16} />
            </Link>
            <Link href="/jewellery" className={styles.backLink}>
              <Gem size={16} />
              All Collections
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.detailGrid}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.detailImage}
            />
            <div className={styles.detailInfo}>
              <span className={styles.caption}>Product Details</span>
              <h2 className={styles.subTitle}>Handcrafted with Devotion</h2>
              <p className={styles.text}>{product.description}</p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <Sparkles size={18} />
                  <div>
                    <strong>{product.material}</strong>
                    <span>Authentic, certified metal</span>
                  </div>
                </div>
                <div className={styles.feature}>
                  <ShieldCheck size={18} />
                  <div>
                    <strong>Certified & Hallmarked</strong>
                    <span>Quality you can trust</span>
                  </div>
                </div>
                <div className={styles.feature}>
                  <Check size={18} />
                  <div>
                    <strong>Free Support</strong>
                    <span>Assistance for any queries</span>
                  </div>
                </div>
              </div>
              <div className={styles.priceBox}>
                <span className={styles.priceBoxLabel}>Price</span>
                <span className={styles.priceBoxValue}>
                  {product.price
                    ? `${product.price}`
                    : `From ${product.priceFrom}`}
                </span>
                {product.mrp && (
                  <span className={styles.priceBoxMrp}>MRP {product.mrp}</span>
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
          <h2 className={styles.otherTitle}>You May Also Like</h2>
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
                    {r.price ? `${r.price} /-` : `From ${r.priceFrom}`}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for Something Similar?"
        description="Explore the full collection or tell us your design idea — our jewellers will craft something made just for you."
        primaryLabel="View All Collections"
        primaryHref="/jewellery"
      />
    </main>
  );
}