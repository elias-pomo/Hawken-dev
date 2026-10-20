// Textos de las secciones de la home. Lo que falta confirmar lleva `pendiente: true`:
// se ve en desarrollo y no se publica.

export const servicios = [
  { antes: 'Anotás los turnos en un cuaderno y contestás mensaje por mensaje', clave: 'Turnos online', resto: 'que se reservan solos', tipo: 'Sistema' },
  { antes: 'Te enterás de que no queda stock cuando un cliente lo pide', clave: 'Stock', resto: 'que se descuenta con cada venta', tipo: 'Sistema' },
  { antes: 'Mandás fotos y precios de cada producto por WhatsApp a cada persona que pregunta', clave: 'Tienda online', resto: 'con tu catálogo y el pedido armado', tipo: 'Tienda' },
  { antes: 'Armás cada presupuesto a mano en una planilla', clave: 'Cotizador', resto: 'que da el total al instante', tipo: 'Sistema' },
  { antes: 'Si te buscan en Google, no aparecés', clave: 'Landing', resto: 'que explica qué hacés y lleva a escribirte', tipo: 'Landing' },
];

export const garantias = [
  { titulo: 'Precio por escrito', texto: 'Antes de arrancar te paso qué incluye, cuánto sale y cuándo está listo. Sin sorpresas a mitad de camino.' },
  { titulo: 'Hecho para el celular', texto: 'Casi todos tus clientes van a entrar desde el teléfono, así que se diseña primero para ahí.' },
  { titulo: 'Hablás conmigo', texto: 'Sin intermediarios: quien te atiende es quien lo programa.' },
];

export const pasos = [
  { titulo: 'Charlamos', texto: 'Me contás cómo trabaja tu negocio hoy y qué te quita tiempo.' },
  { titulo: 'Propuesta', texto: 'Te paso por escrito qué incluye, el precio y el plazo.' },
  { titulo: 'Lo armo', texto: 'Te muestro avances y lo ajustamos antes de publicarlo.' },
  { titulo: 'Online', texto: 'Lo publicamos y te explico cómo usarlo.', pendiente: 'Confirmar qué soporte das después de publicar' },
];

export const preguntas: { pregunta: string; respuesta: string; pendiente?: true }[] = [
  { pregunta: '¿Cuánto sale?', respuesta: 'Depende de qué necesites. Se paga en dos partes: un pago inicial por armarlo y un abono mensual que cubre el hosting, el dominio y los cambios chicos. Te paso el número por escrito antes de arrancar.' },
  { pregunta: '¿Cuánto tarda?', respuesta: 'Entre 1 y 3 semanas. Una landing es lo más rápido; un sistema de turnos o de stock lleva más. El plazo exacto va escrito en la propuesta.' },
  { pregunta: '¿Trabajás solo en Tucumán?', respuesta: 'No. Estoy en Tucumán, pero trabajo online para todo el país.' },
  { pregunta: '¿Qué pasa después de publicar?', respuesta: 'Confirmar qué soporte das después de publicar (el abono incluye soporte y cambios chicos según tu nota de precios).', pendiente: true },
  { pregunta: '¿Necesito tener dominio y hosting?', respuesta: 'Podemos trabajar con tu dominio propio. Si no tenés, lo gestiono yo.' },
];

// Templates: producto aparte (templates.hawkendev.com) para quienes hacen webs.
const TEMPLATES_URL = 'https://templates.hawkendev.com/';

export const templates = {
  url: TEMPLATES_URL,
  demos: `${TEMPLATES_URL}packs/fitness/`,
  lead: '¿Hacés webs? Armo packs de 10 landings por rubro para diseñadores y desarrolladores. Comprás el pack una vez y las adaptás para cada cliente.',
  datos: [
    { valor: '10', texto: 'landings por pack' },
    { valor: '6', texto: 'rubros en camino' },
    { valor: '2', texto: 'idiomas: español e inglés' },
  ],
  puntos: [
    { titulo: 'Ninguna es la misma con otro color', texto: 'Cada landing tiene su tipografía, su paleta y su estructura.' },
    { titulo: 'Una sección firma por negocio', texto: 'Timer de round, reserva de canchas, respiración guiada: algo que solo tiene sentido en ese rubro.' },
    { titulo: 'HTML y Tailwind, sin build', texto: 'Se abren con doble clic y se publican en cualquier hosting.' },
    { titulo: 'Licencia comercial', texto: 'Usalas en todos tus proyectos y en los de tus clientes.' },
  ],
  muestras: [
    { imagen: 'boxeo', nombre: 'Black Ring, boxeo', ruta: '06-boxeo/' },
    { imagen: 'padel', nombre: 'Punto de Oro, club de pádel', ruta: '08-padel/' },
    { imagen: 'yoga', nombre: 'Alma, yoga y pilates', ruta: '03-yoga/' },
  ],
};
