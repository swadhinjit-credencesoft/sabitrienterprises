import type { Metadata } from 'next';
import { MapPin, Briefcase, Check, ArrowRight } from 'lucide-react';
import PageHero from '../../components/shared/PageHero';
import SectionHeader from '../../components/shared/SectionHeader';
import CTASection from '../../components/shared/CTASection';
import { jobPostings, companyPerks, careersHowToApply } from '../../data/careers';
import { IMG } from '../../data/images';
import styles from './careers.module.scss';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the Sabitri Enterprises family in Puri — roles across our homestay, tours & travels, jewellery, and handicraft businesses.',
};

export default function CareersPage() {
  return (
    <main>
      <PageHero
        title="Careers at Sabitri"
        subtitle="Work with a family that treats its team like its own — and helps you grow across four businesses."
        image={IMG.nature1}
        badge="Join the Family"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            caption="Open Positions"
            title="Current Openings in Puri"
            description="If you love hospitality, travel, or crafts, there may be a place for you at Sabitri."
          />

          <div className={styles.jobList}>
            {jobPostings.map((job) => (
              <div key={job.title} className={styles.jobCard}>
                <div className={styles.jobHeader}>
                  <div>
                    <span className={styles.jobDivision}>{job.division}</span>
                    <h2 className={styles.jobTitle}>{job.title}</h2>
                  </div>
                  <div className={styles.jobMeta}>
                    <span className={styles.jobMetaItem}>
                      <Briefcase size={14} />
                      {job.type}
                    </span>
                    <span className={styles.jobMetaItem}>
                      <MapPin size={14} />
                      {job.location}
                    </span>
                  </div>
                </div>
                <p className={styles.jobDesc}>{job.description}</p>

                <div className={styles.jobColumns}>
                  <div>
                    <h3 className={styles.jobSubTitle}>Responsibilities</h3>
                    <ul className={styles.jobListItems}>
                      {job.responsibilities.map((item) => (
                        <li key={item}>
                          <Check size={14} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className={styles.jobSubTitle}>Requirements</h3>
                    <ul className={styles.jobListItems}>
                      {job.requirements.map((item) => (
                        <li key={item}>
                          <Check size={14} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <SectionHeader
            caption="Why Work With Us"
            title="A Family That Grows Together"
          />
          <div className={styles.perksGrid}>
            {companyPerks.map((perk) => (
              <div key={perk} className={styles.perkItem}>
                <span className={styles.perkIcon}>
                  <Check size={16} />
                </span>
                <span>{perk}</span>
              </div>
            ))}
          </div>

          <SectionHeader
            caption="How to Apply"
            title="A Simple Application"
          />
          <div className={styles.applyList}>
            {careersHowToApply.map((step, i) => (
              <div key={step} className={styles.applyStep}>
                <span className={styles.applyNumber}>{String(i + 1).padStart(2, '0')}</span>
                <p className={styles.applyText}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See the Right Role?"
        description="We're always glad to meet talented, kind people. Send us your resume and tell us how you'd like to contribute."
        primaryLabel="Send Your Resume"
        primaryHref="/contact"
      />
    </main>
  );
}
