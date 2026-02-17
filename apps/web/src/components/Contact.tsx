'use client';

import { GlassCard } from './GlassCard';
import { Github, Linkedin, Instagram, Mail, Send } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/CarlosDniews',
    icon: Github,
    color: 'hover:text-white hover:bg-white/10',
    description: '@CarlosDniews',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/carlos-da-rosa-63591a159/',
    icon: Linkedin,
    color: 'hover:text-blue-400 hover:bg-blue-500/10',
    description: 'Carlos da Rosa',
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
            Contato
          </p>
          <h2 className="section-heading">
            Vamos <span className="gradient-text">Conversar</span>?
          </h2>
          <p className="section-subtext mx-auto mt-4">
            Interessado em trabalhar juntos ou tem alguma dúvida? Entre em
            contato por qualquer um dos canais abaixo.
          </p>
        </div>

        {/* Social cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
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
                <p className="text-xs text-slate-500">{link.description}</p>
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
            Pronto para começar um projeto?
          </h3>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Estou sempre aberto a discutir novas oportunidades, projetos
            interessantes e parcerias.
          </p>
          <a
            href="https://www.linkedin.com/in/carlos-da-rosa-63591a159/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Mail size={18} />
            Entrar em Contato
          </a>
        </GlassCard>
      </div>
    </section>
  );
}
