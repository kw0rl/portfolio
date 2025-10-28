'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TextType from './TextType';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '🏠︎', title: 'Home' },
    { href: '/about', label: '🛈', title: 'About' },
    { href: '/works', label: '🗁', title: 'Works' },
    { href: '/services', label: '🖳', title: 'Services' },
    { href: '/contact', label: '⌯⌲', title: 'Contact' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-black/30 backdrop-blur-md rounded-full px-8 py-4 border border-white/10 shadow-2xl">
          <div className="flex items-center space-x-8">
            {/* Logo with TextType Animation */}
            <Link href="/" className="text-white font-bold text-lg tracking-wide">
              <TextType
                text={['Portfolio', 'Creative', 'Developer']}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={3000}
                initialDelay={500}
                loop={true}
                showCursor={false}
                className="text-white font-bold text-lg tracking-wide"
                textColors={['#ffffff', '#b88990', '#9b73a5']}
              />
            </Link>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  title={item.title}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="bg-black/30 backdrop-blur-md rounded-full px-4 py-3 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-full text-lg transition-all duration-300 ${
                  pathname === item.href
                    ? 'bg-white/20 shadow-lg'
                    : 'hover:bg-white/10'
                }`}
                title={item.title}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}