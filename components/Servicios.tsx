"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Scale, Building2, Cpu, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SERVICIOS } from "@/lib/site";

const ICONOS = [Scale, Building2, Cpu];

export default function Servicios() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        label="Especialidades"
        titulo="En qué trabajamos"
        bajada="Dos especialidades que se cruzan todo el tiempo, y un área nueva que estamos construyendo. Cada una con su propia página."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {SERVICIOS.map((s, i) => {
          const Icono = ICONOS[i] ?? Scale;
          return (
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
            >
              <Link
                href={`/servicios/${s.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper shadow-[var(--shadow-card)] transition-all duration-500 ease-[var(--ease-out-quint)] hover:-translate-y-1.5 hover:border-burdeos/35 hover:shadow-[var(--shadow-card-hover)]"
              >
                {/* Cabecera gráfica. Cuando el estudio mande las fotos, esta
                    zona pasa a ser la imagen del servicio. */}
                <div className="relative aspect-[16/10] overflow-hidden bg-burdeos-deep">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.13]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, var(--color-paper) 0 1px, transparent 1px 14px)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icono
                      className="h-14 w-14 text-paper/85 transition-transform duration-700 ease-[var(--ease-out-quint)] group-hover:scale-110"
                      strokeWidth={1}
                      aria-hidden="true"
                    />
                  </div>
                  <span className="absolute bottom-4 left-5 font-display text-xs tracking-[0.24em] text-paper/45 uppercase">
                    0{i + 1}
                  </span>
                  <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-paper/12 text-paper transition-colors duration-500 group-hover:bg-paper group-hover:text-burdeos-deep">
                    <ArrowUpRight
                      className="h-4 w-4"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-8 md:p-9">
                  <h3 className="font-display text-xl leading-tight font-medium tracking-[-0.01em] transition-colors duration-300 group-hover:text-burdeos">
                    {s.nombre}
                  </h3>
                  <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted">
                    {s.resumen}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-burdeos uppercase">
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
          );
        })}
      </div>
    </section>
  );
}
