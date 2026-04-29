'use client';

import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function Contact() {
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
    <div className="portfolio-page">
      <Navbar />

      <main className="page-shell">
        <section>
          <div className="mx-auto max-w-3xl text-center">
            <div className="section-kicker">Contact</div>
            <h1 className="section-title">Let&apos;s build the next conversation.</h1>
            <p className="section-copy mt-6">
              I would love to hear from you. Send a message for feedback, collaboration, internship opportunities, or a simple hello.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-6">
              <div className="surface-card p-7">
                <h2 className="text-2xl font-black text-[#17211b]">Contact Information</h2>
                <div className="mt-6 space-y-5">
                  <a href="mailto:quwots@gmail.com" className="flex items-center gap-4 rounded-lg bg-[#f3f8f4] p-4 transition hover:bg-[#eaf4ee]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#2f7a52]">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-slate-500">Email</span>
                      <span className="font-bold text-[#17211b]">quwots@gmail.com</span>
                    </span>
                  </a>
                  <div className="flex items-center gap-4 rounded-lg bg-[#f3f8f4] p-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#2f7a52]">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-slate-500">Location</span>
                      <span className="font-bold text-[#17211b]">Terengganu, Malaysia</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="surface-card p-7">
                <h2 className="text-2xl font-black text-[#17211b]">Connect With Me</h2>
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
              </div>
            </div>

            <div className="surface-card p-7 lg:p-8">
              <h2 className="text-2xl font-black text-[#17211b]">Leave Me a Message</h2>
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold text-slate-600">
                    Name (optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-emerald-900/10 bg-white px-4 py-3 text-[#17211b] placeholder:text-slate-400 focus:border-[#8fc9a4] focus:outline-none focus:ring-4 focus:ring-[#8fc9a4]/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={7}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-emerald-900/10 bg-white px-4 py-3 text-[#17211b] placeholder:text-slate-400 focus:border-[#8fc9a4] focus:outline-none focus:ring-4 focus:ring-[#8fc9a4]/20"
                    placeholder="Share your thoughts, feedback, or collaboration idea..."
                    required
                  />
                </div>
                <button type="submit" disabled={isSubmitting} className="soft-button w-full disabled:cursor-not-allowed disabled:opacity-60">
                  {isSubmitting ? 'Sending...' : 'Submit'}
                  <Send className="h-4 w-4" />
                </button>
                {submitStatus === 'success' && (
                  <p className="rounded-lg bg-[#eaf7ed] px-4 py-3 text-center font-semibold text-[#2f7a52]">
                    Thank you. Your message has been sent successfully.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="rounded-lg bg-red-50 px-4 py-3 text-center font-semibold text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
