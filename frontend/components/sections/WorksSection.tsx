'use client';

import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from '../ScrollReveal';

export default function WorksSection() {
  const projects = [
    {
      title: 'Ranaco Programmes Webpage',
      description:
        'A responsive landing page developed for Ranaco Education & Training Institute to showcase training programmes, course details, and enrollment information in a clear layout.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      demoUrl: 'https://ranacolandingpage.reti.edu.my/',
      image: '/ranaco-2.png',
    },
  ];

  return (
    <section id="works" className="py-20">
      <ScrollReveal className="mx-auto max-w-3xl text-center">
        <h2 className="section-title">Structured Interface Projects</h2>
        <p className="section-copy mt-6">
          A focused collection of work I have built while learning modern web development and improving my frontend process.
        </p>
      </ScrollReveal>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ScrollReveal
            as="article"
            key={project.title}
            className="surface-card group overflow-hidden transition duration-200 hover:-translate-y-1"
            delay={0.1 + index * 0.12}
          >
            <div className="aspect-[16/10] overflow-hidden bg-zinc-900">
              <Image
                src={project.image}
                alt={project.title}
                width={720}
                height={450}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag-pill text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => window.open(project.demoUrl, '_blank')}
                className="soft-button mt-6 w-full"
              >
                Live demo
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
