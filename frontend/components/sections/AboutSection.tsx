'use client';

import { Award, Code2, Rocket, Users } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import ScrollFloat from '../ScrollFloat';
import NumberCounter from '../NumberCounter';
import DomeGallery from '../DomeGallery';

export default function AboutSection() {
  const skills = [
    { name: 'React', level: 65 },
    { name: 'Next.js', level: 60 },
    { name: 'TypeScript', level: 55 },
    { name: 'Node.js', level: 60 },
    { name: 'PHP', level: 50 },
    { name: 'React Native', level: 45 },
    { name: 'MySQL', level: 65 },
    { name: 'PostgreSQL', level: 50 },
  ];

  const stats = [
    { icon: Code2, label: 'Projects Built', num: 5, suffix: '+' },
    { icon: Rocket, label: 'Learning Journey', num: 1, suffix: '+ Yr' },
    { icon: Users, label: 'Line of Code Commits', num: 200, suffix: '+' },
    { icon: Award, label: 'Technologies', num: 8, suffix: '+' },
  ];

  return (
    <section id="about" className="py-20">
      <ScrollReveal className="mx-auto max-w-3xl text-center">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="section-title text-center !leading-tight translate-y-[-0.15em]"
        >
          Developer with Product Mindset
        </ScrollFloat>
        <p className="section-copy mt-6">
          I enjoy turning ideas into clear, usable interfaces. My current focus is building stronger frontend foundations while improving the way I think about user experience and system structure.
        </p>
      </ScrollReveal>

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <ScrollReveal
              key={stat.label}
              className="group relative overflow-hidden surface-card p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] hover:border-white/20"
              delay={index * 0.08}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-black text-white">
                <NumberCounter to={stat.num} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-sm font-semibold text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200">{stat.label}</div>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal className="surface-card p-8">
          <h3 className="text-2xl font-black text-white">How I Work</h3>
          <ul className="group mt-4 flex flex-col gap-2 text-zinc-400">
            <li className="rounded-lg border border-transparent p-3 transition-all duration-300 group-hover:opacity-30 hover:!opacity-100 hover:bg-white/5 hover:translate-x-1">
              <strong className="font-bold text-zinc-100">Understand the problem</strong> &ndash; I start by breaking down what actually needs to be solved, not just what is requested.
            </li>
            <li className="rounded-lg border border-transparent p-3 transition-all duration-300 group-hover:opacity-30 hover:!opacity-100 hover:bg-white/5 hover:translate-x-1">
              <strong className="font-bold text-zinc-100">Design with intention</strong> &ndash; I think about usability and flow before jumping into code.
            </li>
            <li className="rounded-lg border border-transparent p-3 transition-all duration-300 group-hover:opacity-30 hover:!opacity-100 hover:bg-white/5 hover:translate-x-1">
              <strong className="font-bold text-zinc-100">Build iteratively</strong> &ndash; I prefer small, testable progress over big, messy builds.
            </li>
            <li className="rounded-lg border border-transparent p-3 transition-all duration-300 group-hover:opacity-30 hover:!opacity-100 hover:bg-white/5 hover:translate-x-1">
              <strong className="font-bold text-zinc-100">Refine details</strong> &ndash; I focus on polish, responsiveness, and user experience at the end stage.
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal className="surface-card p-8" delay={0.12}>
          <h3 className="text-2xl font-black text-white">Technical Skills</h3>
          {/* Using a fixed height and proper container for DomeGallery */}
          <div className="mt-6 flex h-[400px] w-full items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-transparent">
            <DomeGallery 
              grayscale={false}
              images={[
                'https://cdn.simpleicons.org/react',
                'https://cdn.simpleicons.org/typescript',
                'https://cdn.simpleicons.org/javascript',
                'https://cdn.simpleicons.org/nodedotjs',
                'https://cdn.simpleicons.org/nextdotjs/000000',
                'https://cdn.simpleicons.org/php',
                'https://cdn.simpleicons.org/mysql',
                'https://cdn.simpleicons.org/postgresql',
                'https://cdn.simpleicons.org/html5',
                'https://cdn.simpleicons.org/css',
                'https://cdn.simpleicons.org/tailwindcss',
                'https://cdn.simpleicons.org/github/000000',
                'https://cdn.simpleicons.org/git',
                'https://cdn.simpleicons.org/vercel/000000',
                'https://cdn.simpleicons.org/figma',
                'https://cdn.simpleicons.org/framer/000000',
                'https://cdn.simpleicons.org/docker',
                'https://cdn.simpleicons.org/linux/000000'
              ]} 
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
