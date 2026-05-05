'use client';

import { type MouseEvent, useEffect, useState } from 'react';
import { BriefcaseBusiness, Code2, Home, Mail, Sparkles, UserRound } from 'lucide-react';
import TextType from './TextType';
import GlassSurface from './GlassSurface';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'works', 'services', 'contact'];
      let currentSection = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navItems = [
    { href: '#home', id: 'home', label: 'Home', title: 'Home', icon: Home },
    { href: '#about', id: 'about', label: 'About', title: 'About', icon: UserRound },
    { href: '#works', id: 'works', label: 'Works', title: 'Works', icon: BriefcaseBusiness },
    { href: '#services', id: 'services', label: 'Services', title: 'Services', icon: Code2 },
    { href: '#contact', id: 'contact', label: 'Contact', title: 'Contact', icon: Mail },
  ];

  return (
    <>
      <nav className="fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 md:block pointer-events-auto">
        <GlassSurface
          width="max-content"
          height={64}
          borderRadius={9999}
          blur={11}
          opacity={0.8}
          backgroundOpacity={0.05}
          distortionScale={-30}
          redOffset={0}
          greenOffset={2}
          blueOffset={4}
          className="shadow-[0_18px_50px_rgba(0,0,0,0.42)]"
        >
          <div className="flex items-center justify-between gap-7 px-3 py-1">
            <a href="#home" onClick={(event) => handleSectionLinkClick(event, 'home')} className="flex items-center gap-2 rounded-full px-2 text-zinc-100 relative z-20">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              <TextType
                text={['Azrul', 'Developer', 'Portfolio']}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={3000}
                initialDelay={500}
                loop={true}
                showCursor={false}
                className="text-sm font-bold tracking-normal"
                textColors={['#f8fafc', '#d4d4d4', '#a3a3a3']}
              />
            </a>

            <div className="flex items-center gap-1 relative z-20">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) => handleSectionLinkClick(event, item.id)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-black shadow-[0_10px_24px_rgba(255,255,255,0.16)]'
                        : 'text-zinc-400 hover:bg-white/10 hover:text-white'
                    }`}
                    title={item.title}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </GlassSurface>
      </nav>

      <nav className="fixed bottom-5 left-1/2 z-[230] -translate-x-1/2 md:hidden pointer-events-auto">
        <GlassSurface
          width="max-content"
          height={60}
          borderRadius={9999}
          blur={11}
          opacity={0.8}
          backgroundOpacity={0.05}
          distortionScale={-30}
          redOffset={0}
          greenOffset={2}
          blueOffset={4}
        >
          <div className="flex h-full items-center justify-center gap-1 px-1 relative z-20">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleSectionLinkClick(event, item.id)}
                  className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 ${
                    isActive ? 'bg-white text-black' : 'text-zinc-400 hover:bg-white/10 hover:text-white'
                  }`}
                  title={item.title}
                  aria-label={item.title}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </GlassSurface>
      </nav>
    </>
  );
}
