"use client";

import * as React from "react";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ItemContent {
  title: string;
  description: string;
  /** Se recibe el nodo ya construido: así el paso elige su propio icono. */
  visual: React.ReactNode;
}

interface Props extends React.ComponentProps<"section"> {
  items: ItemContent[];
  /**
   * Alto de la pista de scroll. El original usaba 300vh para tres pasos, que
   * se hacía largo; acá el recorrido se reparte entre la cantidad de pasos y
   * queda bastante más corto.
   */
  alturaPista?: string;
}

/**
 * Los pasos se van encendiendo a medida que se baja, con una barra que se
 * llena en cada uno. Adaptado al manual de Estudio Peiré: sin los tokens de
 * shadcn (`bg-background`, `text-foreground`), con la paleta vino y la
 * tipografía de la marca.
 *
 * Dos cambios sobre el original: soporta cualquier cantidad de pasos, no solo
 * tres, y en pantalla chica no se usa, porque secuestrar el scroll en un
 * celular molesta más de lo que aporta.
 */
export default function ScrollRevealContentA({
  items,
  alturaPista = "h-[230vh]",
  className,
  ...props
}: Props) {
  const [progreso, setProgreso] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  useMotionValueEvent(scrollYProgress, "change", (v) => setProgreso(v));

  const tramo = 1 / items.length;

  return (
    <section className={cn("relative", className)} {...props}>
      <div ref={ref} className={alturaPista}>
        <div className="sticky top-0 flex h-screen items-center">
          <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-24">
            <ol className="flex flex-col justify-center gap-8">
              {items.map((item, i) => (
                <PointItem
                  key={item.title}
                  numero={`0${i + 1}`}
                  title={item.title}
                  description={item.description}
                  thresholdStart={i * tramo}
                  thresholdEnd={(i + 1) * tramo}
                  scrollProgress={progreso}
                />
              ))}
            </ol>

            {/* Columna visual: los paneles se cruzan según el paso activo */}
            <div className="relative hidden aspect-[4/5] w-full lg:block">
              {items.map((item, i) => {
                const visible = progreso >= i * tramo || i === 0;
                const superado = progreso >= (i + 1) * tramo;
                return (
                  <div
                    key={item.title}
                    aria-hidden={!visible || superado}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500 ease-[var(--ease-out-quint)]",
                      visible ? "opacity-100" : "opacity-0",
                    )}
                    style={{ zIndex: i + 1 }}
                  >
                    {item.visual}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function porcentajeBarra(
  scrollProgress: number,
  thresholdStart: number,
  thresholdEnd: number,
) {
  if (scrollProgress < thresholdStart) return 0;
  if (scrollProgress > thresholdEnd) return 100;
  return (
    ((scrollProgress - thresholdStart) / (thresholdEnd - thresholdStart)) * 100
  );
}

function PointItem({
  numero,
  title,
  description,
  thresholdStart,
  thresholdEnd,
  scrollProgress,
}: {
  numero: string;
  title: string;
  description: string;
  thresholdStart: number;
  thresholdEnd: number;
  scrollProgress: number;
}) {
  const alturaBarra = porcentajeBarra(
    scrollProgress,
    thresholdStart,
    thresholdEnd,
  );
  const activo = alturaBarra > 0;

  return (
    <li className="flex gap-6">
      {/* Riel con la barra que se llena */}
      <div className="relative w-px shrink-0 bg-line">
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 w-px bg-burdeos transition-[height] duration-150 ease-linear"
          style={{ height: `${alturaBarra}%` }}
        />
      </div>

      <div
        className={cn(
          "flex-1 pb-2 transition-opacity duration-500",
          activo ? "opacity-100" : "opacity-45",
        )}
      >
        <span className="font-display text-xs tracking-[0.24em] text-burdeos uppercase">
          Paso {numero}
        </span>
        <h3 className="mt-2 font-display text-xl leading-snug font-medium tracking-[-0.01em] md:text-2xl">
          {title}
        </h3>
        <p className="mt-2 max-w-md leading-relaxed text-muted">{description}</p>
      </div>
    </li>
  );
}
