import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clonchat - AI Digital Clones for Companies',
  description: 'We create AI digital clones that work for you 24/7. Automate sales, marketing and customer support with cutting-edge technology.',
  keywords: 'digital clones, AI, automation, sales, marketing, customer support, chatbots, artificial intelligence',
  authors: [{ name: 'Clonchat' }],
  openGraph: {
    title: 'Clonchat - AI Digital Clones for Companies',
    description: 'We create AI digital clones that work for you 24/7. Automate sales, marketing and customer support.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clonchat - AI Digital Clones for Companies',
    description: 'We create AI digital clones that work for you 24/7. Automate sales, marketing and customer support.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}