"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppleHelloEffect } from './AppleHelloEffect';

interface IntroPageProps {
  onComplete: () => void;
}

const IntroPage = ({ onComplete }: IntroPageProps) => {
  const [showHello, setShowHello] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleAnimationComplete = () => {
    // Wait a bit after animation completes, then start transition
    setTimeout(() => {
      setIsTransitioning(true);
      setShowHello(false);
      
      // After fade out completes, call onComplete
      setTimeout(() => {
        onComplete();
      }, 1000); // Wait for fade out animation
    }, 1500); // Wait 1.5 seconds after hello animation
  };

  return (
    <AnimatePresence mode="wait">
      {showHello && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)"
          }}
          transition={{ 
            duration: 1,
            ease: "easeInOut"
          }}
        >
          {/* Background gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/30 to-orange-900/20"
            exit={{ 
              opacity: 0,
              scale: 1.1
            }}
            transition={{ 
              duration: 1.2,
              ease: "easeInOut"
            }}
          />
          
          {/* Hello animation */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              exit={{
                y: -50,
                opacity: 0,
                scale: 0.8
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut"
              }}
            >
              <AppleHelloEffect
                className="h-24 md:h-32 lg:h-40 text-white mb-8"
                speed={1.2}
                onAnimationComplete={handleAnimationComplete}
              />
            </motion.div>
            
            {/* Optional: Add your name or subtitle */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                y: 50,
                opacity: 0,
                scale: 0.8
              }}
              transition={{ 
                delay: 2.5, 
                duration: 1
              }}
            >
              <h2 className="text-xl md:text-2xl text-gray-300 font-light">
                I'm Azrul
              </h2>
              <p className="text-sm md:text-base text-gray-400 mt-2">
                Welcome to my portfolio
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroPage;