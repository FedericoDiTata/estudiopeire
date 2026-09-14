"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { waLink } from "@/lib/site";

// Alterna fotos del equipo (sesión de septiembre de 2026) con fotos de stock
// del barrio y del trabajo del estudio, para que no sean todas grupales.
// La grupal con todas sentadas va en Quiénes somos: acá no se repite.
// `posicion` sube el encuadre para que lo importante quede sobre el texto.
const SLIDES = [
  {
    src: "/img/hero/equipo-oficina-2.webp",
    alt: "Las ocho integrantes del estudio reunidas en la oficina",
    posicion: "center 30%",
  },
  {
    src: "/img/stock/portadas/puerto-madero-obras.webp",
    alt: "Torres en construcción en Puerto Madero, el barrio del estudio",
    posicion: "center 50%",
  },
  {
    src: "/img/hero/equipo-estudio-1.webp",
    alt: "Cuatro integrantes del equipo del estudio",
    posicion: "center 30%",
  },
  {
    src: "/img/stock/portadas/llaves.webp",
    alt: "Entrega de las llaves de una casa",
    posicion: "center 40%",
  },
];

// Más lento que un slideshow comercial: acá el visitante muchas veces está
// atravesando un fallecimiento o un conflicto, el ritmo tiene que acompañar.
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
    <section className="relative flex min-h-[92svh] items-end overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0"
          // Acercamiento más corto que antes: en las grupales hay gente en los
          // bordes, y un zoom fuerte las dejaba afuera del cuadro.
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1.08 }}
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
            style={{ objectPosition: SLIDES[index].posicion }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Las fotos muestran al equipo: el velo es liviano arriba, donde están
          las caras, y carga la oscuridad abajo, donde va el texto. La franja
          superior mantiene legible el menú transparente. */}
      <div className="absolute inset-0 bg-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-burdeos-deep/25 via-transparent to-burdeos-deep/25" />

      <div className="relative mx-auto w-full max-w-3xl px-6 pb-20 text-center md:pb-24 md:[@media(max-height:820px)]:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <Image
            src="/img/logo-blanco.png"
            alt="Estudio Peiré · Abogados"
            width={5441}
            height={1238}
            priority
            className="h-14 w-auto sm:h-20 sm:[@media(max-height:820px)]:h-14"
          />
        </motion.div>

        <div className="mt-10 overflow-hidden [@media(max-height:820px)]:mt-6">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[1.6rem] leading-[1.15] font-light tracking-[-0.01em] text-paper sm:text-3xl md:text-4xl"
          >
            Derecho Inmobiliario y Sucesiones
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row [@media(max-height:820px)]:mt-8"
        >
          <a
            href={waLink("Hola, quiero hacer una consulta")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-burdeos px-8 py-4 text-xs font-medium tracking-[0.14em] text-paper uppercase transition-colors duration-300 hover:bg-burdeos-deep sm:w-auto"
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
    </section>
  );
}
