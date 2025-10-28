'use client';

import Navbar from '../../components/Navbar';

export default function About() {
  const skills = [
    { name: 'React', level: 70 },
    { name: 'Next.js', level: 70 },
    { name: 'TypeScript', level: 70 },
    { name: 'Node.js', level: 75 },
    { name: 'PHP', level: 70 },
    { name: 'React Native', level: 60 },
    { name: 'MySQL', level: 85 },
    { name: 'PostgreSQL', level: 70 }
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
              Passionate developer with expertise in creating innovative solutions that combine cutting-edge technology with exceptional user experiences.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-300/20 mb-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-pink-300">Get To Know Me</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm Azrul, a passionate developer who loves bringing ideas to life through sleek and creative digital experiences! I enjoy building fast, scalable apps that don't just work great, but look great too. Whether it's on the web or mobile, i blend design and code to craft smooth, engaging, and user-friendly experiences.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-pink-300">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-pink-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-pink-300 to-orange-300 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}