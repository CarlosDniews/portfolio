'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';
import { Locale, localeNames, localeFlags } from '@/lib/i18n';

type NavKey = 'home' | 'about' | 'experience' | 'skills' | 'projects' | 'contact';

const navLinks: { key: NavKey; href: string }[] = [
  { key: 'home', href: '#hero' },
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
];

const locales: Locale[] = ['en', 'pt', 'es'];

export function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-strong shadow-lg shadow-black/20 py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold gradient-text">
          CD
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-300 relative group"
              >
                {t.nav[link.key]}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Language Selector */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 glass rounded-xl px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors"
              aria-label="Select language"
            >
              <Globe size={16} />
              <span>{localeFlags[locale]}</span>
              <ChevronDown size={14} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 glass-strong rounded-xl py-2 min-w-[160px] shadow-xl shadow-black/30 animate-fade-in">
                {locales.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLocale(l); setLangOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                      l === locale
                        ? 'text-white bg-white/5'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{localeFlags[l]}</span>
                    <span>{localeNames[l]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="btn-primary text-sm !px-5 !py-2"
          >
            {t.nav.contact}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          aria-label={t.nav.toggleMenu}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-strong mt-2 mx-4 rounded-2xl p-6 animate-fade-in">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-300 hover:text-white block py-2 transition-colors"
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
            {/* Mobile language selector */}
            <li className="flex items-center gap-2 py-2 flex-wrap">
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => { setLocale(l); }}
                  className={`glass rounded-lg px-3 py-1.5 text-sm transition-colors ${
                    l === locale ? 'text-white bg-white/10' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {localeFlags[l]} {localeNames[l]}
                </button>
              ))}
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary inline-block text-center text-sm mt-2"
              >
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
