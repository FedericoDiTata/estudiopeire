import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CierreContacto from "@/components/CierreContacto";

export const metadata: Metadata = {
  title: "El Estudio",
  description:
    "Quiénes somos, cómo trabajamos y dónde atendemos. Estudio jurídico especializado en derecho inmobiliario y sucesiones en CABA y GBA.",
};

/**
 * REVISAR con el estudio antes de publicar:
 * - matrícula, universidad y años de ejercicio de Silvina
 * - integrantes del equipo, con foto y rol
 * - listado de charlas y apariciones para la sección de prensa
 * Nada de eso se inventa: los bloques quedan armados y se completan.
 */

const COMPROMISOS = [
  {
    titulo: "Confidencialidad",
    detalle:
      "Lo que se habla en el estudio no sale del estudio. En sucesiones, donde suele haber conflictos de familia, esto importa más que en ningún otro lado.",
  },
  {
    titulo: "Te contestamos",
    detalle:
      "Si escribís, tenés respuesta. Podés preguntar en qué estado está tu trámite las veces que necesites, sin sentir que estás molestando.",
  },
  {
    titulo: "Sin letra chica",
    detalle:
      "Los honorarios y el alcance del trabajo se acuerdan por escrito antes de empezar. Sabés qué incluye y qué no.",
  },
  {
    titulo: "En castellano",
    detalle:
      "Te explicamos lo que está pasando sin jerga jurídica. Si no se entiende, no sirve.",
  },
];

const FOTOS = [
  {
    src: "/img/estudio_peire-equipo-background.jpg",
    alt: "Sala de reuniones del estudio",
  },
  {
    src: "/img/estudio_peire-homepage-background.jpg",
    alt: "Escritorio de trabajo del estudio",
  },
  {
    src: "/img/estudio_peire-homepage-libros_closeup.jpg",
    alt: "Códigos y material de consulta",
  },
];

export default function PaginaEstudio() {
  return (
    <>
      <PageHero
        eyebrow="El Estudio"
        titulo="Un estudio chico, que atiende cada caso de cerca"
        imagen="/img/estudio_peire-equipo-background.jpg"
        imagenAlt="Sala de reuniones del estudio"
      />

      {/* Quiénes somos */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16">
          <Reveal>
            <h2 className="font-display text-2xl leading-tight font-light tracking-[-0.01em] sm:text-3xl">
              Quiénes somos
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-[1.05rem] leading-relaxed text-muted">
              <p>
                Somos un estudio especializado en derecho inmobiliario y
                sucesiones. Trabajamos con dos tipos de clientes bastante
                distintos: familias que necesitan resolver una herencia, y
                profesionales del rubro inmobiliario que necesitan que alguien
                revise los papeles antes de firmar.
              </p>
              <p>
                Lo que tienen en común es que en los dos casos hay una propiedad
                de por medio y un trámite que si sale mal cuesta caro. Por eso
                trabajamos tanto en el conflicto como en evitarlo.
              </p>
              <p>
                Atendemos en toda el área metropolitana, de manera presencial en
                nuestras oficinas y también a distancia, para quienes están lejos
                o no pueden acercarse.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Silvina */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/img/estudio_peire-homepage-background.jpg"
                  alt="Silvina Peiré en el estudio"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-[0.7rem] font-medium tracking-[0.28em] text-burdeos uppercase">
                Al frente del estudio
              </p>
              <h2 className="mt-4 font-display text-3xl leading-[1.1] font-light tracking-[-0.02em] sm:text-4xl">
                Silvina Peiré
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted">
                <p>
                  Abogada especializada en derecho inmobiliario y sucesiones.
                  Acompaña operaciones de compraventa, procesos de obra y
                  conflictos de propiedad horizontal, además de llevar adelante
                  las sucesiones del estudio.
                </p>
                <p>
                  Da charlas, talleres y jornadas de capacitación sobre derecho
                  inmobiliario, orientadas a estudiantes, profesionales del rubro
                  y empresas, y participa de espacios del sector donde se discute
                  hacia dónde va el mercado.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Compromiso */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading
          label="Cómo trabajamos"
          titulo="Nuestro compromiso"
          bajada="Las cosas que nadie pregunta en voz alta antes de contratar un abogado, y que preferimos dejar dichas."
        />

        <div className="mt-14 grid gap-px bg-line sm:grid-cols-2">
          {COMPROMISOS.map((c, i) => (
            <Reveal
              key={c.titulo}
              delay={i * 0.07}
              className="bg-paper p-8 md:p-9"
            >
              <h3 className="text-[1.05rem] font-medium">{c.titulo}</h3>
              <p className="mt-3 leading-relaxed text-muted">{c.detalle}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* La oficina */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <SectionHeading
            label="Dónde trabajamos"
            titulo="La oficina"
            bajada="Atendemos con turno previo. Si preferís resolverlo a distancia, también se puede."
          />

          <div className="mt-14 grid gap-px bg-line sm:grid-cols-3">
            {FOTOS.map((foto, i) => (
              <Reveal key={foto.src} delay={i * 0.08}>
                <div className="group relative aspect-[4/3] overflow-hidden bg-paper">
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-out-quint)] group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CierreContacto
        titulo="Vení a contarnos tu caso"
        texto="Coordinamos una entrevista en la oficina o una videollamada, como te quede mejor."
      />
    </>
  );
}
