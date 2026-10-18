---
nombre: Box Club Tucumán
orden: 3
etiqueta: demo
rubro: Gimnasio
descripcion: "Proyecto demo: sistema de clases y reservas para un gimnasio de deportes de contacto, con grilla semanal, cupos y panel para profes."
resumen: Grilla semanal de clases con cupos en vivo, reservas con código y un panel para que cada profe cargue sus clases.
placa: violeta
captura: ../../assets/proyectos/boxeo4.jpg
datos:
  - { valor: 22 clases, texto: por semana en la demo }
  - { valor: 4 salas, texto: "y 5 disciplinas, cada una con su foto" }
  - { valor: 3 roles, texto: "alumno, profe y admin" }

caso:
  titulo:
    - { texto: "Clases con" }
    - { texto: "cupo en vivo", resaltado: true }
    - { texto: "para un gimnasio" }
  bajada: Un proyecto demo para gimnasios y estudios. Los alumnos ven la grilla de la semana, reservan su lugar y lo cancelan solos.
  ficha: { rubro: Gimnasio, tipo: Sistema de clases, estado: Proyecto demo }
  captura: ../../assets/proyectos/boxeo2.jpg
  antesTitulo: El problema típico
  antes:
    - Las clases se llenan de más o quedan vacías porque nadie sabe cuántos lugares quedan
    - Los alumnos preguntan los horarios por mensaje todas las semanas
  ahora:
    - La grilla de la semana muestra los lugares libres de cada clase
    - Reservás tu lugar con un código y lo cancelás sin escribirle a nadie
    - Cada profe carga, publica y cancela sus clases desde un panel
  funciones:
    - { titulo: Grilla semanal, texto: "Por día y horario, con la vista de lista en el celular." }
    - { titulo: Cupos en vivo, texto: Cada clase muestra cuántos lugares quedan. }
    - { titulo: Panel de profes, texto: "Crear, publicar y cancelar clases, y ver los inscriptos." }
    - { titulo: Administración, texto: Usuarios, roles y disciplinas en un solo lugar. }
  capturas:
    - { imagen: ../../assets/proyectos/boxeo4.jpg, texto: Grilla semanal }
    - { imagen: ../../assets/proyectos/boxeo3.jpg, texto: Disciplinas }
    - { imagen: ../../assets/proyectos/boxeo6.jpg, texto: Mis reservas }
    - { imagen: ../../assets/proyectos/boxeo7.jpg, texto: Panel de clases }
  stack: [Node.js, Express, MongoDB, Handlebars, JWT]

links: {}

cta:
  titulo: ¿Tenés un gimnasio o un estudio?
  texto: Te muestro cómo quedaría con tus clases, tus salas y tus horarios.
  mensaje: "Hola Elias, vi la demo de Box Club y tengo un gimnasio"
---
