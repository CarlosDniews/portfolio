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
    title: 'Portfolio Pessoal',
    description:
      'Site pessoal e portfólio construído com NextJS, NestJS, tRPC e Glassmorphism design.',
    technologies: ['Next.js', 'NestJS', 'tRPC', 'Tailwind CSS', 'Upstash Redis'],
    githubUrl: 'https://github.com/CarlosDniews',
    featured: true,
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
