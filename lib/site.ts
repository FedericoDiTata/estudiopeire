/**
 * Datos del estudio en un solo lugar.
 * Lo marcado como PENDIENTE espera confirmación del cliente (audios del 2026-08-07).
 */

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

export const SERVICIOS: Servicio[] = [
  {
    slug: "sucesiones",
    nombre: "Sucesiones",
    resumen:
      "Transferir un inmueble después de un fallecimiento, ordenar una herencia entre varios herederos o destrabar un acuerdo familiar.",
    waMensaje: "Hola, quiero consultar por una sucesión",
  },
  {
    slug: "derecho-inmobiliario",
    nombre: "Derecho Inmobiliario",
    resumen:
      "Compraventas, boletos y reservas, conflictos de propiedad horizontal y asesoramiento a brokers y desarrolladores.",
    waMensaje: "Hola, quiero consultar por un tema inmobiliario",
  },
  {
    // PENDIENTE: el cliente pidió reemplazar «Civil y Comercial» por un servicio
    // ligado a innovación y tecnología. Falta definir de qué se trata para elegir
    // un nombre que la gente busque. Este es provisorio.
    slug: "innovacion",
    nombre: "Innovación y Tecnología",
    resumen:
      "Un área en formación: contratos digitales y nuevas formas de operar con inmuebles, en un terreno donde todavía hay poca regulación.",
    waMensaje: "Hola, quiero consultar por temas de tecnología",
    pendiente: true,
  },
];
