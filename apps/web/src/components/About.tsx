'use client';

import { GlassCard } from './GlassCard';
import { GraduationCap, Briefcase, Calendar, Code2 } from 'lucide-react';
import { trpc } from '@/lib/trpc';

export function About() {
  const { data: profile } = trpc.profile.get.useQuery();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-purple-400 mb-2 tracking-wider uppercase">
            Sobre mim
          </p>
          <h2 className="section-heading">
            Quem é <span className="gradient-text">Carlos Daniel</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Bio Card */}
          <GlassCard className="lg:col-span-3 p-8">
            <p className="text-slate-300 leading-relaxed text-lg">
              {profile?.bio ||
                'Desenvolvedor de Software Full Stack com mais de 7 anos de experiência, atuando também como Tech Lead. Apaixonado por construir soluções escaláveis e de alta performance.'}
            </p>
          </GlassCard>

          {/* Stats Card */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            <GlassCard className="p-6 text-center" glow>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 mb-3">
                <Calendar size={22} className="text-purple-400" />
              </div>
              <p className="text-3xl font-bold text-white">
                {profile?.age || 26}
              </p>
              <p className="text-sm text-slate-500 mt-1">Anos de idade</p>
            </GlassCard>

            <GlassCard className="p-6 text-center" glow>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 mb-3">
                <Code2 size={22} className="text-indigo-400" />
              </div>
              <p className="text-3xl font-bold text-white">
                {profile?.yearsExperience || 7}+
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Anos de experiência
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center col-span-2" glow>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 mb-3">
                <Briefcase size={22} className="text-cyan-400" />
              </div>
              <p className="text-3xl font-bold text-white">Full Stack</p>
              <p className="text-sm text-slate-500 mt-1">
                Developer & Tech Lead
              </p>
            </GlassCard>
          </div>
        </div>

        {/* Education */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
            <GraduationCap size={24} className="text-purple-400" />
            Formação Acadêmica
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(
              profile?.education || [
                {
                  degree: 'Engenharia da Computação',
                  institution: '',
                  status: 'Concluído' as const,
                },
                {
                  degree: 'Esp. Engenharia de Software',
                  institution: '',
                  status: 'Em andamento' as const,
                },
                {
                  degree: 'MBA Business — IA em TI',
                  institution: '',
                  status: 'Em andamento' as const,
                },
              ]
            ).map((edu, i) => (
              <GlassCard key={i} className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-medium text-white text-sm">
                      {edu.degree}
                    </h4>
                    {edu.institution && (
                      <p className="text-xs text-slate-500 mt-1">
                        {edu.institution}
                      </p>
                    )}
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                      edu.status === 'Concluído'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-amber-500/10 text-amber-400'
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
