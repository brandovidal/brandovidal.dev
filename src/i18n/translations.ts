export const translations = {
  es: {
    nav: {
      resume: 'Resumen',
      experience: 'Experiencia',
      projects: 'Proyectos',
      about: 'Sobre mí',
    },
    terminal: {
      whoami: 'whoami',
      role: 'cat role.txt',
      uptime: 'uptime',
      status: 'status',
      available: 'DISPONIBLE PARA TRABAJAR',
      notAvailable: 'NO DISPONIBLE',
    },
    resume: {
      role: 'AWS Developer Associate | Desarrollador Fullstack',
      experience: '+5 años de experiencia',
      description:
        'Especializado en crear aplicaciones escalables y novedosas. Fluidez full-stack a través de capas frontend, backend, cloud y data.',
    },
    about: {
      title: 'Sobre mí',
      description1:
        'Desarrollador fullstack con más de 5 años de experiencia en todo el ciclo de vida del proyecto. Me especializo en construir soluciones escalables que integran perfectamente frontend, backend, infraestructura en la nube y sistemas de datos.',
      description2:
        'Me apasionan las buenas prácticas, las pruebas, la automatización y resolver desafíos técnicos complejos. Siempre emocionado de aprender nuevas tecnologías y mejorar profesionalmente.',
      stackProficiency: 'Proficiencia en Stack',
      focusAreas: 'Áreas de Enfoque',
      focus1: 'Código limpio y mantenible con énfasis en patrones de arquitectura',
      focus2: 'Pruebas exhaustivas y prácticas de garantía de calidad',
      focus3: 'Automatización y mejoras en la experiencia del desarrollador',
      focus4: 'Construcción de sistemas que escalen en todas las capas',
    },
    stacks: {
      frontend: 'Frontend',
      backend: 'Backend',
      cloud: 'Cloud',
      data: 'Data',
      proficient: 'proficiente',
      advanced: 'avanzado',
      intermediate: 'intermedio',
    },
  },
  en: {
    nav: {
      resume: 'Resume',
      experience: 'Experience',
      projects: 'Projects',
      about: 'About',
    },
    terminal: {
      whoami: 'whoami',
      role: 'cat role.txt',
      uptime: 'uptime',
      status: 'status',
      available: 'AVAILABLE FOR WORK',
      notAvailable: 'NOT AVAILABLE',
    },
    resume: {
      role: 'AWS Developer Associate | Fullstack Developer',
      experience: '+5 years of experience',
      description:
        'Specialized in building scalable and innovative applications. Full-stack fluency across frontend, backend, cloud, and data layers.',
    },
    about: {
      title: 'About',
      description1:
        'Fullstack developer with 5+ years of experience across the entire project lifecycle. I specialize in building scalable solutions that seamlessly integrate frontend, backend, cloud infrastructure, and data systems.',
      description2:
        "I'm passionate about best practices, testing, automation, and solving complex technical challenges. Always excited to learn new technologies and improve professionally.",
      stackProficiency: 'Stack Proficiency',
      focusAreas: 'Focus Areas',
      focus1: 'Clean, maintainable code with emphasis on architecture patterns',
      focus2: 'Comprehensive testing and quality assurance practices',
      focus3: 'Automation and developer experience improvements',
      focus4: 'Building systems that scale across all layers',
    },
    stacks: {
      frontend: 'Frontend',
      backend: 'Backend',
      cloud: 'Cloud',
      data: 'Data',
      proficient: 'proficient',
      advanced: 'advanced',
      intermediate: 'intermediate',
    },
  },
};

export function useTranslations(lang: 'es' | 'en') {
  return translations[lang];
}
