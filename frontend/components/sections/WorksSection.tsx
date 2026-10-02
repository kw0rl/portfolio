import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { ranaco } from '@/lib/content';
import { productCatalog } from '@/lib/product-catalog';

export default function WorksSection() {
  const projects = [
    { title: ranaco.title, href: '/work/ranaco', type: 'Web development', description: ranaco.description, technologies: ranaco.technologies },
    { title: productCatalog.title, href: '/work/product-catalog', type: 'Flutter app · Technical assessment', description: productCatalog.description, technologies: productCatalog.technologies },
  ];
  return <section id="works" className="work-section section-space" aria-labelledby="work-heading"><div className="page-shell">
    <ScrollReveal><div className="section-heading"><div><p className="eyebrow">02 / Selected work</p><h2 id="work-heading">A clear purpose.<br /><em>A considered experience.</em></h2></div><p>A closer look at the web and mobile interfaces I’ve brought to life.</p></div></ScrollReveal>
    <div className="work-grid">{projects.map((project, index) => <article className="work-card" key={project.href}>
      <Link className={`work-preview ${index === 0 ? 'work-preview-web' : 'work-preview-app'}`} href={project.href} aria-label={`View ${project.title} project`}>
        {index === 0 ? <div className="work-browser"><div className="work-browser-bar" aria-hidden="true"><span /><span /><span /><p>ranacolandingpage.reti.edu.my</p></div><Image src="/ranacolandingpage.reti.edu.my_ (1).webp" alt="Ranaco programme landing page with course information and enrollment actions" width={4886} height={2192} sizes="(max-width: 767px) 85vw, (max-width: 1200px) 40vw, 520px" /></div> : <Image className="work-phone" src={productCatalog.screenshots[0].image} alt={productCatalog.screenshots[0].alt} sizes="160px" />}
        <span className="work-preview-arrow" aria-hidden="true"><ArrowUpRight size={20} /></span>
      </Link>
      <div className="work-card-body"><p className="eyebrow">{project.type}</p><h3><Link href={project.href}>{project.title}</Link></h3><p className="work-card-description">{project.description}</p><ul className="tech-list" aria-label={`${project.title} technologies`}>{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul><Link href={project.href} className="text-link work-card-link">View project <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
    </article>)}</div>
  </div></section>;
}
