import HomeHero from '@/components/sections/HomeHero';
import HomeDivisions from '@/components/sections/HomeDivisions';
import HomeAbout from '@/components/sections/HomeAbout';
import HomeRooms from '@/components/sections/HomeRooms';
import HomeTours from '@/components/sections/HomeTours';
import HomeWhyUs from '@/components/sections/HomeWhyUs';
import HomeStats from '@/components/sections/HomeStats';
import HomeTestimonials from '@/components/sections/HomeTestimonials';
import CTASection from '@/components/shared/CTASection';
import styles from '@/app/page.module.scss';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <HomeHero />
      <HomeDivisions />
      <HomeAbout />
      <HomeRooms />
      <HomeTours />
      <HomeWhyUs />
      <HomeStats />
      <HomeTestimonials />
      <CTASection />
    </main>
  );
}
