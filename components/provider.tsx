'use client';

import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import DocsSearch from './search';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider theme={{ defaultTheme: 'dark' }} search={{ SearchDialog: DocsSearch }}>
      {children}
    </RootProvider>
  );
}
