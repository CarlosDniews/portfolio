import { Injectable } from '@nestjs/common';

export interface Education {
  degree: string;
  institution: string;
  status: 'Concluído' | 'Em andamento';
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  instagram: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  age: number;
  yearsExperience: number;
  skills: string[];
  education: Education[];
  social: SocialLinks;
}

@Injectable()
export class ProfileService {
  getProfile(): Profile {
    return {
      name: 'Carlos Daniel Alves da Rosa',
      title: 'Desenvolvedor Full Stack & Tech Lead',
      bio: 'Desenvolvedor de Software Full Stack com mais de 7 anos de experiência, atuando também como Tech Lead. Apaixonado por construir soluções escaláveis e de alta performance. Formado em Engenharia da Computação, com especialização em Engenharia de Software e MBA em Business com foco em uso de IA aplicada à TI.',
      age: 26,
      yearsExperience: 7,
      skills: [
        'Next.js',
        'NestJS',
        'Vue.js',
        'Node.js',
        'TypeScript',
        'Delphi',
        'Docker',
        'Prisma',
        'MySQL',
        'PL/SQL',
        'React',
        'tRPC',
        'TailwindCSS',
        'Git',
      ],
      education: [
        {
          degree: 'Engenharia da Computação',
          institution: '',
          status: 'Concluído',
        },
        {
          degree: 'Especialização em Engenharia de Software',
          institution: '',
          status: 'Em andamento',
        },
        {
          degree: 'MBA em Business — IA aplicada à TI',
          institution: '',
          status: 'Em andamento',
        },
      ],
      social: {
        github: 'https://github.com/CarlosDniews',
        linkedin: 'https://www.linkedin.com/in/carlos-da-rosa-63591a159/',
        instagram: 'https://www.instagram.com/carlosdaniel_rosa/',
      },
    };
  }
}
