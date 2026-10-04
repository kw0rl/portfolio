'use client';
import SocialLink from '@/components/SocialLink';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowLeft, ArrowRight, Download, Mail, Globe2, Lightbulb, Smile, Send, Plus } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { profile, ranaco } from '@/lib/content';
import { productCatalog } from '@/lib/product-catalog';

const sections = ['Home', 'Work', 'About', 'Contact'];
const ids = ['home', 'works', 'about', 'contact'];
export default function Playground() {
  const [active, setActive] = useState(0);
  const [project, setProject] = useState(0);
  const viewport = useRef<HTMLDivElement>(null);
  const lock = useRef(0);
  const wheelAmount = useRef(0);
  const lastWheel = useRef(0);
  const touch = useRef({ x: 0, y: 0, top: 0 });
  const previous = useRef(0);
  const [direction, setDirection] = useState(1);
  const go = useCallback((index: number) => {
    const target = Math.max(0, Math.min(3, index));
    setDirection(target >= previous.current ? 1 : -1);
    previous.current = target;
    setActive(target);
    history.replaceState(null, '', target === 0 ? location.pathname : '#' + ids[target]);
    viewport.current?.scrollTo({ top: 0 });
  }, []);
  useEffect(() => {
    const sync = () => { const index = ids.indexOf(location.hash.slice(1)); if (index >= 0) { setActive(index); viewport.current?.scrollTo({ top: 0 }); } };
    sync(); addEventListener('hashchange', sync);
    return () => removeEventListener('hashchange', sync);
  }, []);
  useEffect(() => {
    const el = viewport.current;
    if (!el) return;
    const wheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      const down = event.deltaY > 0;
      if (down ? el.scrollTop + el.clientHeight < el.scrollHeight - 2 : el.scrollTop > 2) return;
      event.preventDefault();
      const now = performance.now();
      const gap = now - lastWheel.current;
      lastWheel.current = now;
      if (now < lock.current) return;
      if (gap > 160) wheelAmount.current = 0;
      wheelAmount.current += event.deltaY * (event.deltaMode === 1 ? 16 : 1);
      if (Math.abs(wheelAmount.current) < 60) return;
      go(active + (down ? 1 : -1)); wheelAmount.current = 0; lock.current = now + 1000;
    };
    el.addEventListener('wheel', wheel, { passive: false });
    return () => el.removeEventListener('wheel', wheel);
  }, [active, go]);
  useEffect(() => {
    if (active !== 2) return;
    const stage = viewport.current?.querySelector<HTMLElement>('.about-stage');
    const heading = stage?.querySelector('h1');
    if (!stage || !heading) return;
    const alignPortrait = () => {
      const height = stage.getBoundingClientRect().bottom - heading.getBoundingClientRect().top;
      stage.style.setProperty('--portrait-height', height + 'px');
    };
    const observer = new ResizeObserver(alignPortrait);
    observer.observe(stage);
    observer.observe(heading);
    alignPortrait();
    return () => observer.disconnect();
  }, [active]);
  const current = project === 0 ? ranaco : productCatalog;
  return <div className={'playground scene-' + active}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="play-top"><Link href="/" onClick={() => go(0)} className="play-brand" aria-label="Azrul, home"><svg viewBox="101 275 623 231" width="150" height="56" aria-hidden="true" style={{ display: 'block', width: 'clamp(120px, 10.42vw, 150px)', height: 'auto' }}><image href="/logo azrul portfolio.png" width="800" height="800" /></svg></Link><span className="play-top-note">Independent developer · Malaysia</span><a href="/resume.pdf" download className="resume-chip">Résumé <Download size={16} strokeWidth={1.5} aria-hidden="true" /></a></header>
    <aside className="wheel-sidebar"><div className="wheel-anchor" aria-hidden="true">a</div><nav className="wheel-nav" aria-label="Main navigation">{sections.map((section, index) => {
      const offset = index - active;
      return <button key={section} onClick={() => go(index)} aria-current={active === index ? 'page' : undefined} style={{ transform: `translate(${Math.cos(offset * .53) * 46}px, ${offset * 62}px) rotate(${offset * 17}deg)` }}><span className="wheel-number">0{index + 1}</span>{section}</button>;
    })}</nav><div className="sidebar-foot"><span className="available-dot" /> Open to opportunities<br /><SocialLink platform="github" href={profile.github} /><SocialLink platform="linkedin" href={profile.linkedin} /></div></aside>
    <main id="main-content" className="play-main" tabIndex={0} onKeyDown={event => {
      if ((event.target as HTMLElement).closest('input, textarea, button, a, select')) return;
      if (event.key === 'ArrowDown' || event.key === 'PageDown') { event.preventDefault(); go(active + 1); }
      if (event.key === 'ArrowUp' || event.key === 'PageUp') { event.preventDefault(); go(active - 1); }
      if (active === 1 && ['ArrowLeft', 'ArrowRight'].includes(event.key)) { event.preventDefault(); setProject(p => 1 - p); }
    }}>
      <div className="scene-viewport" ref={viewport} onTouchStart={event => {
        const point = event.touches[0];
        touch.current = { x: point.clientX, y: point.clientY, top: event.currentTarget.scrollTop };
      }} onTouchEnd={event => {
        if ((event.target as HTMLElement).closest('input, textarea, button')) return;
        const point = event.changedTouches[0];
        const dx = touch.current.x - point.clientX;
        const dy = touch.current.y - point.clientY;
        const el = event.currentTarget;
        if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) && active === 1) { setProject(p => 1 - p); return; }
        const atEdge = dy > 0 ? touch.current.top + el.clientHeight >= el.scrollHeight - 3 : touch.current.top <= 2;
        if (Math.abs(dy) > 80 && Math.abs(dy) > Math.abs(dx) && atEdge) go(active + (dy > 0 ? 1 : -1));
      }}>
        <section key={active} className={'scene-content ' + (direction < 0 ? 'scene-back' : '')} aria-label={sections[active]}>
          {active === 0 && <div className="home-stage"><div className="stage-kicker"><span>HELLO WORLD!</span><Globe2 size={32} aria-hidden="true" /></div><h1>I build for<br /><span className="headline-web">web.</span> And<br /><span className="headline-mobile">mobile<svg viewBox="0 0 400 20" aria-hidden="true"><path d="M4 12 Q170 -5 395 10 M25 18 Q210 5 360 15" /></svg></span></h1><div className="hero-sticker"><span>IDEAS IN.</span><Lightbulb size={38} aria-hidden="true" /><span>GOOD STUFF OUT.</span></div><div className="home-bottom"><p>Curious mind. Hands-on maker.<br />Turning ideas into websites and Flutter apps.</p><button className="play-button" onClick={() => go(1)}>Explore my work <ArrowDown size={20} /></button></div><div className="hero-tags"><span>REACT / NEXT.JS</span><span>FLUTTER / DART</span><span>BUILT WITH INTENTION</span></div></div>}
          {active === 1 && <div className="work-stage"><div className="stage-kicker"><span>SELECTED WORK / WEB & MOBILE</span><span>02 PROJECTS</span></div><div key={project} className="project-slide"><div className="work-title"><h1>{project === 0 ? <>Learning.<br /><em>Made clearer.</em></> : <>Small screen.<br /><em>Big possibilities.</em></>}</h1><span className="project-tag">{project === 0 ? 'WEB DEVELOPMENT' : 'FLUTTER APP'}</span></div><Link className={'work-art ' + (project ? 'art-phones' : 'art-browser')} href={project === 0 ? '/work/ranaco' : '/work/product-catalog'} aria-label={'Explore ' + current.title}>{project === 0 ? <div className="showcase-browser"><div className="showcase-toolbar"><i /><i /><i /><span>ranaco — programme discovery</span></div><Image src="/ranacolandingpage.reti.edu.my_ (1).webp" width={4886} height={2192} alt="Ranaco education website" sizes="(max-width: 767px) 90vw, 65vw" priority /></div> : productCatalog.screenshots.map((shot, i) => <Image key={shot.caption} src={shot.image} alt={shot.alt} className={'showcase-phone phone-' + i} sizes="(max-width: 767px) 25vw, 15vw" />)}<span className="art-open"><ArrowRight size={28} strokeWidth={1.5} aria-hidden="true" /></span></Link><div className="project-caption"><div><h2>{current.title}</h2><p>{project === 0 ? 'A clearer path from programme discovery to enrollment.' : 'Browse, search, and discover. Built with Flutter.'}</p></div><Link className="text-link" href={project === 0 ? '/work/ranaco' : '/work/product-catalog'}>Explore project <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" /></Link></div></div><div className="carousel-controls" aria-label="Project navigation"><span aria-live="polite">0{project + 1} <span>/ 02</span></span><div><button aria-label="Previous project" onClick={() => setProject(p => 1 - p)}><ArrowLeft /></button><button aria-label="Next project" onClick={() => setProject(p => 1 - p)}><ArrowRight /></button></div></div></div>}
          {active === 2 && <div className="about-stage"><div className="stage-kicker"><span>A LITTLE ABOUT THE HUMAN</span><Smile size={30} aria-hidden="true" /></div><div className="about-play-grid"><div><h1>Curious mind.<br /><em>Busy hands.</em></h1><p>I&rsquo;m Azrul, a recent graduate and web & Flutter developer based in Terengganu, Malaysia. I like figuring out how things work and making them work better.</p><p>From responsive websites to mobile interfaces, I build with React, Next.js, and Flutter.</p><Link className="play-button" href="/about">More about me <ArrowRight size={20} strokeWidth={1.5} aria-hidden="true" /></Link></div><figure className="about-cutout"><svg viewBox="17 600 906 680" width="906" height="680" role="img" aria-label="Azrul Mustaqqim" style={{ display: 'block', width: '100%', height: 'auto' }}><image href="/azrul hero page.webp" width="960" height="1280" /></svg></figure></div><div className="capability-strip"><span><Plus size={18} /> Web development</span><span><Plus size={18} /> Mobile application</span></div></div>}
          {active === 3 && <div className="contact-stage"><div className="stage-kicker"><span>GOT AN IDEA? SAY HELLO.</span><Send size={30} aria-hidden="true" /></div><div className="play-contact-grid"><div><h1>Let&rsquo;s make{' '}<br /><em>something.</em></h1><p>A role, a project, or a good conversation.<br />I&rsquo;d love to hear from you.</p><a className="play-email" href={'mailto:' + profile.email}>{profile.email} <Mail size={20} strokeWidth={1.5} aria-hidden="true" /></a><div className="contact-socials"><SocialLink platform="github" href={profile.github} /><SocialLink platform="linkedin" href={profile.linkedin} /></div></div><ContactForm /></div></div>}
        </section>
      </div>
      <footer className="scene-footer"><span aria-live="polite">0{active + 1} / 04 <span className="footer-section-name">— {sections[active]}</span></span><div className="section-dots">{sections.map((s, i) => <button key={s} onClick={() => go(i)} aria-label={'Go to ' + s} aria-current={i === active ? 'step' : undefined} />)}</div><button onClick={() => go(active === 3 ? 0 : active + 1)}>{active === 3 ? 'Back to the top' : 'Scroll to explore'} <ArrowDown size={15} /></button></footer>
    </main>
  </div>;
}
