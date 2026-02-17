'use client';

import { GlassCard } from './GlassCard';
import { trpc } from '@/lib/trpc';
import { useLanguage } from '@/providers/LanguageProvider';

const categoryStyles: Record<string, { color: string; bgColor: string; textColor: string }> = {
  'Languages': {
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-500/10',
    textColor: 'text-indigo-400',
  },
  'Frameworks & Libraries': {
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-400',
  },
  'Cloud & DevOps': {
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-500/10',
    textColor: 'text-cyan-400',
  },
  'Tools & Concepts': {
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-400',
  },
};

const defaultStyleOrder = [
  { color: 'from-indigo-500 to-purple-500', bgColor: 'bg-indigo-500/10', textColor: 'text-indigo-400' },
  { color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/10', textColor: 'text-purple-400' },
  { color: 'from-cyan-500 to-blue-500', bgColor: 'bg-cyan-500/10', textColor: 'text-cyan-400' },
  { color: 'from-emerald-500 to-teal-500', bgColor: 'bg-emerald-500/10', textColor: 'text-emerald-400' },
];

export function Skills() {
  const { t } = useLanguage();
  const { data: profile } = trpc.profile.get.useQuery();

  const skillGroups = profile?.skillGroups || [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Delphi', 'ABAP', 'PL/SQL', 'SQL'] },
    { category: 'Frameworks & Libraries', items: ['Next.js', 'NestJS', 'Vue.js', 'React', 'Node.js'] },
    { category: 'Cloud & DevOps', items: ['GitHub Actions', 'CI/CD Pipelines', 'Automated Testing', 'Cloud Architecture', 'Docker'] },
    { category: 'Tools & Concepts', items: ['AI Integration (LLMs)', 'Business Intelligence', 'UI/UX Design', 'Scrum/Agile', 'Prisma', 'tRPC'] },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-purple-400 mb-2 tracking-wider uppercase">
            {t.skills.label}
          </p>
          <h2 className="section-heading">
            {t.skills.headingPrefix}<span className="gradient-text">{t.skills.headingSuffix}</span>
          </h2>
          <p className="section-subtext mx-auto mt-4">
            {t.skills.description}
          </p>
        </div>

        {/* Skill categories (dynamic from API) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => {
            const style = categoryStyles[group.category] || defaultStyleOrder[i % defaultStyleOrder.length];
            return (
              <GlassCard key={group.category} className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${style.color}`}
                  />
                  <h3 className="font-semibold text-white">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`${style.bgColor} ${style.textColor} text-sm px-3 py-1.5 rounded-lg font-medium transition-all duration-300 hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* All skills bar */}
        {profile?.skills && (
          <div className="mt-12">
            <GlassCard className="p-6" hover={false}>
              <p className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider">
                {t.skills.allTech}
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
