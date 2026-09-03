"use client";

import { cn } from "@/lib/utils";

type Props = {
  items: string[];
  duracion?: number;
  invertido?: boolean;
  className?: string;
};

/**
 * Franja de texto en movimiento continuo. Se usa para separar bloques y para
 * repetir, sin cargar la lectura, las áreas en las que trabaja el estudio.
 */
export default function Marquee({
  items,
  duracion = 42,
  invertido = false,
  className,
}: Props) {
  const tira = [...items, ...items];

  return (
    <div
      className={cn("overflow-hidden py-5", className)}
      aria-hidden="true"
    >
      <div
        className="flex w-max animate-[marquee_var(--dur)_linear_infinite] items-center gap-10 whitespace-nowrap will-change-transform"
        style={
          {
            "--dur": `${duracion}s`,
            animationDirection: invertido ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {tira.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-sm font-medium tracking-[0.22em] uppercase">
              {item}
            </span>
            <span className="h-1 w-1 shrink-0 rounded-full bg-current opacity-40" />
          </span>
        ))}
      </div>
    </div>
  );
}
