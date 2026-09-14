"use client";

import { motion, type Variants } from "framer-motion";

type Props = {
  label: string;
  titulo: string;
  bajada?: string;
  claro?: boolean;
  centrado?: boolean;
};

const SUAVE = [0.22, 1, 0.36, 1] as const;

// Cada renglón entra desde abajo de su propio recorte. La visibilidad se mide en el contenedor, que siempre está
// en pantalla: un renglón que arranca escondido debajo de su recorte a veces nunca se detecta como visible, y el
// título quedaba invisible.
const renglon = (duration: number, delay = 0): Variants => ({
  oculto: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration, delay, ease: SUAVE } },
});

const bajadaVariantes: Variants = {
  oculto: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: SUAVE } },
};

export default function SectionHeading({
  label,
  titulo,
  bajada,
  claro = false,
  centrado = false,
}: Props) {
  return (
    <motion.div
      initial="oculto"
      whileInView="visible"
      viewport={{ once: true, margin: "100% 0px -18% 0px" }}
      className={centrado ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <div className="overflow-hidden">
        <motion.p
          variants={renglon(0.7)}
          className={`text-[0.75rem] font-medium tracking-[0.28em] uppercase ${
            claro ? "text-surface/70" : "text-burdeos"
          }`}
        >
          {label}
        </motion.p>
      </div>

      <div className="mt-4 overflow-hidden">
        <motion.h2
          variants={renglon(0.8, 0.08)}
          className={`font-display text-3xl leading-[1.1] font-light tracking-[-0.02em] sm:text-4xl md:text-5xl ${
            claro ? "text-paper" : "text-ink"
          }`}
        >
          {titulo}
        </motion.h2>
      </div>

      {bajada && (
        <motion.p
          variants={bajadaVariantes}
          className={`mt-5 text-base leading-relaxed ${
            claro ? "text-paper/80" : "text-muted"
          }`}
        >
          {bajada}
        </motion.p>
      )}
    </motion.div>
  );
}
