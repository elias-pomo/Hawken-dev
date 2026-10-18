# HawkenWeb

Landing y portafolio de **Hawken | Webs y sistemas** (Elias). Astro 7, sin Tailwind, CSS propio con los tokens de la marca.

- Repo: https://github.com/elias-pomo/Hawken-dev (rama `main`).
- Maqueta aprobada (v2): https://claude.ai/artifact/HGnMGcqCM8mVKY8WaNCG46. Es la referencia visual: hay que copiar su CSS y su estructura.
- Sistema de diseño: https://claude.ai/artifact/MkaELWRqxMAqzFHn6Bif4Z
- Plan: `C:\Users\elias\.claude\plans\si-corrije-el-nombre-graceful-acorn.md`

## Reglas
- El commit y el push los hace Elias.
- Los textos van en español rioplatense, con voseo. No inventar datos de clientes: lo que falte confirmar va como `{ texto, pendiente: true }` y se muestra solo en desarrollo.
- Mobile first: revisar a 360, 390, 768 y 1280 px.
- El contenido va en `src/config/site.ts` y `src/content/proyectos/*.md`, no en los componentes.
- Hosting: Cloudflare Pages o Netlify. Vercel Hobby no permite uso comercial.

## Estructura
- `src/config/site.ts` (contacto, WhatsApp, nav) y `src/config/home.ts` (textos de la home).
- `src/content/proyectos/*.md`: un archivo por proyecto. El nombre del archivo es la URL (`/proyectos/<nombre>/`) y `orden` define la posición en la home.
- `src/components/`:
  - `Hero` (con la demo de turnos en JS), `Ticker`, `ProjectRow`, `Servicios`, `Proceso`, `SobreMi`, `Preguntas` y `Cta`;
  - los chicos: `Kicker`, `Tag` y `Pendiente`;
  - `phone/Phone.astro` (marco de celular: con `imagen` muestra una captura; sin ella, el contenido del slot, como la demo del hero);
  - `WhatsAppFlotante` (botón fijo en el celular).
- `src/scripts/origen.ts`: agrega el origen de la visita (`?ref=`) al mensaje de WhatsApp.
- `src/assets/`: capturas y foto. Antes de commitear, sacar las que muestran datos personales.
- `src/pages/`: `index`, `proyectos/[slug]` y `404`.
- Pendientes: `{ texto, pendiente: true }` en el contenido o `pendiente: true` en `home.ts`. Se ven solo con `npm run dev`. Si todo el "antes" de un caso está pendiente, en producción esa columna se oculta.

## Estado (18/10/2026)
**Hecho**
- La home, las 3 páginas de caso y la 404 están armadas según la maqueta v2.
- Capturas reales en las tarjetas, el hero de cada caso y la galería. La foto de Elias va en "Sobre mí".
- Imagen para compartir: `public/og.png` (1200×630). Se publica solo si está `SITE_URL` definido (ver `astro.config.mjs`).
- Origen en WhatsApp: con `?ref=ig`, `?ref=wa`, `?ref=qr` o `?ref=google`, el mensaje precargado dice de dónde viene la persona (`src/scripts/origen.ts`).
- Botón de WhatsApp fijo en el celular (`WhatsAppFlotante.astro`).
- "Siguiente proyecto" al final de cada caso, y lugar para el testimonio (`caso.testimonio`, con `pendiente: true` mientras no haya una frase real).
- Íconos de iPhone y Android y `site.webmanifest`.
- `public/_headers` con seguridad y caché para Cloudflare Pages.
- Demo del hero accesible: anuncia cada paso, mueve el foco y las horas ocupadas se escuchan como "ocupado".

**Falta**
1. Deploy en Cloudflare Pages (build `npm run build`, salida `dist`) con la variable `SITE_URL` = dominio.
2. Activar Web Analytics en el panel de Cloudflare Pages (no requiere código).
3. Frases reales de Martín y Fernanda para el testimonio. Confirmar el "antes" de Martega's.
4. Capturas de Luxury y Box Club en mayor resolución (miden ~330 px de ancho y en pantallas 2x se ven blandas).
5. Pasar Lighthouse en mobile (objetivo ≥95).

## Datos a confirmar con Elias
- El "antes" de Martega's, con Martín.
- Una frase de testimonio de Martín y otra de Fernanda, con permiso para publicarlas.
- Qué soporte hay después de publicar (paso 4 del proceso).
- El link de la demo de Agendapp y el deploy de Box Club. Son tareas aparte.
- Si existe el "cuaderno de stock".
