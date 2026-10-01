import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { ranaco } from '@/lib/content';

export default function WorksSection() {
  return <section id="works" className="work-section section-space" aria-labelledby="work-heading"><div className="page-shell">
    <ScrollReveal><div className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2 id="work-heading">A clear purpose.<br /><em>A considered experience.</em></h2></div><p>A closer look at an interface I’ve brought to life.</p></div></ScrollReveal>
    <ScrollReveal><article className="project-feature">
      <Link className="project-visual" href="/work/ranaco" aria-label="Read the Ranaco programmes case study"><div className="project-visual-label"><span>RANACO</span><span>Education & training ↗</span></div><div className="project-window"><div className="window-bar" aria-hidden="true"><span /><span /><span /><p>ranacolandingpage.reti.edu.my</p></div><Image src="/ranaco.png" alt="Ranaco programmes website with course information and a prominent enrollment action" width={950} height={983} sizes="(max-width: 767px) 85vw, (max-width: 1200px) 75vw, 1000px" /></div><span className="project-open"><ArrowUpRight size={24} aria-hidden="true" /></span></Link>
      <div className="project-details"><div><p className="eyebrow">Featured project / Web development</p><h3><Link href="/work/ranaco">{ranaco.title}</Link></h3><p>{ranaco.description}</p><ul className="tech-list" aria-label="Technologies">{ranaco.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul></div><div className="project-actions"><Link className="button button-outline" href="/work/ranaco">Read case study <ArrowUpRight size={17} aria-hidden="true" /></Link><a className="text-link" href={ranaco.url} target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight size={16} aria-hidden="true" /></a></div></div>
    </article></ScrollReveal>
  </div></section>;
}
