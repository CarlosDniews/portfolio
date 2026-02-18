'use client';

import { GlassCard } from './GlassCard';
import { GraduationCap, Briefcase, Code2, Globe, Award } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { useLanguage } from '@/providers/LanguageProvider';
import { AnimatedSection, AnimatedText, StaggeredContainer, StaggeredItem } from './ui/animated-section';

export function About() {
  const { data: profile } = trpc.profile.get.useQuery();
  const { t } = useLanguage();

  const languages = t.about.languages;
  const education = t.about.education;

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-mono text-purple-400 mb-2 tracking-wider uppercase">
            {t.about.label}
          </p>
          <AnimatedText>
            <h2 className="section-heading">
              {t.about.headingPrefix}<span className="gradient-text">{t.about.headingGradient}</span>{t.about.headingSuffix}
            </h2>
          </AnimatedText>
        </AnimatedSection>

        <StaggeredContainer className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Bio Card */}
          <StaggeredItem className="lg:col-span-3">
            <GlassCard className="p-8 h-full">
              <p className="text-slate-300 leading-relaxed text-lg">
                {t.about.bio}
              </p>
            </GlassCard>
          </StaggeredItem>

          {/* Stats Cards */}
          <StaggeredItem className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 h-full">
              <GlassCard className="p-6 text-center" glow>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 mb-3">
                  <Code2 size={22} className="text-indigo-400" />
                </div>
                <p className="text-3xl font-bold text-white">
                  {profile?.yearsExperience || 7}+
                </p>
                <p className="text-sm text-slate-500 mt-1">{t.about.yearsExp}</p>
              </GlassCard>

              <GlassCard className="p-6 text-center" glow>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 mb-3">
                  <Award size={22} className="text-purple-400" />
                </div>
                <p className="text-3xl font-bold text-white">5+</p>
                <p className="text-sm text-slate-500 mt-1">{t.about.companies}</p>
              </GlassCard>

              <GlassCard className="p-6 text-center col-span-2" glow>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 mb-3">
                  <Briefcase size={22} className="text-cyan-400" />
                </div>
                <p className="text-3xl font-bold text-white">Tech Lead</p>
                <p className="text-sm text-slate-500 mt-1">
                  {t.about.engineerArchitect}
                </p>
              </GlassCard>
            </div>
          </StaggeredItem>
        </StaggeredContainer>

        {/* Languages */}
        <AnimatedSection className="mt-8" delay={0.3}>
          <GlassCard className="p-6" hover={false}>
            <div className="flex items-center gap-3 mb-4">
              <Globe size={20} className="text-purple-400" />
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider">{t.about.languagesLabel}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <span
                  key={lang.language}
                  className="glass px-4 py-2 rounded-xl text-sm"
                >
                  <span className="text-white font-medium">{lang.language}</span>
                  <span className="text-slate-500 ml-2">— {lang.level}</span>
                </span>
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection className="mt-12" delay={0.4}>
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
            <GraduationCap size={24} className="text-purple-400" />
            {t.about.educationLabel}
          </h3>
          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {education.map((edu, i) => (
              <StaggeredItem key={i}>
                <GlassCard className="p-5 h-full">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-white text-sm">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        {edu.institution} • {edu.period}
                      </p>
                      {edu.note && (
                        <p className="text-xs text-purple-400/80 mt-1.5 italic">
                          {edu.note}
                        </p>
                      )}
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                        edu.done
                          ? 'bg-emerald-500/10 text-emerald-400'
                          : 'bg-amber-500/10 text-amber-400'
                      }`}
                    >
                      {edu.done ? t.about.completed : t.about.inProgress}
                    </span>
                  </div>
                </GlassCard>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </AnimatedSection>
      </div>
    </section>
  );
}
