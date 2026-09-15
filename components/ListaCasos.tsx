"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Plus } from "lucide-react";
import { fotoCaso, type Caso } from "@/lib/servicios";

const fila: Variants = {
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
 * Los casos en pantallas chicas, donde los paneles que se expanden no entran.
 *
 * Van en una fila que se desliza con el dedo, con la tarjeta siguiente
 * asomando al costado: apiladas ocupaban más de 2.000 px. Cada tarjeta lleva
 * la foto del caso, el título, el detalle y un botón para la ampliación.
 *
 * La entrada la dispara la fila y no cada tarjeta: las que están fuera de la
 * pantalla nunca entrarían en vista por su cuenta.
 */
export default function ListaCasos({ casos }: { casos: Caso[] }) {
  const [abierto, setAbierto] = useState<number | null>(null);

  return (
    <motion.div
      role="region"
      aria-label="Casos en los que ayudamos"
      tabIndex={0}
      initial="oculto"
      whileInView="visible"
      viewport={{ once: true, margin: "100% 0px -18% 0px" }}
      variants={fila}
      className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-1 outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-burdeos [&::-webkit-scrollbar]:hidden"
    >
      {casos.map((caso, i) => {
        const activo = abierto === i;

        return (
          <motion.article
            key={caso.titulo}
            variants={tarjeta}
            className="flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper shadow-[var(--shadow-card)] sm:w-[60%]"
          >
            <div className="relative aspect-[16/10] bg-line">
              <Image
                src={fotoCaso(caso)}
                alt=""
                fill
                sizes="(max-width: 640px) 85vw, 60vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl leading-snug font-medium tracking-[-0.01em]">
                {caso.titulo}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">
                {caso.detalle}
              </p>

              {caso.ampliacion && (
                <>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out-quint)] ${
                      activo ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-5 border-t border-line pt-5 text-[0.95rem] leading-relaxed text-muted">
                        {caso.ampliacion}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setAbierto(activo ? null : i)}
                    aria-expanded={activo}
                    className="mt-6 inline-flex w-fit items-center gap-2 py-1 text-xs font-medium tracking-[0.14em] text-burdeos uppercase"
                  >
                    {activo ? "Ver menos" : "Ver detalle"}
                    <Plus
                      aria-hidden="true"
                      className={`h-3.5 w-3.5 transition-transform duration-300 ease-[var(--ease-out-quint)] ${
                        activo ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                </>
              )}
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}
