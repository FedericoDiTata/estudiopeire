"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { COMPROMISOS } from "@/lib/estudio";
import { cn } from "@/lib/utils";

/**
 * Nuestro compromiso. Los cinco títulos se tiñen de vino a medida que se
 * scrollea, uno detrás del otro, con un filo que acompaña el avance.
 *
 * Basado en «Text Scroll Read» de 21st.dev (youcefbnm): texto cuyo relleno
 * avanza con el scroll. Cambios sobre el original:
 * - El original pinta texto transparente con un degradé que avanza letra a
 *   letra. Acá el título base es un gris que se lee (contraste suficiente
 *   para texto grande) y encima va una copia en vino que aparece con un
 *   fundido: cada título se tiñe entero, sin quedar cortado a la mitad, y
 *   nunca hay texto invisible ni ilegible.
 * - Barlow liviana, un ícono por compromiso y un filo vino abajo.
 * - Sin el espacio vacío que el original suma al final.
 *
 * No depende del mouse: se ve igual en compu y en celular. Con movimiento
 * reducido quedan todos teñidos desde el principio.
 */
export default function CompromisoScroll({ className }: { className?: string }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 50%"],
  });
  const total = COMPROMISOS.length;

  return (
    <ol ref={ref} className={cn("border-t border-line", className)}>
      {COMPROMISOS.map(({ titulo, icono }, i) => (
        <Renglon
          key={titulo}
          titulo={titulo}
          Icono={icono}
          progreso={scrollYProgress}
          desde={i / total}
          hasta={(i + 1) / total}
        />
      ))}
    </ol>
  );
}

// Gris del título sin teñir: 3,4 a 1 sobre el fondo, suficiente para texto
// de este tamaño.
// Más chico que el título de la sección, que es el que manda.
const TITULO =
  "font-display text-[1.75rem] leading-tight font-light tracking-[-0.02em] sm:text-4xl lg:text-[2.6rem]";

function Renglon({
  titulo,
  Icono,
  progreso,
  desde,
  hasta,
}: {
  titulo: string;
  Icono: LucideIcon;
  progreso: MotionValue<number>;
  desde: number;
  hasta: number;
}) {
  const avance = useTransform(progreso, [desde, hasta], [0, 1]);
  const tinta = useTransform(avance, [0.15, 0.85], [0, 1]);
  const opacidadIcono = useTransform(avance, [0, 0.6], [0.35, 1]);

  return (
    <li className="relative flex items-center gap-5 border-b border-line py-4 sm:gap-7 md:py-5">
      <motion.span
        style={{ opacity: opacidadIcono }}
        className="shrink-0 text-burdeos motion-reduce:opacity-100!"
      >
        <Icono className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.2} aria-hidden="true" />
      </motion.span>

      <div className="relative">
        <h3 className={cn(TITULO, "text-[#8a8780]")}>{titulo}</h3>
        <motion.span
          aria-hidden="true"
          style={{ opacity: tinta }}
          className={cn(
            TITULO,
            "absolute inset-0 text-burdeos motion-reduce:opacity-100!",
          )}
        >
          {titulo}
        </motion.span>
      </div>

      <motion.span
        aria-hidden="true"
        style={{ scaleX: avance }}
        className="absolute inset-x-0 -bottom-px h-px origin-left bg-burdeos motion-reduce:hidden"
      />
    </li>
  );
}
