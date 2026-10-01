import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const services = [
  { title: 'Web development', description: 'Responsive websites and landing pages that give your content a clear home.', detail: 'Websites / Landing pages / React & Next.js' },
  { title: 'Interface implementation', description: 'Bringing designs into the browser with thoughtful layouts and considered interactions.', detail: 'Design to code / Responsive UI / Interaction' },
  { title: 'Mobile interfaces', description: 'Practical, consistent app interfaces, with an emphasis on clear user flows.', detail: 'React Native / App screens / Mobile UI' },
];

export default function ServicesSection() {
  return <section id="services" className="services-section section-space" aria-labelledby="services-heading"><div className="page-shell"><ScrollReveal><div className="section-heading"><div><p className="eyebrow">03 / How I can help</p><h2 id="services-heading">From an idea<br /><em>to an interface.</em></h2></div><p>A thoughtful development partner for your next website or app interface.</p></div></ScrollReveal><div className="service-list">{services.map((service, index) => <ScrollReveal key={service.title} delay={index * 0.07}><a className="service-row" href="#contact"><span className="service-number">0{index + 1}</span><h3>{service.title}</h3><div><p>{service.description}</p><span className="service-detail">{service.detail}</span></div><ArrowUpRight size={26} strokeWidth={1.3} aria-hidden="true" /></a></ScrollReveal>)}</div></div></section>;
}
