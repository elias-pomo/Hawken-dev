import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Pantallas dibujadas en CSS que se muestran dentro del celular (src/components/phone/).
// Se reemplazan por capturas reales cuando estén.
const pantalla = z.enum(['turnos', 'cotizador', 'clases', 'panel', 'servicio', 'horario', 'codigo']);

// Un texto puede marcarse como pendiente: se ve solo en desarrollo, nunca en el sitio publicado.
const item = z.union([z.string(), z.object({ texto: z.string(), pendiente: z.literal(true) })]);

const proyectos = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/proyectos' }),
  schema: z.object({
    nombre: z.string(),
    orden: z.number(),
    etiqueta: z.enum(['caso-real', 'demo']),
    rubro: z.string(),
    descripcion: z.string(),
    resumen: z.string(),
    placa: z.enum(['violeta', 'lima']),
    pantalla,
    datos: z.array(z.object({ valor: z.string(), texto: z.string() })).length(3),

    caso: z.object({
      titulo: z.array(z.object({ texto: z.string(), resaltado: z.boolean().default(false) })),
      bajada: z.string(),
      ficha: z.object({ rubro: z.string(), tipo: z.string(), estado: z.string() }),
      pantalla,
      antesTitulo: z.string().default('Antes'),
      antes: z.array(item),
      ahora: z.array(z.string()),
      funciones: z.array(z.object({ titulo: z.string(), texto: z.string() })),
      capturas: z.array(z.object({ pantalla, texto: z.string() })),
      stack: z.array(z.string()),
    }),

    links: z.object({
      demo: z.url().optional(),
      vivo: z.url().optional(),
      vivoAviso: z.string().optional(),
      instagram: z.url().optional(),
    }),

    cta: z.object({ titulo: z.string(), texto: z.string(), mensaje: z.string() }),
  }),
});

export const collections = { proyectos };
