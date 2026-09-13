/**
 * Integrantes del estudio, en el orden en que los envió el estudio
 * (2026-09-12). Nombres, cargos y teléfonos textuales.
 *
 * Biografías del documento «INFO WEB» (septiembre de 2026). Solo se
 * corrigieron tildes («Estudio Peiré» en todas) y cada una se partió en
 * párrafos para leerla mejor, sin cambiar el texto.
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
  bio: string[];
  /**
   * Si su biografía ya tiene una sección propia en El Estudio, la tarjeta
   * lleva a esa sección en vez de repetirla en la ventana de perfil.
   */
  ancla?: string;
};

/** Primera línea de la biografía de Silvina: quién es. */
export const SILVINA_INTRO =
  "Egresada de la Universidad de Buenos Aires, especializada en Derecho Inmobiliario y Sucesorio, fundadora de Estudio Peiré.";

/**
 * El resto de su biografía, un párrafo por tema. En El Estudio cada tema va
 * con su título; en la home se usa solo la trayectoria.
 */
export const SILVINA_TEMAS: { titulo: string; texto: string }[] = [
  {
    titulo: "Trayectoria",
    texto:
      "Con más de 20 años de trayectoria, ha desarrollado su práctica asesorando a empresas, profesionales del sector inmobiliario y clientes particulares en operaciones, negocios y decisiones vinculadas con sus activos y patrimonio.",
  },
  {
    titulo: "Mediación",
    texto:
      "Su formación como mediadora empresarial complementa una mirada jurídica orientada a la estrategia y la prevención: anticipar riesgos, diseñar soluciones, proteger el patrimonio y aportar seguridad en la toma de decisiones.",
  },
  {
    titulo: "Litigios",
    texto:
      "En materia de litigios, posee una sólida experiencia en procesos sucesorios y conflictos vinculados con inmuebles y relaciones patrimoniales.",
  },
  {
    titulo: "Speaker y capacitadora",
    texto:
      "Además de liderar Estudio Peiré, desarrolla una activa labor como speaker y capacitadora, compartiendo su experiencia en Derecho Inmobiliario, negocios y los nuevos desafíos que la innovación y la tecnología plantean para el sector.",
  },
];

export const EQUIPO: Integrante[] = [
  {
    slug: "silvina-peire",
    nombre: "Silvina Peiré",
    profesion: "Abogada",
    cargo: "Fundadora",
    telefono: "11 4093-8715",
    whatsapp: "5491140938715",
    foto: "/img/equipo/silvina-peire.webp",
    bio: [SILVINA_INTRO, ...SILVINA_TEMAS.map((tema) => tema.texto)],
    ancla: "silvina",
  },
  {
    slug: "flavia-peire",
    nombre: "Flavia Mariel Peiré",
    cargo: "Líder Operativa y de Administración",
    telefono: "11 5843-5856",
    whatsapp: "5491158435856",
    foto: "/img/equipo/flavia-peire.webp",
    bio: [
      "Lidera la gestión administrativa y operativa de Estudio Peiré, coordinando los procesos que sostienen el funcionamiento integral de la firma. Su capacidad de organización, orientación al detalle y compromiso con la mejora continua contribuyen a una gestión ágil y ordenada, alineada con los estándares de calidad y experiencia de servicio del Estudio.",
      "Su formación en docencia y coaching ontológico aporta, además, una mirada especialmente orientada a la comunicación, el desarrollo del equipo y el fortalecimiento de nuestra cultura.",
    ],
  },
  {
    slug: "micaela-romano-guemes",
    nombre: "Micaela Romano Güemes",
    profesion: "Abogada",
    cargo: "Líder | Litigios",
    telefono: "11 2587-1805",
    whatsapp: "5491125871805",
    foto: "/img/equipo/micaela-romano-guemes.webp",
    bio: [
      "Egresada de la Universidad de Buenos Aires, especializada en Derecho Tributario y Administrativo y actualmente profundizando su formación tributaria en la Universidad Torcuato Di Tella. Cuenta con experiencia en litigios patrimoniales, inmobiliarios y contenciosos, donde combina solidez técnica, criterio jurídico y una mirada estratégica.",
      "Se incorporó a Estudio Peiré siendo estudiante y, a partir de un recorrido marcado por el compromiso, la formación permanente y un crecimiento sostenido, hoy lidera el área de Litigios, coordinando al equipo y la estrategia de los asuntos a su cargo. Su evolución dentro de la firma refleja especialmente uno de nuestros valores: generar oportunidades para que el talento pueda desarrollarse, asumir nuevos desafíos y crecer.",
    ],
  },
  {
    slug: "florencia-moreira",
    nombre: "Florencia Ailín Moreira",
    profesion: "Abogada",
    cargo: "Líder | Asesoramiento Legal",
    telefono: "11 2299-9305",
    whatsapp: "5491122999305",
    foto: "/img/equipo/florencia-moreira.webp",
    bio: [
      "Egresada de la Universidad de Buenos Aires, con formación en materia notarial y experiencia previa en escribanía, donde participó en operaciones inmobiliarias y asesoramiento notarial. Este recorrido le aporta una mirada integral sobre los aspectos jurídicos, contractuales y registrales que intervienen en los negocios inmobiliarios y patrimoniales.",
      "Actualmente lidera el área de Consultoría Legal de Estudio Peiré, coordinando el asesoramiento a personas, empresas y profesionales del sector. Su práctica se distingue por un enfoque preventivo, criterio jurídico y una especial capacidad para transformar situaciones complejas en soluciones claras y seguras, acompañando al cliente desde el análisis inicial hasta la toma de decisiones.",
    ],
  },
  {
    slug: "abril-irazabal",
    nombre: "Abril Irazábal",
    profesion: "Abogada",
    cargo: "Líder de Proyecto | Proptech e IA",
    telefono: "11 2587-6167",
    whatsapp: "5491125876167",
    foto: "/img/equipo/abril-irazabal.webp",
    bio: [
      "Egresada de la Universidad de Buenos Aires, donde se distinguió por su desempeño académico y fue abanderada en su ceremonia de graduación. Inició su recorrido en Estudio Peiré como asistente legal y actualmente integra el área de Litigios.",
      "Además, lidera la estrategia de innovación, Proptech e Inteligencia Artificial del Estudio, impulsando la incorporación de nuevas tecnologías aplicadas a la práctica jurídica, la optimización de procesos y la experiencia del cliente. Se distingue por su curiosidad intelectual, iniciativa y capacidad para transformar nuevas ideas en soluciones concretas.",
    ],
  },
  {
    slug: "mariana-fernandez-vazquez",
    nombre: "Mariana Clara Fernández Vázquez",
    profesion: "Abogada",
    cargo: "Litigios",
    telefono: "11 2377-0019",
    whatsapp: "5491123770019",
    foto: "/img/equipo/mariana-fernandez-vazquez.webp",
    bio: [
      "Egresada de la Universidad Nacional de Lomas de Zamora, diplomada en Derecho Laboral y con experiencia en litigios laborales, civiles y comerciales. Integra el área de Litigios de Estudio Peiré, donde interviene en la gestión y seguimiento de asuntos judiciales y extrajudiciales.",
      "Se distingue especialmente por su capacidad de comunicación y desempeño en audiencias, combinando criterio jurídico, compromiso y una mirada orientada a la resolución de conflictos y a la cercanía con el cliente.",
    ],
  },
  {
    slug: "oriana-maggio",
    nombre: "Oriana Aldana Maggio",
    cargo: "Paralegal",
    telefono: "11 2831-3930",
    whatsapp: "5491128313930",
    foto: "/img/equipo/oriana-maggio.webp",
    bio: [
      "Integra el Equipo de Asesoramiento y Consultoría como Asistente Legal, mientras avanza en su formación como estudiante de Derecho en la UNLaM. Acompaña al equipo en asuntos vinculados al Derecho Inmobiliario, participando en el análisis de documentación y el seguimiento de consultas y operaciones.",
      "Se destaca por su compromiso, responsabilidad y vocación de aprendizaje, desarrollando su formación profesional dentro de una práctica orientada a la excelencia y al crecimiento continuo.",
    ],
  },
  {
    slug: "jazmin-lin",
    nombre: "Jazmin Lin",
    cargo: "Asistente Administrativa",
    telefono: "11 6903-4898",
    whatsapp: "5491169034898",
    foto: "/img/equipo/jazmin-lin.webp",
    bio: [
      "Integra el equipo de Litigios, brindando soporte administrativo y operativo en la gestión y seguimiento de los procesos judiciales. Actualmente cursa la carrera de Diseño Gráfico en la Universidad de Buenos Aires, formación que aporta a su perfil una mirada creativa, organizada y orientada a la comunicación.",
      "Se distingue por su compromiso, atención al detalle y vocación de servicio.",
    ],
  },
];

/** Enlace de WhatsApp con un saludo que ya nombra a la persona. */
export function waIntegrante(persona: Integrante) {
  const nombrePila = persona.nombre.split(" ")[0];
  const texto = `Hola ${nombrePila}, quiero hacer una consulta`;
  return `https://wa.me/${persona.whatsapp}?text=${encodeURIComponent(texto)}`;
}
