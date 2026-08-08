"use client";

import { motion } from "framer-motion";
import { CONTACTO } from "@/lib/site";

// PENDIENTE: trayectoria y cantidad de casos las tiene que confirmar el estudio.
const DATOS = [
  { valor: "+20", detalle: "años de ejercicio" },
  { valor: "CABA", detalle: "y Gran Buenos Aires" },
  { valor: "Presencial", detalle: "y virtual, todo el país" },
];

export default function Confianza() {
  return (
    <section className="border-y border-line bg-shell">
      <div className="mx-auto grid max-w-6xl gap-px px-6 py-14 sm:grid-cols-3">
        {DATOS.map((d, i) => (
          <motion.div
            key={d.detalle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              type: "spring",
              stiffness: 85,
              damping: 18,
              delay: i * 0.1,
            }}
            className="text-center"
          >
            <p className="font-display text-3xl font-semibold text-petrol sm:text-4xl">
              {d.valor}
            </p>
            <p className="mt-2 text-sm text-muted">{d.detalle}</p>
          </motion.div>
        ))}
      </div>
      <p className="sr-only">Atendemos en {CONTACTO.zona}.</p>
    </section>
  );
}
