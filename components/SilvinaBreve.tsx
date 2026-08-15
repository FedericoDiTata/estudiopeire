import Link from "next/link";
import Reveal from "./Reveal";
import Placeholder from "./Placeholder";
import { LOREM_MEDIO, LOREM_CORTO } from "@/lib/placeholder";

/**
 * Presentación breve en la home. La versión completa vive en El Estudio, y
 * «Quiénes somos» es una sección propia de esa página: acá no se repite.
 *
 * Biografía de relleno: matrícula, formación y trayectoria las define el
 * estudio.
 */
export default function SilvinaBreve() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <Placeholder ratio="aspect-[4/5]" etiqueta="Foto de Silvina" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[0.7rem] font-medium tracking-[0.28em] text-burdeos uppercase">
            Al frente del estudio
          </p>

          <h2 className="mt-4 font-display text-3xl leading-[1.1] font-light tracking-[-0.02em] sm:text-4xl">
            Silvina Peiré
          </h2>

          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>{LOREM_MEDIO}</p>
            <p>{LOREM_CORTO}</p>
          </div>

          <Link
            href="/estudio"
            className="group mt-8 inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-burdeos uppercase"
          >
            Conocer el estudio
            <span
              aria-hidden="true"
              className="transition-transform duration-300 ease-[var(--ease-out-quint)] group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
