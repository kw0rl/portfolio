import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import Skills from '@/components/Skills';

export default function AboutSection() {
  return <section id="about" className="about-section section-space page-shell" aria-labelledby="about-heading"><ScrollReveal className="about-grid">
    <div className="portrait-column"><div className="portrait-mat"><Image src="/azrul-image.jpg" alt="Azrul Mustaqqim" width={720} height={1280} sizes="(max-width: 767px) 85vw, 380px" /></div><div className="photo-caption"><span>Azrul Mustaqqim</span><span>Terengganu, MY</span></div></div>
    <div className="about-copy"><p className="eyebrow">01 / The person behind the pixels</p><h2 id="about-heading">Curious by nature.<br /><em>Thoughtful by choice.</em></h2><p className="body-large">I’m Azrul, a frontend developer who enjoys turning ideas into clear, usable interfaces.</p><p>As a fresh graduate, I’m building stronger frontend foundations through hands-on projects. I care about clean structure, responsive layouts, and the small decisions that make an experience feel easier to use.</p><p>My approach is simple: understand the problem, build with intention, and keep refining the details.</p><a className="text-link" href="/resume.pdf" download>A little more about me — my résumé <ArrowUpRight size={16} aria-hidden="true" /></a></div>
  </ScrollReveal><Skills /></section>;
}
