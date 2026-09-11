import type { Metadata } from 'next';
import PageHero from '../../components/shared/PageHero';
import GalleryClient from './GalleryClient';
import { galleryCategories, galleryItems } from '../../data/gallery';
import { IMG } from '../../data/images';
import styles from './gallery.module.scss';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A visual journey through Sabitri Enterprises — our homestay, tours across Odisha, handcrafted jewellery, and the crafts of Puri.',
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        title="Gallery"
        subtitle="Moments from our home, our tours, and the craft traditions of Odisha."
        image={IMG.beach2}
        badge="A Visual Journey"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <GalleryClient
            categories={galleryCategories}
            items={galleryItems}
          />
        </div>
      </section>
    </main>
  );
}
