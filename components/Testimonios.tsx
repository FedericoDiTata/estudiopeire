"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { TESTIMONIOS } from "@/lib/testimonios";

export default function Testimonios() {
  // Mientras no haya testimonios reales cargados, la sección no se muestra.
  if (TESTIMONIOS.length === 0) return null;

  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading label="Clientes" titulo="Lo que dicen" />

        <div className="mt-16 grid gap-px bg-line md:grid-cols-3">
          {TESTIMONIOS.map((t, i) => (
            <motion.figure
              key={t.nombre}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 85,
                damping: 18,
                delay: i * 0.1,
              }}
              className="flex flex-col bg-surface p-9"
            >
              <blockquote className="flex-1 leading-relaxed text-ink">
                {t.texto}
              </blockquote>
              <figcaption className="mt-8 border-t border-line pt-5">
                <span className="block text-sm font-medium">{t.nombre}</span>
                <span className="mt-1 block text-sm text-muted">
                  {t.detalle}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
