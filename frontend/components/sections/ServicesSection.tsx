'use client';

import { useState } from 'react';
import { Check, MonitorSmartphone, PanelsTopLeft, Smartphone } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const services = [
    {
      title: 'Web Development',
      description: 'Responsive websites and web applications using modern frameworks and clean implementation practices.',
      icon: PanelsTopLeft,
      features: ['Custom Web Applications', 'E-Commerce Solutions', 'Progressive Web Apps', 'API Integration'],
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform mobile app interfaces that feel practical, clear, and consistent across devices.',
      icon: Smartphone,
      features: ['React Native Apps', 'Mobile UI Flows', 'Android Features', 'App Store Preparation'],
    },
    {
      title: 'Frontend Development',
      description: 'Interactive user interfaces with focused layouts, smooth interactions, and performance-minded structure.',
      icon: MonitorSmartphone,
      features: ['React & Next.js', 'UI Implementation', 'Responsive Layouts', 'Performance Optimization'],
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="services" className="py-20">
      <ScrollReveal className="mx-auto max-w-3xl text-center">
        <h2 className="section-title">UI Development</h2>
        <p className="section-copy mt-6">
          Services I am developing as I grow in web and mobile development, with an emphasis on maintainable interfaces and user-friendly flows.
        </p>
      </ScrollReveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <ScrollReveal
              key={service.title}
              className="surface-card relative overflow-hidden p-7 transition duration-200 hover:-translate-y-1"
              delay={0.1 + index * 0.12}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={handleMouseMove}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
                style={{
                  opacity: hoveredCard === index ? 1 : 0,
                  background: `radial-gradient(circle 220px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.16), transparent 70%)`,
                }}
              />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{service.description}</p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-zinc-400">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
