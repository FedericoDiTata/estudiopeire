import * as React from "react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

export interface ColorChangeItem {
  heading: string;
  icono: LucideIcon;
}

interface Props extends React.ComponentProps<"div"> {
  items: ColorChangeItem[];
}

/**
 * Tarjetas que se tiñen y crecen apenas al pasar el mouse. Adaptadas al
 * manual de Estudio Peiré.
 *
 * El original tiñe una foto que arranca en blanco y negro. Acá el cambio se
 * resuelve con la marca: la tarjeta arranca clara y el vino la llena desde
 * abajo, invirtiendo el ícono y el título.
 *
 * Se quitaron dos cosas del original: la flecha de la esquina y la animación
 * que hacía rodar las letras del título, que a esta velocidad se leía como un
 * parpadeo.
 *
 * Armada para los cinco compromisos del estudio, que llegaron sin
 * descripción: el ícono arriba y el título abajo sostienen la tarjeta. En
 * compu van en una fila; en tablet, tres arriba y dos más anchas abajo, para
 * que ninguna quede sola; en celular, apiladas y bajas.
 */
export default function ColorChangeCards({ items, className, ...props }: Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-6 xl:grid-cols-5",
        className,
      )}
      {...props}
    >
      {items.map((item, i) => (
        <Reveal
          key={item.heading}
          delay={i * 0.07}
          className={cn(i < 3 ? "sm:col-span-2" : "sm:col-span-3", "xl:col-span-1")}
        >
          <Card {...item} />
        </Reveal>
      ))}
    </div>
  );
}

function Card({ heading, icono: Icono }: ColorChangeItem) {
  return (
    <article className="group relative h-full w-full transform-gpu cursor-default overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-quint)] hover:scale-[1.03] hover:shadow-[var(--shadow-card-hover)]">
      {/* El vino sube desde abajo y llena la tarjeta */}
      <span
        aria-hidden="true"
        className="absolute inset-0 origin-bottom scale-y-0 bg-burdeos-deep transition-transform duration-500 ease-[var(--ease-out-quint)] group-hover:scale-y-100"
      />

      {/* Trama de la marca, visible recién con la tarjeta teñida */}
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-0 transition-opacity delay-100 duration-700 group-hover:opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-paper) 0 1px, transparent 1px 14px)",
        }}
      />

      <div className="relative z-10 flex h-full items-center gap-5 px-6 py-5 sm:min-h-[9rem] sm:flex-col sm:items-start sm:justify-between sm:p-6 xl:min-h-[10.5rem]">
        <Icono
          aria-hidden="true"
          strokeWidth={1.3}
          className="h-8 w-8 shrink-0 text-burdeos transition-[color,transform] duration-500 ease-[var(--ease-out-quint)] group-hover:-translate-y-1 group-hover:text-paper sm:h-9 sm:w-9"
        />
        <h3 className="font-display text-xl leading-snug font-medium tracking-[-0.01em] text-ink transition-colors duration-500 group-hover:text-paper xl:text-lg">
          {heading}
        </h3>
      </div>
    </article>
  );
}
