/**
 * Preguntas frecuentes. Fuente única del sitio: las que aparecen en cada
 * página de servicio salen de acá.
 *
 * Las respuestas vienen de la web actual del estudio.
 * REVISAR: la de ubicación quedó con la dirección de Puerto Madero, que es la
 * que figura en la mayoría del sitio actual. Falta confirmar cuál es la vigente.
 */

import { CONTACTO } from "./site";

export type Tema = "generales" | "sucesiones" | "inmobiliario";

export const TEMAS: { id: Tema; label: string }[] = [
  { id: "generales", label: "Generales" },
  { id: "sucesiones", label: "Sucesiones" },
  { id: "inmobiliario", label: "Inmobiliario" },
];

export type ItemFaq = {
  tema: Tema;
  pregunta: string;
  respuesta: string;
  verMas?: { texto: string; href: string };
};

export const FAQ: ItemFaq[] = [
  {
    tema: "generales",
    pregunta: "¿Dónde queda el estudio?",
    respuesta: `En ${CONTACTO.direccion}, ${CONTACTO.ciudad}. Atendemos con turno previo.`,
  },
  {
    tema: "generales",
    pregunta: "¿Cómo pido una entrevista?",
    respuesta:
      "Podés escribirnos por WhatsApp desde cualquier página del sitio o dejarnos tus datos en el formulario de contacto. Respondemos y coordinamos día y horario.",
  },
  {
    tema: "generales",
    pregunta: "¿Toman casos de CABA y GBA?",
    respuesta: "Sí, trabajamos en toda el área metropolitana de Buenos Aires.",
  },
  {
    tema: "generales",
    pregunta: "¿Puedo hacer una consulta de manera virtual?",
    respuesta:
      "Sí, trabajamos de manera virtual y presencial. Para la consulta a distancia usamos Google Meet, Skype o videollamada de WhatsApp, así que podemos atenderte estés donde estés.",
  },
  {
    tema: "generales",
    pregunta: "¿Qué pasa en la primera consulta?",
    respuesta:
      "Nos contás tu caso, revisamos lo que tengas de documentación y te decimos con claridad si hay algo para hacer, cómo sería el trámite y cuánto puede demorar. De ahí sale una propuesta de trabajo.",
  },
  {
    tema: "sucesiones",
    pregunta: "¿Qué documentación necesito para iniciar una sucesión?",
    respuesta:
      "Partida de defunción, partidas de nacimiento de los herederos, partida de matrimonio si la persona fallecida estaba casada, títulos de propiedad de los bienes y testamento si lo hubiere.",
    verMas: { texto: "Ver sucesiones", href: "/servicios/sucesiones" },
  },
  {
    tema: "sucesiones",
    pregunta: "¿Demora mucho una sucesión?",
    respuesta:
      "Depende de varios factores relacionados con la documentación en general e individual de cada heredero, el juzgado que interviene y si hay acuerdo entre los destinatarios de la herencia.",
    verMas: { texto: "Ver sucesiones", href: "/servicios/sucesiones" },
  },
  {
    tema: "sucesiones",
    pregunta:
      "¿Se puede vender una propiedad heredada antes de terminar el trámite?",
    respuesta:
      "Se puede avanzar con una reserva o un boleto, pero la escritura recién se firma cuando los bienes quedaron inscriptos a nombre de los herederos. Si ya hay comprador, conviene arrancar cuanto antes.",
    verMas: { texto: "Ver sucesiones", href: "/servicios/sucesiones" },
  },
  {
    tema: "inmobiliario",
    pregunta: "¿Trabajan con arquitectos y desarrolladores inmobiliarios?",
    respuesta:
      "Sí, acompañamos a los profesionales y empresas en todo el proceso de edificación hasta el final del proyecto.",
    verMas: {
      texto: "Ver inmobiliario",
      href: "/servicios/derecho-inmobiliario",
    },
  },
  {
    tema: "inmobiliario",
    pregunta: "¿Trabajan con conflictos de propiedad horizontal?",
    respuesta: "Sí, es una de las especialidades del estudio.",
    verMas: {
      texto: "Ver inmobiliario",
      href: "/servicios/derecho-inmobiliario",
    },
  },
  {
    tema: "inmobiliario",
    pregunta: "¿Brindan capacitaciones en derecho inmobiliario?",
    respuesta:
      "Sí, brindamos charlas, talleres y jornadas de capacitación, virtuales y presenciales, orientados a estudiantes, profesionales inmobiliarios y empresas.",
  },
  {
    tema: "inmobiliario",
    pregunta: "¿Conviene consultar antes de firmar la reserva?",
    respuesta:
      "Sí. La reserva parece un trámite menor y define bastante más de lo que se cree. Revisarla cuesta mucho menos que discutir después.",
    verMas: {
      texto: "Ver inmobiliario",
      href: "/servicios/derecho-inmobiliario",
    },
  },
];
