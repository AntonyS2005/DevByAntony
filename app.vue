<script setup lang="ts">
import {
  Activity,
  ArrowRight,
  Box,
  ChevronRight,
  Cpu,
  Download,
  Gauge,
  Mail,
  Menu,
  MousePointer2,
  Terminal,
  X
} from 'lucide-vue-next'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { site } from './data/site'

const navItems = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Demo', href: '#demo' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' }
]

const isMenuOpen = ref(false)
const activeMode = ref(site.modes[0].id)
const pointerX = ref(50)
const pointerY = ref(36)
const parallaxY = ref(0)
const scrollProgress = ref(0)
const mailHref = computed(() => `mailto:${site.email}`)
const baseURL = useRuntimeConfig().app.baseURL
const assetPath = (path: string) => `${baseURL}${path.replace(/^\/+/, '')}`
const activeSpec = computed(() => site.modes.find((mode) => mode.id === activeMode.value) ?? site.modes[0])
const shellStyle = computed(() => ({
  '--cursor-x': `${pointerX.value}%`,
  '--cursor-y': `${pointerY.value}%`,
  '--parallax-y': `${parallaxY.value}px`,
  '--scroll-progress': `${scrollProgress.value}`
}))

const closeMenu = () => {
  isMenuOpen.value = false
}

const updateScrollProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = scrollable > 0 ? window.scrollY / scrollable : 0
  parallaxY.value = Math.min(window.scrollY, 1600)
}

const updatePointer = (event: PointerEvent) => {
  pointerX.value = (event.clientX / window.innerWidth) * 100
  pointerY.value = (event.clientY / window.innerHeight) * 100
}

onMounted(() => {
  updateScrollProgress()
  window.addEventListener('scroll', updateScrollProgress, { passive: true })
  window.addEventListener('pointermove', updatePointer, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollProgress)
  window.removeEventListener('pointermove', updatePointer)
})
</script>

<template>
  <div class="site-shell" :style="shellStyle">
    <div class="scroll-meter" aria-hidden="true" />
    <div class="parallax-field" aria-hidden="true">
      <span class="parallax-layer layer-back" />
      <span class="parallax-layer layer-mid" />
      <span class="parallax-layer layer-front" />
    </div>
    <header class="nav-shell" :class="{ 'is-open': isMenuOpen }">
      <a class="brand" href="#top" aria-label="Ir al inicio" @click="closeMenu">
        <span class="brand-mark">DBA</span>
        <span>{{ site.name }}</span>
      </a>

      <nav class="desktop-nav" aria-label="Navegación principal">
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>

      <a class="nav-cta" :href="mailHref">
        <Mail :size="18" aria-hidden="true" />
        Email
      </a>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Abrir menú"
        @click="isMenuOpen = !isMenuOpen"
      >
        <X v-if="isMenuOpen" :size="22" aria-hidden="true" />
        <Menu v-else :size="22" aria-hidden="true" />
      </button>

      <nav id="mobile-menu" class="mobile-nav" aria-label="Navegación móvil">
        <a v-for="item in navItems" :key="item.href" :href="item.href" @click="closeMenu">
          {{ item.label }}
        </a>
        <a :href="mailHref" @click="closeMenu">Escribir email</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero-section section-grid" aria-labelledby="hero-title">
        <div class="hero-copy reveal">
          <p class="eyebrow">{{ site.hero.eyebrow }}</p>
          <h1 id="hero-title">{{ site.role }}</h1>
          <h2>{{ site.hero.title }}</h2>
          <p class="hero-intro">{{ site.hero.intro }}</p>

          <div class="hero-actions">
            <a class="button primary" :href="mailHref">
              <Mail :size="19" aria-hidden="true" />
              {{ site.hero.primaryCta }}
            </a>
            <a class="button secondary" href="#proyectos">
              <MousePointer2 :size="19" aria-hidden="true" />
              {{ site.hero.secondaryCta }}
            </a>
          </div>

          <dl class="metrics">
            <div v-for="metric in site.metrics" :key="metric.label">
              <dt>{{ metric.value }}</dt>
              <dd>{{ metric.label }}</dd>
            </div>
          </dl>

          <div class="launch-ribbon" aria-label="Stack principal">
            <span>Stack principal</span>
            <strong>Vue/Nuxt · C#/Java · PostgreSQL · MongoDB · Oracle 21c · Docker</strong>
          </div>
        </div>

        <div class="hero-visual reveal delay-1" aria-label="Ambiente tech noir DevByAntony">
          <img :src="assetPath('/hero-tech-noir.webp')" alt="Estación de desarrollo con estética tech noir" />
          <div class="runway-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div class="terminal-card">
            <span>deploy.status</span>
            <strong>production-ready</strong>
          </div>
          <div class="signal-card">
            <span>API</span>
            <strong>online</strong>
          </div>
          <div class="boost-card">
            <span>build.power</span>
            <strong>full-stack tuned</strong>
          </div>
        </div>
      </section>

      <section class="performance-band full-bleed" aria-label="Resumen de rendimiento">
        <div class="performance-inner">
          <div class="performance-title">
            <p class="eyebrow">Stack en capas</p>
            <h2>Tu idea se divide en interfaz, backend, datos y entrega.</h2>
          </div>
          <div class="performance-grid">
            <article v-for="item in site.performance" :key="item.label" class="performance-card">
              <span>{{ item.label }}</span>
              <strong>{{ item.value }}</strong>
              <p>{{ item.detail }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="servicios" class="content-section" aria-labelledby="services-title">
        <div class="section-heading">
          <p class="eyebrow">Servicios</p>
          <h2 id="services-title">Construyo la parte visible y la parte que sostiene el negocio.</h2>
        </div>
        <div class="service-grid">
          <article v-for="service in site.services" :key="service.title" class="service-card">
            <component :is="service.icon" :size="26" aria-hidden="true" />
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </article>
        </div>
      </section>

      <section id="demo" class="content-section demo-section" aria-labelledby="demo-title">
        <div class="section-heading">
          <p class="eyebrow">Demo de capacidad</p>
          <h2 id="demo-title">Cada parte del stack tiene propósito y se muestra sin adornos innecesarios.</h2>
        </div>

        <div class="mode-console">
          <div class="mode-tabs" role="tablist" aria-label="Modos de stack">
            <button
              v-for="mode in site.modes"
              :key="mode.id"
              type="button"
              role="tab"
              :aria-selected="activeMode === mode.id"
              :class="{ active: activeMode === mode.id }"
              @click="activeMode = mode.id"
            >
              {{ mode.label }}
            </button>
          </div>

          <div class="mode-stage">
            <div class="mode-visual" aria-hidden="true">
              <div class="gauge-ring">
                <Gauge :size="42" />
                <span>{{ activeSpec.label }}</span>
              </div>
              <div class="telemetry-stack">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div class="mode-copy">
              <p class="mode-spec">{{ activeSpec.spec }}</p>
              <h3>{{ activeSpec.title }}</h3>
              <p>{{ activeSpec.summary }}</p>
              <strong>{{ activeSpec.output }}</strong>
              <ul>
                <li v-for="point in activeSpec.points" :key="point">
                  <ChevronRight :size="16" aria-hidden="true" />
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" class="content-section project-section" aria-labelledby="projects-title">
        <div class="section-heading">
          <p class="eyebrow">Proyectos reales</p>
          <h2 id="projects-title">Casos que muestran cómo pienso: producto, código y entrega.</h2>
        </div>
        <div class="project-grid">
          <article v-for="project in site.projects" :key="project.title" class="project-card">
            <div class="project-topline">
              <span>{{ project.type }}</span>
              <a :href="project.link" target="_blank" rel="noreferrer" :aria-label="`Abrir ${project.title}`">
                <component :is="site.externalLinkIcon" :size="18" aria-hidden="true" />
              </a>
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <strong>{{ project.impact }}</strong>
            <div class="project-meter" aria-hidden="true">
              <span />
            </div>
            <div class="tags" aria-label="Tecnologías usadas">
              <span v-for="item in project.stack" :key="item">{{ item }}</span>
            </div>
          </article>
        </div>
      </section>

      <section class="showcase-section full-bleed" aria-labelledby="showcase-title">
        <div class="showcase-inner">
          <div class="showcase-visual">
            <img :src="assetPath('/architecture-parallax.webp')" alt="Arquitectura digital en capas con telemetría" />
            <div class="showcase-hud">
              <Activity :size="18" aria-hidden="true" />
              <span>capas sincronizadas</span>
            </div>
          </div>
          <div class="showcase-copy">
            <p class="eyebrow">Arquitectura visual</p>
            <h2 id="showcase-title">El impacto visual debe explicar orden, no solo decorar la pantalla.</h2>
            <div class="showcase-list">
              <article v-for="item in site.showcase" :key="item.number">
                <span>{{ item.number }}</span>
                <div>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.text }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" class="content-section stack-band" aria-labelledby="stack-title">
        <div class="section-heading compact">
          <p class="eyebrow">Stack</p>
          <h2 id="stack-title">Tecnología para sacar ideas del “algún día”.</h2>
        </div>
        <div class="stack-grid">
          <article v-for="group in site.stack" :key="group.label" class="stack-card">
            <component :is="group.icon" :size="25" aria-hidden="true" />
            <h3>{{ group.label }}</h3>
            <ul>
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
        <div class="systems-row" aria-label="Capacidades técnicas">
          <article>
            <Cpu :size="22" aria-hidden="true" />
            <span>Arquitectura lista para crecer</span>
          </article>
          <article>
            <Terminal :size="22" aria-hidden="true" />
            <span>APIs y comandos claros</span>
          </article>
          <article>
            <Box :size="22" aria-hidden="true" />
            <span>Entrega con Docker</span>
          </article>
        </div>
      </section>

      <section id="proceso" class="content-section process-section" aria-labelledby="process-title">
        <div class="section-heading">
          <p class="eyebrow">Proceso</p>
          <h2 id="process-title">Trabajo con estructura para que el proyecto avance sin perder claridad.</h2>
        </div>
        <div class="process-list">
          <article v-for="item in site.process" :key="item.step" class="process-item">
            <span>{{ item.step }}</span>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </article>
        </div>
      </section>

      <section class="content-section about-section" aria-labelledby="about-title">
        <div class="about-copy">
          <p class="eyebrow">Sobre mí</p>
          <h2 id="about-title">Soy Antony, un full stack que cuida el detalle visual y la arquitectura.</h2>
          <p>
            Me gusta construir productos que se sienten profesionales desde el primer scroll:
            interfaces limpias, lógica clara, datos bien organizados y despliegues que no se rompen
            cuando llega el momento importante.
          </p>
        </div>
        <div class="strength-list">
          <article v-for="strength in site.strengths" :key="strength.text">
            <component :is="strength.icon" :size="22" aria-hidden="true" />
            <span>{{ strength.text }}</span>
          </article>
        </div>
      </section>

      <section id="contacto" class="contact-section" aria-labelledby="contact-title">
        <div>
          <p class="eyebrow">Contacto</p>
          <h2 id="contact-title">¿Tienes una web o sistema en mente?</h2>
          <p>
            Escríbeme con la idea, objetivo y fecha tentativa. Te respondo con una ruta clara para
            convertirlo en una plataforma real.
          </p>
        </div>
        <div class="contact-actions">
          <a class="button primary" :href="mailHref">
            <Mail :size="19" aria-hidden="true" />
            {{ site.email }}
            <ArrowRight :size="18" aria-hidden="true" />
          </a>
          <a class="button secondary" :href="assetPath(site.cvPath)" download>
            <Download :size="19" aria-hidden="true" />
            Descargar CV
          </a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <span>{{ site.name }} © 2026</span>
      <div>
        <a v-for="social in site.socials" :key="social.label" :href="social.href" target="_blank" rel="noreferrer">
          <component :is="social.icon" :size="18" aria-hidden="true" />
          {{ social.label }}
        </a>
      </div>
    </footer>
  </div>
</template>
