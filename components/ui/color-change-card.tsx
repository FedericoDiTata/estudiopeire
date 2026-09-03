import * as React from "react";
import { cn } from "@/lib/utils";

export interface ColorChangeItem {
  heading: string;
  description: string;
  /** Opcional: cuando lleguen las fotos, cada tarjeta la usa de fondo. */
  imgSrc?: string;
}

interface Props extends React.ComponentProps<"div"> {
  items: ColorChangeItem[];
}

/**
 * Tarjetas que se tiñen y crecen apenas al pasar el mouse. Adaptadas al
 * manual de Estudio Peiré.
 *
 * El original tiñe una foto que arranca en blanco y negro. Como todavía no
 * tenemos fotos, el cambio se resuelve con la marca: la tarjeta arranca clara
 * y el vino la llena desde abajo, invirtiendo el texto. Si un item trae
 * `imgSrc`, la foto pasa a ser el fondo y el vino queda como velo.
 *
 * Se quitaron dos cosas del original: la flecha de la esquina y la animación
 * que hacía rodar las letras del título, que a esta velocidad se leía como un
 * parpadeo. Sin ellas el componente no necesita JavaScript: todo el
 * comportamiento vive en CSS.
 */
export default function ColorChangeCards({ items, className, ...props }: Props) {
  return (
    <div
      className={cn("grid grid-cols-1 gap-5 md:grid-cols-2", className)}
      {...props}
    >
      {items.map((item) => (
        <Card key={item.heading} {...item} />
      ))}
    </div>
  );
}

function Card({ heading, description, imgSrc }: ColorChangeItem) {
  return (
    <article className="group relative min-h-[15rem] w-full transform-gpu cursor-default overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-quint)] hover:scale-[1.025] hover:shadow-[var(--shadow-card-hover)]">
      {imgSrc && (
        <div
          aria-hidden="true"
          className="absolute inset-0 scale-105 grayscale transition-all duration-700 ease-[var(--ease-out-quint)] group-hover:scale-110 group-hover:grayscale-0"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

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

      <div className="relative z-10 flex h-full min-h-[15rem] flex-col justify-end p-8 md:p-9">
        <h3 className="font-display text-2xl leading-snug font-medium tracking-[-0.01em] text-ink transition-colors duration-500 group-hover:text-paper">
          {heading}
        </h3>
        <p className="mt-3 leading-relaxed text-muted transition-colors duration-500 group-hover:text-paper/80">
          {description}
        </p>
      </div>
    </article>
  );
}
