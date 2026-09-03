/**
 * Testimonios reales, enviados por el estudio con autorización de cada persona
 * (documento «Testimonios clientes», 2026-09-03).
 *
 * PENDIENTE: falta el de la CEO de RE/MAX Argentina, que el estudio va a
 * mandar más adelante. Se agrega acá y aparece solo.
 */

export type Testimonio = {
  texto: string;
  nombre: string;
  detalle: string;
  /** Los más largos ocupan el ancho completo en la grilla. */
  destacado?: boolean;
};

export const TESTIMONIOS: Testimonio[] = [
  {
    texto:
      "Silvina combina un excelente rigor profesional con la sensibilidad de cuidar a las personas y facilitar que los negocios se concreten. Trabajar con ella y su equipo desde hace más de 15 años es sinónimo de tranquilidad y total confianza. Gracias por la dedicación de cada día.",
    nombre: "Susana Sadej",
    detalle: "Brokers Inmobiliarios",
  },
  {
    texto:
      "Transité una sucesión bastante compleja. El letrado que me patrocinaba en un principio me hizo perder tiempo y dinero, ya que nunca pudo defender mis intereses. Un amigo me recomendó hablar con la Dra. Silvina Peiré. La fui a visitar allá por el 2013 y le conté mi situación jurídica y familiar. Ella me dijo que se comprometía a leer el expediente y darme una respuesta. Aceptó ser mi abogada y recibí no solo su asesoramiento, sino compañía profesional y humana. La sucesión logró llegar a buen término y al respecto le estoy por siempre agradecida.",
    nombre: "Verónica Schenone",
    detalle: "Clienta de sucesiones",
    destacado: true,
  },
  {
    texto:
      "Trabajar con el Estudio Peiré fue una experiencia muy valiosa. Encontré un equipo profundamente comprometido con la excelencia, pero también con algo que para mí es fundamental: el valor de los vínculos. Destaco especialmente la apertura para aprender, revisar prácticas y crecer juntas. Es un estudio que combina profesionalismo, cercanía y una mirada muy humana sobre su trabajo.",
    nombre: "Sofía Stamateas",
    detalle: "Coach y Magíster en Comunicación",
  },
  {
    texto:
      "El año pasado atravesé una situación legal muy complicada con mi mamá y mi hermana, que nos llevó varias veces solucionar, pero gracias a Silvina y a su estudio pudimos lograrlo. Estamos muy agradecidas por el servicio y el trato profesional que nos dieron, y por el acompañamiento y la comprensión. Las súper recomiendo.",
    nombre: "Andrea Albertus",
    detalle: "Clienta de sucesiones",
  },
];

/**
 * Reconocimiento de prensa. Se muestra aparte de los testimonios de clientes
 * porque no es un cliente: es la valoración de un colega en un medio.
 */
export const PRENSA = {
  texto:
    "Tuvimos el gusto de entrevistar a Silvina Peiré en Derecho a Fondo, el programa de divulgación jurídica que se emite por Radio UBA FM 87.9. Su sólida trayectoria en derecho inmobiliario y fideicomisos quedó reflejada en una charla que combinó rigor técnico con una notable claridad para explicar temas complejos del sector. Su capacidad para traducir la complejidad normativa en conceptos accesibles la convierte en una referente ineludible en la materia.",
  nombre: "Gastón Smulevici",
  detalle: "Abogado y conductor en Radio UBA, Universidad de Buenos Aires",
};

/**
 * Video de recomendación. Julio Valente dirige CRS en Argentina y Uruguay, la
 * certificación internacional de especialistas residenciales, así que es la
 * pieza de mayor peso para el público inmobiliario.
 */
export const VIDEO_RECOMENDACION = {
  src: "/video/julio-valente.mp4",
  nombre: "Julio Valente",
  detalle: "Director de CRS Argentina y Uruguay",
};
