import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Placeholder from "@/components/Placeholder";
import BloqueTexto from "@/components/BloqueTexto";
import CierreContacto from "@/components/CierreContacto";
import { LOREM_CORTO, LOREM_LARGO, LOREM_MEDIO, numerados } from "@/lib/placeholder";

export const metadata: Metadata = {
  title: "El Estudio",
  description:
    "Quiénes somos, cómo trabajamos y dónde atendemos. Estudio jurídico especializado en derecho inmobiliario y sucesiones en CABA y GBA.",
};

/**
 * Contenido de relleno. Lo define el estudio: historia, biografía y matrícula
 * de Silvina, integrantes del equipo y forma de trabajo.
 *
 * «Quiénes somos» vive solamente acá. En la home el bloque equivalente presenta
 * a Silvina, para que la sección no se repita en las dos páginas.
 *
 * La foto de Silvina es la única imagen real del sitio: el resto son espacios
 * reservados hasta que el estudio elija el material definitivo.
 */

const COMPROMISOS = numerados("Punto", 4).map((titulo) => ({
  titulo,
  detalle: LOREM_MEDIO,
}));

export default function PaginaEstudio() {
  return (
    <>
      <PageHero
        eyebrow="El Estudio"
        titulo="Título"
        imagen="/img/estudio_peire-equipo-background.jpg"
        imagenAlt="Sala de reuniones del estudio"
      />

      {/* Quiénes somos */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <BloqueTexto
          eyebrow="El estudio"
          titulo="Quiénes somos"
          parrafos={[LOREM_LARGO, LOREM_MEDIO]}
          icono="estudio"
        />
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
              <span aria-hidden="true" className="block h-0.5 w-12 bg-burdeos" />
              <h2 className="mt-6 font-display text-3xl leading-[1.1] font-light tracking-[-0.02em] sm:text-4xl">
                Silvina Peiré
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted">
                <p>{LOREM_LARGO}</p>
                <p>{LOREM_CORTO}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading
          label="El equipo"
          titulo="Quiénes trabajan en el estudio"
          bajada="Descripción"
        />

        <div className="mt-14 grid gap-px bg-line sm:grid-cols-3">
          {numerados("Integrante", 3).map((nombre, i) => (
            <Reveal key={nombre} delay={i * 0.08} className="bg-paper">
              <Placeholder ratio="aspect-[4/5]" etiqueta="Foto" />
              <div className="p-8">
                <h3 className="text-lg font-medium">{nombre}</h3>
                <p className="mt-1 text-sm text-burdeos">Rol</p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  {LOREM_CORTO}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Compromiso */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <SectionHeading
            label="Cómo trabajamos"
            titulo="Nuestro compromiso"
            bajada="Descripción"
          />

          <div className="mt-14 grid gap-px bg-line sm:grid-cols-2">
            {COMPROMISOS.map((c, i) => (
              <Reveal
                key={c.titulo}
                delay={i * 0.07}
                className="bg-surface p-8 md:p-9"
              >
                <span
                  aria-hidden="true"
                  className="mb-5 block h-0.5 w-8 bg-burdeos"
                />
                <h3 className="text-[1.05rem] font-medium">{c.titulo}</h3>
                <p className="mt-3 leading-relaxed text-muted">{c.detalle}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* La oficina */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading
          label="Dónde trabajamos"
          titulo="La oficina"
          bajada="Descripción"
        />

        <div className="mt-14 grid gap-px bg-line sm:grid-cols-3">
          {numerados("Foto", 3).map((etiqueta, i) => (
            <Reveal key={etiqueta} delay={i * 0.08}>
              <Placeholder ratio="aspect-[4/3]" etiqueta={etiqueta} />
            </Reveal>
          ))}
        </div>
      </section>

      <CierreContacto
        titulo="Vení a contarnos tu caso"
      />
    </>
  );
}
