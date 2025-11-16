'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

export default function Works() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: 'Movie Recommender',
      description: 'A full-stack movie recommendation system that suggests movies based on user preferences.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'TMDB API'],
      demoUrl: 'https://filmpilot.onrender.com/',
      image: '/movierecommender.jpeg'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-900/20 via-purple-900/30 to-orange-900/20 text-white overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Works Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-6 md:py-20 md:pt-32 pb-24 md:pb-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-300 to-orange-400 bg-clip-text text-transparent">
              My Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ animation: 'fadeIn 0.8s ease-out 0.2s both' }}>
              A collection of projects I've built while learning web development and exploring new technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-pink-300/20 hover:border-pink-300/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20 group"
                style={{ animation: `fadeInUp 0.6s ease-out ${0.4 + index * 0.2}s both` }}
              >
                <div className="h-48 bg-gradient-to-br from-pink-300/20 to-purple-400/20 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to rocket emoji if image fails to load
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = 'none';
                      const next = img.nextElementSibling as HTMLElement | null;
                      if (next) next.style.setProperty('display', 'flex');
                    }}
                  />
                  <div className="text-4xl hidden">🚀</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-pink-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-purple-400/20 rounded text-xs text-purple-300 border border-purple-400/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => window.open(project.demoUrl, '_blank')}
                    className="w-full py-3 bg-gradient-to-r from-pink-300 to-purple-400 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-pink-300/25 transition-all duration-300"
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}