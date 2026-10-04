import SocialLink from '@/components/SocialLink';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { profile } from '@/lib/content';

export default function Footer() {
  return <footer className="site-footer page-shell"><div><Link href="/" className="footer-brand" aria-label="Azrul, home"><svg viewBox="101 275 623 231" width="150" height="56" aria-hidden="true" style={{ display: 'block', maxWidth: '100%', height: 'auto' }}><image href="/logo azrul portfolio.png" width="800" height="800" /></svg></Link><p>It's okay, life is a tough crowd, 23 and still growing up now</p></div><div className="footer-links"><SocialLink platform="github" href={profile.github} /><SocialLink platform="linkedin" href={profile.linkedin} /><a href="/resume.pdf" download>Résumé <Download size={14} strokeWidth={1.5} aria-hidden="true" /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><span>Terengganu, Malaysia</span></div></footer>;
}
