# HawkenWeb

Landing y portafolio de **Hawken | Webs y sistemas**. Está hecho con Astro y genera un sitio estático, sin backend.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm install` | Instala las dependencias |
| `npm run dev` | Levanta el sitio en `localhost:4321` y muestra los textos pendientes |
| `npm run build` | Genera el sitio final en `dist/`, sin los pendientes |
| `npm run preview` | Sirve `dist/` para revisarlo antes de publicar |
| `npx astro check` | Revisa los tipos y el contenido |

## Cómo sumar un proyecto
1. Copiá un archivo de `src/content/proyectos/` con otro nombre. Ese nombre va a ser la URL.
2. Completá los campos. Si te olvidás de alguno, `npm run build` te avisa cuál falta.
3. `orden` define en qué lugar aparece en la home.

El estado del proyecto y los pendientes están en `CLAUDE.md`.
