import HomeHero from '@/components/sections/HomeHero';
import HomeDivisions from '@/components/sections/HomeDivisions';
import HomeAbout from '@/components/sections/HomeAbout';
import HomeRoomsAndTours from '@/components/sections/HomeRoomsAndTours';
import HomeWhyUs from '@/components/sections/HomeWhyUs';
import HomeTestimonials from '@/components/sections/HomeTestimonials';
import CTASection from '@/components/shared/CTASection';
import styles from '@/app/page.module.scss';

export default function HomePage() {
  return (
    <div className={styles.main}>
      <HomeHero />
      <HomeDivisions />
      <HomeAbout />
      <HomeRoomsAndTours />
      <HomeWhyUs />
      <HomeTestimonials />
      <CTASection />
    </div>
  );
}

