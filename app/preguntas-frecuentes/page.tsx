import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqNavegable from "@/components/FaqNavegable";
import CierreContacto from "@/components/CierreContacto";
import { FAQ } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Dudas habituales sobre sucesiones, derecho inmobiliario y cómo trabaja el estudio. Documentación, plazos y primera consulta.",
};

export default function PaginaFaq() {
  // Datos estructurados de preguntas frecuentes. El sitio actual no tiene
  // ninguno, y es lo que permite que Google muestre las respuestas directo
  // en el resultado de búsqueda.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.pregunta,
      acceptedAnswer: { "@type": "Answer", text: f.respuesta },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Preguntas frecuentes"
        titulo="Las dudas que más nos llegan"
        bajada="Si lo tuyo no está acá, escribinos y te respondemos igual."
        imagen="/img/estudio_peire-homepage-libros_closeup.jpg"
        imagenAlt="Códigos y material de consulta del estudio"
      />

      <section className="mx-auto max-w-4xl px-6 py-24 md:py-28">
        <FaqNavegable />
      </section>

      <CierreContacto
        titulo="¿No encontraste tu respuesta?"
        texto="Escribinos y te contestamos. Si el tema da para más, coordinamos una consulta."
      />
    </>
  );
}
