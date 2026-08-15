/**
 * Preguntas frecuentes. Fuente única del sitio: las que aparecen en cada
 * página de servicio salen de acá.
 *
 * DE RELLENO. Van numeradas hasta que el estudio defina cuáles publica y con
 * qué palabras. El material real que hoy tienen en su web quedó guardado en
 * `MATERIAL_WEB_ACTUAL`, dentro de lib/servicios.ts.
 */

import { LOREM_MEDIO } from "./placeholder";

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

/** Arma N preguntas numeradas para un tema. */
function bloque(
  tema: Tema,
  cantidad: number,
  desde: number,
  verMas?: { texto: string; href: string },
): ItemFaq[] {
  return Array.from({ length: cantidad }, (_, i) => ({
    tema,
    pregunta: `Pregunta ${desde + i}`,
    respuesta: LOREM_MEDIO,
    verMas,
  }));
}

export const FAQ: ItemFaq[] = [
  ...bloque("generales", 5, 1),
  ...bloque("sucesiones", 4, 6, {
    texto: "Ver sucesiones",
    href: "/servicios/sucesiones",
  }),
  ...bloque("inmobiliario", 4, 10, {
    texto: "Ver inmobiliario",
    href: "/servicios/derecho-inmobiliario",
  }),
];
