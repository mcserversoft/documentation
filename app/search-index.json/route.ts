import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const dynamic = 'force-static';
export const { staticGET: GET } = createFromSource(source, {
  buildIndex(page) {
    const isApiOverview = page.slugs[0] === 'apis' && page.slugs.length === 2;
    return {
      id: page.url,
      url: page.url,
      title: page.data.title,
      description: page.data.description,
      // Overview cards duplicate every endpoint and expose JSX attributes in
      // snippets. Index their headings, and let the endpoint pages supply detail.
      structuredData: isApiOverview
        ? { headings: page.data.structuredData.headings, contents: [] }
        : page.data.structuredData,
    };
  },
});
