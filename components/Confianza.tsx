"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Video } from "lucide-react";
import { CONTACTO } from "@/lib/site";

// Datos confirmados por el estudio.
const DATOS = [
  {
    icono: MapPin,
    valor: "Puerto Madero",
    detalle: "Oficinas en la Ciudad de Buenos Aires",
  },
  {
    icono: Clock,
    valor: CONTACTO.horario,
    detalle: "Con entrevista previa coordinada",
  },
  {
    icono: Video,
    valor: "Presencial y virtual",
    detalle: "También para clientes en el interior y en el exterior",
  },
];

export default function Confianza() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-3">
        {DATOS.map((d, i) => {
          const Icono = d.icono;
          return (
            <motion.div
              key={d.valor}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 85,
                damping: 18,
                delay: i * 0.1,
              }}
              className="flex items-start gap-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-burdeos-soft text-burdeos">
                <Icono className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div>
                <p className="leading-snug font-medium">{d.valor}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {d.detalle}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
