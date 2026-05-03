'use client';

import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <ScrollReveal className="mx-auto max-w-3xl text-center">
        <h2 className="section-title">Let&apos;s connect</h2>
        <p className="section-copy mt-6">
          I would love to hear from you. Send a message for feedback, collaboration, internship opportunities, or a simple hello.
        </p>
      </ScrollReveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-6">
          <ScrollReveal className="surface-card p-7">
            <h3 className="text-2xl font-black text-white">Contact Information</h3>
            <div className="mt-6 space-y-5">
              <a href="mailto:quwots@gmail.com" className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.07] p-4 transition hover:bg-white/[0.12]">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-zinc-500">Email</span>
                  <span className="font-bold text-zinc-100">quwots@gmail.com</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.07] p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-zinc-500">Location</span>
                  <span className="font-bold text-zinc-100">Terengganu, Malaysia</span>
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="surface-card p-7" delay={0.08}>
            <h3 className="text-2xl font-black text-white">Connect With Me</h3>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href="https://www.linkedin.com/in/azrul-mustaqqim-55b1a7380/"
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-button"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a href="https://github.com/kw0rl" target="_blank" rel="noopener noreferrer" className="ghost-button">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="surface-card p-7" delay={0.12}>
          <form onSubmit={handleSubmit} className="flex h-full flex-col">
            <div className="mb-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold text-zinc-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border-2 border-white/10 bg-black/35 px-4 py-3 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-white/35 focus:bg-black/55"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-zinc-300">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-lg border-2 border-white/10 bg-black/35 px-4 py-3 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-white/35 focus:bg-black/55"
                  placeholder="How can I help you?"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="soft-button mt-auto w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="mt-4 text-center text-sm font-bold text-zinc-100">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-center text-sm font-bold text-red-500">Failed to send message. Please try again.</p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
