/**
 * Integrantes del estudio, en el orden en que los envió el estudio
 * (2026-09-12). Nombres, cargos y teléfonos textuales.
 *
 * Florencia Moreira mandó su enlace como un acortador (wa.link). Se arma el
 * enlace directo de WhatsApp con su número, igual que el resto, para no
 * depender de un redireccionador externo.
 *
 * Fotos: sesión de septiembre de 2026, recortadas a 3:4 y convertidas a WebP.
 */

export type Integrante = {
  slug: string;
  nombre: string;
  /** Profesión, cuando la indicaron por separado del cargo. */
  profesion?: string;
  /** Cargo o área. Las barras «|» del original se muestran como separador. */
  cargo: string;
  telefono: string;
  whatsapp: string;
  foto: string;
};

export const EQUIPO: Integrante[] = [
  {
    slug: "silvina-peire",
    nombre: "Silvina Peiré",
    profesion: "Abogada",
    cargo: "Fundadora",
    telefono: "11 4093-8715",
    whatsapp: "5491140938715",
    foto: "/img/equipo/silvina-peire.webp",
  },
  {
    slug: "flavia-peire",
    nombre: "Flavia Mariel Peiré",
    cargo: "Líder Operativa y de Administración",
    telefono: "11 5843-5856",
    whatsapp: "5491158435856",
    foto: "/img/equipo/flavia-peire.webp",
  },
  {
    slug: "micaela-romano-guemes",
    nombre: "Micaela Romano Güemes",
    profesion: "Abogada",
    cargo: "Líder | Litigios",
    telefono: "11 2587-1805",
    whatsapp: "5491125871805",
    foto: "/img/equipo/micaela-romano-guemes.webp",
  },
  {
    slug: "florencia-moreira",
    nombre: "Florencia Ailín Moreira",
    profesion: "Abogada",
    cargo: "Líder | Asesoramiento Legal",
    telefono: "11 2299-9305",
    whatsapp: "5491122999305",
    foto: "/img/equipo/florencia-moreira.webp",
  },
  {
    slug: "abril-irazabal",
    nombre: "Abril Irazábal",
    profesion: "Abogada",
    cargo: "Líder de Proyecto | Proptech e IA",
    telefono: "11 2587-6167",
    whatsapp: "5491125876167",
    foto: "/img/equipo/abril-irazabal.webp",
  },
  {
    slug: "mariana-fernandez-vazquez",
    nombre: "Mariana Clara Fernández Vázquez",
    profesion: "Abogada",
    cargo: "Litigios",
    telefono: "11 2377-0019",
    whatsapp: "5491123770019",
    foto: "/img/equipo/mariana-fernandez-vazquez.webp",
  },
  {
    slug: "oriana-maggio",
    nombre: "Oriana Aldana Maggio",
    cargo: "Paralegal",
    telefono: "11 2831-3930",
    whatsapp: "5491128313930",
    foto: "/img/equipo/oriana-maggio.webp",
  },
  {
    slug: "jazmin-lin",
    nombre: "Jazmin Lin",
    cargo: "Asistente Administrativa",
    telefono: "11 6903-4898",
    whatsapp: "5491169034898",
    foto: "/img/equipo/jazmin-lin.webp",
  },
];

/** Enlace de WhatsApp con un saludo que ya nombra a la persona. */
export function waIntegrante(persona: Integrante) {
  const nombrePila = persona.nombre.split(" ")[0];
  const texto = `Hola ${nombrePila}, quiero hacer una consulta`;
  return `https://wa.me/${persona.whatsapp}?text=${encodeURIComponent(texto)}`;
}
