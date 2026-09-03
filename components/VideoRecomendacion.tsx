"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { VIDEO_RECOMENDACION } from "@/lib/testimonios";

/**
 * Recomendación en video. Arranca en pausa y sin sonido hasta que la persona
 * decide reproducirlo: un video que se dispara solo con audio en un sitio de
 * un estudio jurídico espanta más de lo que suma.
 */
export default function VideoRecomendacion() {
  const ref = useRef<HTMLVideoElement>(null);
  const [reproduciendo, setReproduciendo] = useState(false);

  function alternar() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setReproduciendo(true);
    } else {
      v.pause();
      setReproduciendo(false);
    }
  }

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 85, damping: 18 }}
          >
            <span aria-hidden="true" className="block h-0.5 w-12 bg-burdeos" />
            <p className="mt-6 text-[0.7rem] font-medium tracking-[0.28em] text-paper/60 uppercase">
              Recomendación
            </p>
            <h2 className="mt-4 font-display text-3xl leading-[1.1] font-light tracking-[-0.02em] text-paper sm:text-4xl md:text-5xl">
              {VIDEO_RECOMENDACION.nombre}
            </h2>
            <p className="mt-4 text-lg text-paper/70">
              {VIDEO_RECOMENDACION.detalle}
            </p>
            <p className="mt-8 max-w-sm leading-relaxed text-paper/60">
              CRS es la certificación internacional de especialistas
              residenciales. Su director en Argentina y Uruguay cuenta cómo es
              trabajar con el estudio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[340px] lg:mx-0"
          >
            {/* El video vino grabado en vertical, así que se muestra en su
                proporción real en vez de recortarlo a panorámico. */}
            <div className="relative overflow-hidden bg-black">
              <video
                ref={ref}
                src={VIDEO_RECOMENDACION.src}
                poster="/img/poster-julio-valente.jpg"
                preload="metadata"
                playsInline
                controls={reproduciendo}
                onEnded={() => setReproduciendo(false)}
                onPause={() => setReproduciendo(false)}
                className="aspect-[478/850] w-full object-cover"
              />

              {!reproduciendo && (
                <button
                  type="button"
                  onClick={alternar}
                  aria-label={`Reproducir la recomendación de ${VIDEO_RECOMENDACION.nombre}`}
                  className="group absolute inset-0 flex items-center justify-center bg-ink/35 transition-colors duration-300 hover:bg-ink/20"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-burdeos text-paper transition-transform duration-300 ease-[var(--ease-out-quint)] group-hover:scale-110">
                    <svg
                      viewBox="0 0 24 24"
                      className="ml-1 h-6 w-6 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
