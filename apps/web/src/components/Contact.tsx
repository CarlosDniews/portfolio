'use client';

import { GlassCard } from './GlassCard';
import { Github, Linkedin, Instagram, Mail, Send, Phone } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';
import { AnimatedSection, AnimatedText, StaggeredContainer, StaggeredItem } from './ui/animated-section';
import { SparklesCore } from './ui/sparkles';

const socialLinks = [
  {
    name: 'Email',
    url: 'mailto:darosa.cdaniel@gmail.com',
    icon: Mail,
    color: 'hover:text-amber-400 hover:bg-amber-500/10',
    description: 'darosa.cdaniel@gmail.com',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/carlos-da-rosa-63591a159/',
    icon: Linkedin,
    color: 'hover:text-blue-400 hover:bg-blue-500/10',
    description: 'Carlos da Rosa',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/CarlosDniews',
    icon: Github,
    color: 'hover:text-white hover:bg-white/10',
    description: '@CarlosDniews',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/carlosdaniel_rosa/',
    icon: Instagram,
    color: 'hover:text-pink-400 hover:bg-pink-500/10',
    description: '@carlosdaniel_rosa',
  },
];

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-mono text-purple-400 mb-2 tracking-wider uppercase">
            {t.contact.label}
          </p>
          <AnimatedText>
            <h2 className="section-heading">
              {t.contact.headingPrefix}<span className="gradient-text">{t.contact.headingSuffix}</span>
            </h2>
          </AnimatedText>
          <p className="section-subtext mx-auto mt-4">
            {t.contact.description}
          </p>
        </AnimatedSection>

        {/* Social cards */}
        <StaggeredContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {socialLinks.map((link) => (
            <StaggeredItem key={link.name}>
              <a
                href={link.url}
                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="block cursor-pointer h-full"
              >
                <GlassCard className="p-6 text-center group h-full">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl glass mb-4 text-slate-400 transition-all duration-300 ${link.color}`}
                  >
                    <link.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1">
                    {link.name}
                  </h3>
                  <p className="text-xs text-slate-500 break-all">{link.description}</p>
                </GlassCard>
              </a>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        {/* CTA Card */}
        <AnimatedSection delay={0.3}>
          <GlassCard
            className="p-8 md:p-12 text-center gradient-border relative overflow-hidden"
            hover={false}
            glow
          >
            {/* Sparkles in CTA */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <SparklesCore
                background="transparent"
                minSize={0.4}
                size={1}
                density={30}
                color="#a78bfa"
                className="w-full h-full"
              />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mb-6">
                <Send size={28} className="text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {t.contact.ctaTitle}
              </h3>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">
                {t.contact.ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:darosa.cdaniel@gmail.com"
                  className="btn-primary inline-flex items-center gap-2 cursor-pointer"
                >
                  <Mail size={18} />
                  {t.contact.sendEmail}
                </a>
                <a
                  href="https://www.linkedin.com/in/carlos-da-rosa-63591a159/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center gap-2 cursor-pointer"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
