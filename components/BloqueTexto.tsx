"use client";

import { motion } from "framer-motion";
import { Scale, Building2, Gavel, Landmark, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

/** Se recibe el nombre y no el componente: las funciones no cruzan la
 *  frontera entre un componente de servidor y uno de cliente. */
export type IconoBloque =
  | "sucesiones"
  | "inmobiliario"
  | "civil"
  | "estudio"
  | "proptech";

const ICONOS = {
  sucesiones: Scale,
  inmobiliario: Building2,
  civil: Gavel,
  estudio: Landmark,
  proptech: Cpu,
} as const;

type Props = {
  eyebrow?: string;
  titulo: string;
  parrafos: string[];
  icono: IconoBloque;
  children?: React.ReactNode;
  className?: string;
};

/**
 * Bloque de texto con presencia. Reemplaza el patrón de «título a la
 * izquierda, párrafo a la derecha», que en pantalla quedaba plano.
 *
 * Lo que le da carácter: el panel con relieve, el icono del área como marca
 * de agua desbordando la esquina, la trama diagonal de la marca y el primer
 * párrafo en cuerpo mayor, que hace de entrada de lectura.
 */
export default function BloqueTexto({
  eyebrow,
  titulo,
  parrafos,
  icono,
  children,
  className,
}: Props) {
  const Icono = ICONOS[icono];
  const [lead, ...resto] = parrafos;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 85, damping: 18 }}
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper shadow-[var(--shadow-card)]",
        className,
      )}
    >
      {/* Trama diagonal, apenas perceptible, sobre el flanco derecho */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-burdeos) 0 1px, transparent 1px 13px)",
        }}
      />

      {/* Marca de agua: el icono del área desbordando la esquina */}
      <Icono
        aria-hidden="true"
        strokeWidth={0.6}
        className="pointer-events-none absolute -right-10 -bottom-12 h-64 w-64 text-burdeos/[0.07]"
      />

      <div className="relative grid gap-10 p-9 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16 md:p-14">
        <div>
          <span aria-hidden="true" className="block h-0.5 w-12 bg-burdeos" />
          {eyebrow && (
            <p className="mt-6 text-[0.7rem] font-medium tracking-[0.28em] text-burdeos uppercase">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-3 font-display text-2xl leading-tight font-light tracking-[-0.01em] sm:text-3xl md:text-4xl">
            {titulo}
          </h2>
        </div>

        {/* Línea que separa las columnas en desktop */}
        <div className="relative md:pl-16">
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-0 hidden w-px bg-line md:block"
          />

          <p className="text-[1.15rem] leading-relaxed text-ink">{lead}</p>

          {resto.length > 0 && (
            <div className="mt-5 space-y-4 leading-relaxed text-muted">
              {resto.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </motion.div>
  );
}
