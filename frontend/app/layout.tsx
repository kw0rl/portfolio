import type { Metadata } from 'next';
import { Bricolage_Grotesque, Plus_Jakarta_Sans, Caveat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { profile } from '@/lib/content';
import './globals.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const body = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const handwriting = Caveat({ subsets: ['latin'], weight: '700', variable: '--font-handwriting', display: 'swap' });
const description = 'Azrul Mustaqqim is a frontend developer in Terengganu, Malaysia, building websites with React and Next.js and mobile apps with Flutter.';
export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: { default: 'Azrul Mustaqqim', template: '%s | Azrul Mustaqqim' },
  description, authors: [{ name: profile.name }], creator: profile.name,
  openGraph: { type: 'website', locale: 'en_MY', url: '/', siteName: 'Azrul Mustaqqim', title: 'Web & Flutter development.', description, images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Azrul Mustaqqim — Web & Flutter Developer' }] },
  twitter: { card: 'summary_large_image', title: 'Azrul Mustaqqim — Web & Flutter Developer', description, images: ['/opengraph-image'] },
  alternates: { canonical: '/' }, robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable} ${handwriting.variable}`}>{children}<Analytics /></body></html>;
}

