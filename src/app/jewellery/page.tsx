import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Gem, MessageCircle, ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/shared/SectionHeader';
import CTASection from '@/components/shared/CTASection';
import { jewelleryCollections, jewelleryWhyChoose } from '@/data/jewellery';
import { IMG } from '@/data/images';
import styles from '@/app/jewellery/jewellery.module.scss';

const JEWELLERY_VIDEO =
  'https://bookonelocal.in/cdn/WhatsApp+Video+2026-08-05+at+2.31.29+PM.mp4';

export const metadata: Metadata = {
  title: 'Sabitri Jewellery',
  description:
    'Handcrafted 925 sterling silver Lord Jagannath pendants, Om pendants, and American Diamond solitaire pendants with vibrant Meenakari enamel — crafted by Odisha’s master jewellers.',
};

export default function JewelleryPage() {
  return (
    <main>
      <PageHero
        title="Sabitri Jewellery"
        subtitle="925 sterling silver pendants handcrafted by Odisha's master jewellers — divine Jagannath, sacred Om, and brilliant American Diamond designs."
        image={IMG.silver1}
        video={JEWELLERY_VIDEO}
        badge="Adorn with Heritage"
        />

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            caption="Our Collections"
            title="Crafted by Generations of Jewellers"
            description="Each collection carries the techniques and motifs of Odisha's jewellery heritage — made to be worn, treasured, and passed down."
          />

          {jewelleryCollections.map((collection, index) => (
            <div
              key={collection.slug}
              id={collection.slug}
              className={styles.collection}
            >
              <div className={styles.collectionHeader}>
                <div className={styles.collectionImageWrap}>
                  <div className={styles.collectionImage}>
                    {collection.products[0].slug === 'divine-grace-jagannath-enamel-pendant' ? (
                      <video
                        src={JEWELLERY_VIDEO}
                        poster={collection.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                      />
                    ) : (
                      <img src={collection.image} alt={collection.name} />
                    )}
                  </div>
                  <span className={styles.collectionIndex}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className={styles.collectionInfo}>
                  <span className={styles.collectionEyebrow}>
                    <span className={styles.eyebrowLine} />
                    Collection
                  </span>
                  <h2 className={styles.title}>{collection.name}</h2>
                  <p className={styles.text}>{collection.description}</p>
                  <span className={styles.productCount}>
                    {collection.products.length} handcrafted{' '}
                    {collection.products.length > 1 ? 'pieces' : 'piece'}
                  </span>
                </div>
              </div>

              <div className={styles.productGrid}>
                {collection.products.map((product) => (
                  <article key={product.slug} className={styles.productCard}>
                    <Link
                      href={`/jewellery/${product.slug}`}
                      className={styles.productImageLink}
                    >
                      <span className={styles.productImageWrap}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className={styles.productImage}
                        />
                      </span>
                      <span className={styles.productHoverLabel}>
                        View Details <ArrowUpRight size={14} />
                      </span>
                    </Link>
                    <div className={styles.productBody}>
                      <span className={styles.productCategory}>
                        {product.category}
                      </span>
                      <h3 className={styles.productName}>
                        <Link href={`/jewellery/${product.slug}`}>
                          {product.name}
                        </Link>
                      </h3>
                      <span className={styles.productMaterial}>
                        {product.material}
                      </span>
                      <p className={styles.productDesc}>{product.description}</p>
                      <div className={styles.productFooter}>
                        <div className={styles.productPriceWrap}>
                          {product.mrp && (
                            <span className={styles.productMrp}>
                              MRP {product.mrp}
                            </span>
                          )}
                          <span className={styles.productPrice}>
                            {product.price
                              ? product.price
                              : `From ${product.priceFrom}`}
                          </span>
                        </div>
                        <div className={styles.productActions}>
                          <Link
                            href={`/jewellery/${product.slug}`}
                            className={styles.viewLink}
                          >
                            View Details <ArrowUpRight size={13} />
                          </Link>
                          <Link
                            href={`/booking?division=jewellery&product=${product.slug}`}
                            className={styles.enquireLink}
                          >
                            <MessageCircle size={14} />
                            Enquire
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <SectionHeader
            caption="Why Sabitri Jewellery"
            title="Trust in Every Piece"
            description="Every pendant we create is a promise of purity, artistry, and heritage."
          />
          <div className={styles.whyGrid}>
            {jewelleryWhyChoose.map((item) => (
              <div key={item} className={styles.whyItem}>
                <span className={styles.whyIcon}>
                  <Gem size={18} />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for a Custom Piece?"
        description="Tell us your design idea and budget — our jewellers will craft something made just for you."
        primaryLabel="Request a Custom Order"
        primaryHref="/contact"
      />
    </main>
  );
}
