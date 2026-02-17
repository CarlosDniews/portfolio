'use client';

import { GlassCard } from './GlassCard';
import { Github, Linkedin, Instagram, Mail, Send, Phone } from 'lucide-react';

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
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-purple-400 mb-2 tracking-wider uppercase">
            Contact
          </p>
          <h2 className="section-heading">
            Let&apos;s <span className="gradient-text">Talk</span>
          </h2>
          <p className="section-subtext mx-auto mt-4">
            Interested in working together or have a question? Reach out through
            any of the channels below.
          </p>
        </div>

        {/* Social cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
            >
              <GlassCard className="p-6 text-center group">
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
          ))}
        </div>

        {/* CTA Card */}
        <GlassCard
          className="p-8 md:p-12 text-center gradient-border"
          hover={false}
          glow
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mb-6">
            <Send size={28} className="text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Ready to start a project?
          </h3>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            I&apos;m always open to discussing new opportunities, interesting
            projects, and partnerships.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:darosa.cdaniel@gmail.com"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail size={18} />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-da-rosa-63591a159/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
