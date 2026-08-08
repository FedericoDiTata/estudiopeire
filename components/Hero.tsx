"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { waLink } from "@/lib/site";

// Fotos propias del estudio. Más lento que un slideshow comercial: acá el
// visitante muchas veces está atravesando un fallecimiento o un conflicto,
// el ritmo tiene que acompañar eso.
const SLIDES = [
  {
    src: "/img/estudio_peire-homepage-background.jpg",
    alt: "Silvina Peiré en su escritorio, durante una consulta",
  },
  {
    src: "/img/estudio_peire-equipo-background.jpg",
    alt: "Sala de reuniones del estudio",
  },
  {
    src: "/img/estudio_peire-homepage-libros_closeup.jpg",
    alt: "Códigos y material de trabajo sobre el escritorio",
  },
];

const SLIDE_DURATION = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      SLIDE_DURATION,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1.14 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] },
            scale: { duration: SLIDE_DURATION / 1000 + 1.4, ease: "linear" },
          }}
        >
          <Image
            src={SLIDES[index].src}
            alt={SLIDES[index].alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay más liviano que el estándar de la agencia: en la primera foto
          aparece Silvina, y su cara es el activo de confianza más fuerte que
          tienen. El degradado vertical carga el contraste donde va el texto. */}
      <div className="absolute inset-0 bg-ink/38" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/35 to-transparent" />

      <div className="relative mx-auto w-full max-w-3xl px-6 pt-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-[0.7rem] font-medium tracking-[0.32em] text-paper/75 uppercase"
        >
          Abogados · CABA y GBA
        </motion.p>

        <div className="mt-6 overflow-hidden">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[2rem] leading-[1.08] font-light tracking-[-0.02em] text-paper sm:text-5xl md:text-6xl"
          >
            Sucesiones y derecho inmobiliario,{" "}
            <span className="font-semibold">explicados de manera clara</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-paper/85 sm:text-lg"
        >
          Un equipo que se ocupa del trámite y te explica en qué estado está tu
          caso, cada vez que lo necesitás.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={waLink("Hola, quiero hacer una consulta")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-paper px-8 py-4 text-xs font-medium tracking-[0.14em] text-ink uppercase transition-colors duration-300 hover:bg-burdeos hover:text-paper sm:w-auto"
          >
            Consultá tu caso
          </a>
          <a
            href="#servicios"
            className="w-full border border-paper/50 px-8 py-4 text-xs font-medium tracking-[0.14em] text-paper uppercase transition-colors duration-300 hover:border-paper hover:bg-paper/10 sm:w-auto"
          >
            Ver especialidades
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ver imagen ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-paper" : "w-3 bg-paper/40 hover:bg-paper/70"
            }`}
          />
        ))}
      </div>

      <div className="absolute right-8 bottom-8 hidden font-sans text-xs tracking-[0.2em] text-paper/60 md:block">
        0{index + 1} / 0{SLIDES.length}
      </div>
    </section>
  );
}
