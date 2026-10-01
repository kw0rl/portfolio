import { ArrowUpRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { profile } from '@/lib/content';

export default function ContactSection() {
  return <section id="contact" className="contact-section section-space" aria-labelledby="contact-heading"><div className="page-shell contact-grid"><div className="contact-copy"><p className="eyebrow">04 / Start a conversation</p><h2 id="contact-heading">Something<br />in mind?<br /><em>Let’s build it.</em></h2><p>Have a project, an opportunity, or a good idea?<br />I’d love to hear about it.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={20} aria-hidden="true" /></a><span className="contact-location">Based in {profile.location}</span></div><ContactForm /></div></section>;
}
