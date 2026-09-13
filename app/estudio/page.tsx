import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Placeholder from "@/components/Placeholder";
import AmbasAreas from "@/components/AmbasAreas";
import ColorChangeCards from "@/components/ui/color-change-card";
import TarjetasEquipo from "@/components/TarjetasEquipo";
import CierreContacto from "@/components/CierreContacto";
import { COMPROMISOS, QUIENES_SOMOS } from "@/lib/estudio";
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
 * «INFO WEB», septiembre de 2026). Siguen de relleno el título de la portada
 * y las fotos de la oficina.
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
        titulo="Título"
        imagen="/img/estudio_peire-equipo-background.jpg"
        imagenAlt="Sala de reuniones del estudio"
      />

      {/* Quiénes somos */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <SectionHeading label="El estudio" titulo="Quiénes somos" />

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

          <Reveal
            delay={0.15}
            className="relative aspect-[5/4] overflow-hidden rounded-[var(--radius-card)] bg-line"
          >
            <Image
              src="/img/hero/equipo-estudio-2.webp"
              alt="Parte del equipo de Estudio Peiré"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-[15%_50%]"
            />
          </Reveal>
        </div>

        <div className="mt-16">
          <AmbasAreas />
        </div>
      </section>

      {/* Silvina. Su tarjeta del equipo trae hasta acá. */}
      <section id="silvina" className="scroll-mt-20 border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            {/* En compu la foto acompaña todo el alto de la biografía. Es un
                recorte de la grupal en la oficina: su retrato de estudio ya
                está en la tarjeta del equipo, más abajo. */}
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-line sm:aspect-[4/3] lg:aspect-auto">
              <Image
                src="/img/equipo/silvina-peire-oficina.jpg"
                alt="Silvina Peiré en la oficina del estudio"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[55%_15%]"
              />
            </Reveal>

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
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading
          label="El equipo"
          titulo="Quiénes trabajan en el estudio"
          bajada={QUIENES_SOMOS.equipo}
        />

        <TarjetasEquipo className="mt-14" />
      </section>

      {/* Compromiso */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <SectionHeading
            label="Cómo trabajamos"
            titulo="Nuestro compromiso"
            bajada={QUIENES_SOMOS.formaDeTrabajar}
          />

          <ColorChangeCards
            className="mt-14"
            items={COMPROMISOS.map((c) => ({
              heading: c.titulo,
              icono: c.icono,
            }))}
          />
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
