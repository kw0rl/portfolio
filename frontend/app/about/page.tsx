'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { Code2, Rocket, Users, Award } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'React', level: 65 },
    { name: 'Next.js', level: 60 },
    { name: 'TypeScript', level: 55 },
    { name: 'Node.js', level: 60 },
    { name: 'PHP', level: 50 },
    { name: 'React Native', level: 45 },
    { name: 'MySQL', level: 65 },
    { name: 'PostgreSQL', level: 50 }
  ];

  const stats = [
    { icon: Code2, label: 'Projects Built', value: '10+', color: 'from-pink-400 to-rose-400' },
    { icon: Rocket, label: 'Learning Journey', value: '1+ Yr', color: 'from-purple-400 to-pink-400' },
    { icon: Users, label: 'Code Commits', value: '200+', color: 'from-orange-400 to-pink-400' },
    { icon: Award, label: 'Technologies', value: '8+', color: 'from-yellow-400 to-orange-400' }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-900/20 via-purple-900/30 to-orange-900/20 text-white overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* About Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-6 md:py-20 md:pt-32 pb-24 md:pb-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Aspiring developer on an exciting learning journey, eager to build innovative solutions and grow my skills in creating exceptional user experiences.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-pink-300/20 transition-all duration-300 hover:scale-105 hover:border-pink-300/40 hover:shadow-lg hover:shadow-pink-500/20">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-3 transition-transform duration-300 ${hoveredStat === index ? 'scale-110 rotate-6' : ''}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-300/20 mb-12 overflow-hidden group hover:border-pink-300/40 transition-all duration-300">
            {/* Animated gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-4" style={{ animation: 'fadeInLeft 0.8s ease-out' }}>
                <h3 className="text-2xl font-bold mb-6 text-pink-300 flex items-center gap-2">
                  <span className="inline-block w-1 h-8 bg-gradient-to-b from-pink-400 to-orange-400 rounded-full"></span>
                  Get To Know Me
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm Azrul, an enthusiastic developer currently on my internship journey! I'm passionate about learning and bringing ideas to life through creative digital experiences. I love exploring new technologies and building projects that combine clean code with great design. Every day is an opportunity to grow and improve my skills in web and mobile development.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {['Creative', 'Fast Learner', 'Team Player', 'Problem Solver'].map((trait, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-300/30 rounded-full text-sm text-pink-200 hover:scale-105 transition-transform duration-200 cursor-default"
                      style={{ animation: `fadeIn 0.5s ease-out ${0.8 + i * 0.1}s both` }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ animation: 'fadeInRight 0.8s ease-out' }}>
                <h3 className="text-2xl font-bold mb-6 text-pink-300 flex items-center gap-2">
                  <span className="inline-block w-1 h-8 bg-gradient-to-b from-pink-400 to-orange-400 rounded-full"></span>
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="group"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${0.8 + index * 0.1}s both`
                      }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 group-hover:text-pink-300 transition-colors duration-200">{skill.name}</span>
                        <span className="text-pink-300 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 h-2.5 rounded-full transition-all duration-1000 ease-out relative"
                          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}