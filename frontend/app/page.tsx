'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Layers3, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import IntroPage from '../components/IntroPage';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
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

  if (isFirstVisit && showIntro) {
    return <IntroPage onComplete={() => setShowIntro(false)} />;
  }

  const specialties = ['Web Developer', 'Mobile App Developer', 'AI Specialist'];

  return (
    <motion.div
      className="portfolio-page"
      initial={isFirstVisit ? { opacity: 0, scale: 1.02, filter: 'blur(14px)' } : { opacity: 0 }}
      animate={isFirstVisit ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 1 }}
      transition={isFirstVisit ? { duration: 1.1, ease: 'easeOut', delay: 0.1 } : { duration: 0.45, ease: 'easeOut' }}
    >
      <Navbar />

      <main className="page-shell">
        <section className="grid min-h-[calc(100vh-180px)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="section-kicker">
              <span className="h-2 w-2 rounded-full bg-[#8fc9a4]" />
              Available for freelance work
            </div>

            <h1 className="section-title max-w-3xl">
              Building calm,{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">useful</span>
                <svg
                  className="absolute left-1/2 top-1/2 h-[calc(100%+16px)] w-[calc(100%+40px)] md:h-[calc(100%+24px)] md:w-[calc(100%+80px)] -translate-x-1/2 -translate-y-1/2 text-[#8fc9a4] z-0 pointer-events-none -rotate-[6deg]"
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
              <a href="/works" className="soft-button">
                View my work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/contact" className="ghost-button">
                Contact me
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {specialties.map((item) => (
                <span key={item} className="tag-pill">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block surface-card relative overflow-hidden p-5"
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
          >
            <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-xs font-bold text-[#2f7a52] shadow-sm">
              <Layers3 className="h-4 w-4" />
              Frontend Portfolio
            </div>

            <div className="rounded-lg bg-gradient-to-br from-[#e8f4ec] via-white to-[#f4f7f4] px-6 pt-14">
              <div className="mx-auto flex aspect-square max-w-[420px] items-end justify-center overflow-hidden rounded-b-none rounded-t-[999px] bg-[#dcefe3]">
                <Image
                  src="/memoji.png"
                  alt="Azrul Memoji"
                  width={420}
                  height={420}
                  priority
                  className="h-[86%] w-[86%] object-contain drop-shadow-[0_22px_30px_rgba(31,81,57,0.2)]"
                />
              </div>
            </div>

            <div className="grid gap-3 pt-5 sm:grid-cols-3">
              {[
                ['10+', 'Projects'],
                ['200+', 'Commits'],
                ['8+', 'Tech stacks'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-emerald-900/10 bg-white/72 p-4">
                  <div className="text-2xl font-black text-[#1f5139]">{value}</div>
                  <div className="mt-1 text-sm font-semibold text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </motion.div>
  );
}
