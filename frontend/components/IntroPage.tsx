"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppleHelloEffect } from './AppleHelloEffect';

interface IntroPageProps {
  onComplete: () => void;
}

const IntroPage = ({ onComplete }: IntroPageProps) => {
  const [showHello, setShowHello] = useState(true);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setShowHello(false);

      setTimeout(() => {
        onComplete();
      }, 900);
    }, 1200);
  };

  return (
    <AnimatePresence mode="wait">
      {showHello && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#f7faf6]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.98,
            filter: 'blur(10px)',
          }}
          transition={{
            duration: 0.9,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(143,201,164,0.42),transparent_32rem)]"
            exit={{
              opacity: 0,
              scale: 1.06,
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
          />

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <motion.div
              exit={{
                y: -36,
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.7,
                ease: 'easeInOut',
              }}
            >
              <AppleHelloEffect
                className="mb-8 h-24 text-[#1f5139] md:h-32 lg:h-40"
                speed={1.2}
                onAnimationComplete={handleAnimationComplete}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                y: 36,
                opacity: 0,
                scale: 0.92,
              }}
              transition={{
                delay: 2.3,
                duration: 0.8,
              }}
            >
              <h2 className="text-xl font-bold text-[#17211b] md:text-2xl">I&apos;m Azrul</h2>
              <p className="mt-2 text-sm font-medium text-slate-500 md:text-base">Welcome to my portfolio</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroPage;
