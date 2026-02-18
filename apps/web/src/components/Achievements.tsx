'use client';

import { GlassCard } from './GlassCard';
import { Trophy, Medal, Calculator } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';
import { AnimatedSection, AnimatedText, StaggeredContainer, StaggeredItem } from './ui/animated-section';
import { Meteors } from './ui/meteors';

const achievementIcons = [Trophy, Medal, Calculator];

export function Achievements() {
  const { t } = useLanguage();

  const achievements = t.achievements.items;

  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-mono text-purple-400 mb-2 tracking-wider uppercase">
            {t.achievements.label}
          </p>
          <AnimatedText>
            <h2 className="section-heading">
              {t.achievements.headingPrefix}<span className="gradient-text">{t.achievements.headingSuffix}</span>
            </h2>
          </AnimatedText>
        </AnimatedSection>

        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, i) => {
            const Icon = achievementIcons[i % achievementIcons.length];
            const colors = [
              { icon: 'text-amber-400', bg: 'bg-amber-500/10', glow: 'shadow-amber-500/10' },
              { icon: 'text-purple-400', bg: 'bg-purple-500/10', glow: 'shadow-purple-500/10' },
              { icon: 'text-cyan-400', bg: 'bg-cyan-500/10', glow: 'shadow-cyan-500/10' },
            ][i % 3];

            return (
              <StaggeredItem key={i}>
                <div className="relative overflow-hidden rounded-2xl h-full">
                  <GlassCard
                    className="p-6 text-center relative overflow-hidden h-full"
                    glow
                  >
                    {/* Meteor effect */}
                    <Meteors number={8} />

                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors.bg} mb-5 relative z-10`}
                    >
                      <Icon size={28} className={colors.icon} />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-white text-sm mb-2 leading-snug relative z-10">
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed relative z-10">
                      {achievement.description}
                    </p>
                  </GlassCard>
                </div>
              </StaggeredItem>
            );
          })}
        </StaggeredContainer>
      </div>
    </section>
  );
}
