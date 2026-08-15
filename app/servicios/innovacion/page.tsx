import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CierreContacto from "@/components/CierreContacto";

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
        bajada="Un área nueva, en un terreno donde todavía hay más preguntas que respuestas."
        imagen="/img/estudio_peire-homepage-libros_closeup.jpg"
        imagenAlt="Material de trabajo sobre el escritorio del estudio"
      />

      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <Reveal>
          <div className="space-y-6 text-[1.05rem] leading-relaxed text-muted">
            <p>
              El mercado inmobiliario está cambiando por donde se lo mire. Las
              operaciones se firman de otra manera, aparecen formas nuevas de
              invertir en ladrillos y buena parte de eso todavía no tiene una
              regulación clara.
            </p>
            <p>
              En el estudio decidimos meternos ahí antes de que sea urgente. Nos
              estamos capacitando y siguiendo de cerca cómo se va ordenando el
              tema, para poder acompañar a nuestros clientes cuando les toque y
              no cuando ya sea tarde.
            </p>
            <p>
              Es un área que estamos armando. Si tenés una consulta de este tipo,
              escribinos y la vemos.
            </p>
          </div>
        </Reveal>
      </section>

      <CierreContacto
        titulo="¿Tenés una consulta de este tipo?"
        texto="Contanos de qué se trata y te decimos si podemos ayudarte."
        waMensaje="Hola, quiero consultar por un tema de tecnología aplicada a lo inmobiliario"
      />
    </>
  );
}
