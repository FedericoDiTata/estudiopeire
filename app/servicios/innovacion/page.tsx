import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CierreContacto from "@/components/CierreContacto";
import { LOREM_CORTO, LOREM_LARGO, LOREM_MEDIO } from "@/lib/placeholder";

/**
 * BORRADOR. Falta que el estudio defina de qué se trata esta área para poder
 * elegir un nombre que la gente busque en Google y escribir el contenido real.
 *
 * A diferencia de las otras dos, esta no es una página de servicio: es una
 * página de posicionamiento. El área todavía se está armando, así que no puede
 * prometer casos, plazos ni documentación. Lo que sí puede hacer es explicar
 * hacia dónde va el estudio, que es lo que la diferencia.
 */

export const metadata: Metadata = {
  title: "Innovación y tecnología",
  description:
    "El área que el estudio está desarrollando alrededor de la tecnología aplicada a las operaciones inmobiliarias.",
};

export default function PaginaInnovacion() {
  return (
    <>
      <PageHero
        eyebrow="En desarrollo"
        titulo="Hacia dónde va el estudio"
        bajada="Descripción"
        imagen="/img/estudio_peire-homepage-libros_closeup.jpg"
        imagenAlt="Material de trabajo sobre el escritorio del estudio"
      />

      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <Reveal>
          <span aria-hidden="true" className="mb-8 block h-0.5 w-12 bg-burdeos" />
          <div className="space-y-6 text-[1.05rem] leading-relaxed text-muted">
            <p>{LOREM_LARGO}</p>
            <p>{LOREM_MEDIO}</p>
            <p>{LOREM_CORTO}</p>
          </div>
        </Reveal>
      </section>

      <CierreContacto
        titulo="¿Tenés una consulta de este tipo?"
        waMensaje="Hola, quiero consultar por un tema de tecnología aplicada a lo inmobiliario"
      />
    </>
  );
}
