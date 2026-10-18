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
  - `phone/` (`Phone` y `Screen`, con las pantallas dibujadas).
- `src/pages/`: `index`, `proyectos/[slug]` y `404`.
- Pendientes: `{ texto, pendiente: true }` en el contenido o `pendiente: true` en `home.ts`. Se ven solo con `npm run dev`. Si todo el "antes" de un caso está pendiente, en producción esa columna se oculta.

## Estado (17/10/2026)
**Hecho**
- La home y las 3 páginas de caso están armadas según la maqueta v2, y hay una página 404.
- `astro check` sin errores y `npm run build` genera las 5 páginas.
- Revisado a 360, 375 y 1280 px: no hay scroll horizontal y la demo de turnos funciona completa.

**Falta**
1. Capturas reales: reemplazar las pantallas dibujadas (`Screen.astro`) por imágenes con `<Image />` y sacar la etiqueta "Ilustración".
2. Foto real de Elias en `SobreMi.astro`.
3. Cuando haya dominio: poner `site` en `astro.config.mjs` (para la URL canónica y Open Graph) y crear la imagen de Open Graph de 1200×630.
4. Deploy en Cloudflare Pages: comando `npm run build`, carpeta `dist`.
5. Pasar Lighthouse en mobile (objetivo ≥95).

## Datos a confirmar con Elias
- El "antes" de Martega's (con Martín) y de Luxury (con Fernanda).
- Una foto real para "Sobre mí".
- Las respuestas de "¿Cuánto tarda?" y "¿Necesito dominio?", y el soporte después de publicar.
- El link de la demo de Agendapp y el deploy de Box Club. Son tareas aparte.
- Si existe el "cuaderno de stock".
