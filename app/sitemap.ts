import { MetadataRoute } from 'next'
import { sektorler } from '@/data/sektorler'

// Bu sektör sayfaları yayında kalır ancak ana sayfa listesinden ve sitemap'ten çıkarıldı.
const sitemapDisindaSlugs = ['ofis-koworking', 'dis-mekan-etkinlik']

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://omnitekh3s.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...sektorler
      .filter((sektor) => !sitemapDisindaSlugs.includes(sektor.slug))
      .map((sektor) => ({
        url: `https://omnitekh3s.com/sektorler/${sektor.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      })),
  ]
}