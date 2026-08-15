"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  titulo: string;
  bajada?: string;
  imagen: string;
  imagenAlt: string;
};

/**
 * Portada de las páginas internas. Más baja que la de la home y sin
 * slideshow: acá el visitante ya sabe a qué vino.
 */
export default function PageHero({
  eyebrow,
  titulo,
  bajada,
  imagen,
  imagenAlt,
}: Props) {
  return (
    <section className="relative flex min-h-[62svh] items-end overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={imagen}
          alt={imagenAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/25" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-[0.7rem] font-medium tracking-[0.3em] text-paper/70 uppercase"
        >
          {eyebrow}
        </motion.p>

        <div className="mt-5 overflow-hidden">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl font-display text-[2.1rem] leading-[1.06] font-light tracking-[-0.02em] text-paper sm:text-5xl md:text-6xl"
          >
            {titulo}
          </motion.h1>
        </div>

        {bajada && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-paper/85"
          >
            {bajada}
          </motion.p>
        )}
      </div>
    </section>
  );
}
