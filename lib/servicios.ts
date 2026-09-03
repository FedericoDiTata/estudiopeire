/**
 * Contenido de las páginas de servicio.
 *
 * Los casos y sus descripciones son texto real del estudio (documento
 * «Material para web», 2026-09-03). Se quitaron las anotaciones internas que
 * venían en el documento y que no van publicadas («cliente premium», «la más
 * frecuente», etc.).
 *
 * PENDIENTE del estudio: documentación por servicio y archivos descargables.
 */

import { faqPorTema, type ItemFaq } from "./faq";

/** El icono da identidad a cada tarjeta: sin fotos, es lo que evita que la
 *  sección sea una lista de rectángulos iguales. */
export type IconoCaso =
  | "sucesion"
  | "venta"
  | "acuerdo"
  | "empresa"
  | "patrimonio"
  | "partner"
  | "operacion"
  | "conflicto"
  | "contrato"
  | "desarrollo";

export type Caso = {
  titulo: string;
  /** Etiqueta corta para el panel cerrado, donde el título va rotado y una
   *  frase larga no entra. */
  etiqueta: string;
  detalle: string;
  ampliacion?: string;
  icono: IconoCaso;
};

export type ServicioDetalle = {
  slug: string;
  nombre: string;
  titulo: string;
  bajada: string;
  waMensaje: string;
  imagen: string;
  imagenAlt: string;
  deQueSeTrata: string[];
  casos: Caso[];
  preguntas: ItemFaq[];
  extra?: { titulo: string; texto: string[] };
};

export const SERVICIOS_DETALLE: ServicioDetalle[] = [
  {
    slug: "sucesiones",
    nombre: "Sucesiones",
    titulo: "Sucesiones",
    bajada:
      "Cada sucesión comienza con un buen diagnóstico: la situación familiar, los bienes y la documentación definen la estrategia.",
    waMensaje: "Hola, quiero consultar por una sucesión",
    imagen: "/img/estudio_peire-homepage-libros_closeup.jpg",
    imagenAlt: "Códigos y material de trabajo sobre el escritorio",
    deQueSeTrata: [
      "Analizamos la situación familiar, los bienes y la documentación para definir desde el inicio la estrategia más adecuada.",
      "A partir de allí acompañamos y coordinamos todo el proceso de forma clara, ordenada y eficiente, hasta la adjudicación e inscripción o la venta de los bienes.",
    ],
    casos: [
      {
        titulo: "Falleció un familiar y necesito iniciar la sucesión",
        icono: "sucesion",
        etiqueta: "Iniciar sucesión",
        detalle:
          "Acompañamos todo el proceso sucesorio, desde el análisis inicial hasta la adjudicación e inscripción, o la venta de los bienes.",
      },
      {
        titulo: "Necesito vender una propiedad que está en sucesión",
        icono: "venta",
        etiqueta: "Vender en sucesión",
        detalle:
          "Une nuestras dos especialidades. Asesoramos y guiamos a herederos, compradores, inmobiliarias y escribanías en toda la operatoria.",
        ampliacion:
          "Documentación, declaratoria, reservas, boletos, cesiones, tracto abreviado y coordinación con escribano.",
      },
      {
        titulo: "Los herederos no se ponen de acuerdo",
        icono: "acuerdo",
        etiqueta: "Herederos en desacuerdo",
        detalle:
          "Intervenimos estratégicamente cuando hay diferencias sobre la administración, distribución, adjudicación o venta de los bienes, para que puedan decidir sin perder dinero ni vínculos.",
        ampliacion:
          "Desacuerdos sobre venta, administración, uso de los inmuebles, distribución de bienes, valuaciones, partición o compensaciones entre coherederos.",
      },
      {
        titulo: "Necesito ordenar la sucesión de mi negocio o empresa",
        icono: "empresa",
        etiqueta: "Negocio o empresa",
        detalle:
          "Sucesiones con múltiples inmuebles, sociedades, participaciones empresarias, inversiones y bienes en distintas jurisdicciones.",
        ampliacion:
          "También documentación incompleta, sucesiones encadenadas, herederos numerosos o estructuras patrimoniales que requieren coordinación con escribanos, contadores y otros profesionales.",
      },
      {
        titulo: "Quiero organizar mi patrimonio antes de que sea un problema",
        icono: "patrimonio",
        etiqueta: "Planificar patrimonio",
        detalle:
          "Planificación sucesoria y patrimonial para transmitir patrimonio, negocio o empresa, y prevenir conflictos futuros.",
        ampliacion:
          "Testamentos, donaciones, organización de inmuebles, protección de herederos y empresas familiares.",
      },
    ],
    preguntas: faqPorTema("sucesiones"),
  },
  {
    slug: "derecho-inmobiliario",
    nombre: "Derecho Inmobiliario",
    titulo: "Derecho inmobiliario",
    bajada:
      "Partners legales del negocio inmobiliario: desde la negociación inicial de una operación hasta la estructuración de un desarrollo.",
    waMensaje: "Hola, quiero consultar por un tema inmobiliario",
    imagen: "/img/estudio_peire-equipo-background.jpg",
    imagenAlt: "Sala de reuniones del estudio",
    deQueSeTrata: [
      "Acompañamos operaciones inmobiliarias desde la negociación inicial hasta su instrumentación definitiva, anticipando riesgos y protegiendo los intereses de nuestros clientes.",
      "Trabajamos tanto con particulares como con inmobiliarias, brokers, desarrolladores e inversores, en operaciones puntuales o con asesoramiento permanente.",
    ],
    casos: [
      {
        titulo: "Soy una empresa o profesional inmobiliario",
        icono: "partner",
        etiqueta: "Profesionales del rubro",
        detalle:
          "Asesoramiento estratégico y permanente para inmobiliarias, brokers, desarrolladores y empresas del sector en las decisiones jurídicas de su actividad cotidiana.",
        ampliacion:
          "Consultoría, revisión y armado de contratos, operaciones especiales, cláusulas, prevención de contingencias, negociación, documentación comercial, nuevos modelos de negocio y regulación.",
      },
      {
        titulo: "Voy a comprar o vender un inmueble",
        icono: "operacion",
        etiqueta: "Comprar o vender",
        detalle:
          "Asesoramos y acompañamos la operación desde la negociación inicial hasta su instrumentación definitiva.",
        ampliacion:
          "Análisis de antecedentes, reservas, ofertas, boletos, cesiones, escrituración, negociación de condiciones y coordinación con inmobiliarias y escribanías.",
      },
      {
        titulo: "Necesito resolver un problema con un inmueble",
        icono: "conflicto",
        etiqueta: "Conflictos",
        detalle:
          "Intervenimos frente a conflictos derivados de operaciones, contratos, ocupación, tenencia, administración o utilización de inmuebles.",
        ampliacion:
          "Incumplimientos contractuales, conflictos de compraventas, restituciones, medianería, propiedad horizontal, daños, escrituración y litigios ya planteados.",
      },
      {
        titulo: "Tengo que armar un contrato",
        icono: "contrato",
        etiqueta: "Contratos",
        detalle:
          "Diseñamos, revisamos y negociamos contratos adaptados a cada operación, con foco en la claridad, la previsibilidad y la adecuada distribución de riesgos.",
        ampliacion:
          "Reservas, boletos, locaciones comerciales y residenciales, cesiones, opciones, acuerdos entre inversores, contratos de desarrollos y corretaje.",
      },
      {
        titulo: "Quiero desarrollar o invertir en un proyecto",
        icono: "desarrollo",
        etiqueta: "Desarrollos e inversión",
        detalle:
          "Acompañamos a desarrolladores, inversores y propietarios en la estructuración jurídica de proyectos, desde su análisis inicial hasta su implementación.",
        ampliacion:
          "Diseño del proyecto, adquisición del inmueble, fideicomisos y vehículos jurídicos, contratos, preventas, relaciones entre inversores y comercialización.",
      },
    ],
    extra: {
      titulo: "También trabajamos en civil y comercial",
      texto: [
        "Contratos, cobros, daños y perjuicios y conflictos entre socios. Son temas que suelen aparecer junto a una operación inmobiliaria y los resolvemos en el mismo estudio.",
      ],
    },
    preguntas: faqPorTema("inmobiliario"),
  },
];

export function getServicio(slug: string) {
  return SERVICIOS_DETALLE.find((s) => s.slug === slug);
}
