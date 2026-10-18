// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // URL pública del sitio. Hace falta para la URL canónica y para que la imagen de Open Graph
  // (la vista previa al compartir por WhatsApp) tenga dirección completa.
  // Se define con la variable SITE_URL (en Cloudflare Pages: Settings → Environment variables),
  // o se reemplaza acá por el dominio cuando esté, por ejemplo 'https://hawken.dev'.
  site: process.env.SITE_URL,
});
