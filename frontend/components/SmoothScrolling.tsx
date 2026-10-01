'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function SmoothScrolling() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let lenis: Lenis | undefined;
    const syncDialog = () => {
      if (document.querySelector('dialog[open]')) lenis?.stop();
      else lenis?.start();
    };
    // Keep links stationary between pointer-down and click during scroll inertia.
    const settleLink = (event: PointerEvent) => {
      if (event.target instanceof Element && event.target.closest('a[href]')) {
        lenis?.scrollTo(window.scrollY, { immediate: true });
      }
    };
    const configure = () => {
      lenis?.destroy();
      lenis = undefined;
      if (preference.matches) return;
      lenis = new Lenis({
        autoRaf: true,
        lerp: 0.12,
        smoothWheel: true,
        syncTouch: false,
        anchors: true,
        stopInertiaOnNavigate: true,
        prevent: node => node.tagName === 'DIALOG' || node.tagName === 'TEXTAREA',
      });
      syncDialog();
    };
    configure();
    const observer = new MutationObserver(syncDialog);
    observer.observe(document.body, { subtree: true, attributes: true, attributeFilter: ['open'] });
    preference.addEventListener('change', configure);
    document.addEventListener('pointerdown', settleLink, true);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', configure);
      document.removeEventListener('pointerdown', settleLink, true);
      lenis?.destroy();
    };
  }, [pathname]);

  return null;
}
