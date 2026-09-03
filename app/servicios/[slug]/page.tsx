import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import BloqueTexto from "@/components/BloqueTexto";
import SectionHeading from "@/components/SectionHeading";
import CasosExpandibles from "@/components/CasosExpandibles";
import ListaCasos from "@/components/ListaCasos";
import Acordeon from "@/components/Acordeon";
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
        <BloqueTexto
          eyebrow={servicio.nombre}
          titulo="De qué se trata"
          parrafos={servicio.deQueSeTrata}
          icono={servicio.slug === "sucesiones" ? "sucesiones" : "inmobiliario"}
        >
          <a
            href={waLink(servicio.waMensaje)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-burdeos px-7 py-3.5 text-xs font-medium tracking-[0.14em] text-paper uppercase transition-colors duration-300 hover:bg-burdeos-deep"
          >
            Consultar por WhatsApp
          </a>
        </BloqueTexto>
      </section>

      {/* En qué casos te ayudamos */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <SectionHeading
            label="Situaciones"
            titulo="En qué casos te ayudamos"
            bajada="Recorré las situaciones y quedate en la que se parece a lo tuyo."
          />

          {/* Mismo contenido en los dos formatos: paneles cuando hay lugar
              para recorrerlos con el mouse, tarjetas en pantalla chica. */}
          <div className="mt-14 hidden md:block">
            <CasosExpandibles casos={servicio.casos} />
          </div>
          <div className="mt-14 md:hidden">
            <ListaCasos casos={servicio.casos} />
          </div>
        </div>
      </section>

      {/* Civil y comercial dentro de inmobiliario */}
      {servicio.extra && (
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <BloqueTexto
            eyebrow="Otras áreas"
            titulo={servicio.extra.titulo}
            parrafos={servicio.extra.texto}
            icono="civil"
          />
        </section>
      )}

      {/* Preguntas del servicio */}
      {servicio.preguntas.length > 0 && (
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
      )}

      <CierreContacto
        titulo="Contanos tu caso"
        texto="Nuestro equipo se comunica para conocer el motivo de la consulta y coordinar la modalidad y el horario más conveniente."
        waMensaje={servicio.waMensaje}
      />
    </>
  );
}
