"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardItem {
  id: string | number;
  title: string;
  /** Texto corto para el panel cerrado, donde el título va rotado. */
  label: string;
  description: string;
  /** Detalle adicional que aparece solo con el panel abierto. */
  extra?: string;
  icon: React.ReactNode;
  /** Opcional: cuando el estudio mande las fotos, cada panel la usa de fondo. */
  imgSrc?: string;
}

interface ExpandingCardsProps extends React.HTMLAttributes<HTMLUListElement> {
  items: CardItem[];
  defaultActiveIndex?: number;
}

/**
 * Paneles que se expanden al pasar el mouse. Adaptado al manual de Estudio
 * Peiré: sin `bg-card` ni `rounded-lg` de shadcn, con la paleta vino, la
 * geometría recta de la marca y el contraste de pesos del logotipo.
 *
 * El original necesita una foto por panel. Como todavía no las tenemos, el
 * fondo se resuelve con vino y la trama diagonal de la marca, y el icono pasa
 * a ser el protagonista. Si un item trae `imgSrc`, la foto reemplaza al fondo
 * sin tocar nada más.
 */
export const ExpandingCards = React.forwardRef<
  HTMLUListElement,
  ExpandingCardsProps
>(({ className, items, defaultActiveIndex = 0, ...props }, ref) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(
    defaultActiveIndex,
  );
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const gridStyle = React.useMemo(() => {
    const tramos = items
      .map((_, index) => (index === activeIndex ? "4.2fr" : "1fr"))
      .join(" ");
    return isDesktop
      ? { gridTemplateColumns: tramos, gridTemplateRows: "1fr" }
      : { gridTemplateRows: tramos, gridTemplateColumns: "1fr" };
  }, [activeIndex, items, isDesktop]);

  return (
    <ul
      ref={ref}
      className={cn(
        "grid w-full gap-1.5",
        "h-[520px]",
        "transition-[grid-template-columns,grid-template-rows] duration-600 ease-[var(--ease-out-quint)]",
        className,
      )}
      style={gridStyle}
      {...props}
    >
      {items.map((item, index) => {
        const activo = activeIndex === index;
        return (
          <li
            key={item.id}
            data-active={activo}
            tabIndex={0}
            aria-current={activo}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "group relative min-h-0 min-w-0 cursor-pointer overflow-hidden",
              "rounded-[var(--radius-card)] bg-burdeos-deep",
              "outline-none focus-visible:ring-2 focus-visible:ring-burdeos focus-visible:ring-offset-2",
              "md:min-w-[74px]",
            )}
          >
            {item.imgSrc ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imgSrc}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover grayscale transition-all duration-700 ease-[var(--ease-out-quint)] group-data-[active=true]:scale-100 group-data-[active=true]:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/25" />
              </>
            ) : (
              <>
                {/* Trama diagonal de la marca, la misma que usan los espacios
                    reservados para foto */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.14] transition-opacity duration-700 group-data-[active=true]:opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, var(--color-paper) 0 1px, transparent 1px 14px)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent opacity-0 transition-opacity duration-700 group-data-[active=true]:opacity-100" />
              </>
            )}

            {/* Numeración, siempre visible */}
            <span
              aria-hidden="true"
              className="absolute top-5 left-5 font-display text-xs tracking-[0.24em] text-paper/45 uppercase transition-colors duration-500 group-data-[active=true]:text-paper/70"
            >
              0{index + 1}
            </span>

            <article className="absolute inset-0 flex flex-col justify-end gap-3 p-6 md:p-7">
              {/* Título vertical mientras el panel está cerrado (solo desktop) */}
              <span className="absolute bottom-7 left-7 hidden origin-bottom-left rotate-[-90deg] font-display text-xs font-medium tracking-[0.22em] whitespace-nowrap text-paper/75 uppercase opacity-100 transition-opacity duration-300 ease-out group-data-[active=true]:opacity-0 md:block">
                {item.label}
              </span>

              <div className="relative text-paper opacity-0 transition-opacity duration-500 delay-100 ease-out group-data-[active=true]:opacity-100">
                {item.icon}
              </div>

              <h3 className="relative max-w-md font-display text-xl leading-snug font-medium tracking-[-0.01em] text-paper opacity-0 transition-opacity duration-500 delay-150 ease-out group-data-[active=true]:opacity-100 md:text-2xl">
                {item.title}
              </h3>

              <p className="relative max-w-lg leading-relaxed text-paper/80 opacity-0 transition-opacity duration-500 delay-200 ease-out group-data-[active=true]:opacity-100">
                {item.description}
              </p>

              {item.extra && (
                <p className="relative max-w-lg border-t border-paper/20 pt-4 text-[0.9rem] leading-relaxed text-paper/60 opacity-0 transition-opacity duration-500 delay-250 ease-out group-data-[active=true]:opacity-100">
                  {item.extra}
                </p>
              )}
            </article>

            {/* Filo inferior en vino claro sobre el panel activo */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-paper/60 transition-transform duration-600 ease-[var(--ease-out-quint)] group-data-[active=true]:scale-x-100"
            />
          </li>
        );
      })}
    </ul>
  );
});
ExpandingCards.displayName = "ExpandingCards";
