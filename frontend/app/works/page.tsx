'use client';

import Navbar from '../../components/Navbar';

export default function Works() {
  const projects = [
    {
      title: 'Music Recommendation System Based on Emotion Detection',
      description: 'A full-stack music recommendation system that analyzes user emotions to suggest songs.',
      technologies: ['React', 'Node.js', 'MySQL', 'Google Cloud Vision API'],
      demoUrl: 'https://sonicmoodsfrontend-58m9x.ondigitalocean.app/',
      image: '/musicrecommender.png'
    },

    {
      title: 'Movie Recommender',
      description: 'A full-stack movie recommendation system that suggests movies based on user preferences.',
      technologies: ['React', 'Node.js', 'MySQL', 'TMDB API'],
      demoUrl: 'https://wishlist-yfhka.ondigitalocean.app/',
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of projects showcasing my expertise in web development, mobile applications, and artificial intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-pink-300/20 hover:border-pink-300/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-pink-300/20 to-purple-400/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
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
    </div>
  );
}