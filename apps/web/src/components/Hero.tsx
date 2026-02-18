'use client';

import { Github, Linkedin, Instagram, ChevronDown, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';
import { BackgroundBeams } from './ui/background-beams';
import { SparklesCore } from './ui/sparkles';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { motion } from 'framer-motion';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background beams */}
      <BackgroundBeams className="opacity-40" />

      {/* Extra sparkles behind content */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          size={1.4}
          density={40}
          color="#a78bfa"
          className="w-full h-full"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-slate-400">
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-white">Carlos </span>
          <span className="gradient-text">Daniel</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-xl md:text-2xl text-slate-300 mb-3"
        >
          Software Engineer{' '}
          <span className="text-purple-400">&</span> Tech Lead
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-sm text-slate-500 flex items-center justify-center gap-1.5 mb-6"
        >
          <MapPin size={14} />
          São Leopoldo, RS, Brazil
        </motion.p>

        {/* Subtitle with text generate effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <TextGenerateEffect
            words={t.hero.subtitle}
            className="text-base md:text-lg text-slate-400"
            duration={0.4}
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a href="#projects" className="btn-primary">
            {t.hero.viewProjects}
          </a>
          <a href="#experience" className="btn-ghost">
            {t.hero.experience}
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: 'https://github.com/CarlosDniews', icon: Github, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/carlos-da-rosa-63591a159/', icon: Linkedin, label: 'LinkedIn' },
            { href: 'https://www.instagram.com/carlosdaniel_rosa/', icon: Instagram, label: 'Instagram' },
            { href: 'mailto:darosa.cdaniel@gmail.com', icon: Mail, label: 'Email', isEmail: true },
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.isEmail ? undefined : '_blank'}
              rel={social.isEmail ? undefined : 'noopener noreferrer'}
              className="glass rounded-xl p-3 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
              aria-label={social.label}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1 }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={24} className="text-slate-600" />
      </motion.div>
    </section>
  );
}
