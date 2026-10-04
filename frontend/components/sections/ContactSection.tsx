import { Mail } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { profile } from '@/lib/content';
export default function ContactSection() {
  return <section id="contact" className="contact-section" aria-labelledby="contact-heading"><div className="page-shell contact-grid"><div className="contact-copy"><p className="eyebrow">Next, let&rsquo;s talk</p><h2 id="contact-heading">A role.<br />A project.<br /><span>A conversation.</span></h2><p>Have something in mind? Tell me a little about it.</p><a className="contact-email" href={'mailto:' + profile.email}>{profile.email}<Mail size={19} aria-hidden="true" /></a><p className="contact-location">Terengganu, Malaysia · Open to opportunities</p></div><ContactForm /></div></section>;
}
