import type { Metadata } from 'next';
import {
  Compass,
  Eye,
  Heart,
  Sparkles,
  Handshake,
  BadgeCheck,
  Leaf,
  ShieldCheck,
} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/shared/SectionHeader';
import CTASection from '@/components/shared/CTASection';
import {
  companyProfile,
  companyValues,
  companyTimeline,
} from '@/data/company';
import { IMG } from '@/data/images';
import styles from '@/app/about/about.module.scss';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'The story of Sabitri Enterprises, Puri — a family-run group of homestay, jewellery, tours & travel, and handicraft businesses rooted in Odisha heritage.',
};

const ICONS: Record<string, React.ElementType> = {
  Heart,
  Sparkles,
  Handshake,
  BadgeCheck,
  Leaf,
  ShieldCheck,
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="Our Story, Our Promise"
        subtitle="A family of businesses sharing Odisha's heritage with the world — from Puri to your home."
        image={IMG.house1}
        badge="About Sabitri Enterprises"
      />

      {/* Mission & Vision */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            caption="Purpose"
            title="Mission & Vision"
            description={companyProfile.summary}
          />
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>
                <Compass size={24} />
              </div>
              <h3 className={styles.mvTitle}>Our Mission</h3>
              <p className={styles.mvText}>{companyProfile.mission}</p>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>
                <Eye size={24} />
              </div>
              <h3 className={styles.mvTitle}>Our Vision</h3>
              <p className={styles.mvText}>{companyProfile.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <SectionHeader
            caption="Our Story"
            title="From One Home to a Family of Brands"
            align="left"
          />
          <div className={styles.story}>
            {companyProfile.story.map((para, i) => (
              <p key={i} className={styles.storyText}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Chairman Message */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.chairmanGrid}>
            <div className={styles.chairmanImageWrap}>
              <img
                src={companyProfile.chairman.image}
                alt={companyProfile.chairman.name}
                className={styles.chairmanImage}
              />
            </div>
            <div className={styles.chairmanContent}>
              <span className={styles.caption}>Chairman&apos;s Message</span>
              <h2 className={styles.title}>
                {companyProfile.chairman.name}
              </h2>
              <p className={styles.subtitle}>{companyProfile.chairman.role}</p>
              {companyProfile.chairman.message.map((para, i) => (
                <p key={i} className={styles.chairmanText}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <SectionHeader
            caption="Our Values"
            title="What We Stand For"
            description="Six principles guide every room we open, every piece we craft, and every journey we plan."
          />
          <div className={styles.valuesGrid}>
            {companyValues.map((value) => {
              const Icon = ICONS[value.icon];
              return (
                <div key={value.title} className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDesc}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            caption="Milestones"
            title="The Journey of Sabitri Enterprises"
          />
          <div className={styles.timeline}>
            {companyTimeline.map((item, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineMarker}>
                  <span className={styles.timelineYear}>{item.year}</span>
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <SectionHeader
            caption="Why Choose Us"
            title="Reasons Travellers Trust Sabitri Enterprises"
          />
          <ul className={styles.whyList}>
            {companyProfile.whyChooseUs.map((item) => (
              <li key={item} className={styles.whyItem}>
                <span className={styles.whyCheck}>
                  <BadgeCheck size={18} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
