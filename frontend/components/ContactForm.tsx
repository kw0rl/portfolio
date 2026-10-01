'use client';

import { useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { profile } from '@/lib/content';

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const submitting = useRef(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    submitting.current = true;
    setPending(true);
    setStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.get('name'), email: data.get('email'), message: data.get('message') }),
        signal: AbortSignal.timeout(20000),
      });
      if (!response.ok) throw new Error('Message failed');
      setStatus('success');
      form.reset();
    } catch { setStatus('error'); }
    finally { submitting.current = false; setPending(false); }
  }
  return <form className="contact-form" onSubmit={submit} aria-label="Contact Azrul" aria-busy={pending}>
    <p className="form-heading">Tell me a little about it.</p>
    <fieldset disabled={pending}><div className="form-row"><div className="form-field"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" placeholder="Alex Tan" autoComplete="name" required maxLength={100} pattern=".*\S.*" /></div><div className="form-field"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" placeholder="alex@example.com" autoComplete="email" required maxLength={254} /></div></div><div className="form-field"><label htmlFor="contact-message">What do you have in mind?</label><textarea id="contact-message" name="message" placeholder="A website, a role, a collaboration…" required rows={5} maxLength={5000} /></div></fieldset>
    <div className="form-submit-row"><span>Projects, opportunities, or just hello.</span><button type="submit" className="button button-dark" disabled={pending}>{pending ? 'Sending…' : 'Send message'}<ArrowUpRight size={17} aria-hidden="true" /></button></div>
    <div className="form-feedback" aria-live="polite" aria-atomic="true">{status === 'success' && <p className="success-message"><CheckCircle2 size={18} aria-hidden="true" />Message sent. Thanks for reaching out!</p>}{status === 'error' && <p className="error-message" role="alert">Your message couldn’t be sent. Your details are still here—try again, or <a href={`mailto:${profile.email}`}>email me directly</a>.</p>}</div>
  </form>;
}
