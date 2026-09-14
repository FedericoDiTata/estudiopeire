"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { QUIENES_SOMOS } from "@/lib/estudio";

const SUAVE = [0.22, 1, 0.36, 1] as const;

const AREAS = [
  {
    frase: QUIENES_SOMOS.relacion.inmuebles,
    area: "Derecho Inmobiliario",
    href: "/servicios/derecho-inmobiliario",
  },
  {
    frase: QUIENES_SOMOS.relacion.sucesiones,
    area: "Sucesiones",
    href: "/servicios/sucesiones",
  },
];

const contenedor: Variants = {
  oculto: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const bloque: Variants = {
  oculto: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: SUAVE } },
};

const linea: Variants = {
  oculto: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.1, delay: 0.25, ease: SUAVE },
  },
};

/**
 * La relación entre las dos especialidades, que es como el estudio cuenta su
 * propio origen. Va destacada en vino liso porque es lo que lo distingue: no
 * son dos áreas sueltas sino dos caras del mismo patrimonio. Lo visual son
 * las frases, con el contraste de pesos del logo.
 *
 * Todo depende de un solo observador del scroll: la línea del medio y las
 * dos frases heredan el estado del panel y no se desincronizan.
 */
export default function AmbasAreas() {
  const reducido = useReducedMotion();

  return (
    <motion.div
      initial={reducido ? "visible" : "oculto"}
      whileInView="visible"
      viewport={{ once: true, margin: "100% 0px -18% 0px" }}
      variants={contenedor}
      className="rounded-[var(--radius-card)] bg-burdeos-deep px-7 py-12 text-paper sm:px-10 md:px-14 md:py-16"
    >
      <motion.p
        variants={bloque}
        className="max-w-2xl text-[1.05rem] leading-relaxed text-balance text-paper/75"
      >
        {QUIENES_SOMOS.relacion.intro}
      </motion.p>

      <div className="relative mt-12 grid md:grid-cols-2">
        <motion.span
          aria-hidden="true"
          variants={linea}
          className="absolute inset-y-0 left-1/2 hidden w-px origin-top bg-paper/20 md:block"
        />

        {AREAS.map(({ frase, area, href }, i) => (
          <motion.div
            key={area}
            variants={bloque}
            className={
              i === 0
                ? "md:pr-14"
                : "mt-10 border-t border-paper/15 pt-10 md:mt-0 md:border-t-0 md:pt-0 md:pl-14"
            }
          >
            <p className="font-display text-2xl leading-snug tracking-[-0.01em] text-balance md:text-[1.75rem]">
              <span className="font-light text-paper/70">{frase[0]}</span>{" "}
              <span className="font-medium">{frase[1]}</span>
            </p>

            <Link
              href={href}
              className="group mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-paper/70 uppercase transition-colors duration-300 hover:text-paper"
            >
              {area}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-[var(--ease-out-quint)] group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
