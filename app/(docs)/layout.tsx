import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{ title: <><img src="/img/logo.svg" alt="" width={28} height={28} /> MC Server Soft</>, url: '/' }}
      githubUrl="https://github.com/mcserversoft/documentation"
      links={[
        { text: 'Guides', url: '/', active: 'url' },
        { text: 'API reference', url: '/apis/v2' },
        { text: 'Website', url: 'https://www.mcserversoft.com', external: true },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
