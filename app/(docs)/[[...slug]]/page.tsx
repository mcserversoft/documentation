import { notFound } from 'next/navigation';
import { DocsPage, DocsTitle, DocsDescription, DocsBody } from 'fumadocs-ui/page';
import { source } from '@/lib/source';
import { openapi } from '@/lib/openapi';
import { OpenAPIPage } from '@/components/api-page';
import { getMDXComponents } from '@/components/mdx';

export const dynamicParams = false;

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();
  return { title: page.data.title, description: page.data.description, alternates: { canonical: page.url } };
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();
  const Content = page.data.body;
  const version = page.slugs[0] === 'apis' ? page.slugs[1] : undefined;
  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      editOnGithub={{ owner: 'mcserversoft', repo: 'documentation', sha: 'main',
        path: version ? `apis/${version}.yml` : `docs/${page.path}` }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <Content components={getMDXComponents({
          OpenAPIPage: async (props) => <OpenAPIPage {...await openapi.preloadOpenAPIPage(page)} {...props} />,
        })} />
      </DocsBody>
    </DocsPage>
  );
}
