import { Injectable } from '@nestjs/common';

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status: 'Concluído' | 'Em andamento';
  note?: string;
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Achievement {
  title: string;
  description: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  instagram: string;
  email: string;
  phone: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  bio: string;
  yearsExperience: number;
  skills: string[];
  skillGroups: SkillGroup[];
  languages: { language: string; level: string }[];
  education: Education[];
  experience: Experience[];
  achievements: Achievement[];
  social: SocialLinks;
}

@Injectable()
export class ProfileService {
  getProfile(): Profile {
    return {
      name: 'Carlos Daniel Alves da Rosa',
      title: 'Software Engineer & Tech Lead',
      location: 'São Leopoldo, RS, Brazil',
      bio: 'Result-oriented Software Engineer and Tech Lead with over 7 years of experience in high-performance software development. Proven track record in architecting scalable solutions for FinTech, ERP, and Business Intelligence sectors. Expert in modernizing legacy systems and leading technical teams through the transition to modern stacks (NextJS, NestJS, TypeScript). Currently focused on AI integration, DevOps automation, and Cloud architecture.',
      yearsExperience: 7,
      skills: [
        'JavaScript',
        'TypeScript',
        'Delphi',
        'ABAP',
        'PL/SQL',
        'SQL',
        'Next.js',
        'NestJS',
        'Vue.js',
        'React',
        'Node.js',
        'Docker',
        'Prisma',
        'tRPC',
        'TailwindCSS',
        'Git',
        'GitHub Actions',
        'CI/CD',
      ],
      skillGroups: [
        {
          category: 'Languages',
          items: ['JavaScript', 'TypeScript', 'Delphi', 'ABAP', 'PL/SQL', 'SQL'],
        },
        {
          category: 'Frameworks & Libraries',
          items: ['Next.js', 'NestJS', 'Vue.js', 'React', 'Node.js'],
        },
        {
          category: 'Cloud & DevOps',
          items: ['GitHub Actions', 'CI/CD Pipelines', 'Automated Testing', 'Cloud Architecture', 'Docker'],
        },
        {
          category: 'Tools & Concepts',
          items: ['AI Integration (LLMs)', 'Business Intelligence', 'UI/UX Design', 'Scrum/Agile', 'Prisma', 'tRPC'],
        },
      ],
      languages: [
        { language: 'Portuguese', level: 'Native' },
        { language: 'English', level: 'Fluent' },
        { language: 'Spanish', level: 'Intermediate' },
      ],
      education: [
        {
          degree: 'Postgraduate Specialization in Software Engineering',
          institution: 'Uninter',
          period: '2024 – Present',
          status: 'Em andamento',
        },
        {
          degree: 'MBA in Business Management (Emphasis in IT)',
          institution: 'Uninter',
          period: '2024 – Present',
          status: 'Em andamento',
        },
        {
          degree: 'Bachelor of Computer Engineering',
          institution: 'Unisinos',
          period: '2018 – 2023',
          status: 'Concluído',
          note: 'Full ProUni Scholarship via ENEM',
        },
      ],
      experience: [
        {
          company: 'BOREO Sistemas e Gestão',
          location: 'Remote/Hybrid',
          role: 'Tech Lead & Full-Stack Developer',
          period: 'Aug 2025 – Present',
          highlights: [
            'Promoted to Tech Lead in January 2026 after demonstrating architectural leadership.',
            'Leading the company\'s modernization initiative, mentoring developers on NextJS/NestJS and establishing coding standards.',
            'Built the entire Cloud infrastructure and DevOps culture from scratch — GitHub CI/CD pipelines, automated testing, performance monitoring.',
            'Engineered an AI-Powered BI solution tracking 30+ KPIs with an integrated AI Chatbot that queries the database directly.',
            'Developed a unified AI-enhanced cloud platform for client product management.',
            'Built a free NFS-e (Electronic Service Invoice) platform integrated with the Brazilian Government API.',
            'Leading the development of a fully web-based ERP system using microservices.',
          ],
        },
        {
          company: 'Nelogica',
          location: 'Porto Alegre, RS',
          role: 'Full-Stack Developer',
          period: 'Sep 2024 – Aug 2025',
          highlights: [
            'Developed high-frequency trading solutions for "Profit," a leading FinTech/InvestTech platform, using Delphi.',
            'Spearheaded performance optimization in desktop applications, significantly reducing latency.',
            'Key member of the sustaining engineering team, resolving complex technical debts and structural bugs.',
          ],
        },
        {
          company: 'DASS',
          location: 'Ivoti, RS',
          role: 'Full-Stack Developer',
          period: 'Jun 2023 – Jun 2024',
          highlights: [
            'Built and maintained B2B/B2C web software using VueJS, NodeJS, and PL/SQL.',
            'Designed a custom UI Component Library, increasing team productivity and standardizing visual identity.',
            'Optimized UX workflows and screen responsiveness within a Scrum methodology.',
          ],
        },
        {
          company: 'SAP',
          location: 'São Leopoldo, RS',
          role: 'Product Engineer',
          period: 'Feb 2021 – Feb 2023',
          highlights: [
            'Worked on core ERP modules (eDocument and Sales & Distribution) using ABAP.',
            'Solved complex structural issues in large-scale enterprise software.',
            'Collaborated with global teams to ensure compliance with fiscal regulations.',
          ],
        },
        {
          company: 'WEDY',
          location: 'São Leopoldo, RS',
          role: 'Front-End Developer',
          period: 'Jan 2019 – Sep 2019',
          highlights: [
            'Developed web applications using VueJS and Ruby on Rails.',
            'Contributed to the design of new features for the core marketplace platform.',
          ],
        },
      ],
      achievements: [
        {
          title: '1st Place — Incubating Ideas PUCRS (2017)',
          description: 'Awarded "Best Elevator Pitch," "Best Idea," and "Best Entrepreneur" among 5,000+ participants.',
        },
        {
          title: 'Bronze Medal — Brazilian Mathematical Olympiad (OBMEP)',
          description: '3rd Place National in one of Brazil\'s most competitive academic competitions.',
        },
        {
          title: '1st Place — Regional Mathematics Olympiads (4 consecutive years)',
          description: 'Consecutive champion from 2014 to 2017.',
        },
      ],
      social: {
        github: 'https://github.com/CarlosDniews',
        linkedin: 'https://www.linkedin.com/in/carlos-da-rosa-63591a159/',
        instagram: 'https://www.instagram.com/carlosdaniel_rosa/',
        email: 'darosa.cdaniel@gmail.com',
        phone: '+55 51 98335-8321',
      },
    };
  }
}
