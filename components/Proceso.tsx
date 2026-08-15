"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const PASOS = [
  {
    titulo: "Primera consulta",
    detalle:
      "Nos contás qué te pasa y traés la documentación que tengas. Si no tenés nada todavía, también sirve.",
  },
  {
    titulo: "Revisamos el caso",
    detalle:
      "Estudiamos la situación y te decimos con claridad si hay algo para hacer y cuál es el camino más corto.",
  },
  {
    titulo: "Propuesta de trabajo",
    detalle:
      "Te pasamos por escrito qué incluye, cómo son los honorarios y una estimación de plazos. Sin sorpresas.",
  },
  {
    titulo: "Seguimiento",
    detalle:
      "Mientras el trámite avanza, podés preguntar en qué estado está las veces que necesites.",
  },
];

export default function Proceso() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          label="Cómo trabajamos"
          titulo="Qué pasa cuando nos escribís"
          bajada="Para mucha gente esta es la primera vez que consulta a un abogado. Así que te contamos de antemano cómo sigue."
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
              className="bg-surface p-8 md:p-9"
            >
              <span className="font-display text-4xl leading-none font-light text-burdeos/35">
                0{i + 1}
              </span>
              <h3 className="mt-6 text-lg font-medium">{p.titulo}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {p.detalle}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
