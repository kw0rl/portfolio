'use client';

import { type MouseEvent, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Layers3, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import IntroPage from '../components/IntroPage';
import AboutSection from '../components/sections/AboutSection';
import WorksSection from '../components/sections/WorksSection';
import ServicesSection from '../components/sections/ServicesSection';
import ContactSection from '../components/sections/ContactSection';
import BackToTop from '../components/BackToTop';
import ParticleBackground from '../components/ParticleBackground';
import GradualBlur from '../components/GradualBlur';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const hasVisited = sessionStorage.getItem('hasVisitedHomepage');

    if (hasVisited) {
      setTimeout(() => {
        setIsFirstVisit(false);
        setShowIntro(false);
      }, 0);
    } else {
      sessionStorage.setItem('hasVisitedHomepage', 'true');
    }
  }, []);

  const handleIntroComplete = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setShowIntro(false);
  };

  const handleSectionLinkClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const navbarOffset = window.innerWidth >= 768 ? 96 : 24;
    const top = section.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.history.pushState(null, '', `#${sectionId}`);
    window.scrollTo({
      top: Math.max(top, 0),
      behavior: 'smooth',
    });
  };

  if (isFirstVisit && showIntro) {
    return <IntroPage onComplete={handleIntroComplete} />;
  }

  const specialties = ['Web Developer', 'Mobile App Developer', 'AI Specialist'];

  return (
    <motion.div
      className="portfolio-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={isFirstVisit ? { duration: 0.8, ease: 'easeOut', delay: 0.1 } : { duration: 0.45, ease: 'easeOut' }}
    >
      <ParticleBackground />
      <Navbar />

      <main className="page-shell">
        <section id="home" className="grid min-h-[calc(100vh-180px)] items-center gap-12 pt-20 pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(380px,480px)]">
          <motion.div
            className="min-w-0"
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="section-title max-w-3xl">
              Building calm,{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">useful</span>
                <svg
                  className="absolute left-1/2 top-1/2 h-[calc(100%+16px)] w-[calc(100%+40px)] md:h-[calc(100%+24px)] md:w-[calc(100%+80px)] -translate-x-1/2 -translate-y-1/2 text-white/45 z-0 pointer-events-none -rotate-[6deg]"
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                >
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    d="M 10 22 C 15 6, 40 2, 75 6 C 96 9, 98 25, 85 34 C 60 42, 20 40, 10 28 C 4 20, 10 10, 25 8"
                  />
                </svg>
              </span>{' '}
              digital experiences.
            </h1>

            <p className="section-copy mt-6 max-w-2xl">
              Hi, I&apos;m Azrul, a fresh graduate who creates responsive websites and app interfaces with a focus on clean structure, thoughtful interaction, and modern frontend craft.

            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#works" className="soft-button shine-button" onClick={(event) => handleSectionLinkClick(event, 'works')}>
                View my work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="ghost-button shine-button" onClick={(event) => handleSectionLinkClick(event, 'contact')}>
                Contact me
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>

            <div className="specialty-marquee mt-8" aria-label={specialties.join(', ')}>
              <div className="specialty-marquee-track">
                {[...specialties, ...specialties].map((item, index) => (
                  <span key={`${index}-${item}`} className="tag-pill" aria-hidden={index >= specialties.length}>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="surface-card relative hidden w-full max-w-[480px] justify-self-center overflow-hidden p-5 lg:block"
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
          >
            <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-3 py-2 text-xs font-bold text-zinc-100 shadow-sm backdrop-blur">
              <Layers3 className="h-4 w-4" />
              Frontend Portfolio
            </div>

            <div className="rounded-lg border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 px-6 pt-14 pb-6">
              <div className="relative ml-auto aspect-square w-full max-w-[390px] overflow-hidden rounded-lg bg-zinc-800">
                <Image
                  src="/azrul-image.jpg"
                  alt="Azrul"
                  fill
                  sizes="390px"
                  priority
                  className="object-cover object-center drop-shadow-[0_22px_30px_rgba(255,255,255,0.12)]"
                />
              </div>
            </div>

            

            
          </motion.div>
        </section>

        <AboutSection />
        <WorksSection />
        <ServicesSection />
        <ContactSection />
      </main>
      
      <BackToTop />
      <GradualBlur
        target="page"
        position="bottom"
        height="7rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
        zIndex={40}
      />
    </motion.div>
  );
}
