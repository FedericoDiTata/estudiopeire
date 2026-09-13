import type { LucideIcon } from "lucide-react";
import {
  Award,
  CircleCheckBig,
  Feather,
  HeartHandshake,
  Telescope,
} from "lucide-react";

/**
 * Textos de El Estudio tal como los mandó el estudio en el documento
 * «INFO WEB» (septiembre de 2026). Solo se corrigieron tildes y erratas.
 *
 * «Quiénes somos» llegó como un bloque de seis párrafos. En la página cada
 * idea va donde tiene contexto: la historia y el propósito abren la sección,
 * la relación entre las dos áreas va destacada, «un equipo de mujeres»
 * presenta al equipo y la forma de trabajar presenta el compromiso.
 */
export const QUIENES_SOMOS = {
  historia: [
    "Estudio Peiré nació en 2008, fundado por Silvina Peiré.",
    "A lo largo de estos años construimos una firma boutique especializada en Derecho Inmobiliario y Sucesorio, acompañando a personas, familias, empresas y profesionales del ecosistema inmobiliario en decisiones que involucran negocios, inmuebles y patrimonio.",
  ],
  proposito:
    "Nuestro propósito es contribuir a elevar el estándar del servicio legal, especialmente dentro del mercado inmobiliario, construyendo una experiencia más ágil, estratégica, cercana y acorde con las nuevas formas de hacer negocios.",
  relacion: {
    intro:
      "La experiencia acumulada durante años acompañando operaciones inmobiliarias y procesos sucesorios nos permitió identificar una relación cada vez más estrecha entre ambas áreas.",
    // Cada frase va partida en dos para repetir el contraste de pesos del logo.
    inmuebles: [
      "Detrás de muchos inmuebles",
      "existen decisiones familiares y patrimoniales.",
    ],
    sucesiones: [
      "Detrás de muchas sucesiones",
      "existe un activo inmobiliario que requiere estrategia.",
    ],
  },
  equipo:
    "Somos un equipo de mujeres y creemos en una manera de ejercer la profesión que integra excelencia, sensibilidad, escucha y determinación.",
  formaDeTrabajar:
    "Nuestra forma de trabajar combina especialización jurídica, estrategia, prevención y cercanía. Buscamos comprender qué necesita realmente cada cliente, anticipar escenarios y diseñar soluciones que aporten seguridad y previsibilidad, sin perder de vista el contexto humano y económico que existe detrás de cada decisión.",
};

/**
 * Nuestro compromiso. Se les pidió un punteo y mandaron cinco títulos, así
 * que las tarjetas no llevan descripción.
 */
export const COMPROMISOS: { titulo: string; icono: LucideIcon }[] = [
  { titulo: "Elevar el estándar", icono: Award },
  { titulo: "Anticiparnos", icono: Telescope },
  { titulo: "Involucrarnos", icono: HeartHandshake },
  { titulo: "Hacerlo simple", icono: Feather },
  { titulo: "Resolver", icono: CircleCheckBig },
];
