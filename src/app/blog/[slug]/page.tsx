import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import CTASection from '@/components/shared/CTASection';
import { blogPosts } from '@/data/blog';
import styles from '@/app/blog/[slug]/post.module.scss';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return {
    title: post ? post.title : 'Article',
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className={styles.missing}>
        <h1>Article not found</h1>
        <Link href="/blog">Back to Journal</Link>
      </main>
    );
  }

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);
  const fallback = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);
  const relatedPosts = related.length > 0 ? related : fallback;

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroImageWrap}>
          <img src={post.image} alt={post.title} className={styles.heroImage} />
          <div className={styles.overlay} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <Link href="/blog" className={styles.back}>
              <ArrowLeft size={16} />
              All Articles
            </Link>
            <span className={styles.category}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <User size={14} />
                {post.author}
              </span>
              <span className={styles.metaItem}>
                <Calendar size={14} />
                {post.date}
              </span>
              <span className={styles.metaItem}>
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <article className={styles.article}>
            {post.body.map((block) => (
              <div key={block.heading} className={styles.block}>
                <h2 className={styles.heading}>{block.heading}</h2>
                {block.content.map((paragraph) => (
                  <p key={paragraph} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </article>

          <div className={styles.related}>
            <h2 className={styles.relatedTitle}>Keep Reading</h2>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedImageWrap}>
                    <img src={p.image} alt={p.title} className={styles.relatedImage} />
                  </div>
                  <div className={styles.relatedBody}>
                    <span className={styles.relatedCategory}>{p.category}</span>
                    <h3 className={styles.relatedName}>{p.title}</h3>
                    <p className={styles.relatedExcerpt}>{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience It in Person"
        description="Reading is lovely — but staying on Grand Road, tasting home-cooked Odia food, and walking to the temple is better."
        primaryLabel="Plan Your Stay"
      />
    </main>
  );
}
