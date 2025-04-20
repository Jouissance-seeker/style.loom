import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import TemplateBase from '@/containers/templates/base';

const roboto = Roboto({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'style.loom',
  description: 'ecommerce website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <TemplateBase>{children}</TemplateBase>
        </Providers>
      </body>
    </html>
  );
}
