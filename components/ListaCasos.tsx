"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Caso } from "@/lib/servicios";

/**
 * Los casos son el contenido más fuerte que mandó el estudio, así que en vez
 * de una grilla de tarjetas iguales van como una lista editorial: cada fila se
 * abre y muestra el detalle ampliado. El visitante reconoce su propia
 * situación de un vistazo y profundiza solo en la que le toca.
 */
export default function ListaCasos({ casos }: { casos: Caso[] }) {
  const [abierto, setAbierto] = useState<number | null>(null);

  return (
    <ul className="border-t border-line">
      {casos.map((caso, i) => {
        const activo = abierto === i;
        const tieneMas = Boolean(caso.ampliacion);

        return (
          <motion.li
            key={caso.titulo}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              type: "spring",
              stiffness: 85,
              damping: 18,
              delay: i * 0.05,
            }}
            className="group relative border-b border-line"
          >
            <button
              type="button"
              onClick={() => tieneMas && setAbierto(activo ? null : i)}
              aria-expanded={tieneMas ? activo : undefined}
              className="relative flex w-full items-start gap-6 py-8 text-left md:gap-10"
              style={{ cursor: tieneMas ? "pointer" : "default" }}
            >
              <span className="font-display text-2xl leading-none font-light text-burdeos md:text-3xl">
                0{i + 1}
              </span>

              <span className="flex-1">
                <span className="block font-display text-xl leading-snug font-medium tracking-[-0.01em] transition-colors duration-300 group-hover:text-burdeos md:text-2xl">
                  {caso.titulo}
                </span>
                <span className="mt-3 block max-w-2xl leading-relaxed text-muted">
                  {caso.detalle}
                </span>
              </span>

              {tieneMas && (
                <span
                  aria-hidden="true"
                  className={`mt-1 shrink-0 text-xl leading-none font-light transition-transform duration-300 ease-[var(--ease-out-quint)] ${
                    activo ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              )}
            </button>

            {tieneMas && (
              <div
                className={`grid transition-[grid-template-rows] duration-400 ease-[var(--ease-out-quint)] ${
                  activo ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-8 pl-12 leading-relaxed text-muted md:pl-16">
                    {caso.ampliacion}
                  </p>
                </div>
              </div>
            )}

            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-burdeos transition-transform duration-500 ease-[var(--ease-out-quint)] group-hover:scale-x-100"
            />
          </motion.li>
        );
      })}
    </ul>
  );
}
