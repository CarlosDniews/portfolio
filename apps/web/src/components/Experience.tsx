'use client';

import { GlassCard } from './GlassCard';
import { Building2, MapPin, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';
import { AnimatedSection, AnimatedText } from './ui/animated-section';
import { motion } from 'framer-motion';

const companyColors: Record<string, string> = {
  'BOREO Sistemas e Gestão': 'from-purple-500 to-indigo-500',
  'Nelogica': 'from-blue-500 to-cyan-500',
  'DASS': 'from-emerald-500 to-teal-500',
  'SAP': 'from-amber-500 to-orange-500',
  'WEDY': 'from-pink-500 to-rose-500',
};

export function Experience() {
  const { t } = useLanguage();

  const experiences = t.exp.items;

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-mono text-purple-400 mb-2 tracking-wider uppercase">
            {t.exp.label}
          </p>
          <AnimatedText>
            <h2 className="section-heading">
              {t.exp.headingPrefix}<span className="gradient-text">{t.exp.headingSuffix}</span>
            </h2>
          </AnimatedText>
          <p className="section-subtext mx-auto mt-4">
            {t.exp.description}
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/40 via-indigo-500/20 to-transparent hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              const gradientColor = companyColors[exp.company] || 'from-purple-500 to-indigo-500';

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
                  className={`relative md:flex md:items-start ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 top-6 z-10 hidden md:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 + 0.3, type: 'spring' }}
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${gradientColor} ring-4 ring-[#070b24]`}
                    />
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <GlassCard className="p-6 md:p-8">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientColor} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                          <Building2 size={20} className="text-white/80" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-white">
                            {exp.role}
                          </h3>
                          <p className="text-purple-400 font-medium text-sm">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                            <span className="text-xs text-slate-500 flex items-center gap-1">
                              <MapPin size={12} />
                              {exp.location}
                            </span>
                            <span className="text-xs text-slate-500">
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 mt-4">
                        {exp.highlights.map((h, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <ChevronRight
                              size={14}
                              className="text-purple-500/60 mt-0.5 flex-shrink-0"
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
