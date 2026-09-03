/**
 * Preguntas frecuentes. Fuente única del sitio: las que aparecen en cada
 * página de servicio salen de acá.
 *
 * Contenido real, redactado por el estudio (documento «Material para web»,
 * recibido el 2026-09-03).
 */

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

const VER_SUCESIONES = {
  texto: "Ver sucesiones",
  href: "/servicios/sucesiones",
};
const VER_INMOBILIARIO = {
  texto: "Ver derecho inmobiliario",
  href: "/servicios/derecho-inmobiliario",
};

export const FAQ: ItemFaq[] = [
  {
    tema: "generales",
    pregunta: "¿Dónde se encuentra el Estudio?",
    respuesta:
      "Nuestras oficinas se encuentran en Puerto Madero, Ciudad de Buenos Aires. La atención presencial se realiza con entrevista previa coordinada.",
  },
  {
    tema: "generales",
    pregunta: "¿Cuál es el horario de atención?",
    respuesta:
      "Nuestro horario de atención es de lunes a viernes de 10 a 18 hs. Las entrevistas se coordinan previamente para poder dedicar a cada consulta el tiempo necesario.",
  },
  {
    tema: "generales",
    pregunta: "¿Las consultas pueden realizarse de manera virtual?",
    respuesta:
      "Sí. Atendemos tanto de manera presencial como virtual, lo que nos permite acompañar a clientes que se encuentran en otras localidades o en el exterior.",
  },
  {
    tema: "generales",
    pregunta: "¿Cómo puedo solicitar una entrevista?",
    respuesta:
      "Podés contactarnos por WhatsApp al 11 5843-5856, por correo electrónico a consultas@estudiopeire.com.ar, o por el formulario de contacto de nuestra web. Nuestro equipo se comunicará para conocer brevemente el motivo de la consulta y coordinar la modalidad y el horario más conveniente.",
  },
  {
    tema: "generales",
    pregunta: "¿Trabajan únicamente en CABA y Provincia de Buenos Aires?",
    respuesta:
      "El Estudio asesora clientes y operaciones que pueden involucrar distintas jurisdicciones, con matrícula en CABA y la Provincia de Buenos Aires y, cuando resulta necesario, trabajamos de manera coordinada con otros profesionales.",
  },
  {
    tema: "generales",
    pregunta: "¿Qué diferencia a Estudio Peiré?",
    respuesta:
      "Entendemos que detrás de cada consulta hay una decisión importante. Por eso combinamos conocimiento jurídico, estrategia y una atención cercana y personalizada. Nos involucramos en cada caso para anticipar riesgos, simplificar procesos y encontrar soluciones eficientes, integrando nuestra experiencia en Derecho Inmobiliario y Sucesiones con tecnología e innovación.",
  },
  {
    tema: "sucesiones",
    pregunta: "¿Cómo empiezo una sucesión?",
    respuesta:
      "Cada sucesión comienza con un buen diagnóstico. Analizamos la situación familiar, los bienes y la documentación para definir desde el inicio la estrategia más adecuada. A partir de allí, acompañamos y coordinamos todo el proceso de forma clara, ordenada y eficiente para nuestros clientes.",
    verMas: VER_SUCESIONES,
  },
  {
    tema: "sucesiones",
    pregunta: "¿Puedo vender una propiedad que está en sucesión?",
    respuesta:
      "Depende. No siempre es necesario que finalice la sucesión para avanzar con la venta. Analizamos el estado del proceso y diseñamos la estrategia sucesoria e inmobiliaria más adecuada para concretar la operación de manera segura y eficiente.",
    verMas: VER_SUCESIONES,
  },
  {
    tema: "inmobiliario",
    pregunta: "¿Asesoran a inmobiliarias, brokers y desarrolladores?",
    respuesta:
      "Sí. Acompañamos a profesionales y empresas del sector inmobiliario tanto en operaciones particulares como mediante asesoramiento permanente, contratos, prevención de contingencias, negociación y estructuración jurídica de sus negocios.",
    verMas: VER_INMOBILIARIO,
  },
  {
    tema: "inmobiliario",
    pregunta: "¿Intervienen en desarrollos e inversiones inmobiliarias?",
    respuesta:
      "Sí. Participamos desde las etapas iniciales del proyecto, analizando su estructura jurídica, contratos, relaciones entre las partes, adquisición de activos y diferentes aspectos vinculados con su implementación y comercialización.",
    verMas: VER_INMOBILIARIO,
  },
];

export function faqPorTema(tema: Tema) {
  return FAQ.filter((f) => f.tema === tema);
}
