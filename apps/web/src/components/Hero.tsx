'use client';

import { Github, Linkedin, Instagram, ChevronDown, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-slate-400">
            {t.hero.badge}
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
          <span className="text-white">Carlos </span>
          <span className="gradient-text">Daniel</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-slate-300 mb-3 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Software Engineer{' '}
          <span className="text-purple-400">&</span> Tech Lead
        </p>

        {/* Location */}
        <p className="text-sm text-slate-500 flex items-center justify-center gap-1.5 mb-6 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          <MapPin size={14} />
          São Leopoldo, RS, Brazil
        </p>

        {/* Subtitle */}
        <p
          className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          {t.hero.subtitle}
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <a href="#projects" className="btn-primary">
            {t.hero.viewProjects}
          </a>
          <a href="#experience" className="btn-ghost">
            {t.hero.experience}
          </a>
        </div>

        {/* Social Links */}
        <div
          className="flex items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="https://github.com/CarlosDniews"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl p-3 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-da-rosa-63591a159/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl p-3 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/carlosdaniel_rosa/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl p-3 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="mailto:darosa.cdaniel@gmail.com"
            className="glass rounded-xl p-3 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-slate-600" />
      </div>
    </section>
  );
}
