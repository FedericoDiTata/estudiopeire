import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Placeholder from "@/components/Placeholder";
import AmbasAreas from "@/components/AmbasAreas";
import CompromisoScroll from "@/components/CompromisoScroll";
import TarjetasEquipo from "@/components/TarjetasEquipo";
import CierreContacto from "@/components/CierreContacto";
import { QUIENES_SOMOS } from "@/lib/estudio";
import { EQUIPO, SILVINA_INTRO, SILVINA_TEMAS } from "@/lib/equipo";
import { numerados } from "@/lib/placeholder";

export const metadata: Metadata = {
  title: "El Estudio",
  alternates: { canonical: "/estudio" },
  description:
    "Firma boutique especializada en Derecho Inmobiliario y Sucesorio, fundada en 2008 por Silvina Peiré. Conocé al equipo y nuestra forma de trabajar.",
};

/**
 * Historia, biografías y compromiso con los textos del estudio (documento
 * «INFO WEB», septiembre de 2026). Siguen de relleno las fotos de la oficina.
 *
 * El título de la portada usa las palabras del propio estudio («una firma
 * boutique especializada en Derecho Inmobiliario y Sucesorio»).
 *
 * «Quiénes somos» vive solamente acá. En la home el bloque equivalente presenta
 * a Silvina, para que la sección no se repita en las dos páginas.
 */
export default function PaginaEstudio() {
  const silvina = EQUIPO[0];

  return (
    <>
      <PageHero
        eyebrow="El Estudio"
        titulo="Una firma boutique de Derecho Inmobiliario y Sucesorio"
        imagen="/img/stock/portadas/libros-antiguos.webp"
        imagenAlt="Libros antiguos encuadernados sobre un escritorio, frente a una biblioteca"
        posicion="center 45%"
      />

      {/* Quiénes somos */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <SectionHeading label="Historia" titulo="Quiénes somos" />

            <Reveal delay={0.1} className="mt-8">
              <div className="space-y-4 text-[1.15rem] leading-relaxed text-ink">
                {QUIENES_SOMOS.historia.map((parrafo, i) => (
                  <p key={i}>{parrafo}</p>
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-muted">
                {QUIENES_SOMOS.proposito}
              </p>
            </Reveal>
          </div>

          {/* Foto con las ocho integrantes: en 3:2 entran todas sin recorte */}
          <Reveal
            delay={0.15}
            className="relative aspect-[3/2] overflow-hidden rounded-[var(--radius-card)] bg-line"
          >
            <Image
              src="/img/hero/equipo-oficina-1.webp"
              alt="Las ocho integrantes de Estudio Peiré en la oficina"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-12">
          <AmbasAreas />
        </div>
      </section>

      {/* Silvina. Su tarjeta del equipo trae hasta acá. */}
      <section id="silvina" className="scroll-mt-20 border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            {/* La foto no se estira al alto de la biografía: queda en 4:5 y
                en compu acompaña la lectura fija arriba. Retrato de la sesión
                de estudio, recortado del original para que se vea nítido. */}
            <div>
              <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-line sm:mx-auto sm:max-w-sm lg:sticky lg:top-28 lg:mx-0 lg:max-w-none">
                <Image
                  src="/img/equipo/silvina-peire-retrato.webp"
                  alt="Silvina Peiré, abogada y fundadora de Estudio Peiré"
                  fill
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 384px, 40vw"
                  className="object-cover object-top"
                />
              </Reveal>
            </div>

            <div>
              <Reveal>
                <span aria-hidden="true" className="block h-0.5 w-12 bg-burdeos" />
                <h2 className="mt-6 font-display text-3xl leading-[1.1] font-light tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  {silvina.nombre}
                </h2>
                <p className="mt-4 text-sm text-muted">{silvina.profesion}</p>
                <p className="mt-0.5 text-sm font-medium text-burdeos">
                  {silvina.cargo}
                </p>
                <p className="mt-7 text-[1.15rem] leading-relaxed text-ink">
                  {SILVINA_INTRO}
                </p>
              </Reveal>

              <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {SILVINA_TEMAS.map(({ titulo, texto }, i) => (
                  <Reveal
                    key={titulo}
                    delay={0.08 + i * 0.06}
                    className="border-t border-line pt-5"
                  >
                    <h3 className="font-display text-lg font-medium tracking-[-0.01em]">
                      {titulo}
                    </h3>
                    <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">
                      {texto}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeading
          label="El equipo"
          titulo="Quiénes trabajan en el estudio"
          bajada={QUIENES_SOMOS.equipo}
        />

        <TarjetasEquipo className="mt-10" />
      </section>

      {/* Compromiso: el encabezado queda fijo mientras los cinco títulos se
          tiñen con el scroll */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                label="Forma de trabajo"
                titulo="Nuestro compromiso"
                bajada={QUIENES_SOMOS.formaDeTrabajar}
              />
            </div>

            <CompromisoScroll />
          </div>
        </div>
      </section>

      {/* La oficina */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeading
          label="Dónde trabajamos"
          titulo="La oficina"
          bajada="Descripción"
        />

        <div className="mt-10 grid gap-px bg-line sm:grid-cols-3">
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
