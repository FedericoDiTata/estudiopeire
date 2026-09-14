"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { SERVICIOS } from "@/lib/site";

/**
 * Las tres especialidades. Cada tarjeta lleva una foto de stock relacionada
 * con el tema (créditos en brief/fotos-stock.md) que se acerca apenas al
 * pasar el mouse, y toda la tarjeta lleva a la página del servicio.
 */
export default function Servicios() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <SectionHeading label="Especialidades" titulo="En qué trabajamos" />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {SERVICIOS.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100% 0px -18% 0px" }}
            transition={{
              type: "spring",
              stiffness: 85,
              damping: 18,
              delay: i * 0.1,
            }}
          >
            <Link
              href={`/servicios/${s.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper shadow-[var(--shadow-card)] transition-all duration-500 ease-[var(--ease-out-quint)] hover:-translate-y-1.5 hover:border-burdeos/35 hover:shadow-[var(--shadow-card-hover)]"
            >
              {/* En celular la foto es más baja: apiladas, las tres
                  tarjetas ocupaban casi dos pantallas */}
              <div className="relative aspect-[2/1] overflow-hidden bg-line md:aspect-[16/10]">
                <Image
                  src={`/img/stock/servicios/${s.slug}.webp`}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out-quint)] group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-burdeos-deep/30 to-transparent"
                />
              </div>

              <div className="flex flex-1 flex-col p-7 md:p-8">
                <h3 className="font-display text-xl leading-tight font-medium tracking-[-0.01em] transition-colors duration-300 group-hover:text-burdeos">
                  {s.nombre}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
                  {s.resumen}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-burdeos uppercase">
                  Ver más
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-[var(--ease-out-quint)] group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
