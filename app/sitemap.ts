import { MetadataRoute } from 'next'
import { sektorler } from '@/data/sektorler'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://omnitekh3s.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...sektorler.map((sektor) => ({
      url: `https://omnitekh3s.com/sektorler/${sektor.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: 'https://omnitekh3s.com/gizlilik-politikasi',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://omnitekh3s.com/kvkk',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}