'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

interface NumberCounterProps {
  from?: number;
  to: number;
  suffix?: string;
  duration?: number;
}

export default function NumberCounter({ from = 0, to, suffix = '', duration = 2 }: NumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: 'easeOut',
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toString() + suffix;
          }
        },
      });

      return () => controls.stop();
    }
  }, [inView, from, to, suffix, duration]);

  return <span ref={ref}>{from}{suffix}</span>;
}