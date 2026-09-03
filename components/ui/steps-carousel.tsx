"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StepItem {
  titulo: string;
  detalle: string;
  icono: LucideIcon;
  visual: React.ReactNode;
}

interface Props extends React.ComponentProps<"div"> {
  items: StepItem[];
  /** Cuánto dura cada paso antes de saltar al siguiente. */
  duracionMs?: number;
}

const SUAVE = [0.22, 1, 0.36, 1] as const;

/**
 * Los pasos rotan solos y se pueden elegir con un clic.
 *
 * El avance no lo maneja un temporizador de JavaScript sino el final de la
 * animación de la barra: así el tiempo y lo que se ve en pantalla nunca se
 * desincronizan, y alcanza con pausar la animación para pausar todo.
 *
 * Se pausa cuando el mouse está encima, para poder leer sin que salte, y no
 * rota si el sistema pide menos movimiento.
 */
export default function StepsCarousel({
  items,
  duracionMs = 6000,
  className,
  ...props
}: Props) {
  const [activo, setActivo] = React.useState(0);
  const [pausado, setPausado] = React.useState(false);
  const [sinMovimiento, setSinMovimiento] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setSinMovimiento(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const siguiente = () => setActivo((i) => (i + 1) % items.length);

  return (
    <div
      className={cn(
        "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-20",
        className,
      )}
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      {...props}
    >
      <ol className="flex flex-col">
        {items.map((item, i) => {
          const esActivo = i === activo;
          const Icono = item.icono;

          return (
            <li key={item.titulo} className="border-b border-line last:border-b-0">
              <button
                type="button"
                onClick={() => setActivo(i)}
                aria-current={esActivo}
                className="group flex w-full items-start gap-5 py-5 text-left"
              >
                <span
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-500 ease-[var(--ease-out-quint)]",
                    esActivo
                      ? "bg-burdeos text-paper"
                      : "bg-burdeos-soft text-burdeos/45 group-hover:text-burdeos",
                  )}
                >
                  <Icono
                    className="h-[1.15rem] w-[1.15rem]"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </span>

                <span className="min-w-0 flex-1">
                  <span
                    className={cn(
                      "block font-display text-[0.65rem] tracking-[0.24em] uppercase transition-colors duration-500",
                      esActivo ? "text-burdeos" : "text-grey",
                    )}
                  >
                    Paso 0{i + 1}
                  </span>

                  <span
                    className={cn(
                      "mt-1 block font-display text-lg leading-snug font-medium tracking-[-0.01em] transition-colors duration-500",
                      esActivo ? "text-ink" : "text-muted group-hover:text-ink",
                    )}
                  >
                    {item.titulo}
                  </span>

                  {/* El detalle vive solo en el paso activo: mantiene la
                      sección corta y hace evidente dónde estás parado. */}
                  <span
                    className={cn(
                      "grid transition-[grid-template-rows] duration-600 ease-[var(--ease-out-quint)]",
                      esActivo ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <span className="overflow-hidden">
                      <span
                        className={cn(
                          "mt-2 block max-w-md text-[0.95rem] leading-relaxed text-muted transition-opacity duration-500",
                          esActivo ? "opacity-100 delay-100" : "opacity-0",
                        )}
                      >
                        {item.detalle}
                      </span>
                    </span>
                  </span>
                </span>
              </button>

              {/* Barra de avance. Su final dispara el paso siguiente. */}
              <span
                aria-hidden="true"
                className="block h-px w-full origin-left bg-line/60"
              >
                {esActivo && !sinMovimiento && (
                  <span
                    key={activo}
                    onAnimationEnd={siguiente}
                    style={{
                      animation: `barra-paso ${duracionMs}ms linear forwards`,
                      animationPlayState: pausado ? "paused" : "running",
                    }}
                    className="block h-px w-full origin-left bg-burdeos"
                  />
                )}
              </span>
            </li>
          );
        })}
      </ol>

      {/* Columna visual */}
      <div className="relative hidden aspect-[4/3] w-full lg:block">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={activo}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.7, ease: SUAVE }}
            className="absolute inset-0"
          >
            {items[activo].visual}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
