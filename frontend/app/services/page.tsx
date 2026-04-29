'use client';

import { useState } from 'react';
import { Check, MonitorSmartphone, PanelsTopLeft, Smartphone } from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function Services() {
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
    <div className="portfolio-page">
      <Navbar />

      <main className="page-shell">
        <section>
          <div className="mx-auto max-w-3xl text-center">
            <div className="section-kicker">Services</div>
            <h1 className="section-title">Frontend support for polished digital products.</h1>
            <p className="section-copy mt-6">
              Services I am developing as I grow in web and mobile development, with an emphasis on maintainable interfaces and user-friendly flows.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="surface-card relative overflow-hidden p-7 transition duration-200 hover:-translate-y-1"
                  style={{
                    animation: `fadeInUp 0.55s ease-out ${0.12 + index * 0.12}s both`,
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onMouseMove={handleMouseMove}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
                    style={{
                      opacity: hoveredCard === index ? 1 : 0,
                      background: `radial-gradient(circle 220px at ${mousePosition.x}px ${mousePosition.y}px, rgba(143, 201, 164, 0.22), transparent 70%)`,
                    }}
                  />
                  <div className="relative">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#e2f2e8] text-[#2f7a52]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="text-2xl font-black text-[#17211b]">{service.title}</h2>
                    <p className="mt-3 leading-7 text-slate-600">{service.description}</p>

                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#eef7f1] text-[#2f7a52]">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
