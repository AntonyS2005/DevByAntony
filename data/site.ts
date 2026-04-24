import {
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  Mail,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap
} from 'lucide-vue-next'

export const site = {
  name: 'DevByAntony',
  role: 'Full Stack Developer',
  email: 'contacto@devbyantony.com',
  cvPath: '/cv-antony.pdf',
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/AntonyS2005',
      icon: Github
    },
    {
      label: 'Email',
      href: 'mailto:contacto@devbyantony.com',
      icon: Mail
    }
  ],
  hero: {
    eyebrow: 'Webs, sistemas y producto digital',
    title: 'Creo webs y sistemas que convierten ideas en producto.',
    intro:
      'Soy Antony, desarrollador full stack enfocado en Vue y Nuxt. Diseño interfaces con presencia y conecto backend en C# o Java con PostgreSQL, MongoDB, Oracle 21c y Docker para que tu negocio tenga una plataforma seria desde el primer clic.',
    primaryCta: 'Hablemos por email',
    secondaryCta: 'Ver proyectos'
  },
  metrics: [
    { value: 'Vue', label: 'interfaz principal' },
    { value: 'C# / Java', label: 'backend sólido' },
    { value: 'Docker', label: 'entrega limpia' }
  ],
  performance: [
    { label: 'Frontend', value: 'Nuxt + Vue', detail: 'Interfaz rápida, responsive, SEO y experiencia cuidada.' },
    { label: 'Backend', value: 'C# + Java', detail: 'APIs, reglas de negocio e integraciones mantenibles.' },
    { label: 'Datos', value: 'Postgres + Mongo + Oracle', detail: 'Persistencia pensada según el tipo de sistema.' },
    { label: 'Entrega', value: 'Docker + GitHub', detail: 'Builds reproducibles y base lista para publicar.' }
  ],
  modes: [
    {
      id: 'frontend',
      label: 'Frontend',
      title: 'Interfaz principal en Vue/Nuxt',
      summary:
        'Interfaces que no se sienten improvisadas: navegación clara, estados cuidados, buen responsive y una primera impresión fuerte.',
      spec: 'Vue · Nuxt · TypeScript',
      output: 'Landing, dashboard, portal o sistema web',
      points: ['Componentes reutilizables', 'SEO y performance', 'UX lista para conversión']
    },
    {
      id: 'backend',
      label: 'Backend',
      title: 'Núcleo de negocio en C# o Java',
      summary:
        'APIs y servicios con estructura para crecer: autenticación, reglas de negocio, integraciones y endpoints claros.',
      spec: 'C# · Java · REST',
      output: 'Servicios, panel admin y lógica operacional',
      points: ['Arquitectura mantenible', 'Validaciones y seguridad', 'Integraciones limpias']
    },
    {
      id: 'data',
      label: 'Datos',
      title: 'Capa de datos seria',
      summary:
        'Elijo la base según el problema: PostgreSQL para consistencia, MongoDB para flexibilidad y Oracle 21c para entornos robustos.',
      spec: 'PostgreSQL · MongoDB · Oracle 21c',
      output: 'Modelos, consultas, reportes y persistencia',
      points: ['Modelado de entidades', 'Consultas eficientes', 'Datos listos para crecer']
    },
    {
      id: 'deploy',
      label: 'Deploy',
      title: 'Entrega lista para producción',
      summary:
        'Docker y GitHub para que el proyecto no se quede en “funciona en mi máquina”, sino que llegue a producción con orden.',
      spec: 'Docker · GitHub · Pages',
      output: 'Build estático, contenedor o despliegue guiado',
      points: ['Build reproducible', 'Documentación clara', 'Base para mantenimiento']
    }
  ],
  services: [
    {
      icon: Globe2,
      title: 'Webs profesionales',
      description:
        'Landing pages y sitios corporativos con buena narrativa, rendimiento y diseño memorable.'
    },
    {
      icon: Workflow,
      title: 'Sistemas internos',
      description:
        'Paneles, flujos de trabajo y módulos administrativos conectados a datos reales.'
    },
    {
      icon: Layers3,
      title: 'Dashboards y portales',
      description:
        'Interfaces para visualizar datos, gestionar clientes, controlar procesos y tomar decisiones.'
    },
    {
      icon: ServerCog,
      title: 'APIs y backend',
      description:
        'Servicios en C# o Java con PostgreSQL, MongoDB, Oracle 21c y contenedores Docker.'
    }
  ],
  projects: [
    {
      title: 'Sistema de gestión comercial',
      type: 'Dashboard full stack',
      description:
        'Panel para administrar clientes, pedidos y métricas operativas desde una sola experiencia.',
      stack: ['Vue', 'C#', 'PostgreSQL', 'Docker'],
      link: 'https://github.com/AntonyS2005',
      impact: 'Menos tareas manuales, más control del negocio.'
    },
    {
      title: 'Landing premium para servicios',
      type: 'Web de conversión',
      description:
        'Página enfocada en vender una oferta clara con diseño oscuro, CTA directo y estructura SEO.',
      stack: ['Nuxt', 'CSS', 'SEO', 'GitHub Pages'],
      link: 'https://github.com/AntonyS2005',
      impact: 'Presencia profesional lista para campañas y contacto.'
    },
    {
      title: 'Portal administrativo',
      type: 'Sistema web',
      description:
        'Base de aplicación con login, tablas, formularios y arquitectura lista para crecer.',
      stack: ['Nuxt', 'Java', 'Oracle 21c', 'MongoDB'],
      link: 'https://github.com/AntonyS2005',
      impact: 'Estructura mantenible para equipos y clientes.'
    }
  ],
  showcase: [
    {
      number: '01',
      title: 'Arquitectura que se entiende',
      text: 'Flujos, componentes, endpoints y datos organizados para que el sistema pueda crecer.'
    },
    {
      number: '02',
      title: 'Interfaz con presencia',
      text: 'Pantallas actuales, responsive y enfocadas en que el usuario avance sin perderse.'
    },
    {
      number: '03',
      title: 'Entrega sin drama',
      text: 'Build, deploy, assets y documentación preparados para publicar y mantener.'
    }
  ],
  stack: [
    { icon: Code2, label: 'Frontend', items: ['Vue', 'Nuxt', 'TypeScript', 'CSS moderno'] },
    { icon: ServerCog, label: 'Backend', items: ['C#', 'Java', 'APIs REST', 'Servicios'] },
    { icon: Database, label: 'Bases de datos', items: ['PostgreSQL', 'MongoDB', 'Oracle 21c', 'Modelado'] },
    { icon: Rocket, label: 'Entrega', items: ['Docker', 'GitHub', 'Deploy', 'Performance'] }
  ],
  process: [
    {
      step: '01',
      title: 'Diagnóstico',
      description: 'Definimos objetivo, usuario, contenido y las partes críticas del sistema.'
    },
    {
      step: '02',
      title: 'Diseño técnico',
      description: 'Organizo estructura, pantallas, datos y experiencia antes de construir.'
    },
    {
      step: '03',
      title: 'Desarrollo',
      description: 'Construyo Nuxt/Vue, backend en C# o Java, bases de datos e integraciones con entregas claras.'
    },
    {
      step: '04',
      title: 'Entrega',
      description: 'Publico, reviso responsive, documento lo importante y dejo base para crecer.'
    }
  ],
  strengths: [
    { icon: ShieldCheck, text: 'Código ordenado y pensado para mantenimiento.' },
    { icon: Sparkles, text: 'Diseño visual cuidado, no solo “funciona y ya”.' },
    { icon: Zap, text: 'Entrega práctica: foco en negocio, velocidad y claridad.' }
  ],
  externalLinkIcon: ExternalLink
}
