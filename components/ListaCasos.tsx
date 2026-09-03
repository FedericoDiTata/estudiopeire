"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Scale,
  KeyRound,
  Handshake,
  Building2,
  ShieldCheck,
  Briefcase,
  FileSignature,
  Gavel,
  FileText,
  HardHat,
  Plus,
} from "lucide-react";
import type { Caso, IconoCaso } from "@/lib/servicios";

const ICONOS: Record<IconoCaso, typeof Scale> = {
  sucesion: Scale,
  venta: KeyRound,
  acuerdo: Handshake,
  empresa: Building2,
  patrimonio: ShieldCheck,
  partner: Briefcase,
  operacion: FileSignature,
  conflicto: Gavel,
  contrato: FileText,
  desarrollo: HardHat,
};

/**
 * Los casos son el contenido más fuerte que mandó el estudio. Van como
 * tarjetas con identidad propia: cada una tiene su icono, el número tratado
 * como marca de agua y un panel que se abre con el detalle ampliado.
 *
 * Sin fotos, el icono y la profundidad son lo que evita que la sección sea
 * una fila de rectángulos iguales.
 */
export default function ListaCasos({ casos }: { casos: Caso[] }) {
  const [abierto, setAbierto] = useState<number | null>(null);

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {casos.map((caso, i) => {
        const activo = abierto === i;
        const tieneMas = Boolean(caso.ampliacion);
        const Icono = ICONOS[caso.icono];
        // La última tarjeta ocupa el ancho completo cuando el total es impar,
        // así la grilla nunca queda con un hueco suelto.
        const ultimaSola = casos.length % 2 === 1 && i === casos.length - 1;

        return (
          <motion.article
            key={caso.titulo}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              type: "spring",
              stiffness: 85,
              damping: 18,
              delay: (i % 2) * 0.07,
            }}
            className={`group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper p-8 shadow-[var(--shadow-card)] transition-all duration-500 ease-[var(--ease-out-quint)] hover:-translate-y-1 hover:border-burdeos/35 hover:shadow-[var(--shadow-card-hover)] md:p-10 ${
              ultimaSola ? "md:col-span-2" : ""
            }`}
          >
            {/* Número como marca de agua, no como viñeta */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-4 right-4 font-display text-[6rem] leading-none font-light text-burdeos/[0.06] transition-colors duration-500 group-hover:text-burdeos/[0.11]"
            >
              0{i + 1}
            </span>

            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-burdeos-soft text-burdeos transition-colors duration-500 group-hover:bg-burdeos group-hover:text-paper">
              <Icono className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
            </span>

            <h3 className="relative mt-7 font-display text-xl leading-snug font-medium tracking-[-0.01em] transition-colors duration-300 group-hover:text-burdeos">
              {caso.titulo}
            </h3>

            <p className="relative mt-4 flex-1 leading-relaxed text-muted">
              {caso.detalle}
            </p>

            {tieneMas && (
              <>
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out-quint)] ${
                    activo ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-5 border-t border-line pt-5 text-[0.95rem] leading-relaxed text-muted">
                      {caso.ampliacion}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setAbierto(activo ? null : i)}
                  aria-expanded={activo}
                  className="relative mt-7 inline-flex w-fit items-center gap-2 text-xs font-medium tracking-[0.14em] text-burdeos uppercase"
                >
                  {activo ? "Ver menos" : "Ver detalle"}
                  <Plus
                    aria-hidden="true"
                    className={`h-3.5 w-3.5 transition-transform duration-300 ease-[var(--ease-out-quint)] ${
                      activo ? "rotate-45" : ""
                    }`}
                  />
                </button>
              </>
            )}

            {/* Filo inferior que se llena al pasar el mouse */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-burdeos transition-transform duration-500 ease-[var(--ease-out-quint)] group-hover:scale-x-100"
            />
          </motion.article>
        );
      })}
    </div>
  );
}
