import type { MetadataRoute } from 'next';
import { profile } from '@/lib/content';
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: profile.url, changeFrequency: 'monthly', priority: 1 }, { url: `${profile.url}/work/ranaco`, changeFrequency: 'monthly', priority: 0.8 }];
}
