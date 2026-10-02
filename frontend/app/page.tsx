import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Asterisk } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/sections/AboutSection';
import WorksSection from '@/components/sections/WorksSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';
import { profile } from '@/lib/content';

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Person', name: profile.name,
      url: profile.url, jobTitle: 'Frontend Developer', email: profile.email,
      sameAs: [profile.github, profile.linkedin],
    }) }} />
    <Navbar />
    <main id="main-content">
      <section id="home" className="hero page-shell" aria-labelledby="hero-title">
        <div className="hero-topline"><span className="eyebrow">A portfolio by Azrul Mustaqqim</span><span className="availability"><span className="status-dot" /> Open to roles & projects</span></div>
        <div className="hero-title-wrap"><h1 id="hero-title">Useful by design.<br /><em>Thoughtful</em> by detail.</h1><Asterisk className="hero-flower" strokeWidth={1} aria-hidden="true" /></div>
        <div className="hero-bottom">
          <Link href="#about" className="profile-intro"><Image src="/azrul 2-portfolio.jpg" alt="" width={52} height={52} className="profile-avatar" /><span>Hi, I’m Azrul.<small>Frontend developer · Malaysia</small></span></Link>
          <div className="hero-introduction"><p>I build responsive websites and app interfaces with care for how they look, feel, and work.</p><div className="button-row"><a className="button button-dark" href="#works">View selected work <ArrowDownRight size={17} aria-hidden="true" /></a><a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16} aria-hidden="true" /></a></div></div>
        </div>
        <div className="hero-footnote"><span>Thoughtful interfaces. Practical foundations.</span><a href="#about" aria-label="Scroll to about me"><ArrowDown size={18} aria-hidden="true" /></a></div>
      </section>
      <AboutSection /><WorksSection /><ServicesSection /><ContactSection />
    </main>
    <Footer />
  </>;
}
