import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BloqueTexto from "@/components/BloqueTexto";
import SectionHeading from "@/components/SectionHeading";
import AreasProptech from "@/components/AreasProptech";
import CierreContacto from "@/components/CierreContacto";
import { PROPTECH } from "@/lib/proptech";
import { waLink } from "@/lib/site";

/**
 * Área definida por el estudio: asesoramiento legal para incorporar nuevas
 * tecnologías en el sector inmobiliario. Textos del documento «INFO WEB»
 * (septiembre de 2026).
 *
 * A diferencia de las otras dos, no lleva «paso a paso del trámite» ni
 * «documentación necesaria»: es asesoramiento, no un trámite con etapas.
 */

export const metadata: Metadata = {
  title: "Proptech e IA",
  alternates: { canonical: "/servicios/proptech-ia" },
  description:
    "Asesoramiento legal para incorporar nuevas tecnologías en el sector inmobiliario: inteligencia artificial, protección de datos, smart contracts y tokenización.",
};

export default function PaginaProptech() {
  return (
    <>
      <PageHero
        eyebrow="Especialidades"
        titulo="Proptech e IA"
        bajada={PROPTECH.lema}
      />

      {/* De qué se trata */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <BloqueTexto
          eyebrow="Proptech e IA"
          titulo="De qué se trata"
          parrafos={PROPTECH.deQueSeTrata}
          icono="proptech"
        >
          <a
            href={waLink(PROPTECH.waMensaje)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-burdeos px-7 py-3.5 text-xs font-medium tracking-[0.14em] text-paper uppercase transition-colors duration-300 hover:bg-burdeos-deep"
          >
            Consultar por WhatsApp
          </a>
        </BloqueTexto>
      </section>

      {/* En qué te asesoramos */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <SectionHeading label="Asesoramiento" titulo="En qué te asesoramos" />

          <AreasProptech className="mt-14" />
        </div>
      </section>

      <CierreContacto
        titulo="¿Tenés una consulta de este tipo?"
        texto="Nuestro equipo se comunica para conocer el motivo de la consulta y coordinar la modalidad y el horario más conveniente."
        waMensaje={PROPTECH.waMensaje}
      />
    </>
  );
}
