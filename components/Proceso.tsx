"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

/**
 * Los cuatro pasos salen del propio texto del estudio: «cada caso comienza con
 * un buen diagnóstico [...] para definir desde el inicio la estrategia más
 * adecuada. A partir de allí, acompañamos y coordinamos todo el proceso de
 * forma clara, ordenada y eficiente».
 *
 * REVISAR: los títulos de cada paso son nuestros, derivados de ese párrafo.
 * Conviene que el estudio los confirme.
 */
const PASOS = [
  {
    titulo: "Diagnóstico",
    detalle:
      "Analizamos la situación, los bienes y la documentación para entender con qué estamos trabajando.",
  },
  {
    titulo: "Estrategia",
    detalle:
      "Definimos desde el inicio el camino más adecuado, anticipando riesgos y evitando pasos innecesarios.",
  },
  {
    titulo: "Coordinación",
    detalle:
      "Llevamos adelante el proceso y coordinamos con escribanos, contadores y demás profesionales cuando hace falta.",
  },
  {
    titulo: "Resolución",
    detalle:
      "Cerramos la operación o el trámite, y te explicamos en qué estado está cada vez que lo necesitás.",
  },
];

export default function Proceso() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          label="Cómo trabajamos"
          titulo="Detrás de cada consulta hay una decisión importante"
          bajada="Por eso combinamos conocimiento jurídico, estrategia y una atención cercana. Así es el recorrido."
        />

        <ol className="mt-16 grid gap-px bg-line md:grid-cols-4">
          {PASOS.map((p, i) => (
            <motion.li
              key={p.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 85,
                damping: 18,
                delay: i * 0.08,
              }}
              className="group relative bg-surface p-8 transition-colors duration-500 hover:bg-paper md:p-9"
            >
              <span className="font-display text-4xl leading-none font-light text-burdeos">
                0{i + 1}
              </span>
              <h3 className="mt-6 text-lg font-medium">{p.titulo}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {p.detalle}
              </p>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-burdeos transition-transform duration-500 ease-[var(--ease-out-quint)] group-hover:scale-x-100"
              />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
