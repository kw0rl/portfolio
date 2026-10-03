import type { MetadataRoute } from 'next';
import { profile } from '@/lib/content';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/about', '/work/ranaco', '/work/product-catalog'].map(path => ({ url: profile.url + path, changeFrequency: 'monthly', priority: path ? 0.8 : 1 }));
}
