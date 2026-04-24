export default defineNuxtConfig({
  compatibilityDate: '2026-04-24',
  devtools: { enabled: true },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/DevByAntony/',
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      title: 'DevByAntony | Full Stack Developer',
      meta: [
        {
          name: 'description',
          content:
            'Desarrollo webs y sistemas full stack para negocios que necesitan producto, velocidad y presencia profesional.'
        },
        { name: 'theme-color', content: '#050807' },
        { property: 'og:title', content: 'DevByAntony | Full Stack Developer' },
        {
          property: 'og:description',
          content:
            'Webs profesionales, sistemas internos y dashboards con una experiencia visual premium.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/DevByAntony/hero-tech-noir.webp' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/DevByAntony/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})
