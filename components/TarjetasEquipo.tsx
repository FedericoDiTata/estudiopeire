"use client";

import { Fragment } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import IconoWhatsApp from "./IconoWhatsApp";
import { EQUIPO, waIntegrante, type Integrante } from "@/lib/equipo";
import { cn } from "@/lib/utils";

const SUAVE = [0.22, 1, 0.36, 1] as const;

/**
 * Tarjetas del equipo.
 *
 * Entrada: cada tarjeta sube con resorte y la foto se descubre de abajo hacia
 * arriba, escalonadas de a cuatro, que es la cantidad por fila.
 *
 * Al pasar el mouse: la foto se acerca, sube un velo vino con el acceso a
 * WhatsApp y el nombre se subraya. En pantallas sin mouse no hay velo: el
 * acceso va a la vista debajo del cargo, así nadie depende de un gesto que
 * su dispositivo no tiene.
 */
export default function TarjetasEquipo({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        "grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {EQUIPO.map((persona, i) => (
        <Tarjeta key={persona.slug} persona={persona} indice={i} />
      ))}
    </ul>
  );
}

function Tarjeta({ persona, indice }: { persona: Integrante; indice: number }) {
  const retardo = (indice % 4) * 0.09;
  const href = waIntegrante(persona);
  const nombrePila = persona.nombre.split(" ")[0];
  const descripcion = [persona.profesion, persona.cargo.replaceAll(" | ", ", ")]
    .filter(Boolean)
    .join(", ");

  return (
    <motion.li
      initial="oculta"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        oculta: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 85, damping: 18, delay: retardo },
        },
      }}
      className="group flex flex-col"
    >
      {/* La foto hereda el estado de la tarjeta en vez de observar el scroll
          por su cuenta. Con dos observadores separados, en celular la tarjeta
          aparecía pero la foto quedaba recortada del todo, en blanco. */}
      <motion.div
        variants={{
          oculta: { clipPath: "inset(100% 0% 0% 0%)" },
          visible: {
            clipPath: "inset(0% 0% 0% 0%)",
            transition: { duration: 1.1, ease: SUAVE, delay: retardo + 0.05 },
          },
        }}
        className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-card)] bg-line"
      >
        <Image
          src={persona.foto}
          alt={`${persona.nombre}, ${descripcion}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-out-quint)] group-hover:scale-[1.06]"
        />

        {/* Velo y acceso a WhatsApp: solo en pantallas con mouse */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-burdeos-deep/85 via-burdeos-deep/20 to-transparent opacity-0 transition-opacity duration-500 group-focus-within:opacity-100 group-hover:opacity-100 lg:block"
        />
        <div className="absolute inset-x-0 bottom-0 hidden translate-y-3 p-5 opacity-0 transition-all duration-500 ease-[var(--ease-out-quint)] group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 lg:block">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Escribirle a ${nombrePila} por WhatsApp`}
            className="inline-flex items-center gap-2 bg-paper px-4 py-2.5 text-[0.7rem] font-medium tracking-[0.14em] text-burdeos-deep uppercase transition-colors duration-300 hover:bg-burdeos hover:text-paper"
          >
            <IconoWhatsApp className="h-3.5 w-3.5" />
            WhatsApp
          </a>
        </div>
      </motion.div>

      <div className="mt-5">
        <h3 className="font-display text-lg leading-snug font-medium tracking-[-0.01em]">
          {/* Subrayado que crece al pasar el mouse. Va por fondo y no por
              borde, así acompaña al nombre aunque ocupe dos líneas. */}
          <span className="bg-[linear-gradient(var(--color-burdeos),var(--color-burdeos))] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-[var(--ease-out-quint)] group-hover:bg-[length:100%_1px]">
            {persona.nombre}
          </span>
        </h3>

        {persona.profesion && (
          <p className="mt-1.5 text-sm text-muted">{persona.profesion}</p>
        )}

        <p
          className={cn(
            "text-sm font-medium text-burdeos",
            persona.profesion ? "mt-0.5" : "mt-1.5",
          )}
        >
          {persona.cargo.split(" | ").map((parte, k, partes) => (
            <Fragment key={k}>
              {parte}
              {k < partes.length - 1 && (
                <span aria-hidden="true" className="mx-1.5 text-grey">
                  ·
                </span>
              )}
            </Fragment>
          ))}
        </p>

        {/* Sin mouse: el acceso a WhatsApp va a la vista */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Escribirle a ${nombrePila} por WhatsApp`}
          className="mt-3 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-burdeos lg:hidden"
        >
          <IconoWhatsApp className="h-4 w-4 text-burdeos" />
          {persona.telefono}
        </a>
      </div>
    </motion.li>
  );
}
