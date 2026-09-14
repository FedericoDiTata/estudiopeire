"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import IconoWhatsApp from "./IconoWhatsApp";
import CargoIntegrante from "./CargoIntegrante";
import PerfilIntegrante from "./PerfilIntegrante";
import { EQUIPO, waIntegrante, type Integrante } from "@/lib/equipo";
import { cn } from "@/lib/utils";

const SUAVE = [0.22, 1, 0.36, 1] as const;

// Quien ya tiene su biografía en una sección de la página no se repite en la
// ventana: su tarjeta lleva a esa sección y anterior y siguiente la saltean.
const CON_VENTANA = EQUIPO.filter((persona) => !persona.ancla);

/**
 * Tarjetas del equipo.
 *
 * Entrada: cada tarjeta sube con resorte y la foto se descubre de abajo hacia
 * arriba, escalonadas de a cuatro, que es la cantidad por fila en compu.
 *
 * Toda la tarjeta abre el perfil con la biografía completa. Con mouse, al
 * pasar por encima la foto se acerca, sube un velo vino con «Ver perfil» y el
 * acceso a WhatsApp, y el nombre se subraya. En pantallas táctiles no hay
 * velo: el botón de WhatsApp queda siempre a la vista sobre la foto.
 *
 * En celular van de a dos: de a una, el equipo solo ocupaba casi 5.000 px.
 */
export default function TarjetasEquipo({ className }: { className?: string }) {
  const [abierta, setAbierta] = useState<number | null>(null);
  const disparadores = useRef<(HTMLElement | null)[]>([]);
  // Al cerrar, el foco vuelve a la tarjeta desde la que se abrió.
  const origen = useRef(0);

  const cerrar = useCallback(() => {
    setAbierta(null);
    disparadores.current[origen.current]?.focus({ preventScroll: true });
  }, []);

  return (
    <>
      <ul
        className={cn(
          "grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-4",
          className,
        )}
      >
        {EQUIPO.map((persona, i) => (
          <Tarjeta
            key={persona.slug}
            persona={persona}
            indice={i}
            onAbrir={() => {
              origen.current = i;
              setAbierta(CON_VENTANA.indexOf(persona));
            }}
            disparadorRef={(el) => {
              disparadores.current[i] = el;
            }}
          />
        ))}
      </ul>

      <PerfilIntegrante
        personas={CON_VENTANA}
        indice={abierta}
        onCambiar={setAbierta}
        onCerrar={cerrar}
      />
    </>
  );
}

function Tarjeta({
  persona,
  indice,
  onAbrir,
  disparadorRef,
}: {
  persona: Integrante;
  indice: number;
  onAbrir: () => void;
  disparadorRef: (el: HTMLElement | null) => void;
}) {
  const retardo = (indice % 4) * 0.09;
  const href = waIntegrante(persona);
  const nombrePila = persona.nombre.split(" ")[0];
  const descripcion = [persona.profesion, persona.cargo.replaceAll(" | ", ", ")]
    .filter(Boolean)
    .join(", ");

  // El disparador se estira sobre toda la tarjeta: foto, nombre y cargo
  // abren el perfil.
  const claseDisparador =
    "cursor-pointer text-left outline-none after:absolute after:inset-0 after:z-[1] after:rounded-[var(--radius-card)] focus-visible:after:ring-2 focus-visible:after:ring-burdeos focus-visible:after:ring-offset-4 focus-visible:after:ring-offset-paper";

  // Subrayado que crece al pasar el mouse. Va por fondo y no por borde, así
  // acompaña al nombre aunque ocupe dos líneas.
  const nombre = (
    <span className="bg-[linear-gradient(var(--color-burdeos),var(--color-burdeos))] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-[var(--ease-out-quint)] group-hover:bg-[length:100%_1px]">
      {persona.nombre}
    </span>
  );

  return (
    <motion.li
      initial="oculta"
      whileInView="visible"
      viewport={{ once: true, margin: "100% 0px -18% 0px" }}
      variants={{
        oculta: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 85, damping: 18, delay: retardo },
        },
      }}
      className="group relative flex flex-col"
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
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-out-quint)] group-hover:scale-[1.06]"
        />
      </motion.div>

      {/* Velo y accesos. Va fuera de la foto para quedar por encima del
          disparador que cubre la tarjeta: el clic en WhatsApp no abre el
          perfil. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] aspect-[3/4] overflow-hidden rounded-[var(--radius-card)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-burdeos-deep/85 via-burdeos-deep/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:opacity-100"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-2.5 transition-all duration-500 ease-[var(--ease-out-quint)] sm:p-5 [@media(hover:hover)]:translate-y-3 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:translate-y-0 [@media(hover:hover)]:group-focus-within:opacity-100">
          <span
            aria-hidden="true"
            className="hidden text-[0.75rem] font-medium tracking-[0.14em] text-paper uppercase [@media(hover:hover)]:inline"
          >
            Ver perfil
          </span>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Escribirle a ${nombrePila} por WhatsApp`}
            className="pointer-events-auto ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-paper text-burdeos-deep shadow-[var(--shadow-card)] transition-colors duration-300 hover:bg-burdeos hover:text-paper sm:h-10 sm:w-10"
          >
            <IconoWhatsApp className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mt-3 sm:mt-5">
        <h3 className="font-display text-base leading-snug font-medium tracking-[-0.01em] sm:text-lg">
          {persona.ancla ? (
            <a
              ref={disparadorRef}
              href={`#${persona.ancla}`}
              aria-label={`Ver la biografía de ${persona.nombre}`}
              className={claseDisparador}
            >
              {nombre}
            </a>
          ) : (
            <button
              ref={disparadorRef}
              type="button"
              onClick={onAbrir}
              aria-haspopup="dialog"
              aria-label={`Ver el perfil de ${persona.nombre}`}
              className={claseDisparador}
            >
              {nombre}
            </button>
          )}
        </h3>

        {persona.profesion && (
          <p className="mt-1 text-xs text-muted sm:mt-1.5 sm:text-sm">
            {persona.profesion}
          </p>
        )}

        <CargoIntegrante
          cargo={persona.cargo}
          className={cn(
            "text-xs font-medium text-burdeos sm:text-sm",
            persona.profesion ? "mt-0.5" : "mt-1 sm:mt-1.5",
          )}
        />
      </div>
    </motion.li>
  );
}
