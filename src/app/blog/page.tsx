import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import PageHero from '../../components/shared/PageHero';
import SectionHeader from '../../components/shared/SectionHeader';
import { blogPosts, blogCategories } from '../../data/blog';
import { IMG } from '../../data/images';
import styles from './blog.module.scss';

export const metadata: Metadata = {
  title: 'Travel Journal',
  description:
    'Guides and stories about Puri, Odisha — temples, beaches, food, festivals, crafts, and travel tips from the Sabitri family.',
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        title="The Travel Journal"
        subtitle="Guides, stories, and local wisdom from the heart of Puri — written by the people who know it best."
        image={IMG.mist}
        badge="Read & Explore"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            caption="From Our Journal"
            title="Stories From Puri & Odisha"
            description="Practical guides and honest local advice — from temple rituals to the best beachside seafood."
          />

          <div className={styles.categories}>
            {blogCategories.map((category) => (
              <span key={category} className={styles.category}>
                {category}
              </span>
            ))}
          </div>

          <div className={styles.grid}>
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.cardImageWrap}>
                  <img src={post.image} alt={post.title} className={styles.cardImage} />
                  <span className={styles.cardCategory}>{post.category}</span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.metaItem}>
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className={styles.metaItem}>
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <span className={styles.cardLink}>
                    Read article <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
