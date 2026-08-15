import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Acordeon from "@/components/Acordeon";
import Placeholder from "@/components/Placeholder";
import CierreContacto from "@/components/CierreContacto";
import { SERVICIOS_DETALLE, getServicio } from "@/lib/servicios";
import { waLink } from "@/lib/site";

export function generateStaticParams() {
  return SERVICIOS_DETALLE.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const servicio = getServicio(slug);
  if (!servicio) return {};
  return {
    title: servicio.titulo,
    description: servicio.bajada,
    openGraph: { title: servicio.titulo, description: servicio.bajada },
  };
}

export default async function PaginaServicio({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const servicio = getServicio(slug);
  if (!servicio) notFound();

  return (
    <>
      <PageHero
        eyebrow="Especialidades"
        titulo={servicio.titulo}
        bajada={servicio.bajada}
        imagen={servicio.imagen}
        imagenAlt={servicio.imagenAlt}
      />

      {/* De qué se trata */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16">
          <Reveal>
            <h2 className="font-display text-2xl leading-tight font-light tracking-[-0.01em] sm:text-3xl">
              De qué se trata
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-[1.05rem] leading-relaxed text-muted">
              {servicio.deQueSeTrata.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <a
              href={waLink(servicio.waMensaje)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-burdeos px-7 py-3.5 text-xs font-medium tracking-[0.14em] text-paper uppercase transition-colors duration-300 hover:bg-burdeos-deep"
            >
              Consultar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* En qué casos te ayudamos */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <SectionHeading
            label="Situaciones"
            titulo="En qué casos te ayudamos"
            bajada="Descripción"
          />

          <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {servicio.casos.map((caso, i) => (
              <Reveal key={caso.titulo} delay={i * 0.06} className="bg-surface">
                <Placeholder ratio="aspect-[16/9]" etiqueta="Foto" />
                <div className="p-8">
                  <h3 className="text-[1.05rem] leading-snug font-medium">
                    {caso.titulo}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                    {caso.detalle}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Paso a paso del trámite */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading
          label="Paso a paso"
          titulo="Cómo es el trámite"
          bajada={servicio.proceso.intro}
        />

        <ol className="mt-14 space-y-px bg-line">
          {servicio.proceso.pasos.map((paso, i) => (
            <Reveal key={paso.titulo} delay={i * 0.06}>
              <li className="grid gap-4 bg-paper py-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-10">
                <span className="font-display text-3xl leading-none font-light text-burdeos sm:w-16">
                  0{i + 1}
                </span>
                <div className="max-w-2xl">
                  <h3 className="text-lg font-medium">{paso.titulo}</h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    {paso.detalle}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        {servicio.proceso.nota && (
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-2xl border-t border-line pt-8 leading-relaxed text-muted">
              {servicio.proceso.nota}
            </p>
          </Reveal>
        )}
      </section>

      {/* Documentación */}
      {servicio.documentacion && (
        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <Reveal>
                <SectionHeading
                  label="Documentación"
                  titulo="Qué vas a necesitar"
                  bajada={servicio.documentacion.intro}
                />
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="divide-y divide-line border-y border-line">
                  {servicio.documentacion.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 py-4 leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-burdeos"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {servicio.descargable && (
                  <div className="mt-10 border border-line bg-paper p-7">
                    <p className="text-[0.65rem] font-medium tracking-[0.24em] text-burdeos uppercase">
                      Para descargar
                    </p>
                    <h3 className="mt-3 text-lg leading-snug font-medium">
                      {servicio.descargable.titulo}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                      {servicio.descargable.detalle}
                    </p>
                    {/* REVISAR: falta el archivo. Cuando el estudio lo envíe,
                        se reemplaza por el enlace de descarga directa. */}
                    <span className="mt-5 inline-block text-xs font-medium tracking-[0.14em] text-grey uppercase">
                      Disponible en breve
                    </span>
                  </div>
                )}
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Bloque extra: civil y comercial dentro de inmobiliario */}
      {servicio.extra && (
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-2xl leading-tight font-light tracking-[-0.01em] sm:text-3xl">
              {servicio.extra.titulo}
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted">
              {servicio.extra.texto.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* Preguntas del servicio */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <SectionHeading
            label="Preguntas"
            titulo={`Dudas sobre ${servicio.nombre.toLowerCase()}`}
          />

          <div className="mt-12 max-w-3xl">
            <Acordeon items={servicio.preguntas} />
            <Link
              href="/preguntas-frecuentes"
              className="group mt-8 inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-burdeos uppercase"
            >
              Ver todas las preguntas
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-[var(--ease-out-quint)] group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CierreContacto
        titulo="Contanos tu caso"
        waMensaje={servicio.waMensaje}
      />
    </>
  );
}
