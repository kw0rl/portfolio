'use client';

import Navbar from '../components/Navbar';
import GlareHover from '../components/GlareHover';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-900/20 via-purple-900/30 to-orange-900/20 text-white overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Home Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-6 md:pt-20 pb-24 md:pb-6">
        <div className="text-center max-w-4xl">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-300/20">
            {/* Memoji Image */}
            <div className="mb-8 flex justify-center">
              <img 
                src="/memoji.png" 
                alt="Azrul Memoji" 
                className="w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
              Hello, I'm Azrul
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Blending creativity and technology to bring digital experiences to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-pink-300/20 rounded-full border border-pink-300/30 text-pink-300">
                💻 Web Developer
              </span>
              <span className="px-4 py-2 bg-purple-400/20 rounded-full border border-purple-400/30 text-purple-300">
                📱 Mobile App Developer
              </span>
              <span className="px-4 py-2 bg-blue-300/20 rounded-full border border-blue-300/30 text-blue-300">
                🤖 AI Specialist
              </span>
            </div>
            <GlareHover
              width="auto"
              height="auto"
              background="linear-gradient(to right, #F8BBD9, #A855F7)"
              borderRadius="9999px"
              borderColor="transparent"
              glareColor="#ffffff"
              glareOpacity={0.6}
              glareAngle={-45}
              glareSize={200}
              transitionDuration={600}
              className="inline-block border-0 hover:shadow-lg hover:shadow-pink-300/25 transition-all duration-300 transform hover:scale-105"
            >
              <a 
                href="/works"
                className="block px-8 py-4 text-white font-semibold text-center"
              >
                View My Work →
              </a>
            </GlareHover>
          </div>
        </div>
      </section>
    </div>
  );
}
