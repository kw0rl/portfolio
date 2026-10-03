'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default function LegacyAnchors() {
  const router = useRouter();
  useEffect(() => {
    const redirect = () => {
      if (window.location.hash === '#about') router.replace('/about');
      if (window.location.hash === '#services') router.replace('/about#capabilities');
    };
    redirect();
    window.addEventListener('hashchange', redirect);
    return () => window.removeEventListener('hashchange', redirect);
  }, [router]);
  return null;
}
