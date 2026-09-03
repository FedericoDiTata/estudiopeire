"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
 * Tarjetas que cambian de color al pasar el mouse. Adaptadas al manual de
 * Estudio Peiré.
 *
 * El original tiñe una foto que arranca en blanco y negro. Como todavía no
 * tenemos fotos, el cambio se resuelve con la marca: la tarjeta arranca clara
 * y el vino la llena desde abajo, invirtiendo el texto. Si un item trae
 * `imgSrc`, la foto pasa a ser el fondo y el vino queda como velo.
 *
 * Se conserva el recurso que le da carácter al componente: las letras del
 * título ruedan hacia arriba, una detrás de otra.
 */
export default function ColorChangeCards({ items, className, ...props }: Props) {
  return (
    <div
      className={cn("grid grid-cols-1 gap-4 md:grid-cols-2", className)}
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
    <motion.article
      transition={{ staggerChildren: 0.035 }}
      whileHover="hover"
      className="group relative min-h-[17rem] w-full cursor-default overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)]"
    >
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
        className="absolute inset-0 opacity-0 transition-opacity duration-700 delay-100 group-hover:opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-paper) 0 1px, transparent 1px 14px)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-8">
        <ArrowRight
          aria-hidden="true"
          strokeWidth={1.5}
          className="ml-auto h-6 w-6 text-burdeos transition-all duration-500 ease-[var(--ease-out-quint)] group-hover:-rotate-45 group-hover:text-paper"
        />

        <div className="mt-10">
          <h3
            aria-label={heading}
            className="font-display text-2xl font-medium tracking-[-0.01em] text-ink transition-colors duration-500 group-hover:text-paper"
          >
            {heading.split("").map((letra, i) => (
              <AnimatedLetter letra={letra} key={i} />
            ))}
          </h3>

          <p className="mt-3 leading-relaxed text-muted transition-colors duration-500 group-hover:text-paper/80">
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

const letterVariants: Variants = {
  hover: { y: "-50%" },
};

function AnimatedLetter({ letra }: { letra: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-[1.9rem] overflow-hidden align-bottom"
    >
      <motion.span
        className="flex min-w-[0.22em] flex-col leading-[1.9rem]"
        style={{ y: "0%" }}
        variants={letterVariants}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>{letra === " " ? " " : letra}</span>
        <span>{letra === " " ? " " : letra}</span>
      </motion.span>
    </span>
  );
}
