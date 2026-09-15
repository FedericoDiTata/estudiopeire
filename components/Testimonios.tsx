"use client";

import { motion, type Variants } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { TESTIMONIOS, PRENSA } from "@/lib/testimonios";

const lista: Variants = {
  oculto: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const tarjeta: Variants = {
  oculto: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 85, damping: 18 },
  },
};

/**
 * Testimonios. Los textos que mandó el estudio tienen largos muy distintos
 * (uno es casi un relato completo), así que en pantallas anchas van en
 * columnas: se acomodan sin huecos y sin recortar a nadie.
 *
 * En celular, apilados ocupaban más de 3.000 px. Ahí pasan a una fila que se
 * desliza con el dedo, con la siguiente tarjeta asomando al costado.
 *
 * La entrada la dispara la lista y no cada tarjeta: en la fila deslizable las
 * que están fuera de la pantalla nunca entrarían en vista.
 */
export default function Testimonios() {
  if (TESTIMONIOS.length === 0) return null;

  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeading
          label="Clientes"
          titulo="Lo que dicen quienes ya pasaron por acá"
        />

        <motion.div
          role="region"
          aria-label="Testimonios de clientes"
          tabIndex={0}
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true, margin: "100% 0px -18% 0px" }}
          variants={lista}
          className="-mx-6 mt-10 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-1 outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-burdeos md:mx-0 md:block md:columns-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIOS.map((t) => (
            <motion.figure
              key={t.nombre}
              variants={tarjeta}
              className="group flex w-[85%] shrink-0 snap-start flex-col border border-line bg-paper p-7 transition-colors duration-500 hover:border-burdeos/40 md:mb-5 md:w-auto md:break-inside-avoid md:p-8"
            >
              <span
                aria-hidden="true"
                className="font-display text-5xl leading-none text-burdeos/25 transition-colors duration-500 group-hover:text-burdeos/50"
              >
                &ldquo;
              </span>

              <blockquote className="mt-3 flex-1 leading-relaxed text-ink">
                {t.texto}
              </blockquote>

              <figcaption className="mt-7 border-t border-line pt-5">
                <span className="block text-sm font-semibold">{t.nombre}</span>
                <span className="mt-1 block text-sm text-muted">
                  {t.detalle}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        {/* La valoración de prensa va aparte: no es un cliente, es un colega
            hablando en un medio, y mezclarla restaría a las dos cosas. */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100% 0px -18% 0px" }}
          transition={{ type: "spring", stiffness: 85, damping: 18 }}
          className="mt-5 bg-burdeos-deep p-8 text-paper md:p-10"
        >
          <p className="text-[0.75rem] font-medium tracking-[0.28em] text-paper/55 uppercase">
            En los medios
          </p>
          <blockquote className="mt-5 max-w-3xl text-[1.05rem] leading-relaxed text-paper/90">
            {PRENSA.texto}
          </blockquote>
          <figcaption className="mt-7 border-t border-paper/20 pt-5">
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
