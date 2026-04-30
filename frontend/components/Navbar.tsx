'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BriefcaseBusiness, Code2, Home, Mail, Sparkles, UserRound } from 'lucide-react';
import TextType from './TextType';

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

  const navItems = [
    { href: '#home', id: 'home', label: 'Home', title: 'Home', icon: Home },
    { href: '#about', id: 'about', label: 'About', title: 'About', icon: UserRound },
    { href: '#works', id: 'works', label: 'Works', title: 'Works', icon: BriefcaseBusiness },
    { href: '#services', id: 'services', label: 'Services', title: 'Services', icon: Code2 },
    { href: '#contact', id: 'contact', label: 'Contact', title: 'Contact', icon: Mail },
  ];

  return (
    <>
      <nav className="fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 md:block">
        <div className="flex items-center gap-7 rounded-full border border-emerald-900/10 bg-white/78 px-5 py-3 shadow-[0_18px_50px_rgba(51,86,65,0.14)] backdrop-blur-xl">
          <Link href="#home" className="flex items-center gap-2 rounded-full px-2 text-emerald-950">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dff0e5] text-[#2f7a52]">
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
              textColors={['#17211b', '#2f7a52', '#6aa57d']}
            />
          </Link>

          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#1f5139] text-white shadow-[0_10px_24px_rgba(31,81,57,0.2)]'
                      : 'text-slate-600 hover:bg-[#eef7f1] hover:text-[#1f5139]'
                  }`}
                  title={item.title}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <nav className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 md:hidden">
        <div className="flex items-center justify-center gap-1 rounded-full border border-emerald-900/10 bg-white/88 px-3 py-2 shadow-[0_18px_50px_rgba(51,86,65,0.18)] backdrop-blur-xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 ${
                  isActive ? 'bg-[#1f5139] text-white' : 'text-slate-600 hover:bg-[#eef7f1] hover:text-[#1f5139]'
                }`}
                title={item.title}
                aria-label={item.title}
              >
                <Icon className="h-5 w-5" />
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
