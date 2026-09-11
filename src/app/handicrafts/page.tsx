import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Sparkles } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/shared/SectionHeader';
import CTASection from '@/components/shared/CTASection';
import { handicraftCategories, handicraftWhyChoose } from '@/data/handicrafts';
import { IMG } from '@/data/images';
import styles from '@/app/handicrafts/handicrafts.module.scss';

export const metadata: Metadata = {
  title: 'Sabitri Handicrafts',
  description:
    'Authentic Odisha handicrafts — Pattachitra paintings, silver filigree, stone carvings, handloom, appliqué, and dhokra — sourced directly from master artisans.',
};

export default function HandicraftsPage() {
  return (
    <main>
      <PageHero
        title="Sabitri Handicrafts"
        subtitle="Living traditions of Odisha — paintings, textiles, and crafts made by master artisans and sourced directly from them."
        image={IMG.art}
        video="https://assets.mixkit.co/videos/5177/5177-720.mp4"
        badge="Crafted by Artisans"
        />

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            caption="The Crafts"
            title="Six Traditions, One Mastery"
            description="Every product carries the story of the hands that made it — from Raghurajpur painters to Cuttack filigree artists."
          />

          {handicraftCategories.map((category) => (
            <div key={category.slug} className={styles.category}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryImage}>
                  <img src={category.image} alt={category.name} />
                </div>
                <div className={styles.categoryInfo}>
                  <span className={styles.caption}>Craft</span>
                  <h2 className={styles.title}>{category.name}</h2>
                  <p className={styles.text}>{category.description}</p>
                </div>
              </div>

              <div className={styles.productGrid}>
                {category.products.map((product) => (
                  <div key={product.slug} className={styles.productCard}>
                    <div className={styles.productImageWrap}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className={styles.productImage}
                      />
                    </div>
                    <div className={styles.productBody}>
                      <span className={styles.productCategory}>
                        {product.category}
                      </span>
                      <h3 className={styles.productName}>{product.name}</h3>
                      <p className={styles.productMaterial}>{product.material}</p>
                      <p className={styles.productDesc}>{product.description}</p>
                      <div className={styles.productFooter}>
                        <span className={styles.productPrice}>
                          From {product.priceFrom}
                        </span>
                        <Link
                          href={`/booking?division=handicrafts&product=${product.slug}`}
                          className={styles.enquireLink}
                        >
                          Enquire
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <SectionHeader
            caption="Our Promise"
            title="Crafts That Give Back"
          />
          <div className={styles.whyGrid}>
            {handicraftWhyChoose.map((item) => (
              <div key={item} className={styles.whyItem}>
                <span className={styles.whyIcon}>
                  <Sparkles size={18} />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Bring Home a Piece of Odisha"
        description="Browse our collection in person at Grand Road, or contact us for custom, bulk, and corporate orders shipped worldwide."
        primaryLabel="Contact Us to Order"
        primaryHref="/contact"
      />
    </main>
  );
}
