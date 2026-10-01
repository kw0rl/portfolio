import type { Metadata } from 'next';
import { DM_Serif_Display, Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { profile } from '@/lib/content';
import SmoothScrolling from '@/components/SmoothScrolling';
import 'lenis/dist/lenis.css';
import './globals.css';

const display = DM_Serif_Display({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-display', display: 'swap' });
const body = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const description = 'Azrul Mustaqqim is a frontend developer in Terengganu, Malaysia, building thoughtful websites and app interfaces with React, Next.js, and TypeScript.';
export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: { default: 'Azrul Mustaqqim — Frontend Developer', template: '%s | Azrul Mustaqqim' },
  description, authors: [{ name: profile.name }], creator: profile.name,
  openGraph: { type: 'website', locale: 'en_MY', url: '/', siteName: 'Azrul Mustaqqim', title: 'Useful by design. Thoughtful by detail.', description, images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Azrul Mustaqqim — Frontend Developer' }] },
  twitter: { card: 'summary_large_image', title: 'Azrul Mustaqqim — Frontend Developer', description, images: ['/opengraph-image'] },
  alternates: { canonical: '/' }, robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}><SmoothScrolling />{children}<Analytics /></body></html>;
}
