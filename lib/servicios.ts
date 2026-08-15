/**
 * Contenido de las páginas de servicio.
 *
 * TODO EL CONTENIDO ES DE RELLENO. Los nombres de servicio y de sección son la
 * estructura acordada con el estudio; lo demás va en lorem para no dar por
 * sentado qué dicen ni cómo lo dicen. Se completa cuando ellos lo definan.
 *
 * Al final del archivo quedó guardado el material real que tienen publicado en
 * su web actual, que sirve como punto de partida para esa redacción.
 */

import { LOREM_CORTO, LOREM_MEDIO, numerados } from "./placeholder";

export type Paso = { titulo: string; detalle: string };
export type Pregunta = { pregunta: string; respuesta: string };

export type ServicioDetalle = {
  slug: string;
  nombre: string;
  titulo: string;
  bajada: string;
  waMensaje: string;
  imagen: string;
  imagenAlt: string;
  deQueSeTrata: string[];
  casos: { titulo: string; detalle: string }[];
  proceso: { intro: string; pasos: Paso[]; nota?: string };
  documentacion?: { intro: string; items: string[] };
  descargable?: { titulo: string; detalle: string };
  preguntas: Pregunta[];
  extra?: { titulo: string; texto: string[] };
};

const casosRelleno = numerados("Situación", 6).map((titulo) => ({
  titulo,
  detalle: LOREM_CORTO,
}));

const pasosRelleno = numerados("Paso", 4).map((titulo) => ({
  titulo,
  detalle: LOREM_CORTO,
}));

const preguntasRelleno = numerados("Pregunta", 4).map((pregunta) => ({
  pregunta,
  respuesta: LOREM_MEDIO,
}));

const documentacionRelleno = {
  intro: "Descripción",
  items: numerados("Documento", 5),
};

export const SERVICIOS_DETALLE: ServicioDetalle[] = [
  {
    slug: "sucesiones",
    nombre: "Sucesiones",
    titulo: "Sucesiones",
    bajada: "Descripción",
    waMensaje: "Hola, quiero consultar por una sucesión",
    imagen: "/img/estudio_peire-homepage-libros_closeup.jpg",
    imagenAlt: "Códigos y material de trabajo sobre el escritorio",
    deQueSeTrata: [LOREM_MEDIO, LOREM_CORTO],
    casos: casosRelleno,
    proceso: {
      intro: "Descripción",
      pasos: pasosRelleno,
      nota: LOREM_MEDIO,
    },
    documentacion: documentacionRelleno,
    descargable: {
      titulo: "Título del material descargable",
      detalle: LOREM_CORTO,
    },
    preguntas: preguntasRelleno,
  },
  {
    slug: "derecho-inmobiliario",
    nombre: "Derecho Inmobiliario",
    titulo: "Derecho inmobiliario",
    bajada: "Descripción",
    waMensaje: "Hola, quiero consultar por un tema inmobiliario",
    imagen: "/img/estudio_peire-equipo-background.jpg",
    imagenAlt: "Sala de reuniones del estudio",
    deQueSeTrata: [LOREM_MEDIO, LOREM_CORTO],
    casos: casosRelleno,
    proceso: {
      intro: "Descripción",
      pasos: pasosRelleno,
      nota: LOREM_MEDIO,
    },
    documentacion: documentacionRelleno,
    descargable: {
      titulo: "Título del material descargable",
      detalle: LOREM_CORTO,
    },
    // Civil y comercial va acá adentro, según lo que pidió el estudio.
    extra: {
      titulo: "También trabajamos en civil y comercial",
      texto: [LOREM_MEDIO],
    },
    preguntas: preguntasRelleno,
  },
];

export function getServicio(slug: string) {
  return SERVICIOS_DETALLE.find((s) => s.slug === slug);
}

/**
 * Material real publicado hoy en estudiopeire.com.ar. No se muestra en el
 * sitio: queda guardado como insumo para cuando el estudio redacte el
 * contenido definitivo, así no hay que volver a buscarlo.
 */
export const MATERIAL_WEB_ACTUAL = {
  sucesiones: {
    documentacion:
      "Partida de defunción, partidas de nacimiento de los herederos, partida de matrimonio (si el fallecido fuera casado), títulos de propiedad de los bienes (autos, casa, etc), y testamento si lo hubiere.",
    demora:
      "Depende de varios factores relacionados con la documentación en general e individual de cada heredero, el juzgado que interviene y si hay acuerdo entre los destinatarios de la herencia.",
  },
  inmobiliario: {
    desarrolladores:
      "Sí, acompañamos a los profesionales y empresas en todo el proceso de edificación hasta el final del proyecto.",
    propiedadHorizontal: "Sí, es una de las especialidades del estudio.",
    capacitaciones:
      "Sí, brindamos charlas, talleres y jornadas de capacitación, virtuales y presenciales orientados a estudiantes, profesionales inmobiliarios y empresas.",
  },
  generales: {
    zona: "Sí, trabajamos en AMBA.",
    virtual:
      "Sí, trabajamos de manera virtual y presencial. En caso de querer comunicarte por esa vía, habilitamos un Skype, Google Meet o Videollamada por WhatsApp.",
  },
} as const;
