import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return source.getPages().map((page) => ({ url: `https://docs.mcserversoft.com${page.url}` }));
}
