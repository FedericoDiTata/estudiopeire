/**
 * Datos del estudio en un solo lugar.
 * Contenido confirmado por el estudio el 2026-09-03.
 */

export const CONTACTO = {
  telefono: "11 5843-5856",
  telefonoLink: "+541158435856",
  whatsapp: "5491158435856",
  email: "consultas@estudiopeire.com.ar",
  // Confirmada por el estudio el 2026-09-03: Puerto Madero.
  direccion: "Alicia Moreau de Justo 1750, piso 1° «C»",
  barrio: "Puerto Madero",
  horario: "Lunes a viernes de 10 a 18 hs",
  atencion: "Con entrevista previa coordinada. También atendemos de forma virtual.",
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

// Resúmenes tomados del material que envió el estudio.
export const SERVICIOS: Servicio[] = [
  {
    slug: "sucesiones",
    nombre: "Sucesiones",
    resumen:
      "Iniciar una sucesión, vender una propiedad que está en proceso, destrabar un acuerdo entre herederos u ordenar el patrimonio antes de que sea un problema.",
    waMensaje: "Hola, quiero consultar por una sucesión",
  },
  {
    slug: "derecho-inmobiliario",
    nombre: "Derecho Inmobiliario",
    resumen:
      "Compraventas, contratos, conflictos con inmuebles y estructuración de desarrollos. Asesoramiento permanente a inmobiliarias, brokers y desarrolladores.",
    waMensaje: "Hola, quiero consultar por un tema inmobiliario",
  },
  {
    // Nombre definido por el estudio (2026-08-24). «Proptech» es el término que
    // usa el propio sector inmobiliario, que es el público de esta área.
    slug: "proptech-ia",
    nombre: "Proptech e IA",
    resumen:
      "Asesoramiento sobre el uso de inteligencia artificial en el negocio inmobiliario, y sobre tokenización, blockchain y contratos digitales.",
    waMensaje: "Hola, quiero consultar por un tema de proptech o IA",
  },
];
