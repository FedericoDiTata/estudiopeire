"use client";

import { motion } from "framer-motion";
import { CONTACTO } from "@/lib/site";

// Datos confirmados por el estudio.
const DATOS = [
  { valor: "Puerto Madero", detalle: "Oficinas en la Ciudad de Buenos Aires" },
  { valor: CONTACTO.horario, detalle: "Con entrevista previa coordinada" },
  {
    valor: "Presencial y virtual",
    detalle: "También para clientes en el interior y en el exterior",
  },
];

export default function Confianza() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3 sm:gap-8">
        {DATOS.map((d, i) => (
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
          >
            <span aria-hidden="true" className="block h-0.5 w-10 bg-burdeos" />
            <p className="mt-4 text-lg leading-snug font-medium">{d.valor}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {d.detalle}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
