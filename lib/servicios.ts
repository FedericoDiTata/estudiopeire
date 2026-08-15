/**
 * Contenido de las páginas de servicio.
 *
 * Buena parte sale de la web actual del estudio (sobre todo de la sección de
 * preguntas frecuentes), así que es material propio, no inventado. Lo marcado
 * como REVISAR es redacción nuestra a partir de eso y necesita que el estudio
 * lo confirme.
 */

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

export const SERVICIOS_DETALLE: ServicioDetalle[] = [
  {
    slug: "sucesiones",
    nombre: "Sucesiones",
    titulo: "Sucesiones",
    bajada:
      "Para poner a tu nombre lo que quedó, y poder venderlo, transferirlo o simplemente cerrar el tema.",
    waMensaje: "Hola, quiero consultar por una sucesión",
    imagen: "/img/estudio_peire-homepage-libros_closeup.jpg",
    imagenAlt: "Códigos y material de trabajo sobre el escritorio",
    deQueSeTrata: [
      "Cuando una persona fallece, sus bienes no pasan solos a nombre de los herederos. Hace falta un trámite judicial que establezca quiénes son y qué le corresponde a cada uno.",
      "Hasta que ese trámite no termina, el departamento no se puede vender, el auto no se puede transferir y la plata del banco queda inmovilizada. Por eso conviene no dejarlo para después.",
    ],
    casos: [
      {
        titulo: "Un inmueble quedó a nombre de alguien que falleció",
        detalle:
          "Es el caso más común. Hasta que no se inscribe a nombre de los herederos, la propiedad no se puede vender ni hipotecar.",
      },
      {
        titulo: "Querés vender una propiedad heredada",
        detalle:
          "La operación no se puede escriturar si la sucesión no está terminada. Si ya tenés comprador, el tiempo corre en contra.",
      },
      {
        titulo: "Los herederos no se ponen de acuerdo",
        detalle:
          "Cuando hay desacuerdo sobre cómo repartir, el trámite necesita otra estrategia. Se puede resolver igual.",
      },
      {
        titulo: "Una sucesión que quedó por la mitad",
        detalle:
          "Trámites iniciados hace años y nunca terminados. Se retoman desde donde quedaron.",
      },
      {
        titulo: "Hay un testamento",
        detalle:
          "El procedimiento cambia y hay que verificar que el testamento sea válido en la forma en que fue hecho.",
      },
      {
        titulo: "Bienes en más de una jurisdicción",
        detalle:
          "Propiedades en CABA y en provincia, o en distintas provincias, que suman trámites en paralelo.",
      },
    ],
    proceso: {
      intro:
        "Cada sucesión tiene lo suyo, pero el recorrido general es siempre el mismo.",
      pasos: [
        {
          titulo: "Reunimos la documentación",
          detalle:
            "Partidas, títulos y todo lo que haga falta. Si falta algo, lo gestionamos nosotros.",
        },
        {
          titulo: "Se abre el sucesorio",
          detalle:
            "Se denuncian los bienes y los herederos, y se sortea el juzgado que va a intervenir.",
        },
        {
          titulo: "Sale la declaratoria de herederos",
          detalle:
            "Es la resolución del juzgado que dice quiénes son los herederos. El momento clave del trámite.",
        },
        {
          titulo: "Se inscriben los bienes",
          detalle:
            "Los bienes pasan a nombre de los herederos. Recién ahí se puede vender o transferir.",
        },
      ],
      nota: "Cuánto demora depende de la documentación de cada heredero, del juzgado que intervenga y de si hay acuerdo entre las partes. En la primera consulta te damos una estimación para tu caso.",
    },
    documentacion: {
      intro:
        "Con esto alcanza para empezar. Lo que falte lo vemos juntos, y varias de estas partidas las podemos pedir nosotros.",
      items: [
        "Partida de defunción",
        "Partidas de nacimiento de los herederos",
        "Partida de matrimonio, si la persona fallecida estaba casada",
        "Títulos de propiedad de los bienes: inmuebles, autos y demás",
        "Testamento, si lo hubiera",
      ],
    },
    descargable: {
      titulo: "Checklist de documentación para una sucesión",
      detalle:
        "La lista completa en PDF, para que la tengas a mano mientras juntás los papeles.",
    },
    preguntas: [
      {
        pregunta: "¿Demora mucho una sucesión?",
        respuesta:
          "Depende de varios factores relacionados con la documentación en general e individual de cada heredero, el juzgado que interviene y si hay acuerdo entre los destinatarios de la herencia.",
      },
      {
        pregunta: "¿Qué documentación necesito para iniciar una sucesión?",
        respuesta:
          "Partida de defunción, partidas de nacimiento de los herederos, partida de matrimonio si la persona fallecida estaba casada, títulos de propiedad de los bienes y testamento si lo hubiere.",
      },
      {
        pregunta: "¿Se puede vender la propiedad antes de terminar el trámite?",
        respuesta:
          "Se puede avanzar con una reserva o un boleto, pero la escritura recién se firma cuando los bienes están inscriptos a nombre de los herederos. Si ya tenés comprador, conviene arrancar el sucesorio cuanto antes.",
      },
      {
        pregunta: "¿Puedo hacer la consulta de manera virtual?",
        respuesta:
          "Sí, trabajamos de manera virtual y presencial. Para la consulta a distancia usamos Google Meet, Skype o videollamada de WhatsApp.",
      },
    ],
  },
  {
    slug: "derecho-inmobiliario",
    nombre: "Derecho Inmobiliario",
    titulo: "Derecho inmobiliario",
    bajada:
      "Comprar, vender, construir o resolver un conflicto de consorcio, con alguien que revisa los papeles antes de que sea tarde.",
    waMensaje: "Hola, quiero consultar por un tema inmobiliario",
    imagen: "/img/estudio_peire-equipo-background.jpg",
    imagenAlt: "Sala de reuniones del estudio",
    deQueSeTrata: [
      "Es la especialidad principal del estudio. Abarca todo lo que pasa alrededor de una propiedad: la operación de compraventa, el alquiler, la obra en construcción y los conflictos entre vecinos o con el consorcio.",
      "La mayoría de los problemas que llegan al estudio se podían haber evitado revisando un contrato a tiempo. Por eso trabajamos tanto en el conflicto como antes de que exista.",
    ],
    casos: [
      {
        titulo: "Comprar o vender una propiedad",
        detalle:
          "Revisión de la reserva, del boleto y del título antes de firmar. Es el momento en que se evitan casi todos los problemas posteriores.",
      },
      {
        titulo: "Desarrolladores y arquitectos",
        detalle:
          "Acompañamos a profesionales y empresas en todo el proceso de edificación, desde el inicio hasta el final del proyecto.",
      },
      {
        titulo: "Conflictos de propiedad horizontal",
        detalle:
          "Problemas con el consorcio, con la administración o entre propietarios. Es una de las especialidades del estudio.",
      },
      {
        titulo: "Fideicomisos",
        detalle:
          "Armado y revisión de fideicomisos inmobiliarios, incluida la inscripción y los requisitos que exige el organismo de control.",
      },
      {
        titulo: "Contratos de alquiler",
        detalle:
          "Redacción y revisión, y también los conflictos que aparecen durante la locación o al momento de la entrega.",
      },
      {
        titulo: "Problemas de título",
        detalle:
          "Títulos observados, propiedades sin escriturar o con inscripciones que no cierran.",
      },
    ],
    proceso: {
      intro:
        "En una compraventa, que es la consulta más frecuente, el recorrido es este.",
      pasos: [
        {
          titulo: "Estudio de título",
          detalle:
            "Se revisa el historial de la propiedad y se verifica que no haya deudas, embargos ni inscripciones pendientes.",
        },
        {
          titulo: "Reserva",
          detalle:
            "El primer documento que se firma, y donde ya se define más de lo que la gente supone. Conviene revisarlo antes.",
        },
        {
          titulo: "Boleto de compraventa",
          detalle:
            "Se fijan precio, plazos, condiciones de entrega y qué pasa si alguna de las partes se cae de la operación.",
        },
        {
          titulo: "Escritura",
          detalle:
            "Se firma ante escribano y la propiedad pasa a nombre del comprador.",
        },
      ],
      nota: "Si la propiedad viene de una herencia, primero hay que terminar la sucesión. Los dos trámites se pueden ir preparando en paralelo.",
    },
    documentacion: {
      intro:
        "Para revisar una operación de compraventa pedimos, según el caso, lo siguiente.",
      items: [
        "Título de propiedad",
        "Reserva o boleto, si ya se firmó alguno",
        "Reglamento de copropiedad, en propiedad horizontal",
        "Planos aprobados y final de obra, si corresponde",
        "Libre deuda de expensas, impuestos y servicios",
      ],
    },
    descargable: {
      titulo: "Qué mirar antes de firmar una reserva",
      detalle:
        "Los puntos que conviene revisar en el primer documento de una compraventa.",
    },
    extra: {
      titulo: "También trabajamos en civil y comercial",
      texto: [
        "Contratos, cobros, daños y perjuicios y conflictos entre socios. Son temas que suelen aparecer junto a una operación inmobiliaria y los resolvemos en el mismo estudio, sin derivar a nadie.",
      ],
    },
    preguntas: [
      {
        pregunta: "¿Trabajan con arquitectos y desarrolladores inmobiliarios?",
        respuesta:
          "Sí, acompañamos a los profesionales y empresas en todo el proceso de edificación hasta el final del proyecto.",
      },
      {
        pregunta: "¿Trabajan con conflictos de propiedad horizontal?",
        respuesta: "Sí, es una de las especialidades del estudio.",
      },
      {
        pregunta: "¿Brindan capacitaciones en derecho inmobiliario?",
        respuesta:
          "Sí, brindamos charlas, talleres y jornadas de capacitación, virtuales y presenciales, orientados a estudiantes, profesionales inmobiliarios y empresas.",
      },
      {
        pregunta: "¿Conviene consultar antes de firmar la reserva?",
        respuesta:
          "Sí. La reserva parece un trámite menor y define bastante más de lo que se cree. Revisarla cuesta mucho menos que discutir después.",
      },
    ],
  },
];

export function getServicio(slug: string) {
  return SERVICIOS_DETALLE.find((s) => s.slug === slug);
}
