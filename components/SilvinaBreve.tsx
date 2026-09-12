import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { LOREM_MEDIO, LOREM_CORTO } from "@/lib/placeholder";

/**
 * Presentación breve en la home. La versión completa vive en El Estudio, y
 * «Quiénes somos» es una sección propia de esa página: acá no se repite.
 *
 * Retrato de la sesión de septiembre de 2026. La biografía sigue de relleno
 * hasta que ella la defina.
 */
export default function SilvinaBreve() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/img/equipo/silvina-peire-4x5.webp"
              alt="Silvina Peiré en el estudio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span aria-hidden="true" className="block h-0.5 w-12 bg-burdeos" />

          <h2 className="mt-6 font-display text-3xl leading-[1.1] font-light tracking-[-0.02em] sm:text-4xl">
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
