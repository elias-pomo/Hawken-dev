---
nombre: Luxury Eventos
orden: 2
etiqueta: caso-real
rubro: Salón de eventos · El Colmenar
descripcion: "Caso real: web con cotizador para Luxury Eventos. El cliente arma su evento, ve el total al instante y manda el pedido por WhatsApp."
resumen: Elegís el tipo de evento, los invitados y los extras, ves el total al instante y mandás el pedido armado por WhatsApp.
placa: lima
pantalla: cotizador
datos:
  - { valor: "$950.000", texto: "un 15 de 90 invitados, DJ y candy bar" }
  - { valor: 6 tipos, texto: de evento con su precio }
  - { valor: 1 mensaje, texto: el pedido llega completo }

caso:
  titulo:
    - { texto: "El presupuesto" }
    - { texto: "al instante", resaltado: true }
    - { texto: "para Luxury" }
  bajada: Un salón de eventos en El Colmenar, Tucumán, con más de 130 eventos. Los clientes arman su fiesta en la web y el pedido llega listo por WhatsApp.
  ficha: { rubro: Salón de eventos, tipo: Web con cotizador, estado: En desarrollo }
  pantalla: cotizador
  antes:
    - { texto: "Confirmar con Fernanda: cada presupuesto se armaba a mano, mensaje por mensaje", pendiente: true }
    - { texto: "Confirmar con Fernanda: las mismas preguntas de precios y fechas todos los días", pendiente: true }
  ahora:
    - El cliente elige el evento, los invitados y los extras, y ve el total al instante
    - Las fechas ocupadas aparecen marcadas antes de pedir
    - El presupuesto se puede compartir y el pedido llega completo por WhatsApp
  funciones:
    - { titulo: Cotizador, texto: "6 tipos de evento, personal y extras como DJ o candy bar." }
    - { titulo: Fechas ocupadas, texto: Se ven antes de pedir, así nadie pregunta por una fecha tomada. }
    - { titulo: Presupuesto compartible, texto: Se manda por link a la familia o a quien organiza. }
    - { titulo: Pedido por WhatsApp, texto: Llega armado con todos los datos del evento. }
  capturas:
    - { pantalla: cotizador, texto: Cotizador }
    - { pantalla: horario, texto: Fechas ocupadas }
    - { pantalla: codigo, texto: Presupuesto listo }
  stack: [React 19, Vite, Tailwind 4, Motion]

links:
  instagram: https://instagram.com/luxuryeventosarf

cta:
  titulo: ¿Querés que tus clientes se coticen solos?
  texto: Te armo un cotizador con tus precios, tus extras y tus fechas.
  mensaje: "Hola Elias, vi el caso de Luxury Eventos y quiero un cotizador para mi negocio"
---
