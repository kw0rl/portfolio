import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/lib/content';

export default function Footer() {
  return <footer className="site-footer page-shell"><div><Link href="/" className="footer-brand" aria-label="Azrul, home"><svg viewBox="101 275 623 231" width="150" height="56" aria-hidden="true" style={{ display: 'block', maxWidth: '100%', height: 'auto' }}><image href="/logo azrul portfolio.png" width="800" height="800" /></svg></Link><p>Built with intention, down to the details.</p></div><div className="footer-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a><a href="/resume.pdf" download>Résumé <ArrowUpRight size={14} aria-hidden="true" /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><span>Terengganu, Malaysia</span></div></footer>;
}
