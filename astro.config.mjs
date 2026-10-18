// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // URL pública del sitio: la usan la URL canónica y la imagen de Open Graph (la vista previa al compartir por WhatsApp).
  // Para probar en otra dirección (por ejemplo, el *.pages.dev de Cloudflare), se puede pisar con la variable SITE_URL.
  // Dirección principal: con www (la sin www redirige acá desde Cloudflare). Coincide con `siteUrl` de src/config/site.ts.
  site: process.env.SITE_URL ?? 'https://www.hawkendev.com',
});
