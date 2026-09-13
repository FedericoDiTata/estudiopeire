"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import IconoWhatsApp from "./IconoWhatsApp";
import CargoIntegrante from "./CargoIntegrante";
import { waIntegrante, type Integrante } from "@/lib/equipo";

const SUAVE = [0.22, 1, 0.36, 1] as const;

const sinSuscripcion = () => () => {};

type Props = {
  /** Integrantes que se recorren en la ventana, en orden. */
  personas: Integrante[];
  /** Posición de la integrante abierta, o null con la ventana cerrada. */
  indice: number | null;
  onCambiar: (indice: number) => void;
  onCerrar: () => void;
};

/**
 * Perfil completo de cada integrante, en una ventana sobre la página.
 *
 * Las biografías son largas para tarjetas de a cuatro por fila: en la
 * tarjeta quedan foto, nombre y cargo, y la historia de cada una se abre acá.
 * Se puede pasar a la siguiente sin cerrar, con los botones o con las
 * flechas del teclado.
 *
 * En compu la ventana tiene alto fijo, así no salta al pasar de una
 * biografía corta a una larga, y el texto se desplaza por dentro. En celular
 * ocupa toda la pantalla y la foto se recorta a lo ancho, para que la
 * biografía empiece sin tener que bajar.
 */
export default function PerfilIntegrante({
  personas,
  indice,
  onCambiar,
  onCerrar,
}: Props) {
  // El portal necesita el document: en el servidor no se dibuja nada.
  const enCliente = useSyncExternalStore(
    sinSuscripcion,
    () => true,
    () => false,
  );
  if (!enCliente) return null;

  return createPortal(
    <AnimatePresence>
      {indice !== null && (
        <Ventana
          key="perfil"
          personas={personas}
          indice={indice}
          onCambiar={onCambiar}
          onCerrar={onCerrar}
        />
      )}
    </AnimatePresence>,
    document.body,
  );
}

function Ventana({
  personas,
  indice,
  onCambiar,
  onCerrar,
}: Omit<Props, "indice"> & { indice: number }) {
  const reducido = useReducedMotion();
  const ventanaRef = useRef<HTMLDivElement>(null);
  const cerrarRef = useRef<HTMLButtonElement>(null);
  const cuerpoRef = useRef<HTMLDivElement>(null);
  const textoRef = useRef<HTMLDivElement>(null);

  const persona = personas[indice];
  const total = personas.length;
  const anterior = (indice - 1 + total) % total;
  const siguiente = (indice + 1) % total;
  const nombrePila = persona.nombre.split(" ")[0];

  // Mientras está abierta, la página de atrás no se mueve. Lenis ignora la
  // ventana por el data-lenis-prevent, así que alcanza con cortar el scroll
  // del documento.
  useEffect(() => {
    const html = document.documentElement;
    const overflowPrevio = html.style.overflow;
    html.style.overflow = "hidden";
    cerrarRef.current?.focus({ preventScroll: true });
    return () => {
      html.style.overflow = overflowPrevio;
    };
  }, []);

  // Escape cierra, las flechas cambian de persona y el tabulador no se escapa
  // de la ventana.
  useEffect(() => {
    function alTeclear(e: KeyboardEvent) {
      if (e.key === "Escape") return onCerrar();
      if (e.key === "ArrowRight") return onCambiar(siguiente);
      if (e.key === "ArrowLeft") return onCambiar(anterior);
      if (e.key !== "Tab" || !ventanaRef.current) return;

      const enfocables = ventanaRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      const primero = enfocables[0];
      const ultimo = enfocables[enfocables.length - 1];
      const adentro = ventanaRef.current.contains(document.activeElement);

      if (!adentro || (e.shiftKey && document.activeElement === primero)) {
        e.preventDefault();
        (e.shiftKey ? ultimo : primero).focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    }

    document.addEventListener("keydown", alTeclear);
    return () => document.removeEventListener("keydown", alTeclear);
  }, [anterior, siguiente, onCambiar, onCerrar]);

  // Cada perfil empieza desde arriba.
  useEffect(() => {
    cuerpoRef.current?.scrollTo({ top: 0 });
    textoRef.current?.scrollTo({ top: 0 });
  }, [indice]);

  return (
    <motion.div
      data-lenis-prevent
      className="fixed inset-0 z-[60] flex justify-center md:items-center md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: SUAVE }}
    >
      {/* Un clic afuera cierra */}
      <div
        aria-hidden="true"
        onClick={onCerrar}
        className="absolute inset-0 bg-ink/75"
      />

      <motion.div
        ref={ventanaRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="perfil-nombre"
        initial={reducido ? { opacity: 0 } : { opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reducido ? { opacity: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.55, ease: SUAVE }}
        className="relative w-full overflow-hidden bg-paper md:max-w-4xl md:rounded-[var(--radius-card)] md:shadow-[0_40px_120px_-30px_rgba(14,14,12,0.6)]"
      >
        <button
          ref={cerrarRef}
          type="button"
          onClick={onCerrar}
          aria-label="Cerrar"
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 text-ink shadow-[var(--shadow-card)] transition-colors duration-300 hover:bg-burdeos hover:text-paper"
        >
          <X className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
        </button>

        {/* En celular desplaza toda la ventana; en compu, solo el texto */}
        <div
          ref={cuerpoRef}
          className="flex h-full flex-col overflow-y-auto overscroll-contain md:h-[min(88svh,44rem)] md:flex-row md:overflow-hidden"
        >
          <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-line md:aspect-auto md:w-[42%]">
            <AnimatePresence initial={false}>
              <motion.div
                key={persona.slug}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: SUAVE }}
              >
                <Image
                  src={persona.foto}
                  alt={persona.nombre}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-[50%_22%] md:object-center"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            ref={textoRef}
            className="flex min-h-0 flex-1 flex-col md:overflow-y-auto md:overscroll-contain"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={persona.slug}
                initial={reducido ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: SUAVE }}
                className="flex-1 px-6 pt-8 pb-10 sm:px-8 md:px-10 md:pt-12"
              >
                <span aria-hidden="true" className="block h-0.5 w-10 bg-burdeos" />
                <h2
                  id="perfil-nombre"
                  className="mt-5 pr-10 font-display text-3xl leading-[1.1] font-light tracking-[-0.02em] md:text-[2.1rem]"
                >
                  {persona.nombre}
                </h2>

                {persona.profesion && (
                  <p className="mt-3 text-sm text-muted">{persona.profesion}</p>
                )}
                <CargoIntegrante
                  cargo={persona.cargo}
                  className={`text-sm font-medium text-burdeos ${
                    persona.profesion ? "mt-0.5" : "mt-3"
                  }`}
                />

                <div className="mt-7 space-y-4 text-[0.97rem] leading-relaxed text-muted">
                  {persona.bio.map((parrafo, k) => (
                    <p key={k}>{parrafo}</p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* El degradé de arriba avisa que el texto sigue por debajo */}
            <div className="sticky bottom-0 z-10 flex items-center justify-between gap-4 border-t border-line bg-paper px-6 py-4 before:pointer-events-none before:absolute before:inset-x-0 before:bottom-full before:h-10 before:bg-gradient-to-t before:from-paper before:to-transparent sm:px-8 md:px-10">
              <a
                href={waIntegrante(persona)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-burdeos px-5 py-3 text-xs font-medium tracking-[0.14em] text-paper uppercase transition-colors duration-300 hover:bg-burdeos-deep"
              >
                <IconoWhatsApp className="h-4 w-4" />
                Escribirle a {nombrePila}
              </a>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onCambiar(anterior)}
                  aria-label={`Anterior: ${personas[anterior].nombre}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-burdeos hover:text-burdeos"
                >
                  <ChevronLeft className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onCambiar(siguiente)}
                  aria-label={`Siguiente: ${personas[siguiente].nombre}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-burdeos hover:text-burdeos"
                >
                  <ChevronRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
