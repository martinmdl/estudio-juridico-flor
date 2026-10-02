# Proyecto — Sitio web de estudio jurídico

## Objetivo

Crear un sitio institucional que transmita profesionalismo, confianza, claridad y sobriedad. Priorizar rendimiento, diseño responsive, código simple, SEO, accesibilidad, bajo consumo de datos y facilidad de mantenimiento.

## Arquitectura

Usar Next.js App Router, React y TypeScript. Mantener la arquitectura simple: páginas en `src/app/`, componentes reutilizables en `src/components/`, contenido institucional en `src/config/site.ts`, estilos globales en `src/app/globals.css` y recursos en `public/`. Preferir componentes de servidor; agregar JavaScript cliente solo cuando una interacción lo requiera.

## Diseño

Centralizar colores, tipografías, tamaños, espaciados, breakpoints, radios, sombras y ancho máximo mediante CSS Custom Properties en `src/app/globals.css`. No repetir valores visuales arbitrarios en componentes. Mantener una única fuente de verdad para la información del estudio en `src/config/site.ts`.

## Performance e imágenes

Evitar dependencias y recursos externos innecesarios. Usar HTML y CSS cuando alcancen. Optimizar las imágenes, servir tamaños apropiados y formatos AVIF/WebP cuando estén disponibles, declarar dimensiones, y aplicar carga diferida fuera del primer viewport. No incluir imágenes decorativas pesadas.

## HTML y responsive

Usar HTML semántico, un único `h1` por página y una jerarquía correcta de headings. Diseñar mobile-first para teléfonos, tablets y pantallas grandes.

## Accesibilidad

Garantizar contraste, navegación por teclado, estados hover/focus/active y texto alternativo descriptivo para imágenes informativas; usar alt vacío para imágenes decorativas. Respetar `prefers-reduced-motion`.

## SEO y GEO

Cada página debe incluir title, meta description, canonical cuando haya dominio confirmado y Open Graph. Mantener `robots.txt` y sitemap actualizados. Usar datos estructurados Schema.org solo cuando correspondan a contenido visible y verificable. Presentar con claridad quién presta cada servicio, ubicación, profesionales, jurisdicción y áreas de práctica. Crear contenido jurídico preciso, contextualizado, con autoría, fecha de actualización y fuentes cuando corresponda. No inventar datos ni prometer resultados; evitar keyword stuffing, contenido duplicado y tácticas para manipular motores generativos.

## Seguridad y privacidad

No exponer secretos ni enviar datos personales a servicios externos sin necesidad. No agregar procesamiento de formularios hasta definir validación, almacenamiento y privacidad.

## Calidad

Mantener cambios pequeños y coherentes, con nombres descriptivos. Antes de integrar, ejecutar build y lint, revisar responsive y accesibilidad básica, y ejecutar los tests existentes. No agregar dependencias sin una razón concreta.

## Datos pendientes

No presentar como reales los datos vacíos o de ejemplo. Confirmar nombre comercial, profesionales, matrícula cuando corresponda, jurisdicción, áreas, contacto, dominio y fotos antes de publicar. Tratar todo contenido legal sensible como sujeto a revisión profesional y actualización.