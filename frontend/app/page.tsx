'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import GlareHover from '../components/GlareHover';
import IntroPage from '../components/IntroPage';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedHomepage');

    if (hasVisited) {
      // Dah pernah visit - skip intro
      setIsFirstVisit(false);
      setShowIntro(false);
    } else {
      // First time visit - show intro
      setIsFirstVisit(true);
      sessionStorage.setItem('hasVisitedHomepage', 'true');
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  // If showing intro, return only intro
  if (isFirstVisit && showIntro) {
    return <IntroPage onComplete={handleIntroComplete} />;
  }

  // Original homepage content
  return (
    <motion.div
      className="relative min-h-screen bg-gradient-to-br from-pink-900/20 via-purple-900/30 to-orange-900/20 text-white overflow-hidden"
      initial={isFirstVisit ? { 
        opacity: 0,
        scale: 1.05,
        filter: "blur(20px)"
      } : { opacity: 0 }}
      animate={isFirstVisit ? { 
        opacity: 1,
        scale: 1,
        filter: "blur(0px)"
      } : { opacity: 1 }}
      transition={isFirstVisit ? { 
        duration: 1.5,
        ease: "easeOut",
        delay: 0.2
      } : { duration: 0.5, ease: "easeOut" }}
    >
      {/* Navigation */}
      <motion.div
        initial={isFirstVisit ? { y: -50, opacity: 0 } : { opacity: 0 }}
        animate={isFirstVisit ? { y: 0, opacity: 1 } : { opacity: 1 }}
        transition={isFirstVisit ? { duration: 0.8, delay: 0.8 } : { duration: 0.4, delay: 0.1 }}
      >
        <Navbar />
      </motion.div>

      {/* Home Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-6 md:pt-20 pb-24 md:pb-6">
        <motion.div 
          className="text-center max-w-4xl"
          initial={isFirstVisit ? { y: 50, opacity: 0 } : { y: 20, opacity: 0 }}
          animate={isFirstVisit ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
          transition={isFirstVisit ? { duration: 1, delay: 1.2 } : { duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-300/20"
            initial={isFirstVisit ? { scale: 0.9, opacity: 0 } : { opacity: 0 }}
            animate={isFirstVisit ? { scale: 1, opacity: 1 } : { opacity: 1 }}
            transition={isFirstVisit ? { duration: 0.8, delay: 1.5 } : { duration: 0.5, delay: 0.3 }}
          >
            {/* Memoji Image */}
            <motion.div 
              className="mb-8 flex justify-center"
              initial={isFirstVisit ? { scale: 0, opacity: 0, rotate: -180 } : { scale: 0.8, opacity: 0 }}
              animate={isFirstVisit ? { scale: 1, opacity: 1, rotate: 0 } : { scale: 1, opacity: 1 }}
              transition={isFirstVisit ? { 
                duration: 0.8, 
                delay: 1.8,
                type: "spring",
                stiffness: 100
              } : { duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              <img 
                src="/memoji.png" 
                alt="Azrul Memoji" 
                className="w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 object-contain transition-transform duration-300"
              />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent"
              initial={isFirstVisit ? { y: 30, opacity: 0 } : { y: 15, opacity: 0 }}
              animate={isFirstVisit ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
              transition={isFirstVisit ? { duration: 0.8, delay: 2.1 } : { duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
              Hello, I'm Azrul
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-300"
              initial={isFirstVisit ? { y: 20, opacity: 0 } : { y: 10, opacity: 0 }}
              animate={isFirstVisit ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
              transition={isFirstVisit ? { duration: 0.8, delay: 2.4 } : { duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              Blending creativity and technology to bring digital experiences to life.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={isFirstVisit ? { y: 20, opacity: 0 } : { y: 10, opacity: 0 }}
              animate={isFirstVisit ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
              transition={isFirstVisit ? { duration: 0.8, delay: 2.7 } : { duration: 0.5, delay: 0.7, ease: "easeOut" }}
            >
              <motion.span 
                className="px-4 py-2 bg-pink-300/20 rounded-full border border-pink-300/30 text-pink-300"
                initial={isFirstVisit ? { scale: 0, opacity: 0, rotate: -10 } : { scale: 0.9, opacity: 0 }}
                animate={isFirstVisit ? { scale: 1, opacity: 1, rotate: 0 } : { scale: 1, opacity: 1 }}
                transition={isFirstVisit ? { 
                  duration: 0.6, 
                  delay: 2.8,
                  type: "spring",
                  stiffness: 150
                } : { duration: 0.4, delay: 0.8, ease: "easeOut" }}
              >
                💻 Web Developer
              </motion.span>
              <motion.span 
                className="px-4 py-2 bg-purple-400/20 rounded-full border border-purple-400/30 text-purple-300"
                initial={isFirstVisit ? { scale: 0, opacity: 0, rotate: 10 } : { scale: 0.9, opacity: 0 }}
                animate={isFirstVisit ? { scale: 1, opacity: 1, rotate: 0 } : { scale: 1, opacity: 1 }}
                transition={isFirstVisit ? { 
                  duration: 0.6, 
                  delay: 2.9,
                  type: "spring",
                  stiffness: 150
                } : { duration: 0.4, delay: 0.9, ease: "easeOut" }}
              >
                📱 Mobile App Developer
              </motion.span>
              <motion.span 
                className="px-4 py-2 bg-blue-300/20 rounded-full border border-blue-300/30 text-blue-300"
                initial={isFirstVisit ? { scale: 0, opacity: 0, rotate: -10 } : { scale: 0.9, opacity: 0 }}
                animate={isFirstVisit ? { scale: 1, opacity: 1, rotate: 0 } : { scale: 1, opacity: 1 }}
                transition={isFirstVisit ? { 
                  duration: 0.6, 
                  delay: 3.0,
                  type: "spring",
                  stiffness: 150
                } : { duration: 0.4, delay: 1.0, ease: "easeOut" }}
              >
                🤖 AI Specialist
              </motion.span>
            </motion.div>
            <motion.div
              initial={isFirstVisit ? { y: 20, opacity: 0 } : { y: 10, opacity: 0 }}
              animate={isFirstVisit ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
              transition={isFirstVisit ? { duration: 0.8, delay: 3.0 } : { duration: 0.5, delay: 1.1, ease: "easeOut" }}
            >
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
                  View My Work ➜
                </a>
              </GlareHover>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}
