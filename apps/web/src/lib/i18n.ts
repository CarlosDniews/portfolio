export type Locale = 'en' | 'pt' | 'es';

export interface Translations {
  // Navbar
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
    toggleMenu: string;
  };
  // Hero
  hero: {
    badge: string;
    subtitle: string;
    description: string;
    viewProjects: string;
    experience: string;
  };
  // About
  about: {
    label: string;
    headingPrefix: string;
    headingSuffix: string;
    fallbackBio: string;
    yearsExp: string;
    companies: string;
    engineerArchitect: string;
    languages: string;
    education: string;
    completed: string;
    inProgress: string;
  };
  // Experience
  exp: {
    label: string;
    headingPrefix: string;
    headingSuffix: string;
    description: string;
  };
  // Skills
  skills: {
    label: string;
    headingPrefix: string;
    headingSuffix: string;
    description: string;
    allTech: string;
  };
  // Projects
  projects: {
    label: string;
    headingPrefix: string;
    headingSuffix: string;
    description: string;
    featured: string;
    emptyState: string;
    seeMoreGithub: string;
    liveSite: string;
  };
  // Achievements
  achievements: {
    label: string;
    headingPrefix: string;
    headingSuffix: string;
  };
  // Contact
  contact: {
    label: string;
    headingPrefix: string;
    headingSuffix: string;
    description: string;
    ctaTitle: string;
    ctaDescription: string;
    sendEmail: string;
  };
  // Footer
  footer: {
    builtWith: string;
    using: string;
  };
}

const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    toggleMenu: 'Toggle menu',
  },
  hero: {
    badge: 'Open to new opportunities',
    subtitle: '+7 years building high-performance, scalable solutions for FinTech, ERP & Business Intelligence. Focused on AI integration, DevOps automation, and Cloud architecture.',
    description: '+7 years building high-performance, scalable solutions for FinTech, ERP & Business Intelligence. Focused on AI integration, DevOps automation, and Cloud architecture.',
    viewProjects: 'View Projects',
    experience: 'Experience',
  },
  about: {
    label: 'About',
    headingPrefix: 'Who is ',
    headingSuffix: '?',
    fallbackBio: 'Result-oriented Software Engineer and Tech Lead with over 7 years of experience in high-performance software development. Proven track record in architecting scalable solutions for FinTech, ERP, and Business Intelligence sectors.',
    yearsExp: 'Years of Experience',
    companies: 'Companies',
    engineerArchitect: 'Software Engineer & Architect',
    languages: 'Languages',
    education: 'Education',
    completed: 'Completed',
    inProgress: 'In Progress',
  },
  exp: {
    label: 'Career',
    headingPrefix: 'Professional ',
    headingSuffix: 'Experience',
    description: 'A track record of building and leading across FinTech, ERP, BI, and SaaS industries.',
  },
  skills: {
    label: 'Technical Skills',
    headingPrefix: 'My ',
    headingSuffix: 'Stack',
    description: 'Technologies and tools I use daily to build robust, scalable solutions.',
    allTech: 'All Technologies',
  },
  projects: {
    label: 'Portfolio',
    headingPrefix: 'My ',
    headingSuffix: 'Projects',
    description: "A selection of projects I've built, showcasing my skills and experience across different domains.",
    featured: 'Featured',
    emptyState: 'Projects will be added soon.',
    seeMoreGithub: 'See more on GitHub',
    liveSite: 'Live site',
  },
  achievements: {
    label: 'Recognition',
    headingPrefix: 'Awards & ',
    headingSuffix: 'Achievements',
  },
  contact: {
    label: 'Contact',
    headingPrefix: "Let's ",
    headingSuffix: 'Talk',
    description: 'Interested in working together or have a question? Reach out through any of the channels below.',
    ctaTitle: 'Ready to start a project?',
    ctaDescription: "I'm always open to discussing new opportunities, interesting projects, and partnerships.",
    sendEmail: 'Send Email',
  },
  footer: {
    builtWith: 'Built with',
    using: 'using Next.js, NestJS & tRPC',
  },
};

const pt: Translations = {
  nav: {
    home: 'Início',
    about: 'Sobre',
    experience: 'Experiência',
    skills: 'Skills',
    projects: 'Projetos',
    contact: 'Contato',
    toggleMenu: 'Abrir menu',
  },
  hero: {
    badge: 'Aberto a novas oportunidades',
    subtitle: '+7 anos construindo soluções escaláveis e de alta performance para FinTech, ERP e Business Intelligence. Foco em integração de IA, automação DevOps e arquitetura Cloud.',
    description: '+7 anos construindo soluções escaláveis e de alta performance para FinTech, ERP e Business Intelligence. Foco em integração de IA, automação DevOps e arquitetura Cloud.',
    viewProjects: 'Ver Projetos',
    experience: 'Experiência',
  },
  about: {
    label: 'Sobre',
    headingPrefix: 'Quem é ',
    headingSuffix: '?',
    fallbackBio: 'Engenheiro de Software e Tech Lead orientado a resultados, com mais de 7 anos de experiência em desenvolvimento de alta performance. Experiência comprovada em arquitetar soluções escaláveis para setores de FinTech, ERP e Business Intelligence.',
    yearsExp: 'Anos de Experiência',
    companies: 'Empresas',
    engineerArchitect: 'Engenheiro de Software & Arquiteto',
    languages: 'Idiomas',
    education: 'Formação',
    completed: 'Concluído',
    inProgress: 'Em andamento',
  },
  exp: {
    label: 'Carreira',
    headingPrefix: 'Experiência ',
    headingSuffix: 'Profissional',
    description: 'Uma trajetória de construção e liderança nos setores de FinTech, ERP, BI e SaaS.',
  },
  skills: {
    label: 'Habilidades Técnicas',
    headingPrefix: 'Minha ',
    headingSuffix: 'Stack',
    description: 'Tecnologias e ferramentas que utilizo diariamente para construir soluções robustas e escaláveis.',
    allTech: 'Todas as Tecnologias',
  },
  projects: {
    label: 'Portfólio',
    headingPrefix: 'Meus ',
    headingSuffix: 'Projetos',
    description: 'Uma seleção dos projetos que desenvolvi, demonstrando minhas habilidades e experiência em diferentes domínios.',
    featured: 'Destaque',
    emptyState: 'Projetos serão adicionados em breve.',
    seeMoreGithub: 'Ver mais no GitHub',
    liveSite: 'Site ao vivo',
  },
  achievements: {
    label: 'Reconhecimento',
    headingPrefix: 'Prêmios & ',
    headingSuffix: 'Conquistas',
  },
  contact: {
    label: 'Contato',
    headingPrefix: 'Vamos ',
    headingSuffix: 'Conversar',
    description: 'Interessado em trabalhar juntos ou tem alguma dúvida? Entre em contato por qualquer um dos canais abaixo.',
    ctaTitle: 'Pronto para começar um projeto?',
    ctaDescription: 'Estou sempre aberto a discutir novas oportunidades, projetos interessantes e parcerias.',
    sendEmail: 'Enviar Email',
  },
  footer: {
    builtWith: 'Feito com',
    using: 'usando Next.js, NestJS & tRPC',
  },
};

const es: Translations = {
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    experience: 'Experiencia',
    skills: 'Skills',
    projects: 'Proyectos',
    contact: 'Contacto',
    toggleMenu: 'Abrir menú',
  },
  hero: {
    badge: 'Abierto a nuevas oportunidades',
    subtitle: '+7 años construyendo soluciones escalables y de alto rendimiento para FinTech, ERP y Business Intelligence. Enfocado en integración de IA, automatización DevOps y arquitectura Cloud.',
    description: '+7 años construyendo soluciones escalables y de alto rendimiento para FinTech, ERP y Business Intelligence. Enfocado en integración de IA, automatización DevOps y arquitectura Cloud.',
    viewProjects: 'Ver Proyectos',
    experience: 'Experiencia',
  },
  about: {
    label: 'Sobre mí',
    headingPrefix: '¿Quién es ',
    headingSuffix: '?',
    fallbackBio: 'Ingeniero de Software y Tech Lead orientado a resultados, con más de 7 años de experiencia en desarrollo de software de alto rendimiento. Historial comprobado en la arquitectura de soluciones escalables para los sectores de FinTech, ERP y Business Intelligence.',
    yearsExp: 'Años de Experiencia',
    companies: 'Empresas',
    engineerArchitect: 'Ingeniero de Software & Arquitecto',
    languages: 'Idiomas',
    education: 'Educación',
    completed: 'Completado',
    inProgress: 'En curso',
  },
  exp: {
    label: 'Carrera',
    headingPrefix: 'Experiencia ',
    headingSuffix: 'Profesional',
    description: 'Una trayectoria de construcción y liderazgo en los sectores de FinTech, ERP, BI y SaaS.',
  },
  skills: {
    label: 'Habilidades Técnicas',
    headingPrefix: 'Mi ',
    headingSuffix: 'Stack',
    description: 'Tecnologías y herramientas que utilizo diariamente para construir soluciones robustas y escalables.',
    allTech: 'Todas las Tecnologías',
  },
  projects: {
    label: 'Portafolio',
    headingPrefix: 'Mis ',
    headingSuffix: 'Proyectos',
    description: 'Una selección de los proyectos que he desarrollado, demostrando mis habilidades y experiencia en diferentes dominios.',
    featured: 'Destacado',
    emptyState: 'Los proyectos se agregarán pronto.',
    seeMoreGithub: 'Ver más en GitHub',
    liveSite: 'Sitio en vivo',
  },
  achievements: {
    label: 'Reconocimiento',
    headingPrefix: 'Premios & ',
    headingSuffix: 'Logros',
  },
  contact: {
    label: 'Contacto',
    headingPrefix: '¿',
    headingSuffix: 'Hablamos?',
    description: '¿Interesado en trabajar juntos o tienes alguna pregunta? Contáctame por cualquiera de los canales a continuación.',
    ctaTitle: '¿Listo para iniciar un proyecto?',
    ctaDescription: 'Siempre estoy abierto a discutir nuevas oportunidades, proyectos interesantes y alianzas.',
    sendEmail: 'Enviar Email',
  },
  footer: {
    builtWith: 'Hecho con',
    using: 'usando Next.js, NestJS & tRPC',
  },
};

export const translations: Record<Locale, Translations> = { en, pt, es };

export const localeNames: Record<Locale, string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  pt: '🇧🇷',
  es: '🇪🇸',
};
