'use client';

import { type CSSProperties } from 'react';

const particles = [
  { x: '7%', y: '18%', size: 3, duration: 9, delay: -1, opacity: 0.9 },
  { x: '15%', y: '72%', size: 2, duration: 12, delay: -6, opacity: 0.64 },
  { x: '24%', y: '33%', size: 4, duration: 11, delay: -4, opacity: 0.78 },
  { x: '31%', y: '84%', size: 2, duration: 10, delay: -2, opacity: 0.72 },
  { x: '42%', y: '14%', size: 3, duration: 13, delay: -9, opacity: 0.7 },
  { x: '51%', y: '61%', size: 5, duration: 14, delay: -5, opacity: 0.82 },
  { x: '63%', y: '27%', size: 2, duration: 9, delay: -7, opacity: 0.68 },
  { x: '71%', y: '78%', size: 4, duration: 12, delay: -3, opacity: 0.76 },
  { x: '83%', y: '19%', size: 3, duration: 10, delay: -8, opacity: 0.88 },
  { x: '92%', y: '54%', size: 2, duration: 13, delay: -1, opacity: 0.7 },
  { x: '12%', y: '46%', size: 5, duration: 15, delay: -10, opacity: 0.56 },
  { x: '88%', y: '88%', size: 4, duration: 11, delay: -4, opacity: 0.62 },
];

export default function ParticleBackground() {
  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={`${particle.x}-${particle.y}`}
          className="particle-dot"
          style={
            {
              '--x': particle.x,
              '--y': particle.y,
              '--size': `${particle.size}px`,
              '--duration': `${particle.duration}s`,
              '--delay': `${particle.delay}s`,
              '--opacity': particle.opacity,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
