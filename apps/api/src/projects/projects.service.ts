import { Injectable, Logger } from '@nestjs/common';
import { Redis } from '@upstash/redis';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Business Intelligence',
    description:
      'Complete BI solution tracking 30+ KPIs (Sales, Stock, Projections) with a fully integrated AI Chatbot that understands and queries the database directly to answer client questions.',
    technologies: ['Next.js', 'NestJS', 'TypeScript', 'AI/LLM', 'PL/SQL'],
    liveUrl: 'https://bi.boreo.com.br/',
    featured: true,
  },
  {
    id: '2',
    title: 'Cloud Product Manager',
    description:
      'Unified, AI-enhanced cloud platform for client product management. Allows clients to manage product photos, details, and metadata in a centralized, modern interface.',
    technologies: ['Next.js', 'NestJS', 'TypeScript', 'Cloud', 'AI'],
    liveUrl: 'https://fotos.boreo.com.br/',
    featured: true,
  },
  {
    id: '3',
    title: 'NFS-e Service Platform',
    description:
      'Free, cloud-based Electronic Service Invoice (NFS-e) application integrated with the Brazilian Government API. Serves both internal needs and external clients.',
    technologies: ['NestJS', 'TypeScript', 'REST API', 'Gov Integration'],
    liveUrl: 'https://nfse.boreo.com.br/api/logs',
    featured: true,
  },
  {
    id: '4',
    title: 'Quiztopia',
    description:
      'Interactive quiz platform built as a personal side-project. Features engaging UI, real-time scoring, and multiple quiz categories.',
    technologies: ['Next.js', 'TypeScript', 'Vercel', 'TailwindCSS'],
    liveUrl: 'https://quiztopia-site.vercel.app/',
    githubUrl: 'https://github.com/CarlosDniews',
    featured: false,
  },
  {
    id: '5',
    title: 'Portfolio Pessoal',
    description:
      'This very site — personal portfolio & presentation letter built with a modern stack featuring Glassmorphism design and type-safe end-to-end communication.',
    technologies: ['Next.js', 'NestJS', 'tRPC', 'TailwindCSS', 'Upstash Redis'],
    githubUrl: 'https://github.com/CarlosDniews',
    featured: false,
  },
];

@Injectable()
export class ProjectsService {
  private readonly logger = new Logger(ProjectsService.name);

  private getRedis(): Redis | null {
    try {
      if (
        process.env.UPSTASH_REDIS_REST_URL &&
        process.env.UPSTASH_REDIS_REST_TOKEN
      ) {
        return new Redis({
          url: process.env.UPSTASH_REDIS_REST_URL,
          token: process.env.UPSTASH_REDIS_REST_TOKEN,
        });
      }
    } catch (err) {
      this.logger.warn('Upstash Redis not available, using default data');
    }
    return null;
  }

  async findAll(): Promise<Project[]> {
    const redis = this.getRedis();
    if (redis) {
      try {
        const projects = await redis.get<Project[]>('projects');
        return projects || defaultProjects;
      } catch (err) {
        this.logger.error('Failed to fetch from Redis', err);
      }
    }
    return defaultProjects;
  }

  async findById(id: string): Promise<Project | undefined> {
    const projects = await this.findAll();
    return projects.find((p) => p.id === id);
  }

  async save(projects: Project[]): Promise<void> {
    const redis = this.getRedis();
    if (redis) {
      await redis.set('projects', JSON.stringify(projects));
    }
  }
}
