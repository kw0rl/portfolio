import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectImage from '@/components/ProjectImage';
import { profile, ranaco } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Ranaco programmes — Selected work', description: ranaco.description,
  alternates: { canonical: '/work/ranaco' },
  openGraph: { title: 'Ranaco programmes — Azrul Mustaqqim', description: ranaco.description, url: '/work/ranaco', images: ['/opengraph-image'] },
};

export default function RanacoPage() {
  return <><Navbar /><main id="main-content" className="case-main page-shell"><Link className="text-link case-back" href="/#works"><ArrowLeft size={16} aria-hidden="true" /> Back to selected work</Link><header className="case-header"><p className="eyebrow">Selected work / Education & training</p><h1>Ranaco<br /><em>programmes.</em></h1><p className="case-lede">A clear starting point<br />for the next step.</p><p className="case-description">{ranaco.description}</p><a href={ranaco.url} className="button button-dark" target="_blank" rel="noopener noreferrer">Visit live website <ArrowUpRight size={17} aria-hidden="true" /></a></header><dl className="project-facts"><div><dt>Organization</dt><dd>{ranaco.organization}</dd></div><div><dt>Contribution</dt><dd>Frontend development</dd></div><div><dt>Built with</dt><dd>{ranaco.technologies.join(' · ')}</dd></div></dl><ProjectImage src="/ranaco.png" alt="Ranaco programme landing page with enrollment actions and course benefits" caption="01 / Programme introduction and enrollment actions" /><section className="case-content"><p className="eyebrow">The overview</p><div><h2>Helping information<br /><em>find its place.</em></h2><p>Prospective students need a clear way to explore training programmes and find enrollment information. This landing page brings programme details and the next steps together for Ranaco Education & Training Institute.</p><h3>My contribution</h3><p>I developed the responsive landing page using Next.js, TypeScript, and Tailwind CSS, with a focus on clear structure and usable frontend layouts.</p><h3>Inside the interface</h3><p>The page pairs programme information with visible enrollment actions. Its navigation links to the institute’s introduction, testimonials, and offered programmes, helping visitors move between the information they need.</p><p>Content is organized with distinct headings, grouped course benefits, and clear calls to action. These screenshots document the implemented interface.</p></div></section><ProjectImage src="/ranaco-2.png" alt="Ranaco website showing programme navigation, introduction, and enrollment buttons" caption="02 / Navigation, programme information, and next steps" /><section className="case-next"><p className="eyebrow">Have something in mind?</p><h2>Let’s make it<br /><em>work beautifully.</em></h2><div className="button-row"><Link href="/#contact" className="button button-dark">Start a conversation <ArrowUpRight size={17} aria-hidden="true" /></Link><a href={`mailto:${profile.email}`} className="text-link">Email me <ArrowUpRight size={16} aria-hidden="true" /></a></div></section></main><Footer /></>;
}
