# DevByAntony

Landing personal en Nuxt para vender servicios full stack, mostrar proyectos reales y publicar en GitHub Pages con dominio propio.

## Setup

```bash
npm install
npm run dev
```

## Build estático para GitHub Pages

```bash
npm run generate
```

El sitio usa `app.baseURL: "/"` porque está pensado para dominio propio. Cuando tengas el dominio definitivo, copia `public/CNAME.example` a `public/CNAME` y reemplaza el contenido por tu dominio real.

## Contenido editable

Los textos, links, proyectos, servicios, stack y email principal están en `data/site.ts`.
