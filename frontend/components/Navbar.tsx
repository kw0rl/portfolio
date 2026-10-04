'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Download, Menu, X } from 'lucide-react';
const items = [{ id: 'works', label: 'Work', href: '/#works' }, { id: 'about', label: 'About', href: '/about' }, { id: 'contact', label: 'Contact', href: '/#contact' }];
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('works');
  const [compact, setCompact] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setCompact(previous => y > (previous ? 64 : 120));
      const distance = document.documentElement.scrollHeight - innerHeight;
      header.current?.style.setProperty('--scroll-progress', Math.min(100, distance > 0 ? y / distance * 100 : 0) + '%');
      if (pathname === '/') {
        let current = 'works';
        let closestTop = -Infinity;
        for (const id of ['works', 'contact']) {
          const section = document.getElementById(id);
          if (!section) continue;
          const top = section.getBoundingClientRect().top;
          if (top <= innerHeight * .35 && top > closestTop) { current = id; closestTop = top; }
        }
        setActive(current);
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    addEventListener('scroll', schedule, { passive: true });
    addEventListener('resize', schedule);
    const observer = new ResizeObserver(schedule);
    const main = document.getElementById('main-content');
    if (main) observer.observe(main);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); removeEventListener('scroll', schedule); removeEventListener('resize', schedule); };
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const dismiss = (event: PointerEvent) => { if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false); };
    document.addEventListener('pointerdown', dismiss);
    return () => document.removeEventListener('pointerdown', dismiss);
  }, [open]);
  const current = pathname === '/about' ? 'about' : pathname.startsWith('/work/') ? 'works' : active;
  const label = pathname.startsWith('/work/') ? 'Project' : items.find(item => item.id === current)?.label ?? 'Work';
  return <><a className="skip-link" href="#main-content">Skip to content</a><div className="header-space"><header ref={header} className={'site-header' + (compact ? ' is-compact' : '') + (open ? ' is-open' : '')} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }} onKeyDown={event => { if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } }}>
    <div className="header-inner page-shell"><Link className="island-brand" href="/" aria-label="Azrul, home" onClick={() => setOpen(false)}><svg viewBox="101 275 623 231" width="130" height="48" aria-hidden="true"><image href="/logo azrul portfolio.png" width="800" height="800" /></svg></Link><nav className="desktop-nav" aria-label="Main navigation">{items.map(item => <Link key={item.id} href={item.href} aria-current={current === item.id ? 'location' : undefined}>{item.label}</Link>)}</nav><a className="resume-link" href="/resume.pdf" download>Résumé <Download size={16} aria-hidden="true" /></a><button ref={toggle} className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : compact ? label + ', open navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><span>{open ? '' : compact ? label : 'Menu'}</span>{compact && !open && <span className="scroll-ring" aria-hidden="true" />}{open ? <X size={18} aria-hidden="true" /> : !compact && <Menu size={18} aria-hidden="true" />}</button></div>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>{items.map(item => <Link key={item.id} href={item.href} aria-current={current === item.id ? 'location' : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)}<a href="/resume.pdf" download onClick={() => setOpen(false)}>Download résumé <Download size={17} aria-hidden="true" /></a></nav>
  </header></div></>;
}
