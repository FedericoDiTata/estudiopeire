"use client";

import { motion } from "framer-motion";
import { Search, Route, Users, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

/**
 * Los cuatro pasos salen del propio texto del estudio: «cada caso comienza con
 * un buen diagnóstico [...] para definir desde el inicio la estrategia más
 * adecuada. A partir de allí, acompañamos y coordinamos todo el proceso».
 *
 * REVISAR: los títulos de cada paso son nuestros, derivados de ese párrafo.
 */
const PASOS = [
  {
    icono: Search,
    titulo: "Diagnóstico",
    detalle:
      "Analizamos la situación, los bienes y la documentación para entender con qué estamos trabajando.",
  },
  {
    icono: Route,
    titulo: "Estrategia",
    detalle:
      "Definimos desde el inicio el camino más adecuado, anticipando riesgos y evitando pasos innecesarios.",
  },
  {
    icono: Users,
    titulo: "Coordinación",
    detalle:
      "Llevamos adelante el proceso y coordinamos con escribanos, contadores y demás profesionales cuando hace falta.",
  },
  {
    icono: CheckCircle2,
    titulo: "Resolución",
    detalle:
      "Cerramos la operación o el trámite, y te explicamos en qué estado está cada vez que lo necesitás.",
  },
];

export default function Proceso() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          label="Cómo trabajamos"
          titulo="Detrás de cada consulta hay una decisión importante"
          bajada="Por eso combinamos conocimiento jurídico, estrategia y una atención cercana. Así es el recorrido."
        />

        <ol className="relative mt-16 grid gap-8 md:grid-cols-4 md:gap-6">
          {/* Hilo que conecta los cuatro pasos */}
          <span
            aria-hidden="true"
            className="absolute top-7 right-0 left-0 hidden h-px bg-line md:block"
          />

          {PASOS.map((p, i) => {
            const Icono = p.icono;
            return (
              <motion.li
                key={p.titulo}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  type: "spring",
                  stiffness: 85,
                  damping: 18,
                  delay: i * 0.09,
                }}
                className="group relative"
              >
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-line bg-paper text-burdeos shadow-[var(--shadow-card)] transition-colors duration-500 group-hover:border-burdeos group-hover:bg-burdeos group-hover:text-paper">
                  <Icono
                    className="h-5 w-5"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </span>

                <p className="mt-6 font-display text-xs tracking-[0.24em] text-burdeos uppercase">
                  Paso 0{i + 1}
                </p>
                <h3 className="mt-2 text-lg font-medium">{p.titulo}</h3>
                <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-muted">
                  {p.detalle}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
