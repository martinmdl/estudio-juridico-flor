# Estudio Jurídico Flor

Sitio institucional en Next.js App Router, React y TypeScript. La primera versión prioriza contenido renderizado en servidor, CSS nativo y una estructura simple.

## Requisitos

- Node.js 20.9 o superior
- npm

## Desarrollo

```bash
npm install
npm run dev
```

Abrí http://localhost:3000.

## Estructura

- `src/app/`: páginas, layout y archivos SEO
- `src/components/`: componentes compartidos del sitio
- `src/config/site.ts`: contenido y datos del estudio
- `src/app/globals.css`: tokens visuales y estilos responsivos
- `public/images/`: imágenes optimizadas del estudio

Antes de publicar, completar y verificar los datos de contacto, profesionales, jurisdicción, áreas de práctica, dominio y fotografías. No presentar como reales los valores de ejemplo.

## Diseño y contenido

Los colores, tipografías, espaciados y demás decisiones visuales globales viven en `src/app/globals.css`. La información institucional vive en `src/config/site.ts` para evitar duplicarla en componentes.
