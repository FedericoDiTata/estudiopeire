import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CierreContacto from "@/components/CierreContacto";
import { LOREM_CORTO, LOREM_LARGO, LOREM_MEDIO } from "@/lib/placeholder";

/**
 * Área definida por el estudio: asesoramiento a clientes del rubro inmobiliario
 * sobre uso de inteligencia artificial (publicidad, disclaimers, límites y
 * defensa del consumidor) y sobre tokenización, blockchain y smart contracts.
 *
 * Queda fuera el uso interno de herramientas, que no es un servicio.
 *
 * A diferencia de las otras dos, no lleva «paso a paso del trámite» ni
 * «documentación necesaria»: es asesoramiento, no un trámite con etapas.
 *
 * Contenido todavía de relleno, a redactar con el estudio.
 */

export const metadata: Metadata = {
  title: "Proptech e IA",
  description:
    "Asesoramiento legal en uso de inteligencia artificial para el sector inmobiliario, tokenización, blockchain y smart contracts.",
};

export default function PaginaInnovacion() {
  return (
    <>
      <PageHero
        eyebrow="Proptech e IA"
        titulo="Título"
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
        waMensaje="Hola, quiero consultar por un tema de proptech o IA"
      />
    </>
  );
}
