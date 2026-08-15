"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Placeholder from "./Placeholder";
import { LOREM_CORTO, numerados } from "@/lib/placeholder";

// De relleno: falta que el estudio defina cómo describe su forma de trabajo.
const PASOS = numerados("Paso", 4).map((titulo) => ({
  titulo,
  detalle: LOREM_CORTO,
}));

export default function Proceso() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          label="Cómo trabajamos"
          titulo="Qué pasa cuando nos escribís"
          bajada="Para mucha gente esta es la primera vez que consulta a un abogado. Así que conviene contar de antemano cómo sigue."
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
              className="bg-surface"
            >
              <Placeholder ratio="aspect-[4/3]" etiqueta="Foto" />

              <div className="p-8 md:p-9">
                <span className="font-display text-3xl leading-none font-light text-burdeos">
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-lg font-medium">{p.titulo}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  {p.detalle}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
