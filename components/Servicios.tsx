"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Placeholder from "./Placeholder";
import { SERVICIOS } from "@/lib/site";

export default function Servicios() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        label="Especialidades"
        titulo="En qué trabajamos"
        bajada="Dos especialidades que se cruzan todo el tiempo, y un área nueva que estamos construyendo. Cada una con su propia página."
      />

      <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-3">
        {SERVICIOS.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              type: "spring",
              stiffness: 85,
              damping: 18,
              delay: i * 0.1,
            }}
            className="group relative bg-paper"
          >
            <Link
              href={`/servicios/${s.slug}`}
              className="flex h-full flex-col"
            >
              <Placeholder ratio="aspect-[3/2]" etiqueta="Foto" />

              <div className="flex flex-1 flex-col p-9 md:p-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm font-medium text-burdeos">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-2xl leading-tight font-medium tracking-[-0.01em] text-ink">
                    {s.nombre}
                  </h3>
                </div>

                <p className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-muted">
                  {s.resumen}
                </p>

                <span className="mt-8 inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-burdeos uppercase">
                  Ver más
                  <span className="transition-transform duration-300 ease-[var(--ease-out-quint)] group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>

            {/* Línea inferior que se llena al pasar el mouse */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-burdeos transition-transform duration-500 ease-[var(--ease-out-quint)] group-hover:scale-x-100"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
