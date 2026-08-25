/**
 * Datos del estudio en un solo lugar.
 * Lo marcado como PENDIENTE espera confirmación del cliente (audios del 2026-08-07).
 */

import { LOREM_CORTO } from "./placeholder";

export const CONTACTO = {
  telefono: "11 5843-5856",
  telefonoLink: "+541158435856",
  whatsapp: "5491158435856",
  email: "consultas@estudiopeire.com.ar",
  // PENDIENTE: el sitio actual publica dos direcciones (Caballito y Puerto Madero).
  // Silvina tiene que confirmar cuál es la vigente antes de publicar.
  direccion: "Alicia Moreau de Justo 1750, piso 1° «C»",
  ciudad: "(1107) CABA",
  zona: "CABA y GBA",
} as const;

export function waLink(mensaje: string) {
  return `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export type Servicio = {
  slug: string;
  nombre: string;
  resumen: string;
  waMensaje: string;
  pendiente?: boolean;
};

// Los nombres son la estructura acordada. Los resúmenes van en relleno hasta
// que el estudio defina qué dice de cada área.
export const SERVICIOS: Servicio[] = [
  {
    slug: "sucesiones",
    nombre: "Sucesiones",
    resumen: LOREM_CORTO,
    waMensaje: "Hola, quiero consultar por una sucesión",
  },
  {
    slug: "derecho-inmobiliario",
    nombre: "Derecho Inmobiliario",
    resumen: LOREM_CORTO,
    waMensaje: "Hola, quiero consultar por un tema inmobiliario",
  },
  {
    // Nombre definido por el estudio (2026-08-24). «Proptech» es el término que
    // usa el propio sector inmobiliario, que es el público de esta área.
    slug: "proptech-ia",
    nombre: "Proptech e IA",
    resumen: LOREM_CORTO,
    waMensaje: "Hola, quiero consultar por un tema de proptech o IA",
  },
];
