"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { SERVICIOS } from "@/lib/site";

export default function Servicios() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        label="Especialidades"
        titulo="En qué trabajamos"
        bajada="Cada área tiene su propia página, con los casos concretos que resolvemos, cómo es el trámite y qué documentación hace falta."
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
            className="group relative bg-paper transition-colors duration-500 hover:bg-sand"
          >
            <Link
              href={`/servicios/${s.slug}`}
              className="flex h-full flex-col p-9 md:p-10"
            >
              <span className="font-display text-sm text-faint">
                0{i + 1}
              </span>

              <h3 className="mt-6 font-display text-2xl leading-tight font-semibold text-ink">
                {s.nombre}
              </h3>

              <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted">
                {s.resumen}
              </p>

              <span className="mt-8 inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-petrol uppercase">
                Ver más
                <span className="transition-transform duration-300 ease-[var(--ease-out-quint)] group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
