'use client';

import { Award, Code2, Rocket, Users } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

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
    { icon: Code2, label: 'Projects Built', value: '5+' },
    { icon: Rocket, label: 'Learning Journey', value: '1+ Yr' },
    { icon: Users, label: 'Line of Code Commits', value: '200+' },
    { icon: Award, label: 'Technologies', value: '8+' },
  ];

  return (
    <section id="about" className="py-20">
      <ScrollReveal className="mx-auto max-w-3xl text-center">
        <h2 className="section-title">Developer with Product Mindset</h2>
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
              className="surface-card p-5 transition duration-200 hover:-translate-y-1"
              delay={index * 0.08}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="mt-1 text-sm font-semibold text-zinc-400">{stat.label}</div>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal className="surface-card p-8">
          <h3 className="text-2xl font-black text-white">How I Work</h3>
          <ul className="mt-4 flex flex-col gap-4 text-zinc-400">
            <li><strong className="font-bold text-zinc-100">Understand the problem</strong> &ndash; I start by breaking down what actually needs to be solved, not just what is requested.</li>
            <li><strong className="font-bold text-zinc-100">Design with intention</strong> &ndash; I think about usability and flow before jumping into code.</li>
            <li><strong className="font-bold text-zinc-100">Build iteratively</strong> &ndash; I prefer small, testable progress over big, messy builds.</li>
            <li><strong className="font-bold text-zinc-100">Refine details</strong> &ndash; I focus on polish, responsiveness, and user experience at the end stage.</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal className="surface-card p-8" delay={0.12}>
          <h3 className="text-2xl font-black text-white">Technical Skills</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <ScrollReveal key={skill.name} delay={0.12 + index * 0.04}>
                <div className="mb-2 flex justify-between text-sm font-bold">
                  <span className="text-zinc-300">{skill.name}</span>
                  <span className="text-zinc-100">{skill.level}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-white to-zinc-500 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
