'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const items = [{ id: 'about', label: 'About' }, { id: 'works', label: 'Work' }, { id: 'services', label: 'Services' }, { id: 'contact', label: 'Contact' }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [compact, setCompact] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const isHome = usePathname() === '/';
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setCompact(previous => y > (previous ? 64 : 120));
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      header.current?.style.setProperty('--scroll-progress', `${distance > 0 ? Math.min(1, y / distance) * 100 : 0}%`);
      if (isHome) {
        let current = 'home';
        let closestTop = -Infinity;
        for (const item of items) {
          const section = document.getElementById(item.id);
          if (!section) continue;
          const top = section.getBoundingClientRect().top;
          if (top <= window.innerHeight * .35 && top > closestTop) {
            current = item.id;
            closestTop = top;
          }
        }
        setActive(current);
      }
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const observer = new ResizeObserver(schedule);
    const main = document.getElementById('main-content');
    if (main) observer.observe(main);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [isHome]);
  useEffect(() => {
    if (!open) return;
    const dismiss = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('pointerdown', dismiss);
    return () => document.removeEventListener('pointerdown', dismiss);
  }, [open]);
  const sectionLabel = isHome ? items.find(item => item.id === active)?.label ?? 'Overview' : 'Case study';
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div className="header-space">
    <header ref={header} className={`site-header${compact ? ' is-compact' : ''}${open ? ' is-open' : ''}`} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }} onKeyDown={event => { if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } }}>
      <div className="header-inner page-shell">
        <Link className="wordmark" href="/" aria-label="Azrul, home" onClick={() => setOpen(false)}>azrul<span>.</span></Link>
        <nav aria-label="Main navigation" className="desktop-nav">{items.map(item => <Link key={item.id} href={`/#${item.id}`} aria-current={(isHome && active === item.id) || (!isHome && item.id === 'works') ? 'location' : undefined}>{item.label}</Link>)}</nav>
        <a className="resume-link" href="/resume.pdf" download>Résumé <ArrowUpRight size={15} aria-hidden="true" /></a>
        <button ref={toggle} className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : compact ? `${sectionLabel}, open navigation` : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><span>{open ? 'Close' : compact ? sectionLabel : 'Menu'}</span>{open ? <X size={18} aria-hidden="true" /> : compact ? <span className="scroll-ring" aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}</button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav page-shell" hidden={!open}>{items.map(item => <Link key={item.id} href={`/#${item.id}`} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={16} aria-hidden="true" /></Link>)}<a href="/resume.pdf" download onClick={() => setOpen(false)}>Download résumé <ArrowUpRight size={16} aria-hidden="true" /></a></nav>
    </header>
    </div>
  </>;
}
