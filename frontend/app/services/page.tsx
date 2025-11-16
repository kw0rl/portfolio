'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState ({ x:0, y:0});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    setIsVisible(true);
    
    checkMobile();  // ← Check sekali masa page load
    window.addEventListener('resize', checkMobile);  // ← Listen bila resize window
    
    return () => window.removeEventListener('resize', checkMobile);  // ← Cleanup bila component unmount
  }, []);

  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive, high-performance websites and web applications using modern frameworks and best practices.',
      icon: '💻',
      features: ['Custom Web Applications', 'E-Commerce Solutions', 'Progressive Web Apps', 'API Integration']
    },
    {
      title: 'Mobile App Development',
      description: 'Creating cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
      icon: '📱',
      features: ['React Native Apps', 'Flutter Development', 'Android Native', 'App Store Optimization']
    },
    {
      title: 'Frontend Development',
      description: 'Crafting beautiful, interactive user interfaces with modern design principles and cutting-edge technologies.',
      icon: '🎨',
      features: ['React & Next.jS', 'UI/UX Implementation', 'Performance Optimization']
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition ({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-900/20 via-purple-900/30 to-orange-900/20 text-white overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Services Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-6 md:py-20 md:pt-32 pb-24 md:pb-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
              My Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ animation: 'fadeIn 0.8s ease-out 0.2s both' }}>
              Services I'm learning to provide as I grow my skills in web and mobile development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-300/20 hover:border-pink-300/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20 overflow-hidden group"
                style={{ 
                  animation: `fadeInUp 0.6s ease-out ${0.4 + index * 0.2}s both`,
                  background: !isMobile && hoveredCard === index
                    ? `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.2), transparent)`
                    : 'transparent'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onMouseMove={handleMouseMove}
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-purple-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div 
                    className="text-5xl mb-6 text-center"
                    
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-pink-300 text-center">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-gray-300 transition-all duration-200"
                        style={{ animation: `fadeInLeft 0.4s ease-out ${0.6 + index * 0.2 + featureIndex * 0.1}s both` }}
                      >
                        <span className="text-pink-300 mr-3 transition-transform duration-200 hover:scale-150">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}