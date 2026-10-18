// Textos de las secciones de la home. Lo que falta confirmar lleva `pendiente: true`:
// se ve en desarrollo y no se publica.

export const ticker = ['Landing pages', 'Tiendas online', 'Turnos', 'Stock', 'Ventas', 'Presupuestos', 'Facturas'];

export const servicios = [
  { antes: 'Anotás los turnos en un cuaderno y contestás mensaje por mensaje', clave: 'Turnos online', resto: 'que se reservan solos', tipo: 'Sistema' },
  { antes: 'Te enterás de que no queda stock cuando un cliente lo pide', clave: 'Stock', resto: 'que se descuenta con cada venta', tipo: 'Sistema' },
  { antes: 'Mandás fotos y precios por WhatsApp a cada persona que pregunta', clave: 'Tienda online', resto: 'con tu catálogo y el pedido armado', tipo: 'Tienda' },
  { antes: 'Armás cada presupuesto a mano en una planilla', clave: 'Cotizador', resto: 'que da el total al instante', tipo: 'Sistema' },
  { antes: 'Si te buscan en Google, no aparecés', clave: 'Landing', resto: 'que explica qué hacés y lleva a escribirte', tipo: 'Landing' },
];

export const garantias = [
  { titulo: 'Precio por privado', texto: 'Depende del tamaño del proyecto. Contame qué necesitás y te lo paso.' },
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
  { pregunta: '¿Cuánto sale?', respuesta: 'Depende del tamaño del proyecto. Contame qué necesitás y te paso el precio por privado.' },
  { pregunta: '¿Cuánto tarda?', respuesta: 'Confirmar: un plazo típico para una landing y otro para un sistema.', pendiente: true },
  { pregunta: '¿Trabajás solo en Tucumán?', respuesta: 'No. Estoy en Tucumán, pero trabajo online para todo el país.' },
  { pregunta: '¿Necesito tener dominio y hosting?', respuesta: 'Confirmar: si lo gestiona el cliente o va incluido en el servicio.', pendiente: true },
];
