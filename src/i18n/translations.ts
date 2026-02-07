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
    experience: {
      items: {
        softtek: {
          description: 'Desarrollo de diferentes iniciativas para una de las aseguradoras de seguros Rimac, lideres en el mercado peruano.',
          date: 'Dic 2024 - Actualmente',
        },
        yape: {
          description: 'Abordo proyectos transversales dia a dia, para lograr la mejor arquitectura moderna, escalable y mantenible.',
          date: 'Jul 2024 - Nov 2024',
        },
        samishop: {
          description: 'Constantemente desarrollaba funcionalidades bajo demanda en el mundo ecommerce, siempre focalizado en mejorar la experiencia del usuario final.',
          date: 'Sep 2022 - Jun 2024',
        },
        attachMedia: {
          description: 'Uso datos masivos para implementar mejoras estrategias de marketing y crecimiento de la marca.',
          date: 'Mar 2021 - Ago 2022',
        },
        repuestock: {
          description: 'Digitalizar el comercio de autopartes desarrollando la tienda online y su administrador.',
          date: 'Ago 2019 - Mar 2021',
        },
      },
    },
    projects: {
      items: {
        bittyurl: {
          description: 'Acortador de URL gratuito. Construido con tecnologías modernas para velocidad y simplicidad.',
          architecture: {
            title: 'Arquitectura',
            uiLayer: 'Capa UI',
            apiLayer: 'Capa API',
            dataLayer: 'Capa Datos',
          },
        },
      },
      labels: {
        visit: 'Visitar',
        code: 'Código',
        architecture: 'Arquitectura',
      },
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
    experience: {
      items: {
        softtek: {
          description: 'Developing different initiatives for Rimac, one of the leading insurance companies in the Peruvian market.',
          date: 'Dec 2024 - Present',
        },
        yape: {
          description: 'Tackling cross-functional projects daily to achieve the best modern, scalable, and maintainable architecture.',
          date: 'Jul 2024 - Nov 2024',
        },
        samishop: {
          description: 'Constantly developing on-demand features in the ecommerce world, always focused on improving the end-user experience.',
          date: 'Sep 2022 - Jun 2024',
        },
        attachMedia: {
          description: 'Using massive data to implement improved marketing strategies and brand growth.',
          date: 'Mar 2021 - Aug 2022',
        },
        repuestock: {
          description: 'Digitalizing auto parts commerce by developing the online store and its admin panel.',
          date: 'Aug 2019 - Mar 2021',
        },
      },
    },
    projects: {
      items: {
        bittyurl: {
          description: 'Free URL shortener. Built with modern technologies for speed and simplicity.',
          architecture: {
            title: 'Architecture',
            uiLayer: 'UI Layer',
            apiLayer: 'API Layer',
            dataLayer: 'Data Layer',
          },
        },
      },
      labels: {
        visit: 'Visit',
        code: 'Code',
        architecture: 'Architecture',
      },
    },
  },
};

export function useTranslations(lang: 'es' | 'en') {
  return translations[lang];
}
