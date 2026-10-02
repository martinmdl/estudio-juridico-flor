# Martinez - Estudio Juridico

Sitio institucional estático en Next.js App Router, React y TypeScript. La portada reúne las secciones del estudio, áreas, equipo y preguntas frecuentes. Contacto vive en `/contacto`.

## Desarrollo

Requiere Node.js 20.9 o superior y npm.

```bash
npm install
npm run dev
```

Abrí http://localhost:3000. El formulario aparece deshabilitado en desarrollo hasta que se configure un servicio de envío.

## Contenido y diseño

- `src/config/site.ts`: nombre, correo, profesionales y áreas de práctica.
- `src/config/faq.ts`: preguntas frecuentes.
- `src/app/globals.css`: paleta, tipografías, tamaños y demás tokens visuales.
- `public/logo-martinez.svg`: logo vectorial optimizado.
- `src/app/`: páginas y metadatos.

El correo publicado es `floorr.martinez.21@gmail.com`. Antes de publicar, confirmar textos institucionales, profesionales, ubicación y dominio. La primera foto de Equipo fue aportada por el estudio y está optimizada en `public/images/team-flor.webp`. La segunda foto y los perfiles siguen pendientes; completarlos en `src/config/site.ts` antes de publicar.

## Formulario de contacto

En Netlify, `public/contact-form.html` permite detectar el formulario `contacto` durante el despliegue. La página `/contacto` envía los campos a `/contact-form.html` mediante POST en formato `application/x-www-form-urlencoded`. Una vez desplegado:

1. Confirmar que el formulario `contacto` aparece en **Forms** de Netlify.
2. En **Forms > Submission notifications**, crear una notificación por email para `floorr.martinez.21@gmail.com`.
3. Enviar una consulta de prueba desde el sitio publicado y confirmar que llega al correo.

En otro proveedor, definir `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` con la URL pública de un servicio de formularios que acepte POST `application/x-www-form-urlencoded` con los campos `form-name`, `name`, `email`, `area` y `message`. Configurar el destinatario en ese proveedor. No colocar claves privadas en variables `NEXT_PUBLIC_*`.

El sitio no almacena las consultas. La entrega real depende del proveedor elegido y su configuración. El email directo sigue disponible como alternativa.

## SEO

Configurar `NEXT_PUBLIC_SITE_URL` con el dominio final para habilitar las URLs canónicas y el sitemap. Ver `.env.example`.

## Calidad

```bash
npm run lint
npm run build
```
