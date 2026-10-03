import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { ranaco } from '@/lib/content';
import { productCatalog } from '@/lib/product-catalog';

export default function WorksSection() {
  const projects = [
    { title: ranaco.title, href: '/work/ranaco', type: 'Web development', description: 'A clear route from programme discovery to enrollment.', technologies: ranaco.technologies },
    { title: productCatalog.title, href: '/work/product-catalog', type: 'Flutter · Technical assessment', description: 'Browse, search, and explore products in a focused mobile app.', technologies: productCatalog.technologies },
  ];
  return <section id="works" className="project-index" aria-labelledby="work-heading">
    <div className="index-heading"><h2 id="work-heading">Selected projects</h2><span>Web &amp; mobile / 02</span></div>
    {projects.map((project, index) => <ScrollReveal key={project.href}><article className="index-project">
      <div className="project-title-row"><span className="project-number">0{index + 1}</span><div><p className="eyebrow">{project.type}</p><h3><Link href={project.href}>{project.title}</Link></h3></div><ArrowUpRight size={30} strokeWidth={1.4} aria-hidden="true" /></div>
      <Link className={'project-preview ' + (index === 0 ? 'preview-web' : 'preview-mobile')} href={project.href} aria-label={'View ' + project.title + ' project'}>
        {index === 0 ? <div className="browser-preview"><div className="browser-toolbar" aria-hidden="true"><span /><span /><span /><p>ranacolandingpage.reti.edu.my</p></div><Image src="/ranacolandingpage.reti.edu.my_ (1).webp" alt="Ranaco landing page showing programme information and enrollment actions" width={4886} height={2192} sizes="(max-width: 1023px) 85vw, 700px" priority /></div> : <Image className="phone-preview" src={productCatalog.screenshots[0].image} alt={productCatalog.screenshots[0].alt} sizes="180px" />}
        <span className="preview-label" aria-hidden="true">{index === 0 ? 'Built for the web' : 'Made for mobile'}</span>
      </Link>
      <div className="project-summary"><p>{project.description}</p><Link className="text-link" href={project.href}>View project <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
      <ul className="tech-list" aria-label={project.title + ' technologies'}>{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
    </article></ScrollReveal>)}
  </section>;
}
