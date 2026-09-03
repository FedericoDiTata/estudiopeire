"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { TESTIMONIOS, PRENSA } from "@/lib/testimonios";

/**
 * Muro de testimonios en columnas. Los textos que mandó el estudio tienen
 * largos muy distintos (uno es casi un relato completo), así que una grilla
 * pareja deja huecos. Las columnas los acomodan sin espacios muertos y sin
 * recortar a nadie.
 */
export default function Testimonios() {
  if (TESTIMONIOS.length === 0) return null;

  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          label="Clientes"
          titulo="Lo que dicen quienes ya pasaron por acá"
        />

        <div className="mt-16 gap-6 md:columns-2">
          {TESTIMONIOS.map((t, i) => (
            <motion.figure
              key={t.nombre}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 85,
                damping: 18,
                delay: (i % 2) * 0.08,
              }}
              className="group mb-6 flex break-inside-avoid flex-col border border-line bg-paper p-8 transition-colors duration-500 hover:border-burdeos/40 md:p-10"
            >
              <span
                aria-hidden="true"
                className="font-display text-5xl leading-none text-burdeos/25 transition-colors duration-500 group-hover:text-burdeos/50"
              >
                &ldquo;
              </span>

              <blockquote className="mt-3 leading-relaxed text-ink">
                {t.texto}
              </blockquote>

              <figcaption className="mt-8 border-t border-line pt-5">
                <span className="block text-sm font-semibold">{t.nombre}</span>
                <span className="mt-1 block text-sm text-muted">
                  {t.detalle}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* La valoración de prensa va aparte: no es un cliente, es un colega
            hablando en un medio, y mezclarla restaría a las dos cosas. */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ type: "spring", stiffness: 85, damping: 18 }}
          className="mt-6 bg-burdeos-deep p-9 text-paper md:p-12"
        >
          <p className="text-[0.65rem] font-medium tracking-[0.28em] text-paper/55 uppercase">
            En los medios
          </p>
          <blockquote className="mt-6 max-w-3xl text-[1.05rem] leading-relaxed text-paper/90">
            {PRENSA.texto}
          </blockquote>
          <figcaption className="mt-8 border-t border-paper/20 pt-5">
            <span className="block text-sm font-semibold">{PRENSA.nombre}</span>
            <span className="mt-1 block text-sm text-paper/60">
              {PRENSA.detalle}
            </span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
