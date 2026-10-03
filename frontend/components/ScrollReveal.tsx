'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function ScrollReveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={false} whileInView={reduced ? undefined : { opacity: [0.7, 1] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.3, delay: reduced ? 0 : delay }}>{children}</motion.div>;
}
