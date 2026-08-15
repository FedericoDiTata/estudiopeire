"use client";

import { motion } from "framer-motion";

/**
 * Datos verificables, tomados de la propia web del estudio.
 * REVISAR: cuando confirmen años de ejercicio y cantidad de casos, conviene
 * reemplazar alguno de estos por ese dato, que pesa más. No se inventa nada
 * mientras tanto.
 */
const DATOS = [
  { valor: "CABA y GBA", detalle: "Trabajamos en toda el área metropolitana" },
  { valor: "Presencial y virtual", detalle: "Por Meet, Skype o videollamada" },
  {
    valor: "Inmobiliario y sucesiones",
    detalle: "Las dos especialidades del estudio",
  },
];

export default function Confianza() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3 sm:gap-6">
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
            <p className="text-lg leading-snug font-medium">{d.valor}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {d.detalle}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
