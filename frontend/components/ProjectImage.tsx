'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Expand, X } from 'lucide-react';

export default function ProjectImage({ src, alt, caption, width = 4886, height = 2192, portrait = false }: { src: string; alt: string; caption: string; width?: number; height?: number; portrait?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  function close() { dialog.current?.close(); }
  return <figure className={`case-figure${portrait ? " case-figure-portrait" : ""}`}><button ref={trigger} className="screenshot-trigger" type="button" onClick={() => dialog.current?.showModal()} aria-label={`Enlarge image: ${alt}`}><Image src={src} alt={alt} width={width} height={height} sizes={portrait ? "(max-width: 767px) 75vw, 320px" : "(max-width: 767px) 90vw, 1100px"} /><span className="enlarge-label"><Expand size={16} aria-hidden="true" /> Enlarge</span></button><figcaption>{caption}</figcaption><dialog ref={dialog} className="image-dialog" aria-label={alt} onClose={() => trigger.current?.focus()} onClick={event => { if (event.target === event.currentTarget) close(); }}><div className="dialog-toolbar"><span>{caption}</span><button type="button" className="dialog-close" onClick={close} autoFocus aria-label="Close enlarged image"><X size={22} aria-hidden="true" /></button></div><Image src={src} alt={alt} width={width} height={height} sizes="95vw" /></dialog></figure>;
}
