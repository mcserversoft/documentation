import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Provider } from '@/components/provider';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.mcserversoft.com'),
  title: { default: 'MC Server Soft Documentation', template: '%s | MC Server Soft' },
  description: 'Guides, troubleshooting, and API reference for MC Server Soft.',
  manifest: '/manifest.json',
  icons: { icon: '/favicon.ico' },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
