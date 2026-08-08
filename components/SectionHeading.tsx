"use client";

import { motion } from "framer-motion";

type Props = {
  label: string;
  titulo: string;
  bajada?: string;
  claro?: boolean;
  centrado?: boolean;
};

export default function SectionHeading({
  label,
  titulo,
  bajada,
  claro = false,
  centrado = false,
}: Props) {
  return (
    <div className={centrado ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className="overflow-hidden">
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`text-[0.7rem] font-medium tracking-[0.28em] uppercase ${
            claro ? "text-surface/70" : "text-burdeos"
          }`}
        >
          {label}
        </motion.p>
      </div>

      <div className="mt-4 overflow-hidden">
        <motion.h2
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={`font-display text-3xl leading-[1.1] font-light tracking-[-0.02em] sm:text-4xl md:text-5xl ${
            claro ? "text-paper" : "text-ink"
          }`}
        >
          {titulo}
        </motion.h2>
      </div>

      {bajada && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-5 text-base leading-relaxed ${
            claro ? "text-paper/80" : "text-muted"
          }`}
        >
          {bajada}
        </motion.p>
      )}
    </div>
  );
}
