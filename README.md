# Martinez - Estudio Juridico

Sitio institucional en Next.js App Router, React y TypeScript. La primera versión usa componentes de servidor, CSS nativo y una estructura simple.

## Desarrollo

Requiere Node.js 20.9 o superior y npm.

```bash
npm install
npm run dev
```

Abrí http://localhost:3000.

## Contenido y diseño

- `src/config/site.ts`: nombre, correo, profesionales y áreas de práctica.
- `src/config/faq.ts`: preguntas frecuentes.
- `src/app/globals.css`: paleta, tipografías, tamaños y demás tokens visuales.
- `public/logo-martinez.svg`: logo vectorial optimizado.
- `src/app/`: páginas y metadatos.

El correo publicado es `floorr.martinez.21@gmail.com`. Antes de publicar, confirmar textos institucionales, profesionales, áreas de práctica, ubicación, dominio y fotografías. Las fotos de profesionales deben colocarse en `public/images/`, optimizadas, con las rutas configuradas en `src/config/site.ts`.

## SEO

Configurar `NEXT_PUBLIC_SITE_URL` con el dominio final para habilitar las URLs canónicas y el sitemap. Ver `.env.example`.

## Calidad

```bash
npm run lint
npm run build
```

La página de contacto usa `mailto:`. Un formulario que envíe correos automáticamente requiere un servicio de formularios o una función del servidor con credenciales protegidas.
