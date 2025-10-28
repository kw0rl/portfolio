'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
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
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-900/20 via-purple-900/30 to-orange-900/20 text-white overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Contact Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-6 md:py-20 md:pt-32 pb-24 md:pb-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay in touch! Whether you have a question, a project idea, or just want to say hello, I'm here to listen and collaborate.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-pink-300/20">
                <h3 className="text-xl font-bold mb-6 text-pink-300">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-pink-300/20 rounded-lg flex items-center justify-center">
                      <span className="text-pink-300 text-xl">✉</span>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Email</div>
                      <div className="text-white">quwots@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-orange-300/20 rounded-lg flex items-center justify-center">
                      <span className="text-orange-300 text-xl">🏠︎</span>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Location</div>
                      <div className="text-white">Terengganu, Malaysia</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-pink-300/20">
                <h3 className="text-xl font-bold mb-6 text-pink-300">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-3 max-w-32 mx-auto">
                  {/* LinkedIn - Blue */}
                  <a href="https://www.linkedin.com/in/azrul-mustaqqim-55b1a7380/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-lg flex items-center justify-center hover:bg-[#0077B5] hover:scale-110 transition-all duration-300 group">
                    <img src="/socialmediasicon/104493_linkedin_icon.png" alt="LinkedIn" className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                  </a>
                  {/* GitHub - Dark/Black */}
                  <a href="https://github.com/kw0rl" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-lg flex items-center justify-center hover:bg-[#24292e] hover:scale-110 transition-all duration-300 group">
                    <img src="/socialmediasicon/4747499_github_icon.png" alt="GitHub" className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                  </a>
                  {/* Instagram - Gradient Pink/Purple/Orange */}
                  <a href="https://www.instagram.com/azrulism?igsh=Mzg0eWlqNXRyZ2Z4" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-[#E4405F] hover:via-[#C13584] hover:to-[#F56040] hover:scale-110 transition-all duration-300 group">
                    <img src="/socialmediasicon/1161953_instagram_icon.png" alt="Instagram" className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                  </a>
                  {/* Facebook - Blue */}
                  <a href="https://www.facebook.com/share/17GHTKkeLW/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-lg flex items-center justify-center hover:bg-[#1877F2] hover:scale-110 transition-all duration-300 group">
                    <img src="/socialmediasicon/4747497_social media_facebook_icon.png" alt="Facebook" className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-300/20">
              <h3 className="text-2xl font-bold mb-6 text-pink-300">Leave Me a Message!!</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name (optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black/60 border border-pink-300/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-300 focus:ring-1 focus:ring-pink-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-black/60 border border-pink-300/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-300 focus:ring-1 focus:ring-pink-300 resize-none"
                    placeholder="Share your thoughts, feedback, or words of encouragement..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-pink-300 to-orange-300 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-pink-300/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center">Thank you! Your message has been sent successfully.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-center">Something went wrong. Please try again. ☹</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}