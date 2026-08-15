import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

/**
 * Presentación breve en la home. La versión completa vive en El Estudio.
 * REVISAR: matrícula, formación y años de ejercicio los tiene que confirmar
 * el estudio. Hasta entonces no se afirma ningún dato que no esté publicado.
 */
export default function SilvinaBreve() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/img/estudio_peire-homepage-background.jpg"
              alt="Silvina Peiré en el estudio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[0.7rem] font-medium tracking-[0.28em] text-burdeos uppercase">
            Quiénes somos
          </p>

          <h2 className="mt-4 font-display text-3xl leading-[1.1] font-light tracking-[-0.02em] sm:text-4xl">
            Silvina Peiré
          </h2>

          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>
              Abogada especializada en derecho inmobiliario y sucesiones. Trabaja
              con particulares que necesitan resolver una herencia y con
              inmobiliarias, arquitectos y desarrolladores que necesitan que
              alguien revise los papeles antes de firmar.
            </p>
            <p>
              Además de los casos del estudio, da charlas y capacitaciones sobre
              derecho inmobiliario para estudiantes, profesionales y empresas.
            </p>
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
