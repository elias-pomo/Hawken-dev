// Datos de contacto y textos que se repiten en todo el sitio.

const WHATSAPP_NUMBER = '5493813010829';

export const site = {
  name: 'Hawken',
  tagline: 'Webs y sistemas',
  title: 'Hawken | Webs y sistemas para negocios de Tucumán',
  description:
    'Webs, tiendas online y sistemas de turnos, stock y ventas para negocios de Tucumán. Trabajo online para todo el país.',
  owner: 'Elias',
  city: 'San Miguel de Tucumán',
  region: 'Tucumán',
  country: 'AR',
  siteUrl: 'https://hawkendev.com/',
  instagram: 'https://www.instagram.com/hawken.dev',
  instagramHandle: '@hawken.dev',
  whatsappDisplay: '+54 9 381 301-0829',
  defaultMessage: 'Hola Elias, vi tu web y quiero consultar por ',
};

export const whatsappLink = (message: string = site.defaultMessage) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { href: '/#proyectos', label: 'Proyectos' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#proceso', label: 'Proceso' },
  { href: '/#preguntas', label: 'Preguntas' },
];
