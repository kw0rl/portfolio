import type { MetadataRoute } from 'next';
import { profile } from '@/lib/content';
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: profile.url, changeFrequency: 'monthly', priority: 1 }, ...['ranaco', 'product-catalog'].map(slug => ({ url: `${profile.url}/work/${slug}`, changeFrequency: 'monthly' as const, priority: 0.8 }))];
}
