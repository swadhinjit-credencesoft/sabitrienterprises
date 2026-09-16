import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { rooms } from '@/data/rooms';
import { tourPackages } from '@/data/tours';
import { blogPosts } from '@/data/blog';
import { policies } from '@/data/policies';
import { jewelleryCollections } from '@/data/jewellery';

export const dynamic = 'force-static';

const staticRoutes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
}> = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/homestay', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/jewellery', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/tours', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/handicrafts', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/gallery', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/testimonials', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/booking', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/careers', priority: 0.5, changeFrequency: 'weekly' },
  { path: '/policies', priority: 0.4, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticSitemap: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const roomRoutes: MetadataRoute.Sitemap = rooms.map((room) => ({
    url: `${SITE_URL}/homestay/rooms/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const tourRoutes: MetadataRoute.Sitemap = tourPackages.map((tour) => ({
    url: `${SITE_URL}/tours#${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const policyRoutes: MetadataRoute.Sitemap = policies.map((policy) => ({
    url: `${SITE_URL}/policies/${policy.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.4,
  }));

  const jewelleryRoutes: MetadataRoute.Sitemap = jewelleryCollections.flatMap(
    (collection) =>
      collection.products.map((product) => ({
        url: `${SITE_URL}/jewellery/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }))
  );

  return [
    ...staticSitemap,
    ...roomRoutes,
    ...tourRoutes,
    ...blogRoutes,
    ...policyRoutes,
    ...jewelleryRoutes,
  ];
}