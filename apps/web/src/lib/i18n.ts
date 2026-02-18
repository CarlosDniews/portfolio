export type Locale = 'en' | 'pt' | 'es';

export interface ExpItem {
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
}

export interface AchievementItem {
  title: string;
  description: string;
}

export interface EduItem {
  degree: string;
  institution: string;
  period: string;
  done: boolean;
  note?: string;
}

export interface LangItem {
  language: string;
  level: string;
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
    toggleMenu: string;
  };
  hero: {
    badge: string;
    subtitle: string;
    viewProjects: string;
    experience: string;
  };
  about: {
    label: string;
    headingPrefix: string;
    headingSuffix: string;
    bio: string;
    yearsExp: string;
    companies: string;
    engineerArchitect: string;
    languagesLabel: string;
    educationLabel: string;
    completed: string;
    inProgress: string;
    languages: LangItem[];
    education: EduItem[];
  };
  exp: {
    label: string;
    headingPrefix: string;
    headingSuffix: string;
    description: string;
    items: ExpItem[];
  };
  skills: {
    label: string;
    headingPrefix: string;
    headingSuffix: string;
    description: string;
    allTech: string;
    categories: Record<string, string>;
  };
  projectsSection: {
    label: string;
    headingPrefix: string;
    headingSuffix: string;
    description: string;
    featured: string;
    emptyState: string;
    seeMoreGithub: string;
    liveSite: string;
    items: ProjectItem[];
  };
  achievements: {
    label: string;
    headingPrefix: string;
    headingSuffix: string;
    items: AchievementItem[];
  };
  contact: {
    label: string;
    headingPrefix: string;
    headingSuffix: string;
    description: string;
    ctaTitle: string;
    ctaDescription: string;
    sendEmail: string;
  };
  footer: {
    builtWith: string;
    using: string;
  };
}

/* ================================================================== */
/*  ENGLISH                                                            */
/* ================================================================== */
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
    subtitle:
      '+7 years building high-performance, scalable solutions for FinTech, ERP & Business Intelligence. Focused on AI integration, DevOps automation, and Cloud architecture.',
    viewProjects: 'View Projects',
    experience: 'Experience',
  },
  about: {
    label: 'About',
    headingPrefix: 'Who is ',
    headingSuffix: '?',
    bio: 'Result-oriented Software Engineer and Tech Lead with over 7 years of experience in high-performance software development. Proven track record in architecting scalable solutions for FinTech, ERP, and Business Intelligence sectors. Expert in modernizing legacy systems and leading technical teams through the transition to modern stacks (NextJS, NestJS, TypeScript). Currently focused on AI integration, DevOps automation, and Cloud architecture.',
    yearsExp: 'Years of Experience',
    companies: 'Companies',
    engineerArchitect: 'Software Engineer & Architect',
    languagesLabel: 'Languages',
    educationLabel: 'Education',
    completed: 'Completed',
    inProgress: 'In Progress',
    languages: [
      { language: 'Portuguese', level: 'Native' },
      { language: 'English', level: 'Fluent' },
      { language: 'Spanish', level: 'Intermediate' },
    ],
    education: [
      {
        degree: 'Postgraduate Specialization in Software Engineering',
        institution: 'Uninter',
        period: '2024 \u2013 Present',
        done: false,
      },
      {
        degree: 'MBA in Business Management (Emphasis in IT)',
        institution: 'Uninter',
        period: '2024 \u2013 Present',
        done: false,
      },
      {
        degree: 'Bachelor of Computer Engineering',
        institution: 'Unisinos',
        period: '2018 \u2013 2023',
        done: true,
        note: 'Full ProUni Scholarship via ENEM',
      },
    ],
  },
  exp: {
    label: 'Career',
    headingPrefix: 'Professional ',
    headingSuffix: 'Experience',
    description:
      'A track record of building and leading across FinTech, ERP, BI, and SaaS industries.',
    items: [
      {
        company: 'BOREO Sistemas e Gest\u00e3o',
        location: 'Remote / Hybrid',
        role: 'Tech Lead & Full-Stack Developer',
        period: 'Aug 2025 \u2013 Present',
        highlights: [
          "Promoted to Tech Lead in January 2026 after demonstrating architectural leadership.",
          "Leading the company's modernization initiative, mentoring developers on Next.js / NestJS and establishing coding standards.",
          "Built the entire Cloud infrastructure and DevOps culture from scratch \u2014 GitHub CI/CD pipelines, automated testing, performance monitoring.",
          "Engineered an AI-Powered BI solution tracking 30+ KPIs with an integrated AI Chatbot that queries the database directly.",
          "Developed a unified AI-enhanced cloud platform for client product management (photos, metadata, catalog).",
          "Built a free NFS-e (Electronic Service Invoice) platform integrated with the Brazilian Government API.",
          "Leading the development of a fully web-based ERP system using microservices architecture.",
        ],
      },
      {
        company: 'Nelogica',
        location: 'Porto Alegre, RS',
        role: 'Full-Stack Developer',
        period: 'Sep 2024 \u2013 Aug 2025',
        highlights: [
          'Developed high-frequency trading solutions for "Profit," a leading FinTech / InvestTech platform used by thousands of traders nationwide.',
          "Worked extensively with Delphi on desktop-class trading applications requiring sub-millisecond latency.",
          "Spearheaded performance optimizations that significantly reduced UI rendering and data-processing latency.",
          "Key member of the sustaining engineering team, resolving complex technical debts, structural bugs, and race conditions.",
          "Collaborated with product and QA teams to deliver stable, production-grade releases to a critical financial audience.",
        ],
      },
      {
        company: 'DASS',
        location: 'Ivoti, RS',
        role: 'Full-Stack Developer',
        period: 'Jun 2023 \u2013 Jun 2024',
        highlights: [
          "Built and maintained B2B / B2C web applications using Vue.js, Node.js, and PL/SQL for supply-chain and e-commerce flows.",
          "Designed and implemented a custom UI Component Library that standardized the visual identity and boosted team productivity.",
          "Optimized UX workflows and screen responsiveness, reducing user task-completion time.",
          "Actively participated in Scrum ceremonies; led sprint demos and contributed to backlog refinement.",
          "Integrated RESTful microservices that connected front-end interfaces with Oracle-based back-end systems.",
        ],
      },
      {
        company: 'SAP',
        location: 'S\u00e3o Leopoldo, RS',
        role: 'Product Engineer',
        period: 'Feb 2021 \u2013 Feb 2023',
        highlights: [
          "Worked on core SAP ERP modules \u2014 eDocument and Sales & Distribution (SD) \u2014 using ABAP and Fiori.",
          "Solved complex structural issues in a large-scale enterprise codebase serving thousands of global customers.",
          "Collaborated with cross-continental teams (Germany, India, USA) ensuring compliance with fiscal regulations across multiple countries.",
          "Delivered critical patches and feature enhancements within tight SLA windows for enterprise customers.",
          "Gained deep expertise in business process automation, tax compliance, and electronic invoicing standards.",
        ],
      },
      {
        company: 'WEDY',
        location: 'S\u00e3o Leopoldo, RS',
        role: 'Front-End Developer',
        period: 'Jan 2019 \u2013 Sep 2019',
        highlights: [
          "Developed responsive web applications using Vue.js and Ruby on Rails for a wedding-marketplace startup.",
          "Contributed to the design and implementation of new features for the core marketplace platform.",
          "Participated in user-testing sessions and translated UX feedback into actionable front-end improvements.",
          "Collaborated closely with designers to implement pixel-perfect interfaces with a mobile-first approach.",
        ],
      },
    ],
  },
  skills: {
    label: 'Technical Skills',
    headingPrefix: 'My ',
    headingSuffix: 'Stack',
    description:
      'Technologies and tools I use daily to build robust, scalable solutions.',
    allTech: 'All Technologies',
    categories: {
      Languages: 'Languages',
      'Frameworks & Libraries': 'Frameworks & Libraries',
      'Cloud & DevOps': 'Cloud & DevOps',
      'Tools & Concepts': 'Tools & Concepts',
    },
  },
  projectsSection: {
    label: 'Portfolio',
    headingPrefix: 'My ',
    headingSuffix: 'Projects',
    description:
      "A selection of projects I've built, showcasing my skills and experience across different domains.",
    featured: 'Featured',
    emptyState: 'Projects will be added soon.',
    seeMoreGithub: 'See more on GitHub',
    liveSite: 'Live site',
    items: [
      {
        id: '1',
        title: 'AI-Powered Business Intelligence',
        description:
          'Complete BI solution tracking 30+ KPIs (Sales, Stock, Projections) with a fully integrated AI Chatbot that understands and queries the database directly to answer client questions.',
      },
      {
        id: '2',
        title: 'Cloud Product Manager',
        description:
          'Unified, AI-enhanced cloud platform for client product management. Allows clients to manage product photos, details, and metadata in a centralized, modern interface.',
      },
      {
        id: '3',
        title: 'NFS-e Service Platform',
        description:
          'Free, cloud-based Electronic Service Invoice (NFS-e) application integrated with the Brazilian Government API. Serves both internal needs and external clients.',
      },
      {
        id: '4',
        title: 'Quiztopia',
        description:
          'Interactive quiz platform built as a personal side-project. Features engaging UI, real-time scoring, and multiple quiz categories.',
      },
      {
        id: '5',
        title: 'Personal Portfolio',
        description:
          'This very site \u2014 personal portfolio & presentation letter built with a modern stack featuring Glassmorphism design and type-safe end-to-end communication.',
      },
    ],
  },
  achievements: {
    label: 'Recognition',
    headingPrefix: 'Awards & ',
    headingSuffix: 'Achievements',
    items: [
      {
        title: '1st Place \u2014 Incubating Ideas PUCRS (2017)',
        description:
          'Awarded "Best Elevator Pitch," "Best Idea," and "Best Entrepreneur" among 5,000+ participants.',
      },
      {
        title: 'Bronze Medal \u2014 Brazilian Mathematical Olympiad (OBMEP)',
        description:
          "3rd Place National in one of Brazil's most competitive academic competitions.",
      },
      {
        title:
          '1st Place \u2014 Regional Mathematics Olympiads (4 consecutive years)',
        description: 'Consecutive champion from 2014 to 2017.',
      },
    ],
  },
  contact: {
    label: 'Contact',
    headingPrefix: "Let's ",
    headingSuffix: 'Talk',
    description:
      'Interested in working together or have a question? Reach out through any of the channels below.',
    ctaTitle: 'Ready to start a project?',
    ctaDescription:
      "I'm always open to discussing new opportunities, interesting projects, and partnerships.",
    sendEmail: 'Send Email',
  },
  footer: {
    builtWith: 'Built with',
    using: 'using Next.js, NestJS & tRPC',
  },
};

/* ================================================================== */
/*  PORTUGUESE                                                         */
/* ================================================================== */
const pt: Translations = {
  nav: {
    home: 'In\u00edcio',
    about: 'Sobre',
    experience: 'Experi\u00eancia',
    skills: 'Skills',
    projects: 'Projetos',
    contact: 'Contato',
    toggleMenu: 'Abrir menu',
  },
  hero: {
    badge: 'Aberto a novas oportunidades',
    subtitle:
      '+7 anos construindo solu\u00e7\u00f5es escal\u00e1veis e de alta performance para Aplicações Web, FinTech, ERP e Business Intelligence. Foco em integra\u00e7\u00e3o de IA, automa\u00e7\u00e3o DevOps e arquitetura Cloud.',
    viewProjects: 'Ver Projetos',
    experience: 'Experi\u00eancia',
  },
  about: {
    label: 'Sobre',
    headingPrefix: 'Quem \u00e9 ',
    headingSuffix: '?',
    bio: 'Engenheiro de Software e Tech Lead orientado a resultados, com mais de 7 anos de experi\u00eancia em desenvolvimento de software de alta performance. Hist\u00f3rico comprovado em arquitetar solu\u00e7\u00f5es escal\u00e1veis para os setores de Desenvolvimento Web, FinTechs, ERP e Business Intelligence. Especialista em modernizar sistemas legados e liderar equipes t\u00e9cnicas na transi\u00e7\u00e3o para stacks modernas (NextJS, NestJS, TypeScript). Atualmente focado em integra\u00e7\u00e3o de IA, automa\u00e7\u00e3o DevOps e arquitetura Cloud.',
    yearsExp: 'Anos de Experi\u00eancia',
    companies: 'Empresas',
    engineerArchitect: 'Engenheiro de Software & Arquiteto',
    languagesLabel: 'Idiomas',
    educationLabel: 'Forma\u00e7\u00e3o',
    completed: 'Conclu\u00eddo',
    inProgress: 'Em andamento',
    languages: [
      { language: 'Portugu\u00eas', level: 'Nativo' },
      { language: 'Ingl\u00eas', level: 'Fluente' },
      { language: 'Espanhol', level: 'Intermedi\u00e1rio' },
    ],
    education: [
      {
        degree: 'P\u00f3s-Gradua\u00e7\u00e3o em Engenharia de Software',
        institution: 'Uninter',
        period: '2024 \u2013 Presente',
        done: false,
      },
      {
        degree: 'MBA em Gest\u00e3o Empresarial (\u00canfase em TI)',
        institution: 'Uninter',
        period: '2024 \u2013 Presente',
        done: false,
      },
      {
        degree: 'Bacharelado em Engenharia da Computa\u00e7\u00e3o',
        institution: 'Unisinos',
        period: '2018 \u2013 2023',
        done: true,
        note: 'Bolsa integral ProUni via ENEM',
      },
    ],
  },
  exp: {
    label: 'Carreira',
    headingPrefix: 'Experi\u00eancia ',
    headingSuffix: 'Profissional',
    description:
      'Uma trajet\u00f3ria de constru\u00e7\u00e3o e lideran\u00e7a nos setores de FinTech, ERP, BI e SaaS.',
    items: [
      {
        company: 'BOREO Sistemas e Gest\u00e3o',
        location: 'Remoto / H\u00edbrido',
        role: 'Tech Lead & Desenvolvedor Full-Stack',
        period: 'Ago 2025 \u2013 Presente',
        highlights: [
          'Promovido a Tech Lead em janeiro de 2026 ap\u00f3s demonstrar lideran\u00e7a arquitetural.',
          'Liderando a iniciativa de moderniza\u00e7\u00e3o da empresa, mentorando desenvolvedores em Next.js / NestJS e estabelecendo padr\u00f5es de c\u00f3digo.',
          'Construiu toda a infraestrutura Cloud e cultura DevOps do zero \u2014 pipelines CI/CD no GitHub, testes automatizados, monitoramento de performance.',
          'Desenvolveu uma solu\u00e7\u00e3o de BI com IA rastreando 30+ KPIs com um Chatbot de IA integrado que consulta o banco de dados diretamente.',
          'Desenvolveu uma plataforma cloud unificada com IA para gest\u00e3o de produtos dos clientes (fotos, metadados, cat\u00e1logo).',
          'Construiu uma plataforma gratuita de NFS-e (Nota Fiscal de Servi\u00e7o Eletr\u00f4nica) integrada \u00e0 API do Governo Brasileiro.',
          'Liderando o desenvolvimento de um ERP 100% web utilizando arquitetura de microsservi\u00e7os.',
        ],
      },
      {
        company: 'Nelogica',
        location: 'Porto Alegre, RS',
        role: 'Desenvolvedor Full-Stack',
        period: 'Set 2024 \u2013 Ago 2025',
        highlights: [
          'Desenvolveu solu\u00e7\u00f5es de trading de alta frequ\u00eancia para o "Profit", plataforma l\u00edder de FinTech/InvestTech usada por milhares de traders no Brasil.',
          'Trabalhou extensivamente com Delphi em aplica\u00e7\u00f5es desktop de trading exigindo lat\u00eancia sub-milissegundo.',
          'Liderou otimiza\u00e7\u00f5es de performance que reduziram significativamente a lat\u00eancia de renderiza\u00e7\u00e3o e processamento de dados.',
          'Membro-chave da equipe de sustenta\u00e7\u00e3o, resolvendo d\u00e9bitos t\u00e9cnicos complexos, bugs estruturais e condi\u00e7\u00f5es de corrida.',
          'Colaborou com equipes de produto e QA para entregar releases est\u00e1veis e prontas para produ\u00e7\u00e3o a um p\u00fablico financeiro cr\u00edtico.',
        ],
      },
      {
        company: 'DASS',
        location: 'Ivoti, RS',
        role: 'Desenvolvedor Full-Stack',
        period: 'Jun 2023 \u2013 Jun 2024',
        highlights: [
          'Construiu e manteve aplica\u00e7\u00f5es web B2B/B2C usando Vue.js, Node.js e PL/SQL para fluxos de supply-chain e e-commerce.',
          'Projetou e implementou uma Biblioteca de Componentes UI customizada que padronizou a identidade visual e aumentou a produtividade da equipe.',
          'Otimizou fluxos de UX e responsividade das telas, reduzindo o tempo de conclus\u00e3o de tarefas do usu\u00e1rio.',
          'Participou ativamente de cerim\u00f4nias Scrum; liderou demos de sprint e contribuiu para o refinamento do backlog.',
          'Integrou microsservi\u00e7os RESTful conectando interfaces front-end com sistemas back-end baseados em Oracle.',
        ],
      },
      {
        company: 'SAP',
        location: 'S\u00e3o Leopoldo, RS',
        role: 'Engenheiro de Produto',
        period: 'Fev 2021 \u2013 Fev 2023',
        highlights: [
          'Trabalhou em m\u00f3dulos core do SAP ERP \u2014 eDocument e Sales & Distribution (SD) \u2014 usando ABAP e Fiori.',
          'Resolveu problemas estruturais complexos em uma base de c\u00f3digo de larga escala atendendo milhares de clientes globais.',
          'Colaborou com equipes intercontinentais (Alemanha, \u00cdndia, EUA) garantindo conformidade com regulamenta\u00e7\u00f5es fiscais de m\u00faltiplos pa\u00edses.',
          'Entregou patches cr\u00edticos e melhorias de funcionalidade dentro de janelas SLA apertadas para clientes enterprise.',
          'Adquiriu profunda expertise em automa\u00e7\u00e3o de processos de neg\u00f3cio, compliance fiscal e padr\u00f5es de faturamento eletr\u00f4nico.',
        ],
      },
      {
        company: 'WEDY',
        location: 'S\u00e3o Leopoldo, RS',
        role: 'Desenvolvedor Front-End',
        period: 'Jan 2019 \u2013 Set 2019',
        highlights: [
          'Desenvolveu aplica\u00e7\u00f5es web responsivas usando Vue.js e Ruby on Rails para uma startup de marketplace de casamentos.',
          'Contribuiu para o design e implementa\u00e7\u00e3o de novos recursos para a plataforma principal do marketplace.',
          'Participou de sess\u00f5es de teste com usu\u00e1rios e traduziu feedback de UX em melhorias acion\u00e1veis no front-end.',
          'Colaborou estreitamente com designers para implementar interfaces pixel-perfect com abordagem mobile-first.',
        ],
      },
    ],
  },
  skills: {
    label: 'Habilidades T\u00e9cnicas',
    headingPrefix: 'Minha ',
    headingSuffix: 'Stack',
    description:
      'Tecnologias e ferramentas que utilizo diariamente para construir solu\u00e7\u00f5es robustas e escal\u00e1veis.',
    allTech: 'Todas as Tecnologias',
    categories: {
      Languages: 'Linguagens',
      'Frameworks & Libraries': 'Frameworks & Bibliotecas',
      'Cloud & DevOps': 'Cloud & DevOps',
      'Tools & Concepts': 'Ferramentas & Conceitos',
    },
  },
  projectsSection: {
    label: 'Portf\u00f3lio',
    headingPrefix: 'Meus ',
    headingSuffix: 'Projetos',
    description:
      'Uma sele\u00e7\u00e3o dos projetos que desenvolvi, demonstrando minhas habilidades e experi\u00eancia em diferentes dom\u00ednios.',
    featured: 'Destaque',
    emptyState: 'Projetos ser\u00e3o adicionados em breve.',
    seeMoreGithub: 'Ver mais no GitHub',
    liveSite: 'Site ao vivo',
    items: [
      {
        id: '1',
        title: 'Business Intelligence com IA',
        description:
          'Solu\u00e7\u00e3o completa de BI rastreando 30+ KPIs (Vendas, Estoque, Proje\u00e7\u00f5es) com um Chatbot de IA totalmente integrado que entende e consulta o banco de dados diretamente para responder perguntas dos clientes.',
      },
      {
        id: '2',
        title: 'Gerenciador de Produtos na Nuvem',
        description:
          'Plataforma cloud unificada com IA para gest\u00e3o de produtos. Permite que clientes gerenciem fotos, detalhes e metadados dos produtos em uma interface centralizada e moderna.',
      },
      {
        id: '3',
        title: 'Plataforma NFS-e',
        description:
          'Aplica\u00e7\u00e3o gratuita de Nota Fiscal de Servi\u00e7o Eletr\u00f4nica (NFS-e) baseada na nuvem, integrada com a API do Governo Brasileiro. Atende necessidades internas e clientes externos.',
      },
      {
        id: '4',
        title: 'Quiztopia',
        description:
          'Plataforma interativa de quizzes constru\u00edda como projeto pessoal. Possui UI envolvente, pontua\u00e7\u00e3o em tempo real e m\u00faltiplas categorias de quiz.',
      },
      {
        id: '5',
        title: 'Portf\u00f3lio Pessoal',
        description:
          'Este pr\u00f3prio site \u2014 portf\u00f3lio pessoal e carta de apresenta\u00e7\u00e3o constru\u00eddo com uma stack moderna com design Glassmorphism e comunica\u00e7\u00e3o type-safe de ponta a ponta.',
      },
    ],
  },
  achievements: {
    label: 'Reconhecimento',
    headingPrefix: 'Pr\u00eamios & ',
    headingSuffix: 'Conquistas',
    items: [
      {
        title: '1\u00ba Lugar \u2014 Incubando Ideias PUCRS (2017)',
        description:
          'Premiado com "Melhor Elevator Pitch", "Melhor Ideia" e "Melhor Empreendedor" entre mais de 5.000 participantes.',
      },
      {
        title: 'Medalha de Bronze \u2014 Olimp\u00edada Brasileira de Matem\u00e1tica (OBMEP)',
        description:
          '3\u00ba Lugar Nacional em uma das competi\u00e7\u00f5es acad\u00eamicas mais disputadas do Brasil.',
      },
      {
        title:
          '1\u00ba Lugar \u2014 Olimp\u00edadas Regionais de Matem\u00e1tica (4 anos consecutivos)',
        description: 'Campe\u00e3o consecutivo de 2014 a 2017.',
      },
    ],
  },
  contact: {
    label: 'Contato',
    headingPrefix: 'Vamos ',
    headingSuffix: 'Conversar',
    description:
      'Interessado em trabalhar juntos ou tem alguma d\u00favida? Entre em contato por qualquer um dos canais abaixo.',
    ctaTitle: 'Pronto para come\u00e7ar um projeto?',
    ctaDescription:
      'Estou sempre aberto a discutir novas oportunidades, projetos interessantes e parcerias.',
    sendEmail: 'Enviar Email',
  },
  footer: {
    builtWith: 'Feito com',
    using: 'usando Next.js, NestJS & tRPC',
  },
};

/* ================================================================== */
/*  SPANISH                                                            */
/* ================================================================== */
const es: Translations = {
  nav: {
    home: 'Inicio',
    about: 'Sobre m\u00ed',
    experience: 'Experiencia',
    skills: 'Skills',
    projects: 'Proyectos',
    contact: 'Contacto',
    toggleMenu: 'Abrir men\u00fa',
  },
  hero: {
    badge: 'Abierto a nuevas oportunidades',
    subtitle:
      '+7 a\u00f1os construyendo soluciones escalables y de alto rendimiento para FinTech, ERP y Business Intelligence. Enfocado en integraci\u00f3n de IA, automatizaci\u00f3n DevOps y arquitectura Cloud.',
    viewProjects: 'Ver Proyectos',
    experience: 'Experiencia',
  },
  about: {
    label: 'Sobre m\u00ed',
    headingPrefix: '\u00bfQui\u00e9n es ',
    headingSuffix: '?',
    bio: 'Ingeniero de Software y Tech Lead orientado a resultados, con m\u00e1s de 7 a\u00f1os de experiencia en desarrollo de software de alto rendimiento. Historial comprobado en la arquitectura de soluciones escalables para los sectores de FinTech, ERP y Business Intelligence. Especialista en modernizar sistemas legados y liderar equipos t\u00e9cnicos en la transici\u00f3n a stacks modernas (NextJS, NestJS, TypeScript). Actualmente enfocado en integraci\u00f3n de IA, automatizaci\u00f3n DevOps y arquitectura Cloud.',
    yearsExp: 'A\u00f1os de Experiencia',
    companies: 'Empresas',
    engineerArchitect: 'Ingeniero de Software & Arquitecto',
    languagesLabel: 'Idiomas',
    educationLabel: 'Educaci\u00f3n',
    completed: 'Completado',
    inProgress: 'En curso',
    languages: [
      { language: 'Portugu\u00e9s', level: 'Nativo' },
      { language: 'Ingl\u00e9s', level: 'Fluido' },
      { language: 'Espa\u00f1ol', level: 'Intermedio' },
    ],
    education: [
      {
        degree: 'Posgrado en Ingenier\u00eda de Software',
        institution: 'Uninter',
        period: '2024 \u2013 Presente',
        done: false,
      },
      {
        degree: 'MBA en Gesti\u00f3n Empresarial (\u00c9nfasis en TI)',
        institution: 'Uninter',
        period: '2024 \u2013 Presente',
        done: false,
      },
      {
        degree: 'Licenciatura en Ingenier\u00eda Inform\u00e1tica',
        institution: 'Unisinos',
        period: '2018 \u2013 2023',
        done: true,
        note: 'Beca integral ProUni v\u00eda ENEM',
      },
    ],
  },
  exp: {
    label: 'Carrera',
    headingPrefix: 'Experiencia ',
    headingSuffix: 'Profesional',
    description:
      'Una trayectoria de construcci\u00f3n y liderazgo en los sectores de FinTech, ERP, BI y SaaS.',
    items: [
      {
        company: 'BOREO Sistemas e Gest\u00e3o',
        location: 'Remoto / H\u00edbrido',
        role: 'Tech Lead & Desarrollador Full-Stack',
        period: 'Ago 2025 \u2013 Presente',
        highlights: [
          'Promovido a Tech Lead en enero de 2026 tras demostrar liderazgo arquitect\u00f3nico.',
          'Liderando la iniciativa de modernizaci\u00f3n de la empresa, mentoreando desarrolladores en Next.js / NestJS y estableciendo est\u00e1ndares de c\u00f3digo.',
          'Construy\u00f3 toda la infraestructura Cloud y cultura DevOps desde cero \u2014 pipelines CI/CD en GitHub, pruebas automatizadas, monitoreo de rendimiento.',
          'Desarroll\u00f3 una soluci\u00f3n de BI con IA rastreando 30+ KPIs con un Chatbot de IA integrado que consulta la base de datos directamente.',
          'Desarroll\u00f3 una plataforma cloud unificada con IA para gesti\u00f3n de productos de los clientes (fotos, metadatos, cat\u00e1logo).',
          'Construy\u00f3 una plataforma gratuita de NFS-e (Factura Electr\u00f3nica de Servicio) integrada con la API del Gobierno Brasile\u00f1o.',
          'Liderando el desarrollo de un ERP 100% web usando arquitectura de microservicios.',
        ],
      },
      {
        company: 'Nelogica',
        location: 'Porto Alegre, RS',
        role: 'Desarrollador Full-Stack',
        period: 'Sep 2024 \u2013 Ago 2025',
        highlights: [
          'Desarroll\u00f3 soluciones de trading de alta frecuencia para "Profit", plataforma l\u00edder de FinTech/InvestTech utilizada por miles de traders en Brasil.',
          'Trabaj\u00f3 extensamente con Delphi en aplicaciones de escritorio de trading que requieren latencia sub-milisegundo.',
          'Lider\u00f3 optimizaciones de rendimiento que redujeron significativamente la latencia de renderizado y procesamiento de datos.',
          'Miembro clave del equipo de sustentaci\u00f3n, resolviendo deudas t\u00e9cnicas complejas, bugs estructurales y condiciones de carrera.',
          'Colabor\u00f3 con equipos de producto y QA para entregar releases estables y listas para producci\u00f3n a un p\u00fablico financiero cr\u00edtico.',
        ],
      },
      {
        company: 'DASS',
        location: 'Ivoti, RS',
        role: 'Desarrollador Full-Stack',
        period: 'Jun 2023 \u2013 Jun 2024',
        highlights: [
          'Construy\u00f3 y mantuvo aplicaciones web B2B/B2C usando Vue.js, Node.js y PL/SQL para flujos de supply-chain y e-commerce.',
          'Dise\u00f1\u00f3 e implement\u00f3 una Biblioteca de Componentes UI personalizada que estandariz\u00f3 la identidad visual y aument\u00f3 la productividad del equipo.',
          'Optimiz\u00f3 flujos de UX y responsividad de pantallas, reduciendo el tiempo de finalizaci\u00f3n de tareas del usuario.',
          'Particip\u00f3 activamente en ceremonias Scrum; lider\u00f3 demos de sprint y contribuy\u00f3 al refinamiento del backlog.',
          'Integr\u00f3 microservicios RESTful conectando interfaces front-end con sistemas back-end basados en Oracle.',
        ],
      },
      {
        company: 'SAP',
        location: 'S\u00e3o Leopoldo, RS',
        role: 'Ingeniero de Producto',
        period: 'Feb 2021 \u2013 Feb 2023',
        highlights: [
          'Trabaj\u00f3 en m\u00f3dulos core del SAP ERP \u2014 eDocument y Sales & Distribution (SD) \u2014 usando ABAP y Fiori.',
          'Resolvi\u00f3 problemas estructurales complejos en una base de c\u00f3digo de gran escala atendiendo a miles de clientes globales.',
          'Colabor\u00f3 con equipos intercontinentales (Alemania, India, EE.UU.) asegurando el cumplimiento de regulaciones fiscales de m\u00faltiples pa\u00edses.',
          'Entreg\u00f3 parches cr\u00edticos y mejoras de funcionalidad dentro de ventanas SLA ajustadas para clientes enterprise.',
          'Adquiri\u00f3 profunda expertise en automatizaci\u00f3n de procesos de negocio, cumplimiento fiscal y est\u00e1ndares de facturaci\u00f3n electr\u00f3nica.',
        ],
      },
      {
        company: 'WEDY',
        location: 'S\u00e3o Leopoldo, RS',
        role: 'Desarrollador Front-End',
        period: 'Ene 2019 \u2013 Sep 2019',
        highlights: [
          'Desarroll\u00f3 aplicaciones web responsivas usando Vue.js y Ruby on Rails para una startup de marketplace de bodas.',
          'Contribuy\u00f3 al dise\u00f1o e implementaci\u00f3n de nuevas funcionalidades para la plataforma principal del marketplace.',
          'Particip\u00f3 en sesiones de prueba con usuarios y tradujo feedback de UX en mejoras accionables en el front-end.',
          'Colabor\u00f3 estrechamente con dise\u00f1adores para implementar interfaces pixel-perfect con enfoque mobile-first.',
        ],
      },
    ],
  },
  skills: {
    label: 'Habilidades T\u00e9cnicas',
    headingPrefix: 'Mi ',
    headingSuffix: 'Stack',
    description:
      'Tecnolog\u00edas y herramientas que utilizo diariamente para construir soluciones robustas y escalables.',
    allTech: 'Todas las Tecnolog\u00edas',
    categories: {
      Languages: 'Lenguajes',
      'Frameworks & Libraries': 'Frameworks y Bibliotecas',
      'Cloud & DevOps': 'Cloud y DevOps',
      'Tools & Concepts': 'Herramientas y Conceptos',
    },
  },
  projectsSection: {
    label: 'Portafolio',
    headingPrefix: 'Mis ',
    headingSuffix: 'Proyectos',
    description:
      'Una selecci\u00f3n de los proyectos que he desarrollado, demostrando mis habilidades y experiencia en diferentes dominios.',
    featured: 'Destacado',
    emptyState: 'Los proyectos se agregar\u00e1n pronto.',
    seeMoreGithub: 'Ver m\u00e1s en GitHub',
    liveSite: 'Sitio en vivo',
    items: [
      {
        id: '1',
        title: 'Business Intelligence con IA',
        description:
          'Soluci\u00f3n completa de BI rastreando 30+ KPIs (Ventas, Stock, Proyecciones) con un Chatbot de IA totalmente integrado que entiende y consulta la base de datos directamente para responder preguntas de los clientes.',
      },
      {
        id: '2',
        title: 'Gestor de Productos en la Nube',
        description:
          'Plataforma cloud unificada con IA para gesti\u00f3n de productos. Permite a los clientes gestionar fotos, detalles y metadatos de productos en una interfaz centralizada y moderna.',
      },
      {
        id: '3',
        title: 'Plataforma NFS-e',
        description:
          'Aplicaci\u00f3n gratuita de Factura Electr\u00f3nica de Servicio (NFS-e) basada en la nube, integrada con la API del Gobierno Brasile\u00f1o. Sirve tanto a necesidades internas como a clientes externos.',
      },
      {
        id: '4',
        title: 'Quiztopia',
        description:
          'Plataforma interactiva de quizzes construida como proyecto personal. Cuenta con UI atractiva, puntuaci\u00f3n en tiempo real y m\u00faltiples categor\u00edas de quiz.',
      },
      {
        id: '5',
        title: 'Portafolio Personal',
        description:
          'Este mismo sitio \u2014 portafolio personal y carta de presentaci\u00f3n construido con una stack moderna con dise\u00f1o Glassmorphism y comunicaci\u00f3n type-safe de extremo a extremo.',
      },
    ],
  },
  achievements: {
    label: 'Reconocimiento',
    headingPrefix: 'Premios y ',
    headingSuffix: 'Logros',
    items: [
      {
        title: '1er Lugar \u2014 Incubando Ideas PUCRS (2017)',
        description:
          'Premiado con "Mejor Elevator Pitch", "Mejor Idea" y "Mejor Emprendedor" entre m\u00e1s de 5.000 participantes.',
      },
      {
        title:
          'Medalla de Bronce \u2014 Olimpiada Brasile\u00f1a de Matem\u00e1ticas (OBMEP)',
        description:
          '3er Lugar Nacional en una de las competencias acad\u00e9micas m\u00e1s disputadas de Brasil.',
      },
      {
        title:
          '1er Lugar \u2014 Olimpiadas Regionales de Matem\u00e1ticas (4 a\u00f1os consecutivos)',
        description: 'Campe\u00f3n consecutivo de 2014 a 2017.',
      },
    ],
  },
  contact: {
    label: 'Contacto',
    headingPrefix: '\u00bf',
    headingSuffix: 'Hablamos?',
    description:
      '\u00bfInteresado en trabajar juntos o tienes alguna pregunta? Cont\u00e1ctame por cualquiera de los canales a continuaci\u00f3n.',
    ctaTitle: '\u00bfListo para iniciar un proyecto?',
    ctaDescription:
      'Siempre estoy abierto a discutir nuevas oportunidades, proyectos interesantes y alianzas.',
    sendEmail: 'Enviar Email',
  },
  footer: {
    builtWith: 'Hecho con',
    using: 'usando Next.js, NestJS & tRPC',
  },
};

/* ================================================================== */
/*  EXPORTS                                                            */
/* ================================================================== */
export const translations: Record<Locale, Translations> = { en, pt, es };

export const localeNames: Record<Locale, string> = {
  en: 'English',
  pt: 'Portugu\u00eas',
  es: 'Espa\u00f1ol',
};

export const localeFlags: Record<Locale, string> = {
  en: '\ud83c\uddfa\ud83c\uddf8',
  pt: '\ud83c\udde7\ud83c\uddf7',
  es: '\ud83c\uddea\ud83c\uddf8',
};
