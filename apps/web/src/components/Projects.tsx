'use client';

import { GlassCard } from './GlassCard';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { trpc } from '@/lib/trpc';

export function Projects() {
  const { data: projects, isLoading } = trpc.projects.list.useQuery();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-purple-400 mb-2 tracking-wider uppercase">
            Portfolio
          </p>
          <h2 className="section-heading">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtext mx-auto mt-4">
            A selection of projects I&apos;ve built, showcasing my skills and
            experience across different domains.
          </p>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 h-64 animate-pulse"
              >
                <div className="h-4 bg-white/5 rounded w-3/4 mb-4" />
                <div className="h-3 bg-white/5 rounded w-full mb-2" />
                <div className="h-3 bg-white/5 rounded w-2/3" />
              </div>
            ))}
          </div>
        )}

        {/* Projects grid */}
        {projects && projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <GlassCard key={project.id} className="p-6 flex flex-col">
                {/* Project icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                    <Folder size={22} className="text-purple-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-white transition-colors"
                        aria-label="Live site"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project info */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-purple-300/70 bg-purple-500/10 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Featured indicator */}
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        )}

        {/* Empty state */}
        {projects && projects.length === 0 && (
          <div className="text-center py-16">
            <Folder size={48} className="text-slate-700 mx-auto mb-4" />
            <p className="text-slate-500">
              Projects will be added soon.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/CarlosDniews"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <Github size={18} />
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
