'use client';

import { GlassCard } from './GlassCard';
import { Trophy, Medal, Calculator } from 'lucide-react';
import { trpc } from '@/lib/trpc';

const achievementIcons = [Trophy, Medal, Calculator];

export function Achievements() {
  const { data: profile } = trpc.profile.get.useQuery();

  const achievements = profile?.achievements || [
    {
      title: '1st Place — Incubating Ideas PUCRS (2017)',
      description:
        'Awarded "Best Elevator Pitch," "Best Idea," and "Best Entrepreneur" among 5,000+ participants.',
    },
    {
      title: 'Bronze Medal — Brazilian Mathematical Olympiad (OBMEP)',
      description:
        "3rd Place National in one of Brazil's most competitive academic competitions.",
    },
    {
      title: '1st Place — Regional Mathematics Olympiads (4 consecutive years)',
      description: 'Consecutive champion from 2014 to 2017.',
    },
  ];

  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-purple-400 mb-2 tracking-wider uppercase">
            Recognition
          </p>
          <h2 className="section-heading">
            Awards & <span className="gradient-text">Achievements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, i) => {
            const Icon = achievementIcons[i % achievementIcons.length];
            const colors = [
              { icon: 'text-amber-400', bg: 'bg-amber-500/10', glow: 'shadow-amber-500/10' },
              { icon: 'text-purple-400', bg: 'bg-purple-500/10', glow: 'shadow-purple-500/10' },
              { icon: 'text-cyan-400', bg: 'bg-cyan-500/10', glow: 'shadow-cyan-500/10' },
            ][i % 3];

            return (
              <GlassCard
                key={i}
                className={`p-6 text-center relative overflow-hidden`}
                glow
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors.bg} mb-5`}
                >
                  <Icon size={28} className={colors.icon} />
                </div>

                {/* Title */}
                <h3 className="font-bold text-white text-sm mb-2 leading-snug">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed">
                  {achievement.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
