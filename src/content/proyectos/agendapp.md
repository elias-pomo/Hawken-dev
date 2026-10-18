---
nombre: "Martega's Barber Shop"
orden: 1
etiqueta: caso-real
rubro: Barbería · Tucumán
descripcion: "Caso real: turnos online para Martega's Barber Shop. Los clientes reservan en 3 toques, sin registrarse, y el barbero maneja la agenda desde el celular."
resumen: Los clientes sacan turno sin registrarse y el barbero maneja la agenda desde el celular, con aviso de cada reserva nueva.
placa: violeta
captura: ../../assets/proyectos/martega1.jpeg
datos:
  - { valor: 3 toques, texto: para reservar }
  - { valor: 4 dígitos, texto: código para buscar o cancelar }
  - { valor: 0 cuentas, texto: el cliente no se registra }

caso:
  titulo:
    - { texto: "Turnos en" }
    - { texto: "3 toques", resaltado: true }
    - { texto: "para Martega's" }
  bajada: Una barbería de Tucumán. Los clientes reservan, consultan y cancelan solos, y el barbero ve todo desde el celular.
  ficha: { rubro: Barbería, tipo: Sistema de turnos, estado: En producción }
  captura: ../../assets/proyectos/martega1.jpeg
  antes:
    - {
        texto: "Los turnos se pedían por mensaje, uno por uno",
        pendiente: true,
      }
    - {
        texto: "Turnos que se pisaban o clientes que no venían",
        pendiente: true,
      }
  ahora:
    - El cliente reserva sin registrarse y en 3 toques
    - Solo se ofrecen los horarios donde entra el servicio, así los turnos no se pisan
    - Cada turno tiene un código de 4 dígitos para buscarlo o cancelarlo
  funciones:
    - {
        titulo: Reserva sin cuenta,
        texto: "Elegís el servicio, el día y la hora. Listo.",
      }
    - {
        titulo: Cancelación online,
        texto: Hasta 5 horas antes. Después cuenta como falta.,
      }
    - {
        titulo: Panel del barbero,
        texto: Se instala en el celular como una app y avisa cada turno nuevo.,
      }
    - {
        titulo: Turnos especiales,
        texto: "Fuera de horario (+$3.000) o a domicilio.",
      }
  capturas:
    - { imagen: ../../assets/proyectos/martega2.jpeg, texto: 1 · Elegir servicio }
    - { imagen: ../../assets/proyectos/martega3.jpeg, texto: 2 · Elegir horario }
    - { imagen: ../../assets/proyectos/martega6.jpeg, texto: Panel del barbero }
  stack: [Next.js 16, TypeScript, PostgreSQL, Prisma, PWA, Notificaciones push]
  testimonio:
    texto: "Pedirle a Martín una frase sobre cómo le cambió el trabajo (con permiso para publicarla)"
    autor: "Martín Díaz"
    rol: "Dueño de Martega's Barber Shop"
    pendiente: true

links:
  vivo: https://martegas.vercel.app
  vivoAviso: La web real tiene turnos de verdad. Para probar, usá la demo.

cta:
  titulo: ¿Turnos online para tu negocio?
  texto: Te muestro cómo quedaría con tus servicios y tus horarios.
  mensaje: "Hola Elias, vi el caso de Martega's y quiero turnos online para mi negocio"
---
