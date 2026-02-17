'use client';

import { GlassCard } from './GlassCard';
import { trpc } from '@/lib/trpc';

const skillCategories = [
  {
    name: 'Frontend',
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-500/10',
    textColor: 'text-indigo-400',
    skills: ['Next.js', 'React', 'Vue.js', 'TailwindCSS', 'TypeScript'],
  },
  {
    name: 'Backend',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-400',
    skills: ['NestJS', 'Node.js', 'Delphi', 'tRPC'],
  },
  {
    name: 'Database & ORM',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-500/10',
    textColor: 'text-cyan-400',
    skills: ['MySQL', 'PL/SQL', 'Prisma'],
  },
  {
    name: 'DevOps & Tools',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-400',
    skills: ['Docker', 'Git', 'Vercel', 'CI/CD'],
  },
];

export function Skills() {
  const { data: profile } = trpc.profile.get.useQuery();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-purple-400 mb-2 tracking-wider uppercase">
            Tecnologias
          </p>
          <h2 className="section-heading">
            Minha <span className="gradient-text">Stack</span>
          </h2>
          <p className="section-subtext mx-auto mt-4">
            Tecnologias e ferramentas que utilizo no dia a dia para criar
            soluções robustas e escaláveis.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <GlassCard key={category.name} className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                />
                <h3 className="font-semibold text-white">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`${category.bgColor} ${category.textColor} text-sm px-3 py-1.5 rounded-lg font-medium transition-all duration-300 hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* All skills bar (from API) */}
        {profile?.skills && (
          <div className="mt-12">
            <GlassCard className="p-6" hover={false}>
              <p className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider">
                Todas as tecnologias
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="glass px-3 py-1.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </section>
  );
}
