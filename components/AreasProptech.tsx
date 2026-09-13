"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { AREAS_PROPTECH } from "@/lib/proptech";
import { cn } from "@/lib/utils";

const SUAVE = [0.22, 1, 0.36, 1] as const;

const grilla: Variants = {
  oculto: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const tarjeta: Variants = {
  oculto: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

const icono: Variants = {
  oculto: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15, ease: SUAVE },
  },
};

/**
 * Las siete áreas de Proptech e IA.
 *
 * Grilla de cuatro columnas sin huecos: la primera y la sexta ocupan dos
 * (2+1+1 arriba, 1+1+2 abajo). Capacitación es otro tipo de servicio, para
 * equipos y no para una operación puntual, así que cierra como franja a lo
 * ancho.
 *
 * Un solo observador del scroll en la lista: las tarjetas entran escalonadas
 * y el ícono de cada una aparece apenas después.
 */
export default function AreasProptech({ className }: { className?: string }) {
  const reducido = useReducedMotion();
  const areas = AREAS_PROPTECH.slice(0, -1);
  const capacitacion = AREAS_PROPTECH[AREAS_PROPTECH.length - 1];
  const IconoCapacitacion = capacitacion.icono;

  return (
    <motion.ul
      initial={reducido ? "visible" : "oculto"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={grilla}
      className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-4", className)}
    >
      {areas.map(({ titulo, detalle, icono: Icono }, i) => {
        const ancha = i === 0 || i === areas.length - 1;

        return (
          <motion.li
            key={titulo}
            variants={tarjeta}
            className={cn(
              "group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface p-7 shadow-[var(--shadow-card)] transition-[border-color,box-shadow] duration-500 ease-[var(--ease-out-quint)] hover:border-burdeos/35 hover:shadow-[var(--shadow-card-hover)] md:p-8",
              ancha && "md:col-span-2",
            )}
          >
            <motion.span variants={icono} className="inline-flex text-burdeos">
              <Icono
                className="h-7 w-7 transition-transform duration-500 ease-[var(--ease-out-quint)] group-hover:-translate-y-0.5"
                strokeWidth={1.3}
                aria-hidden="true"
              />
            </motion.span>

            <h3
              className={cn(
                "mt-6 font-display leading-snug font-medium tracking-[-0.01em] text-ink",
                ancha ? "max-w-sm text-2xl" : "text-xl",
              )}
            >
              {titulo}
            </h3>
            <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-balance text-muted">
              {detalle}
            </p>
          </motion.li>
        );
      })}

      <motion.li
        variants={tarjeta}
        className="rounded-[var(--radius-card)] bg-burdeos p-7 text-paper md:col-span-2 md:p-10 lg:col-span-4"
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
          <motion.span variants={icono} className="inline-flex shrink-0">
            <IconoCapacitacion
              className="h-9 w-9"
              strokeWidth={1.2}
              aria-hidden="true"
            />
          </motion.span>

          <div>
            <h3 className="font-display text-2xl leading-snug font-light tracking-[-0.01em] md:text-[1.75rem]">
              {capacitacion.titulo}
            </h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-paper/75">
              {capacitacion.detalle}
            </p>
          </div>
        </div>
      </motion.li>
    </motion.ul>
  );
}
