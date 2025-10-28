'use client';

import Navbar from '../../components/Navbar';

export default function Services() {
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

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-900/20 via-purple-900/30 to-orange-900/20 text-white overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Services Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-6 md:py-20 md:pt-32 pb-24 md:pb-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to meet your business needs and drive digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-300/20 hover:border-pink-300/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-5xl mb-6 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-pink-300 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="text-pink-300 mr-3">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}