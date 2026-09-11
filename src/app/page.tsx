import HomeHero from '../components/home/HomeHero';
import HomeDivisions from '../components/home/HomeDivisions';
import HomeAbout from '../components/home/HomeAbout';
import HomeRooms from '../components/home/HomeRooms';
import HomeTours from '../components/home/HomeTours';
import HomeWhyUs from '../components/home/HomeWhyUs';
import HomeStats from '../components/home/HomeStats';
import HomeTestimonials from '../components/home/HomeTestimonials';
import CTASection from '../components/shared/CTASection';
import styles from './page.module.scss';

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
