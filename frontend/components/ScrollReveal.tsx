'use client';

import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

type ScrollRevealProps = HTMLMotionProps<'div'> & {
  as?: 'div' | 'article';
  children: ReactNode;
  delay?: number;
};

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
};

export default function ScrollReveal({ as = 'div', children, delay = 0, transition, ...props }: ScrollRevealProps) {
  const sharedProps = {
    variants: revealVariants,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: 0.22, margin: '0px 0px -80px 0px' },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
      ...transition,
    },
    ...props,
  } satisfies HTMLMotionProps<'div'>;

  if (as === 'article') {
    return <motion.article {...sharedProps}>{children}</motion.article>;
  }

  return <motion.div {...sharedProps}>{children}</motion.div>;
}
